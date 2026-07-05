import React from "react";
import { MessageSquare, Linkedin, MapPin, Globe, Sparkles, PhoneCall } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-black text-ivory border-t border-white/5 pt-20 pb-10 relative overflow-hidden font-sans">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-radial from-gold/5 to-transparent rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Links Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 pb-16 border-b border-white/5 text-right">
          
          {/* Col 1: Branding & Outcome message */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 justify-start flex-row-reverse">
              <img
                src="/assets/logo.jpg"
                alt="LYTC Logo"
                className="h-12 w-12 object-contain"
              />
              <div className="text-right">
                <span className="font-serif text-lg font-bold uppercase tracking-[0.2em] text-white block">لايـتـك</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-gold">LYTC Hospitality Partners</span>
              </div>
            </div>

            <p className="text-xs text-ivory/50 leading-relaxed font-light max-w-sm">
              نحن نساعد الفنادق المستقلة والمنتجعات الفاخرة بالخليج على مضاعفة أرباحها الصافية واسترداد سيادتها عبر حلول برمجية مخصصة، وسيادة كاملة لنتائج محركات البحث، وجلسات استشارية شهرية مغلقة ومباشرة مع الملاك.
            </p>

            <div className="flex items-center gap-4 justify-start flex-row-reverse">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-full border border-white/10 bg-white/5 hover:border-gold/30 hover:text-gold p-2 transition-colors duration-300"
                aria-label="LYTC LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a 
                href="https://wa.me/201070853978" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-full border border-white/10 bg-white/5 hover:border-gold/30 hover:text-gold p-2 transition-colors duration-300 flex items-center gap-1.5 text-[10px] font-mono px-3 uppercase tracking-wider font-bold"
              >
                <span>الاستشارة العاجلة عبر واتساب</span>
                <MessageSquare size={12} className="text-emerald-500 fill-emerald-500 stroke-none" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold font-semibold">المنظومة التقنية</h4>
            <ul className="space-y-2.5 text-xs text-ivory/50">
              <li><a href="#luxury-website" className="hover:text-gold transition-colors">مواقع الفنادق الفاخرة</a></li>
              <li><a href="#guest-portal" className="hover:text-gold transition-colors">بوابات النزلاء الفورية (QR)</a></li>
              <li><a href="#guest-portal" className="hover:text-gold transition-colors">لوحات التوجيه الاستقبال المركزي</a></li>
              <li><a href="#marketing" className="hover:text-gold transition-colors">إنتاج المحتوى السينمائي القصير</a></li>
              <li><a href="#marketing" className="hover:text-gold transition-colors">السيادة على نتائج محركات البحث</a></li>
              <li><a href="#google-maps" className="hover:text-gold transition-colors">تحسين وتوطين مابس وجوجل مابز</a></li>
              <li><a href="#google-maps" className="hover:text-gold transition-colors">تحليلات الأرباح ومؤشر RevPAR</a></li>
            </ul>
          </div>

          {/* Col 3: Target Industries */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold font-semibold">الفئات المستهدفة</h4>
            <ul className="space-y-2.5 text-xs text-ivory/50">
              <li><span className="cursor-default hover:text-gold transition-colors">المنتجعات الصحية والمستقلة</span></li>
              <li><span className="cursor-default hover:text-gold transition-colors">ملاذات ونزل الصحراء الفاخرة</span></li>
              <li><span className="cursor-default hover:text-gold transition-colors">الفلل الملكية والقصور التراثية</span></li>
              <li><span className="cursor-default hover:text-gold transition-colors">أصول الفنادق العائلية والاستثمارية</span></li>
              <li><span className="cursor-default hover:text-gold transition-colors">المجموعات الفندقية الطموحة بالخليج</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-wider text-ivory/30 border-t border-white/5 pt-8 text-center md:text-right w-full">
          <div className="flex items-center gap-1.5 justify-center md:justify-start">
            <Sparkles size={10} className="text-gold" />
            <span>© ٢٠٢٦ LYTC Hospitality Partners للنمو والضيافة الفاخرة بالخليج. كافة الحقوق محفوظة.</span>
          </div>

          <div className="flex gap-6 justify-center">
            <span className="cursor-default hover:text-gold transition-colors">متوافق تماماً مع ضوابط الأمن السيبراني بالخليج</span>
            <span className="cursor-default hover:text-gold transition-colors">اتفاقيات حوكمة الحجوزات الصافية المباشرة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
