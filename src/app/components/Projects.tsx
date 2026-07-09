"use client";

import React from "react";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-8">
        <span className="text-xs text-indigo-400 tracking-widest uppercase">Works</span>
        <h2 className="text-3xl font-extrabold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="glass-card p-6 flex flex-col justify-between border border-white/5 relative">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                <div className="flex gap-1.5 flex-wrap">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-400">{t}</span>
                  ))}
                </div>
              </div>
              
              <p className="text-slate-300 text-xs leading-relaxed mb-4">{proj.description}</p>
              
              <ul className="space-y-1.5 text-[11px] text-slate-400">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1 h-1 rounded-full bg-indigo-500 mr-2 mt-1.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
