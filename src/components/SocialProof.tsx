import React, { useEffect, useMemo, useRef, useState } from "react";
import { Star, ShieldCheck, MapPin, Award, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";
import ThreeDCard from "./ThreeDCard";
import CinematicTitle from "./CinematicTitle";

const TRUSTED_HOTELS = [
  { name: "رمال المها الفاخر", country: "عُمان", type: "Cliffs & Spa" },
  { name: "الجناح الملكي بجميرا", country: "دبي", type: "Luxury Suites" },
  { name: "قصر الملز التراثي", country: "الرياض", type: "Royal Heritage" },
  { name: "منتجع ريف اللؤلؤ", country: "البحرين", type: "Private Beach" },
  { name: "واحة الدوحة لاند مارك", country: "قطر", type: "Boutique Lagoon" }
];

const REVIEWS = [
  {
    name: "د. لينا الشريف",
    hotel: "فندق قصر الرمال",
    city: "الرياض",
    role: "مديرة الضيافة الفاخرة",
    text: "منذ بداية تعاوننا مع LYTC، أصبحنا نتلقى حجوزات مباشرة أكثر، وزاد معدل إشغال الأجنحة الفاخرة بنسبة ٢٧٪ خلال الربع الأول. تجربة تنفيذية سريعة ومتكاملة مع فريق احترافي يفهم هوية الفندق ويترجمها رقمياً بشكل فخم.",
  },
  {
    name: "أحمد الجناحي",
    hotel: "منتجع اللؤلؤة",
    city: "دبي",
    role: "رئيس العمليات",
    text: "خدمة LYTC منحت منتجعنا منصة رقمية متكاملة تعكس مستوى الضيافة وتزيد من ثقة ضيوفنا. التصميم سريع الاستجابة والأداء على الهواتف فاق توقعاتنا، خاصة مع ضيافة النزلاء من الخليج وأوروبا.",
  },
  {
    name: "سلمان العبيدي",
    hotel: "فندق البرج الذهبي",
    city: "المنامة",
    role: "مدير التسويق",
    text: "التحويل الرقمي الذي حصلنا عليه مع LYTC زاد ظهور الفندق محلياً وموسمياً، وجعلنا نتفاعل مع حجز الغرف الفندقية مباشرة دون الاعتماد على المنصات التقليدية. جودة المحتوى والصُور تميّزت بدقة وسرعة التنفيذ.",
  },
  {
    name: "د. مها الرشيدي",
    hotel: "منتجع شاطئ الغروب",
    city: "مسقط",
    role: "مديرة تجربة الضيوف",
    text: "تفاعل الضيوف أصبح أسرع والمراجعات على خرائط جوجل تحسنت بشكل واضح بعد دمج نظام التقييم الذكي. LYTC أعادت صياغة تجربة الحجز من أول نقطة اتصال رقمية إلى لحظة الوصول.",
  },
];

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalReviews = REVIEWS.length;

  const activeReview = useMemo(() => REVIEWS[activeIndex], [activeIndex]);

  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % totalReviews);
      }, 7000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, totalReviews]);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % totalReviews);
  };

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + totalReviews) % totalReviews);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) {
      return;
    }

    const delta = event.clientX - pointerStartX.current;
    if (delta > 50) {
      goPrev();
    }
    if (delta < -50) {
      goNext();
    }

    pointerStartX.current = null;
  };

  return (
    <section className="relative bg-dark-bg py-24 border-t border-white/5 font-primary overflow-hidden" id="social-proof">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-35">
        <div className="h-[400px] w-[600px] rounded-full bg-gold/5 blur-[120px] animate-slow-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-right">
        
        {/* Trusted By Logo Scroller Title */}
        <div className="text-center">
          <CinematicTitle
            text="ثقة راسخة لدى كبرى العلامات الفندقية والمنتجعات في الخليج"
            as="span"
            className="font-primary text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block text-center w-full"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-6 gap-x-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {TRUSTED_HOTELS.map((hotel, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <span className="font-primary text-lg sm:text-xl font-medium tracking-wider text-ivory/80">{hotel.name}</span>
                <span className="font-primary text-xs text-gold/80 mt-1 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={8} />
                  <span>{hotel.country}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Outcomes Matrix using ThreeDCard and Animated Counters */}
        <div className="mt-28 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-primary text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-primary font-bold">
                    <AnimatedCounter value={38} suffix="%+" />
                  </span>
                </div>
                <div className="mt-4 font-primary text-lg sm:text-xl text-ivory/90 leading-tight font-semibold">
                  متوسط نمو الحجوزات المباشرة
                </div>
              </div>
              <p className="mt-3 text-sm text-ivory/50 leading-relaxed font-primary">
                انتقال فوري ومباشر بعيداً عن عمولات منصات الحجز الأجنبية في أول 90 يوماً من التشغيل الفعلي للمنظومة.
              </p>
            </div>
          </ThreeDCard>

          {/* Card 2 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-primary text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-primary font-bold">
                    <AnimatedCounter value={60} suffix="%+" />
                  </span>
                </div>
                <div className="mt-4 font-primary text-lg sm:text-xl text-ivory/90 leading-tight font-semibold">
                  تسريع كفاءة الخدمات التشغيلية
                </div>
              </div>
              <p className="mt-3 text-sm text-ivory/50 leading-relaxed font-primary">
                بوابات النزلاء المخصصة بالـ QR تلغي احتياج الاتصال الهاتفي بفرق الاستقبال بنسبة قياسية.
              </p>
            </div>
          </ThreeDCard>

          {/* Card 3 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-primary text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-primary font-bold">
                    <AnimatedCounter value={4.9} decimals={1} suffix=" / 5" />
                  </span>
                </div>
                <div className="mt-4 font-primary text-lg sm:text-xl text-ivory/90 leading-tight font-semibold">
                  مؤشر رضا وتوصية الملاك
                </div>
              </div>
              <p className="mt-3 text-sm text-ivory/50 leading-relaxed font-primary">
                تقييم فائق من قبل مجالس إدارات المجموعات الفندقية والقصور التراثية والمنتجعات الكبرى بالرياض ودبي.
              </p>
            </div>
          </ThreeDCard>

          {/* Card 4 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-primary text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-primary font-bold">24/7</span>
                </div>
                <div className="mt-4 font-primary text-lg sm:text-xl text-ivory/90 leading-tight font-semibold">
                  دعم فني واستراتيجي متواصل
                </div>
              </div>
              <p className="mt-3 text-sm text-ivory/50 leading-relaxed font-primary">
                مراقبة مستمرة للأداء الأمني والسحابي للبنية التحتية عبر خوادم إقليمية موطنة بالكامل بالرياض وأبوظبي.
              </p>
            </div>
          </ThreeDCard>

        </div>

      

        {/* Reviews Carousel Block */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-[#090909] p-4 md:p-6 overflow-hidden">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-right">
            <div>
                <div className="font-primary text-xs sm:text-sm uppercase tracking-[0.3em] text-gold font-semibold mb-2 transition-all duration-300 ease-out hover:scale-[1.02] hover:tracking-[0.35em]">
                  آراء عملائنا المميزين
                </div>
                <h3 className="font-primary text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight transition-all duration-300 ease-out hover:scale-[1.02] hover:tracking-[0.02em]">
                  تقييمات مديري الفنادق والقيادات التشغيلية
                </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory transition-all duration-300 hover:border-gold/40 hover:bg-gold/10"
                aria-label="التالي"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ivory transition-all duration-300 hover:border-gold/40 hover:bg-gold/10"
                aria-label="السابق"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-6"
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <div className="min-h-[340px]">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.55 }}
                className="h-full flex flex-col justify-between gap-6"
              >
                <div className="space-y-6 text-right">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full border border-gold/20 bg-gold/10 flex items-center justify-center text-gold font-bold text-lg">
                          {activeReview.name.split(" ").slice(0, 2).map((word) => word[0]).join("")}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight transition-all duration-300 ease-out hover:scale-[1.02] hover:tracking-[0.01em]">
                            {activeReview.name}
                          </h4>
                          <p className="text-sm md:text-base text-ivory/60 leading-relaxed transition-all duration-300 ease-out hover:scale-[1.02] hover:tracking-[0.02em]">
                            {activeReview.role} · {activeReview.city}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.25em] font-semibold">
                        <span>5.0</span>
                        <span className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} size={14} className="text-gold" />
                          ))}
                        </span>
                      </span>
                    </div>

                    <div className="rounded-full border border-gold/20 bg-gold/5 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-gold font-semibold transition-all duration-300 ease-out hover:scale-[1.02] hover:tracking-[0.3em]">
                      {activeReview.hotel}
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-ivory/70 leading-relaxed transition-all duration-300 ease-out hover:scale-[1.02] hover:tracking-[0.02em]">
                    {activeReview.text}
                  </p>
                </div>

                <div className="grid grid-cols-10 gap-2 xl:gap-3">
                  {REVIEWS.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`عرض مراجعة ${item.name}`}
                      className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "col-span-3 bg-gold" : "col-span-1 bg-white/10 hover:bg-white/20"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
