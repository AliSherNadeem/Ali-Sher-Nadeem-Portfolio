import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiServer, FiTool } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies" },
  { value: "3", label: "Companies" },
];

const specialties = [
  {
    icon: FiCode,
    label: "Frontend",
    desc: "React.js, Next.js, TypeScript, Tailwind CSS, Shadcn UI",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/20",
  },
  {
    icon: FiServer,
    label: "Backend",
    desc: "Node.js, Express.js, PostgreSQL, MongoDB, REST APIs",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/20",
  },
  {
    icon: FiTool,
    label: "Tools & Platforms",
    desc: "Git, GitHub, Postman, Jira, Vercel, Zoho",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/20",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      name="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#050510] to-[#070716] text-white pt-20 overflow-hidden"
    >
      {/* Bg grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

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
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left – bio */}
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
              across the full stack.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My expertise spans from building responsive, pixel-perfect interfaces
              with React.js and Next.js to architecting robust backends with Node.js,
              Express.js, PostgreSQL, and MongoDB. I'm passionate about clean,
              maintainable code and delivering impactful products.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I'm also experienced in collaborating with cross-functional teams using
              tools like Jira, Postman, and Vercel — ensuring smooth delivery from
              UI design all the way to backend integration.
            </p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] mt-2 hover:border-purple-500/20 transition-colors duration-300"
            >
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
                <HiAcademicCap size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">
                  B.S. in Software Engineering
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  PMAS Arid Agriculture University, Rawalpindi, Pakistan
                </p>
              </div>
            </motion.div>

            {/* Specialty chips */}
            <div className="space-y-3 pt-2">
              {specialties.map(({ icon: Icon, label, desc, iconBg, iconColor, hoverBorder }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className={`flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] ${hoverBorder} hover:bg-white/[0.05] transition-all duration-300 cursor-default`}
                >
                  <div className={`p-2 rounded-lg ${iconBg} ${iconColor} flex-shrink-0`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">{label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/20 hover:bg-white/[0.05] transition-all duration-300 group cursor-default"
                >
                  <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Summary callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-cyan-500/[0.06] to-blue-600/[0.06] border border-cyan-500/[0.12]"
            >
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Eager to contribute</span>{" "}
                to innovative and impactful products by leveraging expertise in
                modern full-stack web technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
