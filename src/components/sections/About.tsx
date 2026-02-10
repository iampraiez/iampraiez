import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const techStacks = [
  "Node.js",
  "Express",
  "Fastify",
  "Nestjs",
  "TypeScript",
  "Nextjs",
  "React",
  "PostgreSQL",
  "Drizzle",
  "Prisma",
  "Next-Auth",
  "REST APIs",
  "JWT",
  "Gemini API",
  "Auth0",
  "Prisma ORM",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  //picture of me with laptop I guess from backend
  return (
    <section id="about" className="py-20 bg-(--bg-secondary)">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my skills and experience"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <motion.p className="text-(--text-secondary) mb-4">
              I&apos;m a Backend-focused full stack developer with expertise in
              building fast and scalable web applications. With a focus on
              Node.js and the modern JavaScript ecosystem, I create robust
              solutions that power seamless user experiences.
            </motion.p>
            <motion.p className="text-(--text-secondary) mb-4">
              My specialty lies in developing RESTful APIs, implementing
              authentication systems, and optimizing database performance.
              I&apos;m also experienced with React for frontend development,
              allowing me to understand and collaborate effectively with
              full-stack projects.
            </motion.p>
            <motion.p className="text-(--text-secondary) mb-6">
              I&apos;m committed to writing clean, maintainable code following
              best practices and design patterns. My goal is to create efficient
              solutions that solve real-world problems while ensuring security,
              scalability, and performance.
            </motion.p>

            <motion.h3 className="text-xl font-semibold text-neo-green mb-4">
              Tech Stack
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {techStacks.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  className="tech-badge"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden neo-border">
                <Image
                  src="./design.svg"
                  alt="Backend Developer Abstract design"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  width={320}
                  height={320}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-lg border border-neo-blue-bright z-[-1]"></div>
              <motion.div
                className="absolute -top-6 -left-6 p-4 bg-(--bg-primary) neo-border-blue"
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-neo-blue-bright font-mono">
                  Backend Developer
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
