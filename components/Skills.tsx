"use client";

import React from "react";
import Reveal from "./Reveal";

const groups = [
  {
    title: "Langages",
    icon: "⟨/⟩",
    items: [
      { name: "Python", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 75 },
      { name: "PHP", level: 70 },
      { name: "C#", level: 65 },
      { name: "Rust", level: 55 },
      { name: "C", level: 60 },
    ],
  },
  {
    title: "Frontend",
    icon: "◈",
    items: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "Vite", level: 70 },
      { name: "XAML (.NET MAUI)", level: 60 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Prisma ORM", level: 75 },
      { name: "Clerk", level: 70 },
      { name: "PHP", level: 70 },
      { name: "Java MVC/DAO", level: 75 },
      { name: "Python", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁",
    items: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Minikube", level: 80 },
      { name: "Argo CD", level: 65 },
      { name: "Git / GitHub", level: 90 },
      { name: "CI/CD", level: 65 },
      { name: "Linux (Ubuntu)", level: 80 },
      { name: "AWS / Azure", level: 50 },
    ],
  },
  {
    title: "Bases de données",
    icon: "🗄",
    items: [
      { name: "MySQL", level: 75 },
      { name: "SQLite", level: 80 },
      { name: "Redis", level: 60 },
      { name: "Prisma", level: 75 },
    ],
  },
  {
    title: "IA & Data",
    icon: "🧠",
    items: [
      { name: "Pandas / NumPy", level: 70 },
      { name: "Scikit-learn", level: 60 },
      { name: "Gemini API", level: 70 },
      { name: "Machine Learning", level: 60 },
      { name: "Deep Learning", level: 50 },
      { name: "Computer Vision", level: 55 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Compétences
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Stack technique
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies pratiquées, classées par domaine. Les niveaux reflètent mon expérience réelle.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 80}>
            <div className="glass rounded-2xl p-6 card-hover h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-800/40 flex items-center justify-center text-cyan-300 font-mono">
                  {g.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              </div>
              <div className="space-y-3">
                {g.items.map((it) => (
                  <div key={it.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{it.name}</span>
                      <span className="text-cyan-400 font-mono text-xs">{it.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-1000"
                        style={{ width: `${it.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
