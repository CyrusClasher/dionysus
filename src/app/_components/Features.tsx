"use client";

import { motion } from "framer-motion";
import {
  Code,
  GitCommit,
  Search,
  Video,
  Github,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "AI-Powered Code Analysis",
    description: "Automatically index and analyze repository files.",
  },
  {
    icon: GitCommit,
    title: "Commit Summaries",
    description: "Get AI-generated summaries of repository commits.",
  },
  {
    icon: Search,
    title: "Smart Repository Queries",
    description:
      "Ask questions and retrieve relevant files using vector search.",
  },
  {
    icon: Video,
    title: "Meeting Insights",
    description:
      "Upload meetings and extract AI-generated summaries and action points.",
  },
  {
    icon: Github,
    title: "Seamless GitHub Integration",
    description: "Connect your repositories effortlessly.",
  },
  {
    icon: CreditCard,
    title: "Credit-Based Pricing",
    description: "Pay only for what you use via Stripe.",
  },
];

export default function Features() {
  return (
    <section className="bg-accent px-4 py-20 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-gradient mb-12 text-center text-4xl font-bold md:text-5xl">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-primary/20 bg-card p-6 shadow-lg transition-colors hover:border-primary/40"
            >
              <feature.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
