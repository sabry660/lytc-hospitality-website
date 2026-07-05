import React, { useEffect, useRef } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply kinetic smooth scroll on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const html = document.documentElement;
    html.style.scrollBehavior = "auto"; // Prevent native scroll conflicts

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let isScrolling = false;

    const onWheel = (e: WheelEvent) => {
      // Prevent standard jumpy scroll
      e.preventDefault();

      // Cumulative scroll target
      targetScrollY += e.deltaY * 0.85;
      targetScrollY = Math.max(0, Math.min(targetScrollY, document.documentElement.scrollHeight - window.innerHeight));

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      // Interpolate current scroll position toward the target with 0.08 smoothing factor (silky momentum)
      const diff = targetScrollY - currentScrollY;
      currentScrollY += diff * 0.085;

      window.scrollTo(0, currentScrollY);

      if (Math.abs(diff) > 0.1) {
        requestAnimationFrame(updateScroll);
      } else {
        currentScrollY = targetScrollY;
        isScrolling = false;
      }
    };

    // Keep target in sync with any programmatic scrolling or scroll drags
    const onScroll = () => {
      if (!isScrolling) {
        targetScrollY = window.scrollY;
        currentScrollY = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      html.style.scrollBehavior = ""; // Reset
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative" style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
