import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

export default function ThreeDCard({ children, className = "", onClick, id }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Motion values for x/y mouse rotation offsets
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for rotation to avoid jitter (60 FPS)
  const springConfig = { damping: 25, stiffness: 180, mass: 0.4 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  // Sheen overlay position mapping
  const sheenX = useSpring(useTransform(x, [-0.5, 0.5], ["-20%", "120%"]), springConfig);
  const sheenY = useSpring(useTransform(y, [-0.5, 0.5], ["-20%", "120%"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Map mouse position to range [-0.5, 0.5]
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      id={id}
      className={`relative rounded-2xl transition-shadow duration-300 ${className}`}
      style={{
        perspective: 1000,
        willChange: "transform, box-shadow",
      }}
    >
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
      >
        {/* Dynamic Glass Shine Reflection Layer */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 70%)",
            left: sheenX,
            top: sheenY,
            width: "200%",
            height: "200%",
            transform: "translate(-50%, -50%) rotate(25deg)",
          }}
          animate={{ opacity: hovering ? 1 : 0 }}
        />

        {/* Outer Shadow glow expansion on hover */}
        <motion.div
          className="absolute inset-0 z-0 bg-gold/5 blur-xl rounded-2xl opacity-0 transition-opacity duration-500"
          animate={{ opacity: hovering ? 0.35 : 0 }}
        />

        {/* Content with preserve-3d context */}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-20 h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
