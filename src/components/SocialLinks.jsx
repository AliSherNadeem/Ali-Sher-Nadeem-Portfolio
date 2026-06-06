import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaShareAlt, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    id: 1,
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ali-sher-nadeem/",
    color: "#0A66C2",
    style: "rounded-tr-lg",
  },
  {
    id: 2,
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/AliSherNadeem",
    color: "#ffffff",
    style: "",
  },
  {
    id: 3,
    label: "Mail",
    icon: HiOutlineMail,
    href: "mailto:ali.thejsdev@gmail.com",
    color: "#22d3ee",
    style: "",
  },
  {
    id: 4,
    label: "Resume",
    icon: BsFillPersonLinesFill,
    href: "/Ali Sher Nadeem FrontEnd Resume.pdf",
    color: "#a855f7",
    style: "rounded-br-lg",
    download: true,
  },
];

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-40">
      {/* Mobile toggle */}
      <div className="md:hidden fixed top-[5.5rem] left-4">
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close social links" : "Open social links"}
          className="w-9 h-9 rounded-full bg-[#0a0a1a]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer shadow-lg"
        >
          {isOpen ? <FaTimes size={14} /> : <FaShareAlt size={14} />}
        </button>
      </div>

      {/* Mobile expanded panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
            className="md:hidden fixed top-[8rem] left-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map(({ id, label, icon: Icon, href, color, download }) => (
                <li key={id}>
                  <a
                    href={href}
                    download={download}
                    target={download ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#0a0a1a]/90 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 shadow-lg"
                  >
                    <Icon size={16} color={color} />
                    <span className="text-xs text-slate-400">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar slide-out */}
      <div className="hidden md:flex flex-col fixed top-[38%] left-0 gap-px">
        {links.map(({ id, label, icon: Icon, href, color, style, download }) => (
          <a
            key={id}
            href={href}
            download={download}
            target={download ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className={`group flex items-center gap-3 w-36 h-12 pl-4 pr-3 -ml-24 hover:ml-0 transition-all duration-300 ease-out bg-[#0d0d20]/90 backdrop-blur-sm border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.06] ${style} shadow-lg`}
          >
            <Icon size={18} color={color} className="flex-shrink-0" />
            <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors duration-200">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
