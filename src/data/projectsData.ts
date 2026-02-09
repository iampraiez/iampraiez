import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Memory Lane",
    description:
      "AI-powered personal timeline application that captures, organizes, and rediscovers precious memories with Google Gemini AI story generation, family sharing, and offline-first architecture.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "NextAuth.js", "Gemini AI"],
    githubUrl: "https://github.com/iampraiez/memo",
    liveUrl: "https://memory-lane-app.vercel.app",
    image: "./memo.png",
  },
  {
    id: 2,
    title: "TimeForge",
    description:
      "AI-driven productivity ecosystem with Gemini-powered multi-day scheduling, intelligent goal roadmaps, analytics insights, and enterprise-grade Web Push notifications system.",
    stack: ["React", "Node.js", "PostgreSQL", "Express", "Prisma ORM", "Gemini API"],
    githubUrl: "https://github.com/iampraiez/Persona",
    liveUrl: "https://timeforge-persona.vercel.app",
    image: "./timeforge.png",
  },
  {
    id: 3,
    title: "Nexus Analytics",
    description:
      "Production-ready analytics ecosystem featuring a custom event-tracking SDK (nexus-avail), AI-powered insights dashboard with Gemini 2.0, and real-time analytics processing at 10,000+ events/second.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Gemini AI", "Apache ECharts", "NextAuth.js"],
    githubUrl: "https://github.com/iampraiez/commerce_brain",
    liveUrl: "https://nexus-anal.vercel.app",
    image: "./nexus.png",
  },
];
