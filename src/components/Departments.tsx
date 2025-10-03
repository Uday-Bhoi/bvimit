import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Departments() {
  const departments = [
    {
      icon: Code,
      title: "Master of Computer Applications (MCA)",
      description:
        "A two-year, four-semester professional postgraduate program focused on software engineering, data structures & algorithms, databases, web & mobile technologies, AI/ML foundations, and project-based learning aligned with industry needs.",
      features: [
        "NBA Accredited",
        "Affiliated to University of Mumbai",
        "Intake: 120",
        "Duration: 2 Years (4 Semesters)",
        "Industry Internship & Capstone",
        "Strong Placement Support",
      ],
      color: "blue",
    },
  ];

  const previewImage =
    "https://harmless-tapir-303.convex.cloud/api/storage/02609857-55d3-4923-acc1-29de8afe7685";

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master of Computer Applications (MCA)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BVIMIT's flagship MCA program delivers an industry-aligned curriculum with hands-on learning,
            strong fundamentals, internships, and placements—preparing you for roles in software development,
            data engineering, QA, DevOps, and more.
          </p>
        </motion.div>

        {departments.map((dept, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative max-w-6xl mx-auto"
          >
            {/* Gradient border effect */}
            <div className="p-[1px] rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 p-6 md:p-10">
                  {/* Left: Visual preview with floating badge */}
                  <div className="relative w-full md:w-[42%]">
                    <div className="rounded-2xl overflow-hidden h-56 md:h-64">
                      <img
                        src={previewImage}
                        alt="MCA preview"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="absolute -top-3 -left-3 bg-primary text-white px-3 py-2 rounded-xl shadow-md flex items-center gap-2">
                      <dept.icon className="h-4 w-4" />
                      <span className="text-xs font-semibold">MCA</span>
                    </div>
                    {/* Subtle animated glow */}
                    <motion.div
                      aria-hidden
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: "0 0 0px rgba(0,0,0,0)",
                      }}
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="w-full md:flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                      {dept.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {dept.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {dept.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-800">
                          <span className="w-2 h-2 rounded-full bg-primary mr-3 group-hover:animate-pulse" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a href="#contact">
                      <Button
                        variant="outline"
                        className="group/button hover:bg-primary hover:text-white transition-colors"
                      >
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}