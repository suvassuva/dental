export interface FAQItem {
  id: string;
  category: 'General Dentistry' | 'Treatments' | 'Dental Implants' | 'Braces & Aligners' | 'Cosmetic Dentistry' | 'Appointments';
  question: string;
  answer: string;
}

export const faqCategories = [
  'All',
  'General Dentistry',
  'Treatments',
  'Dental Implants',
  'Braces & Aligners',
  'Cosmetic Dentistry',
  'Appointments'
] as const;

export const faqData: FAQItem[] = [
  {
    id: "1",
    category: "General Dentistry",
    question: "How often should I visit the dentist for a routine checkup?",
    answer: "We recommend visiting our clinic every 6 months for a routine dental checkup and professional cleaning. Regular visits allow us to detect plaque buildup, early cavities, and gum inflammation before they require extensive treatment."
  },
  {
    id: "2",
    category: "General Dentistry",
    question: "What should I do in case of a sudden dental emergency?",
    answer: "If you experience severe tooth pain, a knocked-out tooth, or a broken restoration, call our emergency hotline immediately at +91 98765 43210. We reserve daily emergency slots for urgent walk-ins."
  },
  {
    id: "3",
    category: "Dental Implants",
    question: "Are dental implants permanent?",
    answer: "Yes! Dental implants are bio-compatible titanium fixtures that integrate directly into your jawbone structure (osseointegration). With proper oral hygiene and regular dental checkups, implants can last 25 years to a lifetime."
  },
  {
    id: "4",
    category: "Dental Implants",
    question: "How long does the dental implant process take from start to finish?",
    answer: "Typically, implant treatment takes 3 to 6 months. This includes initial 3D planning, implant placement, jawbone healing integration (8–12 weeks), and final crown placement."
  },
  {
    id: "5",
    category: "Braces & Aligners",
    question: "Are clear aligners as effective as traditional metal braces?",
    answer: "Yes, for the vast majority of mild, moderate, and complex orthodontic cases. Clear aligners use advanced SmartTrack material and 3D digital force planning to guide teeth predictably into position."
  },
  {
    id: "6",
    category: "Braces & Aligners",
    question: "Will braces or aligners affect my speech?",
    answer: "You may notice a minor lisp for the first 2-3 days as your tongue adapts to the aligners or brackets. Your speech returns to normal very quickly."
  },
  {
    id: "7",
    category: "Cosmetic Dentistry",
    question: "Do porcelain veneers require shaving down natural teeth?",
    answer: "Modern ultra-thin porcelain veneers (such as E-Max veneers) require micro-preparation of only 0.3mm to 0.5mm of outer enamel—preserving maximum natural tooth structure."
  },
  {
    id: "8",
    category: "Cosmetic Dentistry",
    question: "Does teeth whitening cause permanent tooth sensitivity?",
    answer: "No. Our laser teeth whitening formulas contain potassium nitrate and fluoride desensitizers. Any mild sensitivity vanishes within 24 to 48 hours."
  },
  {
    id: "9",
    category: "Appointments",
    question: "How do I schedule an appointment?",
    answer: "You can easily book online via our Book Appointment form, contact us directly on WhatsApp (+91 98765 43210), or call our front desk."
  },
  {
    id: "10",
    category: "Appointments",
    question: "What payment methods and insurance plans do you accept?",
    answer: "We accept all major credit/debit cards, UPI payments, net banking, and offer 0% interest EMI options for extensive procedures like implants and full-mouth rehabilitate."
  }
];
