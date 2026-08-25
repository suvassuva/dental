export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  featured: boolean;
  category: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  heroImage: string;
  subtitle: string;
  introduction: string;
  benefits: Benefit[];
  process: Step[];
  whyChooseUs: string[];
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; review: string; rating: number; treatment: string }[];
  beforeAfter: { before: string; after: string; caption: string }[];
}

export const servicesData: Service[] = [
  {
    id: "1",
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacement for missing teeth with titanium posts.",
    fullDescription: "Restore full oral functionality and aesthetic confidence with medical-grade titanium implant posts that integrate seamlessly into your jawbone structure.",
    iconName: "Shield",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Restorative"
  },
  {
    id: "2",
    slug: "root-canal",
    name: "Root Canal Treatment",
    shortDescription: "Painless, precise therapy to save damaged teeth and relieve infection.",
    fullDescription: "State-of-the-art micro-endodontic therapy removes infected dental pulp safely, preserving your original natural tooth structure for life.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Endodontics"
  },
  {
    id: "3",
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "Professional laser whitening for a brilliant, stain-free smile in one visit.",
    fullDescription: "Lift years of stubborn coffee, tea, and aging stains safely with clinical-grade LED laser whitening solutions.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Cosmetic"
  },
  {
    id: "4",
    slug: "braces",
    name: "Orthodontic Braces",
    shortDescription: "Traditional metal & ceramic braces for precise teeth alignment and bite correction.",
    fullDescription: "Correct complex alignment, crowding, and bite issues with advanced low-profile metal or tooth-colored ceramic brackets.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Orthodontics"
  },
  {
    id: "5",
    slug: "clear-aligners",
    name: "Clear Aligners",
    shortDescription: "Invisible, removable custom aligners to straighten teeth discreetly.",
    fullDescription: "Transform your smile invisibly without wires or brackets using 3D-scanned custom transparent aligner trays.",
    iconName: "Maximize2",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Orthodontics"
  },
  {
    id: "6",
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription: "Custom porcelain veneers and complete smile makeover design.",
    fullDescription: "Craft your dream aesthetic with custom-tailored porcelain veneers, composite bonding, and digital smile design.",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Cosmetic"
  },
  {
    id: "7",
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDescription: "Gentle, stress-free dental care specially designed for children.",
    fullDescription: "Empower your child with positive dental experiences, fluoride sealants, and cavity prevention in a playful setting.",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    featured: true,
    category: "Preventive"
  },
  {
    id: "8",
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDescription: "Comprehensive oral checkups, digital X-rays, and cavity fillings.",
    fullDescription: "Maintain optimal oral health with routine dental exams, low-radiation digital radiographs, and natural tooth fillings.",
    iconName: "CheckCircle",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800",
    featured: false,
    category: "General"
  },
  {
    id: "9",
    slug: "dental-cleaning",
    name: "Dental Cleaning & Polishing",
    shortDescription: "Ultrasonic scaling to remove calculus, plaque, and surface discolorations.",
    fullDescription: "Protect your gums and freshen your breath with high-frequency ultrasonic cleaning and enamel polishing.",
    iconName: "Droplet",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    featured: false,
    category: "Preventive"
  },
  {
    id: "10",
    slug: "crowns-bridges",
    name: "Crowns & Bridges",
    shortDescription: "Durable ceramic crowns and fixed bridges to restore full tooth shape.",
    fullDescription: "Protect weak or broken teeth with computer-milled Zirconia crowns designed for strength and natural translucency.",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    featured: false,
    category: "Restorative"
  },
  {
    id: "11",
    slug: "gum-treatment",
    name: "Gum Care & Periodontics",
    shortDescription: "Advanced laser periodontics for bleeding gums and bone recession.",
    fullDescription: "Halt gum disease progression with deep pocket scaling, root planing, and gentle diode laser gum therapy.",
    iconName: "Award",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    featured: false,
    category: "Periodontics"
  },
  {
    id: "12",
    slug: "wisdom-tooth",
    name: "Wisdom Tooth Removal",
    shortDescription: "Pain-free surgical extraction of impacted wisdom teeth with quick recovery.",
    fullDescription: "Prevent jaw crowding and painful nerve infection through painless micro-surgical extractions under local anesthesia.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800",
    featured: false,
    category: "Oral Surgery"
  }
];

export const serviceDetailsData: Record<string, ServiceDetail> = {
  "dental-implants": {
    slug: "dental-implants",
    title: "Restore Your Smile with Dental Implants",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Permanent, bio-compatible titanium tooth roots that look, feel, and function like natural teeth.",
    introduction: "Dental implants are the gold standard solution for missing teeth. By replacing both the root and the crown, dental implants preserve facial structure, prevent jaw bone loss, and restore your chewing ability completely.",
    benefits: [
      { title: "Lifelong Durability", description: "Implants achieve a 98% long-term success rate and can last a lifetime with proper care.", icon: "Shield" },
      { title: "Natural Appearance", description: "Custom ceramic crowns match your existing teeth in shade, shape, and translucency.", icon: "Smile" },
      { title: "Jaw Bone Preservation", description: "Stimulates bone tissue to prevent the facial sagging associated with missing teeth.", icon: "Activity" },
      { title: "Zero Food Restrictions", description: "Eat your favorite foods confidently without slip or discomfort.", icon: "CheckCircle" }
    ],
    process: [
      { number: 1, title: "3D CBCT Consultation", description: "High-resolution digital scan to analyze bone density and plan exact computer-guided implant placement." },
      { number: 2, title: "Precision Placement", description: "Gentle insertion of the medical-grade titanium fixture under local anesthesia." },
      { number: 3, title: "Osseointegration", description: "Healing period (8–12 weeks) during which the fixture fuses securely with your jawbone." },
      { number: 4, title: "Abutment & Crown", description: "Attachment of the custom Zirconia crown designed to complete your natural smile." },
      { number: 5, title: "Follow-up & Care", description: "Final assessment and personalized oral hygiene routine for lifelong maintenance." }
    ],
    whyChooseUs: [
      "Board-Certified Implantologists with 10+ years experience",
      "Computer-Guided 3D Keyhole Surgery for minimal pain and zero swelling",
      "100% US-FDA Approved Titanium and Zirconia Implants",
      "Lifetime Structural Warranty on Implant Fixtures"
    ],
    faqs: [
      { question: "Is dental implant placement painful?", answer: "Not at all. The procedure is performed under local anesthesia. Most patients report feeling only mild pressure during treatment and minor soreness for 1-2 days afterwards." },
      { question: "How long do dental implants last?", answer: "With regular brushing, flossing, and semi-annual dental checkups, implants are designed to last 25 years to a lifetime." },
      { question: "Am I a good candidate for dental implants?", answer: "Most adults with good general health and adequate jawbone density are candidates. If bone density is low, bone grafting can be performed." }
    ],
    testimonials: [
      { name: "Robert Miller", review: "I can eat steak again! The implant feels just like my original tooth. Dr. Sharma was exceptionally gentle throughout the process.", rating: 5, treatment: "Single Dental Implant" },
      { name: "Ananya Roy", review: "Replacing my front missing tooth transformed my confidence completely. The crown matches my natural teeth perfectly!", rating: 5, treatment: "Implant Crown" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", caption: "Single Tooth Implant & Zirconia Crown" }
    ]
  },
  "root-canal": {
    slug: "root-canal",
    title: "Painless Root Canal Therapy",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Save your natural tooth and eliminate acute pain with gentle single-visit rotary endodontics.",
    introduction: "Root canal therapy eliminates infection from the nerve canal of an infected tooth, saving it from extraction. Utilizing rotary nickel-titanium instruments and apex locators, we perform painless root canals in just one comfortable session.",
    benefits: [
      { title: "Immediate Pain Relief", description: "Eliminates throbbing toothache instantly by treating the underlying nerve infection.", icon: "Zap" },
      { title: "Save Natural Tooth", description: "Preserves your original root structure, maintaining jaw alignment and natural bite.", icon: "Shield" },
      { title: "Single-Visit Precision", description: "Complete treatment efficiently in 45 to 60 minutes with advanced rotary equipment.", icon: "Clock" },
      { title: "High Success Rate", description: "Modern endodontic procedures boast over a 97% success rate.", icon: "Award" }
    ],
    process: [
      { number: 1, title: "Diagnosis & Digital X-Ray", description: "Identify infection depth and nerve root anatomy using low-radiation digital sensors." },
      { number: 2, title: "Pain-Free Anesthesia", description: "Apply quick-acting local anesthetic to ensure complete numbness throughout." },
      { number: 3, title: "Cleaning & Disinfection", description: "Remove infected pulp tissue and thoroughly sterilize canals using antibacterial irrigants." },
      { number: 4, title: "Biocompatible Sealing", description: "Fill and seal canals with gutta-percha to prevent future re-infection." },
      { number: 5, title: "Crown Protection", description: "Place a custom protective Zirconia crown to restore full strength and aesthetics." }
    ],
    whyChooseUs: [
      "Specialist Endodontists with 1000+ successful root canals",
      "Single-visit painless therapy using German Rotary Technology",
      "Advanced apex locators for zero canal overfill",
      "Comfort-first clinic with relaxing music and gentle care"
    ],
    faqs: [
      { question: "Is a root canal painful?", answer: "No! Thanks to modern local anesthesia and rotary tools, getting a root canal feels no different than getting a routine dental filling." },
      { question: "Why do I need a crown after a root canal?", answer: "Removing infected pulp deprives the tooth of internal moisture, making it brittle over time. A crown protects the tooth from fracturing." }
    ],
    testimonials: [
      { name: "Priya Sharma", review: "I was terrified of getting a root canal, but Dr. Mehra was so gentle I barely felt a thing! The pain was gone immediately.", rating: 5, treatment: "Single-Visit Root Canal" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600", caption: "Root Canal & Zirconia Crown Restoration" }
    ]
  },
  "teeth-whitening": {
    slug: "teeth-whitening",
    title: "Brighten Your Smile Up to 8 Shades",
    heroImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Safe, fast LED laser whitening designed to remove deep stains without enamel sensitivity.",
    introduction: "Our in-office laser whitening treatment breaks down tough organic stains caused by coffee, tea, wine, and aging. In less than 60 minutes, reveal a radiant, brilliant smile safely under expert dentist supervision.",
    benefits: [
      { title: "Instant Results", description: "Achieve 4 to 8 shades whiter teeth in a single 45-minute clinical appointment.", icon: "Sparkles" },
      { title: "Enamel Safe", description: "pH-balanced whitening formulas protect enamel integrity and gum tissue.", icon: "Shield" },
      { title: "Desensitizing Agents", description: "Formulated with potassium nitrate to eliminate tooth sensitivity during & after.", icon: "CheckCircle" },
      { title: "Long-Lasting Shine", description: "Enjoy a radiant smile for up to 2 years with simple maintenance care.", icon: "Sun" }
    ],
    process: [
      { number: 1, title: "Shade Assessment", description: "Evaluate baseline tooth shade using digital shade guides and clean surface plaque." },
      { number: 2, title: "Gum Barrier Application", description: "Protect sensitive gum tissue with a light-cured protective liquid dam." },
      { number: 3, title: "Laser Gel Activation", description: "Apply professional hydrogen peroxide gel and activate with cool LED laser light." },
      { number: 4, title: "Final Reveal & Polish", description: "Rinse away gel, apply remineralizing fluoride, and admire your transformed smile." }
    ],
    whyChooseUs: [
      "Clinical-grade Zoom LED Laser Technology",
      "Zero enamel damage with pH-balanced desensitizing gels",
      "Includes complimentary at-home touchup tray",
      "100% satisfaction with visible shade guarantee"
    ],
    faqs: [
      { question: "Will whitening damage my enamel?", answer: "No. Professional dental whitening formulas are formulated specifically to oxidize stain molecules without altering enamel structure." },
      { question: "How long do the results last?", answer: "With good oral hygiene and avoiding heavy staining foods, results typically last 12 to 24 months." }
    ],
    testimonials: [
      { name: "Vikram Malhotra", review: "The difference was unbelievable! My teeth went from yellowed to sparkling white before my wedding day.", rating: 5, treatment: "Laser Teeth Whitening" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", caption: "In-Office Laser Whitening Transformation" }
    ]
  },
  "braces": {
    slug: "braces",
    title: "Orthodontic Braces for All Ages",
    heroImage: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Precision alignment solutions using modern self-ligating metal and tooth-colored ceramic brackets.",
    introduction: "Orthodontic treatment corrects crowded teeth, overbites, underbites, and gaps. Modern braces are smaller, smoother, and more comfortable than ever, giving teenagers and adults perfect dental alignment.",
    benefits: [
      { title: "Correct Complex Bite Issues", description: "Resolves severe crowding, jaw misalignment, and spacing effectively.", icon: "CheckCircle" },
      { title: "Ceramic & Metal Options", description: "Choose between classic durable metal or clear tooth-colored ceramic brackets.", icon: "Sun" },
      { title: "Improved Oral Hygiene", description: "Straight teeth are significantly easier to brush, reducing future decay and gum disease.", icon: "Shield" },
      { title: "Custom Treatment Plan", description: "Tailored force movement engineered by expert orthodontists.", icon: "Activity" }
    ],
    process: [
      { number: 1, title: "Orthodontic Scan & X-Ray", description: "3D digital scans and cephalometric X-rays to plan ideal root movements." },
      { number: 2, title: "Bracket Bonding", description: "Careful attachment of ergonomic brackets to teeth using light-cured adhesive." },
      { number: 3, title: "Archwire Placement", description: "Insertion of shape-memory wires to gently guide teeth into position." },
      { number: 4, title: "Monthly Adjustments", description: "Routine progress checks every 4-6 weeks to refine wire tension." }
    ],
    whyChooseUs: [
      "Certified Orthodontic Specialists with 12+ years experience",
      "Low-profile micro-brackets for maximum comfort and aesthetics",
      "Flexible monthly payment plans available",
      "Free retainer set included post-treatment"
    ],
    faqs: [
      { question: "How long does braces treatment take?", answer: "Average treatment duration ranges from 12 to 24 months, depending on individual complexity." },
      { question: "Can adults get braces?", answer: "Yes! Healthy teeth can be moved at any age. Over 35% of our orthodontic patients are adults." }
    ],
    testimonials: [
      { name: "Kavita Reddy", review: "Dr. Nair transformed my smile with ceramic braces! They were hardly noticeable, and my teeth look straight and gorgeous.", rating: 5, treatment: "Ceramic Braces" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", caption: "18-Month Orthodontic Alignment" }
    ]
  },
  "clear-aligners": {
    slug: "clear-aligners",
    title: "Straighten Teeth Invisibly with Clear Aligners",
    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Removable, virtually invisible clear trays custom-scanned for your lifestyle.",
    introduction: "Clear aligners are the modern alternative to traditional braces. Crafted from clear SmartTrack medical plastic, aligners fit snugly over your teeth, moving them incrementally into place without wires or metal brackets.",
    benefits: [
      { title: "100% Virtually Invisible", description: "Straighten your teeth discreetly without anyone noticing your aligner trays.", icon: "Sun" },
      { title: "Removable Freedom", description: "Remove aligners to eat your favorite foods, brush, and floss without restrictions.", icon: "CheckCircle" },
      { title: "Comfortable Smooth Fit", description: "No sharp wires or metal brackets to irritate cheeks or gums.", icon: "Shield" },
      { title: "3D Digital Preview", description: "See your simulated end smile result on screen before treatment even starts.", icon: "Activity" }
    ],
    process: [
      { number: 1, title: "3D Intraoral Scanning", description: "Capture 100,000+ data points of your teeth with high-speed 3D optical scanner." },
      { number: 2, title: "Custom Aligner Fabrication", description: "3D print a customized series of progressive clear aligners tailored to your teeth." },
      { number: 3, title: "Tray Delivery", description: "Receive your aligners and wear each set for 22 hours daily, switching every 10-14 days." },
      { number: 4, title: "Remote & In-Office Tracking", description: "Check progress every 6 to 8 weeks until your ideal smile is achieved." }
    ],
    whyChooseUs: [
      "Diamond Provider Status for Clear Aligner Systems",
      "Full digital 3D smile setup preview prior to commitment",
      "Fewer office visits required—ideal for busy professionals",
      "Includes initial consultation & retainers"
    ],
    faqs: [
      { question: "How many hours a day must I wear aligners?", answer: "For optimal results, aligners should be worn 20 to 22 hours per day, removing them only to eat, drink non-water beverages, and clean your teeth." },
      { question: "Are clear aligners painful?", answer: "You will feel mild pressure for 1-2 days when switching to a new tray set, which indicates that your teeth are moving effectively." }
    ],
    testimonials: [
      { name: "Siddharth Rao", review: "Clear aligners were a game changer for my professional meetings. No one knew I was wearing them, and my teeth are perfectly aligned!", rating: 5, treatment: "Clear Aligners" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", caption: "12-Month Clear Aligner Smile Transformation" }
    ]
  },
  "cosmetic-dentistry": {
    slug: "cosmetic-dentistry",
    title: "Complete Smile Makeovers & Porcelain Veneers",
    heroImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Custom-crafted ultra-thin porcelain veneers to correct color, shape, size, and proportions.",
    introduction: "Cosmetic dentistry combines artistic vision with clinical precision to design your dream smile. Whether you want to correct chipped teeth, gaps, asymmetry, or severe discoloration, porcelain veneers deliver red-carpet perfection.",
    benefits: [
      { title: "Hollywood Aesthetic", description: "Custom handcrafted veneers crafted to complement your facial structure and tone.", icon: "Sparkles" },
      { title: "Stain-Resistant Surface", description: "High-grade porcelain resists future tea, coffee, and wine staining.", icon: "Shield" },
      { title: "Minimal Enamel Prep", description: "Ultra-thin veneers require minimal alteration to your underlying natural enamel.", icon: "CheckCircle" },
      { title: "Sturdy & Long-Lasting", description: "Durable porcelain shells last 15 to 20+ years with proper oral care.", icon: "Award" }
    ],
    process: [
      { number: 1, title: "Digital Smile Design", description: "Analyze face symmetry and co-create your custom smile mock-up on screen." },
      { number: 2, title: "Diagnostic Try-In", description: "Test a temporary mock-up directly in your mouth to evaluate aesthetics in real-time." },
      { number: 3, title: "Micro-Preparation", description: "Lightly polish enamel surface and capture ultra-precise digital impressions." },
      { number: 4, title: "Veneer Bonding", description: "Permanently bond handcrafted porcelain veneers with high-strength dental resin." }
    ],
    whyChooseUs: [
      "Master Cosmetic Ceramists & Digital Smile Designers",
      "Trial smile preview before permanent bonding",
      "Ultra-thin E-Max porcelain materials",
      "Comprehensive smile makeover warranty"
    ],
    faqs: [
      { question: "What is the difference between composite bonding and porcelain veneers?", answer: "Porcelain veneers are handcrafted in a lab, resist stains permanently, and last 15-20 years. Composite bonding is applied directly in one visit, but may require repolishing every 4-5 years." },
      { question: "Are veneers permanent?", answer: "Because a tiny layer of enamel is prepared for bonding, veneers are considered a permanent commitment to your smile." }
    ],
    testimonials: [
      { name: "Natasha Kapoor", review: "Dr. Sharma gave me the smile of my dreams. The veneers look so natural, transparent, and vibrant!", rating: 5, treatment: "Porcelain Veneers" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600", caption: "8-Unit E-Max Porcelain Veneers Makeover" }
    ]
  },
  "pediatric-dentistry": {
    slug: "pediatric-dentistry",
    title: "Gentle, Fun Dental Care for Kids",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    subtitle: "Child-friendly dental environment focused on positive experiences, preventive care, and healthy habits.",
    introduction: "Our pediatric dental team makes doctor visits fun, warm, and anxiety-free. From milk tooth fillings to preventive fluoride sealants, we help children build healthy oral habits that last a lifetime.",
    benefits: [
      { title: "Fear-Free Atmosphere", description: "Playful waiting area, friendly staff, and gentle explanation techniques keep kids relaxed.", icon: "Heart" },
      { title: "Cavity Prevention", description: "Protective molar sealants and topical fluoride shield young enamel from decay.", icon: "Shield" },
      { title: "Habit Evaluation", description: "Guidance on thumb sucking, mouth breathing, and jaw development monitoring.", icon: "Activity" },
      { title: "Gentle Treatments", description: "No-pain filling materials and quiet dental tools designed specifically for children.", icon: "CheckCircle" }
    ],
    process: [
      { number: 1, title: "Welcome & Play", description: "Child gets introduced to the dentist through interactive games and toy rewards." },
      { number: 2, title: "Gentle Examination", description: "Soft cleaning and inspection of growing teeth and gums." },
      { number: 3, title: "Fluoride Shield", description: "Quick, tasty fluoride varnish application to strengthen enamel." },
      { number: 4, title: "Parent Consultation", description: "Personalized advice on nutrition, tooth brushing techniques, and growth tracking." }
    ],
    whyChooseUs: [
      "Specialized Pediatric Dentists (Pedodontists)",
      "Kid-centric treatment rooms with ceiling screens & cartoons",
      "Pain-free computerized local anesthesia",
      "Friendly rewards bag after every visit"
    ],
    faqs: [
      { question: "When should my child have their first dental visit?", answer: "We recommend scheduling your child's first visit by their first birthday or when their first tooth appears." },
      { question: "Are dental X-rays safe for children?", answer: "Yes! We use ultra-low radiation digital X-rays with lead aprons designed specifically for children." }
    ],
    testimonials: [
      { name: "Meera Deshmukh", review: "My 6-year-old son used to cry at the dentist. The team here turned it into a fun game! He actually looks forward to his dental checkups now.", rating: 5, treatment: "Pediatric Cleaning & Sealants" }
    ],
    beforeAfter: [
      { before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600", after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600", caption: "Pediatric Tooth Restoration & Space Maintainer" }
    ]
  }
};
