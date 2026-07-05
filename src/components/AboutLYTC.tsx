import React from "react";
import { ShieldCheck, TrendingUp, Sparkles, Star, Users, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function AboutLYTC() {
  return (
    <section className="relative bg-dark-bg py-24 text-ivory border-t border-white/5 overflow-hidden" id="about-lytc">
      
      {/* Subtle Mashrabiya Graphic Overlay */}
      <div className="absolute inset-0 mashrabiya-overlay pointer-events-none" />
      <div className="absolute top-0 right-1/4 h-96 w-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-primary text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                تغيير قواعد اللعبة في الضيافة الفاخرة
              </span>
              <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                لسنا شركة تصميم مواقع... <br />
                <span className="italic font-normal text-gold">نحن شريك النمو الرقمي للفنادق.</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-ivory/70 leading-relaxed font-light">
              الوكالات التقليدية تصمم مواقع ويب "جميلة" لكنها صامتة لا تولد تدفقاً نقدياً. شركات البرمجة العامة تكتب أكواداً معقدة وتغفل السلوك الشرائي للنزيل الفاخر. في <strong>لايتك (LYTC)</strong>، نحن لا نبيع تقنيات عشوائية؛ نحن مهندسون ماليون ومستشارو نمو متكامل لقطاع الفنادق الراقية.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="p-2 rounded-lg bg-gold/5 text-gold border border-gold/15 w-fit">
                  <TrendingUp size={16} />
                </div>
                <h4 className="font-primary text-base font-semibold text-ivory">مضاعفة الأرباح المباشرة</h4>
                <p className="text-xs text-ivory/50 leading-relaxed">
                  نعيد توجيه الحجوزات السائبة من عمولات المنصات الخارجية لتصبح حجوزات مباشرة في خزينة فندقك وبمعدل توفير فوري.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="p-2 rounded-lg bg-gold/5 text-gold border border-gold/15 w-fit">
                  <Sparkles size={16} />
                </div>
                <h4 className="font-primary text-base font-semibold text-ivory">إثراء تجربة الضيف الرقمية</h4>
                <p className="text-xs text-ivory/50 leading-relaxed">
                  نصمم بوابات تمنح النزيل تحكماً ملكياً كاملاً وسريعاً في الخدمات والوجبات دون أي تعقيد تشغيلي أو الحاجة لتنزيل تطبيقات.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="p-2 rounded-lg bg-gold/5 text-gold border border-gold/15 w-fit">
                  <ShieldCheck size={16} />
                </div>
                <h4 className="font-primary text-base font-semibold text-ivory">أتمتة وتسهيل العمليات</h4>
                <p className="text-xs text-ivory/50 leading-relaxed">
                  نحرر موظفي الاستقبال من فوضى الاتصالات المكررة من خلال لوحة تحكم ذكية توزع الطلبات الفندقية تلقائياً وبلحظية.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="p-2 rounded-lg bg-gold/5 text-gold border border-gold/15 w-fit">
                  <Users size={16} />
                </div>
                <h4 className="font-primary text-base font-semibold text-ivory">صناعة هويات رقمية سيادية</h4>
                <p className="text-xs text-ivory/50 leading-relaxed">
                  نحفر لعلامتك الفندقية مكاناً مرموقاً يتصدر نتائج البحث وخرائط جوجل ليصبح خيار الإقامة الأول بلا منازع.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Block */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-gold/5">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                alt="تجربة ضيافة عربية فاخرة"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-90 contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Floating micro-badge on visual */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md text-right space-y-1">
                <div className="flex items-center gap-1.5 text-gold">
                  <Star size={12} className="fill-gold text-gold" />
                  <span className="font-primary text-[9px] uppercase tracking-wider font-semibold">تأثير ملموس على الميزانية</span>
                </div>
                <p className="font-primary text-sm font-semibold text-white">
                  "التصميم الفاخر الخاطف للأنفاس لا يعني شيئاً إن لم يولد حجوزات مباشرة في خزينة فندقك."
                </p>
              </div>
            </div>

            {/* Behind border decorative line */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/10 rounded-2xl -z-10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}
