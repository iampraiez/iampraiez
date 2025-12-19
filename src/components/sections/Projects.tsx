import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my latest work and technical expertise - projects in active development."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 mb-6">
            Check out more of my projects on GitHub
          </p>
          <a
            href="https://github.com/iampraiez"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
