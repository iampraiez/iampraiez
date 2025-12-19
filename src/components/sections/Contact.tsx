import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Loader2, Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import axios from "axios";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleEmail() {
    await axios
      .post("/api/send", formData)
      .then((res: any) => {
        toast.success("Email sent successfully!");
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
        // console.log("Success:", res.data);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        toast.error("Error sending email!");
      });
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    await handleEmail();
    setFormData({ name: "", email: "", message: "" });
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind? Let's work together!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-neo-green mb-6">
              Contact Information
            </h3>
            <p className="text-[var(--text-secondary)] mb-8">
              Feel free to reach out for collaboration opportunities, job
              inquiries, or just to say hello. I'm always open to discussing new
              projects and ideas.
            </p>

            <div className="space-y-6">
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mr-4">
                  <Mail className="text-neo-green" />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-sm">Email</p>
                  <a
                    href="mailto:himpraise571@gmail.com"
                    className="text-[var(--text-primary)] hover:text-neo-green"
                  >
                    himpraise571@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mr-4">
                  <Github className="text-neo-green" />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-sm">GitHub</p>
                  <a
                    href="https://github.com/iampraiez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-primary)] hover:text-neo-green"
                  >
                    github.com/iampraiez
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center mr-4">
                  <Linkedin className="text-neo-green" />
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] text-sm">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/thepraiseolaoye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-primary)] hover:text-neo-green"
                  >
                    linkedin.com/in/praise-olaoye
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-neo-gray"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-[var(--text-secondary)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--bg-primary)] border border-neo-gray focus:border-neo-green text-[var(--text-primary)] px-4 py-3 rounded-md focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-[var(--text-secondary)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--bg-primary)] border border-neo-gray focus:border-neo-green text-[var(--text-primary)] px-4 py-3 rounded-md focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[var(--text-secondary)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[var(--bg-primary)] border border-neo-gray focus:border-neo-green text-[var(--text-primary)] px-4 py-3 rounded-md resize-none focus:outline-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className={`w-full flex items-center justify-center space-x-2 transition-all ${
                  isSuccess ? "!bg-neo-green !text-[var(--bg-primary)] !border-neo-green" : ""
                }`}
              >
                {isLoading ? (
                  <Loader2 className="text-neo-green animate-spin" size={16} />
                ) : isSuccess ? (
                  <>
                    <Check size={16} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
