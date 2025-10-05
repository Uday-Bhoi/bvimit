import { motion } from "framer-motion";
import { Award, Building2, MapPin } from "lucide-react";

export default function InstitutionalHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-r from-primary/5 via-white to-accent/5 border-b border-gray-200 py-6 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Institution Name */}
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Bharati Vidyapeeth's
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-3">
            Institute of Management & Information Technology
          </h2>
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <p className="text-base md:text-lg">Navi Mumbai, Mumbai</p>
          </div>
        </div>

        {/* Accreditation & Affiliation Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Award className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">
              AICTE Approved
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Building2 className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              University of Mumbai Affiliated
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Award className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">
              NBA Accredited till June 2023
            </span>
          </motion.div>
        </div>

        {/* DTE Code */}
        <div className="text-center">
          <p className="text-sm text-gray-600 font-medium">
            DTE Code: <span className="text-primary font-semibold">MC 3162</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
