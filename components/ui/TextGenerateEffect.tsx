"use client";
import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

type TextGenerateProps = {
  words: string;
  className?: string;
  duration?: number; // en secondes par mot
  step?: number; // délai entre mots en ms
  blur?: boolean; // true = blur + fade, false = fade only
};

export default function TextGenerateEffectFast({
  words,
  className,
  duration = 0.5,
  step = 80,
  blur = true,
}: TextGenerateProps) {
  const parts = useMemo(
    () => (words ?? "").trim().split(/\s+/).filter(Boolean),
    [words]
  );

  if (!parts.length) return null;

  return (
    // key relance l'anim quand le texte change (traduction)
    <div
      key={words}
      className={cn(
        "font-bold my-5  text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl",
        className
      )}>
      <div className="leading-snug tracking-wide">
        {parts.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className={cn(
              blur ? "word-reveal" : "word-reveal-noblur",
              i > 3 ? "text-blue" : "dark:text-lightblue-100 text-black"
            )}
            style={
              {
                ["--tg-delay" as any]: `${i * step}ms`,
                ["--tg-duration" as any]: `${duration}s`,
              } as React.CSSProperties
            }>
            {w}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
