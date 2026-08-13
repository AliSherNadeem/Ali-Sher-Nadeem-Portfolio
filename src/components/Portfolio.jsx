import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiX, FiExternalLink, FiMaximize2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BgParticles from "./BgParticles";
import Alignography from "../assets/portfolio/Alignography.png";
import AutoMojoLogin from "../assets/portfolio/automojo-login.png";
import AutoMojoMarketing from "../assets/portfolio/AutoMojo.png";
import AutoMojoEstimate from "../assets/portfolio/automojo-estimate.jpg";
import QvTrainingDashboard from "../assets/portfolio/qv-training-dashboard.png";
import QvTrainingNutrition from "../assets/portfolio/qv-training-nutrition.png";
import DligLogin from "../assets/portfolio/dlig-login.png";
import DligDashboard from "../assets/portfolio/digital-library-dashboard.png";
import DligCatalogue from "../assets/portfolio/digital-library-catalogue.png";
import DligDocumentViewer from "../assets/portfolio/digital-library-document-viewer.png";
import Revetment from "../assets/portfolio/Revetment.png";

const projects = [
  {
    id: 1,
    title: "Alignography",
    company: "Metavystic",
    link: "https://alignography.com",
    hasImage: true,
    images: [Alignography],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Mantine UI", "Zustand", "React Query", "Mapbox GL"],
    color: "blue",
    details: [
      "Built the front-end for a multi-tenant, geospatial business-intelligence SaaS platform used by retail and financial clients to analyze customer data and plan location-based business expansion.",
      "Integrated the Meta (Facebook) Ads API and Google Ads API directly into the product for campaign management and reach estimation, along with an AI-powered business assistant.",
      "Used Zustand and React Query across a large dashboard with map-based analytics and GDPR-compliant workflows, cutting data-related bugs by 40%.",
    ],
  },
  {
    id: 2,
    title: "Blueprint",
    company: "Independent / Freelance",
    link: "https://blueprint.build",
    gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/10",
    hasImage: false,
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "PostGIS", "CesiumJS", "GeoServer"],
    color: "cyan",
    details: [
      "Built the backend (Node.js, Express, PostgreSQL, PostGIS) for a 3D GIS platform used for municipal zoning and compliance, including a map-editing tool where every change is reviewed and approved before it goes live.",
      "Built a version-controlled system for zoning rules, similar to how developers track changes in code, so municipal staff can draft and review legislation updates before publishing.",
      "Built key features on a 3D map interface, including approvals, a file manager, and a data-migration tool, and connected a self-hosted map server (GeoServer) with AWS S3 for file storage.",
    ],
  },
  {
    id: 3,
    title: "QV Training",
    company: "Converge Logics",
    link: "https://app.qv-training.com",
    hasImage: true,
    images: [QvTrainingDashboard, QvTrainingNutrition],
    tech: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "OpenAI API"],
    color: "purple",
    details: [
      "Built a full-stack AI fitness coaching platform (React, Node.js, Express, MongoDB) on my own, end to end, from database design to the user interface.",
      "Used OpenAI to auto-generate personalized training and nutrition plans, with server-side checks that recalculate the numbers and reject any plan that looks wrong before it reaches users.",
      "Built secure OTP-based login with time-limited reset codes and a gamified habit-tracking system with daily streaks.",
    ],
  },
  {
    id: 4,
    title: "Digital Library and Information Gateway",
    company: "Metavystic",
    link: "https://dlig.pnd.balochistan.gov.pk",
    hasImage: true,
    images: [DligLogin, DligDashboard, DligCatalogue, DligDocumentViewer],
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Mantine UI"],
    color: "cyan",
    details: [
      "Built a document and publication management platform for the Government of Balochistan's planning department.",
      "The platform has 3 user roles, superadmin, department manager, and user, each with its own dashboard.",
      "Built file upload for Word, Excel, PowerPoint, and video files, with filters by department, category, and file type, and improved page navigation, increasing efficiency by 25%.",
    ],
  },
  {
    id: 5,
    title: "AutoMojo",
    company: "AKC Creations",
    link: "https://automojo.io",
    hasImage: true,
    images: [AutoMojoLogin, AutoMojoMarketing, AutoMojoEstimate],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Redux Toolkit"],
    color: "purple",
    details: [
      "Built a shop-management platform for vehicle-upgrade shops, including car audio, window tint, and off-road shops, with a role-based admin and user dashboard split built with the Next.js App Router.",
      "Built the estimate and invoice builder, with line-item editing, discounts, and client-side PDF generation, plus a full inventory and purchase-order system with vendor tracking.",
      "Built a public payment page that works without a login, plus a reusable data table used across the platform. The live product also includes automated follow-ups, review requests, and ad-spend tracking for shop owners.",
    ],
  },
  {
    id: 6,
    title: "ToetsTester",
    company: "Converge Logics",
    link: "https://toetstester.nl/en/",
    gradient: "from-cyan-600/30 via-blue-600/20 to-purple-600/10",
    hasImage: false,
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    color: "cyan",
    details: [
      "Building a full-stack platform that uses AI to automatically grade handwritten and digital student tests, saving teachers hours of manual grading each week.",
      "Building batch grading for a whole class at once, with score compilation and feedback generation, plus manual review so teachers can adjust any result.",
      "Implementing a PostgreSQL database schema and RESTful APIs supporting multi-user access, data integrity, and scalable record storage.",
    ],
  },
  {
    id: 7,
    title: "Revetment",
    company: "Metavystic",
    hasImage: true,
    images: [Revetment],
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Mantine UI"],
    color: "blue",
    details: [
      "Enhanced the UI using Next.js, Tailwind CSS, and Mantine UI, boosting responsiveness across devices.",
      "Upgraded existing features to improve performance, reducing user load times by 25% on average.",
      "Optimized data-management workflows, cutting processing times by 20% for improved overall efficiency.",
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
            src={project.images[0]}
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
        {/* Company badge — solid dark backing so it stays readable over any screenshot */}
        <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-black/75 border border-white/15 text-white backdrop-blur-sm">
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
              className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-300"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-400">
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
  const [activeImage, setActiveImage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = (p) => { setSelected(p); setFullImage(false); setActiveImage(0); };
  const closeModal = () => { setSelected(null); setFullImage(false); };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImage((i) => (i + 1) % selected.images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImage((i) => (i - 1 + selected.images.length) % selected.images.length);
  };

  return (
    <section
      name="projects"
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
              Projects
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
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
                    src={selected.images[activeImage]}
                    alt={`${selected.title} screenshot ${activeImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}>
                    <span className="text-white/20 text-6xl font-bold">{selected.title.charAt(0)}</span>
                  </div>
                )}

                {/* Prev/next arrows, only if there's more than one image */}
                {selected.hasImage && selected.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-200 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-200 cursor-pointer"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={16} />
                    </button>
                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selected.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                            i === activeImage ? "bg-white w-4" : "bg-white/40"
                          }`}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {selected.hasImage && (
                  <button
                    onClick={() => setFullImage(true)}
                    className="absolute top-3 right-12 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs rounded-lg hover:bg-black/80 transition-colors duration-200 cursor-pointer"
                    aria-label="View full image"
                  >
                    <FiMaximize2 size={13} />
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
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${colorMap[selected.color].modalTitle} bg-clip-text text-transparent`}>
                      {selected.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      <span className="font-semibold text-slate-300">{selected.company}</span>
                    </p>
                  </div>
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border ${colorMap[selected.color].badge} hover:brightness-125 transition-all duration-200 cursor-pointer`}
                    >
                      <FiExternalLink size={12} />
                      Live Site
                    </a>
                  )}
                </div>

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
              src={selected.images[activeImage]}
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
