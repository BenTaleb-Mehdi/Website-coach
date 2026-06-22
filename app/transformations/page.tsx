"use client";

import { useState, useEffect } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, transformations } from "../data/portfolioData";

export default function TransformationsPage() {
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: "all", label: "Show All" },
    { id: "shred", label: "Fat Loss Focus" },
    { id: "recomp", label: "Body Recomp" },
    { id: "bulk", label: "Muscle Gain" },
  ];

  const filteredData = filter === "all" 
    ? transformations 
    : transformations.filter(t => t.category === filter);

  useEffect(() => {
    document.title = "Before & After Fat Loss Results | Body Recomp Success Stories";
  }, []);

  // L-label dyal l-filter li khtarih l-client daba
  const currentLabel = tabs.find(t => t.id === filter)?.label || "Show All";

  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-24 pb-12 flex flex-col justify-between">
      <div className="px-5 md:px-8 max-w-7xl mx-auto w-full mb-16">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">VERIFIABLE PROOF</div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">THE CASE STUDIES</h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-xs sm:text-sm font-medium pt-1">
            Strict metric tracking combined with dedicated execution. No shortcuts allowed.
          </p>
        </div>

        {/* Filter Section: Dropdown for Mobile, Buttons for Desktop */}
        <div className="w-full mb-12 relative max-w-xs md:max-w-none mx-auto">
          
          {/* 1. MODERN DROPDOWN (ONLY SHOWS ON MOBILE) */}
          <div className="block md:hidden w-full relative z-30">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-white text-xs font-black uppercase tracking-wider focus:outline-none focus:border-[#82FF00] shadow-sm cursor-pointer"
            >
              <span>{currentLabel}</span>
              <svg 
                className={`w-4 h-4 text-zinc-400 dark:text-zinc-500 transition-transform duration-250 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu List with Framer Motion for premium smooth layout transition */}
            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  {/* Backdrop background overlay click closer */}
                  <div className="fixed inset-0 z-10 bg-transparent" onClick={() => setIsDropdownOpen(false)} />
                  
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 right-0 mt-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0D0D0D] shadow-xl z-20 overflow-hidden py-1.5"
                  >
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setFilter(tab.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                          filter === tab.id 
                            ? 'bg-[#82FF00]/10 text-[#82FF00]' 
                            : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 hover:text-[#82FF00] dark:hover:text-[#82FF00]'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {filter === tab.id && (
                          <svg className="w-4 h-4 text-[#82FF00]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* 2. PREMIUM ORIGINAL TABS (ONLY SHOWS ON DESKTOP - UNTOUCHED) */}
          <div className="hidden md:flex flex-row flex-wrap justify-center gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? "bg-[#82FF00] text-black shadow-lg shadow-[#82FF00]/25"
                    : "bg-white dark:bg-[#0D0D0D] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredData.map((client) => (
            <motion.div
              layout
              key={client.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <BeforeAfterSlider 
                beforeImg={client.beforeImg}
                afterImg={client.afterImg}
                clientName={client.clientName}
                achievement={client.achievement}
                duration={client.duration}
              />
              
              {/* Testimonial Quote + Metrics Stats */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-800/80 shadow-xs">
                <p className="text-zinc-600 dark:text-zinc-400 text-xs italic font-medium leading-relaxed mb-4">
                  "{client.quote}"
                </p>
                
                <div className="grid grid-cols-3 gap-2 border-t border-zinc-100 dark:border-zinc-900/60 pt-3 text-center">
                  <div>
                    <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Waist</div>
                    <div className="text-sm font-black mt-0.5 text-zinc-800 dark:text-zinc-200">{client.metrics.waist}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Fat Loss</div>
                    <div className="text-sm font-black mt-0.5 text-zinc-800 dark:text-zinc-200">{client.metrics.fatLoss}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">Lean Gain</div>
                    <div className="text-sm font-black mt-0.5 text-zinc-800 dark:text-zinc-200">{client.metrics.muscleGain}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


    </div>
  );
}