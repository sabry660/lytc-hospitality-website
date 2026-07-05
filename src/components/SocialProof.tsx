import React from "react";
import { Star, ShieldCheck, MapPin, Award, CheckCircle2 } from "lucide-react";
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

// Helper to translate numbers to Arabic Eastern digits on the fly
const toArabicDigits = (str: string | number): string => {
  return String(str).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);
};

export default function SocialProof() {
  return (
    <section className="relative bg-dark-bg py-24 border-t border-white/5 font-sans overflow-hidden" id="social-proof">
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
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block text-center w-full"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-6 gap-x-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {TRUSTED_HOTELS.map((hotel, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                <span className="font-serif text-base sm:text-lg font-medium tracking-wider text-ivory/80">{hotel.name}</span>
                <span className="font-mono text-[9px] text-gold/80 mt-1 uppercase tracking-widest flex items-center gap-1.5">
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
                <div className="font-serif text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-mono font-bold">
                    <AnimatedCounter value={38} suffix="%+" />
                  </span>
                </div>
                <div className="mt-4 font-serif text-base sm:text-lg text-ivory/90 leading-tight font-semibold">
                  متوسط نمو الحجوزات المباشرة
                </div>
              </div>
              <p className="mt-3 text-xs text-ivory/50 leading-relaxed font-sans">
                انتقال فوري ومباشر بعيداً عن عمولات منصات الحجز الأجنبية في أول 90 يوماً من التشغيل الفعلي للمنظومة.
              </p>
            </div>
          </ThreeDCard>

          {/* Card 2 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-mono font-bold">
                    <AnimatedCounter value={60} suffix="%+" />
                  </span>
                </div>
                <div className="mt-4 font-serif text-base sm:text-lg text-ivory/90 leading-tight font-semibold">
                  تسريع كفاءة الخدمات التشغيلية
                </div>
              </div>
              <p className="mt-3 text-xs text-ivory/50 leading-relaxed font-sans">
                بوابات النزلاء المخصصة بالـ QR تلغي احتياج الاتصال الهاتفي بفرق الاستقبال بنسبة قياسية.
              </p>
            </div>
          </ThreeDCard>

          {/* Card 3 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-mono font-bold">
                    <AnimatedCounter value={4.9} decimals={1} suffix=" / 5" />
                  </span>
                </div>
                <div className="mt-4 font-serif text-base sm:text-lg text-ivory/90 leading-tight font-semibold">
                  مؤشر رضا وتوصية الملاك
                </div>
              </div>
              <p className="mt-3 text-xs text-ivory/50 leading-relaxed font-sans">
                تقييم فائق من قبل مجالس إدارات المجموعات الفندقية والقصور التراثية والمنتجعات الكبرى بالرياض ودبي.
              </p>
            </div>
          </ThreeDCard>

          {/* Card 4 */}
          <ThreeDCard className="min-h-[200px] hover:border-gold/30">
            <div className="p-8 text-right h-full flex flex-col justify-between">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-light text-gold gold-gradient-text tracking-tight flex items-center gap-1 flex-row-reverse justify-start">
                  <span className="font-mono font-bold">24/7</span>
                </div>
                <div className="mt-4 font-serif text-base sm:text-lg text-ivory/90 leading-tight font-semibold">
                  دعم فني واستراتيجي متواصل
                </div>
              </div>
              <p className="mt-3 text-xs text-ivory/50 leading-relaxed font-sans">
                مراقبة مستمرة للأداء الأمني والسحابي للبنية التحتية عبر خوادم إقليمية موطنة بالكامل بالرياض وأبوظبي.
              </p>
            </div>
          </ThreeDCard>

        </div>

        {/* Board Testimonial Highlight with custom fade interactions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 max-w-4xl mx-auto rounded-2xl border border-gold/15 bg-gradient-to-b from-[#0E0E0E] to-[#060606] p-8 md:p-12 relative text-right shadow-2xl overflow-hidden group"
        >
          {/* Glass reflection sheen on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          <div className="absolute top-6 right-6 text-gold/5 font-serif text-[120px] pointer-events-none select-none">“</div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-1 text-gold mb-6 justify-start">
              <span className="font-mono text-xs text-ivory/40 ml-2">تقييم موثق 5.0</span>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="currentColor" />
              ))}
            </div>

            <blockquote className="font-serif text-lg md:text-2xl font-light leading-relaxed text-ivory/90">
              "كنا نبحث في البداية عن وكالة برمجية تقليدية لتطوير موقع ويب جديد لفندقنا. لكن فريق لايتك (LYTC) غيّروا تماماً طريقة تفكيرنا، حيث أثبتوا لنا كيف كنا نهدر أرباحنا اليومية وعلاقتنا المباشرة بالنزيل لصالح العمولات المرتفعة للمنصات الأجنبية. ومن خلال البوابة الرقمية المخصصة وسيادة محركات البحث، استعدنا السيطرة الكاملة ملايين الريالات مباشرة لخزائننا."
            </blockquote>

            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 flex-wrap gap-4 flex-row-reverse">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center font-serif text-gold text-lg">
                  أ
                </div>
                <div className="text-right">
                  <div className="font-serif text-sm font-semibold text-white">عبد الرحمن الرشيد</div>
                  <div className="font-mono text-[9px] text-ivory/40 uppercase tracking-widest mt-0.5">
                    رئيس مجلس الإدارة، الرشيد للاستثمار ومحافظ الضيافة
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-gold/5 border border-gold/20 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-gold font-semibold">
                <Award size={10} />
                <span>مجموعة فنادق 5 نجوم - الرياض</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
