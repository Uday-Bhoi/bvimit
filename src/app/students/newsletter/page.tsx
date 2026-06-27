"use client";

import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, FileText, ArrowLeft, Download, Newspaper, Search } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function NewsletterPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const newsletters = [
    { title: "Newsletter Prabhat 2025 Issue I", href: "/legacy/pdfs/Newsletter prabhat 2025 ISSUE-I.pdf.pdf.pdf", year: "2025", term: "Issue I" },
    { title: "Newsletter Prabhat 2024 Issue II", href: "/legacy/pdfs/Newsletter prabhat 2024 ISSUE-II.pdf.pdf (2).pdf", year: "2024", term: "Issue II" },
    { title: "Newsletter Prabhat 2024 Issue I", href: "/legacy/pdfs/Issue2024.pdf", year: "2024", term: "Issue I" },
    { title: "Newsletter Prabhat 2023 Issue II", href: "/legacy/pdfs/Newsletter prabhat 2023 ISSUE-II.pdf (1).pdf", year: "2023", term: "Issue II" },
    { title: "Newsletter Prabhat 2023 Issue I", href: "/legacy/pdfs/Newsletter_2023issue_I.pdf", year: "2023", term: "Issue I" },
    { title: "Newsletter Prabhat 2022 Issue II", href: "/legacy/pdfs/Newsletter Prabhat 2022 Issue-2.pdf", year: "2022", term: "Issue II" },
    { title: "Newsletter Prabhat 2022 Issue I", href: "/legacy/pdfs/Newsletter Prabhat 2022 Issue-1.pdf", year: "2022", term: "Issue I" },
    { title: "Newsletter Prabhat 2021 Issue II", href: "/legacy/pdfs/Newsletter Prabhat 2021 Issue-2.pdf", year: "2021", term: "Issue II" },
    { title: "Newsletter Prabhat 2021 Issue I", href: "/legacy/pdfs/Newsletter Prabhat 2021 Issue I.pdf", year: "2021", term: "Issue I" },
    { title: "Newsletter Prabhat 2020 Issue II", href: "/legacy/pdfs/Newsletter Prabhat 2020 Issue II.pdf", year: "2020", term: "Issue II" },
    { title: "Newsletter Prabhat 2020 Issue I", href: "/legacy/pdfs/Newsletter Prabhat 2020 Issue I.pdf", year: "2020", term: "Issue I" },
    { title: "Newsletter Prabhat 2019 Issue II", href: "/legacy/pdfs/Newsletter Prabhat 2019 Issue II (2).pdf", year: "2019", term: "Issue II" },
    { title: "Newsletter Prabhat 2019 Issue I", href: "/legacy/pdfs/Newsletter Prabhat 2019 Issue I (5).pdf", year: "2019", term: "Issue I" },
    { title: "Newsletter Prabhat 2018 Issue II", href: "/legacy/pdfs/Newsletter Prabhat 2018 Issue II.pdf", year: "2018", term: "Issue II" },
    { title: "Newsletter Prabhat 2018 Issue I", href: "/legacy/pdfs/Newsletter Prabhat 2018 Issue I.pdf", year: "2018", term: "Issue I" },
    { title: "Newsletter Prabhat 2017 Issue II", href: "/legacy/pdfs/Newsletter Prabhat 2017 Issue II.pdf", year: "2017", term: "Issue II" },
    { title: "Newsletter Prabhat 2017 Issue I", href: "/legacy/pdfs/Newsletter Prabhat 2017 Issue I.pdf", year: "2017", term: "Issue I" }
  ];

  const filteredNewsletters = newsletters.filter(nl => 
    nl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nl.year.includes(searchTerm)
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
              Newsletter Prabhat
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Bi-annual newsletter reporting the latest advancements in information technology, events, and student perspectives.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* About Card */}
          <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
            <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-primary" /> About Newsletter Prabhat
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Newsletter Prabhat is a bi-annual newsletter with its inception in the year 2017 and is published by the institute. It has the tagline <strong>Tech Rising Star</strong>, which focuses on the latest and upcoming technologies in the IT world. The institute has a strong editorial board comprising faculties and students which motivates the students to participate by writing articles on advanced technological paradigms.
            </p>
          </div>

          {/* Downloadable Volumes */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
              <h3 className="text-xl font-black text-foreground tracking-tight">Published Newsletters</h3>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search newsletters..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-muted/40 border border-border rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/40 text-foreground"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredNewsletters.map((nl, idx) => (
                <div key={idx} className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all flex flex-col justify-between h-40">
                  <div>
                    <div className="p-2 bg-primary/10 text-primary w-fit rounded-lg mb-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <h4 className="text-xs font-black text-foreground group-hover:text-primary transition-colors">{nl.title}</h4>
                    <span className="text-[10px] text-muted-foreground font-semibold">Semester Cycle: {nl.year} ({nl.term})</span>
                  </div>
                  <a 
                    href={nl.href}
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
