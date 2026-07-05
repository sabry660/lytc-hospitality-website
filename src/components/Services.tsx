import React, { useState } from "react";
import { 
  Smartphone, QrCode, LayoutDashboard, Instagram, Sparkles, MapPin, 
  TrendingUp, Users, ArrowLeft, Check, Play, RefreshCw, Star, 
  Search, ShieldAlert, PhoneCall, AlertCircle, Eye, Globe, ChevronLeft, ChevronRight, Menu, MapPinned, Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServicesProps {
  onOpenConsultation: (packageName?: string) => void;
  portalRequests: Array<{ id: string; room: string; request: string; time: string; status: "pending" | "dispatched" }>;
  setPortalRequests: React.Dispatch<React.SetStateAction<Array<{ id: string; room: string; request: string; time: string; status: "pending" | "dispatched" }>>>;
}

export default function Services({ onOpenConsultation, portalRequests, setPortalRequests }: ServicesProps) {
  // Service 1: Before/After Slider State (0 to 100 percentage)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Service 2: Portal Loading State
  const [portalSubmitting, setPortalSubmitting] = useState<string | null>(null);
  const [portalSuccess, setPortalSuccess] = useState<string | null>(null);

  // SEO Simulator Search Input State
  const [searchQuery, setSearchQuery] = useState<string>("فندق بوتيك فاخر الرياض");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(true);

  // Before/after slide handle
  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    // For RTL layout, the mouse X coordinate behaves from right to left
    // We adjust the percentage calculation accordingly to feel natural
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, rect);
    }
  };

  // Add Guest Request to state
  const triggerGuestRequest = (requestName: string) => {
    setPortalSubmitting(requestName);
    setTimeout(() => {
      setPortalSubmitting(null);
      setPortalSuccess(requestName);
      
      const newRequest = {
        id: Math.random().toString(),
        room: "جناح ٤٠٨",
        request: requestName,
        time: "الآن",
        status: "pending" as const
      };
      setPortalRequests(prev => [newRequest, ...prev]);

      // clear success alert
      setTimeout(() => setPortalSuccess(null), 3000);
    }, 1200);
  };

  // Dispatch staff handler
  const handleDispatch = (id: string) => {
    setPortalRequests(prev => 
      prev.map(r => r.id === id ? { ...r, status: "dispatched" as const } : r)
    );
  };

  return (
    <div className="bg-[#080808] text-ivory font-sans">
      
      {/* SECTION 1: LUXURY WEBSITE DESIGN */}
      <section className="relative py-28 border-t border-white/5 overflow-hidden" id="luxury-website">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-widest">
                <Sparkles size={14} />
                <span>واجهات رقمية مخصصة للنخبة</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                موقع فندقك يصبح <br />
                <span className="italic font-normal text-gold">أقوى رجل مبيعات لديك</span>
              </h2>

              <p className="text-sm md:text-base text-ivory/60 leading-relaxed font-light">
                لا نستخدم قوالب عامة مكررة. نحن نصمم واجهات حجز سينمائية مخصصة تعكس بدقة هيبة وفخامة فندقك المادي. نطورها بالكامل من الصفر لتستجيب في أجزاء من الثانية، وتدفع النزيل نفسياً للحجز المباشر بلغة عربية وإنكليزية أصيلة وجذابة.
              </p>

              {/* Bullet Features */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2 font-serif text-xs">
                {[
                  "تصميم راقٍ بمستوى أمان", "ثنائية اللغة (عربي/إنجليزي)", "واجهة حجز فائقة السرعة للموبايل",
                  "سرعة تحميل أقل من ثانية", "ربط مرن مع أنظمة إدارة الفنادق (PMS)", "بوابات دفع محلية متكاملة",
                  "استعراض سينمائي للأجنحة", "حجز طاولات الطعام والسبا مباشرة"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span className="text-ivory/80">{f}</span>
                  </div>
                ))}
              </div>

              {/* Case Study Callout */}
              <div className="rounded-xl border border-gold/15 bg-gold/[0.02] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm font-semibold text-gold">دراسة نجاح: منتجع رمال عمان</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold bg-gold/5 px-2 py-0.5 rounded border border-gold/20">نتائج موثقة</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="border-l border-white/5">
                    <div className="font-serif text-xl font-bold text-gold">+٤٢٪</div>
                    <div className="font-mono text-[9px] text-ivory/40 uppercase tracking-wider mt-0.5">الحجوزات المباشرة</div>
                  </div>
                  <div className="border-l border-white/5">
                    <div className="font-serif text-xl font-bold text-gold">+٧١٪</div>
                    <div className="font-mono text-[9px] text-ivory/40 uppercase tracking-wider mt-0.5">زمن تصفح الموقع</div>
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-gold">+٣٣٪</div>
                    <div className="font-mono text-[9px] text-ivory/40 uppercase tracking-wider mt-0.5">مبيعات الخدمات الإضافية</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation("Luxury Launchpad")}
                  className="flex items-center gap-2 rounded-lg bg-gold hover:bg-gold-light text-black px-6 py-3 text-xs uppercase font-mono tracking-widest font-bold transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/20 cursor-pointer"
                >
                  <span>صمم موقع فندقك الفاخر</span>
                  <ArrowLeft size={12} />
                </button>
              </div>
            </div>

            {/* Right: BEFORE/AFTER COMPARISON SLIDER */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ivory/40 mb-3 text-center block">
                ★ اسحب الخط الذهبي للمقارنة بين القالب القديم وإعادة التصميم الاستشارية من لايتك
              </span>

              <div 
                className="relative h-[380px] md:h-[450px] w-full overflow-hidden rounded-2xl border border-white/10 select-none cursor-ew-resize"
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {/* BEFORE (Underneath) */}
                <div className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-8 text-center bg-radial from-neutral-800 to-neutral-950">
                  <div className="max-w-md space-y-4 filter opacity-40">
                    <span className="font-mono text-xs uppercase text-red-400 border border-red-400/20 px-2.5 py-0.5 rounded-full bg-red-400/5">الموقع الفندقي القديم والمكرر (٢٠٢٠)</span>
                    <h3 className="text-2xl font-sans font-bold text-white tracking-tight">مرحباً بكم في فندق قصر الصحراء</h3>
                    <div className="h-2 w-full bg-neutral-700 rounded overflow-hidden">
                      <div className="h-full w-1/3 bg-neutral-500" />
                    </div>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      نحن نقدم غرفاً مريحة وبأسعار منافسة في وسط المدينة لجميع العائلات والمسافرين والخدمات المتكاملة...
                    </p>
                    <div className="flex gap-2 justify-center">
                      <div className="h-8 w-20 bg-neutral-800 rounded border border-neutral-700" />
                      <div className="h-8 w-20 bg-neutral-800 rounded border border-neutral-700" />
                    </div>
                  </div>
                  {/* Warning labels of the old site */}
                  <div className="absolute bottom-6 right-6 flex items-center gap-1.5 font-mono text-[10px] text-red-400 bg-red-400/5 px-2.5 py-1 rounded border border-red-500/10">
                    <ShieldAlert size={10} />
                    <span>تحميل بطيء ٤.٨ ثانية (خروج ٤٥٪ من النزلاء)</span>
                  </div>
                </div>

                {/* AFTER (Sliding Overlay) */}
                <div 
                  className="absolute inset-y-0 left-0 right-0 overflow-hidden bg-[#0A0A0A]"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <div className="absolute inset-0 bg-cover bg-center flex flex-col justify-between p-8 text-right" style={{ backgroundImage: `linear-gradient(to top, rgba(8,8,8,0.95), rgba(8,8,8,0.4)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80')` }}>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif text-sm font-bold uppercase tracking-wider text-gold">Al-Sahara Palace</span>
                        <span className="font-mono text-[8px] text-gold/60 border border-gold/30 px-1.5 py-0.2 rounded">الرياض</span>
                      </div>
                      <div className="flex gap-2 font-mono text-[10px]">
                        <span className="text-ivory/40">EN</span>
                        <span className="text-gold">العربية</span>
                      </div>
                    </div>

                    <div className="max-w-md space-y-3 mr-auto text-right">
                      <div className="flex items-center gap-1 text-gold justify-end">
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <Star size={10} fill="currentColor" />
                        <span className="text-[9px] text-gold font-mono mr-1 uppercase">فخامة ملكية خليجية</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light leading-tight">
                        واحة السكينة والرفاهية <br />
                        <span className="italic font-normal gold-gradient-text">في قلب العاصمة</span>
                      </h3>
                      <p className="text-[11px] text-ivory/70 leading-relaxed font-light">
                        اكتشف كرم الضيافة العربية الأصيلة الممزوج بالتقنية المتقدمة. أجنحة ملكية فسيحة، مسابح خاصة مغلقة، ومطاعم فاخرة تلبي ذائقتكم الاستثنائية.
                      </p>
                      
                      <div className="flex gap-2.5 pt-1 justify-end">
                        <button className="rounded bg-gold text-black font-mono text-[9px] uppercase tracking-wider font-bold px-4 py-2 border border-gold cursor-pointer">
                          احجز مباشرة ووفر ١٥٪
                        </button>
                        <button className="rounded border border-white/20 bg-white/5 font-mono text-[9px] uppercase tracking-wider font-medium px-4 py-2 text-ivory cursor-pointer">
                          استعرض الأجنحة الملكية
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-white/5 pt-4">
                      <div className="flex gap-4 font-mono text-[9px] text-ivory/40">
                        <span>الردهة</span>
                        <span>السبا</span>
                        <span>الطعام</span>
                      </div>
                      <span className="font-mono text-[9px] text-gold uppercase tracking-wider font-semibold">
                        ✓ سرعة تحميل ٠.٨ ثانية (سيرفرات الرياض السحابية)
                      </span>
                    </div>
                  </div>
                </div>

                {/* SLIDER DIVISION BAR */}
                <div 
                  className="absolute inset-y-0 w-1 bg-gold cursor-ew-resize z-20 flex items-center justify-center shadow-lg shadow-gold/20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="h-10 w-10 rounded-full border border-gold bg-black/90 flex items-center justify-center text-gold shadow-md select-none">
                    <span className="font-serif text-xs">↔</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between font-mono text-[10px] text-ivory/40 px-2">
                <span>قبل: قالب ويب قديم بطيء ومعدلات تحويل منخفضة للغاية</span>
                <span className="text-gold font-semibold">بعد: موقع مخصص خاطف للأنفاس ذو عوائد وحجوزات فائقة</span>
              </div>
            </div>
          </div>

        </div>
      </section>
 
      {/* SECTION 2 & 3: THE CONNECTED GUEST PORTAL & STAFF DASHBOARD */}
      <section className="relative py-28 bg-[#050505] border-t border-white/5" id="guest-portal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 text-gold">
              <QrCode size={14} className="text-gold" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">أتمتة غرف النزلاء دون تحميل تطبيقات</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              بوابة النزلاء الفورية و <br />
              <span className="italic font-normal text-gold">لوحة التوجيه والتشغيل المركزي</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-ivory/60 font-light leading-relaxed font-sans">
              عندما يمسح النزيل رمز الـ QR داخل الغرفة، تفتح أمامه فوراً وبدون أي عوائق بوابة الخدمات الفندقية لطلب أي خدمة بلمسة واحدة. تفاعل مع المحاكي الحي أدناه: اضغط على أي طلب داخل الموبايل، وشاهد ظهوره اللحظي في لوحة تحكم الاستقبال والخدمة.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* GUEST PORTAL SMARTPHONE MOCKUP (Left Col) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative mb-3 flex items-center gap-1.5 rounded-full bg-gold/5 border border-gold/10 px-3 py-1 text-[10px] uppercase font-mono tracking-wider text-gold font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                موبايل النزيل (جناح ٤٠٨)
              </div>

              {/* SPH PHONE CASE */}
              <div className="relative w-[280px] h-[550px] rounded-[40px] border-8 border-neutral-800 bg-black shadow-2xl overflow-hidden flex flex-col justify-between p-3 select-none">
                
                {/* Phone Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-800 rounded-b-xl z-30" />

                {/* App Screen Container */}
                <div className="h-full w-full rounded-[28px] bg-dark-bg border border-white/5 flex flex-col justify-between overflow-hidden p-3 relative text-xs">
                  
                  {/* Top Bar Status */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-ivory/40 pb-2 border-b border-white/5 pt-1.5">
                    <span>جناح ٤٠٨</span>
                    <span className="text-gold font-semibold">منتجع قصر المها</span>
                    <span>شبكة الفندق ✓</span>
                  </div>

                  {/* App Screen Scrollable Content */}
                  <div className="flex-grow overflow-y-auto no-scrollbar py-3 space-y-4 text-right">
                    {/* Welcome Header */}
                    <div className="text-center space-y-1">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-gold font-semibold">مرحباً بضيفنا الكريم</span>
                      <h4 className="font-serif text-sm font-semibold">أ. فيصل بن عبد العزيز</h4>
                      <p className="text-[9px] text-ivory/40">نتمنى لك إقامة استثنائية ملؤها الراحة.</p>
                    </div>

                    {/* Notification Alert within app */}
                    <AnimatePresence mode="wait">
                      {portalSubmitting && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="rounded-lg bg-gold/5 border border-gold/20 p-2 text-center text-[9px] text-gold font-mono flex items-center justify-center gap-1.5"
                        >
                          <RefreshCw size={10} className="animate-spin" />
                          جاري إرسال طلبك للاستقبال...
                        </motion.div>
                      )}
                      
                      {portalSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="rounded-lg bg-green-500/10 border border-green-500/20 p-2 text-center text-[9px] text-green-400 font-mono flex items-center justify-center gap-1.5"
                        >
                          <Check size={10} className="text-green-400" />
                          تم الإرسال! يظهر الآن بلوحة طاقم الفندق.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Quick Request Grid */}
                    <div className="space-y-2">
                      <span className="block font-mono text-[8px] text-ivory/40 uppercase tracking-widest text-right">اضغط لطلب خدمة فورية لغرفتك</span>
                      
                      {[
                        { name: "قهوة عربية وتمر خلاص", desc: "تقدم دافئة مع الهيل والزعفران", category: "خدمات الطعام" },
                        { name: "مناشف وأغطية قطنية بيضاء", desc: "استبدال فوري ومعقم للغرفة", category: "الخدمة والترتيب" },
                        { name: "حجز سبا واحة المها ٩٠ دقيقة", desc: "جلسة مساج فاخرة بالعود والمسك", category: "الاستجمام" },
                        { name: "طلب تمديد الخروج المتأخر", desc: "تمديد الإقامة تلقائياً حتى ٣:٠٠ م", category: "المغادرة" },
                        { name: "تجهيز السيارة عند البوابة", desc: "توصيل سيارتكم من الفاليت للاستقبال", category: "الكونسيرج" }
                      ].map((item) => (
                        <button
                          key={item.name}
                          disabled={portalSubmitting !== null}
                          onClick={() => triggerGuestRequest(item.name)}
                          className="w-full text-right rounded-lg border border-white/5 bg-white/[0.02] p-2.5 hover:border-gold/30 hover:bg-gold/[0.01] transition-all duration-300 block"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] font-mono text-gold uppercase tracking-wider">{item.category}</span>
                            <span className="font-serif text-[11px] font-semibold text-ivory/95">{item.name}</span>
                          </div>
                          <span className="block text-[9px] text-ivory/40 mt-1 font-sans">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* App Navigation Footer */}
                  <div className="border-t border-white/5 pt-2 flex justify-between items-center text-[9px] font-mono text-ivory/40 px-1">
                    <span className="text-gold">★ الرئيسية</span>
                    <span>الغرفة</span>
                    <span>الطعام</span>
                    <span>محادثة</span>
                  </div>

                </div>
              </div>
              <p className="text-xs text-ivory/40 text-center max-w-xs mt-3 leading-relaxed font-sans">
                حل الـ QR يغني النزيل تماماً عن تعقيد تحميل التطبيقات، بمعدل تبني يتجاوز ٨٥٪.
              </p>
            </div>

            {/* STAFF OPERATIONS DASHBOARD (Right Col) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-6 md:p-8 space-y-6">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-white/5 gap-3">
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-start sm:justify-start">
                      <div className="h-3 w-3 rounded-full bg-gold animate-slow-pulse" />
                      <h3 className="font-serif text-lg font-semibold text-ivory">مركز توجيه وتشغيل العمليات المركزي</h3>
                    </div>
                    <p className="text-[11px] text-ivory/40 font-mono uppercase tracking-wider mt-0.5">لوحة طاقم الاستقبال والمتابعة المباشرة لحظة بلحظة</p>
                  </div>

                  <div className="flex gap-2 text-xs font-mono">
                    <span className="bg-gold/10 text-gold border border-gold/20 px-2.5 py-1 rounded-full text-[10px]">
                      الطلبات النشطة: {portalRequests.filter(r => r.status === "pending").length} طلب معلق
                    </span>
                    <button 
                      onClick={() => setPortalRequests([
                        { id: "1", room: "فيلا ١٠٢", request: "صيانة عاجلة للجاكوزي الخاص", time: "منذ دقيقتين", status: "pending" },
                        { id: "2", room: "جناح ٣١٥", request: "سيارة نقل النزيل للشارتر الخاص", time: "منذ ٥ دقائق", status: "pending" },
                        { id: "3", room: "غرفة ١١٠", request: "تقديم الإفطار الخليجي في الغرفة", time: "منذ ١٢ دقيقة", status: "dispatched" }
                      ])}
                      className="text-ivory/50 hover:text-gold border border-white/10 px-2.5 py-1 rounded-full hover:border-gold/30 transition-colors cursor-pointer text-[10px]"
                    >
                      إعادة تعيين القائمة
                    </button>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-6">
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg text-center">
                    <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">متوسط سرعة تلبية الطلب</span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-gold mt-1">٤.٢ دقيقة</span>
                    <span className="block text-[8px] text-green-400 font-mono mt-1">✓ أسرع بـ ٦٠٪ من الهاتف</span>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg text-center">
                    <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">مبيعات الخدمات الإضافية</span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-gold mt-1">١٨,٤٥٠ ريال</span>
                    <span className="block text-[8px] text-green-400 font-mono mt-1">✓ نمو مبيعات الغرف +٢٢٪</span>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg text-center">
                    <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">كفاءة وتوزيع المهام</span>
                    <span className="block font-serif text-base sm:text-lg font-bold text-gold mt-1">٩٨.٤٪</span>
                    <span className="block text-[8px] text-green-400 font-mono mt-1">✓ صفر طلبات ضائعة</span>
                  </div>
                </div>

                {/* Live Requests Dispatcher */}
                <div className="space-y-3 text-right">
                  <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">جدول المتابعة الفوري (اتصال عبر الـ WebSockets)</span>
                  
                  <div className="max-h-[220px] overflow-y-auto space-y-2 pl-1 no-scrollbar">
                    {portalRequests.length === 0 ? (
                      <div className="py-8 text-center text-ivory/30 text-xs font-mono border border-dashed border-white/5 rounded-xl">
                        لا توجد طلبات معلقة في الطابور حالياً. اضغط على أي خدمة داخل هاتف النزيل على اليمين لمحاكاة الطلب الفوري!
                      </div>
                    ) : (
                      portalRequests.map((req) => (
                        <div 
                          key={req.id} 
                          className={`rounded-xl border p-4 flex justify-between items-center transition-all duration-300 text-right ${
                            req.status === "pending" 
                              ? "border-gold/30 bg-gold/[0.01] shadow shadow-gold/5" 
                              : "border-white/5 bg-white/[0.01] opacity-60"
                          }`}
                        >
                          <div>
                            {req.status === "pending" ? (
                              <button 
                                onClick={() => handleDispatch(req.id)}
                                className="rounded bg-gold hover:bg-gold-light text-black font-mono text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 transition-colors cursor-pointer"
                              >
                                توجيه الموظف فوراً
                              </button>
                            ) : (
                              <span className="font-mono text-[9px] text-green-400 uppercase tracking-wider font-semibold border border-green-500/10 bg-green-500/5 px-2.5 py-1 rounded">
                                ✓ تم التوجيه والحل
                              </span>
                            )}
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-2 justify-end">
                              <span className="font-mono text-[9px] text-ivory/40">{req.time}</span>
                              <span className={`font-serif text-xs font-semibold px-2 py-0.5 rounded ${
                                req.status === "pending" ? "bg-gold/15 text-gold border border-gold/20" : "bg-white/5 text-ivory/50"
                              }`}>
                                {req.room}
                              </span>
                            </div>
                            <span className="block text-xs font-serif text-ivory/90 font-medium text-right">
                              {req.request}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>

              {/* Business Case Study Callout */}
              <div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 space-y-4 text-right">
                <h4 className="font-serif text-base font-semibold text-gold flex items-center gap-1.5 justify-start">
                  <LayoutDashboard size={16} />
                  دراسة العائد التشغيلي: منتجع الفلل الملكية بجميرا
                </h4>
                <div className="grid gap-4 sm:grid-cols-3 font-serif">
                  <div className="border-l border-white/5 pl-2 text-right">
                    <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">العقبة السابقة</span>
                    <p className="text-xs text-ivory/80 mt-1 font-light leading-relaxed">تلقي الاستقبال لأكثر من ٢٠٠ اتصال يومي مكرر لطلب ثلج أو مناشف يدوية.</p>
                  </div>
                  <div className="border-l border-white/5 pl-2 text-right">
                    <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">الحل المطبق</span>
                    <p className="text-xs text-ivory/80 mt-1 font-light leading-relaxed">بوابة النزيل الفورية عبر QR + لوحة توجيه الطلبات الإلكترونية المباشرة.</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-[9px] text-ivory/40 uppercase tracking-widest">النتيجة المالية</span>
                    <p className="text-xs text-gold font-semibold mt-1 leading-relaxed">خفض اتصالات الاستقبال بنسبة ٧٣٪، وتوفير ٤ ساعات عمل يومية لطاقمك.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 & 5: MARKETING & SEO SERVICES */}
      <section className="relative py-28 border-t border-white/5" id="marketing">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left text column: Marketing & SEO */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-widest">
                <Instagram size={14} />
                <span>الاستحواذ وحصد رغبات الحجز الفاخر</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                توقف عن مطاردة العشوائيين. <br />
                استقطب <span className="italic font-normal text-gold">الطلب الخليجي عالي الملاءة</span>
              </h2>

              <p className="text-sm md:text-base text-ivory/60 leading-relaxed font-light font-sans">
                شركات التسويق العامة تلاحق تجميع "الإعجابات" الوهمية. نحن نحدد ونستهدف العائلات الخليجية الكبرى ورجال الأعمال رفيعي المستوى. نصمم محتوى إنستغرام بمظهر سينمائي وندير حملات السيادة المحلية (SEO) لتجعل فندقك أول ما تقع عليه أعين الضيوف في محركات البحث.
              </p>

              <div className="space-y-4 text-right">
                <div className="border-r-2 border-gold/40 pr-4 space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-ivory">محتوى مرئي بمظهر سينمائي</h4>
                  <p className="text-xs text-ivory/60 font-sans">فيديوهات قصيرة ورسومات مخصصة تبرز روعة مرافق فندقك، طاولات الطعام الفاخرة، وخصوصية فلل الإقامة.</p>
                </div>
                <div className="border-r-2 border-gold/40 pr-4 space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-ivory">السيادة على الكلمات البحثية ذات العائد المرتفع</h4>
                  <p className="text-xs text-ivory/60 font-sans">تصدر الصدارة المطلقة لعبارات البحث الجاذبة: "منتجع صحراوي فاخر الرياض"، "أجنحة بمسبح خاص دبي"، "فيلات شاطئية مسقط".</p>
                </div>
              </div>

              {/* Case Study */}
              <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5 text-right">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-mono text-[9px] text-green-400 bg-green-500/5 px-2 rounded border border-green-500/10">زيادة حركة المرور +٤٢٠٪</span>
                  <span className="font-serif text-xs font-semibold text-gold">نتيجة السيادة الرقمية: فندق الملز بالرياض</span>
                </div>
                <p className="text-xs text-ivory/60 mt-2 font-serif italic">
                  "تضاعفت طلبات الحجز المباشر للشركات والمسؤولين لدينا بمعدل ٤ مرات في غضون ٩٠ يوماً فقط. نحن نتصدر الآن كافة الكلمات الاستراتيجية للضيافة الفاخرة بالعاصمة."
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation("Ecosystem Growth")}
                  className="rounded-lg border border-gold/20 hover:bg-gold/10 text-gold px-6 py-3 text-xs uppercase font-mono tracking-widest transition-all duration-300 cursor-pointer"
                >
                  استقطب نزلاء فندقك النخبة
                </button>
              </div>
            </div>

            {/* Right Interactive Mockups Column: Search Simulator & Instagram Feed */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* GOOGLE SEO SIMULATOR */}
              <div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-white/5 pb-3 justify-between">
                  <span className="text-[9px] font-mono text-green-400 font-semibold bg-green-500/5 px-2 py-0.5 rounded">تم تمكين الصدارة رقم #01 بجوجل</span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-ivory/40">
                    <Search size={12} className="text-gold" />
                    <span>محاكي قوة ظهور وتصدر البحث (SEO)</span>
                  </div>
                </div>

                {/* Mock Search Input */}
                <div className="flex gap-2">
                  <button className="rounded bg-gold text-black font-mono text-[9px] uppercase px-4 py-1.5 font-bold cursor-pointer">ابحث في جوجل</button>
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-black/40 pr-8 pl-3 py-1.5 text-xs text-ivory text-right focus:border-gold/50 focus:outline-none"
                    />
                    <Search size={10} className="absolute right-3 top-1/2 -translate-y-1/2 text-ivory/30" />
                  </div>
                </div>

                {/* Search Result Snippet */}
                <div className="rounded-lg border border-gold/20 bg-gold/[0.01] p-4 space-y-1 text-xs text-right">
                  <div className="flex items-center gap-1.5 text-[10px] text-ivory/40 font-mono justify-end">
                    <span className="text-gold">▼ موقع حجز فندقي آمن ومباشر</span>
                    <span>https://symphonysands.com</span>
                  </div>
                  
                  <h4 className="font-serif text-sm font-semibold text-blue-400 hover:underline cursor-pointer">
                    منتجع رمال السيمفونية مسقط — أجنحة فخمة مطلة على البحر وفيلات شاطئية خاصة
                  </h4>

                  <div className="flex items-center gap-1.5 text-gold text-[10px] font-mono py-0.5 justify-end">
                    <span>تقييم فندق ممتاز: ٥.٠ — ٤٨٢ تقييم موثق — متوفر حجز مباشر فوري غرف وأجنحة</span>
                    <div className="flex items-center">
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                      <Star size={10} fill="currentColor" />
                    </div>
                  </div>

                  <p className="text-[11px] text-ivory/60 leading-relaxed pt-1">
                    احجز إقامتك الفاخرة مباشرة عبر بوابة الفندق الآمنة لتستفيد فوراً من حزمة ترحيبية تشمل دخول مجاني للردهة التنفيذية، توصيل خاص مجاني من المطار وسيارات فارهة، وخصم <strong>١٥٪ حصري على أسعار الغرف اليومية</strong>. احجز الآن.
                  </p>

                  <div className="pt-2 flex gap-4 text-[10px] font-mono text-gold justify-end">
                    <span className="hover:underline cursor-pointer">★ خصم ١٥٪ للحجز المباشر</span>
                    <span className="hover:underline cursor-pointer">استعرض الفيلات المطلة على الجرف</span>
                    <span className="hover:underline cursor-pointer">باقات السبا والراحة</span>
                  </div>
                </div>
              </div>

              {/* INSTAGRAM GRID */}
              <div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-mono text-[9px] text-gold bg-gold/5 border border-gold/15 px-2 py-0.5 rounded">
                    +١٣,٤٠٠ متابع حقيقي مستهدف بالخليج
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="block text-xs font-serif font-semibold text-ivory leading-tight">symphonysands.resort</span>
                      <span className="block text-[8px] font-mono text-ivory/40">مسقط، عمان</span>
                    </div>
                    <div className="h-6 w-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-serif text-[10px] text-gold font-bold">L</div>
                  </div>
                </div>

                {/* 3 Grid Images */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=300&q=80", likes: "١.٢ ألف", comments: "٤٨" },
                    { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80", likes: "٩٨٢", comments: "٣١" },
                    { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=300&q=80", likes: "١.٤ ألف", comments: "٥٤" }
                  ].map((img, i) => (
                    <div key={i} className="relative group overflow-hidden rounded aspect-square border border-white/5 cursor-pointer">
                      <img 
                        src={img.url} 
                        alt="انستغرام فنادق فاخرة" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-[10px] font-mono">
                        <span className="text-gold">❤ {img.likes}</span>
                        <span>💬 {img.comments}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6 & 7: MAPS & ANALYTICS OUTCOME */}
      <section className="relative py-28 bg-[#050505] border-t border-white/5" id="google-maps">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Interactive Map Profile & Analytical Dashboard */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* MOCK GOOGLE MAPS UI CARD */}
              <div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5 space-y-4 shadow-xl">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-[9px] font-mono text-green-400 bg-green-500/5 border border-green-500/10 px-2 py-0.5 rounded">
                    +١٨٠٪ طلب خطوط واتجاهات الملاحة
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-ivory/40">
                    <MapPin size={12} className="text-gold animate-drift" />
                    <span>منصة تحسين وتوطين خرائط جوجل وجوجل مابس</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-12 items-start">
                  {/* Map Profile Mock */}
                  <div className="sm:col-span-5 rounded-lg border border-white/10 bg-black p-4 space-y-3 text-right">
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-sm font-semibold text-ivory">منتجع سيمفونية مسقط</h4>
                      <p className="text-[10px] text-gold font-mono uppercase tracking-wider flex items-center gap-1 justify-end">
                        ٥.٠ (٤٨٢ تقييم حقيقي) <span>★★★★★</span>
                      </p>
                      <p className="text-[10px] text-ivory/40">منتجع فاخر خمس نجوم • مسقط</p>
                    </div>

                    <div className="grid grid-cols-3 gap-1 text-center font-mono text-[9px] text-gold">
                      <div className="border border-gold/20 rounded py-1 bg-gold/5 cursor-pointer hover:bg-gold/10">
                        <span className="block">✉</span>
                        <span>حجز</span>
                      </div>
                      <div className="border border-gold/20 rounded py-1 bg-gold/5 cursor-pointer hover:bg-gold/10">
                        <span className="block">➦</span>
                        <span>الاتجاهات</span>
                      </div>
                      <div className="border border-gold/20 rounded py-1 bg-gold/5 cursor-pointer hover:bg-gold/10">
                        <span className="block">☎</span>
                        <span>اتصال</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-[10px] text-ivory/60 border-t border-white/5 pt-3">
                      <div>📍 حي البستان، مسقط، سلطنة عُمان</div>
                      <div>⏱ مفتوح على مدار الساعة • تتوفر خدمة صف السيارات</div>
                      <div className="text-gold font-medium">✓ متوفر خيار الحجز المباشر على الموقع</div>
                    </div>
                  </div>

                  {/* Maps Visual Mock */}
                  <div className="sm:col-span-7 h-[180px] rounded-lg overflow-hidden border border-white/10 relative">
                    {/* Simulated minimalist modern black & gold maps layout */}
                    <div className="absolute inset-0 bg-[#121212] flex items-center justify-center">
                      <svg width="100%" height="100%" className="opacity-20">
                        <line x1="0" y1="50" x2="300" y2="50" stroke="#FFF" strokeWidth="1" />
                        <line x1="100" y1="0" x2="100" y2="200" stroke="#FFF" strokeWidth="1" />
                        <line x1="0" y1="130" x2="300" y2="130" stroke="#FFF" strokeWidth="1" />
                        <circle cx="100" cy="130" r="40" fill="none" stroke="#FFF" strokeWidth="1" />
                      </svg>
                      {/* Gold Map Pin */}
                      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="rounded-full bg-gold/20 border border-gold p-1 animate-slow-pulse">
                          <MapPin size={18} className="text-gold" />
                        </div>
                        <span className="mt-1 font-serif text-[10px] text-gold font-bold bg-black/80 px-2 py-0.5 rounded border border-gold/20">منتجع السيمفونية</span>
                      </div>
                      <div className="absolute bottom-2 right-2 text-[8px] font-mono text-ivory/30">لوحة الملاحة الموجهة</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* REVENUE INTEL DISPLAY */}
              <div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-[9px] font-mono text-gold uppercase tracking-wider font-semibold">تأثير مالي حقيقي ومباشر</span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-ivory/40">
                    <TrendingUp size={12} className="text-gold" />
                    <span>لوحة مراقبة وتحليلات الإيرادات والعائد لكل غرفة (RevPAR)</span>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 text-center">
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                    <span className="block text-[8px] text-ivory/40 font-mono">معدل الإشغال السنوي</span>
                    <span className="block text-sm sm:text-base font-serif font-bold text-gold mt-1">٧٤.٢٪</span>
                    <span className="block text-[8px] font-mono text-green-400 mt-0.5">+١٢٪ نمو سنوي</span>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                    <span className="block text-[8px] text-ivory/40 font-mono">العائد للغرفة المتاحة RevPAR</span>
                    <span className="block text-sm sm:text-base font-serif font-bold text-gold mt-1">٩٤٥ ريال</span>
                    <span className="block text-[8px] font-mono text-green-400 mt-0.5">+٢٤٪ نمو عوائد</span>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                    <span className="block text-[8px] text-ivory/40 font-mono">عمولات المنصات التي تم توفيرها</span>
                    <span className="block text-sm sm:text-base font-serif font-bold text-gold mt-1">٨٢,٤٠٠ ريال</span>
                    <span className="block text-[8px] font-mono text-green-400 mt-0.5">توفير خالص هذا الشهر</span>
                  </div>
                  <div className="bg-white/[0.01] border border-white/5 p-3 rounded-lg">
                    <span className="block text-[8px] text-ivory/40 font-mono">نسبة الحجز المباشر الموطن</span>
                    <span className="block text-sm sm:text-base font-serif font-bold text-gold mt-1">٦٨.٥٪</span>
                    <span className="block text-[8px] font-mono text-green-400 mt-0.5">سيادة كاملة</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right text column: Maps & Analytics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-widest">
                <MapPinned size={14} />
                <span>السيادة الجغرافية وحوكمة العوائد الفندقية</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                تصدر الخيار الجغرافي. <br />
                <span className="italic font-normal text-gold">وحكّم أرقام أرباحك الصافية</span>
              </h2>

              <p className="text-sm md:text-base text-ivory/60 leading-relaxed font-light font-sans">
                خرائط جوجل وجوجل مابس هي بوابات الحجز السريعة الأقوى للضيوف القريبين أو المتجهين لمطار فندقك. نحن لا نقوم فقط بتحديث خرائطك؛ نحن نقوم بتهيئتها رقمياً لتتصدر المراكز الثلاثة الأولى في عمليات البحث الجغرافي الفندقية الإقليمية مع ربط مباشر يحجز الليلة فورياً وبدون رسوم وسيطة.
              </p>

              <div className="space-y-4 text-right">
                <div className="border-r-2 border-gold/40 pr-4 space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-ivory">أتمتة وحوكمة خرائط جوجل مابس</h4>
                  <p className="text-xs text-ivory/60 font-sans">توطين التقييمات الإيجابية للنزلاء وربط الفندق بنظام حجز مباشر يستوعب الضيوف لحظياً عند البحث المحلي.</p>
                </div>
                <div className="border-r-2 border-gold/40 pr-4 space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-ivory">لوحات تحليل الـ RevPAR الحقيقي</h4>
                  <p className="text-xs text-ivory/60 font-sans">قس لحظياً نجاح عمليات التسويق، ونمو الإشغال، والعمولات المستردة من Booking.com لتعرضها على مجلس إدارتك كأرقام مالية معتمدة.</p>
                </div>
              </div>

              {/* Verified Result */}
              <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5 text-right">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="font-mono text-[9px] text-green-400 bg-green-500/5 px-2 rounded border border-green-500/10">توفير مالي هائل</span>
                  <span className="font-serif text-xs font-semibold text-gold">توفير العمولات: منتجع الواحة الفاخرة</span>
                </div>
                <p className="text-xs text-ivory/60 mt-2 font-serif italic">
                  "استعدنا السيطرة الكاملة على قنوات الحجز الجغرافية. وفرنا أكثر من ٣٨,٠٠٠ ريال سعودي عمولات للمنصات الأجنبية في أول شهرين تشغيل بفضل خرائط جوجل مابس المحدثة."
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation("Enterprise Advisory")}
                  className="rounded-lg border border-gold/20 hover:bg-gold/10 text-gold px-6 py-3 text-xs uppercase font-mono tracking-widest transition-all duration-300 cursor-pointer"
                >
                  احجز مراجعة لأرقام فندقك
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
