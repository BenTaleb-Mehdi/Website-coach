// components/sections/ServicesSection.tsx
"use client";
import { motion } from "framer-motion";
import { servicesData, contactData, siteConfig } from "../../data/portfolioData";

export default function ServicesSection() {
  const cleanPhone = contactData.phone.replace(/[^0-9]/g, "");

  const handleWhatsAppRedirect = (programTitle: string) => {
    const message = `Hello ${siteConfig.coachName}, I am interested in the "${programTitle}" program. Can we discuss how to get started?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-transparent text-zinc-900 dark:text-white px-5 md:px-8 max-w-7xl mx-auto py-16 md:py-20 border-t border-zinc-200 dark:border-zinc-900/60">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-12">
        <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">
          Elite Programs
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          CHOOSE YOUR ROADMAP
        </h2>
        <div className="w-10 h-[2px] bg-[#82FF00] mx-auto mt-3 rounded-full shadow-[0_0_8px_#82FF00]" />
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
            className="relative p-7 rounded-3xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 flex flex-col justify-between hover:border-[#82FF00]/30 transition-all duration-300 group shadow-lg dark:shadow-xl hover:shadow-[#82FF00]/5 overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#82FF00]/0 to-[#82FF00]/0 group-hover:from-[#82FF00]/4 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-3xl" />

            <div className="relative">
              <div className="flex justify-between items-start gap-2 mb-3">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-[#82FF00] transition-colors duration-200">
                  {service.title}
                </h3>
                {index === 1 && (
                  <span className="flex-shrink-0 text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-[#82FF00] text-black rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed font-medium mb-6">
                {service.description}
              </p>

              <ul className="space-y-2.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs font-semibold text-zinc-600 dark:text-zinc-400 gap-2.5">
                    <span className="text-[#82FF00] font-black text-[10px] flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleWhatsAppRedirect(service.title)}
              className="relative mt-7 w-full py-3.5 flex items-center justify-center gap-2 rounded-xl font-black uppercase tracking-widest bg-zinc-900 text-white dark:bg-zinc-800/85 hover:bg-[#82FF00] hover:text-black dark:hover:bg-[#82FF00] dark:hover:text-black transition-all duration-300 text-[11px] border border-zinc-800 hover:border-transparent hover:shadow-lg hover:shadow-[#82FF00]/20 cursor-pointer"
            >
              {/* WhatsApp Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.968C16.58 1.917 14.1 1.91 11.47 1.91c-5.443 0-9.866 4.421-9.87 9.854 0 1.63.454 3.223 1.317 4.631L1.87 22.051l5.882-1.543c1.4.77 2.8 1.15 4.3 1.15a9.76 9.76 0 00-.012-.016h.007zm12.19-5.321c-.328-.164-1.942-.958-2.242-1.069-.301-.11-.52-.164-.738.164-.219.328-.848 1.069-1.039 1.288-.19.22-.382.246-.71.082-.328-.164-1.386-.511-2.64-1.63-1.054-.94-1.764-2.1-1.97-2.455-.207-.354-.022-.547.142-.71.147-.147.328-.382.492-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.738-1.777-1.011-2.433-.267-.64-.53-.553-.728-.563-.189-.01-.405-.012-.622-.012-.217 0-.57.081-.869.41-.299.329-1.143 1.116-1.143 2.721 0 1.605 1.17 3.155 1.332 3.374.163.22 2.3 3.51 5.571 4.922.779.336 1.386.537 1.86.688.784.248 1.498.213 2.062.129.628-.094 1.943-.793 2.217-1.558.274-.766.274-1.422.192-1.559-.082-.137-.299-.219-.627-.383z" />
              </svg>
              Discuss on WhatsApp
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}