import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import {
  footerContactInfo,
  footerLinkGroups,
  footerMetaLinks,
  footerSocialLinks,
  siteBranding,
  siteFooterSummary,
} from "@/config/site-navigation";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link
              href={siteBranding.homeHref}
              className="flex items-center space-x-3 group cursor-pointer transition-opacity hover:opacity-80"
            >
              <img
                src="/assets/images/bharati_logo.png"
                alt={`${siteBranding.shortName} logo`}
                className="h-12 w-12 transition-transform group-hover:scale-105"
              />
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {siteBranding.shortName}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {siteBranding.location}
                </p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              {siteFooterSummary}
            </p>
            <div className="flex space-x-4">
              {footerSocialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                  className="p-2 bg-muted/50 rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <socialLink.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {footerLinkGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 + 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {footerContactInfo.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {footerContactInfo.phones.map((phone) => (
                    <a
                      key={phone.label}
                      href={phone.href}
                      className="block hover:underline"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href={footerContactInfo.email.href}
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors break-all"
                >
                  {footerContactInfo.email.label}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden h-32 border border-border/50 shadow-sm transition-transform hover:scale-[1.02] duration-300">
              <iframe
                src={footerContactInfo.mapEmbedUrl}
                title={`${siteBranding.shortName} location`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            Copyright 2026 Bharati Vidyapeeth&apos;s Institute of Management &
            Information Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerMetaLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary text-sm transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
