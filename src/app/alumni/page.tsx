"use client";

import { motion } from "framer-motion";
import { 
  Users, GraduationCap, Heart, Briefcase, Calendar, 
  MapPin, Globe, Star, ArrowRight, MessageCircle, 
  ShieldCheck, Award
} from "lucide-react";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function AlumniPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const notableAlumni = [
    {
      name: "Rajesh Mehta",
      role: "VP Engineering",
      company: "Microsoft",
      batch: "MCA 2008",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sneha Patil",
      role: "Sr. Data Scientist",
      company: "Google",
      batch: "MCA 2012",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Amit Sharma",
      role: "Solutions Architect",
      company: "Amazon Web Services",
      batch: "MCA 2010",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Priyanka Deshmukh",
      role: "Tech Lead",
      company: "Tata Consultancy Services",
      batch: "MCA 2015",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const engagementActivities = [
    {
      icon: Calendar,
      title: "Global Reunions",
      desc: "Annual meetups across major hubs like Mumbai, Pune, Bangalore, and San Francisco."
    },
    {
      icon: MessageCircle,
      title: "Mentorship Program",
      desc: "Alumni-to-student guidance sessions on career paths and industry expectations."
    },
    {
      icon: Briefcase,
      title: "Job Portal",
      desc: "Exclusive career opportunities shared by our alumni within their organizations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <InstitutionalHeader />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-28 md:py-44 bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -mr-64 -mt-64" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <motion.div {...fadeIn}>
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">
                  Institutional Legacy
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                  Our <span className="text-primary italic">Alumni</span> Network
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-12">
                  A global community of 2500+ professionals driving innovation in the technology sector. 
                  Once a student at BVIMIT, always a member of the Bharati Vidyapeeth family.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-12 py-5 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-full shadow-2xl hover:scale-105 transition-all">
                        Join the Network
                    </button>
                    <button className="px-12 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-white/10 transition-all">
                        Alumni Portal Login
                    </button>
                </div>
             </motion.div>
          </div>
        </section>

        {/* Global Overview */}
        <section className="py-24 border-b border-border/50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <motion.div {...fadeIn}>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter mb-8 leading-tight">
                       Cultivating a <span className="text-primary italic">Life-Long</span> Connection
                    </h2>
                    <div className="space-y-6 text-muted-foreground font-medium leading-relaxed text-lg">
                       <p>
                          Our graduates are our greatest ambassadors. The BVIMIT Alumni Association 
                          fosters mutual growth by creating a vibrant platform where veterans mentor 
                          new-age innovators.
                       </p>
                       <p>
                          Through organized reunions, industrial workshops, and executive lectures, 
                          we ensure that our legacy continues to inspire the leaders of tomorrow.
                       </p>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-2 gap-8">
                       <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                          <p className="text-3xl font-black text-primary mb-1">2002</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Foundation Year</p>
                       </div>
                       <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                          <p className="text-3xl font-black text-primary mb-1">50+</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Countries Present</p>
                       </div>
                    </div>
                 </motion.div>

                 <motion.div 
                    {...fadeIn} 
                    transition={{ delay: 0.2 }}
                    className="relative"
                 >
                    <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl skew-x-1 group">
                       <img 
                         src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" 
                         alt="Alumni Meet" 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                       />
                       <div className="absolute inset-0 bg-primary/20 transition-opacity opacity-40 group-hover:opacity-10" />
                    </div>
                    <div className="absolute -bottom-8 -left-8 bg-[#111827] p-10 rounded-[2.5rem] text-white shadow-2xl border border-white/10 hidden md:block">
                       <Globe className="w-10 h-10 mb-4 text-primary" />
                       <div className="text-2xl font-black leading-tight text-primary">Regional <br /> chapters</div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Notable Alumni Grid */}
        <section className="py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <motion.div {...fadeIn} className="text-center mb-24">
                <h2 className="text-4xl font-black text-foreground tracking-tighter mb-4">Notable <span className="text-primary italic">Ambassadors</span></h2>
                <p className="text-muted-foreground font-black uppercase tracking-[0.3em] text-[10px]">Alumni Excellence in Global Organizations</p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {notableAlumni.map((alumnus, i) => (
                  <motion.div
                    key={i}
                    {...fadeIn}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-card rounded-[2.5rem] border border-border/50 overflow-hidden shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="h-64 w-full bg-muted overflow-hidden">
                       <img 
                          src={alumnus.image} 
                          alt={alumnus.name} 
                          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" 
                       />
                    </div>
                    <div className="p-8">
                       <span className="text-primary font-black uppercase tracking-widest text-[9px] mb-2 inline-block h-4 overflow-hidden">{alumnus.batch}</span>
                       <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">{alumnus.name}</h3>
                       <p className="text-muted-foreground font-bold text-xs uppercase tracking-wide mb-6">{alumnus.role}</p>
                       <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-[10px]">
                             {alumnus.company[0]}
                          </div>
                          <span className="text-foreground font-black text-xs">{alumnus.company}</span>
                       </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Engagement Modules */}
        <section className="py-32 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {engagementActivities.map((act, i) => (
                    <motion.div 
                       key={i} 
                       {...fadeIn} 
                       transition={{ delay: i * 0.1 }}
                       className="p-12 rounded-[3.5rem] bg-card border border-border/50 hover:bg-primary/5 hover:border-primary/20 transition-all group"
                    >
                       <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <act.icon className="w-8 h-8" />
                       </div>
                       <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">{act.title}</h3>
                       <p className="text-muted-foreground font-medium leading-relaxed">{act.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
           <motion.div 
             {...fadeIn}
             className="max-w-5xl mx-auto bg-[#111827] rounded-[4rem] p-12 md:p-24 text-center border border-white/5 relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-primary/5 blur-[120px]" />
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter relative z-10">
                 Stay <span className="text-primary italic">Connected</span> with Us
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-16 relative z-10">
                 Update your professional profile and receive updates on alumni meets, 
                 exclusive job opportunities, and institute milestones.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                 <input 
                    type="email" 
                    placeholder="Enter your BVIMIT Alumni ID or Email" 
                    className="px-8 py-5 bg-white/5 border border-white/10 rounded-full text-white w-full max-w-md focus:outline-none focus:border-primary transition-colors" 
                 />
                 <button className="px-12 py-5 bg-primary text-white font-black uppercase text-[10px] tracking-widest rounded-full shadow-lg whitespace-nowrap">
                    Register Community
                 </button>
              </div>
              <div className="mt-16 flex justify-center gap-10 opacity-30">
                 <Globe className="w-6 h-6 text-white" />
                 <ShieldCheck className="w-6 h-6 text-white" />
                 <Award className="w-6 h-6 text-white" />
              </div>
           </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
