import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Admissions", href: "#admissions" },
    { name: "Placements", href: "#placements" },
    { name: "Contact", href: "#contact" },
  ];
  // Add: celebratory badge image for header
  const jubileeBadgeUrl =
    "https://harmless-tapir-303.convex.cloud/api/storage/034165cd-4008-45ba-87f2-3daa320467ce";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            aria-label="Go to Home"
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/be54b190-14b5-4580-83c2-bc6ed6f9df87"
              alt="BVIMIT Logo"
              className="h-14 w-14"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900">BVIMIT</h1>
              <p className="text-sm text-gray-600">Navi Mumbai</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            {/* Celebrating 50 & Beyond badge */}
            <img
              src={jubileeBadgeUrl}
              alt="Bharati Vidyapeeth - Celebrating 50 and Beyond"
              title="Celebrating 50 and Beyond"
              className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <a href="#contact" className="ml-2">
              <Button size="sm" className="ml-0">
                Apply Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full">
                    Apply Now
                  </Button>
                </a>
              </div>
              {/* Badge in mobile menu */}
              <div className="px-3 pt-2 pb-4 flex justify-center">
                <img
                  src={jubileeBadgeUrl}
                  alt="Bharati Vidyapeeth - Celebrating 50 and Beyond"
                  className="h-12 w-auto opacity-90"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}