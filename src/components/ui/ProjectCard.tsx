import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import Button from './Button';
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden h-48">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-500 hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={true}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neo-green mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <span key={index} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-4">
          <Button
            href={project.githubUrl}
            variant="primary"
            className="flex items-center space-x-2"
          >
            <Github size={16} />
            <span>Code</span>
          </Button>
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="secondary"
              className="flex items-center space-x-2"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;