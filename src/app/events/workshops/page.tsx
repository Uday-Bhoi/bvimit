"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Search, Calendar, User, Tag, Sparkles, MapPin } from "lucide-react";

export default function WorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const workshops = [
    {
      title: "Innovative App Development with Spring Boot",
      speaker: "Mr. Soham Borale (Reserve Bank InfoTech)",
      date: "6th December 2025",
      description: "A hands-on workshop focused on Spring architecture, annotations, dependency injection, and REST API deployment, culminating in student startup project presentations.",
      img: "/legacy/images/events/spring25.PNG",
      category: "Backend Development",
    },
    {
      title: "First Aid & Basic Life Support (BLS) Training",
      speaker: "Dr. Darshit Arya (AHA Certified, Apollo Hospital)",
      date: "30th September 2025",
      description: "Coorganized by WDC. Practical life-saving skills training covering cardiopulmonary resuscitation (CPR), trauma care, choking relief, and emergency preparedness.",
      img: "/legacy/images/events/bls25.PNG",
      category: "Healthcare",
    },
    {
      title: "LaTeX for Technical Document Writing",
      speaker: "Dr. Suhasini Vijaykumar (Principal, BVIMIT)",
      date: "10th January 2025",
      description: "LaTeX environment training for MCA Sem I students, explaining mathematical symbol settings, referencing, and document compilation standard templates.",
      img: "/legacy/images/events/latex25.PNG",
      category: "Academic Tools",
    },
    {
      title: "Flutter Mobile Application Development",
      speaker: "Mr. Rishabh Narayan & Mr. Himanshu Kesharwani (Tapp AI)",
      date: "5th October 2024",
      description: "A comprehensive developer bootcamp on Dart programming language, Flutter layouts, widgets, API integration, and multi-device app packaging.",
      img: "/legacy/images/events/FLUTTER.PNG",
      category: "Mobile Development",
    },
    {
      title: "Tableau Data Visualization Hands-on",
      speaker: "ISTE Student Chapter Trainers",
      date: "2nd September 2024",
      description: "Interactive session learning data source integration, sorting, custom calculations, scatter plots, dual axis chart creation, and dashboard builders.",
      img: "/legacy/images/events/iste24.PNG",
      category: "Data Analytics",
    },
    {
      title: "Cloud Computing Web Services",
      speaker: "Ms. Sneha Borge (Siemens Ltd.)",
      date: "24th August 2024",
      description: "Detailed walkthrough of AWS cloud infrastructure, IAM permissions, database configurations, and web server deployments.",
      img: "/legacy/images/events/cloud2024.PNG",
      category: "Cloud Computing",
    },
    {
      title: "Getting Started with MS Power Automate",
      speaker: "Mr. Akshay Kokane (Automation Expert)",
      date: "1st April 2024",
      description: "Introductory seminar on robotic process automation (RPA), setting up triggers, custom loops, and syncing cloud files via Power Automate.",
      img: "/legacy/images/events/RPASE.PNG",
      category: "Automation",
    },
    {
      title: "Business Data Analytics using BI Tools",
      speaker: "Ms. Rubika Jadhav & Ms. Riddhi Anjarlekar (Addend)",
      date: "12th - 14th December 2023",
      description: "Two-day workshop exploring Power Query Editor, building self-service data models, mapping variables with DAX, and deploying reports.",
      img: "/legacy/images/events/WORKSHOP24.PNG",
      category: "Data Analytics",
    },
    {
      title: "Intellectual Property Rights (IPR) Awareness",
      speaker: "Mr. Saurabh Kumar (Examiner of Patents, GOI)",
      date: "19th January 2023",
      description: "Offline national program (NIPAM) outlining patents, industrial designs, copyrights, trade secrets, and career pathways in IPR law.",
      img: "/legacy/images/events/IPR.PNG",
      category: "Academic Tools",
    },
  ];

  const filtered = workshops.filter((ws) => {
    const matchesSearch =
      ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || ws.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Backend Development", "Mobile Development", "Data Analytics", "Cloud Computing", "Healthcare", "Academic Tools"];

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
              Practical Technology Workshops
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Hands-on training, coding bootcamps, and certification workshops covering design thinking, automation, data tools, and medical life support.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 bg-background border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Box */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search workshops by topic, trainer or tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-3 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/40 font-semibold text-sm"
                />
              </div>
            </div>

            {/* Category Switches */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  {cat === "All" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops Grid */}
        <section className="py-16 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((ws) => (
                  <motion.div
                    key={ws.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted border-b border-border relative">
                      <img
                        src={ws.img}
                        alt={ws.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                        }}
                      />
                      <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                        {ws.category}
                      </span>
                    </div>

                    <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{ws.date}</span>
                        </div>
                        <h3 className="text-lg font-black text-foreground tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                          {ws.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                          {ws.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border flex items-center gap-2">
                        <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-black text-foreground line-clamp-1">{ws.speaker}</span>
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
