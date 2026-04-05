"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4"
            >
              Get In Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            >
              Connect With <span className="text-primary italic">BVIMIT</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-bold text-lg max-w-md md:text-right"
          >
            Reach out to our admissions and administrative offices for any inquiries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: "Admissions Hub",
                  details: "022 2757 1074 / 2757 2433",
                  sub: "Mon - Sat, 9:00 AM - 5:00 PM"
                },
                {
                  icon: Mail,
                  title: "Official Email",
                  details: "bvimit@bharatividyapeeth.edu",
                  sub: "For general inquiries"
                },
                {
                  icon: MapPin,
                  title: "Campus Address",
                  details: "Sector 8, C.B.D. Belapur",
                  sub: "Navi Mumbai, 400614"
                },
                {
                  icon: MessageSquare,
                  title: "Alumni Relations",
                  details: "alumni.bvimit@edu.in",
                  sub: "Connect with graduates"
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 bg-card border border-border/50 rounded-[2rem] hover:border-primary/30 transition-all duration-300">
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-black text-foreground mb-1 tracking-tight">{item.title}</h4>
                  <p className="text-sm font-bold text-primary mb-2 line-clamp-1">{item.details}</p>
                  <p className="text-xs text-muted-foreground font-bold">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Quick Support Card */}
            <div className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 flex items-center gap-8">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white dark:border-card shadow-xl shrink-0">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-black text-foreground mb-1">Administrative Hours</h4>
                <p className="text-muted-foreground font-bold leading-relaxed">
                  Our office is open from Monday to Saturday for on-campus visits and document verification.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-10 md:p-12 rounded-[3rem] border border-border/50 shadow-2xl shadow-primary/5"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-black text-foreground mb-2 tracking-tight">Inquiry Portal</h3>
              <p className="text-muted-foreground font-bold">Please fill in your details and we will get back to you.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold placeholder:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold placeholder:opacity-50"
                    placeholder="name@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Subject</label>
                <select className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold">
                  <option>Admissions Inquiry</option>
                  <option>Transcript / Documentation</option>
                  <option>Placements & HR</option>
                  <option>General Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold placeholder:opacity-50 resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <Button size="lg" className="w-full rounded-2xl h-16 font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 group">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}