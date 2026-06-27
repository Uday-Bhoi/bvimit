"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Search, Calendar, User, Tag, Sparkles } from "lucide-react";

export default function SeminarsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const seminars = [
    {
      year: "2024-25",
      title: "Cyber Security & Modern Threats",
      speaker: "Mr. Akash Dhakad (Proamtech Global)",
      date: "3rd August 2024",
      description: "Hands-on insights into cybersecurity foundations, covering phishing, key-logging, and call-spoofing, along with live countermeasure demonstrations.",
      img: "/legacy/images/events/cyber.PNG",
      category: "Technical",
    },
    {
      year: "2024-25",
      title: "Global Technology Trends 2024",
      speaker: "Mr. Vikash Tripathi (Kirti Computers)",
      date: "Spring 2024",
      description: "A comprehensive career mapping session illustrating modern IT infrastructure, deployment trends, and essential tech stacks to enhance employability.",
      img: "/legacy/images/events/p10.PNG",
      category: "Career",
    },
    {
      year: "2024-25",
      title: "Digital Marketing Fundamentals",
      speaker: "Dr. Arati Agarwal (Director, Vocskills)",
      date: "16th March 2024",
      description: "Organized by the ISTE Student Chapter. Explored SEO, SEM, content strategy, target demographics, and tracking analytics.",
      img: "/legacy/images/events/digi.jpeg",
      category: "Marketing",
    },
    {
      year: "2023-24",
      title: "Entrepreneurship in the Rapidly Changing World",
      speaker: "Lt. Col. Sanjay Shrivastava",
      date: "26th February 2024",
      description: "Expert talk focusing on leadership, industry revolution, Big Data, Generative AI, and employee-employer dynamics.",
      img: "/legacy/images/events/expert.PNG",
      category: "Entrepreneurship",
    },
    {
      year: "2023-24",
      title: "Effective Research Paper Writing",
      speaker: "Dr. Priya Chandran (BVIMIT)",
      date: "30th Oct - 1st Nov 2023",
      description: "Detailed workshop guiding students through literature review, referencing, planning schedule, drafting, and plagiarism compliance.",
      img: "/legacy/images/events/paper.PNG",
      category: "Academic",
    },
    {
      year: "2023-24",
      title: "Green Initiatives for Sustainable Life",
      speaker: "Ms. Rashmi Joshi (Environment Consultant)",
      date: "16th December 2023",
      description: "Educational session for MCA students discussing domestic waste separation, green audit rules, and carbon footprint reduction.",
      img: "/legacy/images/events/green.PNG",
      category: "Social",
    },
    {
      year: "2023-24",
      title: "Financial Literacy & Smart Investing",
      speaker: "Mr. Paresh Sheth (Director, CASI Global)",
      date: "12th December 2023",
      description: "Seminars outlining inflation management, equity/debt investments, smart savings, and personal asset distribution.",
      img: "/legacy/images/events/financial.PNG",
      category: "Finance",
    },
    {
      year: "2023-24",
      title: "Stress Management & Sitting Postures",
      speaker: "Dr. Shalushubham Keni (Apollo Hospital)",
      date: "13th September 2023",
      description: "WDC session detailing muscle stress prevention, correct ergonomics, stretching exercises, and health habits for IT developers.",
      img: "/legacy/images/events/stress23.PNG",
      category: "Health",
    },
    {
      year: "2022-23",
      title: "Business Model with New Startups",
      speaker: "Mr. Devendra Pimputkar (CEO, Techfer Global)",
      date: "9th June 2023",
      description: "IIC Seminar discussing startup challenges, fundraising, validation plans, and customer validation pipelines.",
      img: "/legacy/images/events/startup-june.PNG",
      category: "Entrepreneurship",
    },
    {
      year: "2022-23",
      title: "Innovation, Ideas, and Technical Support",
      speaker: "Mr. Saurabh Sinha (Founder, REIN Labs)",
      date: "Innovation Day 2023",
      description: "Inspiring session designed to encourage students to construct technical resolutions for real-world problems.",
      img: "/legacy/images/events/innovation.PNG",
      category: "Entrepreneurship",
    },
  ];

  const filtered = seminars.filter((sem) => {
    const matchesSearch =
      sem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sem.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === "All" || sem.year === selectedYear;
    return matchesSearch && matchesYear;
  });

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
              Academic Seminars & Webinars
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Insights from industry leaders, technical consultants, and business pioneers, keeping our MCA community up to date with modern technology.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 bg-background border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by topic, speaker or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/40 font-semibold text-sm"
              />
            </div>

            {/* Academic Year Switches */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {["All", "2024-25", "2023-24", "2022-23"].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedYear === year
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  {year === "All" ? "All Years" : year}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Seminars List Grid */}
        <section className="py-16 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((sem, idx) => (
                  <motion.div
                    key={sem.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border relative">
                      <img
                        src={sem.img}
                        alt={sem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                        }}
                      />
                      <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                        {sem.category}
                      </span>
                    </div>

                    <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{sem.date} ({sem.year})</span>
                        </div>
                        <h3 className="text-xl font-black text-foreground tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                          {sem.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                          {sem.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border flex items-center gap-2">
                        <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-black text-foreground line-clamp-1">{sem.speaker}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
