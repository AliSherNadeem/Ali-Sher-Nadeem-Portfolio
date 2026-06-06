import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Converge Logics",
    location: "Islamabad, Pakistan",
    duration: "March 2026 – Present",
    type: "Full-time",
    color: "cyan",
    points: [
      "Developing and maintaining full-stack web applications using Next.js, Node.js, Express.js, PostgreSQL, and Tailwind CSS.",
      "Designing and implementing RESTful APIs and database schemas to support scalable product features.",
      "Collaborating with cross-functional teams to deliver end-to-end solutions from UI design to backend integration.",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "Metavystic",
    location: "Islamabad, Pakistan",
    duration: "November 2024 – February 2026",
    type: "Full-time",
    color: "blue",
    points: [
      "Built fast, responsive, and scalable web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and Tailwind CSS, boosting user engagement by 20%.",
      "Integrated RESTful APIs to connect front-end interfaces with backend services, enabling real-time data updates and improving app functionality by 25%.",
      "Ensured cross-browser compatibility achieving 95% consistency in user experience across Chrome, Firefox, and Edge.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Front End Developer",
    company: "AKC Creations",
    location: "Remote",
    duration: "July 2024 – November 2024",
    type: "Full-time",
    color: "purple",
    points: [
      "Collaborated with a remote team to design and develop responsive, scalable, and user-friendly web interfaces using React.js and Next.js.",
      "Developed interactive UIs delivering seamless user experiences with 20% faster load times.",
      "Utilized Git for efficient code management and team collaboration, meeting 90% of project deadlines ahead of schedule.",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Git"],
  },
];

const colorMap = {
  cyan: {
    dot: "bg-cyan-400",
    glow: "shadow-cyan-400/30",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    gradient: "from-cyan-500/[0.08] to-transparent",
    line: "bg-cyan-400",
    title: "text-cyan-400",
  },
  blue: {
    dot: "bg-blue-400",
    glow: "shadow-blue-400/30",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    gradient: "from-blue-500/[0.08] to-transparent",
    line: "bg-blue-400",
    title: "text-blue-400",
  },
  purple: {
    dot: "bg-purple-400",
    glow: "shadow-purple-400/30",
    border: "border-purple-500/20",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    gradient: "from-purple-500/[0.08] to-transparent",
    line: "bg-purple-400",
    title: "text-purple-400",
  },
};

const ExperienceCard = ({ exp, index, isInView }) => {
  const c = colorMap[exp.color];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.15, ease: "easeOut" }}
      className="relative flex md:contents"
    >
      {/* Timeline node (desktop) */}
      <div className="hidden md:flex flex-col items-center mx-4 flex-shrink-0 w-8">
        <div
          className={`w-4 h-4 rounded-full ${c.dot} shadow-lg ${c.glow} ring-2 ring-white/10 z-10 mt-1 flex-shrink-0`}
        />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-1" />
        )}
      </div>

      {/* Card */}
      <div
        className={`mb-8 md:mb-12 flex-1 p-5 sm:p-6 rounded-2xl border bg-white/[0.03] ${c.border} hover:bg-white/[0.05] transition-all duration-300 group`}
      >
        {/* Mobile dot */}
        <div className={`md:hidden w-3 h-3 rounded-full ${c.dot} mb-4`} />

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className={`text-base sm:text-lg font-bold ${c.title}`}>{exp.title}</h3>
            <p className="text-slate-300 font-medium text-sm mt-0.5">
              {exp.company}
              <span className="text-slate-600 font-normal"> · {exp.location}</span>
            </p>
          </div>
          <span
            className={`self-start sm:self-auto inline-block px-3 py-1 rounded-full text-xs font-medium border ${c.badge} whitespace-nowrap`}
          >
            {exp.duration}
          </span>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 opacity-70`} />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[10px] font-medium rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      name="experience"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#070716] to-[#050510] text-white pt-20 overflow-hidden"
    >
      {/* Bg decorations */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div
        ref={ref}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-[calc(100vh-5rem)] py-16"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center gap-4"
        >
          <div className="flex flex-col">
            <span className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase">
              My journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
              Work{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[calc(2rem)] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-transparent" />

          <div className="md:ml-0">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-4 flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] w-fit"
        >
          <FiBriefcase className="text-cyan-400" size={18} />
          <p className="text-sm text-slate-400">
            <span className="text-white font-medium">Open to new roles.</span>{" "}
            Let's build something great together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
