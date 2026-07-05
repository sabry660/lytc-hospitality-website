import React, { useState } from "react";
import { FAQ_ITEMS } from "../data";
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "development" | "marketing" | "integration" | "consulting">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const filteredFAQs = FAQ_ITEMS.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-[#050505] py-24 text-ivory border-t border-white/5 font-sans relative" id="faq">
      {/* Delicate Mashrabiya BG */}
      <div className="absolute inset-0 mashrabiya-overlay pointer-events-none opacity-40" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-right">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
            أرشيف الاستشارات والحلول التقنية المتكاملة
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-light leading-tight">
            الأسئلة الاستشارية <span className="italic font-normal text-gold">الأكثر شيوعاً</span>
          </h2>
          <p className="mt-4 text-sm text-ivory/60 leading-relaxed font-light">
            نعمل بشفافية مطلقة مع شركائنا من الفنادق المستقلة. تصفح إجاباتنا التفصيلية حول الربط البرمجي، والتسويق الرقمي الخليجي الاستراتيجي، ونظام اتفاقية مستوى الأداء.
          </p>
        </div>

        {/* Live Search & Category Quick Toggles */}
        <div className="space-y-6 mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث في أرشيف الاستشارات والخدمات (مثال: ربط PMS، مدى، دفع إلكتروني، عمولات...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.02] pr-12 pl-4 py-4 text-sm text-ivory placeholder-ivory/30 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all text-right"
            />
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-ivory/30" />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: "all", label: "كافة الأسئلة" },
              { id: "development", label: "التصميم والتطوير المخصص" },
              { id: "integration", label: "ربط الأنظمة والـ PMS" },
              { id: "marketing", label: "التسويق وجذب النزلاء" },
              { id: "consulting", label: "الاستشارات ومجلس الإدارة" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "border-gold bg-gold/10 text-gold font-semibold"
                    : "border-white/10 bg-white/[0.01] text-ivory/50 hover:border-white/20 hover:text-ivory"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {filteredFAQs.length === 0 ? (
            <div className="py-12 text-center rounded-xl border border-dashed border-white/5 text-ivory/40 text-sm font-mono">
              لا توجد نتائج تطابق بحثك حالياً. جرب البحث عن كلمات أخرى مثل "بوابة النزيل" أو "مدى" أو "العمولات".
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isExpanded = expandedId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 text-right ${
                    isExpanded
                      ? "border-gold bg-gold/[0.01]"
                      : "border-white/5 bg-white/[0.01] hover:border-white/10"
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 select-none cursor-pointer"
                  >
                    <span className={`font-serif text-sm md:text-base font-semibold leading-snug w-full ${isExpanded ? "text-gold" : "text-ivory/95"}`}>
                      {faq.question}
                    </span>
                    <span className={`shrink-0 rounded-full border border-white/10 p-1.5 bg-white/5 text-ivory/40 transition-colors ${isExpanded ? "border-gold text-gold" : ""}`}>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-white/5 font-sans text-xs md:text-sm text-ivory/70 leading-relaxed text-right">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA block */}
        <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.01] p-6 text-center space-y-3">
          <HelpCircle size={20} className="text-gold mx-auto animate-drift" />
          <h4 className="font-serif text-sm font-semibold text-white">هل لديك استفسار خاص معقد لمجلس إدارتك؟</h4>
          <p className="text-xs text-ivory/50 max-w-lg mx-auto">
            يتعامل كبير مستشاري النمو لدينا مباشرة وبسرية تامة مع الاستفسارات المعقدة المتعلقة بنقل قواعد البيانات الضخمة، والامتثال، وعقود الربط المتقدمة للشركات.
          </p>
          <a
            href="mailto:engmohamedsabry925@gmail.com"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-gold hover:underline pt-1 font-bold"
          >
            <MessageSquare size={10} />
            <span>راسل الطاقم الاستشاري عبر البريد الإلكتروني</span>
          </a>
        </div>

      </div>
    </section>
  );
}
