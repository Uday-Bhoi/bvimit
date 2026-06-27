"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Sparkles, Calendar, Users, Trophy, Flame, Globe, Table, Film } from "lucide-react";

export default function ManthanPage() {
  const [selectedYear, setSelectedYear] = useState("2026");

  const manthanFests = [
    {
      year: "2026",
      title: "MANTHAN 2026 — Roots to Realm",
      date: "24th & 25th March 2026",
      tagline: "Uniting Technical Innovation, Sports and Cultural Pride",
      description: "Manthan 2026 presents the theme 'Roots to Realm', a premier intercollegiate festival. Serving as a vibrant platform, students from different colleges across Thane District and Navi Mumbai gather to participate in Technical, Cultural, and Sports competitions, promoting innovation, teamwork, and leadership.",
      bannerImg: "/legacy/images/Bvimit Manthan banner.png",
      websiteLink: "https://manthan2k26.vercel.app/",
      details: [
        "Features competitive tournaments in technical hacks, gaming, and traditional sports.",
        "A platform for direct industry networking, ideation pitches, and creative arts.",
        "Interactive workshops and cultural showcases celebrating regional heritage."
      ]
    },
    {
      year: "2025",
      title: "MANTHAN 2025",
      date: "28th - 31st January 2025",
      tagline: "Navi Mumbai's Leading Technical & Cultural Amalgamation",
      description: "Organized by the dedicated staff and students of BVIMIT, Manthan 2025 featured competitive indoor/outdoor sports, IT coding labs, and cultural stage performances. Graced by Chief Guests Mr. Parag Mehta and Ms. Ruhi Mane, the fest offered students a major arena to showcase their technical prowess.",
      bannerImg: "/legacy/images/manthan25.PNG",
      details: [
        "Inaugurated with multi-sport tournaments on the campus grounds.",
        "IT tracks featuring coding sprints, web design, and algorithmic debugging.",
        "Academic 'Brilliance' events promoting collaborative startup pitches."
      ]
    },
    {
      year: "2024",
      title: "MANTHAN 2024",
      date: "1st & 2nd March 2024",
      tagline: "A Two-Day Celebratory Storm of Sports, IT & Cultural Arts",
      description: "Inaugurated by Principal Dr. Suhasini Vijay Kumar, Manthan 2024 hosted more than 700 students. Day 1 was packed with outdoor sports (organized by Dr. Shambhu Rai), indoor games (by Prof. Manish Dubey), and IT coding events (by Dr. Kirti Muley and Prof. Nidhi P.). Day 2 featured stage arts evaluated by guest judges Ranjan Sharma, Sandesh Sanjay, and Swetam Singh.",
      bannerImg: "/legacy/images/mantha1.jpg",
      details: [
        "Technical and Gaming events including Pixel Hunt, Valorant, BGMI, and Bug Bounty.",
        "Outdoor sports tournaments in Box Cricket, Volleyball, Tug of War, and Badminton.",
        "Cultural finale with Solo/Group Dance, Skits, and Solo/Group Singing competitions."
      ]
    },
    {
      year: "2022",
      title: "MANTHAN 2022",
      date: "14th & 15th November 2022",
      tagline: "Navi Mumbai's Largest IT Festival",
      description: "Inspired by the mythological 'Samudra Manthan' yielding gems for humanity, Manthan 2022 consolidated technical and creative potential. Lokmat was the print media partner. The fest provided students with quick lessons on time management, people skills, and public relations.",
      bannerImg: "/legacy/images/manthan_2022_cover.png",
      eventSchedule: {
        day1: {
          title: "Day 1 (IT & Sports)",
          it: ["Debugging", "Googler", "Poster Presentation", "Rapid Fire", "Counter Strike 1.6", "NFS Gaming", "UI Design"],
          outdoor: ["Box Cricket", "Badminton", "Treasure Hunt"],
          indoor: ["Neon Cricket", "Chess", "Ludo"]
        },
        day2: {
          title: "Day 2 (Art & Cultural)",
          art: ["Makeup", "Rangoli", "Mehendi", "Hairstyle", "Nail Art", "Photography / Reels"],
          cultural: ["Group Dance", "Solo Dance", "Ramp Walk & Stress Interview"]
        }
      },
      details: [
        "Inaugurated by Principal Mrs. Suhasini Vijayakumar with over 300 participants.",
        "Day 2 cultural coordinates headed by convenors Mrs. Gunjan Bhel and Mrs. Nidhi.",
        "Stage reviews and evaluations judged by choreographers Abhay Jackson and Krisha Jain."
      ]
    }
  ];

  const currentFest = manthanFests.find((f) => f.year === selectedYear) || manthanFests[0];

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
              Flagship IT & Cultural Fest
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Manthan Festival
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Navi Mumbai's largest IT and cultural festival organized annually by BVIMIT, showcasing youth potential and managerial skills.
            </p>
          </div>
        </section>

        {/* Year Switches */}
        <section className="py-10 bg-background border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0">
              {manthanFests.map((fest) => (
                <button
                  key={fest.year}
                  onClick={() => setSelectedYear(fest.year)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedYear === fest.year
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  Manthan {fest.year}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Fest Card */}
              <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all p-6 md:p-10 space-y-6">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted border border-border relative">
                  <img
                    src={currentFest.bannerImg}
                    alt={currentFest.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{currentFest.date}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-black text-foreground tracking-tight">{currentFest.title}</h2>
                  <p className="text-sm font-bold text-primary">{currentFest.tagline}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">{currentFest.description}</p>
                </div>

                {currentFest.websiteLink && (
                  <div className="pt-4">
                    <a
                      href={currentFest.websiteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/95 transition-all shadow"
                    >
                      <Globe className="h-4 w-4" /> Go to Manthan website
                    </a>
                  </div>
                )}
              </div>

              {/* 2022 Specific Event Grid */}
              {currentFest.eventSchedule && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Day 1 */}
                  <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm space-y-6">
                    <h3 className="text-xl font-black text-foreground border-b border-border pb-3">
                      {currentFest.eventSchedule.day1.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">IT & Gaming</p>
                        <div className="flex flex-wrap gap-2">
                          {currentFest.eventSchedule.day1.it.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold bg-muted text-foreground px-2.5 py-1.5 rounded-lg border border-border/50">{item}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">Outdoor Sports</p>
                        <div className="flex flex-wrap gap-2">
                          {currentFest.eventSchedule.day1.outdoor.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold bg-muted text-foreground px-2.5 py-1.5 rounded-lg border border-border/50">{item}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">Indoor Games</p>
                        <div className="flex flex-wrap gap-2">
                          {currentFest.eventSchedule.day1.indoor.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold bg-muted text-foreground px-2.5 py-1.5 rounded-lg border border-border/50">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Day 2 */}
                  <div className="bg-card border border-border rounded-[2.5rem] p-8 shadow-sm space-y-6">
                    <h3 className="text-xl font-black text-foreground border-b border-border pb-3">
                      {currentFest.eventSchedule.day2.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">Creative & Fine Arts</p>
                        <div className="flex flex-wrap gap-2">
                          {currentFest.eventSchedule.day2.art.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold bg-muted text-foreground px-2.5 py-1.5 rounded-lg border border-border/50">{item}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-primary mb-2">Cultural Stage Shows</p>
                        <div className="flex flex-wrap gap-2">
                          {currentFest.eventSchedule.day2.cultural.map((item, i) => (
                            <span key={i} className="text-[10px] font-bold bg-muted text-foreground px-2.5 py-1.5 rounded-lg border border-border/50">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Highlights list */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-foreground">Festival Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentFest.details.map((detail, dIdx) => (
                    <div key={dIdx} className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between">
                      <Sparkles className="h-6 w-6 text-primary mb-4" />
                      <p className="text-xs text-muted-foreground leading-relaxed font-semibold">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </SiteShell>
  );
}
