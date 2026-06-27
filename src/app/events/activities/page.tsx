"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import activitiesData from "@/config/activities.json";
import { Search, Calendar, Award, Sparkles, Filter } from "lucide-react";

export default function StudentActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Auto-categorize activities based on keywords in title/text
  const getCategory = (title: string, text: string) => {
    const combined = (title + " " + text).toLowerCase();
    if (combined.includes("cultural") || combined.includes("diwali") || combined.includes("fresher") || combined.includes("celebration") || combined.includes("singing") || combined.includes("garba") || combined.includes("shivaji") || combined.includes("natak")) {
      return "Cultural";
    }
    if (combined.includes("hackathon") || combined.includes("ideation") || combined.includes("coding") || combined.includes("ai ") || combined.includes("technology")) {
      return "Technical";
    }
    if (combined.includes("seminar") || combined.includes("orientation") || combined.includes("library") || combined.includes("book") || combined.includes("ptm") || combined.includes("parent") || combined.includes("convocation")) {
      return "Academic";
    }
    return "Social / Welfare";
  };

  const categorizedActivities = activitiesData.map((act) => ({
    ...act,
    category: getCategory(act.title, act.text),
  }));

  const filtered = categorizedActivities.filter((act) => {
    const matchesSearch =
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || act.category === selectedTag;
    return matchesSearch && matchesTag;
  });

  const currentVisible = filtered.slice(0, visibleCount);

  return (
    <SiteShell>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-[#111827] py-20 md:py-28">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-primary">
              Student Activities
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Campus Activities & Life
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Explore the dynamic campus life at BVIMIT. From cultural festivals and national days to coding competitions and social drives.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-10 bg-background border-b border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search activities, festivals, events..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12); // Reset page count on filter
                }}
                className="w-full pl-12 pr-6 py-3 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/40 font-semibold text-sm"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {["All", "Cultural", "Technical", "Academic", "Social / Welfare"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag);
                    setVisibleCount(12); // Reset page count on filter
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    selectedTag === tag
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Activities List */}
        <section className="py-16 bg-muted/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-bold">No campus activities match your criteria.</p>
                <p className="text-sm">Try clearing your filters or broadening your search terms.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {currentVisible.map((act, i) => (
                      <motion.div
                        key={act.title + i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col bg-card border border-border rounded-[2.5rem] overflow-hidden hover:shadow-lg transition-all group h-full"
                      >
                        {/* Image banner */}
                        <div className="aspect-[16/10] w-full overflow-hidden bg-muted border-b border-border relative">
                          <img
                            src={act.img ? (act.img.startsWith('/legacy') ? act.img : `/legacy${act.img}`) : "/assets/images/campusbanner.jpg"}
                            alt={act.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              // If image is missing in new path, fall back to default
                              (e.target as HTMLImageElement).src = "/assets/images/campusbanner.jpg";
                            }}
                          />
                          <span className="absolute top-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                            {act.category}
                          </span>
                        </div>

                        {/* Title and details */}
                        <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-black text-foreground tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
                              {act.title}
                            </h3>
                            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-4">
                              {act.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Show More Button */}
                {filtered.length > visibleCount && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 12)}
                      className="px-8 py-4 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary/95 transition-all shadow-md cursor-pointer"
                    >
                      Show More Activities
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
