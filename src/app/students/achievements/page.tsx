"use client";

import SiteShell from "@/components/layout/SiteShell";
import { Award, Trophy, Star, ArrowLeft, Download, CheckCircle, Flame, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AchievementsPage() {
  const prizes = [
    {
      title: "Dr. Pratibha M. Deshmukh – NPTEL Brand Ambassador",
      desc: "Awarded as Active SPOC and NPTEL’s Brand Ambassador for July-Dec 2022. Felicitated by NPTEL coordinator, IIT Madras, at IIT Bombay on 21st Jan 2023.",
      img: "/legacy/images/award2.PNG"
    },
    {
      title: "Best Management Paper National Award (AY 2022-2023)",
      desc: "Dr. Pratibha M. Deshmukh received 'Shri. Prithviraj Shinde Best Management Paper National Award 2022' from Bharatiya Sugar, Pune, in the presence of Shri Shekhar Gaikwad IAS (Commissioner of Sugar, Maharashtra) and industry dignitaries.",
      img: "/legacy/images/AWARD1.PNG"
    },
    {
      title: "Active SPOC & Brand Ambassador Award (AY 2021-2022)",
      desc: "Dr. Pratibha M. Deshmukh recognized as Active SPOC and Brand Ambassador for Swayam-NPTEL Online Education (Jan-April 2022 cycle).",
      img: "/legacy/images/a3.PNG"
    },
    {
      title: "Second Prize in the 100 Game Challenge EG 100 A",
      desc: "Third-year MCA students won second prize in the challenge organized by C-DAC in association with the IEEE Bombay Chapter on 17th July 2021. Mentored by Dr. Jyoti Kharade.",
      members: "Joystan Lewis, Twinkle Singh, Nikhil Nair",
      img: "/legacy/images/education_game_bvimit.jpg"
    }
  ];

  const universityToppers = [
    { name: "Jadhav Mayuri Ananda Anita", batch: "2012-2015 Batch", rank: "2nd in University of Mumbai" },
    { name: "Kaur Navneet Balwinder Manjeet", batch: "2011-2014 Batch", rank: "2nd in University of Mumbai" },
    { name: "Phatangale Trupti Laxmikant Mahima", batch: "2010-2013 Batch", rank: "2nd in University of Mumbai" },
    { name: "Vipul Shah", batch: "2007 Batch", rank: "University Topper (2010)" }
  ];

  const highlights = [
    "Prof. Jyoti Kharade and students won the Gold Medal for 'Innovation in Management Education' presentation at the All India Institute of Management Schools (AIMS).",
    "MCA final year students Dipak Sonnar, Prashant Gaykar, and Dyaneshwar Jambhulkar won the Silver Medal for their project presentation 'WE School Innovation Award' at AIMS.",
    "Smart India Hackathon 2017: Three teams participated under the guidance of Dr. Suhasini Vijaykumar, Dr. Jyoti Kharade, and Ms. Uttara Athawale.",
    "BVIMIT achieved 100% placement rates for multiple consecutive MCA batches."
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
              Student Corner & Achievements
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Celebrating outstanding academic feats, national competition titles, and impactful software engineering projects developed by our students.
            </p>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Intro Card */}
          <div className="bg-card border border-border rounded-[2rem] overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-3">
            <div className="relative h-64 md:h-full w-full bg-slate-900 min-h-[200px]">
              <Image 
                src="/legacy/images/Students.jpg" 
                alt="BVIMIT Students" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-black tracking-tight text-foreground mb-4">Student-Centric Development</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                BVIMIT prides itself on being a student-centric institute. Students are entrusted with resources and responsibilities early on. They are encouraged to participate in various technical activities and motivated to develop live software projects to prepare for their future careers.
              </p>
            </div>
          </div>

          {/* Prizes & Awards Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" /> Prizes & National Awards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prizes.map((p, idx) => (
                <div key={idx} className="bg-card border border-border rounded-[2rem] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all">
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                    <Image 
                      src={p.img} 
                      alt={p.title} 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-sm font-black text-foreground tracking-tight leading-snug">{p.title}</h4>
                    {p.members && (
                      <p className="text-[10px] font-black text-primary uppercase tracking-wider">Members: {p.members}</p>
                    )}
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Key Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-black text-foreground tracking-tight flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" /> Key Institutional Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((hl, i) => (
                  <div key={i} className="flex gap-3 bg-muted/40 border border-border p-4 rounded-xl">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{hl}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-[2rem] p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-foreground tracking-tight flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" /> Hackathon Selections
              </h3>
              <div className="relative h-40 w-full bg-slate-900 rounded-xl overflow-hidden mb-3">
                <Image 
                  src="/legacy/images/team.jpg" 
                  alt="Hackathon Team" 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h4 className="text-xs font-black text-foreground uppercase tracking-wider">Smart India Hackathon 2020</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Team <strong>Mind Freak</strong> was selected to represent BVIMIT. 
                <br />
                <span className="block mt-1 font-semibold text-foreground">Members:</span> Shubham Rahate (Team Leader), Deepak Sharma, Surbhi Singh, Ashwini Paunikar, Yash Kewat, and Surya Prakash Mishra.
              </p>
            </div>
          </div>

          {/* University Toppers Table */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-black text-foreground tracking-tight mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" /> University Rank Holders & Toppers
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Student Name</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Academic Cycle</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">University Standing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {universityToppers.map((t, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-bold text-foreground">{t.name}</td>
                      <td className="p-4 font-semibold text-muted-foreground">{t.batch}</td>
                      <td className="p-4 font-medium text-primary">{t.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Live Projects & PDF Download */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative h-48 w-full bg-slate-900 rounded-xl overflow-hidden border border-border">
              <Image 
                src="/legacy/images/bvcop.jpg" 
                alt="BV College of Pharmacy Software" 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-black text-foreground tracking-tight">Active Live Software Projects</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>Examination software for R-2019:</strong> Developed for Bharati Vidyapeeth's College of Pharmacy, Navi Mumbai (B.Pharm Course), by MCA student <strong>Mr. Shubham Ramsaran Prajapati</strong> under the guidance of <strong>Dr. Jyoti Kharade</strong>.
              </p>
              <div className="pt-2">
                <a 
                  href="/legacy/pdfs/liveprojects.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/95 transition-all shadow"
                >
                  <Download className="h-4 w-4" /> Download Students Live Projects Sheet (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
