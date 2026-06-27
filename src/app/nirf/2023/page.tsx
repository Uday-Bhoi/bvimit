"use client";

import SiteShell from "@/components/layout/SiteShell";
import Link from "next/link";
import { ArrowLeft, Download, FileText, Calendar, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NIRF2023Page() {
  const pdfUrl = "/legacy/pdfs/BVIMITNIRF2023.pdf";

  return (
    <SiteShell>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-[#111827] py-16 md:py-20">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/nirf" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary hover:underline mb-6 cursor-pointer">
              <ArrowLeft className="h-4 w-4" /> Back to NIRF Hub
            </Link>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl">
              NIRF 2023 Submission
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Official institutional disclosure data submitted for the 2023 National Institutional Ranking Framework cycle.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left detail card */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-[2rem] p-6 shadow-sm space-y-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Submission Year: 2023</span>
                  </div>
                  <h3 className="text-xl font-black text-foreground tracking-tight">Report Details</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-muted/40 rounded-xl border border-border flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-xs font-bold text-foreground">Format: Compiled PDF</span>
                  </div>
                  <div className="p-4 bg-muted/40 rounded-xl border border-border flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-xs font-bold text-foreground">Type: Public Disclosure</span>
                  </div>
                </div>

                <a 
                  href={pdfUrl}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/95 transition-all shadow cursor-pointer"
                >
                  <Download className="h-4 w-4" /> Download PDF Report
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-[2rem] p-6 shadow-sm space-y-4"
              >
                <h4 className="text-sm font-black text-foreground uppercase tracking-wider">Compliance Checklist</h4>
                <ul className="space-y-2.5">
                  {["Verified Faculty Details", "Audited Financial Allocations", "Placement Statistics", "Approved Intake Data"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right PDF frame viewer */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-sm h-[750px] relative flex flex-col justify-between"
              >
                <div className="p-4 bg-muted border-b border-border flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-muted-foreground">Document Viewer</span>
                  <a href={pdfUrl} target="_blank" className="text-xs font-bold text-primary hover:underline">Open in new tab</a>
                </div>
                <div className="flex-1 w-full bg-slate-900">
                  <iframe 
                    src={pdfUrl}
                    className="w-full h-full border-none"
                    title="NIRF 2023 PDF Viewer"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
