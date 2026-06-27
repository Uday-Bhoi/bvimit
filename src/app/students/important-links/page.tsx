"use client";

import SiteShell from "@/components/layout/SiteShell";
import { LinkIcon, ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImportantLinksPage() {
  const links = [
    {
      id: 1,
      title: "Educational Loan Guidelines",
      desc: "UGC official information and instructions on securing educational loans for students.",
      url: "http://www.ugc.ac.in/page/Educational-loan.aspx"
    },
    {
      id: 2,
      title: "Scholarships & Fellowships Portal",
      desc: "Comprehensive listing of funding, grants, scholarships, and fellowship opportunities managed by UGC.",
      url: "http://www.ugc.ac.in/page/Scholarships-and-Fellowships.aspx"
    },
    {
      id: 3,
      title: "UGC Videos Regarding Ragging Awareness",
      desc: "Anti-ragging educational audio-visual guidelines and legal notices released by UGC.",
      url: "http://www.ugc.ac.in/page/Videos-Regarding-Ragging.aspx"
    },
    {
      id: 4,
      title: "Education Abroad for Indian Students",
      desc: "Official UGC reference page regarding overseas studies, recognized universities, and student schemes.",
      url: "http://www.ugc.ac.in/page/Edu-abroad-for-Indian-Students.aspx"
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
              Important External Links
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Official UGC, University of Mumbai, and national educational resources compiled for student utility.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {links.map((lnk) => (
              <div key={lnk.id} className="bg-card border border-border p-8 rounded-[2rem] shadow-sm flex flex-col justify-between hover:border-primary/30 transition-all">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full mb-3 inline-block">
                    Resource Link #{lnk.id}
                  </span>
                  <h3 className="text-lg font-black text-foreground tracking-tight flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-primary" /> {lnk.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{lnk.desc}</p>
                </div>
                <div className="pt-6">
                  <a 
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                  >
                    Visit UGC Portal <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guidelines disclaimer */}
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-primary mb-1">Affiliation & UGC Conformity</h4>
              <p className="text-[11px] font-semibold text-muted-foreground leading-relaxed">
                As an AICTE-approved and University of Mumbai-affiliated technical institution, BVIMIT complies with all regulations published by the University Grants Commission (UGC) and Ministry of Education. Please refer to the portals above for the most accurate statutory information.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
