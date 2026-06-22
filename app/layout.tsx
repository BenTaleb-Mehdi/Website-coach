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
    default: `COACH SAAD BOUHARRAT. | Elite Online Fitness Coach for Professionals`,
    template: `%s | COACH SAAD BOUHARRAT.`,
  },
  description: "1-on-1 data-driven coaching for busy professionals. Custom training splits, precision macro frameworks & weekly check-ins. Transform your body without guessing.",
  keywords: ["premium online fitness coaching", "elite personal trainer", "body transformation coach", "custom hypertrophy training", "1-on-1 fat loss coaching", "fitness coach Morocco", "personal trainer Larache"],
  openGraph: {
    title: `COACH SAAD BOUHARRAT. | Elite Online Fitness Coach`,
    description: "1-on-1 data-driven coaching for busy professionals. Custom training splits, precision macro frameworks & weekly check-ins.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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