import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Building2 } from "lucide-react";

export default function Placements() {
  const topCompanies = [
    { name: "Carwala.com", package: "9 LPA" },
    { name: "Josh Technologies", package: "8.70 LPA" },
    { name: "Zeus Learning", package: "7.5 LPA" },
    { name: "Bank of America", package: "6.45 LPA" },
    { name: "Princeton Blue", package: "6.25 LPA" },
    { name: "BNP Paribas", package: "6 LPA" },
    { name: "CRM Next", package: "4.5 LPA" },
    { name: "Finovate", package: "4.5 LPA" },
    { name: "V2S Technology", package: "4.20 LPA" },
    { name: "IDBI Intech", package: "3.25-4.5 LPA" }
  ];

  const stats = [
    {
      icon: Building2,
      number: "47+",
      label: "Companies Visited",
      description: "For Batch 2022-2024"
    },
    {
      icon: TrendingUp,
      number: "9 LPA",
      label: "Highest Package",
      description: "Carwala.com"
    },
    {
      icon: Award,
      number: "4-4.5 LPA",
      label: "Average CTC",
      description: "Industry Standard"
    },
    {
      icon: Users,
      number: "50K",
      label: "Highest Stipend",
      description: "Per Month"
    }
  ];

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Placement Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students are placed in top companies with excellent packages, reflecting the quality of education and industry readiness.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Top Companies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Top 10 Recruiting Companies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {topCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="text-lg font-bold text-gray-900 mb-2">{company.name}</div>
                <div className="text-2xl font-bold text-primary">{company.package}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-8">Our Placement Partners</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Placeholder for company logos */}
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <Building2 className="h-8 w-8 text-gray-400" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
