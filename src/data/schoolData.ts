import { AcademicProgram, SupportService, NewsItem, Facility, DepartmentContact } from '../types';

export const SCHOOL_INFO = {
  name: 'Wise Up International High School',
  urduName: 'وائزاپ انٹرنیشنل ہائی اسکول',
  tagline: 'Where Excellence Meets Opportunity',
  urduTagline: 'جہاں عمدگی اور مواقع کا سنگم ہوتا ہے',
  address: '6225+R97, Khojak Rd, Model Town, Quetta, Pakistan',
  phone: '+92 81 2828187',
  phoneClean: '+92812828187',
  email: 'admissions@wiseup.edu.pk',
  facebookUrl: 'https://www.facebook.com/wiseupquettaschool',
  facebookDisplayName: 'Wise Up International Junior School Quetta',
  hours: 'Monday – Saturday: 8:00 AM – 3:30 PM (Friday: 8:00 AM – 12:30 PM)',
  coordinates: {
    lat: 30.1837,
    lng: 66.9987,
    plusCode: '6225+R97'
  }
};

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'early-years',
    title: 'Early Childhood & Montessori',
    urduTitle: 'ابتدائی تعلیمی سال اور مانٹیسوری',
    grades: 'Playgroup to KG-II',
    ageGroup: 'Ages 3 to 5 Years',
    summary: 'A nurturing, sensory-rich foundational program fostering motor skills, bilingual phonics, curiosity, and early social development in a cheerful, secure environment.',
    keyFeatures: [
      'Montessori sensorial apparatus & interactive play',
      'Dual-language immersion (English & Urdu phonics)',
      'Early numeracy, art expression, and motor coordination',
      'Low teacher-to-child ratio for individual guidance'
    ],
    curriculumTrack: 'International Early Years Curriculum (IEYC) aligned with national child development benchmarks',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'primary-school',
    title: 'Primary School Education',
    urduTitle: 'پرائمری اسکول کی تعلیم',
    grades: 'Grade 1 through Grade 5',
    ageGroup: 'Ages 6 to 10 Years',
    summary: 'Rigorous foundational academics centered on English literacy, logical mathematics, integrated sciences, Urdu literature, and character education.',
    keyFeatures: [
      'Activity-based STEAM learning and hands-on science experiments',
      'Fluency in spoken and written English alongside classic Urdu diction',
      'Mental math, computational thinking, and logic challenges',
      'Values-based moral education and community awareness'
    ],
    curriculumTrack: 'Cambridge Primary frameworks synchronized with Federal & Balochistan Provincial Standards',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'middle-school',
    title: 'Middle School Program',
    urduTitle: 'مڈل اسکول پروگرام',
    grades: 'Grade 6 through Grade 8',
    ageGroup: 'Ages 11 to 13 Years',
    summary: 'Transformative intermediate education fostering critical inquiry, analytical writing, digital literacy, and personal leadership as students prepare for high school tracks.',
    keyFeatures: [
      'Specialized lab courses in Physics, Chemistry, and Biology',
      'Introductory computer science, coding, and web awareness',
      'Structured debate, public speaking, and essay writing in both languages',
      'Sports leagues, leadership councils, and collaborative projects'
    ],
    curriculumTrack: 'Pre-Matriculation & Pre-O Level rigorous preparatory syllabus',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'high-school',
    title: 'High School & Matriculation Track',
    urduTitle: 'ہائی اسکول اور میٹرک ٹریک',
    grades: 'Grade 9 & Grade 10',
    ageGroup: 'Ages 14 to 16 Years',
    summary: 'Prestige high school preparation providing rigorous academic mastery in Science & Computer Science groups, exam techniques, and guidance for top higher secondary entry.',
    keyFeatures: [
      'Focused preparation for BISE Balochistan Board examinations with proven distinctions',
      'Optional Cambridge O-Level foundational track modules',
      'Daily remedial clinics and personalized one-on-one board exam mentoring',
      'Career counseling, university pathway mapping, and aptitude diagnostics'
    ],
    curriculumTrack: 'Balochistan BISE Science / Computer Science stream & International Academic Prep',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  }
];

export const SUPPORT_SERVICES: SupportService[] = [
  {
    id: 'tutoring',
    title: 'Remedial Clinics & Personalized Tutoring',
    description: 'Complimentary after-school academic support sessions where subject specialists work one-on-one with students who need concept reinforcement or exam prep.',
    iconName: 'GraduationCap',
    details: [
      'Daily 45-minute zero-period clinics for Math, Physics & English',
      'Diagnostic assessments every four weeks to catch learning gaps early',
      'Dedicated past-paper analysis sessions for board exam candidates'
    ]
  },
  {
    id: 'counseling',
    title: 'Guidance & Career Counseling',
    description: 'Empathetic pastoral care and professional academic mentorship helping students manage study habits, emotional well-being, and future educational roadmaps.',
    iconName: 'Compass',
    details: [
      'Confidential student wellness and stress management support',
      'Parent-teacher consultation conferences each term',
      'Career aptitude seminars with leading medical and engineering professionals'
    ]
  },
  {
    id: 'health',
    title: 'Student Health & First Aid Clinic',
    description: 'On-campus health bay staffed by a certified paramedic trained in pediatric first aid, emergency triage, and health hygiene monitoring.',
    iconName: 'HeartPulse',
    details: [
      'Equipped first-aid clinic with immediate response medical supplies',
      'Routine vision, dental, and general growth wellness screenings',
      'Strict campus hygiene standards, water quality testing, and sanitation protocols'
    ]
  }
];

export const EXTRACURRICULARS = [
  {
    category: 'Sports & Athletics',
    description: 'Building physical agility, discipline, sportsmanship, and teamwork through structured training.',
    items: ['Cricket Academy & Tournaments', 'Futsal & Football League', 'Table Tennis & Badminton', 'Annual Sports Day & Athletics']
  },
  {
    category: 'Intellectual & Leadership Clubs',
    description: 'Empowering young minds with persuasive expression, critical debate, and innovative thinking.',
    items: ['English & Urdu Debating Society', 'Model United Nations (MUN) Delegation', 'STEM, Robotics & Coding Guild', 'Quran Recitation & Islamic Studies Circle']
  },
  {
    category: 'Creative & Cultural Arts',
    description: 'Channeling creative expression, visual aesthetics, and cultural heritage appreciation.',
    items: ['Visual Arts, Painting & Calligraphy', 'Science Fair & Innovation Expo', 'Annual Drama & Speech Gala', 'Quetta Environmental Green Society']
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'science-lab',
    name: 'State-of-the-Art Science Laboratories',
    description: 'Fully equipped separate workstations for Physics, Chemistry, and Biology experiments, adhering to international safety protocols.',
    features: ['Modern microscopes, glassware & safety stations', 'Hands-on practicals for grades 6 to 10', 'Ventilated fume extractor & chemical safety cabinets'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'computer-lab',
    name: 'Advanced ICT & Computer Suite',
    description: 'High-speed broadband network with modern computing terminals for programming, digital literacy, and educational software exploration.',
    features: ['Modern desktop workstations with ergonomic seating', 'Monitored academic high-speed internet', 'Interactive smart projector display for multimedia lectures'],
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'library',
    name: 'Central Library & Reading Hall',
    description: 'A serene haven housing over 4,500 curated volumes across world literature, Islamic heritage, Pakistani history, encyclopedia, and sciences.',
    features: ['Quiet study carrels and comfortable group reading tables', 'Dedicated Early Readers corner with picture books', 'Regular book reviews and literary challenge programs'],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sports-ground',
    name: 'Secure Courtyard & Sports Facility',
    description: 'Safe, enclosed outdoor playing courts for badminton, basketball, mini-futsal, and assembly gatherings with soft impact turf zones for junior students.',
    features: ['Impact-absorbing flooring for kindergarten play zones', 'Surveillance-monitored secure perimeter', 'Dedicated physical training instructor for daily exercise'],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRANSPORT_AND_MEALS = {
  transport: {
    title: 'Supervised Safe School Transport',
    overview: 'Wise Up operates a reliable, GPS-monitored fleet of school transport vans driven by vetted, experienced drivers and accompanied by trained attendants.',
    routes: [
      'Model Town & Khojak Road Corridors',
      'Zarghoon Road, Cantonment & Railway Colony',
      'Jinnah Town, Samungli Road & Gulshan-e-Iqbal',
      'Airport Road, Chiltan Housing & Sariab Environs'
    ],
    features: [
      'Dedicated female transport attendant for junior students',
      'Strict pickup and drop-off attendance logging',
      'Speed-governed, regularly serviced vehicles with first-aid kits'
    ]
  },
  meals: {
    title: 'Hygienic Cafeteria & Nutrition Guidelines',
    overview: 'Our campus cafeteria promotes wholesome nutrition, strictly enforcing food hygiene standards and balanced dietary habits.',
    guidelines: [
      'Fresh daily mineral water stations throughout all corridors',
      'Prohibition of synthetic sodas and excessive junk snacks',
      'Wholesome, subsidized snacks including fresh fruit, milk, and baked items',
      'Dedicated clean dining hall with supervised hand-washing stations'
    ]
  }
};

export const NEWS_ANNOUNCEMENTS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Admissions Open for Academic Session 2026-2027',
    urduTitle: 'تعلیمی سال 2026-2027 کے لیے داخلے جاری ہیں',
    date: 'March 28, 2026',
    category: 'Admissions',
    excerpt: 'Registration is now formally underway for Playgroup through Grade 9. Limited seats available in science sections. Early applicant fee concessions available.',
    readTime: '2 min read',
    urgentNotice: true
  },
  {
    id: 'news-2',
    title: 'Annual Science & Tech Fair 2026 Scheduled for Khojak Campus',
    urduTitle: 'سالانہ سائنس اور ٹیکنالوجی میلہ کی تاریخ کا اعلان',
    date: 'March 15, 2026',
    category: 'Campus Event',
    excerpt: 'Students from Primary and Middle schools will showcase interactive working models covering renewable energy, robotics, and environmental stewardship.',
    readTime: '3 min read'
  },
  {
    id: 'news-3',
    title: 'Wise Up Matriculation Students Achieve Outstanding Board Results',
    urduTitle: 'میٹرک کے امتحانات میں شاندار کامیابی',
    date: 'February 24, 2026',
    category: 'Academic Achievement',
    excerpt: 'Congratulations to our Grade 10 candidates for securing an exceptional 98% pass rate with over 65% A-1 and A grades in the provincial board examinations.',
    readTime: '2 min read'
  }
];

export const DEPARTMENTS: DepartmentContact[] = [
  {
    department: 'Admissions & Student Enrollment',
    contactPerson: 'Admissions Secretariat',
    phone: '+92 81 2828187',
    email: 'admissions@wiseup.edu.pk',
    hours: 'Monday – Saturday: 8:00 AM – 3:00 PM'
  },
  {
    department: 'Front Desk Reception & General Inquiries',
    contactPerson: 'Information Desk',
    phone: '+92 81 2828187',
    email: 'info@wiseup.edu.pk',
    hours: 'Monday – Saturday: 7:45 AM – 3:30 PM'
  },
  {
    department: "Principal's Office & Academic Affairs",
    contactPerson: 'Executive Secretariat',
    phone: '+92 81 2828187 (Ext 102)',
    email: 'principal@wiseup.edu.pk',
    hours: 'By Prior Appointment: 10:00 AM – 1:00 PM'
  },
  {
    department: 'Transport Coordination & Routes',
    contactPerson: 'Fleet Supervisor',
    phone: '+92 81 2828187 (Ext 105)',
    email: 'transport@wiseup.edu.pk',
    hours: 'Monday – Saturday: 7:00 AM – 4:00 PM'
  }
];

export const LEADERSHIP_INFO = {
  principalName: 'Prof. Muhammad Tariq Khan, M.Sc., M.Ed.',
  title: 'Principal & Head of Institution',
  urduTitle: 'پرنسپل اور سربراہ ادارہ',
  experience: '24+ Years of Educational Leadership in Balochistan',
  message: 'At Wise Up International High School, our sacred calling is to nurture young souls who possess both sharp intellectual clarity and unyielding ethical integrity. We bridge international academic standards with our rich cultural and moral traditions, ensuring every child in Quetta discovers their highest potential. Our doors are always open to parents who dream big for their children.',
  credentials: [
    'Master of Education (Curriculum & Instruction)',
    'Former Senior Academic Advisor for Regional Board Curriculum',
    'Member, Pakistan Educational Leadership Council'
  ]
};

export const ACCREDITATIONS = [
  { name: 'Balochistan BISE Affiliated', label: 'Board of Intermediate and Secondary Education Quetta' },
  { name: 'British Council Candidate School', label: 'International Curriculum Benchmark' },
  { name: 'Quality Education Standard', label: 'Certified Child Safety & Pedagogical Framework' },
  { name: 'Montessori Association Pakistan', label: 'Early Years Foundation Certified' }
];
