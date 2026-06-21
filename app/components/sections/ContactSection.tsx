// components/sections/ContactSection.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { contactData, siteConfig } from "../../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Lose Weight / Fat Loss",
    objective: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const goals = [
    "Lose Weight / Fat Loss",
    "Build Muscle / Hypertrophy",
    "Body Recomposition / Tone",
    "Improve Strength & Stamina",
    "Custom General Fitness",
  ];

  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message details
    const message = `Hello ${siteConfig.coachName}! I want to join the team. Here are my application details:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• WhatsApp Phone: ${formData.phone}\n` +
      `• Selected Goal: ${formData.goal}\n` +
      `• Objectives & Barriers: ${formData.objective}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Open in a new tab/window
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-transparent text-zinc-900 dark:text-white px-5 md:px-8 max-w-7xl mx-auto py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900/60">
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Column: Direct Gateways */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">
              Application Portal
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              READY TO <br />COMMENCE?
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed max-w-md">
              I review all submissions personally within 24 hours. Serious applications only. Let's build your physical legacy.
            </p>
          </div>

          <div className="grid gap-3.5 pt-2">
            {/* Telegram Contact Card */}
            <a 
              href="https://t.me/coach_amine" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-[#82FF00] dark:hover:border-[#82FF00]/50 transition-all duration-300 group shadow-sm dark:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z"/>
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Fast Track Hotline</div>
                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#82FF00] transition-colors">Telegram Chat</div>
              </div>
            </a>

            {/* Email Contact Card */}
            <a 
              href={`mailto:${contactData.email}`} 
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-[#82FF00] dark:hover:border-[#82FF00]/50 transition-all duration-300 group shadow-sm dark:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Send Direct Query</div>
                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#82FF00] transition-colors">{contactData.email}</div>
              </div>
            </a>

            {/* Instagram Contact Card */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 hover:border-[#82FF00] dark:hover:border-[#82FF00]/50 transition-all duration-300 group shadow-sm dark:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-[#82FF00]/10 flex items-center justify-center text-[#82FF00] font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                </svg>
              </div>
              <div>
                <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">Follow Updates</div>
                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-[#82FF00] transition-colors">{contactData.socials.instagram}</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Detailed Application Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#0D0D0D] p-6 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 shadow-lg dark:shadow-2xl relative overflow-hidden"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#82FF00]/5 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-5 relative">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Youssef"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Email Address
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

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +212 612-345678"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-1.5 relative">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Select Your Goal
                  </label>
                  
                  {/* Modern custom select dropdown trigger */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200 text-left cursor-pointer"
                  >
                    <span>{formData.goal}</span>
                    <svg 
                      className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu Portal overlay close */}
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
                              <span className="text-[#82FF00] text-[10px]">✓</span>
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
                  Objectives & Barriers
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.objective}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  placeholder="Describe your daily diet, workout obstacles, and exact target bodyweight/milestones..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black/60 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-xs font-medium placeholder-zinc-400 dark:placeholder-zinc-700 focus:outline-none focus:border-[#82FF00] focus:ring-1 focus:ring-[#82FF00]/20 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#82FF00] text-black font-black uppercase tracking-widest rounded-xl transition-all duration-300 hover:bg-[#9fff26] hover:scale-[1.01] text-xs shadow-lg shadow-[#82FF00]/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                {/* WhatsApp icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.968C16.58 1.917 14.1 1.91 11.47 1.91c-5.443 0-9.866 4.421-9.87 9.854 0 1.63.454 3.223 1.317 4.631L1.87 22.051l5.882-1.543c1.4.77 2.8 1.15 4.3 1.15a9.76 9.76 0 00-.012-.016h.007zm12.19-5.321c-.328-.164-1.942-.958-2.242-1.069-.301-.11-.52-.164-.738.164-.219.328-.848 1.069-1.039 1.288-.19.22-.382.246-.71.082-.328-.164-1.386-.511-2.64-1.63-1.054-.94-1.764-2.1-1.97-2.455-.207-.354-.022-.547.142-.71.147-.147.328-.382.492-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.738-1.777-1.011-2.433-.267-.64-.53-.553-.728-.563-.189-.01-.405-.012-.622-.012-.217 0-.57.081-.869.41-.299.329-1.143 1.116-1.143 2.721 0 1.605 1.17 3.155 1.332 3.374.163.22 2.3 3.51 5.571 4.922.779.336 1.386.537 1.86.688.784.248 1.498.213 2.062.129.628-.094 1.943-.793 2.217-1.558.274-.766.274-1.422.192-1.559-.082-.137-.299-.219-.627-.383z"/>
                </svg>
                Send Application via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}