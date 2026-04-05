"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[95vh] md:min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-background border-b border-border transition-colors duration-300 pt-24 pb-48 md:pb-60">

      {/* Background Image - Absolute Direct Clarity */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/campusbanner.jpg"
          alt="BVIMIT Campus"
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Dynamic contrast overlays - only where needed for text/stats legibility */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      <motion.div
        className="relative z-30 text-center px-4 md:px-8 max-w-6xl mx-auto mb-20"
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight transition-colors duration-300 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
          Excellence in <br />
          <span className="text-primary italic animate-subtle-glow">IT Education.</span>
        </h2>

        <p className="text-xl md:text-3xl text-white max-w-4xl mx-auto mb-12 font-bold leading-relaxed transition-colors duration-300 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
          Bharati Vidyapeeth’s Institute of Management & Information Technology
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(10, 147, 150, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-black tracking-widest uppercase shadow-2xl transition-all w-full sm:w-auto"
          >
            Academic Catalog
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/20 hover:bg-white/20 px-10 py-4 rounded-xl text-lg font-black tracking-widest uppercase shadow-2xl transition-all w-full sm:w-auto"
          >
            Admissions 2026
          </motion.button>
        </div>
      </motion.div>

      {/* Structured Info Bar - VJTI Inspiration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full bg-background/80 dark:bg-card/60 backdrop-blur-3xl border-t border-border/50 py-6 md:py-8 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Faculty Experts", val: "45+" },
            { label: "Successful Alumni", val: "5000+" },
            { label: "Avg CTC Package", val: "4.5 Lakhs" },
            { label: "Years of Legacy", val: "22+" }
          ].map((stat, i) => (
            <div key={i} className="text-center group border-r border-border/30 last:border-0 hover:bg-primary/5 transition-colors p-2 rounded-xl">
              <p className="text-3xl md:text-4xl font-black text-primary tracking-tighter mb-1">{stat.val}</p>
              <p className="text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-widest leading-none group-hover:text-foreground transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}