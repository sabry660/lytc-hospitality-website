import React, { useState, useEffect, useRef } from "react";
import { CASE_STUDIES } from "../data";
import { Star, MapPin, ArrowRight, ArrowLeft, Trophy, Quote, Sparkles, AlertCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CinematicTitle from "./CinematicTitle";

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left");
  const [isCurtainActive, setIsCurtainActive] = useState(false);

  const nextStudy = () => {
    setSlideDirection("left");
    triggerCurtainChange(() => {
      setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    });
  };

  const prevStudy = () => {
    setSlideDirection("right");
    triggerCurtainChange(() => {
      setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
    });
  };

  // Helper to trigger high-quality sliding curtain transition
  const triggerCurtainChange = (updateStateFn: () => void) => {
    setIsCurtainActive(true);
    setTimeout(() => {
      updateStateFn();
    }, 400); // Trigger index switch exactly at the curtain's peak coverage
    setTimeout(() => {
      setIsCurtainActive(false);
    }, 900);
  };

  const current = CASE_STUDIES[currentIndex];

  return (
    <section className="bg-dark-bg py-24 text-ivory border-t border-white/5 font-sans relative overflow-hidden" id="success-stories">
      
      {/* Background ambient golden aura */}
      <div className="absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-right">
            <div className="flex items-center gap-2 text-gold justify-start flex-row-reverse text-right">
              <Trophy size={14} className="text-gold animate-drift" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">محفظة نجاح شركائنا في الخليج</span>
            </div>
            <CinematicTitle
              text="شراكات حقيقية لمواجهة هيمنة المنصات"
              className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white inline-block text-right w-full"
            />
          </div>

          {/* Navigation Arrows for RTL layout */}
          <div className="flex gap-3 justify-end">
            <button
              onClick={prevStudy}
              className="rounded-full border border-white/10 bg-[#0E0E0E] hover:border-gold/50 hover:text-gold p-3.5 transition-all duration-300 cursor-pointer"
              aria-label="الحالة السابقة"
            >
              <ArrowRight size={16} />
            </button>
            <button
              onClick={nextStudy}
              className="rounded-full border border-white/10 bg-[#0E0E0E] hover:border-gold/50 hover:text-gold p-3.5 transition-all duration-300 cursor-pointer"
              aria-label="الحالة التالية"
            >
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>

        {/* Cinematic Case Study Card Frame */}
        <div className="relative rounded-2xl border border-white/5 bg-gradient-to-br from-[#0A0A0A] to-black overflow-hidden shadow-2xl p-6 md:p-12 min-h-[500px]">
          
          {/* CURTAIN SLIDE OVERLAY (Awwwards reveal transition) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isCurtainActive ? 1 : 0 }}
            style={{ originX: slideDirection === "left" ? 0 : 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-gold z-[40] pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: slideDirection === "left" ? -15 : 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection === "left" ? 15 : -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 lg:grid-cols-12 items-start text-right"
            >
              
              {/* Left side: Image Reveal Mask & Stats */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Image container with scale hover */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/3] shadow-xl group">
                  <motion.img
                    src={current.image}
                    alt={current.hotelName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-40" />
                  
                  <div className="absolute top-4 right-4 rounded-full bg-black/75 backdrop-blur px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5 border border-gold/20">
                    <MapPin size={8} />
                    <span>{current.location}</span>
                  </div>
                </div>

                {/* Hotel Rating Card */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="text-right">
                    <h3 className="font-serif text-lg font-bold text-white">{current.hotelName}</h3>
                    <p className="text-[10px] font-mono text-ivory/40 uppercase mt-0.5 tracking-wider">{current.category} • {current.country}</p>
                  </div>
                  <div className="flex items-center gap-0.5 text-gold text-xs">
                    {Array.from({ length: current.stars }).map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                    <span className="font-mono text-[10px] text-ivory/40 mr-1.5 font-bold">٥.٠</span>
                  </div>
                </div>
              </div>

              {/* Right side: Detailed narrative & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 rounded-xl border border-red-500/5 bg-red-500/[0.01] p-4">
                    <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest block font-bold flex items-center gap-1 justify-start flex-row-reverse">
                      <AlertCircle size={10} />
                      التحدي والوضع السابق:
                    </span>
                    <p className="text-xs text-ivory/70 leading-relaxed font-sans">{current.challenge}</p>
                  </div>

                  <div className="space-y-2 rounded-xl border border-gold/10 bg-gold/[0.01] p-4">
                    <span className="font-mono text-[10px] text-gold uppercase tracking-widest block font-bold flex items-center gap-1 justify-start flex-row-reverse">
                      <Sparkles size={10} />
                      منظومة لايتك المنفذة:
                    </span>
                    <p className="text-xs text-ivory/70 leading-relaxed font-sans">{current.solution}</p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 border-t border-white/5 pt-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-gold-muted uppercase tracking-widest block font-bold">المسار البرمجي المخصص:</span>
                    <p className="text-xs text-ivory/60 leading-relaxed font-sans">{current.implementation || "بناء خوادم سحابية مخصصة، دعم منافذ الدفع السريع، دمج مع برمجيات الفنادق."}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-green-400 uppercase tracking-widest block font-bold">أثر الميزانية والصيانة التشغيلية:</span>
                    <p className="text-xs text-ivory/60 leading-relaxed font-sans">{current.results || "استرداد تام ومستدام للسيادة الفندقية الرقمية مع ترشيد النفقات التشغيلية."}</p>
                  </div>
                </div>

                {/* Metrics Blocks */}
                <div className="border-t border-white/5 pt-6">
                  <span className="font-mono text-[10px] text-ivory/40 uppercase tracking-widest block mb-4 font-bold">الأثر المالي الفعلي والموثق:</span>
                  
                  <div className="grid gap-4 sm:grid-cols-3">
                    {current.metrics.map((m, i) => (
                      <div key={i} className="rounded-xl border border-white/5 bg-[#0D0D0D] p-4 text-center flex flex-col justify-between hover:border-gold/20 transition-all duration-300">
                        <span className="font-mono text-[10px] text-gold uppercase tracking-wider font-semibold">{m.label}</span>
                        <div className="font-serif text-2xl font-bold text-gold my-2">{m.value}</div>
                        <div className="flex justify-center gap-2 font-mono text-[9px] text-ivory/40 border-t border-white/5 pt-1.5 mt-1.5">
                          <span>قبل: {m.before}</span>
                          <span>➔</span>
                          <span className="text-green-400 font-bold">بعد: {m.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Elegant Quote block */}
                <div className="rounded-xl border border-gold/15 bg-gradient-to-l from-gold/[0.03] to-transparent p-5 relative overflow-hidden">
                  <Quote size={20} className="text-gold/10 absolute top-4 left-4" />
                  <blockquote className="font-serif text-xs md:text-sm italic text-white/90 leading-relaxed pl-6">
                    "{current.quote}"
                  </blockquote>
                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/5 justify-end">
                    <div className="font-mono text-[9px] text-ivory/40 uppercase font-semibold">{current.role}</div>
                    <span className="text-[10px] text-ivory/40 font-mono">•</span>
                    <div className="font-serif text-xs font-bold text-gold">{current.author}</div>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Carousel indicators with line filling */}
        <div className="flex justify-center gap-2.5 mt-8">
          {CASE_STUDIES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(index > currentIndex ? "left" : "right");
                triggerCurtainChange(() => setCurrentIndex(index));
              }}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentIndex ? "w-8 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`شريحة ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
