import { motion } from "motion/react";
import { Server, Code2, BrainCircuit, Box } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.FC<any>;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Engineering",
    icon: Code2,
    skills: [
      "TypeScript",
      "React 19",
      "Next.js 16",
      "NestJS",
      "Express.js",
      "Tailwind CSS 4",
    ],
  },
  {
    title: "Data & Systems",
    icon: Server,
    skills: [
      "System Architecture",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "BullMQ",
      "Real-time Sync",
    ],
  },
  {
    title: "AI Integration",
    icon: BrainCircuit,
    skills: [
      "Google Gemini",
      "LLM Architectures",
      "AI Analytics",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tooling & DX",
    icon: Box,
    skills: [
      "SDK Development",
      "Performance Optimization",
      "Role-Based Access Control",
      "Monorepo Management",
    ],
  },
];

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 max-w-5xl mx-auto py-2 sm:py-6"
    >
      <div className="w-full flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-8 shrink-0">
        <div className="h-px w-6 sm:w-16 bg-[#D4AF77]/50" />
        <h2 className="text-[10px] sm:text-sm font-bold text-[#D4AF77] tracking-[0.3em] uppercase">
          Technical Expertise
        </h2>
        <div className="h-px w-6 sm:w-16 bg-[#D4AF77]/50" />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 overflow-y-auto tiny-scrollbar pb-2 h-full content-start sm:content-center">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-white dark:bg-[#1a1c23] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-3.5 sm:p-7 flex flex-col items-start gap-2.5 sm:gap-4 hover:border-[#D4AF77]/50 dark:hover:border-[#D4AF77]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 w-full border-b border-slate-100 dark:border-slate-800/60 pb-2 sm:pb-4">
                <div className="p-1.5 sm:p-2.5 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-[#D4AF77]">
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="sm:w-5.5 sm:h-5.5"
                  />
                </div>
                <h3 className="text-[13px] sm:text-base text-slate-900 dark:text-slate-100 font-bold tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 text-[9px] sm:text-sm font-medium bg-slate-50 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 rounded-md hover:text-[#D4AF77] dark:hover:text-[#D4AF77] hover:border-[#D4AF77]/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .tiny-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .tiny-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .tiny-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212,175,119,0.2);
          border-radius: 4px;
        }
        .tiny-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212,175,119,0.5);
        }
      `}</style>
    </motion.section>
  );
}
