"use client";
import { contactData } from "../data/portfolioData";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 flex items-center justify-center text-white hover:scale-110 hover:shadow-[#25D366]/50 transition-all duration-300"
      aria-label="Discuter sur WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
