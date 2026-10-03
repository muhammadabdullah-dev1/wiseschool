import React, { useState } from 'react';
import { Calendar, ArrowRight, Bell, X, CheckCircle2 } from 'lucide-react';
import { NEWS_ANNOUNCEMENTS } from '../data/schoolData';
import { NewsItem } from '../types';

interface NewsSectionProps {
  onOpenApply: () => void;
  isUrduMode: boolean;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onOpenApply, isUrduMode }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-1">
              Campus Bulletins
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#102A43]">
              {isUrduMode ? 'تازہ ترین خبریں اور اعلانات' : 'Latest News & Announcements'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
              Stay informed about academic milestones, upcoming events, and enrollment dates at Wise Up International.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenApply}
              className="text-xs font-bold text-[#102A43] hover:text-[#D4A017] flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
            >
              <span>{isUrduMode ? 'داخلہ فارم پر کریں' : 'Apply for Enrollment'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ANNOUNCEMENTS.map((news) => (
            <article
              key={news.id}
              className="bg-[#F7F7F5] rounded-xl p-6 border border-slate-200 flex flex-col justify-between hover:border-[#D4A017] transition-colors group cursor-pointer"
              onClick={() => setSelectedNews(news)}
            >
              <div>
                {/* Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-[#102A43]">{news.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{news.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{news.readTime}</span>
                </div>

                {news.urgentNotice && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F7A4D] mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#1F7A4D] animate-ping" />
                    <span>Active Enrollment Window</span>
                  </div>
                )}

                <h3 className="font-cinzel text-lg font-bold text-[#102A43] group-hover:text-[#D4A017] transition-colors line-clamp-2 leading-snug mb-2">
                  {news.title}
                </h3>

                {news.urduTitle && (
                  <p className="font-urdu text-xs text-amber-900/90 text-right mb-2" dir="rtl">
                    {news.urduTitle}
                  </p>
                )}

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {news.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-[#102A43] group-hover:text-[#D4A017] transition-colors">
                  Read Full Bulletin
                </span>
                <ArrowRight className="w-4 h-4 text-[#D4A017] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1E30]/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-fadeIn">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="font-bold text-[#102A43]">{selectedNews.category}</span>
              <span>·</span>
              <span>{selectedNews.date}</span>
            </div>

            <h3 className="font-cinzel text-xl font-bold text-[#102A43] mb-3">
              {selectedNews.title}
            </h3>

            {selectedNews.urduTitle && (
              <p className="font-urdu text-base text-amber-900 mb-4 text-right" dir="rtl">
                {selectedNews.urduTitle}
              </p>
            )}

            <p className="text-xs text-slate-700 leading-relaxed mb-6">
              {selectedNews.excerpt} Wise Up International High School regularly communicates with families regarding academic milestones, examinations, and community activities to ensure unified student progress.
            </p>

            <div className="bg-[#F7F7F5] rounded-lg p-3 text-xs text-slate-600 space-y-1 mb-6">
              <div className="font-semibold text-[#102A43]">Official Notice from Secretariat</div>
              <div>Model Town, Khojak Rd, Quetta · Tel: +92 81 2828187</div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedNews(null);
                  onOpenApply();
                }}
                className="flex-1 py-2.5 px-4 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] text-xs font-bold rounded-lg transition-colors"
              >
                Apply for Admission
              </button>
              <button
                type="button"
                onClick={() => setSelectedNews(null)}
                className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
