import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira,
  SiVercel,
} from "react-icons/si";
import { FiLayout, FiLayers, FiDatabase, FiCloud } from "react-icons/fi";

const categories = [
  {
    label: "Frontend",
    color: "cyan",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Shadcn UI", icon: FiLayout, color: "#ffffff" },
      { name: "Mantine UI", icon: FiLayers, color: "#339AF0" },
      { name: "Zustand", icon: FiDatabase, color: "#a855f7" },
    ],
  },
  {
    label: "Backend",
    color: "blue",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "purple",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Zoho", icon: FiCloud, color: "#e44a3e" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

const categoryStyles = {
  cyan: {
    label: "text-cyan-400",
    border: "border-cyan-500/20",
    headerBg: "bg-cyan-500/10",
    ring: "ring-cyan-400/30",
    dot: "bg-cyan-400",
  },
  blue: {
    label: "text-blue-400",
    border: "border-blue-500/20",
    headerBg: "bg-blue-500/10",
    ring: "ring-blue-400/30",
    dot: "bg-blue-400",
  },
  purple: {
    label: "text-purple-400",
    border: "border-purple-500/20",
    headerBg: "bg-purple-500/10",
    ring: "ring-purple-400/30",
    dot: "bg-purple-400",
  },
};

const SkillCard = ({ skill, delay, isInView }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.07, y: -2 }}
      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-250 cursor-default"
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-200"
        style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
      >
        <Icon size={28} color={skill.color} />
      </div>
      <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors duration-200 text-center font-medium leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      name="skills"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#070716] to-[#050510] text-white pt-20 overflow-hidden"
    >
      {/* Bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-[calc(100vh-5rem)] py-16"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
            My toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl">
            Technologies and tools I use to build full-stack web applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((cat, catIdx) => {
            const s = categoryStyles[cat.color];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className={`rounded-2xl border ${s.border} bg-white/[0.02] p-5 sm:p-6`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                  <h3 className={`text-sm font-bold ${s.label} uppercase tracking-widest`}>
                    {cat.label}
                  </h3>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                  {cat.skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={catIdx * 0.1 + i * 0.06}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center text-xs text-slate-700"
        >
          Always learning and adding new tools to the stack.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
