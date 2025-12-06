import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] py-8 border-t border-neo-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-[var(--text-secondary)] text-center md:text-left">
              &copy; {currentYear} Praise Olaoye. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/iampraiez"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#00FF41" }}
              className="text-[var(--text-secondary)] hover:text-neo-green transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/thepraiseolaoye"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#00FF41" }}
              className="text-[var(--text-secondary)] hover:text-neo-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:himpraise571@gmail.com"
              whileHover={{ y: -5, color: "#00FF41" }}
              className="text-[var(--text-secondary)] hover:text-neo-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
