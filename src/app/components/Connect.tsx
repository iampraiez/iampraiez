import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle,
  // Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

// Custom SVG icons for platforms not in lucide
function SubstackIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 17.512 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

function MediumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.764-5.768zm3.392 8.244c-.144.405-.837.751-1.151.791-.314.041-.63.078-1.745-.333-1.402-.519-2.316-1.996-2.386-2.091-.07-.095-.615-.818-.615-1.559 0-.742.39-1.109.529-1.259.14-.15.304-.188.406-.188.101 0 .204-.002.293.003.093.004.22-.034.344.27.126.304.433 1.05.471 1.126.038.077.063.167.012.272-.051.104-.076.168-.151.258l-.228.258c-.076.086-.154.173-.066.324.088.151.391.644.839 1.04.577.511 1.065.67 1.218.749.155.077.244.064.334-.039.09-.104.38-.444.481-.595.102-.153.203-.129.344-.076.141.053 1.002.473 1.173.559.172.086.286.129.327.2.041.07.041.409-.103.814zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    </svg>
  );
}

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.33-.01-.96-.19-1.43-.34-.58-.19-1.04-.29-1-.62.02-.17.25-.34.69-.52 2.73-1.19 4.56-1.97 5.47-2.35 2.62-1.09 3.16-1.28 3.52-1.28.08 0 .25.02.36.11.08.08.11.19.12.29 0 .1.01.26-.01.35z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Email",
    href: "mailto:himpraise571@gmail.com",
    Icon: Mail,
    isMail: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/iampraiez",
    Icon: Github,
    isMail: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thepraiseolaoye",
    Icon: Linkedin,
    isMail: false,
  },
  // { label: "X", href: "https://x.com/iampraiez", Icon: Twitter, isMail: false },
  {
    label: "WhatsApp",
    href: "https://wa.me/2339166072665",
    Icon: WhatsAppIcon,
    isMail: false,
  },
  {
    label: "Telegram",
    href: "https://t.me/iampraiez",
    Icon: TelegramIcon,
    isMail: false,
  },
  {
    label: "Substack",
    href: "https://substack.com/@iampraiez",
    Icon: SubstackIcon,
    isMail: false,
  },
  {
    label: "Medium",
    href: "https://medium.com/@himpraise571",
    Icon: MediumIcon,
    isMail: false,
  },
];

export function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    const controller = new AbortController();
    try {
      console.log("Dta", data);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify(data),
      });

      console.log("Response received:", res.status, res.ok);

      if (res.ok) {
        console.log("Success! Resetting form...");
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const errData = await res.json().catch(() => ({}));
        const errorMessage = errData.error || "Failed to send message.";
        console.error("Submission failed:", errorMessage);
        alert(`Status ${res.status}: ${errorMessage}`);
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.error("Submission timed out after 60s");
        alert(
          "Request timed out. The email might still send, but the server took too long to respond.",
        );
      } else {
        console.error("Submission error:", error);
        alert(`An error occurred: ${error.message || "Unknown error"}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.09 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 max-w-4xl mx-auto py-2 sm:py-6"
    >
      {/* Header */}
      <motion.div
        variants={item}
        className="w-full flex items-center justify-center gap-4 mb-6 sm:mb-8 shrink-0"
      >
        <div className="h-px flex-1 max-w-15 bg-[#D4AF77]/50" />
        <h2 className="text-xs sm:text-sm font-bold text-[#D4AF77] tracking-[0.3em] uppercase">
          Let's Connect
        </h2>
        <div className="h-px flex-1 max-w-15 bg-[#D4AF77]/50" />
      </motion.div>

      <div className="w-full flex-1 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-14 min-h-0 overflow-y-auto tiny-scrollbar pb-1">
        {/* Left — Intro + Icon Row */}
        <motion.div
          variants={item}
          className="flex-1 flex flex-col justify-center gap-7 sm:gap-10 w-full max-w-md"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-3">
              Get in touch
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Have a project in mind, a question about my work, or just want to
              say hello? My inbox is always open.
            </p>
          </div>

          {/* Social Icon Grid */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Find me on
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {SOCIALS.map(({ label, href, Icon, isMail }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.06,
                    duration: 0.3,
                    ease: "easeOut" as const,
                  }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSocial(label)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  aria-label={label}
                  className="relative group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-white dark:bg-[#1a1c23] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF77]/50 dark:hover:border-[#D4AF77]/40 hover:text-[#D4AF77] text-slate-500 dark:text-slate-400 transition-colors duration-200 shadow-sm"
                >
                  <Icon size={17} />

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredSocial === label && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap bg-white dark:bg-[#1a1c23] border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-md pointer-events-none"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Separator */}
        <motion.div
          variants={item}
          className="w-full md:w-px h-px md:h-auto bg-linear-to-r md:bg-linear-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent shrink-0"
        />

        {/* Right — Contact Form */}
        <motion.div
          variants={item}
          className="flex-1 flex flex-col justify-center w-full max-w-md"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 sm:gap-8 pt-2"
          >
            {/* Name Input */}
            <div className="relative group">
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 focus:border-[#D4AF77] dark:focus:border-[#D4AF77] text-slate-900 dark:text-slate-100 py-3 block outline-none transition-all duration-300 text-sm sm:text-base rounded-none focus:shadow-[0_1px_0_0_#D4AF77] autofill:bg-transparent"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-3 text-slate-400 dark:text-slate-500 text-sm sm:text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF77] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF77]"
              >
                Name
              </label>
              {errors.name && (
                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 focus:border-[#D4AF77] dark:focus:border-[#D4AF77] text-slate-900 dark:text-slate-100 py-3 block outline-none transition-all duration-300 text-sm sm:text-base rounded-none focus:shadow-[0_1px_0_0_#D4AF77] autofill:bg-transparent"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-3 text-slate-400 dark:text-slate-500 text-sm sm:text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF77] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF77]"
              >
                Email Address
              </label>
              {errors.email && (
                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div className="relative group">
              <textarea
                {...register("message")}
                id="message"
                rows={3}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 focus:border-[#D4AF77] dark:focus:border-[#D4AF77] text-slate-900 dark:text-slate-100 py-3 block outline-none transition-all duration-300 resize-none text-sm sm:text-base rounded-none focus:shadow-[0_1px_0_0_#D4AF77] autofill:bg-transparent"
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3 text-slate-400 dark:text-slate-500 text-sm sm:text-base transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#D4AF77] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#D4AF77]"
              >
                Message
              </label>
              {errors.message && (
                <p className="absolute -bottom-5 left-0 text-red-500 text-[10px] font-medium">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`mt-2 w-full py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors duration-300 border ${
                isSuccess
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                  : "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100 hover:bg-[#D4AF77] hover:border-[#D4AF77] dark:hover:bg-[#D4AF77] dark:hover:border-[#D4AF77] hover:text-white dark:hover:text-white disabled:opacity-50"
              }`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : isSuccess ? (
                <>
                  <CheckCircle size={16} /> Sent successfully
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .tiny-scrollbar::-webkit-scrollbar { width: 2px; }
        .tiny-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .tiny-scrollbar::-webkit-scrollbar-thumb { background: rgba(212,175,119,0.2); border-radius: 4px; }
        .tiny-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(212,175,119,0.5); }

        /* Prevent white background on autofill and ensure correct text color */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #0f172a !important; /* slate-900 — light mode default */
          -webkit-box-shadow: 0 0 0px 1000px transparent inset;
          transition: background-color 5000s ease-in-out 0s;
          background-color: transparent !important;
        }

        /* Dark mode: use light text */
        .dark input:-webkit-autofill,
        .dark input:-webkit-autofill:hover,
        .dark input:-webkit-autofill:focus,
        .dark textarea:-webkit-autofill,
        .dark textarea:-webkit-autofill:hover,
        .dark textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #f1f5f9 !important; /* slate-100 */
        }
      `}</style>
    </motion.section>
  );
}
