import React from 'react';

const projects = [
  {
    title: "Bloc-notesTerminal & PDF Export",
    desc: "Application Node.js/JavaScript complète intégrant un export PDF dynamique, un mode sombre et un système d'historique sous Git.",
    tech: ["Node.js", "JavaScript", "HTML5/CSS3", "Git"],
    github: "#"
  },
  {
    title: "Pipeline CI/CD Docker & GitHub Actions",
    desc: "Mise en place d'un pipeline d'intégration continue automatisé construisant et publiant une image Docker sur Docker Hub à chaque commit.",
    tech: ["Docker", "GitHub Actions", "Docker Hub", "Linux"],
    github: "#"
  },
  {
    title: "Cluster Kubernetes Local & Déploiement App",
    desc: "Configuration d'un environnement d'orchestration avec Minikube, gestion des Pods, Deployments, Services et résolution des flux réseaux.",
    tech: ["Kubernetes", "Minikube", "Docker", "Réseau CIDR"],
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Projets Réalisés</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/50 transition-all">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{proj.desc}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-900">
                    {t}
                  </span>
                ))}
              </div>
              <a href={proj.github} className="inline-block text-sm text-slate-300 hover:text-white underline">
                Voir sur GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

