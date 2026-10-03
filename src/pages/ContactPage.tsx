import React, { useState } from 'react';
import {
  SCHOOL_INFO,
  DEPARTMENTS
} from '../data/schoolData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Send,
  CheckCircle2,
  User,
  BookOpen,
  Calendar,
  Building,
  Navigation,
  Share2,
  Printer
} from 'lucide-react';

interface ContactPageProps {
  isUrduMode: boolean;
  onOpenTour: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ isUrduMode, onOpenTour }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    gradeLevel: 'Grade 1-5 (Primary School)',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [mapType, setMapType] = useState<'map' | 'satellite'>('map');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;
    const refCode = `WUIS-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(refCode);
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      gradeLevel: 'Grade 1-5 (Primary School)',
      message: ''
    });
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Khojak Rd, Model Town, Quetta, Pakistan'
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-20">
      {/* Page Title Header */}
      <section className="bg-[#102A43] text-white py-16 sm:py-20 border-b border-[#243E56]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
              <span>Admissions Office & Campus Location</span>
              <span className="text-white/40">·</span>
              <span>Model Town, Quetta</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {isUrduMode ? 'داخلہ انکوائری اور رابطہ فارم' : 'Contact & Admissions Inquiry'}
            </h1>
            <p className="font-urdu text-lg text-amber-200/90 leading-relaxed" dir="rtl">
              داخلہ کے حوالے سے کسی بھی معلومات یا کیمپس کے دورے کے لیے ہم سے رابطہ کیجیے۔
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We look forward to welcoming you and your family. Reach our admissions advisors by phone, submit an online enrollment inquiry, or visit us in Model Town, Quetta.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info + Admissions Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information & Direct Numbers */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Phone Highlight Box */}
            <div className="bg-[#102A43] text-white p-6 sm:p-8 rounded-2xl shadow-md border-t-4 border-[#D4A017] space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#D4A017]">
                Direct Admissions Line
              </span>
              <div>
                <a
                  href={`tel:${SCHOOL_INFO.phoneClean}`}
                  className="font-cinzel text-2xl sm:text-3xl font-bold text-white hover:text-[#D4A017] transition-colors block"
                >
                  {SCHOOL_INFO.phone}
                </a>
                <p className="text-xs text-slate-300 mt-1">
                  Click to connect immediately with our admissions desk.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Campus Address:</strong>
                    <span>{SCHOOL_INFO.address}</span>
                    <span className="block text-slate-400 text-[11px] mt-0.5">Plus Code: {SCHOOL_INFO.coordinates.plusCode}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Email Address:</strong>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-slate-300 hover:text-white underline">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Admissions & Office Hours:</strong>
                    <p className="text-slate-300">Mon – Thu: 8:00 AM – 3:30 PM</p>
                    <p className="text-slate-300">Friday: 8:00 AM – 12:30 PM</p>
                    <p className="text-slate-300">Saturday: 8:00 AM – 2:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenTour}
                  className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-lg transition-colors border border-white/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4A017]" />
                  <span>Book Guided Campus Tour</span>
                </button>
              </div>
            </div>

            {/* Official Facebook Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#102A43]">Official Facebook Community</h4>
                  <p className="text-xs text-slate-500">Wise Up International Junior School Quetta</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our active school page on Facebook for photo highlights of sports galas, science exhibitions, and parental announcements.
              </p>
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1877F2] hover:underline"
              >
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Department Directory */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-cinzel text-base font-bold text-[#102A43] border-b border-slate-100 pb-2">
                Department Directory
              </h4>
              <div className="space-y-3 text-xs">
                {DEPARTMENTS.map((dept, idx) => (
                  <div key={idx} className="p-2.5 bg-[#F7F7F5] rounded-lg border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#102A43]">{dept.department}</span>
                      <span className="text-[11px] text-slate-500">{dept.contactPerson}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600 text-[11px]">
                      <span>Tel: <a href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`} className="font-medium text-[#102A43] hover:underline">{dept.phone}</a></span>
                      <span>{dept.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Admissions Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-md">
              <div className="border-b border-slate-200 pb-5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017]">
                  Enrollment Inquiry Form
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-[#102A43] mt-1">
                  Admissions Application for 2026-2027
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Complete this form to receive our admissions prospectus, fee structure, and assessment schedule.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-[#1F7A4D]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h4 className="font-cinzel text-2xl font-bold text-[#102A43]">
                    Inquiry Received Successfully!
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in Wise Up International High School. An admissions counselor will contact <strong className="text-[#102A43]">{formData.parentName}</strong> at <strong className="text-[#102A43]">{formData.phone}</strong> shortly.
                  </p>

                  <div className="bg-[#F7F7F5] border border-slate-200 rounded-xl p-5 text-left text-xs max-w-md mx-auto space-y-2">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Inquiry Tracking Code:</span>
                      <span className="font-mono font-bold text-[#102A43]">{submissionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Student Name:</span>
                      <span className="font-semibold text-slate-800">{formData.studentName || 'Not specified'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Desired Grade Level:</span>
                      <span className="font-semibold text-slate-800">{formData.gradeLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Parent Phone:</span>
                      <span className="font-semibold text-slate-800">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">School Location:</span>
                      <span className="font-semibold text-slate-800">Model Town, Quetta</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print Confirmation Slip</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-2.5 px-4 bg-[#102A43] hover:bg-[#1A365D] text-white font-bold text-xs rounded-lg transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Student Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Daniyal Khan"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Asadullah Khan"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="0300 1234567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          placeholder="parent@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Desired Grade Level for 2026-2027 *
                    </label>
                    <div className="relative">
                      <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <select
                        value={formData.gradeLevel}
                        onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] bg-white text-slate-900 font-medium"
                      >
                        <option>Early Childhood: Playgroup / Nursery</option>
                        <option>Early Childhood: Kindergarten (KG-I / KG-II)</option>
                        <option>Primary: Grade 1 through Grade 5</option>
                        <option>Middle School: Grade 6 through Grade 8</option>
                        <option>High School: Grade 9 (Matric Science / O-Level)</option>
                        <option>High School: Grade 10 (Matric Science / O-Level)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Specific Questions or Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any queries regarding curriculum, transport routes, fee schedule, or previous school transfer..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] text-slate-900 resize-none"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-500">
                      * Required fields. All parental inquiries are treated with strict confidentiality.
                    </p>
                    <button
                      type="submit"
                      className="bg-[#D4A017] hover:bg-[#c29012] text-[#102A43] font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4A017]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 sm:p-6 bg-[#102A43] text-white flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase font-bold tracking-wider text-[#D4A017]">
                Campus Location
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold">
                Model Town, Khojak Rd, Quetta
              </h3>
              <p className="text-xs text-slate-300">
                Plus Code: 6225+R97 Quetta · Accessible from Zarghoon Road and Cantonment
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#0D2338] p-1 rounded-lg flex gap-1 text-xs">
                <button
                  onClick={() => setMapType('map')}
                  className={`px-3 py-1 rounded transition-colors ${
                    mapType === 'map' ? 'bg-[#D4A017] text-[#102A43] font-bold' : 'text-slate-300'
                  }`}
                >
                  Map View
                </button>
                <button
                  onClick={() => setMapType('satellite')}
                  className={`px-3 py-1 rounded transition-colors ${
                    mapType === 'satellite' ? 'bg-[#D4A017] text-[#102A43] font-bold' : 'text-slate-300'
                  }`}
                >
                  Satellite View
                </button>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg border border-white/20 flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Simulator */}
          <div className="relative h-96 w-full bg-[#E5E3DF] overflow-hidden">
            {mapType === 'map' ? (
              /* Vector Street Map Representation */
              <div className="w-full h-full relative bg-[#E9E5DC]">
                {/* SVG styled road network of Model Town & Khojak Rd */}
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 400">
                  <rect width="800" height="400" fill="#E8ECE9" />
                  {/* Quetta mountain contours */}
                  <path d="M 0,80 Q 200,30 400,90 T 800,60 L 800,0 L 0,0 Z" fill="#D5DDD7" opacity="0.6" />
                  {/* Main Roads */}
                  {/* Khojak Road */}
                  <line x1="0" y1="180" x2="800" y2="240" stroke="#FFFFFF" strokeWidth="18" />
                  <line x1="0" y1="180" x2="800" y2="240" stroke="#F4D03F" strokeWidth="6" strokeDasharray="12,12" />
                  {/* Model Town Main Avenue */}
                  <line x1="420" y1="0" x2="380" y2="400" stroke="#FFFFFF" strokeWidth="22" />
                  <line x1="420" y1="0" x2="380" y2="400" stroke="#F39C12" strokeWidth="4" />
                  {/* Residential Cross Streets */}
                  <line x1="150" y1="0" x2="190" y2="400" stroke="#FFFFFF" strokeWidth="10" />
                  <line x1="620" y1="0" x2="580" y2="400" stroke="#FFFFFF" strokeWidth="10" />
                  <line x1="0" y1="320" x2="800" y2="350" stroke="#FFFFFF" strokeWidth="12" />
                  <line x1="0" y1="80" x2="800" y2="100" stroke="#FFFFFF" strokeWidth="12" />
                  
                  {/* Labels on Map */}
                  <text x="220" y="200" fill="#4A5568" fontSize="12" fontWeight="600" transform="rotate(4, 220, 200)">Khojak Road</text>
                  <text x="440" y="80" fill="#4A5568" fontSize="12" fontWeight="600" transform="rotate(85, 440, 80)">Model Town Ave</text>
                  <text x="60" y="340" fill="#718096" fontSize="11">To Zarghoon Rd</text>
                  <text x="640" y="240" fill="#718096" fontSize="11">To Quetta Cantt</text>
                </svg>
              </div>
            ) : (
              /* Satellite view representation */
              <div className="w-full h-full relative bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80"
                  alt="Aerial View of Model Town Quetta"
                  className="w-full h-full object-cover opacity-75"
                />
              </div>
            )}

            {/* School Pin Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-auto">
              <div className="bg-[#102A43] text-white px-3 py-1.5 rounded-lg shadow-xl border border-[#D4A017] text-xs font-bold flex items-center gap-1.5 animate-bounce mb-1">
                <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span>Wise Up International High School</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#D4A017] border-4 border-[#102A43] shadow-lg flex items-center justify-center text-[#102A43]">
                <MapPin className="w-4 h-4 fill-current" />
              </div>
              <div className="w-4 h-1.5 bg-black/40 rounded-full blur-[1px] mt-0.5" />
            </div>

            {/* Map Info Overlay Card */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow border border-slate-200 text-xs text-slate-700 max-w-xs hidden sm:block">
              <p className="font-bold text-[#102A43]">Wise Up International Campus</p>
              <p className="text-[11px] text-slate-500">6225+R97, Khojak Rd, Model Town, Quetta</p>
              <p className="text-[11px] text-[#1F7A4D] font-semibold mt-1">Open for Visitor Tours Today</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
