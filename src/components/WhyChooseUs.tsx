import React from 'react';
import { Award, BookOpen, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  isUrduMode: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ isUrduMode }) => {
  const pillars = [
    {
      title: 'Experienced Faculty',
      urduTitle: 'تجربہ کار اور باصلاحیت اساتذہ',
      description: 'Our educators hold advanced pedagogical degrees and undergo ongoing professional development in modern instructional techniques and compassionate child psychology.',
      icon: Award,
      stats: '12+ Years Avg Experience',
      bulletPoints: [
        'Dedicated subject specialists for senior science streams',
        'Certified Montessori-trained teachers for early years',
        'Continuous pedagogical assessment & workshops'
      ]
    },
    {
      title: 'Modern Curriculum',
      urduTitle: 'جدید اور ہمہ جہت نصاب',
      description: 'A forward-looking academic syllabus harmonizing Cambridge experiential learning principles with Balochistan Board matriculation rigors for optimal results.',
      icon: BookOpen,
      stats: 'STEM & Board Integrated',
      bulletPoints: [
        'Activity-driven science labs and mathematics problem-solving',
        'ICT coding and digital literacy programs',
        'Holistic character education and Islamic ethics'
      ]
    },
    {
      title: 'Safe Campus Environment',
      urduTitle: 'محفوظ اور پرسکون تعلیمی ماحول',
      description: 'A physically secure, emotionally nurturing campus designed to provide peace of mind to parents while fostering healthy physical recreation for learners.',
      icon: ShieldCheck,
      stats: '24/7 Monitored Security',
      bulletPoints: [
        'CCTV-monitored boundary walls and controlled access entry',
        'Dedicated female caretakers for early childhood sections',
        'On-campus emergency first-aid bay and hygienic water filtration'
      ]
    },
    {
      title: 'Bilingual Environment',
      urduTitle: 'دو لسانی مہارت (انگریزی اور اردو)',
      description: 'Cultivating true bilingual fluency so students master global scientific discourse in English while preserving cultural eloquence and heritage through Urdu.',
      icon: Globe,
      stats: 'English & Urdu Fluency',
      bulletPoints: [
        'Immersive English language speaking and debate clubs',
        'Classical Urdu poetry, composition, and declamation',
        'Bilingual communication training for public presentations'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
            Institutional Excellence
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43]">
            {isUrduMode ? 'ہمیں کیوں منتخب کریں؟' : 'Why Choose Wise Up International'}
          </h2>
          <p className="font-urdu text-base text-amber-900/80 leading-relaxed" dir="rtl">
            ہم صرف امتحان کی تیاری نہیں کرواتے بلکہ کردار سازی، خود اعتمادی اور روشن مستقبل کی ٹھوس بنیاد رکھتے ہیں۔
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Delivering an academic ecosystem in Model Town, Quetta that combines global scholastic rigor with cultural grounding and personal character development.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#102A43]/5 flex items-center justify-center text-[#102A43] mb-5">
                    <Icon className="w-6 h-6 text-[#102A43]" />
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#102A43] mb-1">
                    {isUrduMode ? pillar.urduTitle : pillar.title}
                  </h3>

                  <div className="text-[11px] font-semibold text-[#D4A017] uppercase tracking-wider mb-3">
                    {pillar.stats}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2 text-xs text-slate-600">
                    {pillar.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1F7A4D] shrink-0 mt-0.5" />
                        <span className="text-[11px]">{bp}</span>
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
  );
};
