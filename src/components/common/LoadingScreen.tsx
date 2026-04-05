"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [percent, setPercent] = useState(0);

  // Advanced logic precisely detecting internal routing vs hard user intent
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only check load status after client-side mount to prevent hydration mismatch
    if (typeof window !== "undefined") {
      const hasLoadedBefore = sessionStorage.getItem("bvimit_initial_load");
      const navEntry = window.performance?.getEntriesByType("navigation")[0] as any;
      const isIntendedReload = navEntry?.type === "reload";

      if (hasLoadedBefore === "true" && !isIntendedReload) {
        setIsVisible(false);
        return;
      }
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // We are legitimately loading -> Lock the vault immediately for this session
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bvimit_initial_load", "true");
    }

    // Simulated progress for perceived performance
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 300); // Faster fade out
          return 100;
        }
        // Much faster progression
        const increment = Math.max(2, (100 - prev) / 5);
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* Background subtle glow aura */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative flex flex-col items-center">
            {/* Logo with premium animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8, ease: "easeOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative mb-12"
            >
              {/* Shimmer effect overlay */}
              <motion.div
                className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                style={{ skewX: "-20deg" }}
              />

              <img
                src="/assets/images/bharati_logo.png"
                alt="BVIMIT Logo"
                className="h-32 w-32 md:h-40 md:w-40 object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-col items-center"
            >
              <p className="text-[#002855] text-xs font-bold tracking-[0.3em] uppercase">
                BVIMIT Navi Mumbai
              </p>
            </motion.div>
          </div>

          {/* Bottom attribution / decorative line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 text-[10px] text-gray-300 tracking-widest uppercase"
          >
            Excellence in Management & IT
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
