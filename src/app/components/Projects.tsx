import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  overview: string;
  bullets: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "vector",
    number: "01",
    name: "Vector Fleet Mgmt",
    tagline: "Real-time fleet dispatch & delivery platform",
    overview:
      "A unified, production-ready fleet management and delivery platform enabling real-time routing, tracking, and billing with a cross-platform driver app.",
    bullets: [
      "Built a monorepo across React, Flutter, and NestJS for real-time dispatch and fleet monitoring across multiple enterprise clients.",
      "Architected a real-time sync engine with Socket.io + Redis, handling high-frequency location updates and live routing changes.",
      "Integrated automated billing via Paystack API — managing enterprise subscription tiers and invoice generation end-to-end.",
    ],
    tech: [
      "React 18",
      "Flutter",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "BullMQ",
    ],
    liveUrl: "https://vector-route.vercel.app",
    githubUrl: "https://github.com/iampraiez/vector",
  },
  {
    id: "memory-lane",
    number: "02",
    name: "Memory Lane",
    tagline: "AI-powered personal timeline & narrative engine",
    overview:
      "An AI-powered personal timeline application that helps users securely capture, organize, and rediscover their memories into cohesive narratives.",
    bullets: [
      "Shipped a production Next.js 16 app with App Router, covering 40+ fully-typed RESTful API endpoints.",
      "Wired Google Gemini AI into a serverless backend to synthesize user data into personalized narrative chapters.",
      "Delivered a fluid rich-text editing experience via a custom Tiptap implementation paired with Motion animations.",
    ],
    tech: [
      "Next.js 16",
      "PostgreSQL",
      "Drizzle ORM",
      "Google Gemini",
      "Tiptap",
    ],
    liveUrl: "https://memo-lane.vercel.app",
    githubUrl: "https://github.com/iampraiez/memo",
  },
  {
    id: "nexus",
    number: "03",
    name: "Nexus Analytics",
    tagline: "AI analytics platform — 10,000+ events/sec",
    overview:
      "A production-ready, AI-powered analytics platform featuring a high-performance dashboard and a lightweight tracking SDK handling 10,000+ events/sec.",
    bullets: [
      "Designed a full-stack analytics ecosystem in Next.js 16 handling 10k+ events/sec across a protected dashboard + tracking SDK.",
      "Engineered an 8KB zero-dependency TypeScript tracking SDK using idle-phase execution, cutting client-side HTTP overhead by 80%.",
      "Built highly optimized MongoDB multi-stage aggregation pipelines processing complex telemetry globally in under 100ms.",
    ],
    tech: ["Next.js 16", "MongoDB", "Google Gemini", "TypeScript", "shadcn/ui"],
    liveUrl: "https://nexus-anal.vercel.app",
    githubUrl: "https://github.com/iampraiez/nexus",
  },
  {
    id: "timeforge",
    number: "04",
    name: "TimeForge",
    tagline: "AI productivity ecosystem with dynamic scheduling",
    overview:
      "An AI-powered productivity ecosystem leveraging Gemini to dynamically generate multi-day schedules and break down complex goals.",
    bullets: [
      "Built a full-stack ecosystem with React 18, Express.js, and PostgreSQL, integrating Gemini for AI-optimized scheduling.",
      "Engineered a background notification microservice with Node-Cron + Web Push for reliable, real-time event delivery.",
      "Optimized client performance using TanStack Query and Zustand, significantly reducing async overhead and state complexity.",
    ],
    tech: [
      "React 18",
      "Express.js",
      "PostgreSQL",
      "Google Gemini",
      "Zustand",
      "TanStack Query",
    ],
    liveUrl: "https://timeforge-persona.vercel.app",
    githubUrl: "https://github.com/iampraiez/persona",
  },
];

export function Projects() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  const activeProject = PROJECTS.find((p) => p.id === activeId)!;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full h-full px-4 sm:px-8 max-w-6xl mx-auto py-2 sm:py-4 overflow-hidden"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-center gap-4 mb-4 sm:mb-8 shrink-0">
        <div className="h-px flex-1 max-w-15 bg-[#D4AF77]/50" />
        <h2 className="text-xs sm:text-sm font-bold text-[#D4AF77] tracking-[0.3em] uppercase">
          Selected Works
        </h2>
        <div className="h-px flex-1 max-w-15 bg-[#D4AF77]/50" />
      </div>

      {/* Master-Detail Layout */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20">
        {/* Left: Project List (Tabs) */}
        <div className="flex flex-row md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-y-auto hide-scrollbar shrink-0 md:w-[28%] lg:w-[25%] pb-4 md:pb-0 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 md:pr-8">
          {PROJECTS.map((project) => {
            const isActive = activeId === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className="flex flex-col items-start text-left group min-w-40 md:min-w-0 outline-none"
              >
                <div className="flex items-center gap-3 mb-1.5 sm:mb-2">
                  <span
                    className={`text-xs sm:text-sm font-bold tracking-[0.2em] transition-colors duration-300 tabular-nums ${
                      isActive
                        ? "text-[#D4AF77]"
                        : "text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400"
                    }`}
                  >
                    {project.number}
                  </span>
                  <motion.div
                    initial={false}
                    animate={{
                      width: isActive ? 24 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    className="h-px bg-[#D4AF77]"
                  />
                </div>
                <h3
                  className={`text-base sm:text-xl lg:text-2xl font-black uppercase tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-400 dark:text-slate-600 group-hover:text-slate-700 dark:group-hover:text-slate-300"
                  }`}
                >
                  {project.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Right: Project Details */}
        <div className="flex-1 min-h-0 overflow-y-auto tiny-scrollbar pb-8 md:pr-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8 sm:gap-10"
            >
              {/* Tagline & Links */}
              <div className="flex flex-col gap-5">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium text-slate-800 dark:text-slate-100 leading-[1.2] tracking-tight">
                  {activeProject.tagline}
                </h2>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-1">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4AF77] hover:text-[#C5A059] transition-colors"
                    >
                      Live Platform{" "}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                  {activeProject.liveUrl && activeProject.githubUrl && (
                    <div className="w-px h-3.5 bg-slate-300 dark:bg-slate-700" />
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      Source Code{" "}
                      <Github
                        size={14}
                        className="transition-transform group-hover:scale-110"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Overview & Bullets */}
              <div className="flex flex-col gap-6">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl">
                  {activeProject.overview}
                </p>
                <div className="flex flex-col gap-3.5 max-w-3xl">
                  {activeProject.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-2 w-1.5 h-[1.5px] bg-[#D4AF77] shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-6 sm:pt-8 mt-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-slate-50 dark:bg-[#1a1c23] border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .tiny-scrollbar::-webkit-scrollbar { width: 2px; }
        .tiny-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .tiny-scrollbar::-webkit-scrollbar-thumb { background: rgba(212,175,119,0.2); border-radius: 4px; }
        .tiny-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(212,175,119,0.5); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.section>
  );
}
