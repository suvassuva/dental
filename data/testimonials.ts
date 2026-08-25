export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  review: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Arjun Singhania",
    location: "Bangalore",
    rating: 5,
    treatment: "Dental Implants",
    review: "SmileCare is by far the best dental clinic I have ever visited. Dr. Sharma placed two implants with zero pain during the procedure. The results feel completely natural!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "2",
    name: "Pooja Hegde",
    location: "Bangalore",
    rating: 5,
    treatment: "Clear Aligners",
    review: "I completed my 12-month aligner journey with Dr. Nair. The 3D scan preview was spot on, and my teeth are now perfectly straight. Highly recommended for working professionals!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    date: "1 month ago",
    verified: true
  },
  {
    id: "3",
    name: "Karan Johar",
    location: "Bangalore",
    rating: 5,
    treatment: "Root Canal & Zirconia Crown",
    review: "I had excruciating tooth pain and walked in without an appointment. Dr. Mehra performed a single-session painless root canal. The clinic is clean, hygienic, and extremely modern.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: "4",
    name: "Sunita Rao",
    location: "Bangalore",
    rating: 5,
    treatment: "Porcelain Veneers",
    review: "Getting my smile makeover at SmileCare was the best decision of my life! The porcelain veneers look so luminous and natural. People constantly compliment my smile.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    date: "2 months ago",
    verified: true
  },
  {
    id: "5",
    name: "Deepak Patel",
    location: "Bangalore",
    rating: 5,
    treatment: "Teeth Whitening",
    review: "Booked laser teeth whitening before my corporate summit. Took under an hour and removed all my tea stains completely. Zero sensitivity afterwards!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    date: "1 month ago",
    verified: true
  },
  {
    id: "6",
    name: "Ritu Verma",
    location: "Bangalore",
    rating: 5,
    treatment: "Pediatric Dentistry",
    review: "Dr. Sneha was so patient with my 5-year-old daughter! She loved the cartoon screens on the ceiling and left with a big smile and a surprise toy gift bag.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    date: "1 week ago",
    verified: true
  }
];
