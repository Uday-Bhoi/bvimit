"use client";

import SiteShell from "@/components/layout/SiteShell";
import { CheckCircle, Calendar, User, ArrowLeft, BookOpen, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ISTEPage() {
  const objectives = [
    "Providing quality training programmes to teachers and administrators of technical institutions to update their knowledge and skills in their fields of activity.",
    "To assist and contribute in the production and development of top quality professional engineers and technicians needed by the industry and other organizations.",
    "Providing guidance and training to students to develop better learning skills and personality.",
  ];

  const members = [
    { name: "Dr. Priya Chandran", designation: "Asst. Prof., Faculty Convener ISTE", dept: "MCA" },
    { name: "Mr. Sahil Taware", designation: "Student Chairperson", dept: "MCA" },
    { name: "Mr. Ashu Singh", designation: "Secretary cum Treasurer", dept: "MCA" },
    { name: "Mr. Parth Tiwari", designation: "Committee Member", dept: "MCA" },
    { name: "Mr. Kundan Chaudhari", designation: "Committee Member", dept: "MCA" },
    { name: "Ms. Sakshita Thorat", designation: "Committee Member", dept: "MCA" },
    { name: "Ms. Sakshi Khanna", designation: "Committee Member", dept: "MCA" },
  ];

  const activities = [
    {
      title: "Seminar on 'Turning AI Models into Real-World Applications'",
      date: "13th March 2026",
      speaker: "Ms. Chanchal Upendra Dwivedi, Freelance Developer and Former Intern Developer at Princeton Blue",
      desc: "A seminar on 'Turning AI Models into Real-World Applications' was conducted to provide insights into how artificial intelligence (AI) models move beyond theoretical development and are successfully deployed in practical scenarios. Key topics discussed included the lifecycle of AI development (data collection, preprocessing, model training, evaluation, and deployment), cloud platforms, APIs, containerization, and real-world case studies in recommendation systems and fraud detection.",
      img: "/legacy/images/events/isteaievent.PNG",
    },
    {
      title: "Seminar on 'Cyber Security'",
      date: "25th November 2025",
      speaker: "Industry Experts",
      desc: "To address the growing threat landscape in the digital era, this seminar focused on creating awareness and educating participants on the safe and responsible use of technology. Key topics covered included phishing, malware, data breaches, data protection best practices, password hygiene, and cyber laws.",
      img: "/legacy/images/events/iste-cyber.PNG",
    },
    {
      title: "Seminar on 'AI Dominance in the Current Scenario: A Boon or Bane for Job Seekers'",
      date: "07th November 2025",
      speaker: "Mr. Kanthi Kiran Yabaluri, Global HR Leader",
      desc: "This session aimed to provide valuable insights into the rapid advancements in Artificial Intelligence (AI) and their implications for employment in the technology sector, highlighting strategies like continuous learning and adapting to AI-integrated environments.",
      img: "/legacy/images/events/isteai.PNG",
    },
    {
      title: "Workshop on 'Internet of Things (IoT)'",
      date: "04th February 2025",
      speaker: "Mr. Tejas Hoskatti, Chief Operating Officer (COO) at Skillup Ventures Private Ltd.",
      desc: "An engaging hands-on session focusing on IoT architecture, communication protocols, sensor integration, predictive maintenance, and home automation. Included a practical session on 'Soil Moisture Sensor Module: Enhancing Precision in Agriculture'.",
      img: "/legacy/images/events/iot.PNG",
    },
    {
      title: "An Ideation Workshop",
      date: "5th October 2024",
      speaker: "Mr. Gaurav Thodkar (Founder at Creato), Dr. Priyeta Priyadarshini (Asst. Prof., BVIMSR), Mr. Ravi Ahlawat (Founder, Gurukul)",
      desc: "Designed to foster creativity, innovation, and problem-solving. Participants brain-stormed and pitched unique solutions to a panel of judges, improving their presentation, lateral thinking, and feedback-handling skills.",
      img: "/legacy/images/events/ideation.PNG",
    },
    {
      title: "Workshop on 'Data Integration with Azure Data Factory'",
      date: "28th September 2024",
      speaker: "Mr. Sagar Navle, Associate Team Lead, Nagarro India Pvt. Ltd.",
      desc: "Demonstrated how to use Azure Data Factory (ADF) to create data-driven workflows for orchestrating data movement and transforming data at scale, covering Blob Storage, SQL Database, Synapse connectivity, and ETL automation.",
      img: "/legacy/images/events/AZURE.PNG",
    },
    {
      title: "Workshop on 'Tableau – Hands on Training'",
      date: "2nd September 2024",
      speaker: "Tableau Certified Professionals",
      desc: "Focused on enhancing skills in data visualization. The workshop thoroughly explored Tableau's features, data connections, custom charts, filters, relationships, joins, and calculations.",
      img: "/legacy/images/events/iste24.PNG",
    },
    {
      title: "Seminar on 'Digital Marketing'",
      date: "16th March 2024",
      speaker: "Dr. Arati Agarwal, Director of Vocskills",
      desc: "Introduced digital marketing fundamentals, target audience behavioral demographics, and essential marketing channels including SEO, SEM, social media, email, and content marketing analytics.",
      img: "/legacy/images/events/digi.jpeg",
    },
    {
      title: "Workshop on 'Business Data Analytics using BI Tools'",
      date: "12th & 14th December 2023",
      speaker: "Ms. Rubika Jadhav & Ms. Riddhi Anjarlekar (Data Analysts, Addend Analytics)",
      desc: "A comprehensive 2-day workshop focused on Power BI services, Power Query Editor data transformation, DAX formulation, and interactive dashboard deployments.",
      img: "/legacy/images/events/WORKSHOP24.PNG",
    },
    {
      title: "ISTE Chapter Inauguration Ceremony",
      date: "12th December 2023",
      speaker: "Ms. Manjiri Ghogre (HR Professional), Ms. Rubika Jadhav, Ms. Riddhi Anjarlekar",
      desc: "Official launch event of the ISTE Student Chapter at BVIMIT to foster a spirit of innovation, learning, and industry collaboration.",
      img: "/legacy/images/events/ISTE-INAGUARATION.PNG",
    },
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
              Indian Society for Technical Education (ISTE)
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-slate-300 leading-relaxed">
              Leading National Professional non-profit society promoting technical education and personality development of students.
            </p>
          </div>
        </section>

        {/* Overview & Objectives */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-black tracking-tight text-foreground border-b border-border pb-4 flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-primary" /> About ISTE Student Chapter
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education in the field of engineering and technology registered under the Societies Registration Act of 1860. The organization was established in the year 1941 with the motto of Career Development of Engineering Teachers and Personality Development of Students and overall development of our Technical Education System.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At present, ISTE has a very large and effective membership base consisting of 1,35,525 technical teachers as Life Members, 5 lakh Student members, 3052 Institutional Members (including IITs, IISc., NITs and other leading technical institutions), 1453 faculty chapters, and 1649 students’ chapters.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2">BVIMIT Association</h4>
                <p className="text-xs font-bold text-foreground">
                  ISTE student chapter (MH-315) was established in our institute in the year 2023. BVIMIT is also an Institutional Member (IM-3124) of the Indian Society for Technical Education.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" /> Major Objectives
              </h3>
              <div className="space-y-4">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex gap-3 items-start bg-card border border-border p-4 rounded-xl shadow-sm">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-muted-foreground leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Convener / Members Table */}
          <div className="bg-card border border-border rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-2xl font-black text-foreground tracking-tight mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" /> ISTE Chapter Members
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Name</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Designation</th>
                    <th className="p-4 font-black uppercase tracking-wider text-muted-foreground">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {members.map((m, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 font-bold text-foreground">{m.name}</td>
                      <td className="p-4 font-semibold text-muted-foreground">{m.designation}</td>
                      <td className="p-4 font-medium text-muted-foreground">{m.dept}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activities list */}
          <div>
            <h3 className="text-2xl font-black text-foreground tracking-tight mb-8">
              ISTE Chapter Activities & Seminars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((act, i) => (
                <div key={i} className="bg-card border border-border rounded-[2rem] overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all hover:border-primary/20">
                  <div>
                    <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                      <Image 
                        src={act.img} 
                        alt={act.title} 
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        unoptimized
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-primary" /> {act.date}
                        </span>
                      </div>
                      <h4 className="text-lg font-black text-foreground tracking-tight leading-snug">{act.title}</h4>
                      <p className="text-xs font-semibold text-primary flex items-start gap-1">
                        <User className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                        <span>Speaker: {act.speaker}</span>
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-2">{act.desc}</p>
                    </div>
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
