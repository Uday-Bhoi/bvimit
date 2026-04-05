"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";

export default function VirtualTourPage() {
  const [permissionRequested, setPermissionRequested] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Handle Panoee Device Motion Proxy for immersive 360 rotation
    const handleDeviceMotion = (e: DeviceMotionEvent) => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          {
            type: "devicemotion",
            deviceMotionEvent: {
              acceleration: { x: e.acceleration?.x, y: e.acceleration?.y, z: e.acceleration?.z },
              accelerationIncludingGravity: {
                x: e.accelerationIncludingGravity?.x,
                y: e.accelerationIncludingGravity?.y,
                z: e.accelerationIncludingGravity?.z,
              },
              rotationRate: {
                alpha: e.rotationRate?.alpha,
                beta: e.rotationRate?.beta,
                gamma: e.rotationRate?.gamma,
              },
              interval: e.interval,
              timeStamp: e.timeStamp,
            },
          },
          "*"
        );
      }
    };

    window.addEventListener("devicemotion", handleDeviceMotion);
    return () => window.removeEventListener("devicemotion", handleDeviceMotion);
  }, []);

  const requestGyroscopePermission = async () => {
    if (
      typeof (window as any).DeviceOrientationEvent !== "undefined" &&
      typeof (window as any).DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        const state = await (window as any).DeviceOrientationEvent.requestPermission();
        if (state === "granted") {
          setPermissionRequested(true);
        }
      } catch (e) {
        console.error("Gyroscope permission error:", e);
      }
    } else {
      setPermissionRequested(true);
    }
  };

  useEffect(() => {
    requestGyroscopePermission();
  }, []);

  return (
    <main className="fixed inset-0 w-screen h-screen bg-black overflow-hidden m-0 p-0 z-[9999]">
      {/* Minimal Floating Back Button Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-6 left-6 z-[100] pointer-events-auto"
      >
        <Link
          href="/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-3xl border border-white/20 text-white hover:bg-primary hover:border-primary transition-all shadow-2xl group"
          title="Exit Virtual Tour"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Full-Screen Tour Iframe Container */}
      <div className="w-full h-full p-0 m-0 overflow-hidden relative">
        <iframe
          id="tour-embeded"
          ref={iframeRef}
          src="https://tour.panoee.net/iframe/69ad210be6bc6066003b4c70"
          className="w-full h-full border-0 m-0 p-0"
          allow="xr-spatial-tracking; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
          loading="lazy"
          title="BVIMIT Virtual Tour"
        />
      </div>

      {/* Immersive Loading Screen */}
      <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black z-50 pointer-events-none"
      >
          <div className="flex flex-col items-center">
              <div className="w-20 h-0.5 bg-white/10 rounded-full overflow-hidden mb-6">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full h-full bg-primary" 
                  />
              </div>
              <p className="text-white font-black text-[9px] uppercase tracking-[0.5em] opacity-40">Loading Immersive View</p>
          </div>
      </motion.div>

      {/* Mobile Orientation Activation Prompt */}
      <AnimatePresence>
        {!permissionRequested && (
           <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[110] p-4 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-2xl"
           >
              <Smartphone className="w-5 h-5 text-primary" />
              <p className="text-white text-[11px] font-bold whitespace-nowrap uppercase tracking-widest">Enable 360° Sensors?</p>
              <button 
                onClick={requestGyroscopePermission}
                className="px-5 py-2.5 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-primary/90 transition-colors"
                >
                Activate
              </button>
           </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
