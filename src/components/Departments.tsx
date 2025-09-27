import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Departments() {
  const departments = [
    {
      icon: Code,
      title: "Master of Computer Applications (MCA)",
      description: "Comprehensive 2-year program focusing on software development, system analysis, and IT management.",
      features: ["NBA Accredited", "Industry-Aligned Curriculum", "Practical Training"],
      color: "blue"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Specialized courses in big data, machine learning, and business intelligence.",
      features: ["Hands-on Projects", "Industry Mentorship", "Research Opportunities"],
      color: "green"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Modern web development using latest frameworks and technologies.",
      features: ["Full-Stack Development", "Cloud Computing", "DevOps Practices"],
      color: "purple"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile application development.",
      features: ["iOS & Android", "React Native", "Flutter"],
      color: "orange"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "AI and machine learning with practical applications in various domains.",
      features: ["Deep Learning", "Computer Vision", "NLP"],
      color: "red"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Information security, ethical hacking, and digital forensics.",
      features: ["Network Security", "Penetration Testing", "Compliance"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-50 border-blue-200",
      green: "text-green-600 bg-green-50 border-green-200",
      purple: "text-purple-600 bg-purple-50 border-purple-200",
      orange: "text-orange-600 bg-orange-50 border-orange-200",
      red: "text-red-600 bg-red-50 border-red-200",
      indigo: "text-indigo-600 bg-indigo-50 border-indigo-200"
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
            Departments & Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to meet the evolving demands of the IT industry.
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
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
