// app/data/portfolioData.ts

export const siteConfig = {
  coachName: "Coach Saad Bouharrat",
  logo: "COACH SAAD BOUHARRAT.",
};

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Transformations", href: "/transformations" },
  { label: "Contact", href: "/contact" },
];

export const heroData = {
  title: "Transformez Votre Corps, Maîtrisez Votre Esprit",
  subtitle: "Coaching fitness premium personnalisé adapté à votre mode de vie, vos habitudes et votre mentalité.",
  ctaPrimary: "Commencez Votre Aventure",
};

// Mis à jour avec "5 ans" d'expérience et tes vraies informations de la conversation
export const aboutData = {
  title: "Qui est COACH SAAD BOUHARRAT ?",
  bio: "Avec environ 5 ans d'expérience dans le domaine de la musculation, je vous aide à atteindre vos objectifs. Que ce soit en ligne ou en présentiel, je conçois des programmes d'entraînement (salle de sport) et de nutrition sur-mesure pour transformer votre physique de manière durable.",
  stats: [
    { value: "3+", label: "Clients Actifs Actuellement" },
    { value: "5", label: "Années d'Expérience" },
    { value: "100%", label: "Programmes Personnalisés" },
  ],
};

// Adapté pour refléter le coaching en ligne et le coaching personnel
export const servicesData = [
  {
    id: "1",
    title: "Coaching Élite En Ligne",
    description: "Programmes d'entraînement et de nutrition entièrement personnalisés selon votre type de corps et vos objectifs.",
    features: ["Programme d'entraînement sur-mesure", "Plan de nutrition complet", "Suivi hebdomadaire", "Support continu"],
  },
  {
    id: "2",
    title: "Coaching Personnel (Présentiel)",
    description: "Accompagnement direct en salle de sport pour des résultats optimaux et une correction des mouvements.",
    features: ["Évaluation physique en personne", "Entraînement guidé en salle", "Conseils en compléments alimentaires"],
  },
];

// Les transformations sont traduites en français. Tu pourras changer les photos plus tard comme tu as discuté avec Mehdi.
export type TransformationStatus = "published" | "comingSoon";

export interface Transformation {
  id: string;
  clientName: string;
  duration?: string;
  achievement: string;
  category: string;
  beforeImg?: string;
  afterImg?: string;
  quote?: string;
  metrics?: {
    fatLoss: string;
    muscleGain: string;
    waist: string;
  };
  status: TransformationStatus;
}

export const transformations: Transformation[] = [
  {
    id: "1",
    clientName: "Moi-même",
    duration: "12 Semaines",
    achievement: "-15kg Perte de Graisse & Définition",
    category: "sèche",
    beforeImg: "images/Transformations/client 1/before.jpeg",
    afterImg: "images/Transformations/client 1/after.jpeg",
    quote: "Mon propre parcours avec la musculation. J'ai construit un plan nutritionnel adapté à un style de vie actif.",
    metrics: {
      fatLoss: "-15.2 kg",
      muscleGain: "+1.8 kg",
      waist: "-11 cm",
    },
    status: "published"
  },

 
  {
    id: "2",
    clientName: "Prochain Client",
    duration: "24 Semaines",
    achievement: "Gain de Muscle & Recomposition Corporelle",
    category: "recomp",
    beforeImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop",
    quote: "Très structuré. Le suivi a résolu mes années de baisse d'énergie et de mauvaise qualité de sommeil.",
    metrics: {
      fatLoss: "-4.5 kg",
      muscleGain: "+4.2 kg",
      waist: "-6.5 cm",
    },
    status: "comingSoon"
  },
  {
    id: "3",
    clientName: "Prochain Client",
    duration: "16 Semaines",
    achievement: "Prise de Masse & Hypertrophie",
    category: "prise de masse",
    beforeImg: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop",
    quote: "Une programmation précise qui m'a fait franchir un palier de 3 ans de stagnation.",
    metrics: {
      fatLoss: "+1.2 kg",
      muscleGain: "+6.5 kg",
      waist: "+1.5 cm",
    },
    status: "comingSoon"
  },
  {
    id: "4",
    clientName: "Prochain Client",
    achievement: "Nouvelle transformation à venir",
    category: "recomp",
    status: "comingSoon"
  }
];

export const howWeWorkSteps = [
  { step: "01", title: "Appel de Découverte", desc: "Nous analysons votre historique, vos éventuelles blessures et vos objectifs de poids absolus." },
  { step: "02", title: "Programme Sur-Mesure", desc: "Je rédige votre programme de musculation et vos macros (nutrition) de manière exacte et personnalisée." },
  { step: "03", title: "Suivi & Ajustement", desc: "Audits hebdomadaires de vos résultats. Si votre progression stagne, nous ajustons immédiatement le programme." },
];

export const contactData = {
  email: "saadbouharrat650@gmail.com",
  phone: "+212 616864141",
  location: "Larache, Morocco",
  socials: {
    instagram: "https://www.instagram.com/saadbouharrat1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    youtube: "",
  },
};