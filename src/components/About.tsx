import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4"
            >
              Institutional Profile
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            >
              Defining the <span className="text-primary italic">Standard</span> of IT Excellence
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-medium text-lg max-w-md md:text-right"
          >
            Since 2002, BVIMIT has served as a cornerstone of management and technical education in Navi Mumbai.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual Legacy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl bg-card">
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b"
                alt="Dr. Patangrao Kadam"
                className="w-full h-auto"
              />
              <div className="p-8 bg-card border-t border-border">
                <p className="text-xs font-black uppercase text-primary tracking-widest mb-1">Visionary Founder</p>
                <h4 className="text-2xl font-black text-foreground">Dr. Patangrao Kadam</h4>
                <p className="text-sm text-muted-foreground font-bold italic mt-1">Founder, Bharati Vidyapeeth</p>
              </div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="inline-block relative">
              <h3 className="text-3xl font-black text-foreground relative z-10 px-2 tracking-tight">Founder's Message</h3>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/10 -rotate-1 rounded-full z-0" />
            </div>
            
            <div className="space-y-8">
              <p className="text-xl font-bold text-foreground leading-[1.6] italic border-l-4 border-primary pl-8 py-2">
                "I am indeed happy to welcome you to Bharati Vidyapeeth's Institute of Management & Information 
                Technology, Navi Mumbai, where innovation meets tradition."
              </p>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                <p>
                  Established in 1964, Bharati Vidyapeeth has been a beacon of social transformation through quality 
                  education. Our Belapur campus, founded in 2002, continues this mission by fostering an 
                  environment that balances academic rigor with corporate relevance.
                </p>
                <p>
                  With a legacy spanning five decades and a network of 156 institutions, we are committed to 
                  empowering students to become leaders in the digital era.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-xl px-10 h-14 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20">
                Institutional History
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl px-10 h-14 font-black uppercase tracking-widest text-xs">
                Accreditations
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}