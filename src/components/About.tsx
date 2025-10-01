import { motion, useInView } from "framer-motion";
import { CheckCircle, Target, Eye, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Animated counter component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const missions = [
    "To prepare students for careers in the industry and pursue research in all branches of computing field through effective teaching learning process.",
    "To strengthen the industry institute interaction by providing up-to-date programs.",
    "To imbibe amongst the students ethical usage of technical knowledge beneficial to the society.",
    "To provide an environment that fosters a framework for promoting collaborative and multidisciplinary activities."
  ];

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
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bharati Vidyapeeth is an institution planted in the year 1964 by our founder Dr. Patangrao Kadam. 
            During the last 55 years, Bharati Vidyapeeth has made astonishing strides in the field of education, 
            particularly, higher and professional education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision & Mission with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl shadow-lg border border-blue-100 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-xl mr-3">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Social Transformation Through Dynamic Education"
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-white to-green-50/50 p-8 rounded-2xl shadow-lg border border-green-100 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl mr-3">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-700">{mission}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image and Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students in classroom"
                className="relative w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: 2002, label: "Established", color: "blue", icon: TrendingUp },
                { value: 100, label: "AICTE Approved", color: "green", suffix: "%" },
                { value: 1, label: "UoM Affiliated", color: "purple", prefix: "#" },
                { value: 100, label: "NBA Accredited", color: "red", suffix: "%" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br from-white to-${stat.color}-50 p-6 rounded-xl shadow-md border border-${stat.color}-100 text-center group cursor-pointer`}
                >
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform`}>
                    {stat.prefix}
                    <AnimatedCounter end={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}