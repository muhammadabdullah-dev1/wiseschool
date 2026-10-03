import React from 'react';
import { ArrowRight, Calendar, Award, ShieldCheck, Users, BookOpen } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  isUrduMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply, onOpenTour, isUrduMode }) => {
  return (
    <section className="relative bg-[#102A43] text-white overflow-hidden border-b border-[#243E56]">
      {/* Subtle architectural background texture and gradient */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4A017_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient gold glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1F7A4D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (8 columns on large screens) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Kicker (No pill enclosure as per design constitution) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
              <span>Model Town, Quetta</span>
              <span className="text-white/40">·</span>
              <span>Admissions Open 2026-2027</span>
              <span className="text-white/40">·</span>
              <span className="font-urdu normal-case text-amber-200">وائزاپ انٹرنیشنل</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Where Excellence <br className="hidden sm:inline" />
              <span className="text-[#D4A017]">Meets Opportunity</span>
            </h1>

            {/* Urdu Subtitle */}
            <div className="font-urdu text-lg sm:text-xl text-amber-100/90 text-right sm:text-left leading-relaxed max-w-xl" dir="rtl">
              جہاں عمدگی اور سنہری مواقع کا سنگم ہوتا ہے۔ کوئٹہ میں جدید بین الاقوامی معیار اور اخلاقی تربیت کا معتبر ادارہ۔
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              Wise Up International High School provides children in Quetta with world-class bilingual education, fostering academic distinction, critical thinking, and character building from Montessori Early Years through BISE Matriculation.
            </p>

            {/* Hero CTAs: Filled Gold & Outlined Navy */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenApply}
                className="bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4A017]"
              >
                <span>{isUrduMode ? 'آن لائن داخلہ درخواست' : 'Apply Now for Admission'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTour}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-4 h-4 text-[#D4A017]" />
                <span>{isUrduMode ? 'کیمپس کے دورے کا وقت لیں' : 'Schedule a Visit'}</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-[#D4A017]">1:15</span>
                <span className="text-slate-300 text-[11px] mt-0.5">Teacher-Student Ratio</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-[#D4A017]">100%</span>
                <span className="text-slate-300 text-[11px] mt-0.5">Board Examination Pass</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-[#D4A017]">Dual</span>
                <span className="text-slate-300 text-[11px] mt-0.5">English & Urdu Fluency</span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-[#D4A017]">Safe</span>
                <span className="text-slate-300 text-[11px] mt-0.5">Monitored Secure Campus</span>
              </div>
            </div>
          </div>

          {/* Hero Feature Visual Card (5 columns) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4A017]/30 to-emerald-500/20 rounded-2xl filter blur-sm" />
              
              <div className="relative bg-[#0D2338] border border-white/15 rounded-xl p-6 sm:p-7 shadow-2xl text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D4A017] text-[#102A43] flex items-center justify-center font-bold">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                        Academic Enrollment
                      </h2>
                      <p className="text-[11px] text-slate-400">Session 2026-2027 Open</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open Now
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-slate-300 font-medium">
                      <span>Early Years & Montessori:</span>
                      <span className="text-[#D4A017] font-bold">Limited Seats</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Playgroup, Nursery, Kindergarten (Ages 3-5)</p>
                  </div>

                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-slate-300 font-medium">
                      <span>Primary & Middle:</span>
                      <span className="text-white font-bold">Grades 1 to 8</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Hands-on STEM, bilingual literacy, arts & sports</p>
                  </div>

                  <div className="p-3 bg-white/5 rounded-lg border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-slate-300 font-medium">
                      <span>High School (Grade 9 & 10):</span>
                      <span className="text-emerald-400 font-bold">Merit Scholarships</span>
                    </div>
                    <p className="text-[11px] text-slate-400">BISE Balochistan Science / Computer Group</p>
                  </div>
                </div>

                {/* Direct Call Quick Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Admissions Hotline</p>
                    <a
                      href={`tel:${SCHOOL_INFO.phoneClean}`}
                      className="text-sm font-bold text-[#D4A017] hover:underline"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                  </div>
                  <button
                    onClick={onOpenApply}
                    className="py-2 px-3.5 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-xs rounded-md shadow transition-colors"
                  >
                    Apply Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
