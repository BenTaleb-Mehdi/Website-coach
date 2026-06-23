// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: {
    default: `COACH SAAD BOUHARRAT. | Coach Fitness Élite en Ligne`,
    template: `%s | COACH SAAD BOUHARRAT.`,
  },
  description: "Coaching 1-on-1 basé sur les données pour les professionnels occupés. Programmes d'entraînement personnalisés, frameworks macro de précision & check-ins hebdomadaires. Transformez votre corps sans conjectures.",
  keywords: ["coaching fitness premium en ligne", "coach personnel élite", "coach transformation corporelle", "programme hypertrophy sur mesure", "coaching perte de gras 1-on-1", "coach fitness Maroc", "coach personnel Larache"],
  openGraph: {
    title: `COACH SAAD BOUHARRAT. | Coach Fitness Élite en Ligne`,
    description: "Coaching 1-on-1 basé sur les données pour les professionnels occupés. Programmes d'entraînement personnalisés, frameworks macro de précision & check-ins hebdomadaires.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <FloatingWhatsApp />
          <ChatBot />
          <ScrollToTop />
          <Analytics/>
        </ThemeProvider>
            <Footer />
      </body>
    </html>
  );
}