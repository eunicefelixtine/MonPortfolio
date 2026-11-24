"use client";

import React from "react";
import Reveal from "./Reveal";

const timeline = [
  {
    year: "2024 — Présent",
    title: "Secrétaire Générale — Club GIT, ENSPD",
    desc: "Coordination des activités techniques et organisationnelles : site web du club, Academic Support, commission Maintenance, commission SEFI, partenariat AWS Student Builder Group, assemblées générales et réunions.",
    tags: ["Coordination", "Rédaction", "Cloud", "Mentorat"],
  },
  {
    year: "2024 — Présent",
    title: "Étudiante ingénieure — Génie Logiciel, ENSPD",
    desc: "Major de promotion. Formation en développement logiciel, bases de données, réseaux, systèmes, IA et DevOps.",
    tags: ["Génie Logiciel", "Major de promotion"],
  },
  {
    year: "2024",
    title: "Orange Summer Challenge",
    desc: "Projet de détection de deepfakes et de vérification des informations pour le ministère de la Communication.",
    tags: ["IA", "Computer Vision", "Data"],
  },
  {
    year: "2024",
    title: "Compétition — GREEN",
    desc: "Conception d'une plateforme d'agriculture intelligente (IA, robotique, IoT) pour petits et grands exploitants.",
    tags: ["IA", "Robotique", "IoT"],
  },
];

const k8s = [
  { label: "Kubernetes", value: "1.35.1" },
  { label: "Docker", value: "29.2.1" },
  { label: "Minikube", value: "1.38.1" },
  { label: "Argo CD", value: "GitOps" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Expérience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Parcours &amp; engagements
          </h2>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Timeline */}
        <div className="relative pl-6 border-l border-slate-800 space-y-8">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                <div className="text-xs font-mono text-cyan-400 mb-1">{t.year}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{t.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* K8s highlight */}
        <Reveal delay={200}>
          <div className="glass rounded-2xl p-6 neon-border">
            <h3 className="text-xl font-bold text-white mb-2">
              Expérience Kubernetes remarquable
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Manipulation d&apos;un cluster Minikube local avec plusieurs applications conteneurisées,
              gestion des réplicas, observation des Pods et diagnostic de disponibilité.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {k8s.map((k) => (
                <div key={k.label} className="bg-slate-900/60 rounded-lg p-3 border border-slate-800">
                  <div className="text-xs text-slate-500">{k.label}</div>
                  <div className="text-lg font-mono text-cyan-300">{k.value}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {[
                "Blocnote — 2 réplicas",
                "Echo Web",
                "Redis",
                "Serveur Rust — 2 réplicas",
              ].map((app) => (
                <div
                  key={app}
                  className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900/40 rounded-lg px-3 py-2 border border-slate-800/60"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-blink" />
                  {app}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
