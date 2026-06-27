"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Trophy, Calendar, Users, Award, MapPin } from "lucide-react";

export default function SportsPage() {
  const sportsData = [
    {
      year: "2024-25",
      title: "BVIMIT Sports Activities 2024-25",
      description: "Bharati Vidyapeeth’s Institute of Management and Information Technology, CBD Belapur, Navi Mumbai organized various indoor and outdoor sports. These included Badminton, Box Cricket, Carom board, Ludo, and Chess on Saturday 9th November 2024, celebrated as the Annual Sports Day of BVIMIT. All events were organized in the college campus and on the college ground, with active participation from MCA Sem-I students.",
      img: "/legacy/images/SPOTS-24-25.PNG",
      highlights: ["Badminton", "Box Cricket", "Carom", "Ludo", "Chess"]
    },
    {
      year: "2023-24",
      title: "BVIMIT Sports Activities 2023-24",
      description: "Organized on 1st March 2024, this large-scale intercollegiate sports day brought together over 500 students from various colleges across Thane District and Navi Mumbai. The event was inaugurated by Principal Dr. Suhasini Vijay Kumar. It featured outdoor sports like Box Cricket, Volleyball, Tug of War, and Badminton, alongside indoor games (Chess, Carom, Ludo) and specialized IT/Gaming competitions.",
      img: "/legacy/images/sports-23-24.PNG",
      highlights: ["Box Cricket", "Volley Ball", "Tug of War", "IT Gaming: Pixel Hunt, Bug Bounty, Valorant, BGMI"]
    },
    {
      year: "2022-23",
      title: "BVIMIT Sports Activities 2022-23",
      description: "Held on 14th and 15th November 2022, the sports meet featured standard indoor and outdoor games. Highlights of the event included Treasure Hunt, Badminton, Volleyball, Box Cricket, Neo Cricket, Carom, Ludo, and Chess, with high-spirit student participation across all batches.",
      img: "/legacy/images/sports-22-23.PNG",
      highlights: ["Treasure Hunt", "Badminton", "Volleyball", "Box Cricket", "Chess & Carom"]
    },
    {
      year: "2021-22",
      title: "BVIMIT Sports Activities 2021-22",
      description: "Organized on 11th March 2022, BVIMIT hosted various indoor and outdoor sports tournaments. Students competed in Volleyball, Cricket, Carom, Ludo, and Chess on the college campus and grounds.",
      img: "/legacy/images/sports-21-22.PNG",
      highlights: ["Volleyball", "Box Cricket", "Carom & Chess", "Ludo"]
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
              Campus Life
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Annual Sports Meets & Events
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Fostering teamwork, sportsmanship, and physical health. View records of our annual indoor and outdoor sports meets.
            </p>
          </div>
        </section>

        {/* Sports timeline */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sportsData.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all group"
              >
                <div className="lg:w-1/2 aspect-[16/10] overflow-hidden bg-muted border-r lg:border-r-0 lg:border-b-0 border-border relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    AY {item.year}
                  </span>
                </div>

                <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">Featured Games & Activities</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-bold bg-muted text-foreground px-3 py-1.5 rounded-lg border border-border/60">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
