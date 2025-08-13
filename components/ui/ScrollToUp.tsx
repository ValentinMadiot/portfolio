import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollUpButton({
  threshold = 350,
  className = "",
  animated = true,
}: {
  threshold?: number;
  className?: string;
  animated?: boolean;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // const base =
  //   "fixed right-4 -bottom-12 inline-flex p-1.5 text-xl transition-[bottom,transform] duration-400 hover:-translate-y-2" +
  //   " bg-[#4643e0] text-[#7aa0fa] shadow-[0_12px_24px_rgba(0,0,0,0.3)] z-[10] rounded-md";

  const base = [
    "fixed right-4 -bottom-12 inline-flex items-center justify-center",
    "p-1.5 text-xl transition-[bottom,transform,color] duration-400",
    "hover:-translate-y-2 hover:text-white",
    "bg-[#4643e0] text-[#7aa0fa]",
    "shadow-[0_12px_24px_rgba(0,0,0,0.3)] z-[10] rounded-md",
    animated ? "motion-safe:animate-bounce-scale" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      id="scroll-up"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo(0, 0)}
      className={`${base} ${visible ? "bottom-12" : ""} ${className}`}>
      {/* className={`${base} ${visible ? "bottom-12" : ""}`}> */}
      <AiOutlineArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
