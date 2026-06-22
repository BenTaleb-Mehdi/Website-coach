// app/transformations/page.tsx
"use client";

import { useState } from "react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { siteConfig, transformations } from "../data/portfolioData";



export default function TransformationsPage() {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" 
    ? transformations 
    : transformations.filter(t => t.category === filter);

  return (
    <div className="bg-background text-zinc-900 dark:text-white min-h-screen pt-24 pb-12 flex flex-col justify-between">
      <div className="px-5 md:px-8 max-w-7xl mx-auto w-full mb-16">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-[10px] font-black uppercase tracking-widest text-[#82FF00]">VERIFIABLE PROOF</div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">THE CASE STUDIES</h1>
          <p className="text-zinc-500 max-w-md mx-auto text-xs sm:text-sm font-medium pt-1">
            Strict metric tracking combined with dedicated execution. No shortcuts allowed.
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "all", label: "Show All" },
            { id: "shred", label: "Fat Loss Focus" },
            { id: "recomp", label: "Body Recomp" },
            { id: "bulk", label: "Muscle Gain" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200 ${
                filter === tab.id
                  ? "bg-[#82FF00] text-black shadow-lg shadow-[#82FF00]/15"
                  : "bg-white dark:bg-[#0D0D0D] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Transformations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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