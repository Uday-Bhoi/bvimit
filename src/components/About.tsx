import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              About Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About BVIMIT
          </h2>
          <p className="text-base text-gray-600 max-w-6xl mx-auto leading-relaxed text-justify">
            Bharati Vidyapeeth is an institution planted in the year 1964 by our founder Dr. Patangrao Kadam. 
            During the last 55 years, Bharati Vidyapeeth has made astonishing strides in the field of education, 
            particularly, higher and professional education. Today Bharati Vidyapeeth conducts more than 156 educational 
            units of various kinds, right from pre-primary schools to postgraduate institutions and a full fledged 
            professional university (BVDU). At Bharati Vidyapeeth, our objective has been to contribute to intellectual 
            awaking and social transformation in different spheres such as education, economic, social & cultural fields 
            in India and more particularly in Maharashtra. Information Technology has invaded our society in a very 
            significant manner. Hence to keep pace with the modern times, the year 2002 marked the establishment of 
            Bharati Vidyapeeth's Institute of Management & Information Technology. At BVIMIT MCA course, we impart 
            I.T. Management education to meet the demand of the I.T. Industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Founder's Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-lg border border-blue-100 backdrop-blur-sm flex-1 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Patangrao Kadam</h3>
                <p className="text-sm text-primary font-semibold">Founder, Bharati Vidyapeeth Deemed University</p>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed flex-1">
                <p>
                  I am indeed happy to welcome you to MCA Bharati Vidyapeeth's Institute of Management & Information 
                  Technology, Navi Mumbai, which has a large pool of new executive talent waiting to step into the 
                  Corporate World.
                </p>
                <p>
                  I established Bharati Vidyapeeth in 1964 with a realization that all-round social transformation 
                  can be brought about through the spread of education. During the last 55 years, we have established 
                  more than 156 educational units of various kinds, right from Pre-Primary School to a full-fledged 
                  University.
                </p>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Read more...
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Founder's Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col"
          >
            <motion.div 
              className="relative group flex-1 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b"
                alt="Dr. Patangrao Kadam - Founder, Bharati Vidyapeeth"
                className="relative w-auto h-full max-h-full object-contain rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}