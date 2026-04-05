"use client";

import { motion } from "framer-motion";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Bell } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Data Collection",
      content: "We collect only the essential information needed to provide academic and administrative services. This includes personal identification data provided through admission forms, inquiry portals, and portal accounts."
    },
    {
      icon: Lock,
      title: "Information Security",
      content: "BVIMIT employs industry-standard SSL encryption and firewall protocols to protect all student and institutional data. Access to sensitive information is strictly restricted to authorized administrative personnel."
    },
    {
      icon: Shield,
      title: "Third-Party Disclosure",
      content: "We do not sell, trade, or transfer your personal information to outside parties except for essential academic affiliations like the University of Mumbai, DTE Maharashtra, and official recruitment partners."
    },
    {
      icon: Bell,
      title: "Policy Updates",
      content: "This privacy policy is subject to updates based on regulatory changes. Students and stakeholders will be notified of significant changes via the official announcement portal."
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
              Privacy <span className="text-primary italic">Policy</span>
            </h1>
            <p className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-[10px]">
              Last Updated: April 2024
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-10 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-primary/10 text-primary rounded-xl"><section.icon className="w-5 h-5" /></div>
                   <h2 className="text-2xl font-black tracking-tight">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="mt-20 p-8 rounded-3xl bg-muted/30 border border-border/50 text-center"
          >
             <p className="text-sm font-bold text-muted-foreground">
               For privacy-related inquiries, please contact our Compliance Officer at: <br />
               <span className="text-primary mt-2 inline-block">compliance@bvimit.co.in</span>
             </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
