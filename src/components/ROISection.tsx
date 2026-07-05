import React, { useState, useEffect } from "react";
import { Check, ArrowLeft, TrendingUp, Sparkles, Receipt, Percent, Smile, Zap, Eye } from "lucide-react";
import { motion } from "motion/react";

interface ROICardProps {
  title: string;
  value: string;
  sub: string;
  metric: string;
  icon: any;
  color: string;
  desc: string;
}

export default function ROISection() {
  // Simulator State: Number of rooms and Average Daily Rate (ADR)
  const [rooms, setRooms] = useState(80);
  const [adr, setAdr] = useState(1200); // SAR or AED
  const [otaRatio, setOtaRatio] = useState(70); // % of bookings through OTA currently

  // Calculate savings:
  // Occupancy assumed at 65% yearly = rooms * 0.65 * 365
  // Total room revenue yearly = rooms * 0.65 * 365 * adr
  // OTA bookings amount = total revenue * (otaRatio / 100)
  // OTA commissions paid (at 18% avg) = otaBookingsAmount * 0.18
  // With LYTC, we assume direct booking share shifts, saving 60% of OTA commissions.
  const yearlyRoomsSold = Math.round(rooms * 0.68 * 365);
  const yearlyRevenue = yearlyRoomsSold * adr;
  const yearlyOtaPaid = Math.round(yearlyRevenue * (otaRatio / 100) * 0.18);
  const potentialLytcSavings = Math.round(yearlyOtaPaid * 0.65); // 65% of OTA fees recovered

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="bg-[#050505] py-24 text-ivory border-t border-white/5 relative overflow-hidden" id="roi-section">
      {/* Decorative Radial glow */}
      <div className="absolute top-1/2 left-0 h-96 w-96 bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            حاسبة العائد والسيادة المالية
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            استرد عوائد فندقك الضائعة <br />
            <span className="italic font-normal text-gold">وضاعف هوامش ربحك الصافية</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-ivory/60 leading-relaxed font-light">
            نحن لا نتحدث بنظريات عامة. استخدم آلتنا الحاسبة المالية لتقدير حجم العمولات المهدورة سنوياً لصالح المنصات الخارجية، واكتشف رأس المال الذي يمكنك استعادته فوراً عند الشراكة مع لايتك (LYTC).
          </p>
        </div>

        {/* Dynamic Financial Simulator */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch mb-20">
          
          {/* Simulator Inputs */}
          <div className="lg:col-span-5 rounded-2xl border border-white/5 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-ivory mb-2 flex items-center gap-2">
                <Receipt size={18} className="text-gold" />
                المعطيات التشغيلية للفندق
              </h3>
              <p className="text-xs text-ivory/50">قم بتعديل مؤشرات فندقك لترى النتائج الفورية.</p>
            </div>

            {/* Input 1: Number of Rooms */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-ivory/60">عدد غرف الفندق / الأجنحة:</span>
                <span className="text-gold font-bold">{rooms} غرفة</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full accent-gold bg-white/10 h-1 rounded-lg cursor-pointer"
              />
            </div>

            {/* Input 2: ADR */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-ivory/60">متوسط سعر الليلة (ADR):</span>
                <span className="text-gold font-bold">{adr} ريال سعودي / درهم</span>
              </div>
              <input
                type="range"
                min="200"
                max="8000"
                step="50"
                value={adr}
                onChange={(e) => setAdr(Number(e.target.value))}
                className="w-full accent-gold bg-white/10 h-1 rounded-lg cursor-pointer"
              />
            </div>

            {/* Input 3: OTA Share */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-ivory/60">حصة الحجوزات الحالية عبر Booking / المنصات:</span>
                <span className="text-gold font-bold">{otaRatio}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="95"
                step="5"
                value={otaRatio}
                onChange={(e) => setOtaRatio(Number(e.target.value))}
                className="w-full accent-gold bg-white/10 h-1 rounded-lg cursor-pointer"
              />
            </div>

            <div className="border-t border-white/5 pt-4 text-[10px] text-ivory/40 leading-relaxed font-sans">
              * تم حساب هذه التقديرات على أساس متوسط إشغال سنوي محافظ يبلغ 68%، وعمولة حجز تقليدية تبلغ 18% لصالح المنصات الخارجية.
            </div>
          </div>

          {/* Simulator Outputs */}
          <div className="lg:col-span-7 rounded-2xl border border-gold/20 bg-gold/[0.01] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 h-48 w-48 bg-radial from-gold/5 to-transparent rounded-full pointer-events-none blur-xl" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gold/10 border border-gold/30 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-gold font-bold flex items-center gap-1">
                  <Sparkles size={10} />
                  التحليل المالي المقدر لنتائج الشراكة
                </span>
                <span className="font-mono text-[10px] text-ivory/40">سلس وقائم على البيانات</span>
              </div>

              {/* Box 1: Total Revenue */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <span className="block text-[10px] text-ivory/40 font-mono uppercase">إجمالي إيرادات الغرف السنوية:</span>
                  <span className="block text-lg md:text-xl font-serif font-bold text-ivory mt-1">{formatCurrency(yearlyRevenue)}</span>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <span className="block text-[10px] text-ivory/40 font-mono uppercase">العمولات المهدورة للمنصات حالياً:</span>
                  <span className="block text-lg md:text-xl font-serif font-bold text-red-400 mt-1">{formatCurrency(yearlyOtaPaid)}</span>
                </div>
              </div>

              {/* Big central callout for savings */}
              <div className="bg-white/[0.02] border border-gold/30 rounded-xl p-6 text-center space-y-2">
                <span className="block text-xs text-gold font-mono uppercase tracking-widest font-semibold">العوائد المالية المستردة مع لايتك (LYTC):</span>
                <span className="block text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white gold-gradient-text tracking-tight">
                  {formatCurrency(potentialLytcSavings)}
                </span>
                <p className="text-xs text-ivory/60 max-w-lg mx-auto">
                  هذا رأس مال صافي إضافي يتم توجيهه مباشرة لدعم نموك المالي وتطوير مرافق الفندق، بدلاً من التبرع به كرسوم تسويق للمنصات الأجنبية.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="text-[11px] text-ivory/40 text-center sm:text-right">تتحقق هذه النتائج من خلال توطين التقنية، والسيادة على خرائط جوجل ومحركات البحث.</span>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center rounded-lg bg-gold hover:bg-gold-light text-black px-5 py-2.5 text-xs font-mono font-bold tracking-wider transition-all cursor-pointer"
              >
                احصل على تدقيق مالي لفندقك
              </a>
            </div>
          </div>

        </div>

        {/* Core ROI Value Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all space-y-4">
            <div className="h-10 w-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold">
              <TrendingUp size={18} />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-ivory">نمو الحجوزات المباشرة</h4>
              <p className="text-xs text-ivory/50 mt-1 leading-relaxed">
                زيادة بنسبة تتراوح بين <strong>+150% إلى +350%</strong> في مبيعات الغرف التي تتم مباشرة من موقع الفندق، مما يقلل بشكل ملموس من تكاليف الاستحواذ على النزلاء.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all space-y-4">
            <div className="h-10 w-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold">
              <Percent size={18} />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-ivory">التخلص من عمولات الوسطاء</h4>
              <p className="text-xs text-ivory/50 mt-1 leading-relaxed">
                انخفاض في نسبة الحجوزات القادمة عبر Booking والمنصات الخارجية بمعدل <strong>-60% إلى -80%</strong>، مما يعزز صافي الربح لكل غرفة متاحة.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all space-y-4">
            <div className="h-10 w-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold">
              <Smile size={18} />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-ivory">ارتفاع رضا وتقييمات الضيوف</h4>
              <p className="text-xs text-ivory/50 mt-1 leading-relaxed">
                ترتفع تقييمات الفندق في رضا النزلاء لتصل إلى متوسط <strong>4.9 / 5.0</strong> بفضل دقة ومثالية بوابة الخدمات وبساطة التواصل الرقمي.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all space-y-4">
            <div className="h-10 w-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold">
              <Zap size={18} />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-ivory">سرعة استجابة العمليات الفندقية</h4>
              <p className="text-xs text-ivory/50 mt-1 leading-relaxed">
                توجيه فوري وآلي لجميع خدمات الغرف والصيانة والصيانة المجدولة في غضون <strong>أقل من 60 ثانية</strong>، مما يمنع فوضى وضياع طلبات النزلاء.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all space-y-4">
            <div className="h-10 w-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold">
              <Eye size={18} />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-ivory">السيادة المطلقة على محركات البحث</h4>
              <p className="text-xs text-ivory/50 mt-1 leading-relaxed">
                استحواذ على الكلمات البحثية ذات النية الشرائية الفائقة في دول الخليج، مما يضمن تدفقاً مجانياً ومستداماً لزوار موقعك على مدار الساعة.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all space-y-4">
            <div className="h-10 w-10 rounded-lg bg-gold/5 border border-gold/15 flex items-center justify-center text-gold">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold text-ivory">تكامل محلي ممتثل بنسبة 100%</h4>
              <p className="text-xs text-ivory/50 mt-1 leading-relaxed">
                تفعيل شبكات مدى وكي نت وبنفت وتأمين كامل متوافق مع لوائح الهيئة الوطنية للأمن السيبراني، مع استضافة سحابية محلية في الرياض أو دبي.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
