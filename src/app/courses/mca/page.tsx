"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, CheckCircle, FileText, BadgeCheck, Users, Landmark, Award } from "lucide-react";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MCAAdmissionsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const eligibility = [
    "Bachelor's degree in any discipline with at least 50% aggregate (45% for reserved categories).",
    "Mathematics as a subject at 10+2 level or Graduation level.",
    "Valid score in MAH-MCA-CET (Maharashtra MCA Common Entrance Test).",
    "Non-zero positive score in the entrance exam."
  ];

  const documents = [
    "SSC & HSC Marksheets/Passing Certificates",
    "Graduation All Semester Marksheets",
    "Degree Certificate / Provisional Degree",
    "MAH-MCA-CET Score Card",
    "Transfer Certificate (TC) / Leaving Certificate",
    "Migration Certificate (for other than Mumbai University)",
    "Domicile Certificate / Nationality Proof",
    "Caste Certificate & Validity (if applicable)",
    "EWS / SEBC Certificate (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <InstitutionalHeader />
      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="relative py-24 md:py-32 bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -ml-48 -mb-48" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 inline-block">
                Admission Portal 2024-25
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                Master of Computer <br />
                <span className="text-primary italic">Applications (MCA)</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12">
                Launch your career in software engineering and management with our 
                flagship two-year postgraduate program at Bharati Vidyapeeth's IMIT.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all">
                  Apply Online
                </button>
                <button className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Info Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, label: "Duration", value: "2 Years (Full-Time)" },
              { icon: Users, label: "Intake Capacity", value: "60 Students" },
              { icon: BadgeCheck, label: "Affiliation", value: "Mumbai University" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-card/90 backdrop-blur-3xl border border-border/50 p-8 rounded-3xl shadow-xl flex items-center gap-6"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-2xl">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-black mb-1">{stat.label}</p>
                  <p className="text-lg font-black text-foreground tracking-tight">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programme Overview */}
        <section id="overview" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 tracking-tighter">
                  Programme <span className="text-primary italic">Overview</span>
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-medium">
                  <p>
                    The MCA program at BVIMIT is meticulously designed to bridge the gap between 
                    academic theory and industrial practice. Our curriculum focuses on advanced 
                    programming, cloud computing, AI, and cybersecurity.
                  </p>
                  <p>
                    With state-of-the-art labs and a dedicated incubation center, we don't just 
                    teach software—we foster innovation. Our graduates are consistently placed 
                    in Tier-1 global technology firms.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-black text-primary mb-1 tracking-tighter">95%</div>
                    <p className="text-xs uppercase tracking-widest font-black text-muted-foreground">Placement Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-primary mb-1 tracking-tighter">ICT-Based</div>
                    <p className="text-xs uppercase tracking-widest font-black text-muted-foreground">Modern Classrooms</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                {...fadeIn} 
                transition={{ delay: 0.2 }}
                className="relative group lg:block hidden"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="relative h-[500px] rounded-[3rem] overflow-hidden border border-border/50">
                  <img 
                    src="https://harmless-tapir-303.convex.cloud/api/storage/915a7703-9e48-4395-8bc6-6799f972740a"
                    alt="Campus Facilities"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eligibility & Documents */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Eligibility */}
              <motion.div {...fadeIn} className="bg-card p-12 rounded-[2rem] border border-border/50 shadow-sm">
                <div className="mb-10 flex items-center gap-4">
                   <div className="p-3 bg-primary/10 text-primary rounded-xl"><GraduationCap className="w-6 h-6" /></div>
                   <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Eligibility Criteria</h3>
                </div>
                <ul className="space-y-6">
                  {eligibility.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1.5"><CheckCircle className="w-5 h-5 text-primary shrink-0" /></div>
                      <p className="text-muted-foreground font-medium leading-normal">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Documents */}
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-card p-12 rounded-[2rem] border border-border/50 shadow-sm">
                 <div className="mb-10 flex items-center gap-4">
                   <div className="p-3 bg-primary/10 text-primary rounded-xl"><FileText className="w-6 h-6" /></div>
                   <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">Required Documents</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                   {documents.map((doc, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">
                        <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                        {doc}
                     </div>
                   ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fees Structure - Standard Institutional Table */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="text-4xl font-black text-foreground tracking-tighter mb-4">Fees <span className="text-primary italic">Structure</span></h2>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Fee structure for Academic Year 2024-25</p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-card rounded-[2.5rem] border border-border border-b-4 overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-[#111827] text-white">
                        <th className="py-6 px-10 font-bold uppercase tracking-widest text-[11px]">Fee Particulars</th>
                        <th className="py-6 px-10 font-bold uppercase tracking-widest text-[11px] text-right">General (Open)</th>
                        <th className="py-6 px-10 font-bold uppercase tracking-widest text-[11px] text-right">OBC/EBC/SEBC</th>
                        <th className="py-6 px-10 font-bold uppercase tracking-widest text-[11px] text-right">SC/ST/VJNT/SBC</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-border/50 text-foreground">
                     {[
                       { name: "Tuition Fee", open: "₹ 1,32,000", obc: "₹ 66,000", reserved: "₹ 0" },
                       { name: "Development Fee", open: "₹ 18,000", obc: "₹ 18,000", reserved: "₹ 0" },
                       { name: "University Fees", open: "₹ 2,500", obc: "₹ 2,500", reserved: "₹ 2,500" },
                       { name: "Caution Money (Refundable)", open: "₹ 5,000", obc: "₹ 5,000", reserved: "₹ 5,000" }
                     ].map((row, i) => (
                       <tr key={i} className="hover:bg-muted/30 transition-colors">
                         <td className="py-6 px-10 font-bold text-sm">{row.name}</td>
                         <td className="py-6 px-10 text-right text-sm font-medium">{row.open}</td>
                         <td className="py-6 px-10 text-right text-sm font-medium">{row.obc}</td>
                         <td className="py-6 px-10 text-right text-sm font-medium text-primary">{row.reserved}</td>
                       </tr>
                     ))}
                     <tr className="bg-primary/5 font-black text-lg">
                        <td className="py-8 px-10 text-foreground uppercase tracking-tight">Estimated Total (Year 1)</td>
                        <td className="py-8 px-10 text-right text-foreground">₹ 1,57,500</td>
                        <td className="py-8 px-10 text-right text-foreground">₹ 91,500</td>
                        <td className="py-8 px-10 text-right text-foreground text-primary">₹ 7,500</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </motion.div>
            <p className="mt-8 text-muted-foreground text-xs italic text-center">
              * Fees are subject to change as per FRA (Fees Regulating Authority) guidelines.
            </p>
          </div>
        </section>

        {/* Admission Process Flow */}
        <section className="py-24 bg-[#111827] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <motion.div {...fadeIn} className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Four Steps to <span className="text-primary italic">Excellence</span></h2>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Simplified Admission Roadmap</p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                {/* Horizontal progress line for desktop */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block" />

                {[
                  { step: "01", icon: Calendar, title: "Register", desc: "Submit your online application through CET cell." },
                  { step: "02", icon: Landmark, title: "CAP Round", desc: "Participate in the Centralised Admission Process rounds." },
                  { step: "03", icon: CheckCircle, title: "Verification", desc: "Visit ARC for document verification and confirmation." },
                  { step: "04", icon: Award, title: "Reporting", desc: "Formally report to BVIMIT to confirm your MCA seat." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="relative z-10 flex flex-col items-center text-center group"
                  >
                    <div className="w-20 h-20 bg-primary/20 backdrop-blur-3xl border border-primary/40 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="text-primary font-black text-xs uppercase tracking-widest mb-3 opacity-60">Step {item.step}</div>
                    <h4 className="text-xl font-black mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[180px]">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-24">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <motion.div {...fadeIn} className="bg-primary backdrop-blur-xl p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none relative z-10">Start Your Journey with <br />BVIMIT Today.</h2>
                 <p className="text-white/80 font-bold mb-12 relative z-10">Connect with our admissions office for a personalized campus tour.</p>
                 <div className="flex flex-wrap justify-center gap-6 relative z-10">
                    <button className="px-12 py-5 bg-white text-primary font-black uppercase text-xs tracking-widest rounded-full shadow-xl hover:bg-gray-100 transition-all">Enquire Now</button>
                    <button className="px-12 py-5 bg-black text-white font-black uppercase text-xs tracking-widest rounded-full shadow-xl hover:bg-gray-900 transition-all">Direct Contact</button>
                 </div>
              </motion.div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
