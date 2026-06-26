"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  navigationCallToAction,
  primaryNavigationItems,
  siteBranding,
} from "@/config/site-navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-xl text-foreground border-b border-border shadow-md transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {primaryNavigationItems.map((item) => {
              if (item.children?.length) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    ref={activeDropdown === item.label ? dropdownRef : null}
                  >
                    <button className="flex items-center gap-1 text-foreground/70 hover:text-primary font-bold text-xs uppercase tracking-widest px-3 py-2 rounded-md transition-all duration-200">
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className={`absolute top-full mt-0 bg-popover text-popover-foreground rounded-b-2xl shadow-2xl border border-border p-4 ${
                            item.menuVariant === "mega"
                              ? "left-0 w-[600px]"
                              : "left-0 min-w-[260px]"
                          }`}
                        >
                          <div
                            className={
                              item.menuVariant === "mega"
                                ? "grid grid-cols-2 gap-4"
                                : "flex flex-col gap-1"
                            }
                          >
                            {item.children.map((child) => (
                              <Link
                                href={child.href}
                                key={child.label}
                                onClick={() => setActiveDropdown(null)}
                                className="group/drop flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 transition-all"
                              >
                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/drop:bg-primary group-hover/drop:text-white transition-colors">
                                  <child.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-xs uppercase tracking-wide text-foreground group-hover/drop:text-primary">
                                    {child.label}
                                  </h4>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground/70 hover:text-primary font-bold text-xs uppercase tracking-widest px-3 py-2 rounded-md transition-all duration-200 flex items-center justify-center"
                >
                  {item.icon ? <item.icon className="w-5 h-5" /> : item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5 text-primary" />
                ) : (
                  <Sun className="w-5 h-5 text-orange-500" />
                )}
              </button>
            ) : null}
            <Button
              asChild
              className="rounded-full px-8 font-black uppercase tracking-widest text-[10px]"
            >
              <Link href={navigationCallToAction.desktop.href}>
                {navigationCallToAction.desktop.label}
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              href={siteBranding.homeHref}
              className="flex items-center gap-2"
            >
              <img
                src="/assets/images/bharati_logo.png"
                className="h-8 w-auto object-contain"
                alt={`${siteBranding.shortName} logo`}
              />
              <span className="font-black text-sm tracking-tighter uppercase text-foreground">
                {siteBranding.shortName}{" "}
                <span className="text-primary italic">
                  {siteBranding.location}
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              {mounted ? (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-muted text-foreground"
                >
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </button>
              ) : null}

              <button
                className="p-2 text-foreground hover:bg-muted rounded-xl transition-colors"
                onClick={() => setIsOpen((open) => !open)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-background/95 overflow-hidden backdrop-blur-md"
          >
            <div className="max-h-[70vh] overflow-y-auto px-4 pt-2 pb-6 flex flex-col space-y-1 mt-2">
              {primaryNavigationItems.map((item) => {
                if (item.children?.length) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() =>
                          setActiveDropdown((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                        className="flex items-center justify-between w-full px-3 py-3 text-base text-foreground font-medium rounded-md hover:bg-muted transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-muted/30 rounded-xl overflow-hidden mt-1 mx-2"
                          >
                            <div
                              className={
                                item.menuVariant === "mega"
                                  ? "grid grid-cols-1 gap-1 p-2"
                                  : "flex flex-col p-2"
                              }
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpen(false);
                                  }}
                                  className="flex items-center gap-3 p-3 hover:bg-muted transition-colors rounded-lg"
                                >
                                  <div className="p-1.5 rounded-md shadow-sm bg-background text-primary border border-border">
                                    <child.icon className="w-4 h-4" />
                                  </div>
                                  <div className="text-sm font-semibold text-foreground">
                                    {child.label}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-3 text-base text-foreground font-medium rounded-md hover:bg-muted transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 px-3">
                <Button
                  asChild
                  className="w-full rounded-full py-6 font-black uppercase tracking-widest text-xs shadow-xl"
                >
                  <Link href={navigationCallToAction.mobile.href}>
                    {navigationCallToAction.mobile.label}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
