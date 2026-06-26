import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto relative px-4 text-center">
          <div className="flex items-center justify-center min-h-[200px]">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
              <p className="text-lg text-muted-foreground">Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
