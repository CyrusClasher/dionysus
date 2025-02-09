"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Dionysus analyze my code?",
    answer:
      "Dionysus uses advanced AI algorithms to analyze your code, understanding its structure, patterns, and potential issues. It can provide insights, summaries, and answer questions about your codebase.",
  },
  {
    question: "Is my code safe and secure?",
    answer:
      "Yes, your code's security is our top priority. We use industry-standard encryption and security practices. Dionysus only accesses the repositories you explicitly grant permission to.",
  },
  {
    question: "How does the credit system work?",
    answer:
      "Credits are used for various operations like code analysis, generating summaries, and answering queries. Different operations consume different amounts of credits. You can purchase credits as needed, and they don't expire.",
  },
  {
    question: "Can I use Dionysus with private repositories?",
    answer:
      "Dionysus works with both public and private repositories. Our secure GitHub integration ensures that your private code remains private.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-accent px-4 py-20 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-gradient mb-12 text-center text-4xl font-bold md:text-5xl">
          Frequently Asked Questions
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-primary/20 bg-card"
              >
                <AccordionTrigger className="px-6 py-4 transition-colors hover:bg-muted/50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
