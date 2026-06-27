"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, Calendar, User, ShieldCheck } from "lucide-react";

export default function FDPsPage() {
  const fdps = [
    {
      year: "2022",
      date: "24th September 2022",
      title: "Cloud Computing Services & Identity Management",
      speaker: "Ms. Sneha Borge (Cloud Engineer, Cloudxchange.io)",
      description: "One-day online joint FDP & SDP explaining cloud computing basics, instance setup, virtual networks, and user authentication policies.",
      img: "/legacy/images/events/dscc.PNG",
    },
    {
      year: "2022",
      date: "12th March 2022",
      title: "Data Warehousing — Hands-on Session",
      speaker: "Mr. Raviraj Kuber (Sr. Data Associate, Cognizant)",
      description: "A comprehensive session on designing dimensional data warehouses, Extract-Transform-Load (ETL) pipelines, and Google Cloud Platform (GCP) configurations.",
      img: "/legacy/images/events/FDP12.PNG",
    },
    {
      year: "2021",
      date: "9th October 2021",
      title: "Implementation of Cloud Services & Identity Policies",
      speaker: "Ms. Sneha Borge (Siemens Ltd.)",
      description: "Hands-on session with 107 participants covering security practices, identity mapping, and multi-tenant setup in public clouds.",
      img: "/legacy/images/events/dscc.PNG",
    },
    {
      year: "2021",
      date: "28th Sept - 1st Oct 2021",
      title: "Big Data Analytics with Hadoop",
      speaker: "Mr. Sohan Kotkar (Big Data Engineer, Deloitte)",
      description: "Four-day FDP covering MapReduce programming, Hive query structures, Pig scripts, Spark deployments, and NoSQL databases using MongoDB.",
      img: "/legacy/images/events/hadoop.PNG",
    },
    {
      year: "2021",
      date: "6th - 7th September 2021",
      title: "Software Testing Quality Assurance Lab Orientation",
      speaker: "Squad InfoTech & Board of Studies (University of Mumbai)",
      description: "2-day FDP outlining Selenium WebDriver configurations, TestNG frameworks, and curriculum delivery strategies for MCA Sem III.",
      img: "/legacy/images/events/fdp-softtest.PNG",
    },
    {
      year: "2021",
      date: "10th July 2021",
      title: "Robotic Process Automation SDP & FDP",
      speaker: "Mr. Omkar Dalal (RPA Developer)",
      description: "Hands-on training session introducing students and staff to process mapping, workflow design, and task automation using UiPath.",
      img: "/legacy/images/rpa.PNG",
    },
    {
      year: "2021",
      date: "3rd - 4th February 2021",
      title: "Advanced Java (Spring Boot & Microservices)",
      speaker: "Mr. Omprakash Mandge (Assistant Professor, MET)",
      description: "Two-day online program highlighting the Spring Framework, JPA integration, Spring Boot RESTful Web Services, and microservice architectures.",
      img: "/legacy/images/events/fdp1java.PNG",
    },
    {
      year: "2020",
      date: "1st - 4th June 2020",
      title: "Full Stack Development using Django",
      speaker: "Mr. Ankur Ranjan (Software Engineer, vPhrase Analytics)",
      description: "4-Day program exploring Git workflows, Python programming, Django template mapping, database migrations, and web deployment.",
      img: "/legacy/images/events/IMG-20200602-WA0007sdp.jpg",
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
              Events Submenu
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Faculty Development Programmes (FDPs)
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Upskilling our educators with modern engineering paradigms, research methods, and hands-on laboratory frameworks to deliver world-class training.
            </p>
          </div>
        </section>

        {/* Timeline List */}
        <section className="py-16 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {fdps.map((fdp, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border p-8 rounded-[2.5rem] shadow-sm hover:border-primary/20 transition-all"
                >
                  {/* Left Column: Image */}
                  <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-border bg-muted aspect-[16/11] relative">
                    <img
                      src={fdp.img}
                      alt={fdp.title}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                      }}
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                      {fdp.year}
                    </span>
                  </div>

                  {/* Right Column: Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{fdp.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-foreground">{fdp.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-wider">
                        <User className="h-3 w-3" /> Instructor: {fdp.speaker}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {fdp.description}
                    </p>
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
