import React, { useState, useEffect } from "react";
import { X, Calculator, Percent, Coins, ArrowLeft, Check, Sparkles, Building, User, Mail, Phone, Globe, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialPackage }: ConsultationModalProps) {
  const [activeTab, setActiveTab] = useState<"calculator" | "form">("form"); // Default directly to the booking form
  
  // Calculator State (Defaulting to a typical GCC luxury boutique hotel)
  const [rooms, setRooms] = useState<number>(80);
  const [adr, setAdr] = useState<number>(950); // In SAR / AED
  const [occupancy, setOccupancy] = useState<number>(72); // Percentage
  const [directPct, setDirectPct] = useState<number>(20); // Current Direct booking percentage
  
  // Results State
  const [otaLeakage, setOtaLeakage] = useState<number>(0);
  const [projectedUpside, setProjectedUpside] = useState<number>(0);
  
  // Form State (Exactly matching user requirements)
  const [hotelName, setHotelName] = useState<string>("");
  const [managerName, setManagerName] = useState<string>("");
  const [country, setCountry] = useState<string>("المملكة العربية السعودية");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [roomCount, setRoomCount] = useState<string>("80");
  const [currentWebsite, setCurrentWebsite] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [bottlenecks, setBottlenecks] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync rooms with roomCount when user changes roomCount input
  useEffect(() => {
    const rc = parseInt(roomCount) || 80;
    setRooms(rc);
  }, [roomCount]);

  // Recalculate metrics on input change
  useEffect(() => {
    const totalRooms = Number(rooms) || 0;
    const rate = Number(adr) || 0;
    const occ = (Number(occupancy) || 0) / 100;
    const direct = (Number(directPct) || 0) / 100;
    
    // Total annual room nights sold
    const annualNights = totalRooms * 365 * occ;
    // Total annual room revenue
    const annualRevenue = annualNights * rate;
    
    // OTA portion (remainder)
    const otaPortion = 1 - direct;
    const otaRevenue = annualRevenue * otaPortion;
    // Estimated average OTA commission (typically 18%)
    const commissions = otaRevenue * 0.18;
    setOtaLeakage(Math.round(commissions));
    
    // Growth simulation: shift direct booking rate up by 25% points
    const commissionSavings = annualRevenue * 0.25 * 0.18;
    // Extra occupancy and length of session premium (typically +4% total ADR/rev expansion)
    const organicExpansion = annualRevenue * 0.04;
    setProjectedUpside(Math.round(commissionSavings + organicExpansion));
  }, [rooms, adr, occupancy, directPct]);

  const toggleBottleneck = (id: string) => {
    if (bottlenecks.includes(id)) {
      setBottlenecks(bottlenecks.filter((item) => item !== id));
    } else {
      setBottlenecks([...bottlenecks, id]);
    }
  };

  const [lastWhatsappUrl, setLastWhatsappUrl] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const messageText = `السلام عليكم ورحمة الله وبركاته،
أود حجز استشارة فندقية رقمية من لايتك (LYTC). تفاصيل الطلب:

• اسم الفندق: ${hotelName}
• اسم المدير/المسؤول: ${managerName}
• الدولة: ${country}
• رقم الهاتف والواتساب: ${phone}
• البريد الإلكتروني: ${email}
• عدد الغرف والمفاتيح: ${roomCount}
• الموقع الإلكتروني الحالي: ${currentWebsite || "لا يوجد"}
• العوائد المستردة السنوية المتوقعة: ${projectedUpside.toLocaleString()} ريال/درهم سنوياً
• الرسالة: ${message || "لا توجد تفاصيل إضافية"}`;

    const whatsappUrl = `https://wa.me/201070853978?text=${encodeURIComponent(messageText)}`;
    setLastWhatsappUrl(whatsappUrl);
    setIsSubmitted(true);
    
    // Attempt to redirect/open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setActiveTab("form");
    setHotelName("");
    setManagerName("");
    setCountry("المملكة العربية السعودية");
    setPhone("");
    setEmail("");
    setRoomCount("80");
    setCurrentWebsite("");
    setMessage("");
    setBottlenecks([]);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => { onClose(); resetModal(); }}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/20 bg-[#0A0A0A] text-ivory shadow-2xl md:grid md:grid-cols-12 max-h-[90vh]"
          id="consultation-modal"
        >
          {/* Close button */}
          <button
            onClick={() => { onClose(); resetModal(); }}
            className="absolute top-4 left-4 z-20 rounded-full border border-white/10 bg-black/40 p-2 text-ivory/60 hover:border-gold/30 hover:text-gold transition-colors duration-300 cursor-pointer"
            id="close-modal-btn"
          >
            <X size={16} />
          </button>

          {/* Left Column: Direct ROI Summary or Branding */}
          <div className="bg-black/50 p-6 md:col-span-5 md:flex md:flex-col md:justify-between md:border-l md:border-gold/10 md:p-8 text-right order-last md:order-first border-t md:border-t-0 border-white/5">
            <div>
              <div className="flex items-center gap-2 text-gold justify-start flex-row-reverse">
                <Sparkles size={16} className="text-gold" />
                <span className="font-mono text-xs uppercase tracking-widest font-semibold">استشارات لايتك الرقمية</span>
              </div>
              <h3 className="mt-3 font-serif text-xl sm:text-2xl font-semibold leading-tight text-white">
                شخّص العوائد الضائعة لغرف فندقك
              </h3>
              <p className="mt-2 text-xs text-ivory/60 leading-relaxed font-light">
                تقتطع منصات الحجز الخارجية عمولات ضخمة من فندقك لافتقار بنية موقع فندقك لنفس القدرة الإقناعية والسرعة البرمجية. دعنا نلقي نظرة على الفارق المالي الفعلي.
              </p>
            </div>

            {/* Live Financial Calculations */}
            <div className="my-6 space-y-4 rounded-xl border border-gold/15 bg-gold/[0.02] p-4 md:my-0 text-right">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] text-ivory/40 uppercase font-mono tracking-wider justify-start flex-row-reverse">
                  <span className="w-full">تقدير العمولات المهدرة لـ OTAs سنوياً</span>
                  <Coins size={12} className="text-red-400 shrink-0 ml-1.5" />
                </div>
                <div className="mt-1 font-mono text-lg sm:text-xl font-bold text-red-400">
                  {adr > 0 ? "ريال / درهم " : ""}{otaLeakage.toLocaleString()}
                </div>
                <p className="text-[10px] text-ivory/40 mt-0.5">
                  رأس مال يتم التنازل عنه لصالح محركات الحجز الأجنبية.
                </p>
              </div>

              <div className="border-t border-gold/10 pt-3">
                <div className="flex items-center gap-1.5 text-[10px] text-gold uppercase font-mono tracking-wider justify-start flex-row-reverse">
                  <span className="w-full">العوائد المباشرة الإضافية المستردة</span>
                  <Percent size={12} className="text-gold shrink-0 ml-1.5" />
                </div>
                <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-gold gold-gradient-text">
                  {adr > 0 ? "ريال / درهم " : ""}{projectedUpside.toLocaleString()} <span className="text-[10px] text-gold font-normal">/ سنوياً</span>
                </div>
                <p className="text-[10px] text-gold/60 mt-0.5">
                  أرباح مستعادة بفضل واجهات الحجز المباشرة للنزلاء.
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-1.5 text-[10px] text-ivory/40 justify-start flex-row-reverse">
                <Check size={12} className="text-gold shrink-0 ml-1.5" />
                <span>الخوادم السحابية تمتثل لسياسات حفظ البيانات بالخليج</span>
              </div>
            </div>
          </div>

          {/* Right Column: Active Interactive View */}
          <div className="p-6 md:col-span-7 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto no-scrollbar text-right">
            {!isSubmitted ? (
              <>
                {/* Tabs */}
                <div className="flex border-b border-gold/10 pb-4 justify-start flex-row-reverse">
                  <button
                    onClick={() => setActiveTab("form")}
                    className={`pb-2 pl-6 font-mono text-xs uppercase tracking-wider relative cursor-pointer ${
                      activeTab === "form" ? "text-gold font-bold" : "text-ivory/40"
                    }`}
                  >
                    ١. احجز استشارتك المباشرة
                    {activeTab === "form" && (
                      <motion.div layoutId="modalTab" className="absolute bottom-0 right-0 left-6 h-[2px] bg-gold" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab("calculator")}
                    className={`pb-2 px-4 font-mono text-xs uppercase tracking-wider relative cursor-pointer ${
                      activeTab === "calculator" ? "text-gold font-bold" : "text-ivory/40"
                    }`}
                  >
                    ٢. حاسبة الأرباح التفاعلية
                    {activeTab === "calculator" && (
                      <motion.div layoutId="modalTab" className="absolute bottom-0 right-4 left-4 h-[2px] bg-gold" />
                    )}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="py-4 flex-grow text-right">
                  {activeTab === "calculator" ? (
                    <div className="space-y-4 text-right">
                      <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase justify-start flex-row-reverse">
                        <Calculator size={14} className="shrink-0 ml-1.5" />
                        <span>محاكي وحاسبة عوائد الغرف الفندقية بالخليج</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-right">
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1">عدد المفاتيح / الغرف بالفندق</label>
                          <input
                            type="number"
                            value={roomCount}
                            onChange={(e) => setRoomCount(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none transition-colors text-right"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1">متوسط سعر الليلة ADR (بالريال/الدرهم)</label>
                          <input
                            type="number"
                            value={adr}
                            onChange={(e) => setAdr(Math.max(1, parseInt(e.target.value) || 0))}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none transition-colors text-right"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1">نسبة الإشغال السنوي الفعلي (%)</label>
                          <input
                            type="range"
                            min="10"
                            max="100"
                            value={occupancy}
                            onChange={(e) => setOccupancy(parseInt(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold mt-3 mb-2"
                          />
                          <div className="text-left text-xs font-mono text-gold">{occupancy}% نسبة الإشغال</div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1">نسبة الحجوزات المباشرة الحالية (%)</label>
                          <input
                            type="range"
                            min="5"
                            max="80"
                            value={directPct}
                            onChange={(e) => setDirectPct(parseInt(e.target.value))}
                            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold mt-3 mb-2"
                          />
                          <div className="text-left text-xs font-mono text-gold">{directPct}% حجز مباشر ({ (100 - directPct) }% عبر المنصات)</div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-right">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-gold mb-1">الهدف التشغيلي الذي نلتزم بتقديمه:</h4>
                        <p className="text-[11px] text-ivory/70 leading-relaxed font-sans">
                          نحن نهيئ موقع فندقك وبوابة النزيل لرفع نسبة الحجز المباشر لتبلغ <strong>{(directPct + 25)}% على الأقل</strong> خلال 4 أشهر، مما يمنع تسرب العمولات الصافية ويحقق تدفقاً نقدياً مستداماً.
                        </p>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          onClick={() => setActiveTab("form")}
                          className="flex items-center gap-2 rounded-lg bg-gold hover:bg-gold-light text-black px-6 py-2.5 text-xs uppercase font-mono tracking-widest font-bold transition-all duration-300 shadow-lg shadow-gold/15 cursor-pointer"
                        >
                          <span>اذهب لحجز الاستشارة المباشرة</span>
                          <ArrowLeft size={14} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 text-right">
                      
                      {/* Premium Form Fields as Requested */}
                      <div className="grid grid-cols-2 gap-4">
                        
                        {/* 1. Hotel Name */}
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <Building size={12} className="text-gold shrink-0 ml-1.5" />
                            اسم الفندق / المنتجع
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="مثال: فندق قصر الحمراء"
                            value={hotelName}
                            onChange={(e) => setHotelName(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right"
                          />
                        </div>

                        {/* 2. Manager Name */}
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <User size={12} className="text-gold shrink-0 ml-1.5" />
                            اسم المدير / المسؤول
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="مثال: أ. فيصل الرشيد"
                            value={managerName}
                            onChange={(e) => setManagerName(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right"
                          />
                        </div>

                        {/* 3. Country (Select Dropdown) */}
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <Globe size={12} className="text-gold shrink-0 ml-1.5" />
                            الدولة
                          </label>
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-xs text-ivory focus:border-gold/50 focus:outline-none transition-colors text-right cursor-pointer"
                          >
                            <option value="المملكة العربية السعودية">المملكة العربية السعودية (KSA)</option>
                            <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة (UAE)</option>
                            <option value="دولة قطر">دولة قطر (Qatar)</option>
                            <option value="سلطنة عمان">سلطنة عمان (Oman)</option>
                            <option value="مملكة البحرين">مملكة البحرين (Bahrain)</option>
                            <option value="دولة الكويت">دولة الكويت (Kuwait)</option>
                          </select>
                        </div>

                        {/* 4. Phone */}
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <Phone size={12} className="text-gold shrink-0 ml-1.5" />
                            رقم الهاتف والواتساب
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="مثال: 0501234567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right font-mono"
                          />
                        </div>

                        {/* 5. Email */}
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <Mail size={12} className="text-gold shrink-0 ml-1.5" />
                            البريد الإلكتروني المهني
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="management@hotel.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right"
                          />
                        </div>

                        {/* 6. Number of Rooms */}
                        <div>
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <Calculator size={12} className="text-gold shrink-0 ml-1.5" />
                            عدد الغرف والمفاتيح بالفندق
                          </label>
                          <input
                            type="number"
                            required
                            value={roomCount}
                            onChange={(e) => setRoomCount(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right font-mono"
                          />
                        </div>

                        {/* 7. Current Website */}
                        <div className="col-span-2">
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <Globe size={12} className="text-gold shrink-0 ml-1.5" />
                            الموقع الإلكتروني الحالي (إن وجد)
                          </label>
                          <input
                            type="url"
                            placeholder="https://myhotel.com"
                            value={currentWebsite}
                            onChange={(e) => setCurrentWebsite(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right font-mono"
                          />
                        </div>

                        {/* 8. Message */}
                        <div className="col-span-2">
                          <label className="block text-xs font-medium text-ivory/60 mb-1.5 flex items-center gap-1 justify-start flex-row-reverse">
                            <MessageSquare size={12} className="text-gold shrink-0 ml-1.5" />
                            الرسالة أو متطلبات استشارية خاصة
                          </label>
                          <textarea
                            rows={3}
                            placeholder="يرجى ذكر أي معلومات تشغيلية أو تفاصيل برمجية تود من كبير مستشاري النمو مراجعتها مسبقاً..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-ivory focus:border-gold/50 focus:outline-none placeholder-ivory/20 transition-colors text-right"
                          />
                        </div>

                      </div>

                      {/* Primary and Secondary CTA Row */}
                      <div className="pt-4 grid gap-3 sm:grid-cols-2">
                        {/* Primary CTA Form Submit */}
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold hover:bg-gold-light text-black py-3.5 text-xs uppercase font-mono tracking-widest font-bold transition-all duration-300 shadow-lg shadow-gold/15 cursor-pointer"
                        >
                          <span>احجز استشارتك المجانية للنمو</span>
                          <ArrowLeft size={14} />
                        </button>

                        {/* Secondary CTA: Direct WhatsApp Connect */}
                        <a
                          href="https://wa.me/201070853978"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 py-3.5 text-xs uppercase font-mono tracking-widest font-bold transition-all duration-300"
                        >
                          <MessageSquare size={14} className="fill-emerald-400 stroke-none" />
                          <span>تحدث معنا فورا عبر واتساب</span>
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </>
            ) : (
              // Success Screen in Arabic
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4 flex-grow justify-center text-center"
              >
                <div className="rounded-full bg-gold/10 border border-gold/30 p-4 text-gold animate-drift">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white">تم استلام طلب الاستشارة بنجاح</h3>
                <p className="text-xs text-ivory/60 max-w-sm leading-relaxed">
                  شكراً لك، سعادة المدير <strong>{managerName}</strong>. لقد قمنا بتوثيق وجمع أرقام الأداء الخاصة بـ <strong>{hotelName}</strong> في {country}. سيقوم كبير مستشاري النمو لدينا بالتواصل معكم هاتفياً على رقمكم <strong>{phone}</strong> خلال ٤ ساعات عمل لإجراء المراجعة.
                </p>
                
                <div className="w-full max-w-xs rounded-xl border border-gold/10 bg-[#0E0E0E] p-4 text-right space-y-2.5 text-[11px] font-mono mt-4">
                  <div className="text-gold uppercase tracking-wider font-bold text-center pb-2 border-b border-gold/15">تفاصيل الملف الرقمي لـ {hotelName}:</div>
                  <div className="flex justify-between flex-row-reverse text-ivory/50"><span>الفندق المستهدف:</span> <span className="text-white font-medium">{hotelName}</span></div>
                  <div className="flex justify-between flex-row-reverse text-ivory/50"><span>عدد المفاتيح المحللة:</span> <span className="text-white font-medium">{rooms} غرفة</span></div>
                  <div className="flex justify-between flex-row-reverse text-ivory/50"><span>العوائد المستردة المتوقعة:</span> <span className="text-gold font-bold">{adr > 0 ? "ريال/درهم " : ""}{projectedUpside.toLocaleString()} سنوياً</span></div>
                </div>

                <div className="pt-4 flex gap-3 w-full max-w-sm justify-center">
                  <button
                    onClick={() => { onClose(); resetModal(); }}
                    className="rounded-lg border border-gold/20 text-gold hover:bg-gold/10 px-5 py-2 text-xs uppercase font-mono tracking-widest transition-all duration-300 cursor-pointer"
                  >
                    العودة للموقع الفندقي
                  </button>
                  <a
                    href={lastWhatsappUrl || "https://wa.me/201070853978"}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 text-xs uppercase font-mono tracking-widest transition-all duration-300 flex items-center gap-1 font-bold"
                  >
                    <span>إرسال الرسالة عبر واتساب</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
