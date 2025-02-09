"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import user from "public/user.svg";

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer",
    company: "TechCorp",
    content:
      "Dionysus has revolutionized our code review process. It's like having an AI assistant that understands our codebase.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    company: "StartupX",
    content:
      "The insights we get from Dionysus have helped us identify and fix potential issues before they become problems.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Mike Johnson",
    role: "Product Manager",
    company: "InnovateCo",
    content:
      "Dionysus has significantly improved our team's productivity. It's an essential tool for any development team.",
    avatar: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-20 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-gradient mb-12 text-center text-4xl font-bold md:text-5xl">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-lg border border-primary/20 bg-card p-6 shadow-lg"
            >
              <div className="flex-grow">
                <p className="mb-4 italic text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <Image
                  // src={testimonial.avatar || "/placeholder.svg" }
                  src={user}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="mr-4 rounded-full border-2 border-black"
                />

                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
