import React, { useState } from "react";
import { Search, Globe, LayoutGrid, CheckCircle, Smartphone, Heart, Star, RotateCcw, Award, ArrowLeft, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const JOURNEY_STEPS = [
  {
    phase: "01",
    title: "البحث في جوجل",
    englishTitle: "Google Search",
    icon: Search,
    desc: "يبحث المسافر ذو الملاءة المالية عن إقامة فاخرة، فيتصدر فندقك النتائج وخرائط جوجل بفضل سيادتنا الرقمية العضوية."
  },
  {
    phase: "02",
    title: "تصفح الموقع النخبوي",
    englishTitle: "Luxury Website",
    icon: Globe,
    desc: "يدخل الزائر موقعك المخصص فائق السرعة، فيبهره الرقي البصري والخطوط الأنيقة والمساحات البصرية التي تليق بعلامتك."
  },
  {
    phase: "03",
    title: "استعراض الأجنحة الفاخرة",
    englishTitle: "Suite Selection",
    icon: LayoutGrid,
    desc: "تصفح سينمائي عالي الدقة يستعرض جمال الغرف والفلل الفندقية مع عرض النوافذ والإطلالات والمزايا بطريقة تبعث الراحة."
  },
  {
    phase: "04",
    title: "الحجز المباشر الفوري",
    englishTitle: "Direct Reservation",
    icon: CheckCircle,
    desc: "يتم الحجز بأمان وخلال ثوانٍ معدودة عبر بوابات الدفع المحلية المتكاملة مثل مدى وأبل باي دون عمولات وسيطة."
  },
  {
    phase: "05",
    title: "بوابة الضيف الفورية",
    englishTitle: "Guest Portal",
    icon: Smartphone,
    desc: "بمجرد دخوله الغرفة، يمسح النزيل رمز QR ليجد أمامه بوابة خدمات متكاملة ترحب باسمه وتلبى طلباته بلمسة واحدة."
  },
  {
    phase: "06",
    title: "إقامة استثنائية هادئة",
    englishTitle: "Prestige Stay",
    icon: Award,
    desc: "يستمتع الضيف بضيافة حقيقية خالية من إزعاج رنين الهواتف أو تأخر الاستجابة لخدمات الغرف والصيانة."
  },
  {
    phase: "07",
    title: "التقييم الفوري التلقائي",
    englishTitle: "Smart Review",
    icon: Star,
    desc: "تحفز المنصة الضيف الذكي على تدوين تقييمه الإيجابي فورياً في خرائط جوجل ومواقع السياحة لتعزز تصنيفك الإقليمي."
  },
  {
    phase: "08",
    title: "النزيل الدائم والمخلص",
    englishTitle: "Repeat Guest",
    icon: RotateCcw,
    desc: "عبر برامج الولاء الرقمية والتواصل النخبوي المخصص، يصبح النزيل سفيراً لعلامتك ويعود للحجز المباشر مرة بعد مرة."
  }
];

export default function BookingJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-dark-bg py-24 text-ivory border-t border-white/5 relative overflow-hidden font-primary" id="booking-journey">
      {/* Background Mashrabiya Deco */}
      <div className="absolute inset-0 mashrabiya-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-primary text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            دورة حياة تجربة الضيف الفاخرة
          </span>
          <h2 className="mt-4 font-primary text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            مسار رحلة الحجز النخبوية <br />
            <span className="italic font-normal text-gold">من البحث العفوي إلى النزيل الوفي</span>
          </h2>
          <p className="mt-4 text-sm text-ivory/60 leading-relaxed font-light">
            دورة حجز متكاملة وخالية من الاحتكاك، تضمن تحويل رغبة السفر العادية إلى حجز مباشر كامل الربحية، وتصاحب النزيل طوال فترة إقامته لتضمن تكرار ولائه.
          </p>
        </div>

        {/* Visual Timeline Stepper */}
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 xl:grid-cols-8 relative border-t border-white/5 pt-12">
          {JOURNEY_STEPS.map((step, idx) => {
            const IconComp = step.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-5 rounded-xl border transition-all duration-500 cursor-pointer select-none flex flex-col justify-between min-h-[220px] ${
                  isActive
                    ? "border-gold bg-gold/[0.02] shadow-lg shadow-gold/5"
                    : "border-white/5 bg-white/[0.01] hover:border-white/15"
                }`}
              >
                {/* Horizontal flow line connector on large screen */}
                {idx < JOURNEY_STEPS.length - 1 && (
                  <div className="hidden xl:block absolute top-0 left-0 right-0 h-0.5 bg-white/5 group-hover:bg-gold/15 -translate-y-12 transition-colors" />
                )}

                {/* Node Badge */}
                <div className="flex items-center justify-between w-full">
                  <span className={`font-primary text-xs font-semibold ${isActive ? "text-gold" : "text-ivory/40"}`}>
                    {step.phase}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-colors ${
                    isActive ? "border-gold text-gold bg-gold/5" : "border-white/10 text-ivory/40 bg-white/[0.01]"
                  }`}>
                    <IconComp size={15} />
                  </div>
                </div>

                {/* Title and details */}
                <div className="space-y-1.5 mt-4">
                  <h3 className={`font-primary text-sm font-semibold transition-colors ${isActive ? "text-gold" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <span className="block font-primary text-[8px] text-ivory/30 uppercase tracking-widest leading-none">
                    {step.englishTitle}
                  </span>
                  <p className="text-[11px] text-ivory/50 leading-relaxed font-primary pt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Highlight panel for the active step */}
        <div className="mt-12 rounded-2xl border border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-gold">
              <span className="font-primary text-xs font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                المرحلة النشطة {JOURNEY_STEPS[activeStep].phase}
              </span>
              <span className="font-primary text-base font-semibold text-ivory">
                {JOURNEY_STEPS[activeStep].title} — {JOURNEY_STEPS[activeStep].englishTitle}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
              منظومة <strong>لايتك (LYTC)</strong> تضمن دقة وسلاسة فائقة في هذه المرحلة الحيوية. نحن نلغي كافة خيارات الخروج السريع وعوائق التحميل لنضمن بقاء الضيف ملتزماً بإتمام الحجز المباشر والاستمتاع بإقامته الملكية.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 rounded-lg border border-gold/30 hover:bg-gold hover:text-black text-gold px-6 py-3 text-xs font-primary font-bold tracking-wider transition-all duration-300 cursor-pointer"
          >
            <span>أريد هذه المنظومة لفندقي</span>
            <ArrowLeft size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}
