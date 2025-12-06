import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative matrix-animation"
    >
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-block text-neo-green-dim mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              &lt;Hello World /&gt;
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              I'm <span className="text-neo-green">Praise Olaoye</span>
            </motion.h1>
            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="block">Backend Developer</span>
              <span className="text-gray-400 block mt-2">
                Crafting Fast & Scalable Solutions with Node.js
              </span>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Button>
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                variant="secondary"
                className="flex items-center space-x-2"
              >
                <Download size={16} />
                <button>
                  <span>
                    <a href="./resume.pdf" download="Praise_Olaoye_Resume">
                      Download Resume
                    </a>
                  </span>
                </button>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-80 h-80 rounded-full border-4 border-neo-green p-2 relative shadow-neo-glow-green">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-neo-green-dim">
                <img
                  alt="Praise Olaoye"
                  src="./Praise.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-neo-dark-lighter rounded-full flex items-center justify-center border-2 border-neo-green shadow-neo-glow-green">
                <span className="text-neo-green font-mono text-sm">
                  Node.js
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-neo-dark-lighter rounded-full flex items-center justify-center border-2 border-neo-blue-bright shadow-neo-glow-blue">
                <span className="text-neo-blue-bright font-mono text-sm">
                  Typescript
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neo-green"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
