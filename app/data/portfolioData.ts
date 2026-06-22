// app/data/portfolioData.ts

export const siteConfig = {
  coachName: "Coach Saad ",
  logo: "COACH ASSAAD.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Transformations", href: "/transformations" },
  { label: "Contact", href: "/contact" },
];

export const heroData = {
  title: "Transform Your Body, Master Your Mind",
  subtitle: "Premium 1-on-1 fitness coaching tailored to your busy lifestyle, habits, and mindset.",
  ctaPrimary: "Start Your Journey",
};

// This was missing and caused your error!
export const aboutData = {
  title: "Who Is COACH ASSAAD. ?",
  bio: "With over 8 years of certified personal training and nutrition experience, I help busy professionals drop fat, build lean muscle, and turn unsustainable habits into sustainable lifestyles.",
  stats: [
    { value: "500+", label: "Clients Transformed" },
    { value: "8+", label: "Years Experience" },
    { value: "15k+", label: "Hours Coaching" },
  ],
};

export const servicesData = [
  {
    id: "1",
    title: "1-on-1 Online Elite Coaching",
    description: "Fully customized workout splits and macro frameworks tailored to your body type.",
    features: ["Customized Training Plan", "Macronutrient Guide", "Weekly Video Check-ins", "24/7 Support"],
  },
  {
    id: "2",
    title: "Hybrid Shred Program",
    description: "Combines high-tier online tracking app with bi-weekly check-ins.",
    features: ["In-person Assessment", "Custom Meal Prep Blueprint", "Supplement Protocols"],
  },
];



export const transformations = [
  {
    id: "1",
    clientName: "Youssef B.",
    duration: "12 Weeks",
    achievement: "-15kg Fat Loss & Core Definition",
    category: "shred",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop",
    quote: `${siteConfig.coachName} changed how I look at training. Built a macro plan that fits my business lifestyle.`,
    metrics: {
      fatLoss: "-15.2 kg",
      muscleGain: "+1.8 kg",
      waist: "-11 cm",
    }
  },
  {
    id: "2",
    clientName: "Sara L.",
    duration: "24 Weeks",
    achievement: "Lean Muscle Gain & Body Recomp",
    category: "recomp",
    beforeImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop",
    quote: "Highly structured. The biofeedback tracking solved years of energy level and sleep quality crashes.",
    metrics: {
      fatLoss: "-4.5 kg",
      muscleGain: "+4.2 kg",
      waist: "-6.5 cm",
    }
  },
  {
    id: "3",
    clientName: "Amine K.",
    duration: "16 Weeks",
    achievement: "Mass Gain & Hypertrophy Focus",
    category: "bulk",
    beforeImg: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop",
    quote: "Precision mechanical loading programming broke my 3-year plateaus. I look twice as big.",
    metrics: {
      fatLoss: "+1.2 kg",
      muscleGain: "+6.5 kg",
      waist: "+1.5 cm",
    }
  }
];

export const howWeWorkSteps = [
  { step: "01", title: "Discovery Call", desc: "We mapping out your historic struggles, injuries, and absolute target weights." },
  { step: "02", title: "Custom Architecture", desc: "I write your workout splits and exact daily nutritional breakdowns into your private app profile." },
  { step: "03", title: "Track, Pivot & Win", desc: "Weekly metric audits. If your progress stalls, we adjust the variables immediately." },
];

// This ensures your Footer compiles properly as well!
export const contactData = {
  email: "saadbouharrat650@gmail.com",
  phone: "+212 630829654",
  location: "Larache, Morocco",
  socials: {
    instagram: "https://www.instagram.com/saadbouharrat",
    youtube: "",
  },
};