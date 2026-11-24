"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";

type Project = {
  title: string;
  desc: string;
  tech: string[];
  status: string;
  category: string;
  gradient: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Taskflow — Gestion de projets",
    desc: "Plateforme Full Stack de gestion de projets et de tâches. Authentification Clerk, Prisma, SQLite, architecture MVC/DAO, composants React réutilisables.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "DaisyUI", "Clerk", "Prisma", "SQLite"],
    status: "En développement",
    category: "Full Stack",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "GREEN — Agriculture intelligente",
    desc: "Solution d'agriculture intelligente basée sur l'IA pour petits et grands exploitants : diagnostic de maladies par photo, Green Bot (Gemini), robot autonome, détection d'insectes par ultrasons.",
    tech: ["IA", "Gemini API", "Computer Vision", "EfficientNet", "React", "IoT"],
    status: "Compétition",
    category: "IA / IoT",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Cluster Kubernetes local",
    desc: "Cluster Minikube (K8s 1.35.1) avec plusieurs apps déployées : Blocnote (2 réplicas), Echo Web, Redis, serveur Rust (2 réplicas). Observation des Pods, Argo CD, GitOps.",
    tech: ["Kubernetes", "Minikube", "Docker", "Argo CD", "kubectl", "Rust"],
    status: "Réalisé",
    category: "DevOps",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    title: "Gestion de bibliothèque (Java)",
    desc: "Application Java structurée en MVC et DAO : séparation des couches, gestion des données, logique métier, persistance.",
    tech: ["Java", "MVC", "DAO", "SQL"],
    status: "Réalisé",
    category: "Backend",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Gestion des présences (PHP)",
    desc: "Application web de gestion des présences et enregistrement des informations avec PHP, MySQL, HTML/CSS/JS.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    status: "Réalisé",
    category: "Full Stack",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Formulaire de connexion .NET MAUI",
    desc: "Reproduction d'un formulaire de connexion à partir d'une maquette avec C#, XAML et .NET MAUI.",
    tech: ["C#", "XAML", ".NET MAUI"],
    status: "Réalisé",
    category: "Mobile",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Deepfake & vérification d'infos",
    desc: "Projet Orange Summer Challenge pour le ministère de la Communication : détection de deepfakes et vérification des informations sur les réseaux sociaux.",
    tech: ["IA", "Computer Vision", "Data Analysis"],
    status: "Exploré",
    category: "IA",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Assistant vocal intelligent",
    desc: "Assistant vocal interactif créant des tâches dans Google Calendar et automatisant des opérations.",
    tech: ["Python", "JavaScript", "Google Calendar API"],
    status: "Envisagé",
    category: "IA",
    gradient: "from-slate-500 to-slate-700",
  },
];

const categories = ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-10">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Projets
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Réalisations &amp; expérimentations
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Une sélection de projets académiques, personnels et associatifs.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                filter === c
                  ? "bg-cyan-500/20 border-cyan-500/60 text-cyan-300"
                  : "border-slate-700 text-slate-400 hover:border-slate-500"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="glass rounded-2xl overflow-hidden card-hover flex flex-col h-full">
              <div className={`h-32 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                  <span className="text-xs font-mono text-white/90 bg-black/30 backdrop-blur px-2 py-1 rounded">
                    {p.category}
                  </span>
                  <span className="text-xs font-semibold text-white bg-black/30 backdrop-blur px-2 py-1 rounded">
                    {p.status}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
