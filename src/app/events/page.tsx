import SiteShell from "@/components/layout/SiteShell";
import Link from "next/link";
import { Target, Globe, Award, Calendar, Users, Briefcase } from "lucide-react";

export default function EventsPage() {
  const eventCategories = [
    {
      title: "Seminars",
      desc: "Academic and industry seminars, lecture series, and academic outreach activities.",
      href: "/events/seminars",
      icon: Target,
    },
    {
      title: "Workshops",
      desc: "Workshops, training sessions, and experiential learning events.",
      href: "/events/workshops",
      icon: Briefcase,
    },
    {
      title: "FDPs",
      desc: "Faculty development programmes and academic capacity building.",
      href: "/events/fdp",
      icon: Award,
    },
    {
      title: "Activities",
      desc: "Institute activities, competitions, and community participation.",
      href: "/events/activities",
      icon: Users,
    },
    {
      title: "Conferences",
      desc: "Major standalone events including ICET, NCIT, and Manthan.",
      href: "/events/manthan-2026",
      icon: Globe,
    },
    {
      title: "Sports",
      desc: "Sports events, participation, and student engagement activities.",
      href: "/events/sports",
      icon: Calendar,
    },
  ];

  return (
    <SiteShell>
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Events & <span className="text-primary italic">Activities</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the vibrant academic and cultural life at BVIMIT through our seminars, conferences, workshops, and extracurricular activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((cat, i) => (
              <Link key={i} href={cat.href}>
                <div className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{cat.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{cat.desc}</p>
                  <div className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 mt-auto">
                    Explore <span className="text-xl leading-none">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
