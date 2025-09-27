import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Sector 8, C.B.D. Belapur", "Navi Mumbai - 400614", "Maharashtra, India"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["022-27578415", "+91 8657008016", "+91 8657008017"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["principal.bvimit@bharatividyapeeth.edu", "info@bvimit.co.in"]
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.bvimit.co.in"]
    }
  ];

  // Add: mapping helpers for actionable links
  const mapsUrl = "https://maps.app.goo.gl/sT3KAbP2aTm7UbyWA";
  const getHref = (title: string, value: string) => {
    if (title === "Address") return mapsUrl;
    if (title === "Phone") return `tel:${value.replace(/[^+\d]/g, "")}`;
    if (title === "Email") return `mailto:${value}`;
    if (title === "Website") return value.startsWith("http") ? value : `https://${value}`;
    return "#";
  };
  const isExternal = (title: string) => title === "Address" || title === "Website";

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about admissions or want to know more about our programs? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <a
                      href={getHref(info.title, info.details[0])}
                      target={isExternal(info.title) ? "_blank" : undefined}
                      rel={isExternal(info.title) ? "noopener noreferrer" : undefined}
                      className="flex-shrink-0 p-3 bg-primary/10 rounded-lg cursor-pointer"
                      aria-label={info.title}
                    >
                      <info.icon className="h-6 w-6 text-primary" />
                    </a>
                    <div>
                      <a
                        href={getHref(info.title, info.details[0])}
                        target={isExternal(info.title) ? "_blank" : undefined}
                        rel={isExternal(info.title) ? "noopener noreferrer" : undefined}
                        className="font-semibold text-gray-900 mb-2 inline-block hover:underline cursor-pointer"
                      >
                        {info.title}
                      </a>
                      {info.details.map((detail, idx) => (
                        <div key={idx}>
                          {
                            info.title === "Address" ? (
                              // Keep address details as plain, non-clickable text
                              <div className="text-gray-600 break-words">
                                {detail}
                              </div>
                            ) : (
                              // Make Phone, Email, and Website details clickable
                              <a
                                href={getHref(info.title, detail)}
                                target={isExternal(info.title) ? "_blank" : undefined}
                                rel={isExternal(info.title) ? "noopener noreferrer" : undefined}
                                className="text-gray-600 break-words hover:underline"
                              >
                                {detail}
                              </a>
                            )
                          }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-semibold text-gray-900">Office Hours</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden h-56 md:h-72">
              <iframe
                src="https://www.google.com/maps?q=BVIMIT%20Sector%208%20C.B.D.%20Belapur%2C%20Navi%20Mumbai%20400614&output=embed"
                title="BVIMIT Location Map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href="https://maps.app.goo.gl/sT3KAbP2aTm7UbyWA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}