"use client";
import Link from "next/link";
import { siteConfig, navLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo - Adapted to respond to theme changes */}
        <Link 
          href="/" 
          className="text-sm font-black tracking-tighter text-zinc-900 dark:text-white hover:text-[#82FF00] dark:hover:text-[#82FF00] transition-colors uppercase"
        >
          {siteConfig.logo.endsWith('.') ? (
            <>
              <span className="text-[#82FF00]">{siteConfig.logo.split(' ')[0]}</span>{" "}
              {siteConfig.logo.split(' ').slice(1).join(' ').slice(0, -1)}
              <span className="text-[#82FF00]">.</span>
            </>
          ) : (
            siteConfig.logo
          )}
        </Link>

        {/* Navigation Links - Polished tracking & responsive colors */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase font-black tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#82FF00] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#82FF00] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright Text - Enhanced readability */}
        <p className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600 font-bold text-center md:text-right">
          © {new Date().getFullYear()} {siteConfig.logo.replace('.', '')} • Tous droits réservés.
        </p>

      </div>
    </footer>
  );
}