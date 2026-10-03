import React, { useState } from 'react';
import {
  ACADEMIC_PROGRAMS,
  SUPPORT_SERVICES,
  EXTRACURRICULARS,
  FACILITIES,
  TRANSPORT_AND_MEALS,
  SCHOOL_INFO
} from '../data/schoolData';
import {
  GraduationCap,
  Compass,
  HeartPulse,
  Bus,
  Coffee,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FlaskConical,
  Trophy,
  Users
} from 'lucide-react';

interface ServicesPageProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  isUrduMode: boolean;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenApply,
  onOpenTour,
  isUrduMode,
}) => {
  const [activeTab, setActiveTab] = useState<'programs' | 'support' | 'activities' | 'facilities' | 'transport'>('programs');

  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-20">
      {/* Page Title Header */}
      <section className="bg-[#102A43] text-white py-16 sm:py-20 border-b border-[#243E56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
              <span>Curriculum, Facilities & Student Welfare</span>
              <span className="text-white/40">·</span>
              <span>Model Town, Quetta</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {isUrduMode ? 'تعلیمی پروگرامز اور کیمپس کی خدمات' : 'Academics & Comprehensive Services'}
            </h1>
            <p className="font-urdu text-lg text-amber-200/90 leading-relaxed" dir="rtl">
              ابتدائی بچپن کی تعلیم سے لے کر میٹرک سائنس اور کیمبرج او لیول کی تیاری تک کا جامع اور متوازن تعلیمی نظام۔
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore our grade-by-grade academic syllabi, specialized science labs, remedial clinics, sports societies, and secure school transport network.
            </p>
          </div>

          {/* Quick Segmented Navigation Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {[
              { id: 'programs' as const, label: 'Academic Programs (K-10)', icon: BookOpen },
              { id: 'support' as const, label: 'Support & Counseling', icon: Compass },
              { id: 'activities' as const, label: 'Extracurriculars & Sports', icon: Trophy },
              { id: 'facilities' as const, label: 'Campus Facilities & Labs', icon: FlaskConical },
              { id: 'transport' as const, label: 'Transport & Cafeteria', icon: Bus },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    const el = document.getElementById(tab.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#D4A017] text-[#102A43] shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 1. Academic Programs Section */}
      <section id="programs" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
            Section 01
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
            Grade Levels & Curriculum Tracks
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Each academic tier at Wise Up is tailored to developmentally appropriate milestones, combining conceptual mastery with bilingual communication.
          </p>
        </div>

        <div className="space-y-12">
          {ACADEMIC_PROGRAMS.map((program, idx) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden bg-slate-100">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#102A43]/90 text-[#D4A017] text-xs font-bold px-3 py-1 rounded">
                    {program.grades}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-slate-500 font-semibold">{program.ageGroup}</span>
                    <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                      Enrolling Now
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#102A43]">
                    {program.title}
                  </h3>
                  <p className="font-urdu text-sm text-amber-900 mt-0.5 mb-3" dir="rtl">
                    {program.urduTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {program.summary}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                      Curriculum Framework:
                    </span>
                    <p className="text-xs font-medium text-[#102A43] bg-[#F7F7F5] p-2.5 rounded-lg border border-slate-200">
                      {program.curriculumTrack}
                    </p>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                      Program Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {program.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A4D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Questions about {program.grades}? Call <strong className="text-[#102A43]">{SCHOOL_INFO.phone}</strong>
                  </span>
                  <button
                    onClick={onOpenApply}
                    className="py-2 px-4 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Apply for {program.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Support Services Section */}
      <section id="support" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
              Section 02
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
              Academic Support & Pastoral Care
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              We ensure no student falls behind through personalized academic reinforcement, mental wellness support, and on-site healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUPPORT_SERVICES.map((service) => {
              const iconMap: Record<string, any> = {
                GraduationCap,
                Compass,
                HeartPulse,
              };
              const Icon = iconMap[service.iconName] || GraduationCap;

              return (
                <div
                  key={service.id}
                  className="bg-[#F7F7F5] rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#102A43] text-[#D4A017] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#102A43] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <ul className="space-y-2 text-xs text-slate-600">
                      {service.details.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A4D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Extracurriculars & Clubs */}
      <section id="activities" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
            Section 03
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
            Extracurriculars, Sports & Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Character, resilience, and teamwork are forged outside the classroom through organized athletics, competitive debating, and creative guilds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXTRACURRICULARS.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#D4A017]/15 text-[#102A43] flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-[#102A43] mb-2">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-2 text-xs text-slate-700">
                  {cat.items.map((it, itIdx) => (
                    <li key={itIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                      <span className="font-medium">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Campus Facilities & Labs */}
      <section id="facilities" className="py-16 bg-[#102A43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
              Section 04
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
              Purpose-Built Campus Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Equipped with modern scientific apparatus, high-speed digital tools, and secure recreational grounds in Model Town, Quetta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#0D2338] rounded-xl overflow-hidden border border-white/10 shadow-lg flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-white mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {facility.description}
                    </p>
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-300 pt-2 border-t border-white/10">
                    {facility.features.map((f, fI) => (
                      <li key={fI} className="flex items-center gap-1.5">
                        <span className="text-[#D4A017]">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transportation & Cafeteria Section */}
      <section id="transport" className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
            Section 05
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
            Transportation & Student Well-Being
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Reliable, monitored daily transit across major Quetta sectors and certified hygienic cafeteria meal provisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Transport Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#102A43] text-[#D4A017] flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#102A43]">
                {TRANSPORT_AND_MEALS.transport.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {TRANSPORT_AND_MEALS.transport.overview}
            </p>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#102A43] block mb-2">
                Key Quetta Transit Routes:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {TRANSPORT_AND_MEALS.transport.routes.map((rt, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 bg-[#F7F7F5] rounded border border-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A4D]" />
                    <span>{rt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-[#102A43] block mb-2">
                Safety Safeguards:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {TRANSPORT_AND_MEALS.transport.features.map((ft, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A4D] shrink-0 mt-0.5" />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Meals & Nutrition Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4A017] text-[#102A43] flex items-center justify-center">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#102A43]">
                {TRANSPORT_AND_MEALS.meals.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {TRANSPORT_AND_MEALS.meals.overview}
            </p>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#102A43] block mb-2">
                Nutrition & Health Protocol:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {TRANSPORT_AND_MEALS.meals.guidelines.map((gd, i) => (
                  <li key={i} className="flex items-start gap-2 p-2 bg-[#F7F7F5] rounded border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                    <span>{gd}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 bg-amber-50/50 p-3 rounded-lg border border-amber-200 text-xs text-amber-900">
              <strong>Dietary Notice: </strong> Parents are welcome to coordinate special dietary allergies or transport route requests during the admissions enrollment consultation.
            </div>
          </div>
        </div>
      </section>

      {/* Call to action bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-[#102A43] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-cinzel text-xl font-bold">Ready to enroll your child for 2026-27?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Schedule a campus tour to inspect our classrooms, science labs, and meet our faculty.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenApply}
              className="py-2.5 px-5 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-xs rounded-lg transition-colors"
            >
              Apply Online
            </button>
            <button
              onClick={onOpenTour}
              className="py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-lg transition-colors border border-white/20"
            >
              Schedule Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
