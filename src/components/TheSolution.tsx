import React, { useState } from "react";
import { ECOSYSTEM } from "../data";
import { Smartphone, QrCode, LayoutDashboard, Instagram, Sparkles, MapPin, TrendingUp, Users, ArrowLeft, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, any> = {
  Smartphone: Smartphone,
  QrCode: QrCode,
  LayoutDashboard: LayoutDashboard,
  Instagram: Instagram,
  Sparkles: Sparkles,
  MapPin: MapPin,
  TrendingUp: TrendingUp,
  Users: Users
};

const CONNECTION_FLOW = [
  { from: "marketing", to: "website" },
  { from: "seo", to: "website" },
  { from: "maps", to: "website" },
  { from: "website", to: "portal" },
  { from: "portal", to: "dashboard" },
  { from: "dashboard", to: "analytics" },
  { from: "analytics", to: "consulting" },
  { from: "consulting", to: "marketing" }
];

export default function TheSolution() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="bg-dark-bg py-24 text-ivory relative overflow-hidden font-primary" id="the-solution">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full pointer-events-none animate-slow-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-gold">
            <RefreshCw size={14} className="text-gold animate-drift" />
            <span className="font-primary text-xs uppercase tracking-widest font-semibold">استراتيجية رقمية موحدة</span>
          </div>
          <h2 className="mt-4 font-primary text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            منظومة لايتك (LYTC) المغلقة <br className="hidden md:block" />
            <span className="italic font-normal text-gold">لتعظيم الأرباح والسيادة التشغيلية</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-ivory/60 leading-relaxed font-light">
            نحن لا نبيع حلولاً رقمية مجزأة أو معزولة. نحن نقوم بتشغيل منظومة برمجية متكاملة يتكامل فيها التسويق الذكي مع واجهات الحجز الفائقة وبوابة خدمات الغرف، لتصب جميعها في زيادة الحجوزات وتقليل الأعباء التشغيلية.
          </p>
        </div>

        {/* Visual Ecosystem Interactive Node Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ECOSYSTEM.map((node, idx) => {
            const IconComp = ICON_MAP[node.iconName] || Sparkles;
            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode 
              ? CONNECTION_FLOW.some(f => (f.from === hoveredNode && f.to === node.id) || (f.to === hoveredNode && f.from === node.id))
              : false;

            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`relative rounded-xl border p-6 transition-all duration-500 overflow-hidden ${
                  isHovered
                    ? "border-gold bg-gold/[0.03] scale-[1.02] shadow-xl shadow-gold/5"
                    : isConnected
                    ? "border-gold/40 bg-gold/[0.01] scale-[1.01]"
                    : "border-white/5 bg-white/[0.01] hover:border-white/10"
                }`}
              >
                <div className="absolute top-0 left-0 h-16 w-16 bg-gradient-to-bl from-gold/5 to-transparent rounded-br-full" />
                
                {/* Node Order Number */}
                <span className="absolute top-4 left-4 font-primary text-[10px] text-ivory/20 font-bold uppercase">
                  المرحلة {String(idx + 1).padStart(2, '0')}
                </span>

                <div className={`p-3 rounded-lg border w-fit ${
                  isHovered ? "border-gold text-gold bg-gold/5 animate-drift" : "border-white/10 text-ivory/40 bg-white/[0.01]"
                }`}>
                  <IconComp size={20} />
                </div>

                <h3 className={`mt-6 font-primary text-base sm:text-lg font-medium transition-colors ${isHovered ? "text-gold" : "text-ivory"}`}>
                  {node.title}
                </h3>
                
                <p className="mt-2 text-xs text-ivory/50 leading-relaxed min-h-[50px] font-primary">
                  {node.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-primary">
                  <span className="text-ivory/40">الأثر المالي:</span>
                  <span className="text-gold font-semibold flex items-center gap-1">
                    {node.id === "website" && "تحويل حجز مباشر"}
                    {node.id === "portal" && "خفض ٦٠٪ من الاتصالات"}
                    {node.id === "dashboard" && "أتمتة دقيقة للاستقبال"}
                    {node.id === "marketing" && "استقطاب نزلاء ذوي ملاءة"}
                    {node.id === "seo" && "السيادة على جوجل"}
                    {node.id === "maps" && "استحواذ محلي دقيق"}
                    {node.id === "analytics" && "تحسين معدل الـ RevPAR"}
                    {node.id === "consulting" && "توجيه نمو استراتيجي"}
                    <ArrowLeft size={10} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic connection explanation */}
        <div className="mt-12 rounded-xl border border-white/5 bg-white/[0.01] p-4 text-center">
          <p className="text-xs text-ivory/40 font-primary tracking-wider">
            {hoveredNode ? (
              <span className="text-gold">
                ★ التفاعل المالي مع <strong>{ECOSYSTEM.find(n => n.id === hoveredNode)?.title}</strong> يوضح تدفق البيانات والعوائد في دورة النمو الفندقية المغلقة.
              </span>
            ) : (
              <span>مرر الفأرة فوق أي مرحلة لتكتشف كيف تترابط وتغذي دورة النمو المالي للفندق بالكامل.</span>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
