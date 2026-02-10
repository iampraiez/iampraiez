import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Memory Lane (Personal Project)",
    period: "Febuary 2026",
    description: [
      "Built an AI-powered personal timeline application using Next.js 16, PostgreSQL, and Google Gemini AI with comprehensive memory capture and family sharing features.",
      "Engineered a warm, accessible design system with Tailwind CSS 4, achieving WCAG 2.1 AA compliance and implementing advanced components like MediaUploader, DatePicker, and infinite scroll timeline.",
      "Implemented offline-first architecture using Dexie.js (IndexedDB) with optimistic UI updates, sync state management, and pending operations queue with visual indicators.",
      "Developed AI story generation system leveraging Google Gemini API to create personalized narratives from user memories with customizable tone and length.",
      "Built complete authentication flow with NextAuth.js 5, including Google OAuth, email verification, and session management with secure credential handling.",
      "Integrated TanStack Query for server state management and Zustand for client state, ensuring seamless data synchronization and performance optimization.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "TimeForge (Personal Project)",
    period: "April 2025",
    description: [
      "Architected an AI-driven productivity ecosystem using React, Node.js/Express, and PostgreSQL with Prisma ORM, leveraging Google Gemini API for intelligent multi-day schedule generation.",
      "Designed and implemented a premium glassmorphism UI with Framer Motion animations, dark-mode-first aesthetic, and custom vanilla CSS design system for high-performance rendering.",
      "Built enterprise-grade dual-layer Web Push notification system (Upcoming and 'Starting Now' alerts) using VAPID, ensuring notifications work even when the app is closed.",
      "Developed advanced analytics dashboard with interactive charts powered by custom data aggregation, providing AI-generated productivity insights and habit optimization recommendations.",
      "Implemented comprehensive security architecture with Google OAuth 2.0, express-rate-limit, Helmet security headers, and JWT-based session management.",
      "Created intelligent goal tracking system with AI-powered roadmap generation, breaking down complex objectives into actionable steps with progress tracking and deadline management.",
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Nexus Analytics (Personal Project)",
    period: "January 2026",
    description: [
      "Engineered a production-ready analytics platform using Next.js 15, MongoDB, and Google Gemini 2.0 Flash, processing 10,000+ events/second with sub-100ms query performance.",
      "Built custom event-tracking SDK (nexus-avail) from scratch with zero dependencies, achieving 8KB minified size, featuring automatic environment detection (Browser/Node.js), offline persistence, and exponential backoff retry logic.",
      "Designed modular SDK architecture with EventQueue for batching, StorageFactory for cross-platform compatibility (IndexedDB/Filesystem), and SecurityManager implementing HMAC-SHA256 request signing.",
      "Developed comprehensive analytics dashboard with Apache ECharts visualization, featuring funnel analysis, cohort retention, user segmentation, geographic distribution, and real-time event timeline.",
      "Implemented AI-powered insights engine using Google Gemini to generate weekly reports with executive summaries, key discoveries, metric analysis, and specific actionable recommendations.",
      "Created sophisticated MongoDB aggregation pipelines for user segmentation, funnel conversion tracking, and retention cohort analysis, optimized with compound indexes for O(1) query performance.",
    ],
  },
];
