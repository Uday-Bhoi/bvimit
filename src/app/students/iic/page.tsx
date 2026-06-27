"use client";

import SiteShell from "@/components/layout/SiteShell";
import { Lightbulb, Users, ArrowLeft, Download, Award, ShieldAlert, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function IICPage() {
  const members = [
    { srNo: 1, role: "Convener, ARIIA Coordinator", name: "Dr. Kirti Muley" },
    { srNo: 2, role: "Innovation Activity", name: "Mrs. Sudeshna Roy" },
    { srNo: 3, role: "Member", name: "Dr. Priya Chandran" },
    { srNo: 4, role: "IPR Activity Coordinator", name: "Dr. Shambhu Rai" },
    { srNo: 5, role: "Internship Activity Coordinator", name: "Mr. Manish Dubey" },
    { srNo: 6, role: "Start up Activity Coordinator", name: "Mrs. Gunjan Behl" },
    { srNo: 7, role: "Member", name: "Mrs. Nidhi Poonia" },
    { srNo: 8, role: "Member", name: "Mrs. Rasika Patil" },
    { srNo: 9, role: "Vice President", name: "Mrs. Shubhangi Mahadik" },
    { srNo: 10, role: "Social Media Coordinator", name: "Mrs. Shravani Pawar" },
    { srNo: 11, role: "NIRF Coordinator", name: "Dr. Jyoti Kharade" },
    { srNo: 12, role: "Member", name: "Dr. Pratibha Deshmukh" }
  ];

  const activities = [
    {
      quarter: "Academic Year 2024",
      docs: [
        { label: "MIC Driven Activity Report", href: "/legacy/pdfs/MIC_DRIVEN (1).pdf" }
      ]
    },
    {
      quarter: "Q1 2022 Cycle",
      resolutions: [
        { label: "IIC Q1 Council Resolution Document", href: "/legacy/pdfs/Resolution.pdf" }
      ],
      docs: [
        { label: "IIC Report: S22 NIRF Seminar", href: "/legacy/pdfs/IICReport_C22-230029 (2).pdf" },
        { label: "IIC Report: S22 Webinar on Android Programming", href: "/legacy/pdfs/IICReport_S22-2357968-IC202217037.pdf" }
      ]
    },
    {
      quarter: "Q2 2022 Cycle",
      docs: [
        { label: "IIC Report: C22 Innovation Competition", href: "/legacy/pdfs/IICReport_C22_Innovation_Competition.pdf" },
        { label: "IIC Report: C22 Poster Presentation", href: "/legacy/pdfs/IICReport_C22_Poster_Presentation.pdf" },
        { label: "IIC Report: C22 Session on Achieving Problem", href: "/legacy/pdfs/IICReport_C22_Session on Achieving Problem.pdf" },
        { label: "IIC Report: C22 Workshop on Entrepreneurship Skill", href: "/legacy/pdfs/IICReport_C22-230099.pdf" },
        { label: "IIC Report: C22 Workshop on Design Thinking", href: "/legacy/pdfs/IICReport_C22_Workshop_on_Design_Thinking.pdf" },
        { label: "IIC Report: National Youth Day Celebration", href: "/legacy/pdfs/IICReport_National Youth Day.pdf" },
        { label: "IIC Report: S22 3D Printing Webinar", href: "/legacy/pdfs/IICReport_S22_3DPrinting_Webinar.pdf" },
        { label: "IIC Report: S22 Nasha Mukti Campaign", href: "/legacy/pdfs/IICReport_S22_Nasha_Mukti.pdf" },
        { label: "IIC Report: S22 Workshop on MOOC", href: "/legacy/pdfs/IICReport_S22_Workshop on MOOC.pdf" }
      ]
    },
    {
      quarter: "Q3 2022 Cycle",
      resolutions: [
        { label: "IIC Q3 Council Resolution Document", href: "/legacy/pdfs/Resolution_q3.pdf" }
      ]
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
              Institution's Innovation Council (IIC)
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Fostering systematic entrepreneurship, incubation, and technological innovation pipelines.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Objectives Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" /> MoE’s Innovation Cell Initiative
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                BVIMIT established the Institution's Innovation Council (IIC) in the Academic Year 2021-2022. The Ministry of Education (MoE), Government of India, through MoE’s Innovation Cell (MIC) launched the IIC program in collaboration with AICTE for Higher Educational Institutions (HEIs) to systematically foster a culture of innovation and a start-up ecosystem in education institutions.
              </p>
              <h3 className="text-lg font-black text-foreground tracking-tight">Key Objectives & Mandates</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-xs font-semibold text-muted-foreground leading-relaxed">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Engage faculty members and students in systematic innovation, incubation, and entrepreneurship activities such as Ideation, Problem Solving, Proof of Concept Development, Design Thinking, IPR, Project Handling, and Startup Management.</span>
                </li>
                <li className="flex gap-2 text-xs font-semibold text-muted-foreground leading-relaxed">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Organize periodic workshops, seminars, and interactive sessions with successful entrepreneurs, angel investors, and venture capitalists to create a robust mentor pool for student innovators.</span>
                </li>
              </ul>
            </div>

            {/* Certificate snapshot */}
            <div className="bg-card border border-border p-6 rounded-[2rem] shadow-sm space-y-4">
              <h3 className="text-lg font-black text-foreground tracking-tight flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" /> Establishment Certificate
              </h3>
              <div className="relative h-64 w-full bg-slate-900 rounded-xl overflow-hidden border border-border">
                <Image 
                  src="/legacy/images/IIC.PNG" 
                  alt="IIC Establishment Certificate" 
                  fill 
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Members Table */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-black text-foreground tracking-tight mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" /> IIC Committee Members
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground w-16">Sr. No</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">IIC Role</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Committee Member Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {members.map((m) => (
                    <tr key={m.srNo} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-black text-primary">{m.srNo}</td>
                      <td className="p-4 font-bold text-foreground">{m.role}</td>
                      <td className="p-4 font-semibold text-muted-foreground">{m.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Council Activities & Reports */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" /> IIC Council Activities & Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((act, idx) => (
                <div key={idx} className="bg-card border border-border p-6 rounded-[2rem] shadow-sm space-y-4">
                  <h4 className="text-sm font-black text-primary border-b border-border pb-2 uppercase tracking-wider">{act.quarter}</h4>
                  
                  {act.resolutions && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-foreground uppercase tracking-widest block">Resolutions</span>
                      {act.resolutions.map((res, rIdx) => (
                        <a 
                          key={rIdx}
                          href={res.href}
                          target="_blank"
                          className="flex items-center gap-2 p-3 bg-muted/40 hover:bg-muted border border-border rounded-xl text-xs font-semibold text-foreground transition-all cursor-pointer"
                        >
                          <Download className="h-4 w-4 text-primary shrink-0" />
                          <span>{res.label}</span>
                        </a>
                      ))}
                    </div>
                  )}

                  {act.docs && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-black text-foreground uppercase tracking-widest block">Activity Reports</span>
                      {act.docs.map((doc, dIdx) => (
                        <a 
                          key={dIdx}
                          href={doc.href}
                          target="_blank"
                          className="flex items-center gap-2 p-3 bg-muted/40 hover:bg-muted border border-border rounded-xl text-xs font-semibold text-foreground transition-all cursor-pointer"
                        >
                          <Download className="h-4 w-4 text-primary shrink-0" />
                          <span>{doc.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
