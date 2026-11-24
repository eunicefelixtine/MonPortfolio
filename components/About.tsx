"use client";

import React from "react";
import Reveal from "./Reveal";
import Image from "next/image";

const stats = [
  { value: "ENSPD", label: "École d'ingénieurs" },
  { value: "Major", label: "de promotion" },
  { value: "10+", label: "projets réalisés" },
  { value: "8+", label: "langages maîtrisés" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            À propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Qui suis-je ?
          </h2>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="relative">
            <div className="glass rounded-2xl p-8 neon-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-2xl font-bold text-slate-950">
                  E
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Eunice</h3>
                  <p className="text-cyan-300 text-sm">Software Engineering | AI | DevOps &amp; Cloud</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Étudiante ingénieure en <strong className="text-white">Génie Logiciel à l&apos;ENSPD</strong>,
                je suis <strong className="text-cyan-300">major de ma promotion</strong>. Je combine
                développement Full Stack, intelligence artificielle et infrastructures Cloud modernes.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Mon parcours couvre la conception d&apos;applications web et mobiles, la conteneurisation
                avec Docker, l&apos;orchestration Kubernetes, ainsi que l&apos;exploration du Machine Learning
                et du Deep Learning appliqués à des problématiques réelles (agriculture, détection de deepfakes).
              </p>
              <p className="text-slate-300 leading-relaxed">
                Passionnée par l&apos;automatisation, les systèmes distribués et l&apos;IA appliquée, je vise
                une orientation professionnelle vers le <strong className="text-white">DevOps, le Cloud et l&apos;IA</strong>.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Full Stack", "Docker", "Kubernetes", "AI/ML", "Cloud", "Linux"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* decorative */}
            <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-cyan-600/20 blur-3xl" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <div className="relative mb-6 rounded-xl overflow-hidden border border-slate-800">
              <Image src="/tech-illustration.svg" alt="Illustration tech" width={400} height={300} className="w-full h-auto" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Profil en bref</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Étudiante ingénieure en Génie Logiciel — ENSPD, major de promotion.",
                "Expérience pratique en développement Full Stack (Next.js, React, TypeScript, Prisma).",
                "Manipulation d'un cluster Kubernetes local (Minikube) avec plusieurs applications déployées.",
                "Secrétaire Générale du Club GIT de l'ENSPD — coordination & rédaction.",
                "Intérêt marqué pour l'IA appliquée, le Cloud Computing et l'automatisation.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-xl p-4 text-center hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-xl font-bold shimmer-text">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
