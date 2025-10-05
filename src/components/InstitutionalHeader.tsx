import { motion } from "framer-motion";
import { Award, Building2, MapPin } from "lucide-react";

export default function InstitutionalHeader() {
  const jubileeBadgeUrl =
    "https://harmless-tapir-303.convex.cloud/api/storage/6bedc097-1402-432d-9808-4e4334ac9219";

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-r from-primary/5 via-white to-accent/5 border-b border-gray-200 py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Institution Name Row */}
        <div className="flex items-center justify-between mb-2">
          {/* Left: BVIMIT Logo */}
          <img
            src="https://harmless-tapir-303.convex.cloud/api/storage/3bc7ee19-7c8c-4de2-ad0e-336720ea334c"
            alt="BVIMIT Logo"
            className="h-32 w-32 md:h-40 md:w-40 object-contain"
          />

          {/* Center: Institution Name */}
          <div className="flex-1 text-center px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Bharati Vidyapeeth's
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              Institute of Management & Information Technology
            </h2>
          </div>

          {/* Right: 50 Years Badge */}
          <img
            src={jubileeBadgeUrl}
            alt="Bharati Vidyapeeth - Celebrating 50 and Beyond"
            title="Celebrating 50 and Beyond"
            className="h-32 w-auto md:h-40 md:w-auto object-contain opacity-90 hover:opacity-100 transition-opacity hidden md:block"
          />
        </div>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-2 text-primary" />
          <p className="text-sm md:text-base">Navi Mumbai, Mumbai</p>
        </div>

        {/* Accreditation & Affiliation Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Award className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs font-medium text-gray-700">
              AICTE Approved
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Building2 className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-xs font-medium text-gray-700">
              University of Mumbai Affiliated
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <Award className="h-3.5 w-3.5 text-purple-600" />
            <span className="text-xs font-medium text-gray-700">
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