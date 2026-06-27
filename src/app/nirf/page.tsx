"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import Link from "next/link";
import { Award, Calendar, BookOpen, GraduationCap, Users, Shield, ArrowRight, FileText } from "lucide-react";

export default function NIRFOverviewPage() {
  const parameters = [
    {
      title: "Teaching, Learning & Resources (TLR)",
      desc: "Focuses on core teaching models, student-teacher ratios, faculty quality, and financial resources.",
      icon: BookOpen,
      color: "from-blue-500/10 to-blue-600/5",
    },
    {
      title: "Research and Professional Practice (RP)",
      desc: "Measures quality and quantity of publications, patents, IP filings, and research projects.",
      icon: Shield,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      title: "Graduation Outcomes (GO)",
      desc: "Evaluates the success of students in placement rates, higher studies, and average packages.",
      icon: GraduationCap,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      title: "Outreach & Inclusivity (OI)",
      desc: "Assesses diversity including representation of women, regional students, and social schemes.",
      icon: Users,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      title: "Perception (PR)",
      desc: "Measures reputation among industry employers, academic peers, and public surveys.",
      icon: Award,
      color: "from-rose-500/10 to-rose-600/5",
    },
  ];

  const yearlySubmissions = [
    {
      year: "2025",
      title: "NIRF 2025 Submission",
      desc: "View the official compiled NIRF 2025 report submitted to the Ministry of Education.",
      href: "/nirf/2025",
      docName: "nirfbvimit2025.pdf",
    },
    {
      year: "2024",
      title: "NIRF 2024 Submission",
      desc: "View the official compiled NIRF 2024 report detailing institutional audits.",
      href: "/nirf/2024",
      docName: "bvimitnirf24.pdf",
    },
    {
      year: "2023",
      title: "NIRF 2023 Submission",
      desc: "View the official compiled NIRF 2023 submission parameters.",
      href: "/nirf/2023",
      docName: "BVIMITNIRF2023.pdf",
    },
  ];

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
              National Rankings
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              NIRF Submissions
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              National Institutional Ranking Framework (NIRF), Ministry of Education, Government of India. Explore our yearly submission data and metrics.
            </p>
          </div>
        </section>

        {/* Year Submissions Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-foreground tracking-tight mb-10 border-b border-border pb-4">
              Yearly Submissions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {yearlySubmissions.map((sub, i) => (
                <div key={i} className="group flex flex-col justify-between p-8 bg-card border border-border rounded-[2rem] hover:border-primary/30 transition-all bg-gradient-to-br from-primary/5 to-transparent">
                  <div>
                    <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full mb-3 inline-block">
                      Year {sub.year}
                    </span>
                    <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight">{sub.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-6">{sub.desc}</p>
                  </div>
                  <Link href={sub.href} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors cursor-pointer">
                    View Report Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Framework Parameters Section */}
        <section className="py-16 bg-muted/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-foreground tracking-tight mb-4">
              NIRF Assessment Parameters
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-3xl">
              Institutions are evaluated on five broad parameters, each carrying specific weightage to compute final cumulative national scores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parameters.map((param, i) => (
                <div key={i} className={`group flex flex-col p-8 bg-card border border-border rounded-[2rem] transition-all bg-gradient-to-br ${param.color}`}>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6">
                    <param.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black text-foreground mb-3 tracking-tight">{param.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{param.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
