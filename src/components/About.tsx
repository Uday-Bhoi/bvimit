import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";

export default function About() {
  const missions = [
    "To prepare students for careers in the industry and pursue research in all branches of computing field through effective teaching learning process.",
    "To strengthen the industry institute interaction by providing up-to-date programs.",
    "To imbibe amongst the students ethical usage of technical knowledge beneficial to the society.",
    "To provide an environment that fosters a framework for promoting collaborative and multidisciplinary activities."
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About BVIMIT
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bharati Vidyapeeth is an institution planted in the year 1964 by our founder Dr. Patangrao Kadam. 
            During the last 55 years, Bharati Vidyapeeth has made astonishing strides in the field of education, 
            particularly, higher and professional education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-lg text-gray-700 italic">
                "Social Transformation Through Dynamic Education"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students in classroom"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2002</div>
                <div className="text-gray-600">Established</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">AICTE</div>
                <div className="text-gray-600">Approved</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">UoM</div>
                <div className="text-gray-600">Affiliated</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">NBA</div>
                <div className="text-gray-600">Accredited</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
