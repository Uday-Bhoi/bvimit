"use client";

import { use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, GraduationCap, Briefcase, Mail, 
  Download, Award, BookOpen, Globe, Microscope, Book
} from "lucide-react";
import Link from "next/link";
import facultyData from "@/data/faculty.json";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FacultyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const member = facultyData.find(f => f.id === resolvedParams.id);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-8 bg-background">
        <h2 className="text-4xl font-black text-foreground mb-4 tracking-tighter">Faculty Member Not Found</h2>
        <p className="text-muted-foreground font-medium mb-10">The profile you are looking for has been moved or updated.</p>
        <Link href="/faculty" className="px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-full shadow-2xl">
          Back to Faculty Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <InstitutionalHeader />
      <Navbar />

      <main>
        {/* Dynamic Profile Header Section */}
        <section className="relative py-24 md:py-32 bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] -mr-96 -mt-96" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeIn} className="inline-block mb-10">
               <Link href="/faculty" className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-[10px] hover:translate-x-2 transition-transform">
                  <ArrowLeft className="w-4 h-4" /> Faculty Directory
               </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <motion.div 
                 {...fadeIn} 
                 transition={{ delay: 0.1 }}
                 className="lg:col-span-4 relative group"
               >
                  <div className="absolute inset-0 bg-primary/20 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                  <div className="h-[480px] w-full rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20">
                     <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" 
                     />
                  </div>
               </motion.div>

               <motion.div 
                 {...fadeIn}
                 transition={{ delay: 0.2 }}
                 className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left"
               >
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
                     {member.name.split(' ')[0]} <span className="text-primary italic">{member.name.split(' ').slice(1).join(' ')}</span>
                  </h1>
                  <p className="text-gray-400 text-xl font-bold uppercase tracking-widest border-l-4 border-primary pl-6 py-2 mb-10 bg-white/5 inline-block">
                     {member.designation}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 mt-4 border-y border-white/10 py-10 w-full lg:w-auto px-6 lg:px-0">
                     <div className="flex flex-col items-center lg:items-start">
                        <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-2 opacity-60">Academic Rank</span>
                        <p className="text-white font-black text-lg">{member.designation.split(' ')[0]}</p>
                     </div>
                     <div className="flex flex-col items-center lg:items-start">
                        <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-2 opacity-60">Institution Tenure</span>
                        <p className="text-white font-black text-lg">{member.experience}</p>
                     </div>
                     <div className="flex flex-col items-center lg:items-start">
                        <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-2 opacity-60">Status</span>
                        <div className="flex items-center gap-2 text-green-400 font-bold text-lg"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Active</div>
                     </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-6 pt-4">
                     <a href={member.resume} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-primary text-white font-black uppercase text-[10px] tracking-[0.25em] rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                        <Download className="w-4 h-4" /> View Formal Resume
                     </a>
                     <a href={`mailto:${member.email}`} className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black uppercase text-[10px] tracking-[0.25em] rounded-full hover:bg-white/20 transition-all flex items-center gap-3">
                        <Mail className="w-4 h-4" /> Academic Contact
                     </a>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Profile Sections */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Core Info */}
              <div className="lg:col-span-4 space-y-12">
                 {/* Qualification Card */}
                 <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-card p-10 rounded-[3rem] border border-border/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-primary opacity-5 group-hover:opacity-10 transition-opacity"><GraduationCap className="w-32 h-32" /></div>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="p-3 bg-primary/10 text-primary rounded-xl"><GraduationCap className="w-5 h-5" /></div>
                       <h3 className="text-xl font-black text-foreground tracking-tight">Qualifications</h3>
                    </div>
                    <p className="text-muted-foreground font-black text-sm uppercase tracking-widest leading-loose relative z-10">
                       {member.qualification}
                    </p>
                 </motion.div>

                 {/* Focus & Experience Card */}
                 <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-card p-10 rounded-[3rem] border border-border/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-primary opacity-5 group-hover:opacity-10 transition-opacity"><Briefcase className="w-32 h-32" /></div>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="p-3 bg-primary/10 text-primary rounded-xl"><Award className="w-5 h-5" /></div>
                       <h3 className="text-xl font-black text-foreground tracking-tight">Institutional Impact</h3>
                    </div>
                    <div className="space-y-4 relative z-10">
                       <div className="p-4 bg-muted/50 rounded-2xl">
                          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Total Experience</p>
                          <p className="text-lg font-black text-foreground">{member.experience}</p>
                       </div>
                       <p className="text-muted-foreground text-sm font-medium leading-relaxed italic border-l-2 border-primary/20 pl-4">
                          Committed to delivering world-class IT education and mentoring the next generation of software architects.
                       </p>
                    </div>
                 </motion.div>
              </div>

              {/* Right Column: Research & Expertise */}
              <div className="lg:col-span-8 space-y-12">
                 <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="bg-card p-12 rounded-[3.5rem] border border-border/50 shadow-sm">
                    <div className="flex items-center justify-between mb-12 border-b border-border/50 pb-8">
                       <div className="flex items-center gap-6">
                          <div className="p-4 bg-primary/10 text-primary rounded-3xl"><Microscope className="w-8 h-8" /></div>
                          <div>
                             <h3 className="text-2xl font-black text-foreground tracking-tighter">Core Academic Expertise</h3>
                             <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Research Focus & Competencies</p>
                          </div>
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                       {member.expertise.split(',').map((skill, i) => (
                         <div key={i} className="px-6 py-3 bg-muted/60 text-muted-foreground text-[11px] font-black uppercase tracking-[0.1em] rounded-full border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default">
                            {skill.trim()}
                         </div>
                       ))}
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-8 rounded-[2.5rem] border border-border/50 hover:border-primary/20 transition-all group">
                          <Book className="w-8 h-8 text-primary mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                          <h4 className="text-lg font-black text-foreground mb-3">Recent Publications</h4>
                          <p className="text-muted-foreground text-sm font-medium">Available in the official faculty research repository. Covers advanced computing trends.</p>
                       </div>
                       <div className="p-8 rounded-[2.5rem] border border-border/50 hover:border-primary/20 transition-all group">
                          <Globe className="w-8 h-8 text-primary mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                          <h4 className="text-lg font-black text-foreground mb-3">Industry Collaboration</h4>
                          <p className="text-muted-foreground text-sm font-medium">Leading consultancy projects in AI governance and institutional information systems.</p>
                       </div>
                    </div>
                 </motion.div>

                 {/* Administrative Responsibilities */}
                 <motion.div {...fadeIn} transition={{ delay: 0.6 }} className="bg-primary/5 p-12 rounded-[3.5rem] border border-primary/20 shadow-xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="flex items-center gap-6 mb-10 relative z-10">
                       <div className="p-4 bg-primary text-white rounded-3xl"><BookOpen className="w-8 h-8" /></div>
                       <h3 className="text-2xl font-black text-foreground tracking-tighter">Institutional Roles</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                       {[
                         { role: "Academic Dean", term: "2024 - Present" },
                         { role: "Board of Studies", term: "Appointed Member" },
                         { role: "Quality Cell", term: "Head of IQAC" }
                       ].map((r, i) => (
                         <div key={i} className="p-6 bg-white/80 dark:bg-black/20 backdrop-blur rounded-2xl border border-border/50">
                            <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{r.term}</p>
                            <p className="text-lg font-black text-foreground">{r.role}</p>
                         </div>
                       ))}
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
