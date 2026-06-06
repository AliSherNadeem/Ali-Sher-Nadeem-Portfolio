import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BgParticles from "./BgParticles";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "ali.thejsdev@gmail.com",
    href: "mailto:ali.thejsdev@gmail.com",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
];

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-sher-nadeem/",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/AliSherNadeem",
    color: "#ffffff",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.06] transition-all duration-200";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      name="contact"
      className="relative w-full bg-gradient-to-b from-[#050510] to-[#070716] text-white pt-16 overflow-hidden"
    >
      {/* Shared animated background */}
      <BgParticles gridColor="34,211,238" gridOpacity={0.035} />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none animate-orb-2" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Get in touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl">
            Have a project in mind or just want to say hello? Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left – info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I'm currently open to{" "}
              <span className="text-cyan-400 font-medium">full-time roles</span> and
              exciting freelance projects. Whether you have a question or a great
              opportunity, my inbox is always open.
            </p>

            {/* Contact items */}
            <div className="space-y-4 mt-2">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/20 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="pt-2">
              <p className="text-xs text-slate-600 uppercase tracking-wider mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-200 group"
                  >
                    <Icon size={18} color={color} />
                    <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              action="https://getform.io/f/pbqggvzb"
              method="POST"
              className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
            >
              <div>
                <label htmlFor="name" className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.01] transition-all duration-250 cursor-pointer"
              >
                Send Message
                <MdSend size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="relative border-t border-white/[0.06] mt-8"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-base font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
              Ali Sher Nadeem
            </span>
            <span className="text-xs text-slate-600">Full Stack Developer · Islamabad, Pakistan</span>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ali-sher-nadeem/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/[0.07] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all duration-200"
            >
              <FaLinkedin size={14} color="#0A66C2" />
            </a>
            <a
              href="https://github.com/AliSherNadeem"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200"
            >
              <FaGithub size={14} color="#e2e8f0" />
            </a>
            <a
              href="mailto:ali.thejsdev@gmail.com"
              aria-label="Email"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200"
            >
              <HiOutlineMail size={15} color="#22d3ee" />
            </a>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
