"use client";

import SiteShell from "@/components/layout/SiteShell";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Users, ShieldAlert, CheckCircle } from "lucide-react";

export default function ICET2022ConferenceProceedingsPage() {
  return (
    <SiteShell>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-[#111827] py-20 md:py-28">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-primary">
              Conference Archive
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              ICET 2022 Conference Proceedings
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Official publications, compiled research papers, and proceedings of the 1st International Conference on Emerging Trends (ICET 2022).
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Published: 2022</span>
                </div>
                <h2 className="text-2xl font-black text-foreground tracking-tight">
                  Bharati Vidyapeeth's Conference Proceedings
                </h2>
                <p className="text-sm text-muted-foreground">
                  ISBN Registered Volume of Selected Peer-Reviewed Papers.
                </p>
              </div>

              <a 
                href="/legacy/pdfs/ICET-2022-Bharati Vidyapeeth’s Conference Proceedings.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-4 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/95 transition-all shadow-md shrink-0 w-full md:w-auto justify-center"
              >
                <Download className="h-4 w-4" /> Download Proceedings PDF
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black text-foreground">Publication Overview</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                This document contains all selected research papers, review articles, and technical reports accepted for publication during the 1st International Conference on Emerging Trends: Innovation & Challenges in Information Technology and Management (ICET 2022). All entries underwent thorough peer-reviews by the scientific committee to verify technical accuracy and relevance to modern IT.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Covers advanced algorithms, machine learning models, and security protocols.",
                  "Features contributions from international delegates and research scholars.",
                  "Contains strict plagiarism checks and ethical formatting compliance.",
                  "Serves as academic reference literature under registered ISBN index."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-4 bg-muted/40 rounded-xl border border-border/60 text-xs font-bold text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-3 text-amber-600 dark:text-amber-500 text-xs font-bold">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span>
                Note: The file is highly detailed and may take some time to download depending on your network connection. Feel free to view it directly in your browser.
              </span>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
