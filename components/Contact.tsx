"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <Reveal>
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Travaillons ensemble
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Un projet, un stage, une opportunité ? Écrivez-moi.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="glass rounded-2xl p-6 h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Coordonnées</h3>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  ✉
                </span>
                <div>
                  <div className="text-xs text-slate-500">Email</div>
                  <a href="mailto:eunice@example.com" className="hover:text-cyan-300">
                    eunice@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  ⌂
                </span>
                <div>
                  <div className="text-xs text-slate-500">Localisation</div>
                  <div>ENSPD — Cameroun</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  ◎
                </span>
                <div>
                  <div className="text-xs text-slate-500">Disponibilité</div>
                  <div>Stage &amp; opportunités</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Nom</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
                placeholder="vous@exemple.com"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20"
            >
              {status === "sent" ? "Message envoyé ✓" : "Envoyer"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
