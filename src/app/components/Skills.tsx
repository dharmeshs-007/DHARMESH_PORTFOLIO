"use client";

import React from "react";
import { Cpu, Code2, Layers, Database, Settings } from "lucide-react";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  const getIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      "Frameworks & Libraries": <Cpu className="w-4 h-4 text-indigo-400" />,
      "Languages": <Code2 className="w-4 h-4 text-purple-400" />,
      "Styling & UI/UX": <Layers className="w-4 h-4 text-pink-400" />,
      "State & Data Management": <Database className="w-4 h-4 text-emerald-400" />,
      "Tools & DevOps": <Settings className="w-4 h-4 text-cyan-400" />
    };
    return icons[category] || <Settings className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="mb-8">
        <span className="text-xs text-indigo-400 tracking-widest uppercase">Expertise</span>
        <h2 className="text-3xl font-extrabold">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((grp, idx) => (
          <div key={idx} className="glass-card p-5 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/5">{getIcon(grp.category)}</span>
                <h3 className="font-bold text-sm text-white">{grp.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {grp.items.map((skill) => (
                  <span key={skill} className="text-[10px] font-medium px-2.5 py-1.5 rounded-lg bg-[#09061c] border border-white/5 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
