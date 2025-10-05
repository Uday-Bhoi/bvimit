import { motion } from "framer-motion";
import { Award, Building2, MapPin } from "lucide-react";

export default function InstitutionalHeader() {
  const jubileeBadgeUrl =
    "https://harmless-tapir-303.convex.cloud/api/storage/034165cd-4008-45ba-87f2-3daa320467ce";

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-r from-primary/5 via-white to-accent/5 border-b border-gray-200 py-6 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Institution Name Row */}
        <div className="flex items-center justify-between mb-4">
          {/* Left: BVIMIT Logo + Institution Name */}
          <div className="flex items-center space-x-4">
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/be54b190-14b5-4580-83c2-bc6ed6f9df87"
              alt="BVIMIT Logo"
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Bharati Vidyapeeth's
              </h1>
              <h2 className="text-lg md:text-xl font-semibold text-primary">
                Institute of Management & Information Technology
              </h2>
            </div>
          </div>

          {/* Right: 50 Years Badge */}
          <img
            src={jubileeBadgeUrl}
            alt="Bharati Vidyapeeth - Celebrating 50 and Beyond"
            title="Celebrating 50 and Beyond"
            className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity hidden md:block"
          />
        </div>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-primary" />
          <p className="text-base md:text-lg">Navi Mumbai, Mumbai</p>
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