import React from "react";
import myImage from "../assets/My_image.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { MdArrowForward } from "react-icons/md";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Home = () => {
  return (
    <section
      name="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050510]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[480px] h-[480px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 sm:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* ── Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center md:text-left"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ali Sher
              </span>
              <br />
              Nadeem
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg sm:text-xl font-semibold text-slate-400 tracking-wide"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              2+ years of experience building fast, scalable, and interactive web
              applications. Proficient in React.js, Next.js, Node.js, Express.js,
              MongoDB, and PostgreSQL.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start"
            >
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.03] transition-all duration-250"
              >
                View Portfolio
                <MdArrowForward
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>

              <a
                href="/Ali Sher Nadeem FrontEnd Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-slate-300 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan-500/25 hover:text-white transition-all duration-250"
              >
                Download CV
                <HiOutlineDownload size={17} />
              </a>
            </motion.div>

            {/* Tech stack chips */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500 font-medium"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Decorative spinning rings */}
              <div
                className="absolute inset-0 rounded-full border border-cyan-400/15"
                style={{ animation: "spin 14s linear infinite" }}
              />
              <div
                className="absolute inset-3 rounded-full border border-blue-500/12"
                style={{ animation: "spin 10s linear infinite reverse" }}
              />
              <div
                className="absolute inset-6 rounded-full border border-purple-500/10"
                style={{ animation: "spin 7s linear infinite" }}
              />

              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/15 blur-2xl" />

              {/* Image */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={myImage}
                  alt="Ali Sher Nadeem"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Corner dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 blur-[2px] animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-purple-500 blur-[2px] animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-700 text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-[3px] h-2 bg-cyan-400/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
