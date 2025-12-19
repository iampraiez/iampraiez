import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificates } from "../../data/certificatesData";
import SectionHeading from "../ui/SectionHeading";

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Certificates"
          subtitle="Professional certifications and achievements"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-[var(--bg-primary)] rounded-lg overflow-hidden border border-neo-gray hover:border-neo-green transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neo-green mb-2">
                  {cert.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-2">
                  {cert.issuer}
                </p>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  {cert.date}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-neo-blue-bright hover:text-neo-green transition-colors"
                >
                  <span>View Credential</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
