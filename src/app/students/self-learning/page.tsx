"use client";

import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, FileText, ArrowLeft, Download, Bookmark, Users, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SelfLearningPage() {
  const valueAddedCourses = [
    {
      module: "Android Application Development",
      industry: "Microsoft Partner Collaboration",
      duration: "3 months (6 Hrs/week)",
      expert: "Mr. Vipull Shah"
    },
    {
      module: ".Net Technology",
      industry: "Capgemini Partner Collaboration",
      duration: "3 months (6 Hrs/week)",
      expert: "Mr. Anand Khadse"
    },
    {
      module: "SAP-ERP",
      industry: "ATOS Ltd.",
      duration: "Completed on 30/09/2016",
      expert: "Ms. Chitra"
    },
    {
      module: "SAP Systems",
      industry: "ATOS Technologies",
      duration: "Completed on 20/08/2015",
      expert: "Mr. Ritesh Tripathi (Corporate & Institutional Alliance, ATOS) & Mr. Kaustubh Khare (Head - Competency & Delivery Assurance, ATOS)"
    }
  ];

  const resources = [
    {
      title: "NPTEL Local Chapter Timelines",
      desc: "Detailed timelines for Swayam-NPTEL course enrollment, exam dates, and chapter registration windows.",
      href: "/legacy/pdfs/NPTEL Local Chapter_Timelines July-Dec2021.pdf"
    },
    {
      title: "SPOC NPTEL Overview",
      desc: "Official chapter Single Point of Contact guidelines, student mentor mappings, and course selection rules.",
      href: "/legacy/pdfs/spoc-nptel.pdf"
    }
  ];

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
              Self Learning & Certifications
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Enhancing academic curricula through professional certifications, NPTEL online streams, and specialized industry value-added programs.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* NPTEL & Short/Long-Term Courses */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
              <Bookmark className="h-6 w-6 text-primary" /> 1. Short & Long-Term Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((res, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-[2rem] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-black text-foreground tracking-tight">{res.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{res.desc}</p>
                  </div>
                  <div className="pt-4">
                    <a 
                      href={res.href}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary hover:underline cursor-pointer"
                    >
                      <Download className="h-4 w-4" /> Download PDF Document
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Added Courses Table */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
            <h2 className="text-2xl font-black text-foreground tracking-tight mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" /> 2. Value Added Courses (Industry Collaborations)
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              Specialized skill development modules run in partnership with leading global technology houses to offer students hands-on capability enhancements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground w-1/4">Module Description</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Collaborating Industry</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Duration</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Corporate Expert / Mentor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {valueAddedCourses.map((c, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-bold text-foreground">{c.module}</td>
                      <td className="p-4 font-semibold text-muted-foreground">{c.industry}</td>
                      <td className="p-4 font-medium text-muted-foreground">{c.duration}</td>
                      <td className="p-4 font-medium text-primary select-all">{c.expert}</td>
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
