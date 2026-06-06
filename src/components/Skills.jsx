import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb, SiGit, SiGithub,
  SiPostman, SiJira, SiVercel,
} from "react-icons/si";
import { FiLayout, FiLayers, FiDatabase, FiCloud } from "react-icons/fi";
import BgParticles from "./BgParticles";

const categories = [
  {
    label: "Frontend",
    color: "cyan",
    gridColor: "34,211,238",
    skills: [
      { name: "React.js",    icon: SiReact,      color: "#61DAFB" },
      { name: "Next.js",     icon: SiNextdotjs,  color: "#ffffff" },
      { name: "TypeScript",  icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript",  icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS",icon: SiTailwindcss,color: "#06B6D4" },
      { name: "Bootstrap",   icon: SiBootstrap,  color: "#7952B3" },
      { name: "Shadcn UI",   icon: FiLayout,     color: "#e2e8f0" },
      { name: "Mantine UI",  icon: FiLayers,     color: "#339AF0" },
      { name: "Zustand",     icon: FiDatabase,   color: "#a855f7" },
    ],
  },
  {
    label: "Backend",
    color: "blue",
    gridColor: "59,130,246",
    skills: [
      { name: "Node.js",     icon: SiNodedotjs,  color: "#339933" },
      { name: "Express.js",  icon: SiExpress,    color: "#e2e8f0" },
      { name: "PostgreSQL",  icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB",     icon: SiMongodb,    color: "#47A248" },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "purple",
    gridColor: "168,85,247",
    skills: [
      { name: "Git",         icon: SiGit,        color: "#F05032" },
      { name: "GitHub",      icon: SiGithub,     color: "#e2e8f0" },
      { name: "Postman",     icon: SiPostman,    color: "#FF6C37" },
      { name: "Jira",        icon: SiJira,       color: "#2684FF" },
      { name: "Zoho",        icon: FiCloud,      color: "#e44a3e" },
      { name: "Vercel",      icon: SiVercel,     color: "#e2e8f0" },
    ],
  },
];

const categoryStyles = {
  cyan:   { label: "text-cyan-400",   border: "border-cyan-500/25",   dot: "bg-cyan-400",   glow: "rgba(34,211,238,0.12)",  rgb: "34,211,238" },
  blue:   { label: "text-blue-400",   border: "border-blue-500/25",   dot: "bg-blue-400",   glow: "rgba(59,130,246,0.12)",  rgb: "59,130,246" },
  purple: { label: "text-purple-400", border: "border-purple-500/25", dot: "bg-purple-400", glow: "rgba(168,85,247,0.12)", rgb: "168,85,247" },
};

const SkillCard = ({ skill, delay, isInView }) => {
  const Icon = skill.icon;
  const borderDefault = `${skill.color}70`;
  const borderHover   = `${skill.color}cc`;
  const glowDefault   = `0 0 10px 1px ${skill.color}28`;
  const glowHover     = `0 0 18px 3px ${skill.color}55, 0 0 36px 6px ${skill.color}22`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.28, delay, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.09, y: -4, transition: { duration: 0.16 } }}
      className="group flex flex-col items-center justify-center gap-3 py-6 px-3 rounded-xl cursor-default bg-[#07071a] border transition-all duration-200"
      style={{ borderColor: borderDefault, boxShadow: glowDefault }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = glowHover;
        e.currentTarget.style.borderColor = borderHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = glowDefault;
        e.currentTarget.style.borderColor = borderDefault;
      }}
    >
      <Icon
        size={46}
        color={skill.color}
        style={{ filter: `drop-shadow(0 0 10px ${skill.color}70)` }}
      />
      <span className="text-xs text-slate-500 group-hover:text-slate-200 transition-colors duration-200 text-center font-medium leading-tight">
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
      className="relative w-full bg-gradient-to-b from-[#070716] to-[#050510] text-white pt-16 overflow-hidden"
    >
      {/* Shared animated background */}
      <BgParticles gridColor="168,85,247" gridOpacity={0.04} />

      <div className="absolute top-1/2 left-0 w-[420px] h-[420px] bg-purple-600/[0.05] rounded-full blur-[140px] pointer-events-none animate-orb-2" />
      <div className="absolute top-1/2 right-0 w-[420px] h-[420px] bg-cyan-600/[0.04] rounded-full blur-[140px] pointer-events-none animate-orb-1" />

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
          <span className="text-cyan-400 text-xs font-bold tracking-[0.22em] uppercase">My toolkit</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-xl">
            Technologies and tools I use to build full-stack web applications.
          </p>
        </motion.div>

        {/* Category blocks */}
        <div className="space-y-7">
          {categories.map((cat, catIdx) => {
            const s = categoryStyles[cat.color];
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: catIdx * 0.15 }}
                className={`rounded-2xl border ${s.border} bg-white/[0.02] p-6 sm:p-7`}
                style={{ boxShadow: `inset 0 0 60px ${s.glow}` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2.5 h-2.5 rounded-full ${s.dot} shadow-lg`}
                    style={{ boxShadow: `0 0 8px 2px ${s.dot.replace("bg-", "")}` }} />
                  <h3 className={`text-sm font-extrabold ${s.label} uppercase tracking-[0.18em]`}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skill cards grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
                  {cat.skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      delay={catIdx * 0.08 + i * 0.05}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

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
