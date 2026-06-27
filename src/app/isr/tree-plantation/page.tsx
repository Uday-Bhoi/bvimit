"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { TreePine, Calendar, Landmark, Info } from "lucide-react";

export default function TreePlantationPage() {
  const drives = [
    {
      year: "2025",
      date: "12th July 2025",
      title: "Tree Plantation Activity 2025",
      collab: "Rotary Club Navi Mumbai",
      description: "Organized under the Green Club of BVIMIT. Over 100 students and 11 Rotary Club members planted more than 80 saplings within the institute premises.",
      img: "/legacy/images/events/tree2025.PNG",
    },
    {
      year: "2024",
      date: "24th June 2024",
      title: "Tree Plantation Drive 2024",
      collab: "ISR Unit & Green Club",
      description: "Initiated the annual plantation drive in the campus garden. Over 35 students and staff members participated in planting medicinal and shade trees.",
      img: "/legacy/images/events/tree2024.jpg",
    },
    {
      year: "2023",
      date: "16th December 2023",
      title: "Session on 'Green Initiatives for Sustainable Life'",
      collab: "Ms. Rashmi Joshi (Environment Consultant)",
      description: "A guest seminar discussing energy conservation, waste management, and practical methods for reducing carbon footprints at home and on campus.",
      img: "/legacy/images/events/green.PNG",
    },
    {
      year: "2023",
      date: "12th August 2023",
      title: "Kalpavriksha Drive 2023",
      collab: "ISR Unit of BVIMIT",
      description: "Focused on planting traditional herbal and flower saplings to increase bio-diversity inside the campus educational cluster.",
      img: "/legacy/images/events/tree2023.jpg",
    },
    {
      year: "2021",
      date: "30th November 2021",
      title: "Majhi Vasundhara Abhiyan Plantation",
      collab: "Ecosystem Restoration Association",
      description: "Conducted in collaboration with Environmental Consultant Ms. Rashmi Joshi under the state-wide Majhi Vasundhara initiative.",
      img: "/legacy/images/events/isrtree.PNG",
    },
    {
      year: "2021",
      date: "16th September 2021",
      title: "Ozone Layer Preservation Day Drive",
      collab: "Women's Development Cell (WDC)",
      description: "Celebrating the International Day for the Preservation of the Ozone Layer by planting ozone-friendly native saplings around the campus.",
      img: "/legacy/images/events/treep_ozone.PNG",
    },
    {
      year: "2021",
      date: "30th August 2021",
      title: "Janmashtami Tree Plantation Drive",
      collab: "Navi Mumbai Educational Complex",
      description: "Faculty and administrative staff marked the Janmashtami festival with an eco-conscious plantation drive around the outer college borders.",
      img: "/legacy/images/events/treep.PNG",
    },
    {
      year: "2019",
      date: "22nd July 2019",
      title: "Annual Campus Plantation Programme",
      collab: "MCA Faculty & Student Volunteers",
      description: "Students and teachers partnered to plant shade-giving trees along the college entrance walkway to create green zones.",
      img: "/legacy/images/events/tree.jpg",
    },
    {
      year: "2018",
      date: "27th July 2018",
      title: "Guru Purnima Tree Planting Ceremony",
      collab: "BVIMIT Student Council",
      description: "Guru Purnima was celebrated with tree planting, where students and teachers jointly planted trees to symbolize the nurturing relationship of guidance.",
      img: "/legacy/images/events/guru1.jpg",
    },
    {
      year: "2016",
      date: "1st July 2016",
      title: "Annual Environmental Sensitization Program",
      collab: "Green Campus Committee",
      description: "A large-scale campaign where 200 saplings were planted. Participants committed to nurturing the saplings to build a greener campus environment.",
      img: "/legacy/images/events/treeplantation.png",
    },
  ];

  return (
    <SiteShell>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Banner */}
        <section className="relative overflow-hidden bg-[#111827] py-20 md:py-28">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-primary">
              Outreach & Community
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Tree Plantation Drive
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Cultivating a greener tomorrow by actively planting saplings, organizing ecological awareness sessions, and maintaining a sustainable ecosystem.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 w-fit rounded-full mx-auto">
              <TreePine className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-black text-foreground">Green Initiatives & Ecosystems</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              At BVIMIT, we sensitize our students towards environmental consciousness. Our annual plantation drives and expert workshops aim to create an eco-friendly educational complex.
            </p>
          </div>
        </section>

        {/* Timeline Grid */}
        <section className="py-16 bg-muted/10 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {drives.map((drive, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border p-8 rounded-[2.5rem] shadow-sm hover:border-primary/20 transition-all"
                >
                  {/* Left Column: Image */}
                  <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-border bg-muted aspect-[4/3] relative">
                    <img
                      src={drive.img}
                      alt={drive.title}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {drive.year}
                    </span>
                  </div>

                  {/* Right Column: Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{drive.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-foreground">{drive.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-wider">
                        <Landmark className="h-3 w-3" /> Collab: {drive.collab}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {drive.description}
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
