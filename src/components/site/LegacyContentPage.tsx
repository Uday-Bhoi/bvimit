import Link from "next/link";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegacyPageEntry } from "@/types/site";

interface LegacyContentPageProps {
  page: LegacyPageEntry;
}

export default function LegacyContentPage({ page }: LegacyContentPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <InstitutionalHeader />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#111827] py-20 md:py-28">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/30 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-primary">
              {page.section}
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              {page.title}
            </h1>
            {page.summary ? (
              <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
                {page.summary}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold text-slate-300">
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-primary">{page.section}</span>
            </div>
          </div>
        </section>

        <section className="border-t border-border/40 bg-background py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-xl shadow-black/5">
              <div className="border-b border-border/50 bg-primary/5 px-6 py-4 md:px-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">
                  Migrated from legacy source
                </p>
              </div>
              <div
                className="legacy-content px-5 py-6 md:px-8 md:py-10"
                dangerouslySetInnerHTML={{ __html: page.html ?? "" }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

