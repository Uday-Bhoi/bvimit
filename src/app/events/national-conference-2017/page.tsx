"use client";

import SiteShell from "@/components/layout/SiteShell";
import { motion } from "framer-motion";
import { Calendar, Award, FileText, Globe, MapPin, Users, Download } from "lucide-react";

export default function NCIT2017Page() {
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
              Legacy Conference
            </p>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
              National Conference on Emerging Trends: Innovations & Challenges in IT (NCIT 2017)
            </h1>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>29th & 30th June 2017</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>BVIMIT, Navi Mumbai</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Conference Report Detail */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-[2rem] p-8 md:p-10 shadow-sm space-y-6"
              >
                <h2 className="text-2xl font-black text-foreground tracking-tight">Conference Report</h2>
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted border border-border">
                  <img
                    src="/legacy/images/events/national1.jpg"
                    alt="NCIT 2017 Inauguration"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                    }}
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  The conference was inaugurated by Padmashree Dr. Sharad P Kale, Head, Technology Transfer and Collaboration Division, Bhabha Atomic Research Centre. Eminent speakers from the corporate sector were Mr. Vishal Mehta, Vice President, Center of Excellence Strategy & Architecture, Reliance Industries, Mr. Sampat Dawakhar, Deputy Collector, Govt. of Maharashtra, Dr. Anala Pandit, HOD, VJTI, Matunga Mumbai, and Mr. Raj Varshney, Founder and CEO, e2Serv Technologies. 
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  Faculty and student members from various parts of Maharashtra participated, presenting their papers. A total of 37 papers were presented in the two-day National Conference. The paper presentations were held in concurrent sessions shared by an experienced panel of experts like Dr. Munir Sayyad, Reliance Technology Innovations ABS, Reliance Communication, Mr. Rajnish Jha, Founder & CEO, RVR Educatech, and Mr. Pramod Ambekar, Treasurer, CSI Mumbai. On the concluding session of the conference, Dr. D.Y. Patil, Director BVIMIT, gave the valedictory address and distributed the certificates to the paper presenters.
                </p>
              </motion.div>
            </div>

            {/* Sidebar for Proceedings & Downloads */}
            <div className="space-y-6 lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border rounded-[2rem] p-8 shadow-sm space-y-6"
              >
                <h3 className="text-lg font-black text-foreground">NCIT 2017 Proceedings</h3>
                <div className="border border-border/80 rounded-2xl overflow-hidden bg-muted/20 p-4 flex flex-col items-center">
                  <div className="aspect-[3/4] w-36 overflow-hidden rounded-xl bg-card border border-border shadow-sm mb-4 relative flex items-center justify-center">
                    <img 
                      src="/legacy/pdf/Thumbnails/ncit2017p.PNG" 
                      alt="NCIT 2017 Cover" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <FileText className="h-10 w-10 text-muted-foreground absolute" />
                  </div>
                  <p className="text-xs font-black text-center text-foreground mb-4">Official Registered Proceedings Volume</p>
                  <a 
                    href="/legacy/pdfs/NCIT2017_Proceedings1.pdf" 
                    target="_blank"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/95 transition-all shadow"
                  >
                    <Download className="h-4 w-4" /> Download PDF
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
