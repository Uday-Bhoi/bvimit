import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Syllabus() {
  const pdfUrl =
    "https://bvimit.co.in/bvimit/pdf/MCAsyllabus%20AC20-21UOM.pdf";

  return (
    <section id="syllabus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MCA Syllabus
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Official University of Mumbai MCA syllabus (Academic Year 2020–21).
            Review detailed semester-wise structure, core subjects, electives,
            assessment patterns, and credits. Opens in a new tab.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    University of Mumbai MCA Syllabus (PDF)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Includes program objectives, semester-wise course layout,
                    lab components, and examination scheme.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    aria-label="Open MCA Syllabus PDF in new tab"
                  >
                    <Button size="lg" className="gap-2">
                      Open Syllabus (PDF)
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
