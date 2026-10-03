import React from 'react';
import { GraduationCap, BookOpen, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { ActivePage } from '../types';

interface QuickLinksProps {
  onNavigate: (page: ActivePage) => void;
  onOpenApply: () => void;
  isUrduMode: boolean;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ onNavigate, onOpenApply, isUrduMode }) => {
  const cards = [
    {
      title: 'Admissions 2026-27',
      urduTitle: 'داخلہ برائے 2026-27',
      description: 'Review eligibility, age criteria, tuition concessions, and initiate online application.',
      icon: GraduationCap,
      action: onOpenApply,
      actionLabel: 'Apply Online',
      accentColor: 'border-t-[#D4A017]',
      isExternal: false,
    },
    {
      title: 'Academic Programs',
      urduTitle: 'تعلیمی پروگرامز',
      description: 'Explore our Early Years, Primary, Middle, and High School Matriculation tracks.',
      icon: BookOpen,
      action: () => {
        onNavigate('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      actionLabel: 'View Curriculum',
      accentColor: 'border-t-[#102A43]',
      isExternal: false,
    },
    {
      title: 'Campus & Contact',
      urduTitle: 'کیمپس اور رابطہ',
      description: 'Get directions to Model Town Khojak Rd, office hours, and department phone lines.',
      icon: MapPin,
      action: () => {
        onNavigate('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      actionLabel: 'Find Our Campus',
      accentColor: 'border-t-[#1F7A4D]',
      isExternal: false,
    },
    {
      title: 'Official Facebook',
      urduTitle: 'فیس بک پیج',
      description: 'Follow photo galleries, sports events, student achievements, and community notices.',
      icon: ExternalLink,
      action: () => {
        window.open(SCHOOL_INFO.facebookUrl, '_blank', 'noopener,noreferrer');
      },
      actionLabel: 'Visit Facebook Page',
      accentColor: 'border-t-[#1877F2]',
      isExternal: true,
    },
  ];

  return (
    <section className="relative -mt-8 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6 border border-slate-200/80 border-t-4 ${card.accentColor} flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F7F5] flex items-center justify-center text-[#102A43] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#102A43]" />
                  </div>
                  {card.isExternal && (
                    <span className="text-[10px] uppercase font-semibold text-slate-400 flex items-center gap-1">
                      Social Link
                    </span>
                  )}
                </div>

                <h3 className="font-cinzel text-base font-bold text-[#102A43] group-hover:text-[#D4A017] transition-colors">
                  {isUrduMode ? card.urduTitle : card.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={card.action}
                  className="w-full text-left flex items-center justify-between text-xs font-bold text-[#102A43] group-hover:text-[#D4A017] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span>{card.actionLabel}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
