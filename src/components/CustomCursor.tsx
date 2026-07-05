import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hoveredType, setHoveredType] = useState<"normal" | "button" | "slider" | "none">("none");
  const [hoveredText, setHoveredText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("select") ||
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer");

      const isSliderArea = target.closest("#success-stories") || target.closest(".cinematic-slider");

      if (isInteractive) {
        setHoveredType("button");
        // Check if there is specialized text requested
        const label = target.getAttribute("data-cursor-label");
        if (label) {
          setHoveredText(label);
        } else {
          setHoveredText("");
        }
      } else if (isSliderArea) {
        setHoveredType("slider");
        setHoveredText("اسحب");
      } else {
        setHoveredType("none");
        setHoveredText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Inner Pinpoint Gold Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-gold pointer-events-none z-[11000] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* Outer Interpolated Ring with Contextual States */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-gold/40 pointer-events-none z-[10999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-primary text-[8px] text-black font-bold uppercase tracking-widest bg-transparent select-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          width: hoveredType === "button" ? 48 : hoveredType === "slider" ? 64 : 28,
          height: hoveredType === "button" ? 48 : hoveredType === "slider" ? 64 : 28,
          backgroundColor: hoveredType === "button" ? "rgba(212, 175, 55, 0.15)" : hoveredType === "slider" ? "rgba(212, 175, 55, 0.9)" : "rgba(212, 175, 55, 0)",
          borderColor: hoveredType === "button" ? "rgba(212, 175, 55, 0.6)" : hoveredType === "slider" ? "rgba(212, 175, 55, 1)" : "rgba(212, 175, 55, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        <AnimatePresence>
          {hoveredText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className={hoveredType === "slider" ? "text-black text-[9px] font-semibold" : "text-gold text-[8px]"}
            >
              {hoveredText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
