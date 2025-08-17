"use client";
import { cn } from "@/lib/utils";
import React, { useLayoutEffect, useRef, useState } from "react";

// Stubs côté SSR (évite les crashs lors du rendu serveur)
let motion: any = {
  div: (props: any) => <div {...props} />,
};
let useAnimationFrame: any = () => {};
let useMotionTemplate: any =
  (strings: TemplateStringsArray, ...expr: any[]) =>
  () =>
    "";
let useMotionValue: any = (initial: number) => ({
  get: () => initial,
  set: () => {},
});
let useTransform: any = (source: any, mapFn: any) => ({
  get: () => mapFn(source.get()),
});

if (typeof window !== "undefined") {
  const fm = require("framer-motion");
  motion = fm.motion;
  useAnimationFrame = fm.useAnimationFrame;
  useMotionTemplate = fm.useMotionTemplate;
  useMotionValue = fm.useMotionValue;
  useTransform = fm.useTransform;
}

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[1px] overflow-hidden ",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex flex-col w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  // ⚠️ Utiliser <rect> (et pas <path>) pour rx/ry
  const geomRef = useRef<SVGGeometryElement | null>(null);
  const [totalLength, setTotalLength] = useState<number | null>(null);

  const progress = useMotionValue(0); // en unités "longueur", pas normalisé

  // Mesurer la longueur une fois que le rect est monté
  useLayoutEffect(() => {
    if (!geomRef.current) return;
    try {
      const len = geomRef.current.getTotalLength?.();
      if (Number.isFinite(len) && (len as number) > 0) {
        setTotalLength(len as number);
      } else {
        setTotalLength(null);
      }
    } catch {
      setTotalLength(null);
    }
  }, [rx, ry]); // si tu changes le rayon

  // Avancer le point le long du contour uniquement si on a une longueur valide
  useAnimationFrame((time: number) => {
    if (!totalLength) return;
    const pxPerMs = totalLength / duration;
    progress.set((time * pxPerMs) % totalLength);
  });

  // Mapping -> coordonnées uniquement quand la longueur est dispo
  const x = useTransform(progress, (val: number) => {
    if (!geomRef.current || !totalLength) return 0;
    try {
      return geomRef.current.getPointAtLength(val).x;
    } catch {
      return 0;
    }
  });

  const y = useTransform(progress, (val: number) => {
    if (!geomRef.current || !totalLength) return 0;
    try {
      return geomRef.current.getPointAtLength(val).y;
    } catch {
      return 0;
    }
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}>
        {/* Remplace le <path> vide par un <rect> plein viewport */}
        <rect
          ref={geomRef as any}
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          fill="none"
        />
      </svg>

      {/* Ne rend l’orbe animé que si on a une longueur utilisable */}
      {totalLength ? (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}>
          {children}
        </motion.div>
      ) : null}
    </>
  );
};
