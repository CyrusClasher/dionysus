"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-background px-4 py-20 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-primary/20 bg-card p-8 text-center shadow-lg"
        >
          <h2 className="text-gradient mb-4 text-3xl font-bold md:text-4xl">
            Ready to transform your GitHub experience?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Start analyzing your repositories with AI-powered insights today.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign Up & Start for Free
          </Button>
        </motion.div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Dionysus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
