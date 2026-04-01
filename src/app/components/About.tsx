import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Music, Puzzle, BookOpen, ExternalLink } from "lucide-react";

function AutoScrollMarquee({ items }: { items: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let exactScroll = 0;
    let isInteracting = false;
    let startX = 0;
    let scrollStart = 0;

    const onPointerDown = (e: PointerEvent) => {
      isInteracting = true;
      startX = e.pageX;
      scrollStart = exactScroll;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isInteracting) return;
      const dx = e.pageX - startX;
      exactScroll = scrollStart - dx;
      // Handle wrapping in both directions during drag
      const halfWidth = el.scrollWidth / 2;
      if (exactScroll < 0) exactScroll += halfWidth;
      if (exactScroll >= halfWidth) exactScroll -= halfWidth;
    };
    const onPointerUp = () => {
      isInteracting = false;
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    const tick = () => {
      if (!isInteracting) {
        exactScroll += 0.35; // smooth fractional step
      }

      const halfWidth = el.scrollWidth / 2;
      if (exactScroll >= halfWidth) {
        exactScroll -= halfWidth;
      }

      // Use 3D transform for sub-pixel, GPU-accelerated smoothness
      el.style.transform = `translate3d(${-exactScroll}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(tick);
    };
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      className="flex overflow-hidden w-full cursor-grab active:cursor-grabbing"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        touchAction: "pan-y",
      }}
    >
      <div ref={scrollRef} className="flex will-change-transform">
        <div className="flex gap-1.5 sm:gap-2 shrink-0 pr-1.5 sm:pr-2">
          {items.map((skill, i) => (
            <span
              key={`set1-${i}`}
              className="px-3 py-1.5 text-[10px] sm:text-xs font-medium bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 rounded-full whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-1.5 sm:gap-2 shrink-0 pr-1.5 sm:pr-2">
          {items.map((skill, i) => (
            <span
              key={`set2-${i}`}
              className="px-3 py-1.5 text-[10px] sm:text-xs font-medium bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 rounded-full whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const SKILLS = [
  "TypeScript",
  "React 19",
  "Next.js 16",
  "NestJS",
  "Express.js",
  "Tailwind CSS 4",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "BullMQ",
  "Socket.io",
  "Real-time Systems",
  "System Architecture",
  "Google Gemini",
  "LLM Integration",
  "Prompt Engineering",
  "SDK Development",
  "Performance Optimization",
  "Monorepo",
  "RBAC",
];

const INTERESTS = [
  {
    icon: Music,
    label: "Music",
    description:
      "Always with a playlist running — music is part of the workflow.",
    href: "https://open.spotify.com/user/31sgdsdq7jbvzf6uocnznhjr7nau",
    linkLabel: "Spotify Profile",
  },
  {
    icon: Puzzle,
    label: "Chess",
    description:
      "I treat the board the same way I treat architecture — every move is deliberate.",
    href: "https://www.chess.com/member/iampraiez",
    linkLabel: "Chess Profile",
  },
  {
    icon: BookOpen,
    label: "Articles",
    description:
      "Constantly reading across tech, design, and culture to stay sharp.",
    href: "https://medium.com/@himpraise571",
    linkLabel: "Medium Profile",
  },
];

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full h-full px-4 sm:px-8 max-w-5xl mx-auto py-2 sm:py-4 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        variants={item}
        className="w-full flex items-center justify-center gap-4 mb-5 sm:mb-7 shrink-0"
      >
        <div className="h-px flex-1 max-w-15 bg-[#D4AF77]/50" />
        <h2 className="text-xs sm:text-sm font-bold text-[#D4AF77] tracking-[0.3em] uppercase">
          About Me
        </h2>
        <div className="h-px flex-1 max-w-15 bg-[#D4AF77]/50" />
      </motion.div>

      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-5 md:gap-8 overflow-y-auto tiny-scrollbar pb-1 w-full">
        {/* Left Column — Bio + Skills */}
        <motion.div
          variants={item}
          className="flex flex-col gap-5 w-full min-w-0"
        >
          {/* Bio */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
              Hi, I'm Praise.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              A software engineer who cares deeply about crafting systems that
              are both resilient and elegant. I thrive at the intersection of
              backend architecture, real-time data, and intuitive interfaces —
              building things that actually hold up in production.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
              I've worked across the full stack — from engineering
              high-throughput event pipelines and SDK tooling, to shipping
              polished UIs that make complex systems feel effortless.
            </p>
          </div>

          {/* Skills */}
          <div className="w-full overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-3">
              The Craft
            </p>
            <div className="flex w-full">
              <AutoScrollMarquee items={SKILLS} />
            </div>
          </div>
        </motion.div>

        {/* Right Column — Beyond the Code */}
        <motion.div
          variants={item}
          className="flex flex-col gap-4 w-full min-w-0"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
            Beyond the Code
          </p>
          <div className="flex flex-col gap-3 w-full pr-2 pb-2">
            {INTERESTS.map((interest) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="flex gap-4 p-4 sm:p-5 bg-white dark:bg-[#1a1c23] rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#D4AF77]/40 dark:hover:border-[#D4AF77]/30 transition-colors shadow-sm group"
                >
                  <div className="p-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg text-[#D4AF77] shrink-0 h-fit mt-0.5">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 tracking-wide">
                      {interest.label}
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {interest.description}
                    </p>
                    {interest.href && interest.linkLabel && (
                      <a
                        href={interest.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-[#D4AF77] hover:text-[#C5A059] transition-colors"
                      >
                        {interest.linkLabel}
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
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
