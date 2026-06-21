// app/data/portfolioData.ts

export const siteConfig = {
  coachName: "Coach Assaad",
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
    price: "$149/mo",
    features: ["Customized Training Plan", "Macronutrient Guide", "Weekly Video Check-ins", "24/7 Support"],
  },
  {
    id: "2",
    title: "Hybrid Shred Program",
    description: "Combines high-tier online tracking app with bi-weekly check-ins.",
    price: "$249/mo",
    features: ["In-person Assessment", "Custom Meal Prep Blueprint", "Supplement Protocols"],
  },
];

export const transformationsData = [
  {
    id: "1",
    clientName: "Youssef B.",
    duration: "12 Weeks",
    achievement: "-15kg Fat Loss & Core Definition",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&auto=format&fit=crop",
  },
  {
    id: "2",
    clientName: "Sara L.",
    duration: "24 Weeks",
    achievement: "Lean Muscle Gain & Body Recomp",
    beforeImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop",
  },
];

export const howWeWorkSteps = [
  { step: "01", title: "Discovery Call", desc: "We mapping out your historic struggles, injuries, and absolute target weights." },
  { step: "02", title: "Custom Architecture", desc: "I write your workout splits and exact daily nutritional breakdowns into your private app profile." },
  { step: "03", title: "Track, Pivot & Win", desc: "Weekly metric audits. If your progress stalls, we adjust the variables immediately." },
];

// This ensures your Footer compiles properly as well!
export const contactData = {
  email: "contact@coachamine.com",
  phone: "+212 600-000000",
  location: "Casablanca, Morocco",
  socials: {
    instagram: "@coach.amine",
    youtube: "Coach assaad Fitness",
  },
};