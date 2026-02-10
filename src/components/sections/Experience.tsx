import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "../../data/experienceData";
import SectionHeading from "../ui/SectionHeading";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-(--bg-secondary)">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and work experience"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-neo-green-dim"></div>

          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-(--bg-primary) p-6 rounded-lg border border-neo-gray hover:border-neo-green transition-all duration-300">
                  {/* Timeline bullet */}
                  <div
                    className={`absolute top-6 ${
                      index % 2 === 0
                        ? "-left-6 md:-left-4.5"
                        : "-left-6 md:-right-4.5 md:left-auto"
                    } w-9 h-9 bg-(--bg-primary) border-4 border-neo-green rounded-full flex items-center justify-center shadow-neo-glow-green`}
                  >
                    <Briefcase size={16} className="text-neo-green" />
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-xl font-semibold text-neo-green">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-(--text-secondary) mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-medium text-neo-blue-bright mb-4">
                    {exp.company}
                  </h4>

                  <ul className="list-disc list-inside text-(--text-secondary) space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
