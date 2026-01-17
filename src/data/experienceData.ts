import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "TaskNest",
    period: "May 2025",
    description: [
      "Building a full-stack task management application using Node.js, Fastify, and React.",
      "Implementing secure authentication and authorization flows using Auth0.",
      "Designing efficient PostgreSQL schemas and optimizing queries for performance gains with Prisma.",
      "Leading project architecture and mentoring a junior collaborator for faster delivery.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer (Personal Project)",
    company: "TimeForge",
    period: "April 2025",
    description: [
      "Built an AI-powered goal tracking and scheduling app using React, Node.js, and PostgreSQL.",
      "Integrated the Gemini API to deliver personalized suggestions based on user goals and patterns.",
      "Implemented a real-time deadline notification system using asynchronous job queues.",
      "Designed and executed the full system architecture, UI/UX, and API logic end-to-end.",
    ],
  },
  {
    id: 4,
    role: "Full Stack Developer",
    company: "Memory Lane",
    period: "June 2025",
    description: [
      "Led both frontend and backend development for a comprehensive UI kit and component library for an AI-powered personal timeline application using React, TypeScript, and PostgreSQL.",
      "Designed a warm, accessible design system with Tailwind CSS, ensuring WCAG 2.1 AA compliance and responsive breakpoints.",
      "Developed advanced components like MultiSelect, MediaUploader, and DatePicker, with a focus on offline support using optimistic UI updates.",
      "Built complete page flows including onboarding, timeline, search, and admin dashboard with infinite scroll and lightbox gallery.",
      "Integrated state management for offline support, handling sync states, and pending operations queue with visual indicators.",
      "Implemented backend APIs and database management with Prisma ORM, ensuring seamless data synchronization and performance optimization.",
    ],
  },
  {
    id: 5,
    role: "Backend-Focused Full Stack Developer (SWEP Project)",
    company: "IVotee",
    period: "September 2025",
    description: [
      "Spearheaded backend development for IVotee, a secure e-voting platform for universities, built with Express, PostgreSQL, and Prisma ORM, while contributing significantly to frontend development with React and TypeScript.",
      "Designed and implemented a hash-chain verification system using SHA256 to ensure ballot integrity and prevent tampering.",
      "Developed secure magic link authentication and role-based access control for students, faculty admins, and super admins, with JWT-based sessions.",
      "Optimized PostgreSQL database schemas and queries for real-time vote counting and analytics, supporting scope-based elections and year filtering.",
      "Contributed to a mobile-first, WCAG-compliant frontend with Tailwind CSS and Lucide React icons, ensuring a seamless user experience.",
      "Ensured production readiness with comprehensive audit logging, rate limiting, and environment-specific configurations, collaborating with team members to deliver a cohesive platform.",
    ],
  },
];
