import React from "react";
import { motion } from "motion/react";
import { Tab } from "../types";
import { ArrowRight, Download } from "lucide-react";

export function Hero({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center w-full h-full px-5 sm:px-10 max-w-6xl mx-auto py-4"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-16 w-full">
        {/* Left/Top Content */}
        <div className="flex flex-col space-y-6 sm:space-y-8 w-full lg:w-auto">
          <motion.div
            variants={item}
            className="flex items-center gap-4 w-full"
          >
            <div className="h-px w-10 sm:w-16 bg-[#D4AF77]" />
            <span className="text-[#D4AF77] text-xs sm:text-sm font-bold tracking-[0.35em] uppercase">
              Software Engineer
            </span>
          </motion.div>

          <motion.div variants={item} className="w-full">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Praise <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF77] to-[#C5A059]">
                Olaoye
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Right/Bottom Content */}
        <motion.div
          variants={item}
          className="flex flex-col w-full lg:max-w-md space-y-8 lg:pb-6"
        >
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Building scalable, secure and efficient software systems. Focused on
            high-performance backends that deliver fast request times and stay
            reliable as they scale.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-2">
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => setActiveTab("Work")}
              className="group flex items-center gap-3 text-slate-900 dark:text-white font-bold text-sm sm:text-base uppercase tracking-widest hover:text-[#D4AF77] dark:hover:text-[#D4AF77] transition-colors"
            >
              View My Work
              <ArrowRight
                size={18}
                className="text-[#D4AF77] transition-transform group-hover:translate-x-1"
              />
            </motion.button>

            <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-slate-700" />

            <motion.a
              href="/praise_olaoye_software_engineer.pdf"
              download="Praise_Olaoye_Resume.pdf"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="group flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold text-sm sm:text-base uppercase tracking-widest hover:text-[#D4AF77] dark:hover:text-[#D4AF77] transition-colors"
            >
              Resume
              <Download
                size={18}
                className="transition-transform group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
