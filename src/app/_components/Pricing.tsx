"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="bg-accent px-4 py-20 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-gradient mb-12 text-center text-4xl font-bold md:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md rounded-lg border border-primary/20 bg-card p-8 text-center shadow-lg"
        >
          <h3 className="mb-4 text-2xl font-bold">Pay as You Go</h3>
          <div className="text-gradient mb-4 text-6xl font-bold">
            $1{" "}
            <span className="text-2xl text-muted-foreground">/ 50 credits</span>
          </div>
          <p className="mb-8 text-muted-foreground">
            No monthly fees. Only pay for what you use.
          </p>
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Buy Credits
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
