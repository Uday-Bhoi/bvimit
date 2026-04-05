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
          <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-none whitespace-nowrap">
            <Link href="#students" className="hover:text-primary transition-all duration-300">Students</Link>
            <Link href="/alumni" className="hover:text-primary transition-all duration-300">Alumni</Link>
            <Link href="/faculty" className="hover:text-primary transition-all duration-300">Faculty</Link>
            <Link href="#media" className="hover:text-primary transition-all duration-300">Media</Link>
          </div>
          <div className="hidden sm:flex gap-6 items-center">
            <Link href="#portal" className="text-primary hover:text-white transition-all">My Portal</Link>
            <div className="w-px h-3 bg-white/20" />
            <Link href="#career" className="hover:text-primary transition-all">Careers</Link>
          </div>
        </div>
      </div>

      <header className="w-full bg-background pt-4 pb-2 md:py-4 px-4 sm:px-6 lg:px-8 border-b border-border/30 transition-colors duration-300 relative z-[60]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">

          {/* Main Branding Section - Adaptive Alignment */}
          <Link href="/" className="flex items-center gap-3 md:gap-6 group cursor-pointer transition-opacity w-full md:w-auto justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden sm:block pr-4 md:pr-6 border-r border-border/50"
            >
              <img
                src="/assets/images/bharati_logo.png"
                alt="BVIMIT Logo"
                className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:rotate-[5deg]"
              />
            </motion.div>
 
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-foreground font-black text-base sm:text-lg md:text-2xl lg:text-3xl tracking-tighter uppercase leading-tight transition-colors duration-300 mb-0.5 group-hover:text-primary">
                Bharatividyapeeth
              </h1>
              <p className="text-muted-foreground text-[7px] sm:text-[9px] md:text-xs lg:text-sm font-black tracking-widest uppercase opacity-70">
                Institute of Management & Information Technology
              </p>
            </div>
          </Link>

          {/* Recognition Badges - Hidden on very small screens, displayed elegantly on others */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-2 sm:gap-4 py-1.5 sm:py-2 px-3 sm:px-4 border border-border/30 rounded-xl bg-muted/20">
              <div className="flex flex-col items-center">
                <span className="text-[6px] sm:text-[8px] font-black uppercase text-muted-foreground tracking-tighter leading-none mb-0.5">NAAC</span>
                <div className="text-sm sm:text-xl font-black text-primary leading-none tracking-tighter">A+</div>
                <span className="text-[5px] sm:text-[7px] font-black uppercase text-primary leading-none mt-0.5 whitespace-nowrap">Grade (3rd Cycle)</span>
              </div>
              <div className="w-px h-6 sm:h-10 bg-border/50" />
              <img
                src="/assets/images/logo_50years.png"
                alt="Jubilee Logo"
                className="h-7 sm:h-9 md:h-12 w-auto object-contain"
              />
            </div>
            
            <Link href="/virtual-tour" className="hidden sm:block cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-lg shadow-primary/20 whitespace-nowrap"
              >
                Virtual Tour
              </motion.div>
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}
