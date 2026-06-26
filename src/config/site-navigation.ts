import type { LucideIcon } from "lucide-react";
import {
  Award,
  Briefcase,
  Building,
  Building2,
  Facebook,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Handshake,
  Home,
  Info,
  Instagram,
  LayoutGrid,
  Library,
  Linkedin,
  Mail,
  Map,
  MonitorSmartphone,
  Newspaper,
  Server,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

export interface SiteLink {
  label: string;
  href: string;
  description?: string;
}

export interface HeaderActionLink extends SiteLink {
  emphasis?: "default" | "primary";
}

export interface PrimaryNavigationChildLink extends SiteLink {
  icon: LucideIcon;
}

export interface PrimaryNavigationItem extends SiteLink {
  children?: readonly PrimaryNavigationChildLink[];
  menuVariant?: "standard" | "mega";
}

export interface FooterLinkGroup {
  title: string;
  links: readonly SiteLink[];
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface FooterContactInfo {
  addressLines: readonly string[];
  phones: readonly SiteLink[];
  email: SiteLink;
  mapEmbedUrl: string;
}

export interface SitemapLinkGroup {
  title: string;
  icon: LucideIcon;
  links: readonly SiteLink[];
}

const homeLink = { label: "Home", href: "/" } satisfies SiteLink;
const announcementsLink = {
  label: "Announcements",
  href: "/#announcements",
} satisfies SiteLink;
const aboutSectionLink = {
  label: "About Us",
  href: "/#about",
} satisfies SiteLink;
const aboutPageLink = { label: "About Us", href: "/about" } satisfies SiteLink;
const eventsLink = { label: "Events", href: "/events" } satisfies SiteLink;
const departmentsLink = {
  label: "Departments",
  href: "/#departments",
} satisfies SiteLink;
const placementsSectionLink = {
  label: "Placements",
  href: "/#placements",
} satisfies SiteLink;
const placementsPageLink = {
  label: "Placement Overview",
  href: "/placements",
} satisfies SiteLink;
const contactLink = {
  label: "Connect with Us",
  href: "/#contact",
} satisfies SiteLink;
const virtualTourLink = {
  label: "Virtual Tour",
  href: "/virtual-tour",
} satisfies SiteLink;
const facultyDirectoryLink = {
  label: "Faculty Directory",
  href: "/faculty",
} satisfies SiteLink;
const alumniLink = { label: "Alumni", href: "/alumni" } satisfies SiteLink;
const mcaAdmissionsLink = {
  label: "MCA Admissions",
  href: "/courses/mca",
} satisfies SiteLink;
const privacyPolicyLink = {
  label: "Privacy Policy",
  href: "/privacy",
} satisfies SiteLink;
const termsOfServiceLink = {
  label: "Terms of Service",
  href: "/terms",
} satisfies SiteLink;
const sitemapLink = { label: "Sitemap", href: "/sitemap" } satisfies SiteLink;

export const institutionalHeaderUtilityLinks = [
  { label: "Students", href: "/students" },
  alumniLink,
  { label: "Faculty", href: "/faculty" },
  { label: "Media", href: "/media" },
] satisfies readonly SiteLink[];

export const institutionalHeaderActionLinks = [
  { label: "My Portal", href: "/#portal", emphasis: "primary" },
  { label: "Careers", href: "/#career" },
] satisfies readonly HeaderActionLink[];

export const institutionalVirtualTourLink = virtualTourLink;

export const primaryNavigationItems = [
  {
    label: "Home",
    href: "/",
    children: [
      {
        label: "Overview",
        href: "/",
        icon: Home,
        description: "Return to main homepage",
      },
      {
        label: "Campus Tour",
        href: "/virtual-tour",
        icon: Globe,
        description: "Virtual interactive walkthrough",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    menuVariant: "mega",
    children: [
      { label: "About Us", href: "/about", icon: Info },
      { label: "Vision & Mission", href: "/about/vision", icon: Target },
      { label: "Institutional Values", href: "/about/values", icon: Award },
      { label: "Founder's Message", href: "/about/founder", icon: User },
      { label: "Principal's Message", href: "/about/principal", icon: Users },
      { label: "Deans", href: "/about/deans", icon: Award },
      { label: "Organogram", href: "/about/organogram", icon: Building },
      { label: "Committees", href: "/about/committees", icon: Users },
      { label: "Code of Conduct", href: "/about/conduct", icon: ShieldCheck },
      {
        label: "Institutional Ethics",
        href: "/about/ethics",
        icon: ShieldCheck,
      },
      { label: "Employment", href: "/about/employment", icon: Briefcase },
      { label: "Campus", href: "/about/campus", icon: Map },
      {
        label: "IT Infrastructure",
        href: "/about/infrastructure",
        icon: Server,
      },
      { label: "Annual Report", href: "/about/report", icon: FileText },
    ],
  },
  {
    label: "Programmes",
    href: "/courses/mca",
    children: [
      {
        label: "MCA",
        href: "/courses/mca",
        icon: MonitorSmartphone,
        description: "Master of Computer Applications",
      },
      {
        label: "PhD",
        href: "/courses/phd",
        icon: GraduationCap,
        description: "Doctor of Philosophy in IT",
      },
      {
        label: "Certification",
        href: "/#courses",
        icon: Award,
        description: "Short-term value-add courses",
      },
    ],
  },
  {
    label: "Admissions",
    href: "/courses/mca",
    children: [
      {
        label: "Apply Now",
        href: "/courses/mca",
        icon: FileText,
        description: "Start your application process",
      },
      {
        label: "Fee Structure",
        href: "/courses/mca",
        icon: Newspaper,
        description: "Detailed academic costs",
      },
      {
        label: "Scholarships",
        href: "/#announcements",
        icon: Briefcase,
        description: "Financial aid opportunities",
      },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      {
        label: "Publications",
        href: "/#events",
        icon: Library,
        description: "Latest papers and journals",
      },
      {
        label: "Laboratories",
        href: "/#about",
        icon: FlaskConical,
        description: "Advanced research infrastructure",
      },
      {
        label: "Consultancy",
        href: "/#placements",
        icon: Handshake,
        description: "Industry collaboration projects",
      },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    children: [
      {
        label: "Overview",
        href: "/placements",
        icon: TrendingUp,
        description: "Corporate relations statistics",
      },
      {
        label: "Recruiters",
        href: "/placements",
        icon: Building,
        description: "Our hiring partners",
      },
      {
        label: "Internships",
        href: "/placements",
        icon: Briefcase,
        description: "Student industry training",
      },
    ],
  },
  {
    label: "Students",
    href: "/students",
    children: [
      {
        label: "Resources",
        href: "/students/resources",
        icon: FileText,
        description: "Study materials and handbooks",
      },
      {
        label: "Committees",
        href: "/about/committees",
        icon: Users,
        description: "Student councils and cells",
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      {
        label: "Seminars",
        href: "/events/seminars",
        icon: Target,
        description: "Academic and industry seminars",
      },
      {
        label: "Conferences",
        href: "/events/conferences",
        icon: Globe,
        description: "ICET, NCIT & Manthan",
      },
    ],
  },
  {
    label: "Faculty",
    href: "/faculty",
    description: "Meet our distinguished professors",
  },
  {
    label: "Alumni",
    href: "/alumni",
    children: [
      {
        label: "Network",
        href: "/alumni",
        icon: Users,
        description: "Connect with graduates",
      },
      {
        label: "Success Stories",
        href: "/alumni",
        icon: Star,
        description: "Notable alumni achievements",
      },
      {
        label: "Events",
        href: "/alumni",
        icon: LayoutGrid,
        description: "Reunions and meetups",
      },
    ],
  },
] satisfies readonly PrimaryNavigationItem[];

export const navigationCallToAction = {
  desktop: { label: "Apply", href: "/courses/mca" },
  mobile: { label: "Apply Now 2026", href: "/courses/mca" },
} satisfies {
  desktop: SiteLink;
  mobile: SiteLink;
};

export const footerLinkGroups = [
  {
    title: "Quick Links",
    links: [
      aboutSectionLink,
      departmentsLink,
      { label: "Admissions", href: "/courses/mca" },
      placementsSectionLink,
      virtualTourLink,
      facultyDirectoryLink,
    ],
  },
  {
    title: "Important Links",
    links: [
      { label: "AICTE Approval", href: "#" },
      { label: "NBA Accreditation", href: "#" },
      { label: "University of Mumbai", href: "#" },
      { label: "Fee Structure", href: "/courses/mca" },
      { label: "Scholarships", href: "/admissions/scholarships" },
      { label: "Grievance Redressal", href: "/grievance" },
      { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
    ],
  },
] satisfies readonly FooterLinkGroup[];

export const footerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bvimit/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bharatividyapeeths_imit_mca/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bharati-vidyapeeth-institute-of-management-and-information-technology-705802225/",
    icon: Linkedin,
  },
] satisfies readonly FooterSocialLink[];

export const footerMetaLinks = [
  privacyPolicyLink,
  termsOfServiceLink,
  sitemapLink,
] satisfies readonly SiteLink[];

export const footerContactInfo = {
  addressLines: ["Sector 8, C.B.D. Belapur", "Navi Mumbai - 400614"],
  phones: [
    { label: "022-27578415", href: "tel:+912227578415" },
    { label: "+91 8657008016", href: "tel:+918657008016" },
  ],
  email: {
    label: "principal.bvimit@bharatividyapeeth.edu",
    href: "mailto:principal.bvimit@bharatividyapeeth.edu",
  },
  mapEmbedUrl:
    "https://www.google.com/maps?q=BVIMIT%20Sector%208%20C.B.D.%20Belapur%2C%20Navi%20Mumbai%20400614&output=embed",
} satisfies FooterContactInfo;

export const sitemapLinkGroups = [
  {
    title: "Primary Navigation",
    icon: Home,
    links: [homeLink, announcementsLink, eventsLink],
  },
  {
    title: "Institutional Profile",
    icon: Info,
    links: [
      aboutPageLink,
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Institutional Values", href: "/about/values" },
      { label: "Principal's Message", href: "/about/principal" },
    ],
  },
  {
    title: "Academic Programs",
    icon: GraduationCap,
    links: [
      mcaAdmissionsLink,
      { label: "PhD Program", href: "/courses/phd" },
      { label: "Short-term Certifications", href: "/#courses" },
    ],
  },
  {
    title: "Careers & Outcomes",
    icon: Building2,
    links: [
      placementsPageLink,
      { label: "Top Recruiters", href: "/#placements" },
      alumniLink,
    ],
  },
  {
    title: "Campus Experience",
    icon: Map,
    links: [
      virtualTourLink,
      { label: "IT Infrastructure", href: "/about/infrastructure" },
      { label: "Campus Facilities", href: "/#about" },
    ],
  },
  {
    title: "Governance & Legal",
    icon: ShieldCheck,
    links: [privacyPolicyLink, termsOfServiceLink, sitemapLink],
  },
  {
    title: "Contact & Assistance",
    icon: Mail,
    links: [
      contactLink,
      { label: "Grievance Portal", href: "/grievance" },
      { label: "Portal Inquiry", href: "/#portal" },
    ],
  },
] satisfies readonly SitemapLinkGroup[];

export const siteFooterSummary =
  "Bharati Vidyapeeth's Institute of Management & Information Technology - Empowering future innovators through quality education since 2002.";

export const siteFooterLegalText =
  "© 2026 Bharati Vidyapeeth's Institute of Management & Information Technology. All rights reserved.";

export const siteBranding = {
  shortName: "BVIMIT",
  location: "Navi Mumbai",
  fullName: "Bharati Vidyapeeth",
  fullSubtitle: "Institute of Management & Information Technology",
  homeHref: "/",
} as const;
