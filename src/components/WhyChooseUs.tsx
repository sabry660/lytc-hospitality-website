import React from "react";
import { 
  Hotel, Languages, Sparkles, Smartphone, TrendingUp, Search, 
  Target, Users, ShieldCheck, CheckCircle
} from "lucide-react";
import { motion } from "motion/react";

const CARDS = [
  {
    title: "أخصائيو قطاع الضيافة",
    engTitle: "Hospitality Specialists",
    icon: Hotel,
    desc: "لسنا وكالة برمجية عامة تصمم لجميع القطاعات. نحن نعيش ونتنفس قطاع الفنادق الفاخرة، ونقيس نجاحنا بمؤشرات الـ RevPAR ومتوسط الإشغال اليومي."
  },
  {
    title: "عربي وإنجليزي نخبي",
    engTitle: "Arabic & English First",
    icon: Languages,
    desc: "نصمم بنى تحتية ثنائية اللغة لجمهور الخليج العربي بأسلوب كتابة إبداعية يعكس أصالة الرعاية وقيم الحفاوة والترحيب المألوفة محلياً."
  },
  {
    title: "تصميم فاخر لا يضاهى",
    engTitle: "Luxury Design Philosophy",
    icon: Sparkles,
    desc: "نصمم واجهات ويب وبوابات كتحف فنية تليق بمكانة فندقك المادية وتجذب النزلاء الباحثين عن التفرد والمظهر السينمائي الخلاب."
  },
  {
    title: "خبراء تجربة النزيل الرقمية",
    engTitle: "Guest Experience Experts",
    icon: Smartphone,
    desc: "نحن مهندسو رحلة العميل الرقمية الخالية من أي احتكاك، بدءاً من حجز الغرفة السريع وصولاً لطلب الوجبات في الغرفة عبر مسح الـ QR."
  },
  {
    title: "شراكة نمو مستدامة",
    engTitle: "Growth Partnership Model",
    icon: TrendingUp,
    desc: "نحن لا ننهي عملنا بمجرد تسليم الموقع؛ بل نعمل كمستشارين شهريين لمجلس إدارتك لمراجعة خطط الحجوزات ومضاعفة العوائد."
  },
  {
    title: "سيادة محركات البحث الخليجية",
    engTitle: "SEO Experts",
    icon: Search,
    desc: "نهيئ بنية فندقك ليتصدر نتائج البحث العضوية في السعودية وباقي دول الخليج، مما يوفر لك آلاف الريالات من إعلانات الدفع بالنقر."
  },
  {
    title: "تسويق موجه فائق الاستهداف",
    engTitle: "Marketing Experts",
    icon: Target,
    desc: "نستهدف بدقة تامة الضيوف النخبة ذوي الملاءة المالية والباحثين عن أرقى خيارات الإقامة والعطلات في المنطقة."
  },
  {
    title: "فريق موحد متكامل",
    engTitle: "One Unified Team",
    icon: Users,
    desc: "نحن نمثل الذراع الفني والتشويقي والاستشاري الخارجي الموحد لفندقك، مما يوفر عليك فوضى توظيف وتنسيق وكالات متعددة مشتتة."
  },
  {
    title: "شامل كل شيء بلا رسوم مخفية",
    engTitle: "Everything Included",
    icon: ShieldCheck,
    desc: "من تصميم وتطوير وإشراف وإدارة سيرفرات سحابية وصيانة وتدريب الموظفين إلى الاستشارات الشهرية المغلقة؛ كل شيء مغطى بحزمة اشتراك واضحة."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-dark-bg py-24 text-ivory border-t border-white/5 font-primary relative" id="why-choose-us">
      {/* Decorative mashrabiya layout */}
      <div className="absolute inset-0 mashrabiya-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-primary text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            تميز وموثوقية مطلقة لعلامتك
          </span>
          <h2 className="mt-4 font-primary text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            لماذا يختارنا ملاّك ومديرو <br className="hidden md:block" />
            <span className="italic font-normal text-gold">الفنادق والمنتجعات الفاخرة؟</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-ivory/60 leading-relaxed font-light">
            في قطاع الضيافة النخبوية، التفاصيل الدقيقة هي ما تصنع الفارق مابين فندق يصارع لتأمين الحجوزات، وفندق مكتمل الإشغال ومستقر الأرباح. إليك ما نلتزم بتقديمه لشراكتنا:
          </p>
        </div>

        {/* 3x3 Grid on large screens, responsive on mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, index) => {
            const IconComp = card.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-white/5 bg-white/[0.01] p-6 sm:p-8 transition-all duration-300 hover:border-gold/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-2.5 rounded-lg border border-white/10 text-gold bg-white/[0.01] w-fit">
                    <IconComp size={18} />
                  </div>

                  <div>
                    <h3 className="font-primary text-base sm:text-lg font-semibold text-ivory flex items-center gap-1.5">
                      {card.title}
                    </h3>
                    <span className="block font-primary text-[8px] text-ivory/30 uppercase tracking-wider mt-0.5 leading-none">
                      {card.engTitle}
                    </span>
                  </div>

                  <p className="text-xs text-ivory/50 leading-relaxed font-primary">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-primary text-gold/40">
                  <CheckCircle size={10} className="text-gold/40" />
                  <span>معيار جودة موثق</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
