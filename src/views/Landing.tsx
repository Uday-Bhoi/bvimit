import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Placements from "@/components/Placements";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Landing() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background text-foreground transition-colors duration-300"
        >
            <InstitutionalHeader />
            <Navbar />
            <Hero />
            <Announcements />
            <About />
            <Courses />
            <Placements />
            <Events />
            <Contact />
            <Footer />
        </motion.div>
    );
}
