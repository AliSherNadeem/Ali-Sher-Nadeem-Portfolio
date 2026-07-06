import React from "react";

/* Shared floating-particle background layer.
   Drop inside any `relative overflow-hidden` section. */

const PARTICLES = [
  { id: 0,  left: "2%",   delay: 0,   dur: 13, blue: false },
  { id: 1,  left: "6%",   delay: 2.4, dur: 10, blue: false },
  { id: 2,  left: "10%",  delay: 4.8, dur: 15, blue: true  },
  { id: 3,  left: "14%",  delay: 1.2, dur: 12, blue: false },
  { id: 4,  left: "18%",  delay: 6.0, dur: 9,  blue: false },
  { id: 5,  left: "22%",  delay: 3.4, dur: 14, blue: true  },
  { id: 6,  left: "26%",  delay: 0.8, dur: 11, blue: false },
  { id: 7,  left: "30%",  delay: 5.6, dur: 13, blue: false },
  { id: 8,  left: "34%",  delay: 2.0, dur: 10, blue: true  },
  { id: 9,  left: "38%",  delay: 4.2, dur: 15, blue: false },
  { id: 10, left: "42%",  delay: 1.6, dur: 12, blue: false },
  { id: 11, left: "46%",  delay: 7.0, dur: 9,  blue: true  },
  { id: 12, left: "50%",  delay: 0.4, dur: 14, blue: false },
  { id: 13, left: "54%",  delay: 3.8, dur: 11, blue: false },
  { id: 14, left: "58%",  delay: 5.2, dur: 16, blue: true  },
  { id: 15, left: "62%",  delay: 8.0, dur: 10, blue: false },
  { id: 16, left: "66%",  delay: 6.4, dur: 13, blue: false },
  { id: 17, left: "70%",  delay: 1.0, dur: 12, blue: true  },
  { id: 18, left: "74%",  delay: 2.8, dur: 14, blue: false },
  { id: 19, left: "78%",  delay: 4.6, dur: 11, blue: false },
  { id: 20, left: "82%",  delay: 0.2, dur: 13, blue: true  },
  { id: 21, left: "86%",  delay: 7.4, dur: 10, blue: false },
  { id: 22, left: "90%",  delay: 3.0, dur: 15, blue: false },
  { id: 23, left: "94%",  delay: 5.8, dur: 9,  blue: true  },
  { id: 24, left: "97%",  delay: 1.4, dur: 12, blue: false },
  { id: 25, left: "8%",   delay: 6.8, dur: 16, blue: false },
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
