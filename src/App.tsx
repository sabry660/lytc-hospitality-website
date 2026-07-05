import React, { useState, useEffect } from "react";
import { MessageSquare, Calendar, Sparkles, PhoneCall, ShieldAlert, FileText, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

// Components
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import MagneticButton from "./components/MagneticButton";
import ConsultationModal from "./components/ConsultationModal";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import TheProblem from "./components/TheProblem";
import ROISection from "./components/ROISection";
import TheSolution from "./components/TheSolution";
import BookingJourney from "./components/BookingJourney";
import Services from "./components/Services";
import AboutLYTC from "./components/AboutLYTC";
import SuccessStories from "./components/SuccessStories";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  // Scroll Progress indicator (Awwwards Style)
  const { scrollYProgress } = useScroll();
  const scrollSpring = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 38,
    restDelta: 0.001
  });

  // Shared state: Guest Portal orders populate the live Dashboard dispatch queue in real-time!
  const [portalRequests, setPortalRequests] = useState<Array<{
    id: string;
    room: string;
    request: string;
    time: string;
    status: "pending" | "dispatched";
  }>>([
    { id: "1", room: "فيلا ١٠٢", request: "صيانة عاجلة للجاكوزي الخاص", time: "منذ دقيقتين", status: "pending" },
    { id: "2", room: "جناح ٣١٥", request: "سيارة نقل النزيل للشارتر الخاص", time: "منذ ٥ دقائق", status: "pending" },
    { id: "3", room: "غرفة ١١٠", request: "تقديم الإفطار الخليجي في الغرفة", time: "منذ ١٢ دقيقة", status: "dispatched" }
  ]);

  useEffect(() => {
    // Hide loading screen after 2.6s (completes loading animation loop elegantly)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  const openConsultation = (packageName?: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Luxury Loading screen with LYTC logo */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Lag-behind interactive golden cursor (desktop only) */}
      <CustomCursor />

      {/* Top scroll progress indicator bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-[99999] origin-left"
        style={{ scaleX: scrollSpring }}
      />

      <SmoothScroll>
        <div className="relative min-h-screen bg-[#080808] text-ivory antialiased selection:bg-gold/30 selection:text-ivory font-primary" id="app-root">
          
          {/* Floating Action WhatsApp - Fixed Bottom Left (Breathing/Floating micro-animation) */}
          <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5">
            <motion.a
              href="https://wa.me/201070853978"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/30 px-5 py-3 text-xs font-primary uppercase tracking-widest text-white shadow-xl shadow-emerald-950/40 backdrop-blur-md transition-all duration-300 font-bold"
              id="floating-whatsapp-btn"
              animate={{
                y: [0, -6, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={14} className="fill-white stroke-none" />
              <span>تحدث معنا مباشرة عبر واتساب</span>
            </motion.a>
          </div>

          {/* Hero Section */}
          <Hero 
            onOpenConsultation={() => openConsultation()} 
            onScrollToSuccess={() => scrollToSection("success-stories")} 
          />

          {/* Social Proof with 3D cards & interactive counters */}
          <SocialProof />

          {/* The Problem (Dark Luxury Section) */}
          <TheProblem />

          {/* Dynamic ROI and Financial loss calculator */}
          <ROISection />

          {/* The Solution Ecosystem Overview */}
          <TheSolution />

          {/* Detailed Guest Booking Journey */}
          <BookingJourney />

          {/* Services deep dives */}
          <Services 
            onOpenConsultation={openConsultation} 
            portalRequests={portalRequests} 
            setPortalRequests={setPortalRequests} 
          />

          {/* About LYTC Hospitality Partners and our Philosophy */}
          <AboutLYTC />

          {/* Case Studies / Success Stories Slider with reveal curtains */}
          <SuccessStories />

          {/* Onboarding Interactive Timeline Process Section */}
          <Process />

          {/* Why Hotels Choose Us Bento Grid */}
          <WhyChooseUs />

          {/* Pricing / Packages Comparisons */}
          <Pricing onOpenConsultation={openConsultation} />

          {/* Contact and Audit Request Section */}
          <ContactSection />

          {/* FAQ Directory with Accordions */}
          <FAQ />

          {/* FINAL CALL TO ACTION */}
          <section className="relative py-28 border-t border-white/5 overflow-hidden text-center" id="final-cta">
            {/* Background marble texture / overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
                alt="Luxury Lobby"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.12] contrast-[1.1] blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/70" />
            </div>

            {/* Decorative Arabic Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 opacity-25 bg-no-repeat bg-center pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\" fill=\"%23D4AF37\"><path d=\"M10 10 C 30 20, 70 0, 90 10 C 70 20, 30 0, 10 10 Z\"/></svg>')" }} />

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 space-y-8 text-right md:text-center">
              
              <div className="flex items-center justify-center md:justify-center gap-2 text-gold font-primary text-xs uppercase tracking-widest">
                <Sparkles size={14} className="animate-drift" />
                <span>دعوة خاصة للمديرين وملاك الفنادق الطموحين بالخليج</span>
              </div>

              <h2 className="font-primary text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight max-w-3xl mx-auto text-white">
                هل أنت مستعد لتحويل فندقك إلى <br />
                <span className="italic font-normal gold-gradient-text">الوجهة الرقمية الأولى</span> في مدينتك؟
              </h2>

              <p className="text-sm md:text-base text-ivory/70 max-w-2xl mx-auto leading-relaxed font-light">
                كل يوم يمر دون اتخاذ هذه الخطوة هو يوم آخر تمنح فيه أرباح الحجوزات المباشرة لخوارزميات المنصات الوسيطة كـ Booking.com. دعنا نبنِ معاً واجهة رقمية تعكس عظمة ومكانة كرم ضيافتكم المادية.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center max-w-2xl mx-auto pt-4 w-full z-30">
                <MagneticButton onClick={() => openConsultation("Ecosystem Growth")}>
                  <div className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-gold hover:bg-gold-light text-black px-8 py-4 text-xs uppercase font-primary tracking-widest font-bold transition-all duration-300 shadow-xl shadow-gold/20 cursor-pointer">
                    <span>احجز استشارتك المجانية للنمو</span>
                    <Calendar size={13} />
                  </div>
                </MagneticButton>

                <MagneticButton onClick={() => openConsultation("Elite Enterprise")}>
                  <div className="w-full sm:w-auto rounded-lg border border-white/20 bg-white/[0.03] hover:border-gold/40 hover:bg-white/[0.08] hover:text-gold px-8 py-4 text-xs uppercase font-primary tracking-widest font-semibold transition-all duration-300 cursor-pointer">
                    طلب عرض برمجيات متكامل
                  </div>
                </MagneticButton>

                <a
                  href="https://wa.me/201070853978"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto rounded-lg border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 px-6 py-4 text-xs uppercase font-primary tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 animate-pulse"
                >
                  <MessageSquare size={14} />
                  <span>تواصل فوراً عبر واتساب</span>
                </a>
              </div>

              <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 justify-center font-primary text-[10px] text-ivory/40 uppercase tracking-widest">
                <span>✓ خوادم سحابية محلية بالرياض / دبي</span>
                <span>✓ دعم مجلس الإدارة العاجل على مدار ٢٤/٧</span>
                <span>✓ دمج شامل مع نظام إدارة الفندق (PMS) الخاص بكم</span>
              </div>

            </div>
          </section>

          {/* Footer component */}
          <Footer onOpenConsultation={() => openConsultation()} />

          {/* Interactive Diagnostic Calculator and Proposal Modal */}
          <ConsultationModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            initialPackage={selectedPackage}
          />

        </div>
      </SmoothScroll>
    </>
  );
}
