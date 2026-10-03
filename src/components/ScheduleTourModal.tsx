import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, BookOpen, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ScheduleTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'tour' | 'apply';
}

export const ScheduleTourModal: React.FC<ScheduleTourModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'tour'
}) => {
  const [mode, setMode] = useState<'tour' | 'apply'>(defaultMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: 'Grade 1-5 (Primary)',
    preferredDate: '',
    timeSlot: 'Morning (9:00 AM - 11:00 AM)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      studentName: '',
      phone: '',
      email: '',
      grade: 'Grade 1-5 (Primary)',
      preferredDate: '',
      timeSlot: 'Morning (9:00 AM - 11:00 AM)',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B1E30]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="bg-[#102A43] text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white transition-colors p-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider text-[#D4A017] font-bold">
              Wise Up International High School
            </span>
          </div>
          <h3 className="font-cinzel text-xl font-bold text-white">
            {mode === 'tour' ? 'Schedule a Campus Visit' : 'Admissions Inquiry 2026-27'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {mode === 'tour'
              ? 'Experience our classrooms, science labs, and meet our academic faculty in Model Town, Quetta.'
              : 'Submit your application details to receive enrollment criteria and fee schedule.'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-4 flex gap-2 p-1 bg-[#0D2338] rounded-lg">
            <button
              type="button"
              onClick={() => { setMode('tour'); setSubmitted(false); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded transition-colors ${
                mode === 'tour' ? 'bg-[#D4A017] text-[#102A43]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Campus Visit Tour
            </button>
            <button
              type="button"
              onClick={() => { setMode('apply'); setSubmitted(false); }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded transition-colors ${
                mode === 'apply' ? 'bg-[#D4A017] text-[#102A43]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Admission Application
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#1F7A4D]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-cinzel text-xl font-bold text-[#102A43]">
                {mode === 'tour' ? 'Visit Request Received!' : 'Inquiry Submitted Successfully!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#102A43]">{formData.parentName}</strong>. Our admissions officer will contact you at <strong className="text-[#102A43]">{formData.phone}</strong> within 24 working hours to confirm your appointment.
              </p>

              <div className="bg-[#F7F7F5] border border-slate-200 rounded-lg p-3 text-left text-xs space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>Reference ID:</span>
                  <span className="font-mono font-bold text-[#102A43]">WUIS-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Campus:</span>
                  <span className="text-[#102A43] font-medium">Khojak Rd, Model Town, Quetta</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Admissions Helpline:</span>
                  <span className="text-[#102A43] font-semibold">{SCHOOL_INFO.phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full py-2.5 px-4 bg-[#102A43] text-white text-xs font-bold rounded-lg hover:bg-[#1A365D] transition-colors"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ahmed Tariq"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Desired Grade Level *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-white text-slate-900"
                    >
                      <option>Early Childhood (Playgroup / KG)</option>
                      <option>Grade 1-5 (Primary School)</option>
                      <option>Grade 6-8 (Middle School)</option>
                      <option>Grade 9-10 (Matric Science / O-Level)</option>
                    </select>
                  </div>
                </div>

                {mode === 'tour' ? (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Preferred Visit Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Current School Attending
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Previous school name in Quetta"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Questions or Special Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Inquiring about school transport from Zarghoon Road, or scholarship criteria..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  Or call directly: <a href={`tel:${SCHOOL_INFO.phoneClean}`} className="text-[#102A43] font-bold underline">{SCHOOL_INFO.phone}</a>
                </span>
                <button
                  type="submit"
                  className="py-2.5 px-5 bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102A43]"
                >
                  {mode === 'tour' ? 'Confirm Campus Visit' : 'Submit Application'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
