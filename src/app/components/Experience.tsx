"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  const [active, setActive] = useState("fundraise");

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mb-8">
        <span className="text-xs text-indigo-400 tracking-widest uppercase">Timeline</span>
        <h2 className="text-3xl font-extrabold">Experience</h2>
      </div>

      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="glass-card p-6 sm:p-8 border border-white/5 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between border-b border-white/10 pb-4 mb-6 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {exp.role}
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full">Full-time</span>
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {exp.company} • <a href={exp.website} target="_blank" rel="noopener" className="underline hover:text-white inline-flex items-center gap-0.5">{exp.website.replace("https://", "")} <ExternalLink className="w-3 h-3" /></a>
              </p>
            </div>
            <span className="text-xs text-slate-400 self-start sm:self-center">{exp.period}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0">
              {exp.projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap md:w-full ${active === p.id ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" : "text-slate-400 hover:text-white"}`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            <div className="md:col-span-3 min-h-[160px] flex flex-col justify-between">
              {exp.projects.map((p) => {
                if (p.id !== active) return null;
                return (
                  <div key={p.id} className="space-y-4 animate-fade-in">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300">{t}</span>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {p.details.map((d, i) => (
                        <li key={i} className="flex items-start text-slate-300 text-xs leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mr-2 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
