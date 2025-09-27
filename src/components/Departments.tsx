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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 ${getColorClasses(dept.color)}`}>
                <dept.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {dept.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {dept.description}
              </p>

              <div className="space-y-2 mb-6">
                {dept.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              <a href="#contact">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}