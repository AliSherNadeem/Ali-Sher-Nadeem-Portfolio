import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: 1, to: "home", label: "Home" },
  { id: 2, to: "about", label: "About" },
  { id: 3, to: "experience", label: "Experience" },
  { id: 4, to: "portfolio", label: "Portfolio" },
  { id: 5, to: "skills", label: "Skills" },
  { id: 6, to: "contact", label: "Contact" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/85 backdrop-blur-2xl border-b border-white/[0.05] shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400 }}>
          <span className="font-signature text-xl sm:text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-default select-none">
            Ali Sher Nadeem
          </span>
        </motion.div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ id, to, label }) => (
            <Link
              key={id}
              to={to}
              smooth
              duration={500}
              className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer rounded-lg hover:bg-white/[0.05] group"
            >
              {label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-5 transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setNav((v) => !v)}
          aria-label={nav ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
        >
          {nav ? <FaTimes size={19} /> : <FaBars size={19} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {nav && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#060614]/95 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <ul className="flex flex-col py-3 px-4">
              {links.map(({ id, to, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    onClick={() => setNav(false)}
                    className="block px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
