import SiteShell from "@/components/layout/SiteShell";
import Link from "next/link";
import { BookOpen, Award, Newspaper, Link as LinkIcon, Briefcase, FileText, LayoutTemplate, Layers } from "lucide-react";

export default function StudentsPage() {
  const studentResources = [
    {
      title: "Self Learning",
      desc: "Access self-learning resources and institute-supported study materials.",
      href: "/students/self-learning",
      icon: BookOpen,
    },
    {
      title: "Important Links",
      desc: "Useful academic, institutional, and external reference links.",
      href: "/students/important-links",
      icon: LinkIcon,
    },
    {
      title: "Achievements",
      desc: "Student awards, recognitions, and academic achievements.",
      href: "/students/achievements",
      icon: Award,
    },
    {
      title: "Student Handbook",
      desc: "Student handbook materials, policies, and reference documents.",
      href: "/students/handbook",
      icon: FileText,
    },
  ];

  const studentCommittees = [
    {
      title: "ISTE",
      desc: "Student chapter activities and technical development initiatives.",
      href: "/students/iste",
      icon: Layers,
    },
    {
      title: "Innovation Council",
      desc: "Innovation, incubation, and entrepreneurial development activity.",
      href: "/students/iic",
      icon: LayoutTemplate,
    },
    {
      title: "DLLE",
      desc: "Department of Lifelong Learning and Extension activity.",
      href: "/students/dlle",
      icon: Briefcase,
    },
    {
      title: "NPTEL",
      desc: "NPTEL engagement, certifications, and learner support.",
      href: "/students/nptel",
      icon: Newspaper,
    },
  ];

  return (
    <SiteShell>
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Student <span className="text-primary italic">Hub</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your central portal for academic resources, student chapters, achievements, and essential institutional information.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Academic Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentResources.map((res, i) => (
                <Link key={i} href={res.href}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group h-full flex flex-col">
                    <res.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{res.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{res.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Student Chapters & Cells
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentCommittees.map((com, i) => (
                <Link key={i} href={com.href}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group h-full flex flex-col">
                    <com.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{com.title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{com.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
