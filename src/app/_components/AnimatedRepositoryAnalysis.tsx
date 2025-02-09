"use client";

import { motion } from "framer-motion";

export default function AnimatedRepositoryAnalysis() {
  return (
    <div className="rounded-lg border border-accent bg-card p-6 shadow-lg">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="mb-6 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
      />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="h-4 w-4 rounded-full bg-primary"></div>
            <div
              className="h-4 rounded-full bg-accent"
              style={{ width: `${Math.random() * 50 + 50}%` }}
            ></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
