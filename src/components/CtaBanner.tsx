import React from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface CtaBannerProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  isUrduMode: boolean;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenApply, onOpenTour, isUrduMode }) => {
  return (
    <section className="bg-[#102A43] text-white py-16 sm:py-20 relative overflow-hidden border-t-4 border-[#D4A017]">
      {/* Texture background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A017_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="text-xs uppercase font-bold tracking-widest text-[#D4A017]">
          Admissions Open for Session 2026-2027
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
          {isUrduMode ? 'اپنے بچے کے روشن اور باوقار مستقبل کا آغاز کیجیے' : 'Give Your Child a Brighter Future'}
        </h2>

        <p className="font-urdu text-lg sm:text-xl text-amber-200/90 max-w-2xl mx-auto leading-relaxed" dir="rtl">
          وائزاپ انٹرنیشنل ہائی اسکول ماڈل ٹاؤن کوئٹہ میں داخلے جاری ہیں۔ معیاری تعلیم، پرسکون ماحول اور تجربہ کار اساتذہ۔
        </p>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join our distinguished academic community in Model Town, Quetta. Limited seats for Playgroup through Grade 9. Schedule your visit today or complete your inquiry online.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenApply}
            className="bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4A017]"
          >
            <span>{isUrduMode ? 'ابھی آن لائن اپلائی کریں' : 'Apply Now for Admission'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenTour}
            className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#D4A017]" />
            <span>Schedule Campus Tour</span>
          </button>

          <a
            href={`tel:${SCHOOL_INFO.phoneClean}`}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg transition-colors flex items-center gap-2 border border-white/20"
          >
            <Phone className="w-4 h-4 text-[#D4A017]" />
            <span>Call: {SCHOOL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
