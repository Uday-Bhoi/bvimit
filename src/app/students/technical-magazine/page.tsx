"use client";

import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, FileText, ArrowLeft, Download, Award, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function TechnicalMagazinePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const magazines = [
    { year: "2024", title: "Technical Magazine 2024", href: "/legacy/pdfs/Technical Magazine 2024 final.pdf" },
    { year: "2023", title: "Technical Magazine 2023", href: "/legacy/pdfs/Technical Magazine 2023.pdf" },
    { year: "2022", title: "Technical Magazine 2022 (MCA Sem VI)", href: "/legacy/pdfs/Technical Magazine 2022(MCA SVM VI).pdf" },
    { year: "2022", title: "Technical Magazine 2022 (MCA Sem IV)", href: "/legacy/pdfs/Technical Magazine 2022 (MCA SEM IV).pdf" },
    { year: "2021", title: "Technical Magazine 2021", href: "/legacy/pdfs/Technical_Magazine_2021.pdf" },
    { year: "2020", title: "Technical Magazine 2020", href: "/legacy/pdfs/Technical Magazine 2019-2020.pdf" },
    { year: "2019", title: "Technical Magazine 2019", href: "/legacy/pdfs/tech_mag18-19.pdf" },
    { year: "2018", title: "Technical Magazine 2018", href: "/legacy/pdfs/Tech_mag18.pdf" },
    { year: "2017", title: "Technical Magazine 2017", href: "/legacy/pdfs/Tech_mag 16-17.pdf" },
    { year: "2016", title: "Technical Magazine 2016", href: "/legacy/pdfs/Tech Mag 15-16.pdf" }
  ];

  const contestWinners = [
    {
      batch: "2021-2023",
      title: "Machine Learning Based Developmental Capability Prediction: A Diagnosis to the Learning Capacity Disorder for Specially-Abled Children",
      author: "Vasudha Arora",
      journal: "International Journal of Information and Education Technology, Vol. 14, No. 2, 2024"
    },
    {
      batch: "2019-2022 / 2020-2022",
      title: "ANALYSIS OF WEBRTC USING MESH ARCHITECTURE",
      author: "Shivananda Alva",
      journal: "International Research Journal of Modernization in Engineering Technology and Science"
    },
    {
      batch: "2019-2022 / 2020-2022",
      title: "Customer Feedback System & Businesses",
      author: "Jinal Momaya",
      journal: "International Journal of Scientific Research in Engineering and Management"
    },
    {
      batch: "2018-2019",
      title: "Emotion Analysis of e-customers using face recognition",
      author: "Sagar Navale",
      journal: "International Journal of Computer Science and Engineering"
    },
    {
      batch: "2017-2018",
      title: "A Review of Cleanliness Mission 'Swachh Bharat Abhiyan' A Survey done for Thane District",
      author: "Supreeta Desai",
      journal: "International Journal of Trend in Scientific Research and Development (IJTSRD) ISSN: 2456-6470"
    },
    {
      batch: "2016-2017",
      title: "Review of Random Number Generation",
      author: "Bhagyashree Damle, Shrutika",
      journal: "International Journal of Current Trends in Engineering & Research (IJCTER), e-ISSN 2455–1392"
    },
    {
      batch: "2015-2016",
      title: "Application of Fontus for Supplying Water in Areas Facing Water Shortage",
      author: "Bhathiwala Aaquib",
      journal: "International Journal of Current Trends in Engineering and Research (IJCTER)"
    }
  ];

  const filteredMagazines = magazines.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.year.includes(searchTerm)
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
              Technical Magazine
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Annual compiled volumes showcasing the finest student research papers, system designs, and software engineering projects.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* About Card */}
          <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" /> About Technical Magazine
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed">
              BVIMIT Technical Magazine is an annual publication based on the Research Paper Contest conducted for final-year MCA students. These research papers derive from the research activities carried out by students during their final semester. The top-performing papers are selected and compiled into the annual Technical Magazine. The publication provides students with enriching technical reading, promoting robust research methodologies.
            </p>
          </div>

          {/* Downloadable Volumes */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
              <h3 className="text-xl font-black text-foreground tracking-tight">Downloadable Magazine Volumes</h3>
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
              {filteredMagazines.map((m, idx) => (
                <div key={idx} className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all flex flex-col justify-between h-40">
                  <div>
                    <div className="p-2 bg-primary/10 text-primary w-fit rounded-lg mb-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h4 className="text-xs font-black text-foreground group-hover:text-primary transition-colors">{m.title}</h4>
                    <span className="text-[10px] text-muted-foreground font-semibold">Volume Year: {m.year}</span>
                  </div>
                  <a 
                    href={m.href}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors pt-3"
                  >
                    <Download className="h-3.5 w-3.5" /> Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Research Contest Winners */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-black text-foreground tracking-tight mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" /> Best Research Papers (Contest Winners)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground w-1/4">Batch / Cycle</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground w-1/2">Research Paper Title</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Author & Journal Publication</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {contestWinners.map((w, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-black text-primary">{w.batch}</td>
                      <td className="p-4 font-bold text-foreground leading-relaxed">"{w.title}"</td>
                      <td className="p-4 text-muted-foreground leading-relaxed">
                        <span className="block font-bold text-foreground">{w.author}</span>
                        <span className="text-[10px] block mt-0.5">{w.journal}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
