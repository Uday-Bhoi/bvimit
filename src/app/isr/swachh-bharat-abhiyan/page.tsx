"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Sparkles, Calendar, MapPin, Users } from "lucide-react";

export default function SwachhBharatPage() {
  const events = [
    {
      title: "Cleanliness Drive 2024",
      date: "21st January 2024",
      time: "7:00 AM - 9:00 AM",
      location: "Flamingo Point, Behind T.S. Chanakya, Seawoods (W), Navi Mumbai",
      collab: "Mangrove Foundation Seawoods",
      description: "A total of 59 MCA students volunteered at Flamingo Point near Shri Bamandev Underpass, collaborating with 'Mangrove Soldiers' to clean up coastal waste and plastic pollution affecting local marine life.",
      img: "/legacy/images/events/cleaniness2024.PNG",
    },
    {
      title: "Clean-up & Plastic-Free Drive 2019",
      date: "2nd October 2019",
      time: "Morning Campaign",
      location: "Local Belapur Areas / Railway Station Surrounds",
      collab: "Shuddhi (Non-profit NGO)",
      description: "Commemorating Gandhi Jayanti, 40 college students participated in a cleanup drive and plastic-free awareness campaign. The event successfully collected plastic wastes and sensitized local shops and residents.",
      img: "/legacy/images/events/swatch1.jpg",
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
              Swachh Bharat Abhiyan
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Promoting healthy and clean living standards through cleanliness drives, plastic waste reduction, and community sensitizations.
            </p>
          </div>
        </section>

        {/* Overview Intro */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-8 bg-card border border-border rounded-3xl inline-block max-w-2xl">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2 text-foreground">Youth Action for Swachhta</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To inculcate the norms of clean and healthy living amongst the youth, the higher education regulator offers and encourages Swachh Bharat Abhiyan activities. At BVIMIT, we translate this vision into regular ground-level action.
              </p>
            </div>
          </div>
        </section>

        {/* Events Cards */}
        <section className="py-16 bg-muted/10 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center mb-12 tracking-tight text-foreground">Cleanliness Drive Campaigns</h2>

            <div className="space-y-16">
              {events.map((evt, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border p-8 rounded-[2.5rem] shadow-sm">
                  {/* Image Column */}
                  <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      src={evt.img}
                      alt={evt.title}
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl font-black text-foreground">{evt.title}</h3>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full w-fit">
                      Collab: {evt.collab}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{evt.date} ({evt.time})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="line-clamp-1">{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                      {evt.description}
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
