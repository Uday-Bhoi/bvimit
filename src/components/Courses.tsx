"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Microscope, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Courses() {
  const courses = [
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years Full-Time",
      description: "A professional postgraduate program focusing on advanced software development, computer applications, and management systems to prepare IT leaders.",
      icon: Code,
      highlights: ["AI & Machine Learning", "Cloud Computing", "Mobile App Dev", "Full-Stack Development"]
    },
    {
      title: "Doctor of Philosophy (Ph.D.)",
      duration: "3-5 Years Research",
      description: "Advanced research program in Computer Applications and Management, leading to specialized expertise and contribution to existing knowledge.",
      icon: GraduationCap,
      highlights: ["Data Science Research", "Cyber Security", "Blockchain Tech", "Information Systems"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-muted/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              <BookOpen className="h-4 w-4" />
              Academic Programs
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight"
            >
              Courses <span className="text-primary italic">Offered</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-md md:text-right"
          >
            Developing specialized skills and research capabilities to meet the evolving demands of the global IT industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card p-10 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <course.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{course.title}</h3>
                  <p className="text-primary font-bold text-sm tracking-wide">{course.duration}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {course.highlights.map((item, hIdx) => (
                  <span key={hIdx} className="px-4 py-1.5 bg-muted/50 text-muted-foreground rounded-full text-xs font-bold border border-border/30">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <Button size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all">
                  Course Details
                </Button>
                <Button variant="ghost" className="text-primary font-bold hover:bg-transparent">
                  Curriculum →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
