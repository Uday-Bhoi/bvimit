"use client";

import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, FileText, ArrowLeft, Download, Search, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function GlimpsesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const glimpses = [
    { title: "Glimpses of BVIMIT 2023-2024", href: "/legacy/pdfs/Glipses_2024.pdf", year: "2024" },
    { title: "Glimpses of BVIMIT 2022-2023", href: "/legacy/pdfs/glimpses 2022-23.pdf", year: "2023" },
    { title: "Glimpses of BVIMIT 2021-2022", href: "/legacy/pdfs/Glimpses 2021-2022.pdf", year: "2022" },
    { title: "Glimpses of BVIMIT 2020-2021", href: "/legacy/pdfs/Glimpses 2020-2021.pdf", year: "2021" },
    { title: "Glimpses of BVIMIT 2019-2020", href: "/legacy/pdfs/Glimpses 2019-20.pdf", year: "2020" },
    { title: "Glimpses of BVIMIT 2018-2019", href: "/legacy/pdfs/Glimpses 2018-19.pdf", year: "2019" },
    { title: "Glimpses of BVIMIT 2017-2018", href: "/legacy/pdfs/Glimpses 2017-18.pdf", year: "2018" },
    { title: "Glimpses of BVIMIT 2016-2017", href: "/legacy/pdfs/Glimpses 2016-17.pdf", year: "2017" }
  ];

  const filteredGlimpses = glimpses.filter(g => 
    g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.year.includes(searchTerm)
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
              Glimpses of BVIMIT
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Annual magazines compiling reports, event galleries, and photographic reviews of cultural festivals, hackathons, and sports matches.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* About Card */}
          <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
              <ImageIcon className="h-6 w-6 text-primary" /> About Glimpses of BVIMIT
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed">
              BVIMIT conducts several co-curricular and extra-curricular activities for the holistic development of students. <strong>‘Glimpses of BVIMIT’</strong> is our annual photo-magazine that highlights all activities, competitions, extension chapters, and sports events conducted and performed by our students in an academic year.
            </p>
          </div>

          {/* Downloadable Volumes */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
              <h3 className="text-xl font-black text-foreground tracking-tight">Glimpses Magazine Volumes</h3>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search volumes..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/40 text-foreground"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGlimpses.map((g, idx) => (
                <div key={idx} className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all flex flex-col justify-between h-40">
                  <div>
                    <div className="p-2 bg-primary/10 text-primary w-fit rounded-lg mb-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h4 className="text-xs font-black text-foreground group-hover:text-primary transition-colors">{g.title}</h4>
                    <span className="text-[10px] text-muted-foreground font-semibold">Academic Cycle: {g.year}</span>
                  </div>
                  <a 
                    href={g.href}
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
