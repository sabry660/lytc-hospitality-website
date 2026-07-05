import React, { useState } from "react";
import { PROBLEMS } from "../data";
import { EyeOff, FileWarning, PhoneCall, TrendingDown, ShieldAlert, Search, AlertTriangle, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ICON_MAP: Record<string, any> = {
  Search: Search,
  FileWarning: FileWarning,
  PhoneCall: PhoneCall,
  TrendingDown: TrendingDown,
  ShieldAlert: ShieldAlert,
  EyeOff: EyeOff
};

export default function TheProblem() {
  const [activePain, setActivePain] = useState<string>("visibility");
  
  // Interactive Funnel State
  const [startGuests, setStartGuests] = useState<number>(1000);
  
  // Funnel rates
  const visibilityLeak = 0.40; // 40% lost to search invisibility
  const trustLeak = 0.50; // 50% lost to antique bounce
  const bookingLeak = 0.65; // 65% of remaining book via OTA instead of direct

  // Calculations
  const afterSearch = Math.round(startGuests * (1 - visibilityLeak));
  const afterTrust = Math.round(afterSearch * (1 - trustLeak));
  const directBookers = Math.round(afterTrust * (1 - bookingLeak));
  const otaBookers = afterTrust - directBookers;
  const lostGuests = startGuests - afterTrust;

  // Financial leakage (Assuming average luxury suite stay of 3 nights @ SAR 1200/night = SAR 3600)
  // OTA bookings pay 18% commission = SAR 648 lost per booking
  // Lost guests represent SAR 3600 fully lost per guest
  const otaCommissionLost = otaBookers * 648;
  const directLossFromBounce = lostGuests * 3600;
  const totalLeakageMoney = otaCommissionLost + directLossFromBounce;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="bg-[#050505] py-24 text-ivory border-t border-white/5 font-sans" id="the-problem">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-gold">
            <AlertTriangle size={14} className="text-gold animate-drift" />
            <span className="font-mono text-xs uppercase tracking-widest font-semibold">أزمة هوامش الربح الفندقية</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            فندقك الفاخر يستحق أكثر من <br className="hidden md:block" />
            <span className="italic font-normal text-gold">مجرد صفحة إنترنت صامتة</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-ivory/60 font-light leading-relaxed">
            بناء موقع إلكتروني بمظهر جميل لا يحمي أرباح فندقك من خسارة 20% كعمولة لـ Booking.com، ولا يقلل من ضغط الطوابير والاتصالات على الاستقبال. النمو الحقيقي يتطلب بنية رقمية تفاعلية ومؤتمتة.
          </p>
        </div>

        {/* Funnel Leak Simulator */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Interactive Funnel Visualization */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.01] p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-red-400">قمع تسرب حجوزات وعوائد الفندق</h3>
                    <p className="text-[11px] text-ivory/40 font-mono uppercase tracking-wider mt-0.5">أين تذهب أرباح غرفتك المباشرة؟</p>
                  </div>
                  <div className="font-mono text-[10px] text-red-400/80 bg-red-400/5 px-2.5 py-1 rounded-full border border-red-400/10">
                    عينة المحاكاة السنوية: {startGuests} زائر مهتم
                  </div>
                </div>

                {/* Step 1 */}
                <div className="mt-6 space-y-4">
                  <div className="relative p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-gold/10 text-gold flex items-center justify-center font-mono text-xs">٠١</div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory">زوار محركات البحث بالخليج</h4>
                        <p className="text-[10px] text-ivory/50 mt-0.5">يبحثون عن أجنحة فاخرة بالرياض، جميرا، مسقط أو الدوحة</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-ivory">{startGuests}</span>
                  </div>

                  <div className="flex justify-center my-1">
                    <div className="flex flex-col items-center">
                      <ArrowDown size={14} className="text-red-500/50 animate-bounce" />
                      <span className="text-[9px] font-mono text-red-400/80 bg-red-400/5 px-2.5 py-0.5 rounded border border-red-500/10">
                        خسارة -{(visibilityLeak * 100)}% لعدم الظهور في خرائط وجوجل مابس
                      </span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-gold/10 text-gold flex items-center justify-center font-mono text-xs">٠٢</div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory">زوار موقع الفندق الفعليين</h4>
                        <p className="text-[10px] text-ivory/50 mt-0.5">الضيوف الذين عثروا على رابط موقع فندقك ودخلوا للتصفح</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-ivory/80">{afterSearch}</span>
                  </div>

                  <div className="flex justify-center my-1">
                    <div className="flex flex-col items-center">
                      <ArrowDown size={14} className="text-red-500/50 animate-bounce" />
                      <span className="text-[9px] font-mono text-red-400/80 bg-red-400/5 px-2.5 py-0.5 rounded border border-red-500/10">
                        خروج -{(trustLeak * 100)}% بسبب بطء التصفح وواجهات الموبايل القديمة
                      </span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-gold/10 text-gold flex items-center justify-center font-mono text-xs">٠٣</div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory">النية الجادة لإتمام الحجز واختيار التواريخ</h4>
                        <p className="text-[10px] text-ivory/50 mt-0.5">ضيوف مستعدون لاختيار الغرفة وإتمام عملية الدفع الفوري</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-ivory/70">{afterTrust}</span>
                  </div>

                  <div className="flex justify-center my-1">
                    <div className="flex flex-col items-center">
                      <ArrowDown size={14} className="text-red-500/50 animate-bounce" />
                      <span className="text-[9px] font-mono text-red-400/80 bg-red-400/5 px-2.5 py-0.5 rounded border border-red-500/10">
                        فقدان -{(bookingLeak * 100)}% لمنصات الحجز الخارجية لعدم وجود دفع محلي مرن
                      </span>
                    </div>
                  </div>

                  {/* Final Step */}
                  <div className="relative p-4 rounded-xl border border-gold/20 bg-gold/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded bg-gold/20 text-gold flex items-center justify-center font-mono text-xs">★</div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gold">الحجوزات المباشرة ذات الهامش المالي الكامل</h4>
                        <p className="text-[10px] text-gold/60 mt-0.5">الحجوزات التي تمت بالكامل عبر موقع الفندق ودخلت مباشرة لخزينتكم</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm sm:text-base font-bold text-gold">{directBookers} نزلاء فقط</span>
                  </div>
                </div>
              </div>

              {/* Bottom Financial Analysis */}
              <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] font-mono text-ivory/40 uppercase block">عمولات مهدورة لـ Booking:</span>
                  <span className="font-mono text-xs sm:text-sm text-red-400 font-semibold">{otaBookers} نزلاء عبر المنصات = {formatCurrency(otaCommissionLost)}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-ivory/40 uppercase block">إجمالي تسرب الإيرادات المحتمل:</span>
                  <span className="font-mono text-xs sm:text-sm text-red-400 font-bold">{formatCurrency(totalLeakageMoney)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Problem Cards Interactive List */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-ivory/90 mb-6">
                العقبات الـ 6 الأساسية التي تخنق مبيعات فندقك المباشرة:
              </h3>

              <div className="space-y-3">
                {PROBLEMS.map((problem) => {
                  const IconComp = ICON_MAP[problem.iconName] || AlertTriangle;
                  const isActive = activePain === problem.id;

                  return (
                    <div
                      key={problem.id}
                      onClick={() => setActivePain(problem.id)}
                      className={`cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
                        isActive
                          ? "border-gold bg-gold/[0.02] shadow-lg shadow-gold/5"
                          : "border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2.5 rounded-lg border shrink-0 ${
                          isActive ? "border-gold text-gold bg-gold/5 animate-slow-pulse" : "border-white/10 text-ivory/40 bg-white/[0.01]"
                        }`}>
                          <IconComp size={18} />
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                            <h4 className={`text-xs sm:text-sm uppercase tracking-wider font-semibold ${isActive ? "text-gold" : "text-ivory"}`}>
                              {problem.title}
                            </h4>
                            <span className="font-mono text-[9px] text-red-400 font-medium px-2 py-0.5 rounded bg-red-400/5 border border-red-400/10 w-fit">
                              {problem.impact}
                            </span>
                          </div>
                          
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="mt-3 text-[11px] sm:text-xs text-ivory/70 leading-relaxed">
                                  <strong>العقبة التشغيلية:</strong> {problem.pain}
                                </p>
                                <p className="mt-1.5 text-[11px] sm:text-xs text-gold/80 leading-relaxed font-serif italic">
                                  <strong>تأثيرها المالي:</strong> {problem.outcome}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
