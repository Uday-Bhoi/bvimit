"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import InstitutionalHeader from "@/components/InstitutionalHeader";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

interface SiteShellProps {
  children: ReactNode;
  className?: string;
}

export default function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground transition-colors duration-300",
        className,
      )}
    >
      <InstitutionalHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
