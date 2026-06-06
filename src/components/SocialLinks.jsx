import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    id: 1,
    child: (text) => <><span>{text}</span><FaLinkedin size={22} color="#0A66C2" /></>,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-sher-nadeem/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (text) => <><span>{text}</span><FaGithub size={22} color="#e2e8f0" /></>,
    label: "GitHub",
    href: "https://github.com/AliSherNadeem",
    style: "",
  },
  {
    id: 3,
    child: (text) => <><span>{text}</span><HiOutlineMail size={22} color="#22d3ee" /></>,
    label: "Mail",
    href: "mailto:ali.thejsdev@gmail.com",
    style: "",
  },
  {
    id: 4,
    child: (text) => <><span>{text}</span><BsFillPersonLinesFill size={22} color="#a855f7" /></>,
    label: "Resume",
    href: "/Ali_Sher_Nadeem_Full_Stack_Developer.pdf",
    style: "rounded-br-md",
    download: true,
  },
];

const SocialLinks = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed z-40">

      {/* ─── Desktop sidebar ─────────────────────────────────────────
          w-40 = 160px total. Default -ml-[100px] → 60px visible.
          Icon sits on the RIGHT (justify-between), so it's always in view.
          On hover: -ml-[10px] → 150px visible, full label appears.
      ──────────────────────────────────────────────────────────────── */}
      <ul className="hidden md:flex flex-col fixed top-[35%] left-0">
        {links.map(({ id, child, label, href, style, download }) => (
          <li
            key={id}
            className={`
              flex justify-between items-center
              w-40 h-14 px-4
              -ml-[100px] hover:-ml-[10px]
              hover:rounded-r-md
              duration-300 ease-out
              bg-[#111128] border border-white/[0.08]
              hover:border-cyan-500/30 hover:bg-[#171733]
              ${style}
            `}
          >
            <a
              href={href}
              download={download || undefined}
              target={download ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="flex justify-between items-center w-full text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {child(label)}
            </a>
          </li>
        ))}
      </ul>

      {/* ─── Mobile toggle ─── */}
      <div className="md:hidden fixed top-[5.5rem] left-4">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle social links"
          className="w-10 h-10 rounded-full bg-[#111128]/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer shadow-lg"
        >
          <FaLinkedin size={16} />
        </button>
      </div>

      {/* ─── Mobile panel ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[8.5rem] left-4 flex flex-col gap-2"
          >
            {links.map(({ id, label, href, download }, i) => {
              const { child } = links[i];
              return (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={href}
                    download={download || undefined}
                    target={download ? undefined : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#111128]/90 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-200 shadow-lg text-sm text-slate-400 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child(label)}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialLinks;
