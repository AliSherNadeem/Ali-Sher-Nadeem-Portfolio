import React from "react";
import myImage from "../assets/portfolio/updated profile.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineDownload, HiChevronDown } from "react-icons/hi";
import { MdArrowForward } from "react-icons/md";
import BgParticles from "./BgParticles";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <section
      name="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050510]"
    >
      {/* ── Shared animated background (grid + particles) ── */}
      <BgParticles gridColor="34,211,238" gridOpacity={0.05} />

      {/* ── Animated gradient orbs ── */}
      <div className="absolute top-1/4 -left-24 w-[520px] h-[520px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none animate-orb-1" />
      <div className="absolute bottom-1/4 -right-24 w-[520px] h-[520px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/[0.06] rounded-full blur-[180px] pointer-events-none animate-orb-3" />

      {/* ── Corner accent lines ── */}
      <div className="absolute top-24 left-0 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-24 right-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full py-24 sm:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">

          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0 text-center md:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-7 cursor-default tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold leading-[1.06] text-white tracking-tight"
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
              className="mt-4 text-xl sm:text-2xl font-semibold text-slate-400 tracking-wide"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              2+ years building fast, scalable, and interactive web applications.
              Proficient in React.js, Next.js, Node.js, PostgreSQL & MongoDB.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 mt-9 justify-center md:justify-start"
            >
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-xl cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-250 tracking-wide"
              >
                View Portfolio
                <MdArrowForward
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
              <a
                href="/Ali_Sher_Nadeem_Full_Stack_Developer.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-300 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan-500/25 hover:text-white transition-all duration-250"
              >
                Download CV
                <HiOutlineDownload size={17} />
              </a>
            </motion.div>

            {/* Tech chips */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
              {["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:text-slate-300 hover:border-white/[0.14] transition-colors duration-200 cursor-default"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.78 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]">
              {/* Spinning rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/15 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border border-blue-500/12 animate-spin-reverse" />
              <div className="absolute inset-6 rounded-full border border-purple-500/10" style={{ animation: "spin 7s linear infinite" }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/15 blur-2xl" />

              {/* Photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/15 shadow-2xl ring-1 ring-cyan-400/10">
                <img
                  src={myImage}
                  alt="Ali Sher Nadeem"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Accent dots */}
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 blur-[2px] animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 rounded-full bg-purple-500 blur-[2px] animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -right-3 w-2 h-2 rounded-full bg-blue-400 blur-[1px] animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link to="about" smooth duration={500}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-slate-600 group-hover:text-cyan-400/70 transition-colors duration-300">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] group-hover:border-cyan-500/50 group-hover:bg-cyan-500/[0.12] transition-all duration-300"
            style={{ boxShadow: "0 0 18px 0 rgba(34,211,238,0.08)" }}
          >
            <HiChevronDown size={18} className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </Link>
    </section>
  );
};

export default Home;
