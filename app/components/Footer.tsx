// components/Footer.tsx
"use client";
import Link from "next/link";
import { siteConfig, navLinks } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="text-base font-black tracking-tighter text-white hover:text-[#82FF00] transition-colors">
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

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase font-bold tracking-widest text-zinc-500 hover:text-[#82FF00] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-zinc-600 font-medium">
          © {new Date().getFullYear()} {siteConfig.logo} All rights reserved.
        </p>
      </div>
    </footer>
  );
}