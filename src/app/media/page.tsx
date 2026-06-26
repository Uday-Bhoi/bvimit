import SiteShell from "@/components/layout/SiteShell";
import Link from "next/link";
import { BookOpen, Newspaper, Camera } from "lucide-react";

export default function MediaPage() {
  const mediaResources = [
    {
      title: "Technical Magazine",
      desc: "Student magazine issues, publications, and creative work.",
      href: "/students/technical-magazine",
      icon: BookOpen,
    },
    {
      title: "Newsletter",
      desc: "Newsletter archives and institute communication highlights.",
      href: "/students/newsletter",
      icon: Newspaper,
    },
    {
      title: "IMIT Dairies",
      desc: "Student life snapshots, institute diaries, and campus stories.",
      href: "/students/imit-dairies",
      icon: Camera,
    },
  ];

  return (
    <SiteShell>
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Media & <span className="text-primary italic">Publications</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our institute's magazines, newsletters, and visual diaries chronicling the vibrant life at BVIMIT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaResources.map((res, i) => (
              <Link key={i} href={res.href}>
                <div className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <res.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{res.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{res.desc}</p>
                  <div className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 mt-auto">
                    View Archive <span className="text-xl leading-none">&rarr;</span>
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
