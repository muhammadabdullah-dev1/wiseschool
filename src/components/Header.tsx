import React, { useState } from 'react';
import { Phone, Menu, X, GraduationCap, MapPin, Globe, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  isUrduMode: boolean;
  onToggleUrdu: () => void;
  onOpenApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  isUrduMode,
  onToggleUrdu,
  onOpenApply,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActivePage; label: string; urduLabel: string }[] = [
    { id: 'home', label: 'Home', urduLabel: 'ہوم' },
    { id: 'about', label: 'About Us', urduLabel: 'ہمارے متعلق' },
    { id: 'services', label: 'Academics & Services', urduLabel: 'تعلیم اور خدمات' },
    { id: 'contact', label: 'Admissions & Contact', urduLabel: 'داخلے اور رابطہ' },
    { id: 'wordpress-export', label: 'WordPress Export', urduLabel: 'ورڈپریس ایکسپورٹ' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar for immediate contact & prestige info */}
      <div className="bg-[#0B1E30] text-[#D8E2EC] border-b border-white/10 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
              <span>Model Town, Khojak Rd, Quetta</span>
            </span>
            <span className="hidden md:inline-block text-white/30">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <span>Office: Mon–Sat 8:00 AM – 3:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Direct Click to Call */}
            <a
              href={`tel:${SCHOOL_INFO.phoneClean}`}
              className="flex items-center gap-1.5 font-semibold text-[#D4A017] hover:text-[#f0bb35] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
              title="Call Wise Up International High School Quetta"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="tracking-wide">{SCHOOL_INFO.phone}</span>
            </a>

            {/* Bilingual Switcher */}
            <button
              onClick={onToggleUrdu}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-medium bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              title="Toggle English / اردو View"
              aria-label="Switch between English and Urdu language display"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>{isUrduMode ? 'English' : 'اردو'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#102A43] text-white shadow-md border-b border-[#243E56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[72px] sm:min-h-[76px] py-2.5 flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Academic Crest - shrink-0 to prevent flex compression */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded p-1 shrink-0"
          >
            {/* School Crest Symbol */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#D4A017] to-[#B3830E] p-0.5 shadow-md flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-[#102A43] rounded-[6px] flex flex-col items-center justify-center text-center p-0.5">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A017] group-hover:scale-110 transition-transform duration-200" />
                <span className="text-[7px] sm:text-[8px] font-bold text-white tracking-widest uppercase font-cinzel leading-none mt-0.5">WUIS</span>
              </div>
            </div>

            {/* Title & Urdu subtitle with strict no-wrap and tight vertical flow */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#D4A017] transition-colors leading-tight">
                  Wise Up International
                </span>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D4A017] font-semibold leading-tight hidden xs:inline-block">
                  High School
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-300 leading-normal whitespace-nowrap mt-0.5">
                <span className="text-slate-300 font-medium">Model Town, Quetta</span>
                <span className="text-slate-500">·</span>
                <span className="font-urdu text-[#D4A017] text-xs leading-none inline-block align-middle" dir="rtl">
                  وائزاپ انٹرنیشنل ہائی اسکول
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 text-xs xl:text-sm font-medium transition-colors relative whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded ${
                    isActive
                      ? 'text-[#D4A017] font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{isUrduMode ? item.urduLabel : item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#D4A017] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Click to call & Apply Now CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={`tel:${SCHOOL_INFO.phoneClean}`}
              className="hidden lg:flex xl:flex flex-col text-right hover:opacity-90 transition-opacity pr-1"
            >
              <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Admissions Line</span>
              <span className="text-xs xl:text-sm font-bold text-white whitespace-nowrap">{SCHOOL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenApply}
              className="bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4A017]"
            >
              <span>{isUrduMode ? 'ابھی داخلہ لیں' : 'Apply Now'}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Mobile Hamburger Button for screens below xl */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0D2338] border-t border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col gap-1.5 mb-5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#102A43] text-[#D4A017] font-semibold border-l-4 border-[#D4A017]'
                        : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{isUrduMode ? item.urduLabel : item.label}</span>
                    <span className="text-xs font-urdu text-slate-400">{item.urduLabel}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${SCHOOL_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4A017]" />
                <span>Call Admissions: {SCHOOL_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#D4A017] text-[#102A43] font-bold text-sm shadow hover:bg-[#c29012] transition-colors"
              >
                <span>{isUrduMode ? 'آن لائن داخلہ درخواست' : 'Apply for Admission 2026-27'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
