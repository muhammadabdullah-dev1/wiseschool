export interface AcademicProgram {
  id: string;
  title: string;
  urduTitle: string;
  grades: string;
  ageGroup: string;
  summary: string;
  keyFeatures: string[];
  curriculumTrack: string;
  image: string;
}

export interface SupportService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  urduTitle?: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  urgentNotice?: boolean;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
}

export interface DepartmentContact {
  department: string;
  contactPerson: string;
  phone: string;
  email: string;
  hours: string;
}

export interface InquiryFormData {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  gradeLevel: string;
  message: string;
}

export type ActivePage = 'home' | 'about' | 'services' | 'contact' | 'wordpress-export';
