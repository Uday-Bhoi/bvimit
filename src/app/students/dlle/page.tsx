"use client";

import SiteShell from "@/components/layout/SiteShell";
import { Users, FileText, ArrowLeft, Download, Calendar, ShieldCheck, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DLLEPage() {
  const resources = [
    {
      title: "Circular: UDAAN Festival 2025-2026",
      desc: "Official University of Mumbai notification and participation guidelines for UDAAN.",
      href: "/legacy/pdfs/Circular_Udaan Festival_2025-26.pdf"
    },
    {
      title: "Notice: UDAAN Event 2025-2026",
      desc: "Internal institute scheduling, coordinator contact details, and student guidelines.",
      href: "/legacy/pdfs/Notice UdaanEvent 2025-26.pdf"
    }
  ];

  const activities = [
    {
      title: "International Women’s Day Celebration 2026 – Walkathon (Nari in Saree)",
      desc: "BVIMIT organized a meaningful Extension Activity as a Social Contribution initiative on the occasion of International Women’s Day 2026. The program was conducted in collaboration with Apollo Hospitals, Belapur, aiming to promote women’s health awareness, empowerment, and social well-being. The highlight of the celebration was a Walkathon organized under the theme 'Nari in Saree', symbolizing the strength, dignity, and cultural identity of women. The event was jointly organized by the WDC, DLLE, and ISR, with active volunteer support from students managing registration, logistics, and healthcare campaign promotions.",
      img: "/legacy/images/events/dlle26.PNG"
    },
    {
      title: "Students Participation in UDAAN 2026 (Street Play, Poster Making, Creative Writing)",
      desc: "Students of Bharati Vidyapeeth’s Institute of Management and Information Technology (IMIT), Navi Mumbai actively participated in 'UDAAN – The Flight of Extension 2026'. Organized by the Department of Lifelong Learning and Extension (DLLE), University of Mumbai in collaboration with Veena College of Commerce and Science on 11th February 2026. UDAAN is a prestigious extension initiative aimed at promoting social responsibility, community engagement, and holistic student development.",
      img: "/legacy/images/events/udaan26.PNG"
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
              Department of Lifelong Learning and Extension (DLLE)
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              University of Mumbai extension projects promoting social responsibility, community outreach, and student leadership.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main banner image */}
          <div className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-sm">
            <div className="relative h-64 md:h-96 w-full bg-slate-900">
              <Image 
                src="/legacy/images/dlle-banner-students.PNG" 
                alt="DLLE student banner" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-8 space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" /> Outreach & Life Skills
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                The Department of Lifelong Learning and Extension (DLLE) of the University of Mumbai promotes a meaningful and sustained rapport between the Universities and the community. The main objective is to instill a sense of social contribution and extension values in students by actively training them in street plays, field surveys, and social awareness campaigns.
              </p>
            </div>
          </div>

          {/* Downloads */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-foreground tracking-tight">Extension circulars & downloads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((res, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-[2rem] shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h4 className="text-base font-black text-foreground tracking-tight">{res.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{res.desc}</p>
                  </div>
                  <div className="pt-4">
                    <a 
                      href={res.href}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary hover:underline cursor-pointer"
                    >
                      <Download className="h-4 w-4" /> Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Logs */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-foreground tracking-tight">Recent extension achievements</h3>
            <div className="space-y-8">
              {activities.map((act, idx) => (
                <div key={idx} className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-64 md:h-full w-full bg-slate-900 min-h-[260px]">
                    <Image 
                      src={act.img} 
                      alt={act.title} 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-full inline-block">
                      Extension Activity Log
                    </span>
                    <h4 className="text-lg font-black text-foreground tracking-tight leading-snug">{act.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
