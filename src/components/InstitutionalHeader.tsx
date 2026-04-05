"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InstitutionalHeader() {
  return (
    <>
      {/* Top Utility Bar - VJTI Inspired */}
      <div className="w-full bg-[#111827] text-white py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em]">
          <div className="flex gap-6">
            {['Students', 'Alumni', 'Faculty', 'Media'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-all duration-300">{item}</Link>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <Link href="#portal" className="text-primary hover:text-white transition-all">My Portal</Link>
            <div className="w-px h-3 bg-white/20" />
            <Link href="#career" className="hover:text-primary transition-all">Careers</Link>
          </div>
        </div>
      </div>

      <header className="w-full bg-background py-4 px-4 sm:px-6 lg:px-8 border-b-2 border-border/50 transition-colors duration-300 relative z-50">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

          {/* Main Branding Section */}
          <Link href="/" className="flex items-center gap-6 group cursor-pointer transition-opacity hover:opacity-90 active:scale-[0.98]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative pr-6 border-r border-border/50"
            >
              <img
                src="/assets/images/bharati_logo.png"
                alt="BVIMIT Logo"
                className="h-16 md:h-20 w-auto object-contain transition-transform group-hover:rotate-[5deg]"
              />
            </motion.div>
 
            <div className="flex flex-col">
              <h1 className="text-foreground font-black text-2xl md:text-3xl tracking-tighter uppercase leading-none transition-colors duration-300 mb-1 group-hover:text-primary">
                Bharati Vidyapeeth
              </h1>
              <p className="text-muted-foreground text-xs md:text-sm font-black tracking-widest uppercase opacity-70">
                Institute of Management & Information Technology
              </p>
            </div>
          </Link>

          {/* Recognition & Accreditation Badges */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4 py-2 px-6 border border-border/30 rounded-2xl bg-muted/20">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-black uppercase text-muted-foreground tracking-tighter leading-none mb-1">NAAC</span>
                <div className="text-xl font-black text-primary leading-none">A+</div>
                <span className="text-[8px] font-black uppercase text-primary leading-none mt-0.5">Accredited</span>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <img
                src="/assets/images/logo_50years.png"
                alt="Jubilee Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden xl:block bg-primary text-white font-black text-xs uppercase tracking-widest px-8 py-3 rounded-full shadow-lg shadow-primary/20"
            >
              Virtual Tour
            </motion.button>
          </div>

        </div>
      </header>
    </>
  );
}
