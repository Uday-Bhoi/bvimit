"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Building2, Target, Briefcase, GraduationCap, Laptop, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PlacementsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: TrendingUp, number: "9 LPA", label: "Highest Package", desc: "Carwala.com" },
    { icon: Award, number: "4.5 LPA", label: "Average CTC", desc: "For Batch 2024" },
    { icon: Building2, number: "47+", label: "Recruiters", desc: "Active Network" },
    { icon: Users, number: "85%", label: "Placement Rate", desc: "Overall Batch" }
  ];

  const trainingActivities = [
    {
      title: "Soft Skills Training",
      desc: "Comprehensive modules on communication, personality development, and corporate etiquette.",
      icon: Lightbulb
    },
    {
      title: "Technical Excellence",
      desc: "Specialized workshops on Full-stack development, AI/ML, and Cloud Computing trends.",
      icon: Laptop
    },
    {
      title: "Internship Assistance",
      desc: "Mandatory semester-long internships with stipend support in reputed tech firms.",
      icon: Briefcase
    }
  ];

  const companyLogos = [
    "https://harmless-tapir-303.convex.cloud/api/storage/8355377a-f356-4a02-83dd-1cb6b4038f23",
    "https://harmless-tapir-303.convex.cloud/api/storage/635b8350-7422-44d6-9d35-5fb8fb02cafd",
    "https://harmless-tapir-303.convex.cloud/api/storage/34c864a0-d4be-4831-afa6-a9726103811b",
    "https://harmless-tapir-303.convex.cloud/api/storage/3dfd0b6f-c953-4deb-b03e-34bccc342831",
    "https://harmless-tapir-303.convex.cloud/api/storage/6235a095-3a80-45fe-8a9c-d82fe1cb9b5e",
    "https://harmless-tapir-303.convex.cloud/api/storage/72eeee92-6aed-4f2f-84ec-cbd9bd144d12",
    "https://harmless-tapir-303.convex.cloud/api/storage/5ce9ae7d-4cb3-4ac3-b2c4-78a1edeb45ab",
    "https://harmless-tapir-303.convex.cloud/api/storage/7b6e455e-b116-4367-9ae4-cd4ba129aec9",
    "https://harmless-tapir-303.convex.cloud/api/storage/b05f2886-923a-40ab-bf22-5e72229459fe",
    "https://harmless-tapir-303.convex.cloud/api/storage/2d967117-5e83-4a26-b9b4-8724f35df734",
    "https://harmless-tapir-303.convex.cloud/api/storage/9b5c70b3-3ace-43e9-bc43-fafb9a4d0f88"
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstitutionalHeader />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-28 md:py-40 bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] -mr-64 -mt-64" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div {...fadeIn} className="max-w-3xl">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block">
                Professional Development
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Global Training & <br />
                <span className="text-primary italic">Placement Cell</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl">
                Bridging the gap between academic brilliance and industrial excellence. 
                Our dedicated cell ensures every student is corporate-ready from Day 1.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-4 bg-primary text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-2xl hover:scale-105 transition-all">
                  Contact Placement Officer
                </button>
                <button className="px-10 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/10 transition-all">
                  Placement Brochure 2024
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Stats */}
        <section className="py-24 bg-card/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
               {stats.map((stat, i) => (
                 <motion.div 
                    key={i} 
                    {...fadeIn} 
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center md:items-start"
                 >
                    <div className="p-3 bg-primary/10 text-primary rounded-xl mb-6">
                       <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-4xl font-black text-foreground mb-1 tracking-tighter">{stat.number}</div>
                    <div className="text-xs font-black text-primary uppercase tracking-widest mb-3">{stat.label}</div>
                    <p className="text-muted-foreground text-sm font-bold">{stat.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Placement Overview */}
        <section className="py-32">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <motion.div {...fadeIn}>
                    <div className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-4">The Cell's Perspective</div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter mb-8 leading-tight">
                       Empowering <span className="text-primary italic">Careers</span> Through Industrial Synergy
                    </h2>
                    <div className="space-y-6 text-muted-foreground font-medium leading-relaxed text-lg">
                       <p>
                          Our Training and Placement Cell acts as a strategic bridge between the student community 
                          and the corporate world. We go beyond mere recruitment by focusing on long-term 
                          employability.
                       </p>
                       <p>
                          BVIMIT has maintained a legacy of excellence, attracting top-tier engineering 
                          and consulting firms through our rigorous academic standards and industry-aligned 
                          training modules.
                       </p>
                    </div>
                    
                    <div className="mt-12 space-y-4">
                       {[
                         "Dedicated Placement Officer and Student Coordinators",
                         "Strong Alumni Network for Mentorship",
                         "State-of-the-Art GD/PI Rooms for Recruitment Drives"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 font-bold text-foreground text-sm">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            {item}
                         </div>
                       ))}
                    </div>
                 </motion.div>

                 <motion.div 
                    {...fadeIn} 
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 gap-6"
                 >
                    <div className="space-y-6">
                       <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl skew-y-1">
                          <img src="https://harmless-tapir-303.convex.cloud/api/storage/915a7703-9e48-4395-8bc6-6799f972740a" alt="Training" className="w-full h-full object-cover" />
                       </div>
                       <div className="bg-primary p-8 rounded-[2.5rem] text-white">
                          <Target className="w-10 h-10 mb-4 opacity-50" />
                          <div className="text-2xl font-black leading-tight">100+ Hiring Partners</div>
                       </div>
                    </div>
                    <div className="space-y-6 pt-12">
                       <div className="bg-[#111827] p-8 rounded-[2.5rem] text-white">
                          <GraduationCap className="w-10 h-10 mb-4 text-primary opacity-50" />
                          <div className="text-2xl font-black leading-tight">Mock Interview Expert Panels</div>
                       </div>
                       <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl -skew-y-1">
                          <img src="https://harmless-tapir-303.convex.cloud/api/storage/8355377a-f356-4a02-83dd-1cb6b4038f23" alt="Industry" className="w-full h-full object-cover" />
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Training Modules */}
        <section className="py-32 bg-muted/30">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeIn} className="text-center mb-20">
                 <h2 className="text-4xl font-black text-foreground tracking-tighter mb-4">Training & <span className="text-primary italic">Development</span></h2>
                 <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px]">Preparing Students for the Global Stage</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {trainingActivities.map((activity, i) => (
                   <motion.div
                     key={i}
                     {...fadeIn}
                     transition={{ delay: i * 0.1 }}
                     className="bg-card p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/40 transition-all duration-300 group"
                   >
                     <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <activity.icon className="w-8 h-8" />
                     </div>
                     <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">{activity.title}</h3>
                     <p className="text-muted-foreground font-medium leading-relaxed">{activity.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Placement Process */}
        <section className="py-32 bg-[#111827] text-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeIn} className="text-center mb-24">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">The Placement <span className="text-primary italic">Cycle</span></h2>
                 <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">A Systematic Path to Your Dream Job</p>
              </motion.div>

              <div className="space-y-12 max-w-4xl mx-auto">
                 {[
                   { step: "A", title: "Registration & Profile Mapping", desc: "Students register with the cell and create standardized technical profiles." },
                   { step: "B", title: "Pre-Placement Training", desc: "Intensive 4-week bootcamp focusing on aptitude and coding skills." },
                   { step: "C", title: "Campus Recruitment Drive", desc: "Companies visit for multi-stage selection: Test → GD → PI." },
                   { step: "D", title: "Offer Acceptance & Career Launch", desc: "Final verification and formal joining procedures with recruiters." }
                 ].map((item, i) => (
                   <motion.div 
                    key={i} 
                    {...fadeIn}
                    className="flex gap-8 group"
                   >
                      <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center font-black text-primary group-hover:border-primary transition-all">
                         {item.step}
                      </div>
                      <div className="pt-2">
                         <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                         <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Comprehensive Recruiters List */}
        <section className="py-32">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div {...fadeIn} className="text-center mb-24">
                 <h2 className="text-4xl font-black text-foreground tracking-tighter mb-4">Our Elite <span className="text-primary italic">Network</span></h2>
                 <p className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Where Our Students Excel</p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
                 {companyLogos.map((logo, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-card p-6 rounded-3xl border border-border/50 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                    >
                       <img src={logo} alt="Recruiter" className="max-h-10 w-auto object-contain" />
                    </motion.div>
                 ))}
                 {/* Fake logos for density if needed, or repeat */}
                 {companyLogos.slice(0, 5).map((logo, i) => (
                    <motion.div
                      key={`dup-${i}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-card p-6 rounded-3xl border border-border/50 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                    >
                       <img src={logo} alt="Recruiter" className="max-h-10 w-auto object-contain opacity-80" />
                    </motion.div>
                 ))}
              </div>
              
              <div className="mt-20 p-12 bg-primary/5 rounded-[3rem] border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div>
                    <h3 className="text-2xl font-black text-foreground mb-2">Invite BVIMIT for Campus Placement</h3>
                    <p className="text-muted-foreground font-medium">Join our network of 150+ satisfied hiring partners.</p>
                 </div>
                 <button className="px-10 py-4 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-full shadow-lg">
                    Employer Registration
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
