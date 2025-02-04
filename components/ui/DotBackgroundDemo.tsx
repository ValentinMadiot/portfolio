import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.13] bg-dot-black/[0.12] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}
