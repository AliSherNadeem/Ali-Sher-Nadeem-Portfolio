import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import BgParticles from "./BgParticles";

const stats = [
  { value: "2+",  label: "Years\nExperience" },
  { value: "20+", label: "Projects\nDelivered" },
  { value: "15+", label: "Technologies\nUsed" },
  { value: "3",   label: "Companies\nWorked" },
];


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      name="about"
      className="relative w-full bg-gradient-to-b from-[#050510] to-[#070716] text-white pt-16 overflow-hidden"
    >
      {/* Shared animated background */}
      <BgParticles gridColor="168,85,247" gridOpacity={0.035} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/[0.06] rounded-full blur-[150px] pointer-events-none animate-orb-2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/[0.04] rounded-full blur-[130px] pointer-events-none animate-orb-3" />

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-14"
      >
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.22em] uppercase">
            Get to know me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* ── Bio + Education (top row) ── */}
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">Full Stack Developer</span>{" "}
              with 2+ years of experience building fast, scalable, and interactive
              web applications. I specialize in crafting seamless user experiences
              across the full stack — from pixel-perfect UIs to robust backends.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My expertise spans React.js, Next.js, TypeScript on the frontend and
              Node.js, Express.js, PostgreSQL, MongoDB on the backend. I'm passionate
              about clean, maintainable code and love contributing to impactful products
              that make a real difference.
            </p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-500/25 hover:bg-white/[0.05] transition-all duration-300 mt-2"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
                <HiAcademicCap size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-200">B.S. in Software Engineering</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  PMAS Arid Agriculture University, Rawalpindi, Pakistan
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 180 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/25 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {value}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-snug whitespace-pre-line">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Summary callout ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
          className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/[0.06] to-blue-600/[0.06] border border-cyan-500/[0.12]"
        >
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-center">
            <span className="text-cyan-400 font-bold">Eager to contribute</span>{" "}
            to innovative and impactful products by leveraging expertise in modern
            full-stack web technologies — from idea to deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
