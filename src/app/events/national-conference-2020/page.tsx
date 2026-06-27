"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteShell from "@/components/layout/SiteShell";
import { 
  Calendar, 
  MapPin, 
  Phone, 
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

export default function NCIT2020Page() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About NCIT & CFP" },
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
              National Conference
            </p>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl leading-tight">
              3rd National Conference on Emerging Trends: Innovations & Challenges in IT & Management (NCIT 2020)
            </h1>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>29th June 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Online Mode</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <a href="/legacy/pdfs/NewNCIT20.pdf" target="_blank" className="hover:underline">
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
                          <Info className="h-6 w-6 text-primary" /> About NCIT 2020
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                          National Conference on Emerging Trends: Innovations & Challenges in IT & Management 2020 has a profound influence on all the branches of computer application, computer science and management as well. Organized by Bharati Vidyapeeth's Institute of Management and Information Technology, Navi Mumbai, in collaboration with Yashwantrao Mohite Institute of Management, Karad, the conference presented technological advancements and research in theoretical, experimental, and applied fields.
                        </p>
                        <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-bold text-sm">
                          • All papers presented were published in UGC CARE listed journals.
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <BookOpen className="h-6 w-6 text-primary" /> Call for Papers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2.5">
                            {[
                              "Artificial intelligence tools and applications",
                              "Big Data, Data Analysis and Data Mining",
                              "Business Intelligence",
                              "Business Process Reengineering & Management",
                              "Data Analytics",
                              "Distributed & Parallel Computing",
                              "E-Governance, E-Commerce, E-Business",
                              "Embedded Systems",
                              "Green Computing"
                            ].map((topic, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                                <ChevronRight className="h-4 w-4 text-primary shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                          <ul className="space-y-2.5">
                            {[
                              "Human computer interaction & UX Design",
                              "Image Processing & pattern recognition",
                              "Internet of Things",
                              "Machine learning & Deep Learning",
                              "Networking and Communications",
                              "Multimedia & Computer Graphics",
                              "Natural Language Processing",
                              "Security Science & Technology"
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
                                <td className="px-6 py-4 font-bold text-foreground">Full Paper Submission</td>
                                <td className="px-6 py-4">22nd June 2020</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2">
                          <FileText className="h-6 w-6 text-primary" /> Paper Submission Archive
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          Submissions were made via Google Forms or email to the conference team:
                        </p>
                        <div className="space-y-2">
                          <a href="mailto:conference.bvimit@gmail.com" className="text-primary hover:underline font-bold block text-sm">
                            Email: conference.bvimit@gmail.com
                          </a>
                          <a href="https://forms.gle/k4vWWYPZ3yytTcDN9" target="_blank" rel="noreferrer" className="text-primary hover:underline font-bold block text-sm">
                            Portal: https://forms.gle/k4vWWYPZ3yytTcDN9
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Registration Tab */}
                  {activeTab === "registration" && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                          <DollarSign className="h-6 w-6 text-primary" /> Registration Fee
                        </h2>
                        <div className="bg-muted/40 p-6 rounded-2xl border border-border max-w-sm mb-6">
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Registration Fee</p>
                          <p className="text-2xl font-black text-foreground">Rs. 2,500 /-</p>
                        </div>
                        <ul className="space-y-3">
                          {[
                            "Registration of all authors is mandatory for UGC CARE publication.",
                            "Participation certificates were issued to all registered participants."
                          ].map((rule, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Committee Tab */}
                  {activeTab === "committee" && (
                    <div className="space-y-8">
                      <h2 className="text-2xl font-black tracking-tight mb-6 flex items-center gap-2">
                        <Users className="h-6 w-6 text-primary" /> Committees
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Chief Patron</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground font-semibold">
                              <li>• Hon'ble Dr. Shivajirao Kadam (Chancellor, BVDU, Pune)</li>
                              <li>• Hon'ble Dr. Vishwajeet Kadam (Pro-Vice Chancellor & Secretary, BVDU, Pune)</li>
                              <li>• Hon'ble Dr. Manikrao Salunkhe (Vice Chancellor, BVDU, Pune)</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Patron</h3>
                            <p className="text-sm text-muted-foreground font-semibold">• Dr. V. J. Kadam (Director, Complex Complex, Navi Mumbai)</p>
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">General Chair</h3>
                            <ul className="space-y-1 text-sm text-muted-foreground font-semibold">
                              <li>• Dr. Suhasini Vijaykumar (Principal, BVIMIT, Navi Mumbai)</li>
                              <li>• Dr. N. R. Jadhav (Director, BVYMIM, Karad)</li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-black uppercase tracking-wider text-primary mb-3">Convener</h3>
                          <ul className="space-y-1 text-sm text-muted-foreground font-semibold">
                            <li>• Ms. Shravani Pawar (BVIMIT, Navi Mumbai)</li>
                            <li>• Ms. Uttara Athawale (BVIMIT, Navi Mumbai)</li>
                            <li>• Dr. H. N. Renushe (BVYMIM, Karad)</li>
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
                          All submitted research papers went through standard screening for plagiarism and compliance.
                        </p>
                      </div>

                      <div className="border-t border-border pt-8">
                        <h2 className="text-2xl font-black tracking-tight mb-4">Conference Brochure & Schedule</h2>
                        <div className="flex flex-wrap gap-4">
                          <a 
                            href="/legacy/pdfs/NewNCIT20.pdf" 
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-primary/95 transition-all shadow"
                          >
                            <FileText className="h-4 w-4" /> Download 2020 Brochure PDF
                          </a>
                          <a 
                            href="/legacy/pdfs/Conference Schedule updated.pdf" 
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-slate-700 transition-all shadow"
                          >
                            <FileText className="h-4 w-4" /> Download Conference Schedule PDF
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
