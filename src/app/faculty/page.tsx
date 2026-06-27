"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Briefcase,
  Mail,
  ArrowRight,
  Microscope,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import facultyData from "@/data/faculty";
import SiteShell from "@/components/layout/SiteShell";

export default function FacultyListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const filteredFaculty = facultyData.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.qualification.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = selectedRole === "all" ||
      (selectedRole === "principal" && member.designation.toLowerCase().includes("principal")) ||
      (selectedRole === "associate" && member.designation.toLowerCase().includes("associate")) ||
      (selectedRole === "assistant" && member.designation.toLowerCase().includes("assistant")) ||
      (selectedRole === "adjunct" && member.designation.toLowerCase().includes("adjunct")) ||
      (selectedRole === "visiting" && member.designation.toLowerCase().includes("visiting"));

    return matchesSearch && matchesRole;
  });

  return (
    <SiteShell>
      <main>
        {/* Dynamic HeaderSection */}
        <section className="relative py-24 bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -mr-64 -mt-64" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div {...fadeIn}>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">
                Academic Leadership
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                Expert <span className="text-primary italic">Faculty</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Our distinguished educators combine decades of institutional
                experience with cutting-edge industry research to mentor the
                next generation of IT leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="pt-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border/60 p-6 rounded-[2rem] flex flex-col md:flex-row gap-6 items-center justify-between shadow-xs">
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search faculty by name, expertise..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-muted/40 border border-border rounded-xl text-xs font-semibold focus:outline-none focus:border-primary/40 text-foreground"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
                <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mr-2">
                  <Filter className="h-3.5 w-3.5 text-primary" /> Filter Role:
                </span>
                {[
                  { value: "all", label: "All Faculty" },
                  { value: "principal", label: "Principal" },
                  { value: "associate", label: "Associate Prof" },
                  { value: "assistant", label: "Assistant Prof" },
                  { value: "adjunct", label: "Adjunct / Visiting" }
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setSelectedRole(tab.value)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                      selectedRole === tab.value 
                        ? "bg-primary text-white shadow-xs" 
                        : "bg-muted/40 hover:bg-muted text-muted-foreground border border-border"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Grid Listing */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFaculty.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-[2rem] border border-border/50">
                <p className="text-muted-foreground font-semibold text-sm">No faculty members match your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredFaculty.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (i % 4) * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative bg-card rounded-[2rem] border border-border/50 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500"
                  >
                    {/* Image Container with Accent */}
                    <div className="h-72 w-full relative overflow-hidden bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <Link
                          href={`/faculty/${member.id}`}
                          className="w-full py-3 bg-primary text-white font-black uppercase text-[10px] tracking-widest text-center rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
                        >
                          View Detailed Profile
                        </Link>
                      </div>
                    </div>

                    {/* Faculty Brief Details */}
                    <div className="p-8">
                      <h3 className="text-xl font-black text-foreground mb-1 tracking-tight truncate">
                        {member.name}
                      </h3>
                      <p className="text-primary text-[10px] font-black uppercase tracking-[0.1em] mb-4 opacity-80">
                        {member.designation}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <GraduationCap className="w-4 h-4 text-primary opacity-60" />
                          <span className="text-[11px] font-bold uppercase tracking-wide truncate">
                            {member.qualification}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Briefcase className="w-4 h-4 text-primary opacity-60" />
                          <span className="text-[11px] font-bold uppercase tracking-wide">
                            {member.experience} EXP
                          </span>
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <Link
                          href={`/faculty/${member.id}`}
                          className="text-foreground font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 group/btn"
                        >
                          Profile{" "}
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2.5 bg-muted/50 rounded-full hover:bg-primary/10 hover:text-primary transition-all"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Bottom Contact Callout */}
            <motion.div
              {...fadeIn}
              className="mt-24 p-12 bg-primary/5 rounded-[3rem] border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 border-b-4"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-primary text-white rounded-2xl hidden md:block">
                  <Microscope className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground">
                    Interested in Collaborative Research?
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Connect with our specialized departments for academic
                    partnerships.
                  </p>
                </div>
              </div>
              <button className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full shadow-lg">
                Connect with Research Cell
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
