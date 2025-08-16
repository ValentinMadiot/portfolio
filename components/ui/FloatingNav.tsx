"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const useIsDesktop = (query = "(min-width: 1024px)") => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return isDesktop;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    href: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const isDesktop = useIsDesktop();
  const prefersReduced = useReducedMotion();

  const variants = {
    initial: (desktop: boolean) =>
      desktop
        ? { opacity: 0, y: -30, filter: "blur(6px)" } // depuis le haut
        : { opacity: 0, y: 100 }, // depuis le bas
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (desktop: boolean) =>
      desktop
        ? { opacity: 0, y: -40, scale: 0.98, filter: "blur(6px)" } // sortie desktop
        : { opacity: 0, y: 80 }, // sortie mobile
  };

  const timing = prefersReduced
    ? { duration: 0.01 }
    : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }; // ease-out douce

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          custom={isDesktop}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={timing}
          className={cn(
            "fixed z-[5000] inset-x-0 mx-auto max-w-fit",
            "bottom-3 top-auto lg:bottom-auto lg:top-5",
            "pb-[env(safe-area-inset-bottom)] md:pb-0",
            "rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            className
          )}>
          <div className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none pointer-events-auto">
            <div className="absolute z-0 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="relative z-10 flex items-center justify-center gap-7 sm:gap-9 rounded-full bg-slate-950 backdrop-blur-3xl text-white px-6 sm:px-8 py-3 sm:py-4 lg:py-7">
              {navItems.map((item, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={item.href}
                  className="flex flex-col lg:flex-row items-center gap-2 text-white hover:text-lightblue-200"
                  aria-label={item.name}
                  prefetch={false}>
                  <span className="text-2xl leading-none ">{item.icon}</span>
                  <span className="text-[0.8rem] sm:text-sm lg:text-lg leading-none max-[310px]:hidden">
                    {item.name}
                  </span>
                </Link>
              ))}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
