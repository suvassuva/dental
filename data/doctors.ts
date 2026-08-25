export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  schedule: string;
  highlights: string[];
}

export const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "Dr. Rajesh Sharma",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    specialization: "Implantologist & Chief Oral Surgeon",
    experience: "14+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Rajesh Sharma is a pioneer in computer-guided keyhole implantology and full-mouth rehabilitation. Having trained in Germany and the USA, he has successfully placed over 4,000 dental implants with an unprecedented success rate.",
    schedule: "Mon - Sat: 9:30 AM - 4:00 PM",
    highlights: [
      "Fellow of International Congress of Oral Implantologists (ICOI, USA)",
      "Specialist in All-on-4 & Full Mouth Reconstruction",
      "Over 4,000+ Successful Implant Surgeries"
    ]
  },
  {
    id: "2",
    name: "Dr. Ananya Mehra",
    qualification: "BDS, MDS (Endodontics & Restorative Dentistry)",
    specialization: "Root Canal Specialist & Cosmetic Dentist",
    experience: "11+ Years",
    image: "https://images.unsplash.com/photo-1594824813571-215f396469a0?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Ananya Mehra specializes in painless single-visit microscopic root canal therapy and smile aesthetic makeovers. Her gentle bedside manner and meticulous precision have earned her raving reviews from thousands of satisfied patients.",
    schedule: "Mon - Sat: 11:00 AM - 7:30 PM",
    highlights: [
      "Gold Medalist in Conservative Dentistry & Endodontics",
      "Certified Digital Smile Design Specialist (DSD)",
      "Specialist in Microscopic Endodontics"
    ]
  },
  {
    id: "3",
    name: "Dr. Vikram Nair",
    qualification: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    specialization: "Orthodontist & Clear Aligner Specialist",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Vikram Nair is a certified Invisalign & Clear Aligner Diamond Provider. He specializes in subtle, non-extraction tooth alignment for adults and teenagers, combining cutting-edge 3D scanning with custom biometric force planning.",
    schedule: "Mon - Fri: 10:00 AM - 6:00 PM",
    highlights: [
      "Certified Diamond Clear Aligner Provider",
      "Member of World Federation of Orthodontists (WFO)",
      "Expert in Damon Self-Ligating Ceramic Braces"
    ]
  },
  {
    id: "4",
    name: "Dr. Sneha Deshmukh",
    qualification: "BDS, MDS (Pediatric & Preventive Dentistry)",
    specialization: "Pediatric Dentist (Pedodontist)",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    bio: "Dr. Sneha Deshmukh loves making dental care a joyful experience for children. She focuses on early interceptive orthodontics, painless cavity treatments, and habit counseling in a playful, soothing environment.",
    schedule: "Tue - Sun: 9:00 AM - 3:30 PM",
    highlights: [
      "Specialist in Child Psychology & Behavior Management",
      "Expert in Preventive Fluoride Varnish & Sealants",
      "Painless Computerized Anesthesia Specialist"
    ]
  }
];
