"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { ShieldAlert, Trophy, Award, Sparkles } from "lucide-react";

export default function CovidAwarenessPage() {
  const competitions = [
    {
      title: "Poster Making Competition",
      description: "Students created posters conveying safety guidelines, vaccine encouragement, and hopeful messages during lockdown phases.",
      img: "/legacy/images/poster.PNG",
      winners: [
        { rank: "1st Prize", name: "Rushikesh Bapardekar", class: "MCA Sem IV A" },
        { rank: "2nd Prize", name: "Shivani", class: "MCA Sem II A" },
        { rank: "3rd Prize", name: "Prathmesh Pawar", class: "MCA Sem IV A" },
      ],
    },
    {
      title: "Rangoli Competition",
      description: "Traditional rangoli patterns designed to symbolize sanitation precautions, physical distancing, and community resilience.",
      img: "/legacy/images/rangoli.PNG",
      winners: [
        { rank: "1st Prize", name: "Greeshma Koli", class: "MCA Sem IV B" },
      ],
    },
    {
      title: "Best Out of Waste",
      description: "Students crafted creative visual pieces, models, or reusable household utility items from scraps found at home during the quarantine.",
      img: "/legacy/images/waste.PNG",
      winners: [
        { rank: "1st Prize", name: "Swapnali", class: "MCA Sem II A" },
      ],
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
              Covid-19 Awareness Drive
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Spreading health precautions, safety guides, and vaccine awareness creatively through remote community engagement campaigns.
            </p>
          </div>
        </section>

        {/* Campaign Introduction */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-wider">
                  <ShieldAlert className="h-3.5 w-3.5" /> Pandemic Response
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                  Lockdown Awareness Campaign
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  As the entire world faced the pandemic, BVIMIT took social responsibility to spread awareness regarding Covid-19 safety. The **BVIMIT Competition Committee** and **Women Development Cell (WDC)** organized a remote awareness drive. 
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Students channels their creativity into digital/physical posters, rangolis, and waste craft, using only materials available at home in full compliance with state lockdown guidelines.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm">
                  <img
                    src="/legacy/admin2/Slider/images/slider/Covid 2020 Competition.jpg"
                    alt="Covid-19 Awareness Campaign Banner"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6 bg-muted/20 border-t border-border">
                    <p className="text-xs text-muted-foreground font-bold text-center">
                      Creative Contributions by MCA Students During Lockdown
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitions / Art Gallery */}
        <section className="py-16 bg-muted/10 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center mb-12 tracking-tight text-foreground">Awareness Competitions & Winners</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {competitions.map((comp, i) => (
                <div key={i} className="flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted border-b border-border">
                    <img
                      src={comp.img}
                      alt={comp.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Sparkles className="h-5 w-5" />
                        <h3 className="text-xl font-black text-foreground tracking-tight">{comp.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{comp.description}</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/60">
                      <h4 className="text-xs font-black uppercase tracking-wider text-foreground/80 mb-3 flex items-center gap-1.5">
                        <Trophy className="h-4 w-4 text-yellow-500" /> Competition Winners
                      </h4>
                      <div className="space-y-3">
                        {comp.winners.map((win, j) => (
                          <div key={j} className="flex items-center gap-3 bg-muted/40 p-2.5 rounded-xl border border-border/50">
                            <Award className="h-4 w-4 text-primary shrink-0" />
                            <div className="text-[11px] leading-tight">
                              <p className="font-black text-foreground">{win.name}</p>
                              <p className="text-muted-foreground font-bold text-[9px]">{win.rank} — {win.class}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
