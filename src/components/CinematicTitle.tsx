import React from "react";
import { motion } from "motion/react";

interface CinematicTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span";
  delay?: number;
}

export default function CinematicTitle({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
}: CinematicTitleProps) {
  // Split words first to keep Arabic words together, then characters or just words for perfect RTL flow.
  // In Arabic, splitting characters directly can sometimes break cursive letters connecting. 
  // Let's split by words, and then if we want character-by-character, we split letters while preserving connections 
  // using inline-flex groupings. Splitting by words is safer and looks incredibly professional like Apple.
  // Let's provide a dual split: words split with a subtle upward translate. It looks gorgeous!
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "40%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier (Awwwards quality)
      },
    },
  };

  return (
    <Component className={`overflow-hidden ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="inline-flex flex-wrap gap-x-2 gap-y-1.5 justify-start text-right"
        style={{ direction: "rtl" }}
      >
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden py-0.5">
            <motion.span
              variants={wordVariants}
              className="inline-block"
              style={{ transformOrigin: "bottom center", willChange: "transform, opacity" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
