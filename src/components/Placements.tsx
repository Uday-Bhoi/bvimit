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

  const companyLogos = [
    "https://harmless-tapir-303.convex.cloud/api/storage/8355377a-f356-4a02-83dd-1cb6b4038f23",
    "https://harmless-tapir-303.convex.cloud/api/storage/635b8350-7422-44d6-9d35-5fb8fb02cafd",
    "https://harmless-tapir-303.convex.cloud/api/storage/34c864a0-d4be-4831-afa6-a9726103811b",
    "https://harmless-tapir-303.convex.cloud/api/storage/3dfd0b6f-c953-4deb-b03e-34bccc342831",
    "https://harmless-tapir-303.convex.cloud/api/storage/6235a095-3a80-45fe-8a9c-d82fe1cb9b5e",
    "https://harmless-tapir-303.convex.cloud/api/storage/72eeee92-6aed-4f2f-84ec-cbd9bd147d12",
    "https://harmless-tapir-303.convex.cloud/api/storage/5ce9ae7d-4cb3-4ac3-b2c4-78a1edeb45ab",
    "https://harmless-tapir-303.convex.cloud/api/storage/7b6e455e-b116-4367-9ae4-cd4ba129aec9",
    "https://harmless-tapir-303.convex.cloud/api/storage/b05f2886-923a-40ab-bf22-5e72229459fe",
    "https://harmless-tapir-303.convex.cloud/api/storage/2d967117-5e83-4a26-b9b4-8724f35df734",
    "https://harmless-tapir-303.convex.cloud/api/storage/9b5c70b3-3ace-43e9-bc43-fafb9a4d0f88"
  ];

  return (
    <section id="placements" className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4"
            >
              Career & Placements
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
            >
              Global Career <span className="text-primary italic">Outcomes</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-medium text-lg max-w-md md:text-right"
          >
            Securing positions in world-class organizations through rigorous industry training.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-black text-foreground mb-1 tracking-tighter">{stat.number}</div>
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-3 opacity-60">{stat.label}</p>
              <p className="text-sm text-muted-foreground font-bold">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Top Companies */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary/5 border border-primary/20 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <h3 className="text-3xl font-extrabold text-foreground text-center mb-16 relative z-10">
            Top Recruiting <span className="text-primary italic">Partners</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {topCompanies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/80 backdrop-blur rounded-[1.5rem] p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 group"
              >
                <div className="text-base font-bold text-muted-foreground mb-3 group-hover:text-primary transition-colors">{company.name}</div>
                <div className="text-2xl font-black text-primary tracking-tighter">{company.package}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative mb-12">
            <h4 className="text-2xl font-bold text-foreground relative z-10 px-4">Our Placement Network</h4>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-primary/10 -rotate-1 rounded-full z-0" />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="flex items-center justify-center p-4 bg-white/50 dark:bg-white/5 rounded-2xl shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/20"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-h-10 md:max-h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}