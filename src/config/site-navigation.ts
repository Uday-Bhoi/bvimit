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
  Book,
  Image,
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
  icon?: LucideIcon;
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
    icon: Home,
  },
  {
    label: "Placements",
    href: "/placements",
    children: [
      { label: "Placements", href: "/placements", icon: TrendingUp },
      { label: "Entrepreneurship Cell", href: "/industry/entrepreneurship-cell", icon: Building },
      { label: "Industry Interaction", href: "/industry/interaction", icon: Handshake },
    ],
  },
  {
    label: "Courses",
    href: "/courses/mca",
    children: [
      { label: "MCA", href: "/courses/mca", icon: MonitorSmartphone },
      { label: "MCA FEE details", href: "/admissions/fees", icon: FileText },
      { label: "Phd", href: "/courses/phd", icon: GraduationCap },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Research Obj", href: "/research/objectives", icon: Target },
      { label: "Code of ethics", href: "/research/code-of-ethics", icon: ShieldCheck },
      { label: "Publications", href: "/research/publications", icon: Library },
      { label: "Research and consultancy grants", href: "/research/consultancy", icon: FlaskConical },
      { label: "Research awards", href: "/about/achievements-awards", icon: Award },
      { label: "MoU", href: "/research/mou", icon: Handshake },
      { label: "International conference 2026", href: "/research/icet-2026", icon: Globe },
      { label: "International conference 2024", href: "/research/icet-2024", icon: Globe },
      { label: "International conference 2022", href: "/research/icet-2022", icon: Globe },
    ],
  },
  {
    label: "Campus",
    href: "/campus/infrastructure",
    children: [
      { label: "Academic Infra", href: "/campus/infrastructure", icon: Server },
      { label: "Library", href: "/campus/library", icon: Library },
      { label: "Canteen", href: "/campus/canteen", icon: Home },
      { label: "Hostel", href: "/campus/hostel", icon: Home },
    ],
  },
  {
    label: "Transparency",
    href: "/compliance/transparency",
    children: [
      { label: "Academic", href: "/compliance/academic", icon: FileText },
      { label: "Exam", href: "/compliance/examination", icon: FileText },
      { label: "Administration", href: "/about/administration", icon: Users },
    ],
  },
  {
    label: "Faculty",
    href: "/faculty",
    children: [
      { label: "Faculty list", href: "/faculty", icon: Users },
      { label: "Profile", href: "/faculty", icon: User },
    ],
  },
  {
    label: "Student Corner",
    href: "/students",
    children: [
      { label: "ISTE Student Chapter", href: "/students/iste", icon: Users },
      { label: "NPTEL Local Chapter", href: "/students/nptel", icon: Users },
      { label: "Achievements", href: "/students/achievements", icon: Award },
      { label: "Technical Magazine", href: "/students/technical-magazine", icon: FileText },
      { label: "Newsletter Prabhat", href: "/students/newsletter", icon: Newspaper },
      { label: "IMIT Dairies", href: "/students/imit-dairies", icon: Book },
      { label: "Glimpses of BVIMIT", href: "/students/glimpses", icon: Image },
      { label: "Student Handbook", href: "/students/handbook", icon: Book },
    ],
  },
  {
    label: "NIRF",
    href: "/nirf",
    children: [
      { label: "NIRF 2025", href: "/nirf/2025", icon: Award },
      { label: "NIRF 2024", href: "/nirf/2024", icon: Award },
      { label: "NIRF 2023", href: "/nirf/2023", icon: Award },
    ],
  },
  {
    label: "Events",
    href: "/events",
    menuVariant: "mega",
    children: [
      { label: "Seminars", href: "/events/seminars", icon: Users },
      { label: "Workshops", href: "/events/workshops", icon: Briefcase },
      { label: "FDPs", href: "/events/fdp", icon: Book },
      { label: "Internal Hackathon SIH 2025 Report", href: "/events/sih-2025", icon: Target },
      { label: "ICET 2026 Report", href: "/events/icet-2026-report", icon: Globe },
      { label: "ICET 2024 Report", href: "/events/icet-2024-report", icon: Globe },
      { label: "ICET-2022 Conference Proceedings", href: "/events/icet-2022-proceedings", icon: Globe },
      { label: "ICET 2022 Report", href: "/events/icet-2022-report", icon: Globe },
      { label: "National Conference 2020", href: "/events/nc-2020", icon: Globe },
      { label: "National Conference 2017", href: "/research/ncit-2017", icon: Globe },
      { label: "Activities", href: "/events/activities", icon: Star },
      { label: "Sports", href: "/events/sports", icon: Target },
      { label: "Eminence", href: "/events/eminence", icon: Award },
      { label: "Manthan", href: "/events/manthan-2026", icon: Star },
    ],
  },
  {
    label: "ISR",
    href: "/outreach/isr",
    children: [
      { label: "ISR", href: "/outreach/isr", icon: Users },
      { label: "Swachh Bharat Abhiyan", href: "/outreach/swatch", icon: Star },
      { label: "Covid 19 Awareness", href: "/outreach/covid-19", icon: Info },
      { label: "Blood Donation", href: "/outreach/blood-donation", icon: Star },
      { label: "Tree Plantation", href: "/outreach/tree-plantation", icon: Star },
      { label: "Khusiyo Ki Pathshala", href: "/outreach/khushiyo-ki-pathshala", icon: Star },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
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
