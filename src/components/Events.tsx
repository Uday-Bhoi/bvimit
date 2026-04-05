"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Events() {
  const events = [
    {
      id: 1,
      image: "https://harmless-tapir-303.convex.cloud/api/storage/f8a5e636-a4eb-419e-ba2b-edb716eef88b",
      title: "Vision 2024: National IT Symposium",
      date: "15 MAR",
      category: "CONFERENCE",
      description: "A flagship technical symposium bringing together industry leaders and students to discuss the future of AI and Cloud Computing."
    },
    {
      id: 2,
      image: "https://harmless-tapir-303.convex.cloud/api/storage/869e5f5f-9a99-4c90-84c4-7be4bf89ed06", 
      title: "Full-Stack Development Workshop",
      date: "22 APR",
      category: "WORKSHOP",
      description: "Intensive 3-day workshop focusing on modern web architectures using Next.js, TypeScript, and distributed systems."
    },
    {
      id: 3,
      image: "https://harmless-tapir-303.convex.cloud/api/storage/03f7eaa4-cf08-4a47-8861-18f37039e935",
      title: "Institutional Research Retreat",
      date: "10 MAY",
      category: "ACADEMIC",
      description: "Annual gathering of researchers and faculty to present institutional progress and collaborative research opportunities."
    }
  ];

  return (
    <section id="events" className="py-24 bg-muted/30 transition-colors duration-300 relative overflow-hidden ring-1 ring-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-[10px] mb-4"
            >
              Campus Life & Culture
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tighter"
            >
              Institutional <span className="text-primary italic">Events</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-bold text-lg max-w-md md:text-right leading-snug"
          >
            Fostering a vibrant academic ecosystem through high-impact technical and cultural celebrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87"} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8] group-hover:brightness-100" 
                />
                <div className="absolute top-6 left-6 flex flex-col items-center justify-center bg-white dark:bg-card border border-border/10 p-3 rounded-2xl shadow-2xl min-w-[65px]">
                  <span className="text-xl font-black text-primary leading-none">{event.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-black uppercase text-muted-foreground mt-1">{event.date.split(' ')[1]}</span>
                </div>
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <span className="px-4 py-1.5 bg-primary/90 text-white text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-xl border border-white/20">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10">
                <h3 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors tracking-tight">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm font-bold leading-relaxed mb-8 line-clamp-3">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <div className="flex items-center text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Belapur Campus
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary font-black hover:bg-transparent p-0 group/btn h-auto">
                    Details <ExternalLink className="h-4 w-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Button size="lg" variant="outline" className="rounded-full px-12 border-primary/20 text-primary hover:bg-primary/5 font-black uppercase tracking-widest text-xs h-14">
            View Academic Calendar
          </Button>
        </motion.div>
      </div>
    </section>
  );
}