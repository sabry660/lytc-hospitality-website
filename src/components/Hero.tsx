import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Check, Sparkles, MessageSquare, PhoneCall, Calendar, Globe, Smartphone, QrCode, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CinematicTitle from "./CinematicTitle";
import MagneticButton from "./MagneticButton";

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToSuccess: () => void;
}

const CINEMATIC_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    caption: "الردهة الكبرى — فخامة الانطباع الأول المادي والرقمي."
  },
  {
    url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=85",
    caption: "الردهة اللامتناهية — تكامل ذكي يثري رفاهية الإقامة."
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    caption: "الجناح الملكي الخليجي — ضيافة مخصصة تلبي التطلعات النخبوية."
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=85",
    caption: "الغرفة الذكية والخدمة الفورية — طلبات بلمسة واحدة دون عناء."
  }
];

export default function Hero({ onOpenConsultation, onScrollToSuccess }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CINEMATIC_IMAGES.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  // Track cursor position to feed smooth Mouse Parallax layers on desktop
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth) - 0.5; // -0.5 to 0.5
      const normalizedY = (e.clientY / innerHeight) - 0.5; // -0.5 to 0.5
      setMouseOffset({ x: normalizedX, y: normalizedY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-ivory font-primary" id="hero-section">
      
      {/* Background Cinematic Slide Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={CINEMATIC_IMAGES[currentSlide].url}
              alt="فندق خليجي فاخر"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-black/30 to-black/60 z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/55 to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/55 to-transparent z-10" />
      </div>

      {/* Floating Header Branding */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto md:px-12">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt="LYTC Logo"
            className="h-11 w-11 object-contain"
          />
          <div>
            <span className="font-primary text-lg md:text-xl font-bold uppercase tracking-[0.25em] text-ivory block">LYTC</span>
            <span className="block font-primary text-[9px] uppercase tracking-widest text-gold">LYTC Hospitality Partners</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/201070853978"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/15 px-4 py-2 text-xs font-primary text-green-400 hover:bg-green-500/25 transition-all duration-300 animate-pulse"
          >
            <MessageSquare size={13} />
            <span>تواصل عاجل عبر الواتساب</span>
          </a>

        </div>
      </header>

      {/* THREE-DIMENSIONAL MOUSE PARALLAX DECORATIONS (Floating mockups) */}
      
      {/* Floating Guest Mobile Portal mockup (Bottom Left) */}
      <motion.div
        className="absolute bottom-24 left-10 lg:left-24 z-20 pointer-events-none hidden md:block"
        style={{
          x: mouseOffset.x * -45,
          y: mouseOffset.y * -45,
          rotate: -6,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        <div className="w-56 h-[340px] rounded-[2.5rem] border-[4px] border-gold/30 bg-black/95 p-4 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Mobile phone camera speaker notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-16 bg-black border border-white/5 rounded-full z-20 flex items-center justify-center">
            <span className="h-1 w-1 bg-white/25 rounded-full" />
          </div>

          <div className="flex justify-between items-center flex-row-reverse border-b border-white/5 pb-2 pt-1 text-[9px] text-ivory/50">
            <span className="font-primary text-[10px] text-gold font-bold">بوابة النزيل الذكية</span>
            <span>Villa 102</span>
          </div>

          <div className="my-auto space-y-2.5 text-right">
            <div className="flex items-center gap-1.5 justify-end text-[10px] text-white font-primary">
              <span>أهلاً بالضيف الكريم</span>
              <Heart size={8} className="text-gold fill-current animate-pulse" />
            </div>
            
            <div className="border border-gold/15 bg-gold/5 rounded-xl p-2 text-center text-[9px]">
              <span className="text-gold font-bold">طلب فطور فرنسي فاخر</span>
              <p className="text-[7px] text-ivory/40 mt-0.5">تم تلبية الطلب • ٣ دقائق</p>
            </div>

            <div className="border border-white/5 bg-white/[0.02] rounded-xl p-2 text-center text-[8px] space-y-1">
              <div className="flex justify-between flex-row-reverse text-ivory/40">
                <span>توصيل حقائب الغرفة</span>
                <span className="text-gold font-bold">نشط</span>
              </div>
              <div className="flex justify-between flex-row-reverse text-ivory/40">
                <span>خدمات الكونسيرج</span>
                <span className="text-white/60">مباشر</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-row-reverse pt-2 border-t border-white/5 text-[8px] text-ivory/40">
            <span>دعم Apple Pay و Mada</span>
            <span className="text-gold font-primary font-bold">ORYX</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Reception Dashboard mockup (Top Right) */}
      <motion.div
        className="absolute top-32 right-12 lg:right-28 z-20 pointer-events-none hidden lg:block"
        style={{
          x: mouseOffset.x * 35,
          y: mouseOffset.y * 35,
          rotate: 4,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        <div className="w-72 h-44 rounded-2xl border border-gold/20 bg-black/90 p-4 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
          
          <div className="flex justify-between items-center flex-row-reverse pb-2 border-b border-white/5">
            <span className="font-primary text-[9px] text-gold uppercase tracking-wider font-bold">الربط المركزي المباشر PMS</span>
            <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
          </div>

          <div className="space-y-2 mt-2 text-right">
            <div className="flex justify-between flex-row-reverse text-[9px] text-ivory/50">
              <span>الحجوزات المباشرة (اليوم):</span>
              <span className="text-green-400 font-bold font-primary">+٣٤,٥٠٠ ر.س</span>
            </div>
            <div className="flex justify-between flex-row-reverse text-[9px] text-ivory/50">
              <span>عمولات Booking الموفرة:</span>
              <span className="text-green-400 font-bold font-primary">٧,٦٢٠ ر.س</span>
            </div>
            <div className="flex justify-between flex-row-reverse text-[9px] text-ivory/50">
              <span>نسبة إشغال الغرف المباشر:</span>
              <span className="text-white font-primary font-bold">٨٤.٢٪</span>
            </div>
          </div>

          <div className="border-t border-white/5 pt-2 flex justify-between items-center flex-row-reverse text-[8px] text-ivory/30">
            <span>دعم فني فوري مستمر</span>
            <span>الرياض • دبي • المنامة</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-32 md:py-40 text-center flex flex-col items-center justify-center">
        
        {/* Top Mini-Badge with upward slow slide animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 rounded-full border border-gold/25 bg-black/75 px-4 py-1.5 text-xs text-gold font-primary uppercase tracking-widest mb-8 shadow-lg shadow-gold/5"
        >
          <Sparkles size={11} className="text-gold animate-drift" />
          <span>مستشار النمو الرقمي الأول للضيافة الراقية بالخليج</span>
        </motion.div>

        {/* Headline utilizing CinematicTitle (character split reveal) */}
        <div className="h-auto select-none">
          <CinematicTitle
            text="حول فندقك المستقل إلى تحفة رقمية فائقة العائد"
            as="h1"
            className="font-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight max-w-4xl text-white inline-block text-center w-full"
          />
        </div>

        {/* Subheadline with fade in delay */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-sm sm:text-base md:text-xl text-ivory/80 max-w-3xl leading-relaxed font-light"
        >
          مواقع حجز استثنائية لقطاع الضيافة النخبوية، بوابات ضيوف رقمية بالـ QR لتسريع التشغيل، تسيّد محركات البحث الإقليمية بالكامل، ودعم نمو شهري مباشر يضمن لك مضاعفة تدفق أرباحك الصافية.
        </motion.p>

        {/* CTA Buttons wrapped in Magnetic wrappers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-3xl z-30"
        >
          <MagneticButton
            onClick={onOpenConsultation}
            className="w-full sm:w-auto"
          >
            <div className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-lg bg-gold hover:bg-gold-light text-black px-8 py-4 text-xs font-primary tracking-widest font-bold transition-all duration-300 shadow-xl shadow-gold/20 cursor-pointer">
              <span>احجز جلسة استراتيجية مغلقة</span>
              <Calendar size={14} />
            </div>
          </MagneticButton>

          <a
            href="https://wa.me/201070853978"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-lg border border-green-500/35 bg-green-500/10 hover:bg-green-500/20 text-green-400 hover:text-green-300 px-8 py-4 text-xs font-primary tracking-widest font-bold transition-all duration-300 animate-pulse"
          >
            <MessageSquare size={14} className="text-green-400" />
            <span>تحدث مع الاستشاري عبر واتساب</span>
          </a>

          <MagneticButton
            onClick={onScrollToSuccess}
            className="w-full sm:w-auto"
          >
            <div className="w-full sm:w-auto rounded-lg border border-white/20 bg-white/[0.03] hover:border-gold/40 hover:bg-white/[0.08] hover:text-gold px-8 py-4 text-xs font-primary tracking-widest font-semibold transition-all duration-300 cursor-pointer">
              شاهد دراسات النجاح الخليجية
            </div>
          </MagneticButton>
        </motion.div>

        {/* Under-Hero Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl w-full border-t border-white/10 pt-8"
        >
          {[
            { label: "أخصائيو قطاع الضيافة", desc: "لا نصمم قوالب مكررة للشركات العامة" },
            { label: "شراكة نمو حقيقية", desc: "استشارات ومتابعة شهرية مع مجلس الإدارة" },
            { label: "الحجوزات المباشرة أولاً", desc: "إنهاء كامل للتبعية لـ Booking.com" },
            { label: "عربي وإنجليزي نخبي", desc: "كتابة إبداعية تعكس أصالة الرعاية والضيافة" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-right">
              <div className="flex items-center gap-2 text-gold justify-start flex-row-reverse">
                <Check size={14} className="text-gold shrink-0" />
                <span className="font-primary text-sm font-semibold tracking-wide text-ivory">{item.label}</span>
              </div>
              <span className="text-[11px] text-ivory/40 mt-1 font-primary">{item.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slide Index Selector */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
        <div className="flex gap-1.5">
          {CINEMATIC_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                currentSlide === i ? "w-6 bg-gold" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="font-primary text-[10px] text-gold uppercase tracking-widest hidden md:inline-block">
          {CINEMATIC_IMAGES[currentSlide].caption}
        </span>
      </div>
    </section>
  );
}
