import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronDown, FileCode, Server, Globe } from "lucide-react";

const resumeOptions = [
  {
    id: "frontend",
    title: "Frontend",
    file: "./Praise_Olaoye_Frontend_Developer.pdf",
    icon: FileCode,
    color: "text-neo-blue-bright",
  },
  {
    id: "backend",
    title: "Backend",
    file: "./Praise_Olaoye_Backend_Developer.pdf",
    icon: Server,
    color: "text-neo-green",
  },
  {
    id: "web",
    title: "Web Dev",
    file: "./Praise_Olaoye_Web_Developer.pdf",
    icon: Globe,
    color: "text-neo-purple-bright",
  },
];

const ResumeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleDownload = (file: string, title: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = `Praise_Olaoye_${title}_Developer.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div 
      className="relative inline-block" 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="neo-button-blue flex items-center space-x-2 py-2 px-6"
      >
        <Download size={16} />
        <span>Download Resume</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-neo-dark-lighter border border-neo-blue-bright/30 rounded-lg shadow-xl overflow-hidden z-50 backdrop-blur-md"
          >
            <div className="py-1">
              {resumeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleDownload(option.file, option.title)}
                    className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-neo-blue-bright/10 hover:text-neo-blue-bright transition-colors flex items-center space-x-3 group"
                  >
                    <Icon
                      size={16}
                      className={`${option.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="font-mono">{option.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeDropdown;
