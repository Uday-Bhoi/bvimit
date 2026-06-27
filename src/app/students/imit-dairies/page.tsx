"use client";

import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, FileText, ArrowLeft, Download, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function IMITDiariesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const diaries = [
    { title: "IMIT DIARIES 2023", href: "/legacy/pdfs/IMIT DAIRIES 2023 final.pdf", year: "2023" },
    { title: "IMIT DIARIES 2022", href: "/legacy/pdfs/BVIMIT_DAIRIES_2022[1].pdf", year: "2022" },
    { title: "IMIT DIARIES 2021", href: "/legacy/pdfs/IMITdaries-2021.pdf", year: "2021" },
    { title: "IMIT DIARIES 2020", href: "/legacy/pdfs/IMIT diries-2020.pdf", year: "2020" },
    { title: "IMIT DIARIES 2019", href: "/legacy/pdfs/IMIT_DAIRIES_2019.pdf", year: "2019" },
    { title: "IMIT DIARIES 2018", href: "/legacy/pdfs/IMIT_DAIRIES_2018.pdf'", year: "2018" },
    { title: "IMIT DIARIES 2017", href: "/legacy/pdfs/IMIT2017.pdf", year: "2017" }
  ];

  const filteredDiaries = diaries.filter(d => 
    d.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.year.includes(searchTerm)
  );

  return (
    <SiteShell>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Banner */}
        <section className="relative overflow-hidden bg-[#111827] py-20 md:py-24">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Link href="/students" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary hover:underline mb-6 cursor-pointer">
              <ArrowLeft className="h-4 w-4" /> Back to Student Hub
            </Link>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl">
              IMIT Diaries
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Our annual flagship campus magazine capturing curricular updates, student life, co-curricular highlights, and governance guidelines.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* About Card */}
          <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" /> About IMIT Diaries
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed">
              IMIT Diaries is an annual magazine providing direct insights into campus faculty, major events, and curricular or co-curricular achievements performed in the institute. The magazine provides students with crucial information regarding services, student codes of conduct, and procedures related to their rights and responsibilities as members of the campus community.
            </p>
          </div>

          {/* Downloadable Volumes */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
              <h3 className="text-xl font-black text-foreground tracking-tight">Available Annual Issues</h3>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search issues..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/40 text-foreground"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDiaries.map((d, idx) => (
                <div key={idx} className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all flex flex-col justify-between h-40">
                  <div>
                    <div className="p-2 bg-primary/10 text-primary w-fit rounded-lg mb-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h4 className="text-xs font-black text-foreground group-hover:text-primary transition-colors">{d.title}</h4>
                    <span className="text-[10px] text-muted-foreground font-semibold">Volume Year: {d.year}</span>
                  </div>
                  <a 
                    href={d.href}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors pt-3"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
