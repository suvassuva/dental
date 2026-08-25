export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic' | 'Doctors' | 'Technology' | 'Treatment Rooms' | 'Smile Transformations';
  image: string;
  description: string;
}

export const galleryCategories = [
  'All',
  'Clinic',
  'Doctors',
  'Technology',
  'Treatment Rooms',
  'Smile Transformations'
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Luxury Reception & Lounge",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
    description: "Spacious, comfortable waiting lounge with complimentary refreshments and soothing ambiance."
  },
  {
    id: "2",
    title: "Sterilized Operatory Suite",
    category: "Treatment Rooms",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
    description: "State-of-the-art dental chair with overhead entertainment monitor and Class-B autoclave sterilization."
  },
  {
    id: "3",
    title: "3D CBCT Digital Imaging System",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000",
    description: "Ultra-low radiation 3D Cone Beam Computed Tomography for precise bone and nerve mapping."
  },
  {
    id: "4",
    title: "Chief Surgeons & Specialists Team",
    category: "Doctors",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000",
    description: "Our multidisciplinary dental specialists collaborating on a complex full-mouth rehabilitation."
  },
  {
    id: "5",
    title: "Porcelain Veneer Smile Transformation",
    category: "Smile Transformations",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1000",
    description: "Complete aesthetic makeover correcting discoloration, chips, and irregular teeth shape."
  },
  {
    id: "6",
    title: "Laser Teeth Whitening Station",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000",
    description: "Cool-light LED laser whitening module for instant, zero-sensitivity enamel brightening."
  },
  {
    id: "7",
    title: "Pediatric Play & Treatment Zone",
    category: "Treatment Rooms",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
    description: "Colorful pediatric dental suite equipped with ceiling screens, games, and gentle care tools."
  },
  {
    id: "8",
    title: "Clinic Exterior & Parking",
    category: "Clinic",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    description: "Prime ground-floor location with dedicated valet parking and wheelchair access."
  },
  {
    id: "9",
    title: "Clear Aligner 3D Scanner Suite",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1000",
    description: "High-speed intraoral optical scanner capturing digital impressions without messy putty."
  }
];
