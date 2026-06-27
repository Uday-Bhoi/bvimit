"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { FileText, Download, ExternalLink, Calendar, Target, Users } from "lucide-react";

export default function HackathonSIHPage() {
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
              Outreach & Competitions
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Internal Hackathon — SIH 2025
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Official institutional report on the processes, student teams, problem statements, and winning nominations selected for the national stage.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6 text-muted-foreground text-sm leading-relaxed">
                <h2 className="text-3xl font-black text-foreground tracking-tight">Smart India Hackathon 2025</h2>
                
                <p>
                  The Smart India Hackathon is a nationwide initiative by the Ministry of Education's Innovation Cell to provide students with a platform to solve pressing problems of our daily lives. 
                </p>
                <p>
                  BVIMIT organized the internal institutional round in late 2024 / early 2025 to evaluate, refine, and select the top engineering and computer application projects to nominate for the national competition.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="p-5 bg-card border border-border rounded-2xl">
                    <Calendar className="h-5 w-5 text-primary mb-2" />
                    <h5 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1">Date Conducted</h5>
                    <p className="text-[11px]">Academic Year 2024-2025</p>
                  </div>
                  <div className="p-5 bg-card border border-border rounded-2xl">
                    <Target className="h-5 w-5 text-primary mb-2" />
                    <h5 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1">Focus Areas</h5>
                    <p className="text-[11px]">AI, Web, IoT, Security</p>
                  </div>
                  <div className="p-5 bg-card border border-border rounded-2xl">
                    <Users className="h-5 w-5 text-primary mb-2" />
                    <h5 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1">Nominations</h5>
                    <p className="text-[11px]">Selected student projects</p>
                  </div>
                </div>
              </div>

              {/* Right Column: PDF Download Card */}
              <div className="lg:col-span-5 bg-card border border-border p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 text-primary w-fit rounded-2xl">
                    <FileText className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground tracking-tight">Official SIH 2025 Report</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Download or view the complete report containing the list of problem statements evaluated, jury members, team sheets, and institutional certificates.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href="/legacy/pdfs/Report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-14 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-primary/95 transition-all shadow-md"
                  >
                    Open Document
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href="/legacy/pdfs/Report.pdf"
                    download="SIH_2025_Internal_Hackathon_Report.pdf"
                    className="flex items-center justify-center gap-2 w-full h-14 bg-muted hover:bg-muted/80 text-foreground text-xs font-black uppercase tracking-widest rounded-2xl border border-border transition-all"
                  >
                    Download PDF
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
