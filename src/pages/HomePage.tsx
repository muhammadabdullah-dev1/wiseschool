import React from 'react';
import { Hero } from '../components/Hero';
import { QuickLinks } from '../components/QuickLinks';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { NewsSection } from '../components/NewsSection';
import { CtaBanner } from '../components/CtaBanner';
import { ACADEMIC_PROGRAMS, SCHOOL_INFO } from '../data/schoolData';
import { ActivePage } from '../types';
import { ArrowRight, CheckCircle2, Star, Quote, Sparkles, Building, BookOpen } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onOpenApply: () => void;
  onOpenTour: () => void;
  isUrduMode: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenApply,
  onOpenTour,
  isUrduMode,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Hero Section */}
      <Hero onOpenApply={onOpenApply} onOpenTour={onOpenTour} isUrduMode={isUrduMode} />

      {/* 2. Quick Links Row */}
      <QuickLinks onNavigate={onNavigate} onOpenApply={onOpenApply} isUrduMode={isUrduMode} />

      {/* 3. Why Choose Us Section */}
      <WhyChooseUs isUrduMode={isUrduMode} />

      {/* 4. Academic Programs Showcase */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-1">
                Curricular Pathways
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43]">
                Academic Programs at Wise Up
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Structured progressive learning pathways from formative early childhood years to matriculation board distinctions.
              </p>
            </div>

            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#102A43] hover:text-[#D4A017] flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
            >
              <span>Explore All Academic Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMIC_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#F7F7F5] rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between group hover:border-[#D4A017] hover:shadow-md transition-all"
              >
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#D4A017]">
                      {prog.grades}
                    </span>
                    <h3 className="font-cinzel text-sm font-bold leading-tight">{prog.title}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-4">
                    <p className="text-[11px] text-slate-500 font-medium">{prog.ageGroup}</p>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {prog.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <button
                      onClick={() => {
                        onNavigate('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-[#102A43] group-hover:text-[#D4A017] flex items-center justify-between w-full"
                    >
                      <span>Program Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Parent & Community Trust Testimonials */}
      <section className="py-20 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#D4A017]">
              Voices of our Community
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43]">
              Trusted by Quetta Families
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hear what parents and educators in Model Town have to say about the academic environment at Wise Up International.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D4A017] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300 mb-2" />
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "The bilingual fluency my daughter developed in the primary years is remarkable. She speaks and writes English with confidence while keeping her love for Urdu literature and cultural values intact."
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#102A43] text-white flex items-center justify-center font-bold text-xs">
                  FA
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#102A43]">Dr. Farooq Ahmed</h4>
                  <p className="text-[11px] text-slate-500">Parent of Grade 5 Student · Model Town</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D4A017] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300 mb-2" />
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Their science laboratories and dedicated matriculation board clinics made all the difference. My son secured an A-1 grade in BISE Balochistan exams and got admitted into his dream pre-medical college."
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#D4A017] text-[#102A43] flex items-center justify-center font-bold text-xs">
                  SK
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#102A43]">Mrs. Saima Kakar</h4>
                  <p className="text-[11px] text-slate-500">Parent of Matric Graduate · Khojak Rd</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#D4A017] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300 mb-2" />
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "As working parents, campus safety and reliable transport were our primary concerns. Wise Up’s GPS-monitored vans and female caretakers gave us complete peace of mind every single day."
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1F7A4D] text-white flex items-center justify-center font-bold text-xs">
                  MN
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#102A43]">Engr. Muhammad Noman</h4>
                  <p className="text-[11px] text-slate-500">Parent of Kindergarten & Grade 3 Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Latest News & Announcements */}
      <NewsSection onOpenApply={onOpenApply} isUrduMode={isUrduMode} />

      {/* 7. Call To Action Banner */}
      <CtaBanner onOpenApply={onOpenApply} onOpenTour={onOpenTour} isUrduMode={isUrduMode} />
    </div>
  );
};
