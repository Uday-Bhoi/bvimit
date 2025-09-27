import { motion } from "framer-motion";
import { Bell, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Announcements() {
  const announcements = [
    {
      title: "MCA Online Application Form for 2025-26 Admission",
      date: "January 2025",
      type: "Admission",
      urgent: true
    },
    {
      title: "FRA Approved Fees for MCA 2025-26",
      date: "January 2025",
      type: "Fee Structure",
      urgent: true
    },
    {
      title: "MCA Brochure 2025-26 Available",
      date: "January 2025",
      type: "Information",
      urgent: false
    },
    {
      title: "Scholarships Details 2025-2026",
      date: "January 2025",
      type: "Scholarship",
      urgent: false
    },
    {
      title: "Industrial Visit to RedHat Bengaluru",
      date: "December 2024",
      type: "Event",
      urgent: false
    },
    {
      title: "International Conference ICET 2024",
      date: "June 2024",
      type: "Conference",
      urgent: false
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
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Announcements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, admissions, and events at BVIMIT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${announcement.urgent ? 'bg-red-100' : 'bg-blue-100'}`}>
                    <Bell className={`h-5 w-5 ${announcement.urgent ? 'text-red-600' : 'text-blue-600'}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(announcement.type)}`}>
                    {announcement.type}
                  </span>
                </div>
                {announcement.urgent && (
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                    NEW
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {announcement.title}
              </h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {announcement.date}
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  View Details
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
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
