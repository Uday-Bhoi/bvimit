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

export default function ICET2026Page() {
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
              International Conference
            </p>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
              3rd International Conference on Emerging Trends : Innovation & Challenges in Information Technology and Management (ICET 2026)
            </h1>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>10th & 11th April 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Hybrid Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>BVIMIT, Navi Mumbai</span>
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
                          <Info className="h-6 w-6 text-primary" /> About ICET 2026
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                          International Conference on Emerging Trends : Innovation & Challenges in Information Technology and Management 2026 has a profound influence on all the branches of computer application, computer science and management as well. New technologies are constantly emerging which are enabling applications in various domains and services. ICET 2026 is organized by Bharati Vidyapeeth's Institute of Management and Information Technology, Navi Mumbai, for the presentation of technological advancement and research in the theoretical, experimental and applied areas.
                        </p>
                        <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-bold text-sm">
                          • All accepted papers will be published in ISBN-indexed Conference Proceedings.
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <BookOpen className="h-6 w-6 text-primary" /> Call for Papers
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify mb-6">
                          ICET 2026 is the premier forum for the presentation of new advances and research in the fields of IT and Management. The conference will bring together academicians, leading researchers, engineers and scientists. Topics of interest for submission include, but are not limited to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2.5">
                            {[
                              "Artificial intelligence tools and applications",
                              "Big Data, Data Analysis and Data Mining",
                              "Business Intelligence",
                              "Distributed and Parallel Computing",
                              "Embedded System",
                              "Human computer interaction & UX Design",
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

                  {/* Important Dates & Submission Tab */}
                  {activeTab === "dates-submission" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <Calendar className="h-6 w-6 text-primary" /> Important Dates
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
                                <td className="px-6 py-4">6th March 2026</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Full Paper Submission (doc file only)</td>
                                <td className="px-6 py-4">30th March 2026</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Acceptance Notification</td>
                                <td className="px-6 py-4">31st March 2026</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground">Last date for Registration</td>
                                <td className="px-6 py-4">1st April 2026</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <FileText className="h-6 w-6 text-primary" /> Paper Submission Guidelines
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify mb-6">
                          Submit only novel, previously unpublished papers in the area of computer applications and information technology. Maximum length of research paper should not exceed 3000 words including an abstract of 250 words. All diagrams, figures and tables should be in black and white only. The first page of manuscript must include the title, author(s) with affiliations and detailed address including email id.
                        </p>
                        <div className="overflow-hidden border border-border rounded-2xl mb-6">
                          <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-border">
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40 w-1/3">Paper Submission Link</td>
                                <td className="px-6 py-4">
                                  <a 
                                    href="https://cmt3.research.microsoft.com/ICET2026" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-primary hover:underline font-bold"
                                  >
                                    https://cmt3.research.microsoft.com/ICET2026
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 font-bold text-foreground bg-muted/40 w-1/3">Query Email</td>
                                <td className="px-6 py-4 text-primary font-bold">
                                  <a href="mailto:bvimit.conference@bharatividyapeeth.edu">
                                    bvimit.conference@bharatividyapeeth.edu
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                          All papers will be carefully reviewed by experts and reviews will be reverted to the author(s) with comments to ensure the high quality of the accepted papers.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Registration Tab */}
                  {activeTab === "registration" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-primary" /> Registration & Fees
                        </h2>
                        <ul className="space-y-3 mb-8">
                          {[
                            "Registration of all the authors is mandatory for the publication of papers in the conference proceedings.",
                            "Only authors are allowed to present their papers in the conference according to the Program schedule.",
                            "Participation certificate will be issued only to the registered participants.",
                            "All correspondence will be done with the authors through email only."
                          ].map((rule, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-lg font-black mb-4">Registration Fees Structure</h3>
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

                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
                          <span className="text-sm font-bold text-primary">Registration Details will be Mailed to accepted authors!</span>
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-6">Payment Details</h2>
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
                            <p className="text-sm text-muted-foreground font-semibold">• Dr. V. J. Kadam (Director, Educational Complex, Navi Mumbai)</p>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">General Chair</h3>
                            <p className="text-sm text-muted-foreground font-semibold">• Dr. Suhasini Vijaykumar (Principal, BVIMIT, Navi Mumbai)</p>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Convener</h3>
                            <ul className="space-y-1 text-sm text-muted-foreground font-semibold">
                              <li>• Dr. Shambhu Shankar Rai (Assistant Professor)</li>
                              <li>• Ms. Nidhi (Assistant Professor)</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Co-Convener</h3>
                            <p className="text-sm text-muted-foreground font-semibold">• Dr. Rasika Patil (Assistant Professor)</p>
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

                      <div className="border-t border-border pt-8">
                        <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-4">Organizing Committee</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground font-semibold">
                          <div>• Dr. Jyoti Kharade (Associate Professor, BVIMIT)</div>
                          <div>• Ms. Shravani Pawar (Assistant Professor, BVIMIT)</div>
                          <div>• Ms. Shubhangi Mahadik (Assistant Professor, BVIMIT)</div>
                          <div>• Dr. Pratibha Deshmukh (Assistant Professor, BVIMIT)</div>
                          <div>• Dr. Priya Chandran (Assistant Professor, BVIMIT)</div>
                          <div>• Mrs. Sudeshna Roy (Assistant Professor, BVIMIT)</div>
                          <div>• Mr. Manish Kumar (Assistant Professor, BVIMIT)</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Guidelines Tab */}
                  {activeTab === "guidelines" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <Award className="h-6 w-6 text-primary" /> Rules & Ethical Policy
                        </h2>
                        <div className="space-y-4">
                          {[
                            "All papers should be original and must not be published in any manner before or after the conference.",
                            "All Authors and Co-authors must inform their respective Dept. Head/Principal/Guide about the paper submission.",
                            "Number of Authors should be limited to 4 only and all authors must write their correct affiliation inside the paper.",
                            "ICET accepts papers for the conference only after review by the ICET Reviewers.",
                            "The Organizing Committee may not accept papers submitted after the last date of registration.",
                            "No author names can be added, modified or deleted after registration without written consent from all co-authors.",
                            "ICET never publishes any unregistered papers.",
                            "ICET is not responsible for validating original authorship; the submitter is considered the primary author.",
                            "Payment made for registering papers is non-refundable even if the paper is not selected.",
                            "If plagiarism or fake identity is detected post-publication, the research paper will be removed immediately."
                          ].map((rule, idx) => (
                            <div key={idx} className="flex gap-4 p-3 bg-muted/30 rounded-xl border border-border/40 text-sm text-muted-foreground">
                              <span className="font-black text-primary shrink-0">{idx + 1}.</span>
                              <span>{rule}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4">Manuscript & Publication Formats</h2>
                        <div className="flex flex-wrap gap-4">
                          <a 
                            href="/legacy/pdfs/conference-template.docx" 
                            download 
                            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/95 transition-all shadow"
                          >
                            <FileText className="h-4 w-4" /> Download Paper Template
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Contact & Venue Tab */}
                  {activeTab === "contact" && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-primary" /> Venue & Contacts
                      </h2>

                      <div className="rounded-[1.5rem] overflow-hidden border border-border shadow-sm h-64 mb-6">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7879327177307!2d73.04228834999996!3d19.029064199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24ae7f38c4d%3A0x6c245daebfcc7c33!2sBharati+Vidyapeeth%E2%80%99s+Institute+of+Management+Studies+%26+Research!5e0!3m2!1sen!2sin!4v1441539154286"
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                        ></iframe>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Conference Venue</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed font-semibold">
                            Bharati Vidyapeeth's Institute of Management & Information Technology (BVIMIT)<br />
                            Sector 8, C.B.D. Belapur,<br />
                            Navi Mumbai, Maharashtra - 400614
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Contact Persons</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-muted/40 rounded-xl border border-border">
                              <div>
                                <p className="text-xs font-black">Dr. Shambhu Shankar Rai</p>
                                <p className="text-[10px] text-muted-foreground">Convener</p>
                              </div>
                              <a href="tel:+919730430376" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                                <Phone className="h-3 w-3" /> 9730430376
                              </a>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-muted/40 rounded-xl border border-border">
                              <div>
                                <p className="text-xs font-black">Ms. Nidhi</p>
                                <p className="text-[10px] text-muted-foreground">Convener</p>
                              </div>
                              <a href="tel:+918291360059" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                                <Phone className="h-3 w-3" /> 8291360059
                              </a>
                            </div>
                          </div>
                        </div>
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
