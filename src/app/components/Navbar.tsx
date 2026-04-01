import React from 'react';
import { motion } from 'motion/react';
import { Tab } from '../types';
import clsx from 'clsx';
import { Home, Briefcase, User, Mail } from 'lucide-react';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  isDarkMode: boolean;
}

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'Home',    label: 'Home',    icon: <Home    size={17} strokeWidth={1.75} /> },
  { id: 'Work',    label: 'Work',    icon: <Briefcase size={17} strokeWidth={1.75} /> },
  { id: 'About',   label: 'About',   icon: <User    size={17} strokeWidth={1.75} /> },
  { id: 'Connect', label: 'Connect', icon: <Mail    size={17} strokeWidth={1.75} /> },
];

export function Navbar({ activeTab, setActiveTab, isDarkMode }: NavbarProps) {
  return (
    <header
      className={clsx(
        'fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border rounded-full px-2 py-2 transition-colors duration-500',
        isDarkMode ? 'bg-[#181a1f]/80 border-slate-800' : 'bg-white/90 border-slate-200',
      )}
    >
      <nav className="flex items-center gap-0.5 sm:gap-1">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'relative flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 outline-none',
                isActive
                  ? isDarkMode ? 'text-slate-100' : 'text-slate-900'
                  : isDarkMode
                    ? 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50',
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className={clsx(
                    'absolute inset-0 rounded-full',
                    isDarkMode
                      ? 'bg-[#D4AF77]/20 border border-[#D4AF77]/30'
                      : 'bg-[#D4AF77]/10 border border-[#D4AF77]/20',
                  )}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className="sm:hidden">{tab.icon}</span>
                <span className="hidden sm:inline-block tracking-wide">{tab.label}</span>
              </span>
            </button>
          );
        })}
        </nav>
    </header>
  );
}
