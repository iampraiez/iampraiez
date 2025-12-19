import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-neo-gray text-white"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun size={20} className="text-neo-green" />
      ) : (
        <Moon size={20} className="text-neo-blue-bright" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;