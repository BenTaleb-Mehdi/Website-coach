// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-lg dark:shadow-2xl shadow-zinc-100 dark:shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-black tracking-tighter text-zinc-900 dark:text-white hover:text-[#82FF00] dark:hover:text-[#82FF00] transition-colors duration-200 flex-shrink-0 relative group"
          >
            {siteConfig.logo.endsWith('.') ? (
              <>
                <span className="text-[#82FF00]">{siteConfig.logo.split(' ')[0]}</span>{" "}
                {siteConfig.logo.split(' ').slice(1).join(' ').slice(0, -1)}
                <span className="text-[#82FF00] text-xl leading-none">.</span>
              </>
            ) : (
              siteConfig.logo
            )}
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#82FF00] group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[11px] uppercase font-bold tracking-widest transition-all duration-200 rounded-md group ${
                    isActive
                      ? "text-[#82FF00]"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-[#82FF00] transition-all duration-300 ${
                      isActive ? "opacity-100 shadow-[0_0_8px_#82FF00]" : "opacity-0 group-hover:opacity-30"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Toggle + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 bg-[#82FF00] text-black text-[11px] font-black uppercase tracking-wider rounded-full hover:bg-[#9fff26] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#82FF00]/20"
            >
              Apply Now
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-md border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 text-zinc-900 dark:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <span
                className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white dark:bg-[#0a0a0a] border-l border-zinc-200 dark:border-zinc-800 flex flex-col transition-transform duration-400 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-4 py-6 gap-1 flex-grow">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? "bg-[#82FF00]/10 text-[#82FF00] border border-[#82FF00]/20"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#82FF00] shadow-[0_0_6px_#82FF00]" />
                  )}
                  {link.label}
                </Link>
              );
                })}
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/contact"
              className="block w-full py-3.5 bg-[#82FF00] text-black text-center font-black uppercase tracking-widest rounded-xl text-sm hover:bg-[#9fff26] transition-colors shadow-lg shadow-[#82FF00]/20"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}