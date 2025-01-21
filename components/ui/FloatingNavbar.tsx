"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const FloatingNavbar = ({
  navItems,
  className,
  onLanguageChange,
  currentLanguage,
}: {
  navItems: {
    name: string;
    link: string;
    // icon?: JSX.Element;
  }[];
  className?: string;
  onLanguageChange: () => void;
  currentLanguage: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full fixed z-[5000] top-0 inset-x-0 mx-auto py-5 rounded-lg border items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(10px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "0",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}>
        {/* <button
          onClick={onLanguageChange}
          className="font-medium relative text-black dark:text-white dark:hover:text-blue">
          <span>{currentLanguage === "FR" ? "EN" : "FR"}</span>
        </button> */}
        <div className="flex items-center justify-center w-full sm:gap-5 gap-2">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex tracking-wider text-white  hover:text-lightblue-200"
              )}>
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm sm:text-base !cursor-pointer">
                {navItem.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
