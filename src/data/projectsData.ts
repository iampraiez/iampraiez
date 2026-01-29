import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "TimeForge",
    description:
      "A powerful time management and personal productivity tool with ai insights.",
    stack: ["Node.js", "React", "PostgreSQL", "Express", "JWT", "Gemini API"],
    githubUrl: "https://github.com/iampraiez/Persona",
    liveUrl: "https://timeforge-eight.vercel.app",
    image: "./timeforge.png",
  },
  {
    id: 2,
    title: "TaskNest",
    description:
      "A team task manager with intellignece to streamline workflow and boost productivity.",
    stack: ["Node.js", "TypeScript", "Fastify", "Auth0", "Prisma ORM"],
    githubUrl: "https://github.com/iampraiez/TaskNest",
    liveUrl: "https://task-nest-gamma-eight.vercel.app",
    image: "./tasknest.png",
  },
  {
    id: 3,
    title: "MemoryLane",
    description:
      "Memory Lane is an AI-powered personal timeline app that helps you remember important moments and events from your life.",
    stack: ["Nextjs", "TypeScript", "Dexie", "Next-Auth", "Drizzle ORM"],
    githubUrl: "https://github.com/iampraiez/memo",
    liveUrl: "https://memory-lane-chi.vercel.app/",
    image: "./memory.png",
  },
];
