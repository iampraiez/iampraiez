"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Connect } from "./components/Connect";
import { Sun, Moon } from "lucide-react";

import { type Tab } from "./types";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`h-dvh w-screen flex flex-col overflow-hidden transition-colors duration-500 font-['Lato',sans-serif] ${
        isDarkMode
          ? "bg-[#0f1115] text-slate-200"
          : "bg-[#fafafa] text-slate-900"
      }`}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-125 h-125 rounded-full blur-[120px] opacity-20 transition-colors duration-1000 ${
            isDarkMode ? "bg-[#D4AF77]/20" : "bg-[#D4AF77]/30"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-150 h-150 rounded-full blur-[150px] opacity-20 transition-colors duration-1000 ${
            isDarkMode ? "bg-slate-700/30" : "bg-slate-300/50"
          }`}
        />
        <div
          className={`absolute inset-0 opacity-[0.03] ${isDarkMode ? "invert" : ""}`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floating Dark Mode Toggle — top-right corner */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle colour mode"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className={`fixed top-4 right-4 sm:right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl border shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF77] ${
          isDarkMode
            ? "bg-[#181a1f]/80 border-slate-800 text-[#D4AF77]"
            : "bg-white/90 border-slate-200 text-slate-600"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDarkMode ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
            transition={{ duration: 0.22, ease: "easeOut" as const }}
            className="flex items-center justify-center"
          >
            {isDarkMode ? (
              <Moon size={16} strokeWidth={1.75} />
            ) : (
              <Sun size={16} strokeWidth={1.75} />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10 overflow-hidden px-4 sm:px-8 pt-20 pb-4 sm:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="w-full max-w-6xl h-full flex flex-col justify-center"
          >
            {activeTab === "Home" && <Hero setActiveTab={setActiveTab} />}
            {activeTab === "Work" && <Projects />}
            {activeTab === "About" && <About />}
            {activeTab === "Connect" && <Connect />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
