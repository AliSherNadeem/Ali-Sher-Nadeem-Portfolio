import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiX, FiExternalLink, FiMaximize2 } from "react-icons/fi";
import BgParticles from "./BgParticles";
import DLIG from "../assets/portfolio/DLIG Project.png";
import Revetment from "../assets/portfolio/Revetment.png";
import AutoMojo from "../assets/portfolio/AutoMojo.png";
import TradeBreakout from "../assets/portfolio/Trade Breakout.png";
import Alignography from "../assets/portfolio/Alignography.png";

const projects = [
  {
    id: 1,
    title: "ToetsTester",
    company: "Converge Logics",
    gradient: "from-cyan-600/30 via-blue-600/20 to-purple-600/10",
    hasImage: false,
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    color: "cyan",
    details: [
      "Building a full-stack online platform enabling teachers to check and grade exams quickly, with automated workflows that reduce grading time significantly.",
      "Designing a structured record management system allowing teachers to maintain, filter, and retrieve student exam records efficiently.",
      "Implementing a robust PostgreSQL database schema and RESTful APIs to support multi-user access, data integrity, and scalable record storage.",
    ],
  },
  {
    id: 2,
    title: "Alignography",
    company: "Metavystic",
    src: Alignography,
    hasImage: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Mantine UI", "Zustand", "REST APIs"],
    color: "blue",
    details: [
      "Developed a scalable front-end accelerating development time by 25% using Next.js, TypeScript, Tailwind CSS, and Mantine UI.",
      "Integrated APIs to enable seamless scheduling, data management, and user interactions, boosting feature delivery speed by 30%.",
      "Implemented Zustand for efficient state management, reducing data-related bugs by 40% and improving overall performance.",
    ],
  },
  {
    id: 3,
    title: "AutoMojo",
    company: "AKC Creations",
    src: AutoMojo,
    hasImage: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "REST APIs"],
    color: "purple",
    details: [
      "Built a responsive front-end with Next.js, TypeScript, Tailwind CSS, and ShadCN, outperforming competitors like Shopmonkey by 30% in speed.",
      "Designed intuitive dashboards and workflows for shop owners, cutting task completion time by 20% based on user feedback.",
      "Integrated APIs to enable features like scheduling, inventory management, and real-time tracking.",
    ],
  },
  {
    id: 4,
    title: "Digital Library & Information Gateway",
    company: "Metavystic",
    src: DLIG,
    hasImage: true,
    tech: ["React.js", "JavaScript", "Mantine UI", "Tailwind CSS"],
    color: "cyan",
    details: [
      "Built a responsive front-end with modules including admin dashboard, user management, and department management, improving navigation efficiency by 25%.",
      "Optimized UI components for seamless performance, reducing user-reported issues by 15%.",
    ],
  },
  {
    id: 5,
    title: "Revetment",
    company: "Metavystic",
    src: Revetment,
    hasImage: true,
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Mantine UI"],
    color: "blue",
    details: [
      "Enhanced the UI using Next.js, JavaScript, Tailwind CSS, and Mantine UI, boosting responsiveness across devices.",
      "Upgraded existing features to improve performance, reducing user load times by 25% on average.",
      "Optimized data management workflows, cutting processing times by 20% for improved overall efficiency.",
    ],
  },
  {
    id: 6,
    title: "Trade Breakout",
    company: "AKC Creations",
    src: TradeBreakout,
    hasImage: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Charts"],
    color: "purple",
    details: [
      "Developed a real-time market analysis platform with 30% faster load times using Next.js, TypeScript, and ShadCN.",
      "Integrated advanced search and filters enabling users to pinpoint breakout opportunities with 95% accuracy.",
      "Built stock detail modules with interactive graphs and charts, enhancing data clarity by 30%.",
    ],
  },
];

const colorMap = {
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    bar: "bg-cyan-400",
    glow: "shadow-cyan-500/15",
    border: "hover:border-cyan-500/25",
    modalTitle: "from-cyan-400 to-blue-500",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    bar: "bg-blue-400",
    glow: "shadow-blue-500/15",
    border: "hover:border-blue-500/25",
    modalTitle: "from-blue-400 to-purple-500",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    bar: "bg-purple-400",
    glow: "shadow-purple-500/15",
    border: "hover:border-purple-500/25",
    modalTitle: "from-purple-400 to-pink-500",
  },
};

const ProjectCard = ({ project, onClick, index, isInView }) => {
  const c = colorMap[project.color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-2xl border border-white/[0.07] ${c.border} bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col hover:shadow-xl ${c.glow}`}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      aria-label={`View ${project.title} details`}
    >
      {/* Image / Placeholder */}
      <div className="relative w-full h-44 overflow-hidden bg-[#080820]">
        {project.hasImage ? (
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            <span className="text-white/20 text-5xl font-bold select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <FiMaximize2 className="text-white" size={18} />
          </div>
        </div>
        {/* Company badge */}
        <span className={`absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold rounded-full border ${c.badge} backdrop-blur-sm`}>
          {project.company}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-white text-sm sm:text-base leading-snug mb-3">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-600">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [fullImage, setFullImage] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = (p) => { setSelected(p); setFullImage(false); };
  const closeModal = () => { setSelected(null); setFullImage(false); };

  return (
    <section
      name="portfolio"
      className="relative w-full bg-gradient-to-b from-[#050510] to-[#070716] text-white pt-16 overflow-hidden"
    >
      {/* Shared animated background */}
      <BgParticles gridColor="34,211,238" gridOpacity={0.035} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/[0.05] rounded-full blur-[140px] pointer-events-none animate-orb-3" />

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
            What I've built
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl">
            A selection of projects built across different companies and stacks.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} onClick={openModal} index={i} isInView={isInView} />
          ))}
        </div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && !fullImage && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              key="modal-content"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-[#0a0a1a] border border-white/[0.1] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Image */}
              <div className="relative w-full h-56 bg-[#080820]">
                {selected.hasImage ? (
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}>
                    <span className="text-white/20 text-6xl font-bold">{selected.title.charAt(0)}</span>
                  </div>
                )}
                {selected.hasImage && (
                  <button
                    onClick={() => setFullImage(true)}
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs rounded-lg hover:bg-black/80 transition-colors duration-200 cursor-pointer"
                    aria-label="View full image"
                  >
                    <FiExternalLink size={13} />
                    Full Image
                  </button>
                )}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black/80 transition-all duration-200 cursor-pointer"
                  aria-label="Close modal"
                >
                  <FiX size={15} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${colorMap[selected.color].modalTitle} bg-clip-text text-transparent`}>
                  {selected.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  <span className="font-semibold text-slate-300">{selected.company}</span>
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-xs rounded-full border ${colorMap[selected.color].badge}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <ul className="mt-5 space-y-3">
                  {selected.details.map((d, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colorMap[selected.color].bar} opacity-70`} />
                      {d}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={closeModal}
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] transition-all duration-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full image overlay ── */}
      <AnimatePresence>
        {selected && fullImage && selected.hasImage && (
          <motion.div
            key="fullimage-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 cursor-pointer"
            onClick={() => setFullImage(false)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selected.src}
              alt={selected.title}
              className="max-w-[92%] max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              onClick={() => setFullImage(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
              aria-label="Close full image"
            >
              <FiX size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
