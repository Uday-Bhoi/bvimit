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

export default function ICET2024Page() {
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
              Legacy Conference Report
            </p>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
              2nd International Conference on Emerging Trends : Innovation & Challenges in Information Technology and Management (ICET 2024)
            </h1>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>29th & 30th June 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Hybrid Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <a href="/legacy/pdfs/ICET 2024-CONFERENCE REPORT.pdf" target="_blank" className="hover:underline">
                  Download Conference Report
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
                          <Info className="h-6 w-6 text-primary" /> About ICET 2024
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                          International Conference on Emerging Trends : Innovation & Challenges in Information Technology and Management 2024 has a profound influence on all the branches of computer application, computer science and management as well. New technologies are constantly emerging which are enabling applications in various domains and services. ICET 2024 was organized by Bharati Vidyapeeth's Institute of Management and Information Technology, Navi Mumbai, for the presentation of technological advancement and research in the theoretical, experimental and applied areas.
                        </p>
                        <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-bold text-sm">
                          • All accepted papers were published in the UGC Care Journal: Indian Journal of Technical Education with ISSN 0971-3034.
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <BookOpen className="h-6 w-6 text-primary" /> Topics Covered
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
                                <td className="px-6 py-4">30th March 2024</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Full Paper Submission (doc file only)</td>
                                <td className="px-6 py-4">30th April 2024</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Acceptance Notification</td>
                                <td className="px-6 py-4">15th May 2024</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Last date for Registration</td>
                                <td className="px-6 py-4">15th June 2024</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <FileText className="h-6 w-6 text-primary" /> Paper Submission Archive
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify mb-4">
                          Submission portal used during ICET 2024 was hosted on Microsoft CMT:
                        </p>
                        <a 
                          href="https://cmt3.research.microsoft.com/ICET2024" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-primary hover:underline font-bold text-sm"
                        >
                          https://cmt3.research.microsoft.com/ICET2024
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Registration Tab */}
                  {activeTab === "registration" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-primary" /> Registration Fees (Archive)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          {[
                            { role: "Students / Research Scholars", fee: "Rs. 500 /-" },
                            { role: "Industry Delegates / Faculty", fee: "Rs. 1,000 /-" },
                            { role: "Foreign Delegates", fee: "$ 20.00 USD" }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-muted/40 p-6 rounded-2xl border border-border text-center">
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{item.role}</p>
                              <p className="text-2xl font-black text-foreground">{item.fee}</p>
                            </div>
                          ))}
                        </div>
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
                            <li>• Siddhartho Sengupta (Director, AWS Business Unit at TCS, USA)</li>
                            <li>• Mr. Gaurav Goel (Head of IT, Tele2 AB, Stockholm, Sweden)</li>
                            <li>• Dr. Durgesh Kumar Mishra (Director, SCSIT, Symbiosis, Indore)</li>
                            <li>• Dr. Krishan Tuli (HOD University Institute of Computing, Chandigarh University, Punjab)</li>
                            <li>• Dr. Gopakumaran Thampi (Principal, TSEC, University of Mumbai)</li>
                            <li>• Dr. Sachin Kadam (Professor & Head - Ph.D. Section, BVU, Pune)</li>
                            <li>• Dr. Bindu Krishnan (Senior Statistician, IBM India Software Labs, Kochi)</li>
                            <li>• Dr. Rajeev R R (Programme Head, ICFOSS, Kerala)</li>
                            <li>• Dr. Narendra M. Shekokar (HOD CS, D.J. Sanghvi College of Engineering, Mumbai)</li>
                            <li>• Dr. Ganesh Magar (HOD, PG Dept. of CS, SNDT University)</li>
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
                          <Award className="h-6 w-6 text-primary" /> Ethical & Review Policy
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          All submitted manuscripts were subjected to plagiarism verification and rigorous blind review by conference reviewers. Only unique, non-published papers were selected for UGC Care/UGC-approved proceedings.
                        </p>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4">Conference Brochure & Report</h2>
                        <div className="flex flex-wrap gap-4">
                          <a 
                            href="/legacy/pdfs/ICET24.pdf" 
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/95 transition-all shadow"
                          >
                            <FileText className="h-4 w-4" /> View Brochure PDF
                          </a>
                          <a 
                            href="/legacy/pdfs/ICET 2024-CONFERENCE REPORT.pdf" 
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-slate-700 transition-all shadow"
                          >
                            <FileText className="h-4 w-4" /> View Conference Report
                          </a>
                        </div>
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
