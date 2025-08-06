"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
// Ces imports sont conservés pour correspondre à votre code original

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;
      // Affiche la barre si on est en haut ou qu’on remonte
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateVisibility);
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]",
            className
          )}>
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none">
            <div className="absolute z-0 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="relative z-10 px-6 sm:px-10 py-4 sm:py-5 space-x-4 flex items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white tracking-wider backdrop-blur-3xl gap-0 sm:gap-5">
              {navItems.map((navItem, idx) => {
                const content = (
                  <>
                    <span className="text-lg">{navItem.icon}</span>
                    <span className="text-sm !cursor-pointer">
                      {navItem.name}
                    </span>
                  </>
                );
                // Si l’item possède un onClick, on rend un bouton plutôt qu’un lien
                if (navItem.onClick) {
                  return (
                    <button
                      key={`btn-${idx}`}
                      onClick={navItem.onClick}
                      className={cn(
                        "relative items-center flex gap-1 text-white hover:text-lightblue-200 whitespace-nowrap cursor-pointer bg-transparent border-0 p-0 m-0"
                      )}>
                      {content}
                    </button>
                  );
                }
                // Sinon, on rend un lien normal
                return (
                  <Link
                    key={`link-${idx}`}
                    href={navItem.link}
                    className={cn(
                      "relative items-center flex gap-1 text-white hover:text-lightblue-200 whitespace-nowrap cursor-pointer"
                    )}>
                    {content}
                  </Link>
                );
              })}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
