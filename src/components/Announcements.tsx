import { motion } from "framer-motion";
import { Bell, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Announcements() {
  const announcements = [
    {
      title: "MCA First Year Fee Structure for Academic year 2025-2026!",
      date: "January 2025",
      type: "Fee Structure",
      urgent: true,
      link: "https://bvimit.co.in/bvimit/pdf/Fee%20Structure%201%20st%20Year%20Academic%202025-2026.pdf"
    },
    {
      title: "MCA Brochure 2025-26 Available",
      date: "January 2025",
      type: "Information",
      urgent: false,
      link: "https://bvimit.co.in/bvimit/pdf/MCABrochure2025.pdf"
    },
    {
      title: "Scholarships Details 2025-2026",
      date: "January 2025",
      type: "Scholarship",
      urgent: false,
      link: "https://bvimit.co.in/bvimit/pdf/Documents%20for%20Scholarship.pdf"
    },
    {
      title: "Industrial Visit to RedHat Bengaluru",
      date: "December 2024",
      type: "Event",
      urgent: false,
      link: "#"
    },
    {
      title: "International Conference ICET 2024",
      date: "June 2024",
      type: "Conference",
      urgent: false,
      link: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Admission": "bg-red-100 text-red-800",
      "Fee Structure": "bg-blue-100 text-blue-800",
      "Information": "bg-green-100 text-green-800",
      "Scholarship": "bg-purple-100 text-purple-800",
      "Event": "bg-orange-100 text-orange-800",
      "Conference": "bg-indigo-100 text-indigo-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="announcements" className="py-24 bg-background transition-colors duration-300 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4"
            >
              Institutional Pulse
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            >
              Latest <span className="text-primary italic">Updates</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <Button variant="outline" className="rounded-full font-bold">Archives</Button>
            <Button className="rounded-full font-bold shadow-lg shadow-primary/20">Newsletter</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <motion.a
              key={index}
              href={announcement.link}
              target={announcement.link.startsWith('http') || announcement.link.endsWith('.pdf') ? "_blank" : undefined}
              rel={announcement.link.startsWith('http') || announcement.link.endsWith('.pdf') ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card hover:bg-muted/50 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 block relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${getTypeColor(announcement.type)} bg-opacity-20`}>
                  {announcement.type}
                </span>
                {announcement.urgent && (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter">New</span>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-6 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                {announcement.title}
              </h3>

              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center text-muted-foreground text-xs font-bold">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary" />
                  {announcement.date}
                </div>
                <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="px-8 py-3">
            View All Announcements
          </Button>
        </motion.div>
      </div>
    </section>
  );
}