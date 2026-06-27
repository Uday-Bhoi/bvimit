"use client";

import { motion } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { BookOpen, MapPin, Heart, ShieldCheck } from "lucide-react";

export default function KhushiyoKiPathshalaPage() {
  const clusters = [
    { name: "Khandeshwar Cluster", info: "Mota Khanda Gaon (beside Alliance Construction)" },
    { name: "New Panvel Cluster", info: "Near Shreyas Hospital (opposite Bank of India)" },
    { name: "Panvel Cluster", info: "Opposite Garden Hotel (behind Simran Motors)" },
    { name: "Kharghar Cluster", info: "Dhamole Village" },
    { name: "Nerul Cluster", info: "Local Nerul Sector points" },
    { name: "Dadar Cluster", info: "Central Mumbai street outreach points" },
    { name: "Kalyan Cluster", info: "Station surround slum outreach points" },
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
              Khushiyo Ki Pathshala
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Food distribution and educational outreach program teaching and supporting children living in urban slum clusters.
            </p>
          </div>
        </section>

        {/* Overview & Image */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck className="h-3.5 w-3.5" /> Social Impact Campaign
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                  Food Distribution & Slum Schooling
                </h2>
                <div className="text-muted-foreground text-sm space-y-4 leading-relaxed">
                  <p>
                    Organized in collaboration with the **Robin Hood Army NGO** on **10th October 2021**, *Khushiyo Ki Pathshala* aimed to create social responsibility awareness among our MCA students.
                  </p>
                  <p>
                    BVIMIT volunteers traveled directly to local under-resourced settlements. They spent their Sunday distributing nutrition packets and conducting interactive basic educational classes for children.
                  </p>
                </div>

                <div className="flex gap-4 items-center bg-primary/5 p-6 rounded-3xl border border-primary/10">
                  <BookOpen className="h-10 w-10 text-primary shrink-0" />
                  <div>
                    <h4 className="text-base font-black text-foreground">Empowering through Knowledge</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Helping kids build basic reading, arithmetic, and hygiene habits while spreading happiness.
                    </p>
                  </div>
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
                    src="/legacy/images/ISR.PNG"
                    alt="Khushiyo Ki Pathshala Volunteer Campaign"
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="p-6 bg-muted/20 border-t border-border">
                    <p className="text-xs text-muted-foreground font-bold text-center">
                      BVIMIT MCA Volunteers teaching children under Robin Hood Army NGO
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Active Locations / Clusters */}
        <section className="py-16 bg-muted/10 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-foreground mb-2">Campaign Outreach Clusters</h2>
              <p className="text-muted-foreground font-medium text-sm">
                Where our student volunteers actively worked to distribute food and teach kids.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clusters.map((cluster, i) => (
                <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-3xl shadow-sm hover:border-primary/30 transition-all">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-foreground mb-1">{cluster.name}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{cluster.info}</p>
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
