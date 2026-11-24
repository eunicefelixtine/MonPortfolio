"use client";

import React, { useEffect, useRef, useState } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "DevOps & Cloud Enthusiast",
  "AI & Machine Learning Explorer",
  "Major de promotion — ENSPD",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // typing effect
  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  // particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const N = 70;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,0.7)";
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(99,102,241,${0.18 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 rounded-full animate-pulse-glow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-blink" />
          DISPONIBLE POUR STAGE & OPPORTUNITÉS
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-[1.05]">
          Bonjour, je suis{" "}
          <span className="shimmer-text">Eunice</span>
        </h1>

        <div className="text-xl md:text-3xl font-semibold text-slate-300 mb-6 h-10">
          <span className="typed-cursor">{text}</span>
        </div>

        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
          Étudiante ingénieure en <span className="text-cyan-300">Génie Logiciel</span> à l&apos;ENSPD,
          <span className="text-indigo-300"> major de promotion</span>. Je conçois des applications Full Stack,
          j&apos;expérimente l&apos;IA et j&apos;orchestre des infrastructures Cloud avec Docker &amp; Kubernetes.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-cyan-400 text-white font-semibold transition-all hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>

        {/* floating tech badges */}
        <div className="relative hidden md:block h-40">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-cyan-500/30 animate-spin-slow" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-indigo-500/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "26s" }} />
          {["Docker", "K8s", "Next.js", "Python", "Rust"].map((t, i) => (
            <div
              key={t}
              className="absolute left-1/2 top-1/2 text-xs font-mono text-cyan-300 bg-slate-900/80 border border-cyan-800/50 px-2.5 py-1 rounded-full animate-orbit"
              style={{ animationDelay: `${-i * 2.4}s`, animationDuration: "12s" }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-float">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
