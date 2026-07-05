import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant incremental progress to simulate assets loading
    const duration = 2400; // 2.4 seconds total load
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsDone(true), 400); // Small pause at 100%
          return 100;
        }
        return Math.min(100, prev + step + Math.random() * 2.5);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black font-sans select-none"
          id="luxury-loader"
        >
          {/* Subtle Aurora gold light effect in center background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="h-[300px] w-[300px] rounded-full bg-gold/10 blur-[80px] animate-slow-pulse" />
          </div>

          <div className="relative flex flex-col items-center max-w-md px-6 text-center">
            
            {/* Logo Image */}
            <div className="relative mb-8 h-20 w-20 flex items-center justify-center">
              <motion.img
                src="/assets/logo.jpg"
                alt="LYTC Logo"
                className="h-20 w-20 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* Brand Titles with Staggered Character Reveal or Opacity */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 text-center"
            >
              <h1 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-[0.35em] text-white">
                LYTC
              </h1>
              <span className="block font-mono text-[9px] uppercase tracking-widest text-gold font-semibold">
                LYTC Hospitality Partners
              </span>
            </motion.div>

            {/* Micro-credential status text revealing based on load percentage */}
            <div className="h-6 mt-8 overflow-hidden relative w-full flex justify-center">
              <AnimatePresence mode="wait">
                {progress < 30 ? (
                  <motion.span
                    key="p1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-ivory/60 font-mono tracking-wider"
                  >
                    تهيئة محرك الحجز المباشر السويسري...
                  </motion.span>
                ) : progress < 65 ? (
                  <motion.span
                    key="p2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-ivory/60 font-mono tracking-wider"
                  >
                    بناء الهوية الرقمية والمسارات السينمائية...
                  </motion.span>
                ) : progress < 90 ? (
                  <motion.span
                    key="p3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-ivory/60 font-mono tracking-wider"
                  >
                    تحسين الامتثال لسرعة العرض والاستجابة السحابية...
                  </motion.span>
                ) : (
                  <motion.span
                    key="p4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.9, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] text-gold font-mono tracking-wider flex items-center gap-1"
                  >
                    <Sparkles size={10} className="animate-spin" />
                    اكتمال السيادة والضيافة الرقمية الفاخرة
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Monospace Progress percentage counter */}
            <div className="mt-10 font-mono text-xs text-gold/50 flex items-center gap-1.5 justify-center">
              <span className="inline-block tracking-widest font-semibold text-lg text-gold text-right w-12">
                {Math.round(progress)}%
              </span>
              <div className="h-0.5 w-32 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
