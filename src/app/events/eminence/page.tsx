"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Star, Calendar, Users, Award, Music, Flame } from "lucide-react";

export default function EminencePage() {
  const fests = [
    {
      year: "2020",
      title: "EMINENCE 2020",
      description: "Organized on 10th, 11th, and 12th February 2020, Eminence brought together three major academic units of Bharati Vidyapeeth Belapur: BVIMIT, BVIMSR, and BVIMED (BBA/BCA). By consolidating the fests 'Shikhar', 'Manthan', and 'Zeal' under one banner, the event witnessed participation from more than 50 colleges and over 500 participants across Mumbai and Navi Mumbai. NMTV served as the official media partner.",
      img: "/legacy/images/Eminence 2020.jpg",
      subEvents: [
        {
          date: "10th Feb 2020",
          title: "Inauguration by Mr. Peter Van Geit",
          desc: "Trekker and explorer Peter Van Geit formally inaugurated the event. Having climbed passes in the Himalayas and explored over 200 forts in the Sahyadri range, Peter shared his mountain journey and high-energy philosophy with the students.",
          img: "/legacy/images/day11.PNG"
        },
        {
          date: "10th - 12th Feb 2020",
          title: "Sports & Competitions",
          desc: "Belapur Campus organized indoor and outdoor events to foster sportsmanship. Tournaments included Cricket, Football, Volleyball, Shuttle Athletics, Badminton, Chess, and Carom.",
          img: "/legacy/images/day2.PNG"
        },
        {
          date: "12th Feb 2020",
          title: "Cultural Evening",
          desc: "A cultural evening packed with competitions in group dance, solo singing, poetry recitation, mimicry, debates, stress interviews, and drama. Principal Dr. Suhasini Vijaykumar noted the friendly relations fostered between departments.",
          img: "/legacy/images/day3.PNG"
        }
      ]
    },
    {
      year: "2019",
      title: "EMINENCE 2019",
      description: "Celebrated on 20th, 21st, and 22nd February 2019, Eminence 2019 marked the initial synchronization of three successful fests: Manthan (BVIMIT), Shikhar (BVIMSR), and Zeal (BVIMED). Thousands of students from technical and management streams participated. The inauguration was graced by Mr. Suhas Khamkar, a decorated professional Indian bodybuilder. The grand finale featured singing, dance performances, and a fashion show judged by industry guests.",
      img: "/legacy/images/events/eminence.jpg",
      subEvents: []
    }
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
              Inter-Collegiate Fest
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Eminence Annual Festival
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Our mega inter-collegiate festival uniting management, technical, and cultural talents under one synchronized umbrella complex.
            </p>
          </div>
        </section>

        {/* Fests Display */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {fests.map((fest, idx) => (
            <div key={fest.year} className="space-y-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Flame className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-black text-foreground tracking-tight">{fest.title}</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-sm space-y-6"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                  <img
                    src={fest.img}
                    alt={fest.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                    }}
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  {fest.description}
                </p>
              </motion.div>

              {/* Sub-Events under Eminence 2020 */}
              {fest.subEvents.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {fest.subEvents.map((sub, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-md transition-all group"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border">
                        <img
                          src={sub.img}
                          alt={sub.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                          }}
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-wider">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{sub.date}</span>
                        </div>
                        <h4 className="text-base font-black text-foreground line-clamp-1">{sub.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{sub.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
