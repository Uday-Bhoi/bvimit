"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { HeartPulse, Calendar, Users, Heart } from "lucide-react";

export default function BloodDonationPage() {
  const camps = [
    {
      year: "2025",
      date: "16th September 2025",
      title: "Blood Donation Camp 2025",
      collab: "Rotary Club Navi Mumbai & D.Y. Patil Blood Bank",
      description: "Organized under the green initiatives banner. Staff, 15 Rotary club members, and over 100 students joined to donate 35 units of blood to aid regional healthcare facilities.",
      img: "/legacy/images/events/blood-dy-patil.PNG",
    },
    {
      year: "2024",
      date: "12th January 2024",
      title: "Founder's Birth Anniversary Camp",
      collab: "BVIMIT Green Club & Local Blood Banks",
      description: "Honoring Founder Dr. Patangrao Kadam on National Youth Day. A massive turnout of students and teaching staff donated blood following a morning prayer ceremony.",
      img: "/legacy/images/events/blood2024.PNG",
    },
    {
      year: "2023",
      date: "12th January 2023",
      title: "Founder's Birth Anniversary Camp",
      collab: "BVIMIT green chapter",
      description: "On National Youth Day, the campus hosted a camp in memory of Dr. Patangrao Kadam, receiving voluntary blood units from students and staff alike.",
      img: "/legacy/images/events/BLOOD2023.PNG",
    },
    {
      year: "2021",
      date: "1st June 2021",
      title: "Pandemic Response Blood Donation",
      collab: "Navi Mumbai Educational Complex",
      description: "Organized on Director Dr. Vilasrao Kadam's birthday to support regional blood bank reserves during critical pandemic deficits.",
      img: "/legacy/images/events/blood21.PNG",
    },
    {
      year: "2020",
      date: "8th January 2020",
      title: "Founder's Day Blood Camp",
      collab: "WDC and ISR Unit",
      description: "A commemorative camp organized at Bharati Vidyapeeth Campus, Belapur. Students and faculty queued to donate blood.",
      img: "/legacy/images/b1.PNG",
    },
    {
      year: "2019",
      date: "8th January 2019",
      title: "Annual Campus Blood Drive",
      collab: "Educational Complex Blood Bank",
      description: "Blood donors from different departments lined up to donate blood on the birth anniversary of founder Dr. Patangrao Kadam.",
      img: "/legacy/images/events/birth.jpg",
    },
    {
      year: "2017",
      date: "26th September 2017",
      title: "Blood Donation & Health Checkup",
      collab: "Apollo Hospitals",
      description: "Over 50 students donated blood and 200 underwent comprehensive health checks, including BMI, blood sugar, blood pressure, and eye checkups.",
      img: "/legacy/images/events/blood.png",
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
              Blood Donation Camp
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Regular blood donation drives organized in collaboration with prominent health institutions to support life-saving medical reserves.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="p-3 bg-red-500/10 text-red-500 w-fit rounded-full mx-auto">
              <HeartPulse className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-black text-foreground">Every Drop Counts</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              Donating blood is a direct contribution to humanity. BVIMIT conducts annual blood donation camps, particularly celebrating Founder Dr. Patangrao Kadam's birth anniversary, to foster civic responsibility and empathy in our students.
            </p>
          </div>
        </section>

        {/* Timeline Grid */}
        <section className="py-16 bg-muted/10 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {camps.map((camp, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-border p-8 rounded-[2.5rem] shadow-sm hover:border-primary/20 transition-all"
                >
                  {/* Left Column: Image */}
                  <div className="lg:col-span-4 overflow-hidden rounded-2xl border border-border bg-muted aspect-[4/3] relative">
                    <img
                      src={camp.img}
                      alt={camp.title}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {camp.year}
                    </span>
                  </div>

                  {/* Right Column: Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{camp.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-foreground">{camp.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-wider">
                        <Heart className="h-3 w-3" /> Collab: {camp.collab}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {camp.description}
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
