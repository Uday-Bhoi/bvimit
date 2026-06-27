"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import Link from "next/link";
import { Users, Briefcase, BookOpen, Globe, Award, Star, Compass, ArrowRight } from "lucide-react";

export default function EventsOverviewPage() {
  const categories = [
    {
      title: "Seminars",
      desc: "Annual and monthly lecture series, domain seminars, and guest presentations.",
      href: "/events/seminars",
      icon: Users,
      color: "from-blue-500/10 to-blue-600/5",
    },
    {
      title: "Workshops",
      desc: "Hands-on tech bootcamps, programming sessions, and career workshops.",
      href: "/events/workshops",
      icon: Briefcase,
      color: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      title: "FDPs",
      desc: "Faculty Development Programmes for academic upskilling and research growth.",
      href: "/events/fdps",
      icon: BookOpen,
      color: "from-purple-500/10 to-purple-600/5",
    },
    {
      title: "International Conferences",
      desc: "Conferences and proceeding publications (ICET 2022, 2024, 2026).",
      href: "/events/icet-2026",
      icon: Globe,
      color: "from-indigo-500/10 to-indigo-600/5",
    },
    {
      title: "Sports Day",
      desc: "Annual sports tournaments, indoor & outdoor events, and student awards.",
      href: "/events/sports",
      icon: Compass,
      color: "from-amber-500/10 to-amber-600/5",
    },
    {
      title: "Manthan Festival",
      desc: "Our annual inter-collegiate cultural and technical festival.",
      href: "/events/manthan",
      icon: Star,
      color: "from-rose-500/10 to-rose-600/5",
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
              Campus Life
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              BVIMIT Events & Conferences
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Explore our vibrant calendar of guest lectures, workshops, national & international conferences, and student-led cultural festivals.
            </p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, i) => (
                <div key={i} className={`group flex flex-col justify-between p-8 bg-card border border-border rounded-[2rem] hover:border-primary/30 transition-all bg-gradient-to-br ${cat.color}`}>
                  <div>
                    <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-3 tracking-tight">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cat.desc}</p>
                  </div>
                  <Link href={cat.href} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
                    Explore Events
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
