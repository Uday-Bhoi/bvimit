import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Admissions", href: "#admissions" },
    { name: "Placements", href: "#placements" },
    { name: "Faculty", href: "#" },
    { name: "Alumni", href: "#" }
  ];

  const importantLinks = [
    { name: "AICTE Approval", href: "#" },
    { name: "NBA Accreditation", href: "#" },
    { name: "University of Mumbai", href: "#" },
    { name: "Fee Structure", href: "#" },
    { name: "Scholarships", href: "#" },
    { name: "Grievance Redressal", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/bvimit/", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/bharatividyapeeths_imit_mca/", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bharati-vidyapeeth-institute-of-management-and-information-technology-705802225/", color: "hover:text-blue-700" }
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="flex items-center space-x-3 group cursor-pointer transition-opacity hover:opacity-80">
              <img
                src="/assets/images/bharati_logo.png"
                alt="BVIMIT Logo"
                className="h-12 w-12 transition-transform group-hover:scale-105"
              />
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">BVIMIT</h3>
                <p className="text-muted-foreground text-sm">Navi Mumbai</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Bharati Vidyapeeth's Institute of Management & Information Technology -
              Empowering future innovators through quality education since 2002.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200 ${social.color.replace('text-blue', 'text-primary').replace('text-pink', 'text-primary')}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Map Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <p>Sector 8, C.B.D. Belapur</p>
                  <p>Navi Mumbai - 400614</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  <a href="tel:+912227578415" className="block hover:underline">022-27578415</a>
                  <a href="tel:+918657008016" className="block hover:underline">+91 8657008016</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:principal.bvimit@bharatividyapeeth.edu"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors break-all"
                >
                  principal.bvimit@bharatividyapeeth.edu
                </a>
              </div>
            </div>

            {/* Compact Map Integration */}
            <div className="mt-6 rounded-xl overflow-hidden h-32 border border-border/50 shadow-sm transition-transform hover:scale-[1.02] duration-300">
              <iframe
                src="https://www.google.com/maps?q=BVIMIT%20Sector%208%20C.B.D.%20Belapur%2C%20Navi%20Mumbai%20400614&output=embed"
                title="BVIMIT Location"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2026 Bharati Vidyapeeth's Institute of Management & Information Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}