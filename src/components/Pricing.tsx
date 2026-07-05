import React from "react";
import { Check, Sparkles, MessageSquare, ShieldCheck, ArrowLeft, ArrowUpRight, HelpCircle, X, Users, Compass, Laptop, Zap, Globe, LineChart, TrendingUp, PhoneCall, Award } from "lucide-react";
import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

interface PricingProps {
  onOpenConsultation: (packageName?: string) => void;
}

export default function Pricing({ onOpenConsultation }: PricingProps) {
  // Feature definition for comparison table
  const features = [
    { 
      key: "website", 
      name: "Luxury Website (الموقع الفاخر)", 
      detail: "موقع ويب مخصص يعكس الهوية الراقية للفندق مع واجهة حجز فائقة السلاسة." 
    },
    { 
      key: "seo", 
      name: "SEO (تحسين محركات البحث)", 
      detail: "تصدر نتائج البحث في المملكة والخليج لجذب النزلاء الباحثين عن الفخامة." 
    },
    { 
      key: "google_profile", 
      name: "Google Business Profile (الملف التجاري)", 
      detail: "تحسين كامل وحضور جغرافي دقيق على خرائط جوجل لسهولة الوصول المباشر." 
    },
    { 
      key: "portal", 
      name: "Guest Portal (بوابة النزيل)", 
      detail: "بوابة رقمية تفاعلية للنزلاء لطلب الخدمات والغسيل والمطاعم بضغطة زر." 
    },
    { 
      key: "marketing", 
      name: "Marketing (التسويق الفندقي)", 
      detail: "حملات إعلانية ذكية وتوجيه دقيق للميزانيات لتعظيم الحجوزات المباشرة." 
    },
    { 
      key: "dashboard", 
      name: "Hotel Dashboard (لوحة التحكم للفندق)", 
      detail: "لوحة موحدة لمراقبة حركة النزلاء، وتلقي الطلبات، وإدارة المحتوى فورا." 
    },
    { 
      key: "analytics", 
      name: "Analytics (التحليلات الذكية لـ RevPAR)", 
      detail: "تحليلات متقدمة لمعدلات الإشغال والإيرادات لمساعدتكم في اتخاذ القرارات." 
    },
    { 
      key: "consulting", 
      name: "Monthly Consulting (الاستشارات الشهرية لنمو الأعمال)", 
      detail: "جلسات استراتيجية شهرية مغلقة مع خبراء الاستثمار الفندقي لتحسين صافي الأرباح." 
    },
  ];

  // Helper function to render check or empty cell
  const checkFeature = (pkgKey: "launch" | "growth" | "elite", featureKey: string) => {
    if (pkgKey === "launch") {
      return ["website", "seo", "google_profile"].includes(featureKey);
    }
    if (pkgKey === "growth") {
      return ["website", "portal", "marketing", "seo", "google_profile"].includes(featureKey);
    }
    if (pkgKey === "elite") {
      return true; // All services included
    }
    return false;
  };

  return (
    <section className="bg-[#030303] py-36 text-ivory border-t border-white/5 font-primary relative overflow-hidden" id="pricing">
      {/* Exquisite Arabesque and Radial Glow Overlays */}
      <div className="absolute inset-0 mashrabiya-overlay-fine opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block in Golden Ratio */}
        <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-gold/80 font-primary text-xs uppercase tracking-[0.3em] bg-white/[0.02] border border-white/5 rounded-full px-5 py-2"
          >
            <Sparkles size={11} className="animate-pulse text-gold" />
            <span>الباقات الاستراتيجية الحصرية</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-primary text-3xl sm:text-5xl md:text-6xl font-extralight leading-[1.15] text-white tracking-tight"
          >
            اختر الباقة المناسبة لرحلة <br />
            <span className="font-normal gold-gradient-text italic font-primary">التحول الرقمي لفندقك</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-ivory/60 leading-relaxed font-light max-w-2xl mx-auto"
          >
            صممنا باقات مرنة تناسب احتياجات الفنادق المختلفة، مع التركيز على زيادة الحجوزات المباشرة، وتحسين تجربة النزلاء، وتحقيق نمو رقمي مستدام.
          </motion.p>
        </div>

        {/* Ultra-Luxury Pricing Cards Grid */}
        <div className="grid gap-10 lg:grid-cols-3 items-stretch mb-36 relative">
          
          {/* PACKAGE 1: Launch */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8, borderColor: "rgba(212, 175, 55, 0.3)" }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-md p-9 flex flex-col justify-between overflow-hidden transition-all duration-500 text-right group shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="space-y-8">
              <div className="flex justify-between items-start flex-row-reverse">
                <div>
                  <span className="text-[10px] font-primary text-gold/60 uppercase tracking-widest block mb-1">الخيار الأساسي الفاخر</span>
                  <h3 className="font-primary text-3xl font-light text-white tracking-wide">
                    Launch
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-ivory/40 font-primary text-xs">
                  01
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ivory/50 font-light leading-relaxed min-h-[50px]">
                كل ما يحتاجه الفندق لبداية قوية وبناء حضور رقمي احترافي يجذب الأنظار.
              </p>

              <div className="border-y border-white/5 py-7 flex items-baseline justify-end gap-2 flex-row-reverse">
                <span className="text-sm font-primary font-light text-ivory/40">ريال / شهرياً</span>
                <span className="font-primary text-4xl font-light text-white tracking-tight">
                  1,600
                </span>
              </div>

              <div className="space-y-5">
                <span className="block font-primary text-[9px] text-white/30 uppercase tracking-widest font-semibold">
                  المكونات المشمولة بالكامل:
                </span>
                
                <ul className="space-y-4">
                  {[
                    "Luxury Website (موقع ويب فاخر)",
                    "SEO (تحسين محركات البحث)",
                    "Google Business Profile (تهيئة الملف التجاري)"
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 justify-start flex-row-reverse text-right group-hover:translate-x-[-2px] transition-transform duration-300">
                      <span className="text-xs text-ivory/80 font-light">{service}</span>
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/20">
                        <Check size={10} className="stroke-[3]" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5">
              <MagneticButton 
                onClick={() => onOpenConsultation("Launch Package")}
                className="w-full"
              >
                <div className="w-full py-4 rounded-lg bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold hover:text-black transition-all duration-300 text-center font-primary text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer text-white hover:text-black shadow-md">
                  <span>ابدأ الآن</span>
                  <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
                </div>
              </MagneticButton>
            </div>
          </motion.div>

          {/* PACKAGE 2: Growth (Highlighted with gold border, slightly larger card, premium glow, floating) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ scale: 1.03, borderColor: "rgba(212, 175, 55, 0.8)" }}
            className="relative rounded-2xl border-2 border-gold bg-gradient-to-b from-[#090909] to-black p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 text-right shadow-[0_0_50px_rgba(212,175,55,0.18)] z-20 md:-translate-y-4 lg:scale-[1.04] group hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)]"
          >
            {/* Exquisite Glowing Halo behind Badge */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gold/[0.04] to-transparent pointer-events-none" />

            {/* Luxurious Floating Badge */}
            <div className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full bg-gold/20 border border-gold/50 px-4 py-2 font-primary text-[9px] tracking-widest text-gold font-bold shadow-lg shadow-gold/20 backdrop-blur-md animate-pulse">
              <Sparkles size={10} className="text-gold" />
              <span>الأكثر اختيارًا</span>
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-start flex-row-reverse">
                <div>
                  <span className="text-[10px] font-primary text-gold uppercase tracking-widest block mb-1 font-semibold">تسريع وتنمية الحجوزات</span>
                  <h3 className="font-primary text-3xl font-normal text-white tracking-wide">
                    Growth
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center text-gold font-primary text-xs">
                  02
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed min-h-[50px]">
                لالفنادق التي ترغب في تحسين تجربة الضيوف، وزيادة تدفق الحجوزات المباشرة، وتنمية أرباحها الصافية.
              </p>

              <div className="border-y border-gold/10 py-7 flex items-baseline justify-end gap-2 flex-row-reverse">
                <span className="text-sm font-primary font-light text-gold/60">ريال / شهرياً</span>
                <span className="font-primary text-4xl font-bold text-gold tracking-tight">
                  1,800
                </span>
              </div>

              <div className="space-y-5">
                <span className="block font-primary text-[9px] text-gold/60 uppercase tracking-widest font-semibold">
                  المكونات المشمولة بالكامل:
                </span>
                
                <ul className="space-y-4">
                  {[
                    "Luxury Website (موقع ويب فاخر)",
                    "Guest Portal (بوابة النزلاء الرقمية)",
                    "Marketing (التسويق الفندقي الاستراتيجي)",
                    "SEO (تحسين محركات البحث المحترف)",
                    "Google Business Profile (الظهور الفائق على الخرائط)"
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 justify-start flex-row-reverse text-right group-hover:translate-x-[-2px] transition-transform duration-300">
                      <span className="text-xs text-white/95 font-medium">{service}</span>
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-black shadow-md shadow-gold/20 border border-gold/20">
                        <Check size={10} className="stroke-[3]" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-6">
              <MagneticButton 
                onClick={() => onOpenConsultation("Growth Package")}
                className="w-full"
              >
                <div className="w-full py-4.5 rounded-lg bg-gold hover:bg-gold-light text-black transition-all duration-300 text-center font-primary text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-gold/20 hover:scale-[1.01]">
                  <span>ابدأ رحلة النمو</span>
                  <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
                </div>
              </MagneticButton>
            </div>
          </motion.div>

          {/* PACKAGE 3: Elite (Premium luxury card, Champagne gold accents, Animated border, Glassmorphism, Luxury glow, Elegant floating animation) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -8, borderColor: "rgba(212, 175, 55, 0.5)" }}
            className="relative rounded-2xl border border-gold/30 bg-gradient-to-b from-[#111111] via-[#080808] to-[#040404] backdrop-blur-xl p-9 flex flex-col justify-between overflow-hidden transition-all duration-500 text-right group shadow-2xl hover:shadow-[0_30px_70px_rgba(212,175,55,0.12)]"
          >
            {/* Animated champagne gold glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/15 rounded-full blur-[80px] pointer-events-none group-hover:bg-gold/25 transition-all duration-500" />
            
            {/* Exquisite Pulsing Edge Highlighting */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-b from-gold/30 via-white/5 to-gold/30 pointer-events-none group-hover:from-gold/50 transition-all duration-500" />

            {/* Premium luxury badge */}
            <div className="absolute top-5 left-5 flex items-center gap-1.5 rounded-full bg-white/5 border border-gold/40 px-4 py-2 font-primary text-[9px] tracking-widest text-gold font-bold backdrop-blur-md">
              <Award size={10} className="text-gold animate-bounce" />
              <span>الحل المتكامل النخبوّي</span>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="flex justify-between items-start flex-row-reverse">
                <div>
                  <span className="text-[10px] font-primary text-gold/80 uppercase tracking-widest block mb-1 font-semibold">السيادة والتحول الشامل</span>
                  <h3 className="font-primary text-3xl font-light text-white tracking-wide">
                    Elite
                  </h3>
                </div>
                <div className="h-10 w-10 rounded-lg border border-gold/20 bg-gold/5 flex items-center justify-center text-gold/70 font-primary text-xs">
                  03
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ivory/50 font-light leading-relaxed min-h-[50px]">
                منظومة استراتيجية متكاملة مصممة للفنادق والمنتجعات التي تبحث عن أعلى مستويات الريادة الرقمية والسيادة السوقية بالمنطقة.
              </p>

              <div className="border-y border-white/5 py-7 flex items-baseline justify-end gap-2 flex-row-reverse">
                <span className="text-sm font-primary font-light text-ivory/40">ريال / شهرياً</span>
                <span className="font-primary text-4xl font-light text-white tracking-tight">
                  2,000
                </span>
              </div>

              <div className="space-y-4">
                <span className="block font-primary text-[9px] text-gold/60 uppercase tracking-widest font-semibold">
                  المكونات المشمولة بالكامل:
                </span>
                
                <div className="max-h-[220px] overflow-y-auto pr-1 space-y-3.5 custom-scrollbar">
                  {[
                    "Luxury Website (موقع ويب فاخر)",
                    "Guest Portal (بوابة النزلاء الرقمية)",
                    "Hotel Dashboard (لوحة التحكم الشاملة)",
                    "Marketing (التسويق الفندقي الرقمي)",
                    "SEO (السيادة الفائقة لمحركات البحث)",
                    "Google Business Profile (التهيئة الكاملة)",
                    "Analytics (لوحة تحليلات وإحصاءات الأرباح)",
                    "Monthly Consulting (استشارات ربع شهرية مباشرة)"
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 justify-start flex-row-reverse text-right group-hover:translate-x-[-2px] transition-transform duration-300">
                      <span className="text-xs text-white font-light">{service}</span>
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/30">
                        <Check size={10} className="stroke-[3]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/5 space-y-4 relative z-10">
              <MagneticButton 
                onClick={() => onOpenConsultation("Elite Package")}
                className="w-full"
              >
                <div className="w-full py-4 rounded-lg bg-gold hover:bg-gold-light text-black transition-all duration-300 text-center font-primary text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-gold/10 hover:scale-[1.01]">
                  <span>احجز استشارة مجانية</span>
                  <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
                </div>
              </MagneticButton>

              <a
                href="https://wa.me/201070853978"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 font-primary text-[10px] tracking-widest transition-all duration-300 flex items-center justify-center gap-2 font-bold"
              >
                <MessageSquare size={13} className="text-emerald-500" />
                <span>تحدث معنا عبر واتساب</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* PACKAGE COMPARISON TABLE WITH AWARD-WINNING MINIMALISM */}
        <div className="my-36 text-right relative">
          <div className="text-center max-w-xl mx-auto mb-20 space-y-3">
            <span className="font-primary text-[10px] uppercase tracking-[0.3em] text-gold font-bold block mb-2">الشفافية المطلقة والوضوح</span>
            <h3 className="font-primary text-3xl font-light text-white tracking-tight">مقارنة شاملة بين الباقات والمزايا</h3>
            <p className="text-xs text-ivory/50 leading-relaxed font-light">
              مقارنة مجهرية دقيقة لخصائص المنظومات البرمجية والاستشارية التي نقدمها لفندقكم الفاخر.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.015] to-transparent backdrop-blur-md shadow-2xl">
            <table className="w-full border-collapse text-right min-w-[750px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-7 px-10 text-sm font-primary font-light text-white w-2/5">المنظومة والخدمة التكنولوجية</th>
                  <th className="py-7 px-6 text-center text-[10px] font-primary tracking-[0.2em] text-gold uppercase">Launch</th>
                  <th className="py-7 px-6 text-center text-[10px] font-primary tracking-[0.2em] text-gold uppercase bg-gold/5 border-x border-white/5">Growth</th>
                  <th className="py-7 px-6 text-center text-[10px] font-primary tracking-[0.2em] text-gold uppercase">Elite</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feat, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-white/5 hover:bg-white/[0.015] transition-colors duration-200 group ${index % 2 === 0 ? "bg-white/[0.003]" : ""}`}
                  >
                    <td className="py-6 px-10">
                      <div className="text-xs font-primary text-white font-medium mb-1">{feat.name}</div>
                      <div className="text-[10px] font-primary text-ivory/40 leading-relaxed font-light">{feat.detail}</div>
                    </td>
                    
                    {/* Launch */}
                    <td className="py-6 px-6 text-center">
                      {checkFeature("launch", feat.key) ? (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/20"
                        >
                          <Check size={11} className="stroke-[3]" />
                        </motion.div>
                      ) : (
                        <span className="text-white/10 font-primary text-sm">-</span>
                      )}
                    </td>

                    {/* Growth */}
                    <td className="py-6 px-6 text-center bg-gold/[0.01] border-x border-white/5">
                      {checkFeature("growth", feat.key) ? (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-black shadow-lg shadow-gold/15"
                        >
                          <Check size={11} className="stroke-[3]" />
                        </motion.div>
                      ) : (
                        <span className="text-white/10 font-primary text-sm">-</span>
                      )}
                    </td>

                    {/* Elite */}
                    <td className="py-6 px-6 text-center">
                      {checkFeature("elite", feat.key) ? (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold border border-gold/40 shadow-inner"
                        >
                          <Check size={11} className="stroke-[3]" />
                        </motion.div>
                      ) : (
                        <span className="text-white/10 font-primary text-sm">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* WHY THESE PACKAGES SECTION (Ritz-Carlton Level Business Philosophy) */}
        <div className="border-t border-white/5 pt-36">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-5">
            <span className="font-primary text-[10px] uppercase tracking-[0.25em] text-gold font-bold">فلسفتنا وراء هيكلة الباقات</span>
            <h3 className="font-primary text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
              لماذا صُممت هذه الباقات حول <br />
              <span className="font-normal gold-gradient-text italic font-primary">نتائج الأعمال ومؤشرات الأداء؟</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-ivory/50 leading-relaxed font-light max-w-2xl mx-auto">
              الفارق المنهجي بيننا وبين شركات البرمجة ووكالات التسويق التقليدية هو التركيز الصارم على حوكمة وتنمية ميزانيتك الفندقية واسترداد تدفقات النقد المفقودة.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "زيادة الحجوزات المباشرة",
                description: "نهدم تبعية فندقك لمنصات الحجز العالمية (OTAs) لنعيد توجيه النزلاء مباشرة إلى واجهتك الفاخرة، موفرين عمولات باهظة تلتهم ما يصل إلى 25% من إيراد غرفتك.",
                icon: TrendingUp
              },
              {
                title: "تحسين تجربة النزلاء",
                description: "من اللمسة الأولى للتصفح وحتى الخروج الآمن، نوفر تجربة رقمية فائقة موازية لكرم ضيافتكم المادية الفاخرة المعهودة في الخليج.",
                icon: Compass
              },
              {
                title: "تقليل الضغط على الاستقبال",
                description: "أتمتة طلبات الغسيل، وقوائم الأطعمة، وحجز المرافق وبوابات الـ QR تتيح لموظفيكم تقديم رعاية إنسانية متميزة للزوار الفعليين.",
                icon: Users
              },
              {
                title: "زيادة الظهور على Google",
                description: "نهيئ حضوركم الجغرافي ونضمن تصدر فندقكم للكلمات البحثية الراقية لجذب وفود الأعمال والمسافرين النخبة الإقليميين.",
                icon: Globe
              },
              {
                title: "تحسين الكفاءة التشغيلية",
                description: "تحقيق تكامل فوري وسرعة توجيه متطورة لأوامر الطلبات لفرق الصيانة والمطبخ، مقللين تماماً من الهدر الزمني وهوامش الأخطاء.",
                icon: Zap
              },
              {
                title: "بناء شراكة طويلة المدى",
                description: "لا ينتهي دورنا بإنهاء الأكواد. نقف كشريك تقني واستراتيجي متكامل يدعم مجلس إدارتكم لتعظيم مؤشر RevPAR وضمان استمرارية النمو الرقمي الفائق.",
                icon: ShieldCheck
              }
            ].map((outcome, idx) => {
              const IconComp = outcome.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.015] to-transparent p-9 space-y-5 hover:border-gold/30 hover:bg-white/[0.025] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-md">
                    <IconComp size={20} />
                  </div>
                  <h4 className="font-primary text-lg font-normal text-white">{outcome.title}</h4>
                  <p className="text-xs sm:text-sm text-ivory/60 leading-relaxed font-light">{outcome.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
