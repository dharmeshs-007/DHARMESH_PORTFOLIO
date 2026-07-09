"use client";

import React from "react";
import { Cpu, Code2, Layers, Database, Settings } from "lucide-react";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Frameworks":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Languages":
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case "Styling":
        return <Layers className="w-5 h-5 text-pink-400" />;
      case "State & Data":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Tools & OS":
      default:
        return <Settings className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-[130px] -z-10 animate-pulse" />
      
      <div className="flex flex-col mb-12">
        <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2">Expertise</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technical Toolbelt</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <div 
            key={idx} 
            className="glass-card p-6 border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="p-2.5 rounded-xl bg-white/5 border border-white/5 shadow-inner">
                  {getIcon(skillGroup.category)}
                </span>
                <h3 className="font-bold text-lg text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium px-3.5 py-2 rounded-xl bg-[#09061c] hover:bg-indigo-600/10 border border-white/5 hover:border-indigo-500/30 text-slate-300 hover:text-indigo-300 transition-all cursor-default"
                  >
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
