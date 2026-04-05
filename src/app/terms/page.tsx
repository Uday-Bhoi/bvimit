"use client";

import { motion } from "framer-motion";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, BookOpen, ShieldCheck, Flag } from "lucide-react";

export default function TermsOfServicePage() {
  const terms = [
    {
      icon: Scale,
      title: "Legal Use",
      content: "All information on the BVIMIT website is provided for academic and informational purposes only. Unauthorized use, reproduction, or distribution of this site's content is strictly prohibited under intellectual property laws."
    },
    {
      icon: BookOpen,
      title: "Academic Honor Code",
      content: "Users accessing institutional portals (e.g., student and faculty portals) must adhere to the high standard of ethical conduct and academic integrity as outlined in the student handbook."
    },
    {
      icon: ShieldCheck,
      title: "Limitation of Liability",
      content: "While BVIMIT strives for complete accuracy, we are not liable for any errors, omissions, or losses resulting from technical downtime or informational shifts as mandated by the University or Regulatory bodies."
    },
    {
      icon: Flag,
      title: "Governance",
      content: "These terms are governed by the laws of India and the jurisdiction of Mumbai Courts. Any disputes will be settled within the formal administrative framework of Bharati Vidyapeeth."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstitutionalHeader />
      <Navbar />

      <main className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-6">
              Terms of <span className="text-primary italic">Service</span>
            </h1>
            <p className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-[10px]">
              Last Updated: April 2024
            </p>
          </motion.div>

          <div className="space-y-12">
            {terms.map((term, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-10 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-primary/10 text-primary rounded-xl"><term.icon className="w-5 h-5" /></div>
                   <h2 className="text-2xl font-black tracking-tight">{term.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {term.content}
                </p>
              </motion.section>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="mt-20 p-8 rounded-3xl bg-primary text-white text-center shadow-xl"
          >
             <p className="text-sm font-black uppercase tracking-widest leading-loose">
               By continuing to use this website, you acknowledge that <br />
               you have read and agree to these terms.
             </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
