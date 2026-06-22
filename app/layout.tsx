// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { siteConfig } from "./data/portfolioData";
import Footer from "./components/Footer";

export const metadata = {
  title: `FitCoach | Elite Online Coaching by ${siteConfig.coachName}`,
  description: "Premium 1-on-1 fitness coaching tailored for high-performing individuals. Custom splits, nutrition, and precision data tracking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
            <Footer />
      </body>
    </html>
  );
}