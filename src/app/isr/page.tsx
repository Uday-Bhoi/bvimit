"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { Users, Heart, Compass, ShieldCheck } from "lucide-react";

export default function ISRPage() {
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
              Outreach & Community
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Institute Social Responsibility (ISR)
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Developing civic values and social awareness in our MCA students through impactful community initiatives and volunteering.
            </p>
          </div>
        </section>

        {/* Overview cards */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Heart,
                  title: "Social Awareness",
                  desc: "Sensitizing students towards environmental degradation, poverty, and healthcare needs of underrepresented communities.",
                },
                {
                  icon: Users,
                  title: "Active Volunteering",
                  desc: "Partnering with esteemed NGOs and local groups to clean eco-habitats, distribute meals, and conduct teaching drives.",
                },
                {
                  icon: Compass,
                  title: "Civic Leadership",
                  desc: "Instilling responsibility and ethics in future IT professionals so they grow as compassionate leaders.",
                },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-card border border-border rounded-[2rem] hover:border-primary/30 transition-all">
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Event detail section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" /> Featured Activity
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                  Mangroves Cleanup & Food Drive
                </h2>
                <div className="text-muted-foreground text-sm space-y-4 leading-relaxed">
                  <p>
                    Bharati Vidyapeeth’s Institute of Management and Information Technology organized a major outreach campaign in collaboration with the **Robin Hood Army NGO** on **27th February 2022**.
                  </p>
                  <p>
                    MCA students volunteered across multiple clusters in Mumbai and Navi Mumbai—including New Panvel, Khandeshwar, Kharghar, Nerul, Dadar, and Thane. They worked on:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Volunteering with mangrove conservationists to clean vital swamp gardens and remove plastics.</li>
                    <li>Distributing family happiness kits and daily food packets to frontline sanitary workers.</li>
                    <li>Conducting children education camps in local slum clusters under the *Khushiyo Ki Pathshala* drive.</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6"
              >
                <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-sm">
                  <img
                    src="/legacy/images/isr22.PNG"
                    alt="Mangroves Cleanup Drive and Robin Hood Army Food Drive"
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="p-6 bg-muted/20 border-t border-border">
                    <p className="text-xs text-muted-foreground font-bold text-center">
                      BVIMIT Volunteers at Khandeshwar, Panvel, and Nerul Clusters
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
