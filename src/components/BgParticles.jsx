import React from "react";

/* Shared floating-particle background layer.
   Drop inside any `relative overflow-hidden` section. */

const PARTICLES = [
  { id: 0,  left: "4%",   delay: 0,   dur: 13, blue: false },
  { id: 1,  left: "11%",  delay: 2.4, dur: 10, blue: false },
  { id: 2,  left: "18%",  delay: 4.8, dur: 15, blue: true  },
  { id: 3,  left: "25%",  delay: 1.2, dur: 12, blue: false },
  { id: 4,  left: "32%",  delay: 6.0, dur: 9,  blue: false },
  { id: 5,  left: "39%",  delay: 3.4, dur: 14, blue: true  },
  { id: 6,  left: "46%",  delay: 0.8, dur: 11, blue: false },
  { id: 7,  left: "53%",  delay: 5.6, dur: 13, blue: false },
  { id: 8,  left: "60%",  delay: 2.0, dur: 10, blue: true  },
  { id: 9,  left: "67%",  delay: 4.2, dur: 15, blue: false },
  { id: 10, left: "74%",  delay: 1.6, dur: 12, blue: false },
  { id: 11, left: "81%",  delay: 7.0, dur: 9,  blue: true  },
  { id: 12, left: "88%",  delay: 0.4, dur: 14, blue: false },
  { id: 13, left: "94%",  delay: 3.8, dur: 11, blue: false },
  { id: 14, left: "7%",   delay: 5.2, dur: 16, blue: true  },
  { id: 15, left: "57%",  delay: 8.0, dur: 10, blue: false },
  { id: 16, left: "29%",  delay: 6.4, dur: 13, blue: false },
  { id: 17, left: "78%",  delay: 1.0, dur: 12, blue: true  },
];

const BgParticles = ({ gridColor = "34,211,238", gridOpacity = 0.04 }) => (
  <>
    {/* Animated grid */}
    <div
      className="absolute inset-0 pointer-events-none animate-grid-pulse"
      style={{
        backgroundImage: `linear-gradient(rgba(${gridColor},${gridOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(${gridColor},${gridOpacity}) 1px, transparent 1px)`,
        backgroundSize: "55px 55px",
      }}
    />

    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${p.blue ? "bg-blue-400" : "bg-cyan-400"}`}
          style={{
            left: p.left,
            bottom: "0%",
            width: "2px",
            height: "2px",
            opacity: 0,
            animation: `particle-rise ${p.dur}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  </>
);

export default BgParticles;
