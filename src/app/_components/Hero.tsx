"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedRepositoryAnalysis from "./AnimatedRepositoryAnalysis";

export default function Hero() {
  return (
    <section className="overflow-hidden px-4 py-20 md:px-6 lg:px-8">
      <div className="container relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-gradient mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
            Supercharge Your GitHub Workflow with AI
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl">
            Analyze, summarize, and gain insights from your repositories
            effortlessly.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              onClick={() => (window.location.href = "/dashboard")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-0 mt-12"
        >
          {/* <AnimatedRepositoryAnalysis /> */}
        </motion.div>
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-primary/20 opacity-20 blur-3xl filter"></div>
      </div>
    </section>
  );
}
