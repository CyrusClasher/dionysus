"use client";

import { motion } from "framer-motion";
import { Github, Link, Database, Search } from "lucide-react";

const steps = [
  {
    icon: Github,
    title: "Sign in with GitHub",
    description: "Connect your GitHub account securely.",
  },
  {
    icon: Link,
    title: "Connect your repository",
    description: "Choose the repositories you want to analyze.",
  },
  {
    icon: Database,
    title: "Index and analyze your code",
    description: "Our AI processes and understands your codebase.",
  },
  {
    icon: Search,
    title: "Query, summarize, and extract insights",
    description: "Get valuable insights and answers about your code.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-gradient mb-12 text-center text-4xl font-bold md:text-5xl">
          How It Works
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-primary to-secondary"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div
                className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
              >
                <h3 className="mb-2 text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-card">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
