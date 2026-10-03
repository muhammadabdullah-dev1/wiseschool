import React from 'react';
import { LEADERSHIP_INFO, ACCREDITATIONS, SCHOOL_INFO } from '../data/schoolData';
import { Target, Compass, Award, BookOpen, Users, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenApply: () => void;
  onOpenTour: () => void;
  isUrduMode: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenApply, onOpenTour, isUrduMode }) => {
  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-20">
      {/* Page Title Header */}
      <section className="bg-[#102A43] text-white py-16 sm:py-20 border-b border-[#243E56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
              <span>Wise Up International High School</span>
              <span className="text-white/40">·</span>
              <span>Model Town, Quetta</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {isUrduMode ? 'ہمارا ورثہ اور تعلیمی وژن' : 'About Our Heritage & Vision'}
            </h1>
            <p className="font-urdu text-lg text-amber-200/90 leading-relaxed" dir="rtl">
              علم، کردار اور قیادت کا ایسا سنگم جو ہر طالب علم کے اندر چھپی صلاحیتوں کو اجاگر کرے۔
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Founded on the belief that children in Balochistan deserve access to world-class educational benchmarks without compromising their cultural identity and moral compass.
            </p>
          </div>
        </div>
      </section>

      {/* 1. School Heritage & Founding Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
              Our Heritage & Foundation
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43]">
              Rooted in Quetta, Focused on Global Horizons
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Wise Up International High School was established in Model Town, Quetta with a singular, resolute mandate: to create an academic sanctum where disciplined scholarship, bilingual communication, and creative innovation converge.
              </p>
              <p>
                From its origins as an admired early years junior institution on Khojak Road, Wise Up has methodically grown into a comprehensive K-10 international high school. Today, our students represent diverse communities across Quetta, united by an unquenchable thirst for knowledge and high ethical distinction.
              </p>
              <p>
                Our campus provides purpose-built classrooms, science discovery laboratories, a multimedia library, and secure sports facilities that empower students to realize their highest academic aspirations.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#102A43]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D]" />
                <span>Established Campus in Model Town</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D]" />
                <span>BISE Balochistan Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D]" />
                <span>Dedicated Faculty Body</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                alt="Wise Up International High School Academic Setting"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-cinzel text-lg font-bold">Excellence in Model Town, Quetta</p>
                <p className="text-xs text-amber-200 mt-1">
                  6225+R97, Khojak Rd, Model Town, Quetta, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-[#F7F7F5] rounded-xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-[#102A43] text-[#D4A017] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                Core Purpose
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-[#102A43] mt-1 mb-3">
                Our Mission Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To provide a transformative, inclusive, and academically demanding learning environment that equips students with fluent bilingual communication, robust scientific inquiry, and unyielding moral integrity, preparing them to lead and serve locally and internationally.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-urdu text-amber-900 text-right leading-loose" dir="rtl">
                ہمارا مشن طلبہ کو ایسا مثالی تعلیمی اور اخلاقی ماحول فراہم کرنا ہے جو ان کی ذہنی، فکری اور روحانی صلاحیتوں کو نکھار کر ایک باکردار اور باصلاحیت شہری بنائے۔
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#F7F7F5] rounded-xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-[#D4A017] text-[#102A43] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F7A4D]">
                Long-Term Horizon
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-[#102A43] mt-1 mb-3">
                Our Institutional Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To be recognized as Balochistan’s leading benchmark for premier bilingual education, celebrated for graduating visionary thinkers, compassionate citizens, and scientific innovators who excel in higher academia and contribute constructively to society.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-urdu text-amber-900 text-right leading-loose" dir="rtl">
                ہم بلوچستان میں بین الاقوامی معیار کی تعلیم کا وہ معتبر ترین استعارہ بننا چاہتے ہیں جہاں ہر بچہ دنیا کے جدید علوم اور اقدار کا علمبردار بنے۔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & Principal's Message */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 bg-[#102A43] p-8 sm:p-10 text-white flex flex-col justify-between">
              <div>
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-slate-700 mb-6 border-2 border-[#D4A017] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                    alt={LEADERSHIP_INFO.principalName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#D4A017]">
                  {LEADERSHIP_INFO.title}
                </div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
                  {LEADERSHIP_INFO.principalName}
                </h3>
                <p className="font-urdu text-sm text-amber-200 mt-1">
                  {LEADERSHIP_INFO.urduTitle}
                </p>
                <p className="text-xs text-slate-300 mt-2">
                  {LEADERSHIP_INFO.experience}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                  Key Credentials:
                </span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  {LEADERSHIP_INFO.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4A017]">▪</span>
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                  Principal's Address to Parents
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#102A43] mt-1 mb-4">
                  "Guiding Every Mind with Intellect and Conscience"
                </h3>
                <blockquote className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-2 border-[#D4A017] pl-4 my-4">
                  "{LEADERSHIP_INFO.message}"
                </blockquote>
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed mt-4">
                  <p>
                    Education in the 21st century cannot remain confined to rote textbook memorization. At Wise Up, we inspire questions. We encourage students to test theories in laboratories, articulate arguments in debating chambers, and act with humility and empathy in their daily interactions.
                  </p>
                  <p>
                    I personally invite every parent in Quetta to visit our Model Town campus, meet our dedicated instructors, and observe firsthand the positive energy animating our classrooms.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Direct Desk: </span>
                  <strong className="text-[#102A43]">{SCHOOL_INFO.phone}</strong>
                </div>
                <button
                  onClick={onOpenTour}
                  className="py-2.5 px-4 bg-[#102A43] hover:bg-[#1A365D] text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Schedule Appointment with Principal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Teaching Philosophy */}
      <section className="py-16 bg-[#102A43] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase font-bold tracking-wider text-[#D4A017]">
              Our Educational DNA
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Pedagogical Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              How our faculty brings lessons to life through structured methods proven to maximize retention and student agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0D2338] p-6 rounded-xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4A017] text-[#102A43] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Inquiry-Based Discovery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than passive listening, students engage in hands-on experiments, scientific hypothesis testing, and collaborative problem-solving to uncover core concepts naturally.
              </p>
            </div>

            <div className="bg-[#0D2338] p-6 rounded-xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4A017] text-[#102A43] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Dual-Language Mastery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe true intelligence flourishes when students can argue a thesis eloquently in English while maintaining deep scholarly reverence and literary flair for Urdu.
              </p>
            </div>

            <div className="bg-[#0D2338] p-6 rounded-xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4A017] text-[#102A43] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-cinzel text-lg font-bold text-white">Values & Ethical Character</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                High test scores mean little without compassion, honesty, and social responsibility. Moral ethics, civic duty, and Islamic heritage are woven seamlessly across all grade levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Accreditations & Recognitions Row */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
          <span className="text-xs uppercase font-bold tracking-wider text-[#D4A017]">
            Official Frameworks
          </span>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#102A43]">
            Affiliations & Institutional Standards
          </h2>
          <p className="text-xs text-slate-500">
            Adhering to recognized educational benchmarks in Balochistan and international guidelines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ACCREDITATIONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center space-y-2 hover:border-[#D4A017] transition-colors"
            >
              <Award className="w-8 h-8 text-[#D4A017]" />
              <div className="font-cinzel text-xs font-bold text-[#102A43] leading-snug">
                {item.name}
              </div>
              <div className="text-[10px] text-slate-500 leading-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
