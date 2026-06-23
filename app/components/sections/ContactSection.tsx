"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { contactData, siteConfig } from "../../data/portfolioData";
import { Check, LucidePhoneCall } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Perte de Poids / Gras",
    objective: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const goals = [
    "Perte de Poids / Gras",
    "Prise de Muscle / Hypertrophie",
    "Recomposition Corporelle / Tonus",
    "Amélioration Force & Endurance",
    "Fitness Général Personnalisé",
  ];

  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour ${siteConfig.coachName} ! Je souhaite rejoindre l'équipe. Voici les détails de ma candidature :\n\n` +
      `• Nom : ${formData.name}\n` +
      `• Email : ${formData.email}\n` +
      `• WhatsApp : ${formData.phone}\n` +
      `• Objectif : ${formData.goal}\n` +
      `• Objectifs & Obstacles : ${formData.objective}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-transparent text-zinc-900 dark:text-white px-5 md:px-8 max-w-7xl lg:w-full mx-auto py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start w-full">
        
        {/* Left Column: Direct Gateways */}
        <div className="lg:col-span-5 space-y-6 w-full">
          <div className="space-y-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">
              Portail de Candidature
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              PRÊT À <br />COMMENCER ?
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed max-w-md">
              J'examine personnellement toutes les candidatures sous 24 heures. Candidatures sérieuses uniquement. Construisons votre héritage physique.
            </p>
          </div>

          <div className="grid gap-3.5 pt-2 w-full">
            {/* Phone Contact Card */}
            <a 
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-[#82FF00] dark:hover:border-[#82FF00]/50 transition-all duration-300 group shadow-sm dark:shadow-md w-full min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black flex-shrink-0 group-hover:scale-110 transition-transform">
               <LucidePhoneCall size={17} className="text-[#82FF00]"/>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Appelez-moi</div>
                {/* FIXED: Replaced static text with actual phone layout */}
                <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#82FF00] transition-colors truncate">
                  {contactData.phone}
                </div>
              </div>
            </a>

            {/* Email Contact Card */}
            <a 
              href={`mailto:${contactData.email}`} 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-[#82FF00] dark:hover:border-[#82FF00]/50 transition-all duration-300 group shadow-sm dark:shadow-md w-full min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Envoyer un Message</div>
                {/* FIXED: Added break-all to avoid layout breakage on tiny screens */}
                <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#82FF00] transition-colors break-all">
                  {contactData.email}
                </div>
              </div>
            </a>

            {/* Instagram Contact Card */}
            <a 
              href={contactData.socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-[#82FF00] dark:hover:border-[#82FF00]/50 transition-all duration-300 group shadow-sm dark:shadow-md w-full min-w-0"
            >
              <div className="w-10 h-10 rounded-xl bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Suivez les Mises à Jour</div>
                {/* FIXED: Replaced raw long URL layout text with clean user handle view */}
                <div className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#82FF00] transition-colors truncate">
                  @{contactData.socials.instagram.split("/").pop()}
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Detailed Application Form */}
        <div className="lg:col-span-7 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#0D0D0D] p-5 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 shadow-lg dark:shadow-2xl relative overflow-hidden w-full"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#82FF00]/5 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-5 relative w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex: Youssef"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Numéro WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="ex: +212 612-345678"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-1.5 relative">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Choisissez Votre Objectif
                  </label>
                  
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200 text-left cursor-pointer"
                  >
                    <span className="truncate mr-2">{formData.goal}</span>
                    <svg 
                      className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 flex-shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                      <div className="absolute left-0 right-0 mt-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0D0D0D] shadow-xl z-20 overflow-hidden py-1">
                        {goals.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, goal: item });
                              setDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                              formData.goal === item 
                                ? 'bg-[#82FF00]/10 text-[#82FF00] dark:bg-[#82FF00]/10 dark:text-[#82FF00]' 
                                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-[#82FF00] dark:hover:text-[#82FF00]'
                            }`}
                          >
                            <span>{item}</span>
                            {formData.goal === item && (
                              <Check className="w-3 h-3 text-[#82FF00] flex-shrink-0" />
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Objectifs & Obstacles
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  placeholder="Décrivez votre alimentation quotidienne, vos obstacles d'entraînement et votre poids objectif / jalons..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200 mesh-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#82FF00] text-black font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:bg-[#9fff26] hover:scale-[1.01] text-xs shadow-lg shadow-[#82FF00]/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                Envoyer la Candidature via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}