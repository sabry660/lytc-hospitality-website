import React, { useState, useEffect, useRef } from "react";
import { Search, Compass, Palette, Code, Rocket, TrendingUp, RefreshCw, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CinematicTitle from "./CinematicTitle";

const PROCESS_STEPS = [
  {
    phase: "٠١",
    title: "التشخيص والتدقيق المالي الرقمي",
    icon: Search,
    description: "نبدأ بتحليل الفواتير وعمولات الحجوزات المهدرة لـ Booking.com، وفحص مشكلات تباطؤ الموقع والظهور في الخرائط، ونعرض على مجلس إدارتكم تقريراً دقيقاً لفرص النمو العاجلة.",
    detail: "نستخرج تقارير الأرباح والخسائر المهدرة من واقع بيانات حجز الغرف الفعلية لديكم، لتمثيل التكلفة والبدائل بالأرقام القاطعة."
  },
  {
    phase: "٠٢",
    title: "صياغة استراتيجية النظام",
    icon: Compass,
    description: "نهيكل مسار حجز النزلاء المباشر، ونحدد الكلمات البحثية الأكثر ربحية بالخليج، ونرسم الهوية البصرية ونربط واجهات الـ PMS ومنافذ الدفع المحلية كمدى.",
    detail: "نصمم الهيكل المخصص للوصول إلى النزلاء الخليجيين والنخبة، مع رسم خريطة تدفق النزلاء الرقمية لتقليل حواجز إدخال البطاقات البنكية."
  },
  {
    phase: "٠٣",
    title: "التصميم الفاخر المخصص",
    icon: Palette,
    description: "تصميم متقن بمساحات فارغة مريحة وألوان مستوحاة من البيئة الخليجية وأسلوب يعكس هيبة فندقك المادي بدقة لضمان ترك انطباع نخبي أول.",
    detail: "نبتعد تماماً عن القوالب الجاهزة ونبني تجارب بصرية فريدة تحاكي ملمس الرخام، وتدفق الإضاءة، وفخامة الديكور المادي للفندق المستقل."
  },
  {
    phase: "٠٤",
    title: "التطوير البرمجي فائق السرعة",
    icon: Code,
    description: "نبني موقع فندقك وبوابة النزيل الفورية (QR) برمجياً من الصفر لضمان سرعة تحميل فائقة وتصفح مرن يستغرق أجزاء من الثانية.",
    detail: "سرعة تحميل موقعكم تبلغ أقل من ١ ثانية. كل تأخير بجزء من الثانية يكلف الفندق مئات الآلاف من الريالات السنوية بسبب خروج الزائر."
  },
  {
    phase: "٠٥",
    title: "التدشين والاختبار الشامل",
    icon: Rocket,
    description: "نربط خوادمك السحابية بمراكز محلية آمنة في الرياض/دبي، ونجري اختبارات حجز كاملة متكاملة لجميع بوابات الدفع لضمان عملية حجز سلسة دون أي أخطاء.",
    detail: "نخضع بوابات الدفع الفوري لاختبار ضغط هائل، ونختبر تكامل المزامنة مع برمجيات إدارة الفنادق PMS لضمان عدم حدوث تضارب في الغرف المباعة."
  },
  {
    phase: "٠٦",
    title: "التسويق وجذب النخبة",
    icon: TrendingUp,
    description: "نطلق حملات تهيئة محركات البحث (SEO) ليتصدر فندقك محلياً، ونستهدف بدقة الأحياء السكنية الفاخرة بالرياض، جدة، الدوحة، ودبي لإيجاد طلب دائم.",
    detail: "نستحوذ على صدارة الكلمات الفندقية الكبرى والفاخرة بمحركات البحث الخليجية، مما يقصي الحاجة للإعلانات المدفوعة تدريجياً."
  },
  {
    phase: "٠٧",
    title: "الاستشارة والتقييم الشهري",
    icon: RefreshCw,
    description: "نعقد جلسة شهرية مع ملاك وإدارة الفندق لمتابعة نمو العوائد الإجمالية، وترشيد أسعار الغرف المباشرة، وإضافة خدمات برمجية جديدة تزامناً مع توسع فندقك.",
    detail: "نعمل كشركاء نمو حقيقيين لمجلس الإدارة، ونحلل تطور مؤشر الحجز المباشر شهراً تلو الآخر لضمان الاستمرارية والسيادة المالية."
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
      }, 6500);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  const selectStep = (idx: number) => {
    setActiveStep(idx);
    setIsAutoPlaying(false); // Pause auto-rotation upon manual click
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
    setIsAutoPlaying(false);
  };

  const CurrentIcon = PROCESS_STEPS[activeStep].icon;

  return (
    <section className="bg-[#050505] py-24 text-ivory border-t border-white/5 font-sans relative overflow-hidden" id="process">
      {/* Decorative fine background matrix */}
      <div className="absolute inset-0 mashrabiya-overlay pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-right">
        
        {/* Header with split text anim */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
            دورة التشغيل والنمو المالي الرقمي المتكاملة
          </span>
          <CinematicTitle
            text="مسار شراكتنا الفندقية الملتزمة بالنتائج"
            className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white inline-block text-center w-full"
          />
          <p className="mt-4 text-xs sm:text-sm md:text-base text-ivory/60 leading-relaxed font-light">
            نحن نتكفل بكافة مفاصل التحول الرقمي لفندقك المستقل. لا داعي لتشتيت ذهن إدارة الفندق بين مطور معزول، ومصمم غير متخصص، ومسوق يطارد أرقاماً وهمية. نحن الشريك الواحد الموحد.
          </p>
        </div>

        {/* INTERACTIVE TIMELINE CONTAINER */}
        <div className="relative mb-16 select-none">
          
          {/* Timeline Horizontal Line / SVG Path Drawing */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 hidden md:block" />
          
          {/* Active growing path overlay */}
          <div 
            className="absolute top-1/2 right-0 h-[2px] bg-gradient-to-l from-gold to-gold-light -translate-y-1/2 hidden md:block transition-all duration-700 ease-out origin-right"
            style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          {/* Stepper Nodes */}
          <div className="relative flex flex-col md:flex-row-reverse justify-between items-center gap-6 md:gap-0">
            {PROCESS_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  
                  {/* Step Interactive Node */}
                  <button
                    onClick={() => selectStep(idx)}
                    className="group focus:outline-none cursor-pointer"
                  >
                    <motion.div
                      className={`h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-500 relative ${
                        isActive
                          ? "border-gold bg-black text-gold shadow-lg shadow-gold/30"
                          : isPassed
                          ? "border-gold/50 bg-gold/10 text-gold"
                          : "border-white/10 bg-[#0E0E0E] text-ivory/40 hover:border-gold/30 hover:text-gold"
                      }`}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Inner pulsing circle for active node */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-75" />
                      )}
                      
                      <span className="font-mono text-xs font-semibold">{step.phase}</span>
                    </motion.div>
                  </button>

                  {/* Micro-label under node */}
                  <span className={`hidden md:block absolute top-16 text-center text-[10px] font-semibold tracking-wide w-28 whitespace-normal leading-tight transition-colors duration-300 ${
                    isActive ? "text-gold font-bold" : "text-ivory/40"
                  }`}>
                    {step.title}
                  </span>

                </div>
              );
            })}
          </div>

        </div>

        {/* STEP DETAILS CARDS with Cross-fade & Auto ticking indicators */}
        <div className="relative mt-24 min-h-[300px] rounded-2xl border border-gold/10 bg-gradient-to-br from-[#0A0A0A] to-black p-8 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Subtle gold spotlight in corner */}
          <div className="absolute top-0 right-0 h-40 w-40 bg-radial from-gold/5 to-transparent rounded-full pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -15, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 15, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 md:grid-cols-12 items-center text-right"
            >
              
              {/* Icon / Meta info side */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start md:border-l md:border-white/5 md:pl-10 space-y-4">
                
                {/* Big Animated Icon */}
                <div className="h-20 w-20 rounded-2xl border border-gold/20 bg-gold/5 flex items-center justify-center text-gold relative shadow-xl shadow-black">
                  <CurrentIcon size={32} className="animate-drift" />
                  <span className="absolute -top-3 -left-3 font-mono text-[10px] text-gold-muted font-bold bg-[#141414] border border-gold/20 px-2.5 py-0.5 rounded-full shadow">
                    المرحلة {PROCESS_STEPS[activeStep].phase}
                  </span>
                </div>

                <div className="text-center md:text-right pt-2">
                  <span className="font-mono text-[10px] text-gold uppercase tracking-widest font-bold block">دليل الأثر</span>
                  <span className="text-xs text-ivory/50 mt-1 block font-sans">
                    {PROCESS_STEPS[activeStep].detail}
                  </span>
                </div>

              </div>

              {/* Text Narrative */}
              <div className="md:col-span-8 space-y-6 text-right flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 justify-start flex-row-reverse text-right mb-2">
                    <Sparkles size={14} className="text-gold" />
                    <span className="font-mono text-[10px] tracking-widest text-gold font-bold">مستندات التنفيذ العملي</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-ivory/70 leading-relaxed font-sans font-light">
                    {PROCESS_STEPS[activeStep].description}
                  </p>
                </div>

                {/* Stepper Navigation Buttons */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6 flex-row-reverse">
                  
                  {/* Visual auto-ticking timer indicator */}
                  <div className="flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />
                    <span className="font-mono text-[9px] text-gold uppercase tracking-wider font-bold">
                      {isAutoPlaying ? "عرض تسلسلي مستمر" : "عرض مخصص يدوي"}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handlePrev}
                      className="rounded-full border border-white/10 bg-white/5 hover:border-gold/30 hover:text-gold p-2.5 transition-all duration-300 cursor-pointer"
                      aria-label="المرحلة السابقة"
                    >
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="rounded-full border border-white/10 bg-white/5 hover:border-gold/30 hover:text-gold p-2.5 transition-all duration-300 cursor-pointer"
                      aria-label="المرحلة التالية"
                    >
                      <ChevronLeft size={14} />
                    </button>
                  </div>

                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
