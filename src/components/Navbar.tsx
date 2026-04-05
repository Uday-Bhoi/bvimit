"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, MonitorSmartphone, GraduationCap, 
  Info, Building, Target, User, Users, ShieldCheck, FileText, 
  Map, Server, Briefcase, Award, Sun, Moon,
  Home, Globe, BookOpen, Newspaper, Microscope, TrendingUp,
  Handshake, Star, Library, FlaskConical, LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      href: "/",
      dropdown: [
        { name: "Overview", href: "/", icon: <Home className="w-4 h-4" />, description: "Return to main homepage" },
        { name: "Campus Tour", href: "#", icon: <Globe className="w-4 h-4" />, description: "Virtual interactive walkthrough" }
      ]
    },
    { 
      name: "About", 
      href: "#", 
      isMega: true,
      dropdown: [
        { name: "About Us", href: "/about", icon: <Info className="w-4 h-4" /> },
        { name: "Vision & Mission", href: "/about/vision", icon: <Target className="w-4 h-4" /> },
        { name: "Institutional Values", href: "/about/values", icon: <Award className="w-4 h-4" /> },
        { name: "Founder's Message", href: "/about/founder", icon: <User className="w-4 h-4" /> },
        { name: "Principal's Message", href: "/about/principal", icon: <Users className="w-4 h-4" /> },
        { name: "Deans", href: "/about/deans", icon: <Award className="w-4 h-4" /> },
        { name: "Organogram", href: "/about/organogram", icon: <Building className="w-4 h-4" /> },
        { name: "Committees", href: "/about/committees", icon: <Users className="w-4 h-4" /> },
        { name: "Code of Conduct", href: "/about/conduct", icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "Institutional Ethics", href: "/about/ethics", icon: <ShieldCheck className="w-4 h-4" /> },
        { name: "Employment", href: "/about/employment", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Campus", href: "/about/campus", icon: <Map className="w-4 h-4" /> },
        { name: "IT Infrastructure", href: "/about/infrastructure", icon: <Server className="w-4 h-4" /> },
        { name: "Annual Report", href: "/about/report", icon: <FileText className="w-4 h-4" /> }
      ]
    },
    { 
      name: "Programmes", 
      href: "#", 
      dropdown: [
        { name: "MCA", href: "/courses/mca", description: "Master of Computer Applications", icon: <MonitorSmartphone className="w-4 h-4" /> },
        { name: "PhD", href: "/courses/phd", description: "Doctor of Philosophy in IT", icon: <GraduationCap className="w-4 h-4" /> },
        { name: "Certification", href: "#", description: "Short-term value-add courses", icon: <Award className="w-4 h-4" /> }
      ]
    },
    { 
      name: "Admissions", 
      href: "/admissions",
      dropdown: [
        { name: "Apply Now", href: "#", description: "Start your application process", icon: <FileText className="w-4 h-4" /> },
        { name: "Fee Structure", href: "#", description: "Detailed academic costs", icon: <Newspaper className="w-4 h-4" /> },
        { name: "Scholarships", href: "#", description: "Financial aid opportunities", icon: <Briefcase className="w-4 h-4" /> }
      ]
    },
    { 
      name: "Research", 
      href: "/research",
      dropdown: [
        { name: "Publications", href: "#", description: "Latest papers and journals", icon: <Library className="w-4 h-4" /> },
        { name: "Laboratories", href: "#", description: "Advanced research infrastructure", icon: <FlaskConical className="w-4 h-4" /> },
        { name: "Consultancy", href: "#", description: "Industry collaboration projects", icon: <Handshake className="w-4 h-4" /> }
      ]
    },
    { 
      name: "Placement", 
      href: "/placements",
      dropdown: [
        { name: "Overview", href: "#", description: "Corporate relations statistics", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "Recruiters", href: "#", description: "Our hiring partners", icon: <Building className="w-4 h-4" /> },
        { name: "Internships", href: "#", description: "Student industry training", icon: <Briefcase className="w-4 h-4" /> }
      ]
    },
    { 
      name: "Alumni", 
      href: "/alumni",
      dropdown: [
        { name: "Network", href: "#", description: "Connect with graduates", icon: <Users className="w-4 h-4" /> },
        { name: "Success Stories", href: "#", description: "Notable alumni achievements", icon: <Star className="w-4 h-4" /> },
        { name: "Events", href: "#", description: "Reunions and meetups", icon: <LayoutGrid className="w-4 h-4" /> }
      ]
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md text-foreground border-b border-border shadow-sm transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          
          {/* Desktop Navigation - Structured and Professional */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    ref={activeDropdown === item.name ? dropdownRef : null}
                  >
                    <button className="flex items-center gap-1.5 text-foreground/80 hover:text-primary font-semibold tracking-wide px-3 py-2 rounded-md transition-all duration-200 relative overflow-hidden group">
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      <motion.div 
                        className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 ${activeDropdown === item.name ? "w-full left-0" : "group-hover:w-full group-hover:left-0"}`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`absolute top-full mt-2 bg-popover text-popover-foreground rounded-2xl shadow-xl border border-border p-3 overflow-hidden ${item.isMega ? 'left-1/2 -translate-x-1/2 w-[600px]' : 'left-1/2 -translate-x-1/2 min-w-[280px]'}`}
                        >
                          <div className={item.isMega ? "grid grid-cols-2 gap-x-4 gap-y-2 relative z-10" : "flex flex-col gap-1 relative z-10"}>
                            {item.dropdown.map((dropItem) => (
                              <Link 
                                href={dropItem.href} 
                                key={dropItem.name}
                                onClick={() => setActiveDropdown(null)}
                                className={`group/drop flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors duration-200 relative overflow-hidden ${item.isMega ? 'items-center py-2.5 px-3' : ''}`}
                              >
                                {item.isMega && (
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover/drop:scale-y-100 transition-transform origin-left rounded-l-xl" />
                                )}

                                <div className={`p-2 transition-colors rounded-lg bg-primary/10 text-primary group-hover/drop:bg-primary group-hover/drop:text-primary-foreground shadow-sm`}>
                                  {dropItem.icon}
                                </div>

                                <div>
                                  <h4 className={`font-semibold transition-colors text-sm text-foreground group-hover/drop:text-primary`}>
                                    {dropItem.name}
                                  </h4>
                                  {(dropItem as any).description && (
                                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                      {(dropItem as any).description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary font-semibold tracking-wide px-3 py-2 rounded-md transition-all duration-200 relative group overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 0 }}
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-foreground transition-all duration-300 border border-border/50 group"
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme === 'dark' ? 'dark' : 'light'}
                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'dark' ? <Moon className="w-4 h-4 fill-current text-primary" /> : <Sun className="w-4 h-4 fill-current text-orange-500" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}
            <Button size="sm" className="rounded-xl px-6 font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20">
              Apply
            </Button>
          </div>

          {/* Mobile menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2 w-full justify-between">
            <span className="font-serif italic font-bold text-foreground tracking-widest pl-2">BVIMIT</span>
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-muted text-foreground transition-colors focus:outline-none"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme === 'dark' ? 'dark' : 'light'}
                      initial={{ scale: 0, opacity: 0, rotate: -180 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === 'dark' ? <Moon className="w-5 h-5 fill-current" /> : <Sun className="w-5 h-5 fill-current" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-muted"
                onClick={() => setIsOpen(!isOpen)}
              >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-background/95 overflow-hidden backdrop-blur-md"
          >
            <div className="max-h-[70vh] overflow-y-auto px-4 pt-2 pb-6 flex flex-col space-y-1 mt-2">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="flex flex-col">
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-3 py-3 text-base text-foreground font-medium rounded-md hover:bg-muted transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-muted/30 rounded-xl overflow-hidden mt-1 mx-2"
                          >
                            <div className={item.isMega ? "grid grid-cols-1 gap-1 p-2" : "flex flex-col p-2"}>
                              {item.dropdown.map((dropItem) => (
                                <Link
                                  key={dropItem.name}
                                  href={dropItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-3 p-3 hover:bg-muted transition-colors rounded-lg ${item.isMega ? 'py-2' : ''}`}
                                >
                                  <div className="p-1.5 rounded-md shadow-sm bg-background text-primary border border-border">
                                    {dropItem.icon}
                                  </div>
                                  <div className="text-sm font-semibold text-foreground">
                                    {dropItem.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-3 text-base text-foreground font-medium rounded-md hover:bg-muted transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
