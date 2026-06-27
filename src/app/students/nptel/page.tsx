"use client";

import SiteShell from "@/components/layout/SiteShell";
import { CheckCircle, Calendar, User, ArrowLeft, BookOpen, Users, Star, Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NPTELPage() {
  const features = [
    "The course enrollment and learning is free for the students as well as faculties, while the exam comes for a nominal fee.",
    "The courses are offered by the faculty of IITs, CMI, IMSc, etc., with durations of 10, 20, or 40 hours.",
    "Unit-wise study material and assignments are released every week.",
    "A discussion forum is available in which students can interact with faculty members directly.",
    "At the end of the course, a proctored exam is conducted, and candidates get certificate certifications."
  ];

  const benefits = [
    "Students gain tangible end results and industry-valued certifications.",
    "Students can review and assess their own progress through weekly assignments.",
    "Continuous assessment and interaction with course faculty.",
    "Discussion forum of like-minds to discuss problem areas.",
    "Access to mentors and certificates from IITs, improving job and higher studies prospects."
  ];

  const spoc = {
    name: "Dr. Pratibha M. Deshmukh",
    designation: "Associate Professor",
    dept: "MCA",
    email: "Pratibha.bvimit@gmail.com",
    contact: "9892068380"
  };

  const recognitions = [
    {
      title: "Active SPOC & NPTEL’s Brand Ambassador Award (July-Dec 2022)",
      desc: "Dr. Pratibha M. Deshmukh was awarded as Active SPOC and NPTEL's Brand Ambassador for the July-Dec 2022 Semester. She was felicitated by the NPTEL Coordinator, IIT Madras, on 21st Jan 2023 during the SPOC Felicitation cum awareness workshop of the West Zone at IIT Bombay.",
      img: "/legacy/images/award2.PNG"
    },
    {
      title: "Active SPOC & NPTEL’s Brand Ambassador Award (AY 2021-2022)",
      desc: "Dr. Pratibha M. Deshmukh was awarded as Active SPOC and NPTEL's Brand Ambassador for the Jan-April 2022 Semester of Swayam-NPTEL Online Education, felicitated by the NPTEL Coordinator, IIT Madras.",
      img: "/legacy/images/a3.PNG"
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
              NPTEL Local Chapter
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              National Programme on Technology Enhanced Learning (NPTEL) – Empowering students through IIT quality online certifications.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Grid Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" /> About NPTEL
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                The key objective of the National Programme on Technology Enhanced Learning (NPTEL) is to improve the quality of technology education in the country by developing contents for undergraduate and postgraduate curriculum using open online courses.
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                These courses cover the syllabus prescribed by universities and approved by AICTE. Course contents are highly useful for teacher training to improve pedagogical standards and for students to build strong foundations. These courses can also be used by professionals for updating their knowledge base.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-[2rem] shadow-sm space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-foreground flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" /> BVIMIT Chapter Initiative
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed">
                In March 2019, BVIMIT initiated the NPTEL Local Chapter, offering certification courses in open online modes. This helps students obtain certificates from IITs and improves their employability in the IT industry or preparation for higher studies.
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                As a partner local chapter approved on 21st March 2019, NPTEL keeps the Single Point of Contact (SPOC) updated on all initiatives, helping coordinate mentoring, clarify student doubts, and track weekly assignment compliance.
              </p>
            </div>
          </div>

          {/* Features and Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-black text-foreground tracking-tight flex items-center gap-2">
                Key Features of Swayam-NPTEL
              </h3>
              <div className="space-y-2">
                {features.map((feat, i) => (
                  <div key={i} className="flex gap-3 items-start bg-card border border-border p-4 rounded-xl shadow-xs">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-black text-foreground tracking-tight flex items-center gap-2">
                Student Benefits
              </h3>
              <div className="space-y-2">
                {benefits.map((ben, i) => (
                  <div key={i} className="flex gap-3 items-start bg-card border border-border p-4 rounded-xl shadow-xs">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{ben}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SPOC Information */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-xl font-black text-foreground tracking-tight mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" /> Single Point of Contact (SPOC)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Name</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Designation</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Department</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Email</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-bold text-foreground">{spoc.name}</td>
                    <td className="p-4 font-semibold text-muted-foreground">{spoc.designation}</td>
                    <td className="p-4 font-medium text-muted-foreground">{spoc.dept}</td>
                    <td className="p-4 font-medium text-primary select-all">{spoc.email}</td>
                    <td className="p-4 font-medium text-muted-foreground">{spoc.contact}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SPOC Awards and Recognitions */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" /> SPOC Recognitions & Ambassador Felicitations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recognitions.map((rec, i) => (
                <div key={i} className="bg-card border border-border rounded-[2rem] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all">
                  <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                    <Image 
                      src={rec.img} 
                      alt={rec.title}
                      fill
                      className="object-cover object-center"
                      unoptimized
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-sm font-black text-foreground tracking-tight leading-snug">{rec.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{rec.desc}</p>
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
