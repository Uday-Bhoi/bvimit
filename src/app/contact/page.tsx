"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import SiteShell from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Clock, Send, ExternalLink, GraduationCap, Briefcase, FileText } from "lucide-react";

export default function ContactPage() {
  const submitEnquiry = useMutation(api.enquiries.submit);
  const [activeTab, setActiveTab] = useState<"admissions" | "examinations" | "placements">("admissions");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admissions Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
      toast.success("Successful", {
        description: "Your inquiry has been submitted successfully.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Admissions Inquiry",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed", {
        description: "An error occurred while submitting. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get in Touch
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-slate-300 md:text-lg">
              Have a question or need assistance? Reach out to the Admissions Hub, Examination Helpdesk, Placement Cell, or submit an inquiry below.
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7879327177307!2d73.04228834999996!3d19.029064199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24ae7f38c4d%3A0x6c245daebfcc7c33!2sBharati+Vidyapeeth%E2%80%99s+Institute+of+Management+Studies+%26+Research!5e0!3m2!1sen!2sin!4v1441539154286"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BVIMIT Google Maps Location"
              />
            </motion.div>
          </div>
        </section>

        {/* Info & Form Section */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-foreground">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-card border border-border rounded-3xl hover:border-primary/30 transition-all">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Campus Address</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Sector 8, C.B.D. Belapur, Navi Mumbai, Mumbai - 400614
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-card border border-border rounded-3xl hover:border-primary/30 transition-all">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        +91 8779669041, +91 8657008017, +91 8657008016
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        022-27578415 / 27572433
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-card border border-border rounded-3xl hover:border-primary/30 transition-all">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <a href="mailto:principal.bvimit@bharatividyapeeth.edu" className="text-primary hover:underline">
                          principal.bvimit@bharatividyapeeth.edu
                        </a>
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <a href="mailto:principal.bvimit@bvimit.co.in" className="text-primary hover:underline">
                          principal.bvimit@bvimit.co.in
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-6 bg-card border border-border rounded-3xl hover:border-primary/30 transition-all">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl h-fit">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Official Website</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <a href="https://www.bvimit.co.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          www.bvimit.co.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Portal / Form */}
              <div className="lg:col-span-7 bg-card p-8 md:p-10 border border-border rounded-[2.5rem] shadow-sm">
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-foreground mb-2">Admission & General Inquiry Portal</h3>
                  <p className="text-muted-foreground text-sm">Please send us your inquiry and our desk will respond shortly.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all text-foreground font-semibold placeholder:opacity-40"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all text-foreground font-semibold placeholder:opacity-40"
                        placeholder="yourname@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all text-foreground font-semibold placeholder:opacity-40"
                        placeholder="Mobile or Landline"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all text-foreground font-semibold"
                      >
                        <option>Admissions Inquiry</option>
                        <option>Examination Support</option>
                        <option>Placement Inquiry</option>
                        <option>General Information</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/45 transition-all text-foreground font-semibold placeholder:opacity-40 resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl h-14 font-black uppercase tracking-widest text-xs shadow-md shadow-primary/10 group cursor-pointer"
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Department Helpdesks Section */}
        <section className="py-16 bg-muted/20 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black tracking-tight text-foreground mb-2">
                Departmental Helpdesks
              </h2>
              <p className="text-muted-foreground font-medium">
                Direct contacts for Admissions, Examinations, and Placements.
              </p>
            </div>

            {/* Tab Switches */}
            <div className="flex justify-center gap-2 mb-10 bg-muted/65 p-1 rounded-2xl w-fit mx-auto">
              {[
                { id: "admissions", label: "Admissions", icon: GraduationCap },
                { id: "examinations", label: "Examinations", icon: FileText },
                { id: "placements", label: "Placements", icon: Briefcase },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === "admissions" && (
                <>
                  {[
                    { name: "Dr. Jyoti Kharade", role: "Admission Committee Head" },
                    { name: "Prof. Manish Dubey", role: "Placement & Admission Support" },
                    { name: "Prof. Priya Chandran", role: "Admissions Advisor" },
                    { name: "Dr. Pratibha Deshmukh", role: "Admissions Advisor" },
                    { name: "Mr. Amol Ghatge", role: "Office Administrative Support" },
                  ].map((staff, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-3xl hover:shadow-md transition-all">
                      <h4 className="text-base font-black text-foreground mb-1">{staff.name}</h4>
                      <p className="text-xs text-primary font-bold mb-3">{staff.role}</p>
                      <p className="text-xs text-muted-foreground font-medium">
                        Admissions Enquiry Contact: <br />
                        <span className="font-bold text-foreground">+91 8657008017 / +91 8657008016</span>
                      </p>
                    </div>
                  ))}
                </>
              )}

              {activeTab === "examinations" && (
                <>
                  <div className="p-6 bg-card border border-border rounded-3xl hover:shadow-md transition-all md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                    <div>
                      <h4 className="text-lg font-black text-foreground mb-1">Online Examination Support Form</h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        Submit queries related to schedules, results, or certifications directly via the official form.
                      </p>
                    </div>
                    <a
                      href="https://forms.gle/rCpubrXGRvaJTtPV7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 h-12 bg-primary text-white text-xs font-black uppercase tracking-wider rounded-2xl hover:bg-primary/95 transition-all shadow"
                    >
                      Examination Support Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  {[
                    { name: "Ms. Shravani Pawar", phone: "9820328381" },
                    { name: "Ms. Nidhi", phone: "8291360059" },
                    { name: "Mr. Devdas Ghadage", phone: "8108578215" },
                    { name: "Dr. Suhasini Vijaykumar", phone: "+918657008017" },
                  ].map((staff, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-3xl hover:shadow-md transition-all">
                      <h4 className="text-base font-black text-foreground mb-1">{staff.name}</h4>
                      <p className="text-xs text-primary font-bold mb-3">Examination Helpdesk</p>
                      <p className="text-xs text-muted-foreground font-medium">
                        Phone: <br />
                        <a href={`tel:${staff.phone}`} className="font-bold text-foreground hover:underline">{staff.phone}</a>
                      </p>
                    </div>
                  ))}
                </>
              )}

              {activeTab === "placements" && (
                <>
                  {[
                    { name: "Mr. Manish Dubey", role: "Training and Placement Officer", phone: "+918657008016" },
                    { name: "Ms. Sudeshna Roy", role: "Placement Assistant", phone: "+918657008016" },
                  ].map((staff, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-3xl hover:shadow-md transition-all">
                      <h4 className="text-base font-black text-foreground mb-1">{staff.name}</h4>
                      <p className="text-xs text-primary font-bold mb-3">{staff.role}</p>
                      <p className="text-xs text-muted-foreground font-medium">
                        Helpdesk: <br />
                        <a href={`tel:${staff.phone}`} className="font-bold text-foreground hover:underline">{staff.phone}</a>
                      </p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
