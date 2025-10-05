import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Syllabus from "@/components/Syllabus";
import Announcements from "@/components/Announcements";
import Placements from "@/components/Placements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <InstitutionalHeader />
      <Hero />
      <About />
      <Departments />
      <Syllabus />
      <Announcements />
      <Placements />
      <Contact />
      <Footer />
    </motion.div>
  );
}