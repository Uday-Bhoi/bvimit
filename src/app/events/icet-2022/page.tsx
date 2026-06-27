"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Award, 
  FileText, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Info,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function ICET2022Page() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About ICET & CFP" },
    { id: "dates-submission", label: "Important Dates" },
    { id: "registration", label: "Registration & Fees" },
    { id: "committee", label: "Committee" },
    { id: "guidelines", label: "Author Guidelines" },
    { id: "contact", label: "Contact & Venue" }
  ];

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
              1st Online International Conference
            </p>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
              International Conference on Emerging Trends : Innovation & Challenges in Information Technology and Management (ICET 2022)
            </h1>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>24th & 25th June 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Online Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <a href="/legacy/pdfs/BVIMIT ICET 2022.pdf" target="_blank" className="hover:underline">
                  Download Conference Brochure
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tabbed Layout Section */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Tabs */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 border-b lg:border-b-0 border-border lg:col-span-1 h-fit sticky top-24 z-20 bg-background">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 rounded-xl text-left text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap lg:whitespace-normal cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-card text-foreground border border-border hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border rounded-[2rem] p-6 md:p-10 shadow-sm"
                >
                  {/* About & CFP Tab */}
                  {activeTab === "about" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <Info className="h-6 w-6 text-primary" /> About ICET 2022
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                          International Conference on Emerging Trends : Innovation & Challenges in Information Technology and Management 2022 had a profound influence on all branches of computer applications, computer science, and management. Organized in online mode by Bharati Vidyapeeth's Institute of Management and Information Technology, Navi Mumbai, the conference served as a key academic arena for technological presentations and research papers.
                        </p>
                        <div className="mt-4 p-5 bg-primary/10 border border-primary/20 rounded-2xl text-muted-foreground text-xs space-y-2 font-semibold">
                          <p className="text-primary font-black uppercase tracking-wider text-[10px]">Conference Publications Summary:</p>
                          <p>• Selected papers were published in the International Journal of Computer Applications (IJCA).</p>
                          <p>• E-certificates were issued to all registered participants presenting their research work.</p>
                          <p>• Collaborated with Scopus Indexed journals published by Springer.</p>
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <BookOpen className="h-6 w-6 text-primary" /> Research Domains
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2.5">
                            {[
                              "Artificial intelligence tools and applications",
                              "Big Data, Data Analysis and Data Mining",
                              "Business Intelligence",
                              "Distributed and Parallel Computing",
                              "Embedded Systems",
                              "Human-computer interaction & UX Design",
                              "Image Processing and Pattern recognition",
                              "Internet of Things",
                              "Networking and Communications"
                            ].map((topic, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                                <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-2.5">
                            {[
                              "Machine learning & Deep Learning",
                              "Multimedia and Computer Graphics",
                              "Natural Language Processing",
                              "Robotic Process Automation",
                              "Search Engine Optimization",
                              "Software Engineering",
                              "Web Applications and Web services",
                              "Digital and Cyber Security",
                              "Virtual Reality and Augmented Reality",
                              "Quantum Computing"
                            ].map((topic, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                                <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Important Dates Tab */}
                  {activeTab === "dates-submission" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <Calendar className="h-6 w-6 text-primary" /> Important Dates (Archive)
                        </h2>
                        <div className="overflow-hidden border border-border rounded-2xl">
                          <table className="w-full text-left text-sm">
                            <thead className="bg-muted text-foreground font-black text-xs uppercase tracking-wider">
                              <tr>
                                <th className="px-6 py-4">Event Milestone</th>
                                <th className="px-6 py-4">Date</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-muted-foreground">
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Abstract Submission</td>
                                <td className="px-6 py-4">9th April 2022</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Full Paper Submission</td>
                                <td className="px-6 py-4">13th June 2022</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Acceptance Notification</td>
                                <td className="px-6 py-4">20th June 2022</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Last date for Registration</td>
                                <td className="px-6 py-4">21st June 2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <FileText className="h-6 w-6 text-primary" /> Paper Submission Email
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          All query emails and archive paper submissions were routed through the official research cell:
                        </p>
                        <a 
                          href="mailto:bvimit.conference@bharatividyapeeth.edu"
                          className="text-primary hover:underline font-bold text-sm"
                        >
                          bvimit.conference@bharatividyapeeth.edu
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Registration & Fees Tab */}
                  {activeTab === "registration" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-primary" /> Registration & Fees (Archive)
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Registration fee guidelines applied to presenters and attendees. Selected publications required active registration of at least one author.
                        </p>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-6">Payment Bank Details</h2>
                        <div className="overflow-hidden border border-border rounded-2xl">
                          <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-border">
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40 w-1/3">Payment Method</td>
                                <td className="px-6 py-4 text-muted-foreground">NEFT Transfer</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40">Account Name</td>
                                <td className="px-6 py-4 text-muted-foreground">BHARATI VIDYAPEETHS IMIT</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40">Bank Name</td>
                                <td className="px-6 py-4 text-muted-foreground">Bank of India</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40">Bank Account No</td>
                                <td className="px-6 py-4 text-muted-foreground font-mono">011610110005226</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40">IFSC Code</td>
                                <td className="px-6 py-4 text-muted-foreground font-mono">BKID0000116</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Committee Tab */}
                  {activeTab === "committee" && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                        <Users className="h-6 w-6 text-primary" /> Conference Committees
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Chief Patron</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground font-semibold">
                              <li>• Hon'ble Dr. Shivajirao Kadam (Chancellor, BVDU, Pune)</li>
                              <li>• Hon'ble Dr. Vishwajeet Kadam (Pro-Vice Chancellor & Secretary, BVDU, Pune)</li>
                              <li>• Hon'ble Dr. Vivek Saoji (Vice Chancellor, BVDU, Pune)</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Patron</h3>
                            <p className="text-sm text-muted-foreground font-semibold">• Dr. V. J. Kadam (Director, Complex complex, Navi Mumbai)</p>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">General Chair</h3>
                            <p className="text-sm text-muted-foreground font-semibold">• Dr. Suhasini Vijaykumar (Principal, BVIMIT, Navi Mumbai)</p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Advisory Committee</h3>
                          <ul className="space-y-2 text-xs text-muted-foreground font-semibold">
                            <li>• Siddhartho Sengupta (Director, TCS, USA)</li>
                            <li>• Mr. Gaurav Goel (Head of IT, Tele2 AB, Sweden)</li>
                            <li>• Dr. Durgesh Kumar Mishra (Director, Symbiosis, Indore)</li>
                            <li>• Dr. Krishan Tuli (HOD computing, Chandigarh University)</li>
                            <li>• Dr. Gopakumaran Thampi (Principal, TSEC, Mumbai)</li>
                            <li>• Dr. Sachin Kadam (Professor, BVU, Pune)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Guidelines Tab */}
                  {activeTab === "guidelines" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <Award className="h-6 w-6 text-primary" /> Ethical Review
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          All submitted research papers went through standard screening for plagiarism. Guidelines specified single/double-blind reviews to select papers suitable for proceeding indexation.
                        </p>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4">Brochure Download</h2>
                        <a 
                          href="/legacy/pdfs/BVIMIT ICET 2022.pdf" 
                          target="_blank"
                          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/95 transition-all shadow"
                        >
                          <FileText className="h-4 w-4" /> Download 2022 Brochure PDF
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Contact Tab */}
                  {activeTab === "contact" && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-primary" /> Venue
                      </h2>
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Conference Venue</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
                          Bharati Vidyapeeth's Institute of Management & Information Technology (BVIMIT)<br />
                          Sector 8, C.B.D. Belapur,<br />
                          Navi Mumbai, Maharashtra - 400614
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
