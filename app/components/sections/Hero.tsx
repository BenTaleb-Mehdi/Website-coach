// components/sections/Hero.tsx
"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "../../data/portfolioData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-12 px-5 md:px-8 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#82FF00]/10 dark:bg-[#82FF00]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#82FF00]/6 dark:bg-[#82FF00]/4 rounded-full blur-[120px] pointer-events-none" />

      {/* Left Text Block */}
      <div className="lg:col-span-7 z-10 space-y-6 text-left">
        <motion.div
          custom={0}

          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest text-zinc-600 dark:text-zinc-400 uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#82FF00] animate-pulse shadow-[0_0_6px_#82FF00]" />
          Elite Online Coaching
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-[0.92]"
        >
          MASTER YOUR <br />
          BODY WITH <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#82FF00] to-[#c8ff6e]">
            PRECISION DATA
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-zinc-600 dark:text-zinc-400 max-w-lg text-sm md:text-base font-medium leading-relaxed"
        >
          An ultra-customized programming infrastructure built strictly for high-performing individuals who refuse to settle for average results.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[#82FF00] text-black font-black uppercase tracking-wider text-xs rounded-full hover:bg-[#9fff26] hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-[#82FF00]/25"
          >
            Join The Team
          </Link>
          <Link
            href="/transformations"
            className="px-7 py-3.5 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/30 text-zinc-800 dark:text-white font-bold uppercase tracking-wider text-xs rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200"
          >
            View Case Studies
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-900 max-w-md"
        >
          {[
            { val: "200+", label: "Elite Clients" },
            { val: "8+", label: "Years Coaching" },
            { val: "97%", label: "Success Rate" },
          ].map((s) => (
            <div key={s.val}>
              <div className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white">{s.val}</div>
              <div className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mt-1 font-bold">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Image Frame */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="lg:col-span-5 relative flex justify-center z-10"
      >
        <div className="relative group w-full max-w-[360px] aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/60">
          {/* Neon corner accent */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#82FF00] rounded-tl-3xl z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#82FF00]/40 rounded-br-3xl z-20 pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-black via-transparent to-transparent z-10 opacity-70" />
          <img
            src="images/profile/hero-profile.jpg"
            alt={`${siteConfig.coachName} Profile`}
            className="w-full h-full object-cover  group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-5 left-5 right-5 z-20 bg-white/80 dark:bg-black/70 backdrop-blur-md p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#82FF00] shadow-[0_0_6px_#82FF00] flex-shrink-0 animate-pulse" />
            <div>
              <div className="text-[9px] text-[#82FF00] uppercase font-black tracking-widest">Head Coach</div>
              <div className="text-sm font-black uppercase text-zinc-900 dark:text-white mt-0.5">
                {siteConfig.coachName.replace("Coach ", "")}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stat Badge */}
        <div className="absolute -left-3 top-1/3 bg-[#82FF00] text-black px-4 py-3 rounded-2xl shadow-xl shadow-[#82FF00]/30 z-30">
          <div className="text-xl font-black leading-none">1500+</div>
          <div className="text-[8px] font-black uppercase tracking-wider leading-tight mt-0.5">Training Hours</div>
        </div>
      </motion.div>
    </section>
  );
}