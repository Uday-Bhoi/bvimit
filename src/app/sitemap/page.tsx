"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Network } from "lucide-react";
import SiteShell from "@/components/layout/SiteShell";
import { sitemapLinkGroups } from "@/config/site-navigation";

export default function SitemapPage() {
  return (
    <SiteShell>
      <main className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 text-primary rounded-full shadow-lg shadow-primary/20 animate-pulse">
                <Network className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-4">
              Website <span className="text-primary italic">Sitemap</span>
            </h1>
            <p className="text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px]">
              Comprehensive Navigation Structure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sitemapLinkGroups.map((group, index) => (
              <motion.section
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/20 text-primary rounded-2xl">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black tracking-tight">
                    {group.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground font-bold text-sm hover:text-primary transition-all flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-primary/40 rounded-full group-hover:w-4 transition-all" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-32 p-16 rounded-[4rem] bg-[#111827] text-white text-center border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[100px]" />
            <h3 className="text-3xl font-black mb-6 tracking-tight">
              Looking for something else?
            </h3>
            <p className="text-gray-500 font-bold mb-10 max-w-lg mx-auto">
              If you are unable to find specific institutional data, please use
              our 24/7 Virtual Assistant or contact the administration directly.
            </p>
            <Link
              href="/#contact"
              className="px-12 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-full hover:scale-105 transition-all inline-block shadow-2xl"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </main>
    </SiteShell>
  );
}
