import React, { useState } from "react";
import { MessageSquare, Calendar, ShieldCheck, Sparkles, Building, User, Mail, Phone, Globe, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    hotelName: "",
    managerName: "",
    country: "المملكة العربية السعودية",
    phone: "",
    email: "",
    roomsCount: "",
    currentWebsite: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState("");

  const prepareWhatsappMessage = () => {
    return `السلام عليكم ورحمة الله وبركاته،
أود طلب دراسة جدوى فندقية واستشارة من لايتك (LYTC). تفاصيل الطلب:

• اسم الفندق: ${formData.hotelName}
• اسم المدير/المالك: ${formData.managerName}
• الدولة: ${formData.country}
• رقم الهاتف: ${formData.phone}
• البريد الإلكتروني: ${formData.email}
• عدد الغرف والأجنحة: ${formData.roomsCount}
• موقع الفندق الحالي: ${formData.currentWebsite || "لا يوجد"}
• الرسالة: ${formData.message || "لا توجد تفاصيل إضافية"}`;
  };

  const getWhatsappUrl = () => {
    return `https://wa.me/201070853978?text=${encodeURIComponent(prepareWhatsappMessage())}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappUrl = getWhatsappUrl();
    setLastWhatsappUrl(whatsappUrl);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      window.open(whatsappUrl, "_blank");
      
      setFormData({
        hotelName: "",
        managerName: "",
        country: "المملكة العربية السعودية",
        phone: "",
        email: "",
        roomsCount: "",
        currentWebsite: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <section className="bg-[#050505] py-24 text-ivory border-t border-white/5 relative overflow-hidden font-primary" id="contact">
      {/* Visual background element */}
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-radial from-gold/5 to-transparent rounded-full pointer-events-none blur-3xl" />
      <div className="absolute inset-0 mashrabiya-overlay pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-primary text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
            طلب دراسة جدوى فندقية ومجلس استشاري مغلق
          </span>
          <h2 className="mt-4 font-primary text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            ابدأ رحلة سيادتك <span className="italic font-normal text-gold">الرقمية اليوم</span>
          </h2>
          <p className="mt-4 text-sm text-ivory/60 leading-relaxed font-light">
            دعنا نتولى بناء وتصميم وتشغيل ركائز نموك المالي الرقمي. املأ استبيان التقييم الأولي أدناه، وسيتواصل معك شريكنا الرئيسي لدراسة أرقام فندقك التشغيلية وعرض خارطة الطريق على مجلس إدارتك.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Form Panel */}
          <div className="lg:col-span-7 bg-[#0C0C0C] border border-white/5 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="h-16 w-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto">
                  <Sparkles size={28} className="animate-drift" />
                </div>
                <h3 className="font-primary text-xl font-bold text-white">تم استلام طلب الاستشارة بنجاح</h3>
                <p className="text-xs text-ivory/60 max-w-md mx-auto leading-relaxed font-light">
                  نشكرك على ثقتك بـ لايتك (LYTC). تم تحويلك تلقائياً لواتساب لإرسال الرسالة الجاهزة. إذا لم تفتح صفحة المحادثة، يرجى الضغط على الزر أدناه لإرسال طلب الاستشارة مباشرة عبر واتساب.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  {lastWhatsappUrl && (
                    <a
                      href={lastWhatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-green-600 text-white hover:bg-green-500 px-6 py-2.5 text-xs font-primary font-bold tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={14} />
                      <span>إرسال الرسالة عبر واتساب</span>
                    </a>
                  )}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-lg border border-white/10 text-ivory/70 px-6 py-2.5 text-xs font-primary hover:bg-white/5 transition-all cursor-pointer"
                  >
                    تقديم طلب استشارة جديد
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  
                  {/* Hotel Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-primary text-ivory/60">اسم الفندق / المنتجع:</label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        placeholder="مثال: منتجع شاطئ الرمال"
                        value={formData.hotelName}
                        onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] pl-4 pr-10 py-2.5 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all"
                      />
                      <Building size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                    </div>
                  </div>

                  {/* Manager Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-primary text-ivory/60">اسم المدير المسؤول / المالك:</label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        placeholder="مثال: أ. عبد الرحمن الشهري"
                        value={formData.managerName}
                        onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] pl-4 pr-10 py-2.5 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all"
                      />
                      <User size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                    </div>
                  </div>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  
                  {/* Country Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-primary text-ivory/60">الدولة:</label>
                    <div className="relative">
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#0C0C0C] pl-4 pr-10 py-2.5 text-xs text-ivory focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all cursor-pointer"
                      >
                        <option value="المملكة العربية السعودية">المملكة العربية السعودية</option>
                        <option value="الإمارات العربية المتحدة">الإمارات العربية المتحدة</option>
                        <option value="دولة قطر">دولة قطر</option>
                        <option value="دولة الكويت">دولة الكويت</option>
                        <option value="سلطنة عمان">سلطنة عمان</option>
                        <option value="مملكة البحرين">مملكة البحرين</option>
                      </select>
                      <Globe size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-primary text-ivory/60">رقم الهاتف للاتصال المباشر:</label>
                    <div className="relative">
                      <input
                        required
                        type="tel"
                        placeholder="مثال: +966 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] pl-4 pr-10 py-2.5 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all text-left"
                        dir="ltr"
                      />
                      <Phone size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                    </div>
                  </div>

                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-primary text-ivory/60">البريد الإلكتروني المهني:</label>
                    <div className="relative">
                      <input
                        required
                        type="email"
                        placeholder="مثال: manager@hotel.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] pl-4 pr-10 py-2.5 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all text-left"
                        dir="ltr"
                      />
                      <Mail size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                    </div>
                  </div>

                  {/* Number of Rooms */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-primary text-ivory/60">إجمالي عدد الغرف والأجنحة:</label>
                    <div className="relative">
                      <input
                        required
                        type="number"
                        placeholder="مثال: 80"
                        value={formData.roomsCount}
                        onChange={(e) => setFormData({ ...formData, roomsCount: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/[0.02] pl-4 pr-10 py-2.5 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all"
                      />
                      <Building size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                    </div>
                  </div>

                </div>

                {/* Current Website URL */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-primary text-ivory/60">رابط موقع الفندق الحالي (إن وجد):</label>
                  <div className="relative">
                    <input
                      type="url"
                      placeholder="مثال: https://www.yourhotel.com"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/[0.02] pl-4 pr-10 py-2.5 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all text-left"
                      dir="ltr"
                    />
                    <Globe size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ivory/30" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-primary text-ivory/60">تفاصيل إضافية أو عقبات تشغيلية تواجهونها:</label>
                  <textarea
                    rows={4}
                    placeholder="اكتب هنا التحديات الحالية (مثل: عمولات Booking العالية، بطء الموقع الحالي، عدم الظهور على خرائط جوجل، ضغط المكالمات على الاستقبال...)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.02] p-4 text-xs text-ivory placeholder-ivory/20 focus:border-gold/50 focus:outline-none focus:bg-white/[0.04] transition-all"
                  />
                </div>

                {/* CTAs */}
                <div className="pt-3">
                  <a
                    href={getWhatsappUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-lg border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold px-6 py-3.5 text-xs font-primary tracking-wider transition-all duration-300"
                  >
                    <MessageSquare size={14} />
                    <span>تحدث معنا عبر واتساب</span>
                  </a>
                </div>

              </form>
            )}
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* SLA Statement */}
            <div className="p-6 rounded-2xl border border-gold/15 bg-gold/[0.01] space-y-3">
              <span className="font-primary text-[9px] uppercase tracking-wider text-gold font-bold flex items-center gap-1">
                <Sparkles size={11} />
                مستوى حماية وسرية البيانات
              </span>
              <h4 className="font-primary text-base font-semibold text-white">اتفاقية السرية التامة للفنادق</h4>
              <p className="text-xs text-ivory/60 leading-relaxed font-light">
                نحن نتفهم تماماً حساسية التقارير التشغيلية ومعدلات الإشغال وإيرادات الغرف المتاحة (RevPAR) للفنادق المستقلة. جميع المداولات وجلسات الاستماع والتقارير المتبادلة تتم تحت مظلة تلتزم بالسرية المطلقة وعدم الكشف عن أسرار الفنادق للمنافسين المحليين.
              </p>
            </div>

            {/* Direct Support Card */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-4">
              <h4 className="font-primary text-base font-semibold text-white">الاستجابة والاتصال المباشر</h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-xs">
                  <ShieldCheck size={15} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-ivory">تغطية شاملة للمنطقة:</span>
                    <span className="text-ivory/50 block text-[11px] mt-0.5">نقدم استشاراتنا الميدانية في الرياض، جدة، دبي، أبوظبي، المنامة، الدوحة، الكويت، ومسقط.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-xs">
                  <ShieldCheck size={15} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-ivory">تكامل تقني محلي:</span>
                    <span className="text-ivory/50 block text-[11px] mt-0.5">حلول برمجية مستضافة بالكامل داخل حدود دول الخليج للامتثال للقوانين السيادية الوطنية للبيانات.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ Quick block */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] text-center space-y-2">
              <HelpCircle size={20} className="text-gold mx-auto animate-drift" />
              <h5 className="font-primary text-sm font-semibold text-white">هل لديك تساؤلات عاجلة؟</h5>
              <p className="text-xs text-ivory/50">راجع أرشيف استشاراتنا الموسع في الأسفل لتجد إجابات حول ربط الـ PMS وبوابات الدفع والامتثال.</p>
              <a href="#faq" className="inline-block text-xs font-primary text-gold hover:underline pt-1">تصفح أرشيف الاستشارات ←</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
