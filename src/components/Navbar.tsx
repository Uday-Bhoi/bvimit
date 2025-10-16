import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Research", href: "#research" },
    { name: "Admissions", href: "#admissions" },
    { name: "Placements", href: "#placements" },
    { name: "Contact", href: "#contact" },
  ];

  const backgroundStyle = {
    backgroundImage:
      "url('https://media.istockphoto.com/id/1241335697/vector/old-very-light-beige-coloured-smudged-wall-textured-vector-backgrounds.jpg?s=612x612&w=0&k=20&c=ti6j4Fdf2S63Vaxzk9bGvH_HKlKKPhQZx_13XCDx0Cw=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // light overlay for contrast
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-50 border-b border-gray-300 backdrop-blur-sm"
      style={backgroundStyle}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black font-medium hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a href="#contact">
              <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                Apply Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-lg font-bold text-black">BVIMIT</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-300"
            style={backgroundStyle}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-black font-medium hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full bg-white text-black hover:bg-gray-100">
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
