import React from 'react';
import { MapPin, Phone, Mail, Clock, GraduationCap, ChevronRight } from 'lucide-react';
import { SCHOOL_INFO, ACCREDITATIONS } from '../data/schoolData';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  onOpenApply: () => void;
  isUrduMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenApply, isUrduMode }) => {
  return (
    <footer className="bg-[#0B1E30] text-slate-300 pt-16 pb-12 border-t-4 border-[#D4A017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4A017] p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#102A43] rounded-[6px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#D4A017]" />
                </div>
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white tracking-tight">Wise Up International</h3>
                <p className="text-xs text-[#D4A017] font-semibold tracking-wider uppercase">High School · Quetta</p>
              </div>
            </div>

            <p className="text-sm font-urdu text-amber-200/90 text-right leading-relaxed pr-1" dir="rtl">
              وائزاپ انٹرنیشنل ہائی اسکول ماڈل ٹاؤن، کوئٹہ — جدید بین الاقوامی تعلیمی معیارات اور اسلامی اقدار کا حسین سنگم۔
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students in Quetta with rigorous academic foundations, dual-language proficiency, scientific curiosity, and moral leadership from Early Years to High School Matriculation.
            </p>

            {/* Official Facebook Social Link */}
            <div className="pt-2">
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-white text-xs font-medium transition-colors"
                title="Visit our Facebook Page"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>{SCHOOL_INFO.facebookDisplayName}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              School Directory
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'home' as ActivePage, label: 'Home Page', urdu: 'مرکزی صفحہ' },
                { id: 'about' as ActivePage, label: 'About Our Heritage & Mission', urdu: 'اسکول کی تاریخ اور وژن' },
                { id: 'services' as ActivePage, label: 'Academic Programs & Facilities', urdu: 'تعلیمی پروگرامز اور سہولیات' },
                { id: 'contact' as ActivePage, label: 'Admissions & Campus Visit', urdu: 'داخلے اور کیمپس کا دورہ' },
                { id: 'wordpress-export' as ActivePage, label: 'WordPress / Elementor Blocks', urdu: 'ورڈپریس ایلیمنٹور بلاکس' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-[#D4A017] transition-colors focus-visible:outline-none focus-visible:underline text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A017] group-hover:translate-x-1 transition-transform" />
                    <span>{isUrduMode ? item.urdu : item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={onOpenApply}
                className="w-full py-2 px-3 text-xs font-bold text-[#102A43] bg-[#D4A017] hover:bg-[#c29012] rounded-md transition-colors text-center shadow-sm"
              >
                Inquire for Admission 2026-27
              </button>
            </div>
          </div>

          {/* Column 3: Academic Programs Summary */}
          <div>
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Academic Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Early Childhood & Montessori</span>
                <span className="text-slate-400 text-[11px]">Playgroup, Nursery, Kindergarten</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Primary School (Grades 1 to 5)</span>
                <span className="text-slate-400 text-[11px]">Core STEAM, English, Urdu & Math</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Middle School (Grades 6 to 8)</span>
                <span className="text-slate-400 text-[11px]">Pre-Matriculation & Advanced Science</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">High School (Grades 9 & 10)</span>
                <span className="text-slate-400 text-[11px]">BISE Balochistan Board Science Group</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 text-[11px] text-slate-400 leading-tight">
              <span className="text-[#D4A017] font-semibold">Affiliations: </span>
              BISE Balochistan & Registered International Frameworks.
            </div>
          </div>

          {/* Column 4: Contact & Office Hours */}
          <div className="space-y-3.5 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact & Location
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{SCHOOL_INFO.address}</p>
                <p className="text-[11px] text-slate-400">Plus Code: {SCHOOL_INFO.coordinates.plusCode}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
              <div>
                <a
                  href={`tel:${SCHOOL_INFO.phoneClean}`}
                  className="text-white font-bold hover:text-[#D4A017] transition-colors text-sm"
                >
                  {SCHOOL_INFO.phone}
                </a>
                <p className="text-[11px] text-slate-400">Direct Admissions Reception</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
              <div>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
              <div className="text-[11px]">
                <p className="text-white font-medium">Administrative Office Hours:</p>
                <p className="text-slate-400">Mon – Thu: 8:00 AM – 3:30 PM</p>
                <p className="text-slate-400">Friday: 8:00 AM – 12:30 PM</p>
                <p className="text-slate-400">Saturday: 8:00 AM – 2:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations Strip */}
        <div className="pt-6 pb-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[#D4A017] font-semibold uppercase tracking-wider text-[11px]">Recognitions:</span>
            {ACCREDITATIONS.map((acc, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{acc.name}</span>
                {idx < ACCREDITATIONS.length - 1 && <span className="text-white/20">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Wise Up International High School (وائزاپ انٹرنیشنل ہائی اسکول). All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Model Town, Quetta, Balochistan, Pakistan</span>
            <span className="text-white/20">|</span>
            <span>Tel: +92 81 2828187</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
