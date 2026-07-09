"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  const [activeExpProject, setActiveExpProject] = useState("fundraise");

  return (
    <section id="experience" className="relative scroll-mt-24">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-[120px] -z-10" />
      
      <div className="flex flex-col mb-12">
        <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2">Timeline</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Professional Journey</h2>
      </div>

      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="glass-card p-6 sm:p-10 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-[3px] w-32 bg-gradient-to-r from-indigo-500 to-purple-500" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                {exp.role} 
                <span className="text-sm font-normal text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  Full-time
                </span>
              </h3>
              <div className="flex items-center space-x-2.5 text-slate-400 mt-2">
                <span className="font-semibold text-lg hover:text-indigo-400 transition-colors">
                  {exp.company}
                </span>
                <span>•</span>
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs flex items-center gap-1 text-slate-400 hover:text-white underline decoration-indigo-500 decoration-2 underline-offset-4"
                >
                  {exp.website.replace("https://", "")} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="text-slate-400 font-medium lg:text-right">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm">
                {exp.period}
              </span>
            </div>
          </div>

          {/* Sub-projects Showcase Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tabs */}
            <div className="lg:col-span-1 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-4">
              {exp.projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveExpProject(proj.id)}
                  className={`text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap lg:whitespace-normal w-full flex items-center justify-between ${
                    activeExpProject === proj.id 
                      ? "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 text-indigo-300 font-bold" 
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{proj.title}</span>
                  <ChevronRight className={`w-4 h-4 hidden lg:block transition-transform ${activeExpProject === proj.id ? "translate-x-1 text-indigo-400" : "text-slate-600"}`} />
                </button>
              ))}
            </div>

            {/* Tab content panel */}
            <div className="lg:col-span-3 min-h-[300px] flex flex-col justify-between">
              {exp.projects.map((proj) => {
                if (proj.id !== activeExpProject) return null;
                return (
                  <div key={proj.id} className="space-y-6 animate-fade-in">
                    <div>
                      <h4 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                        <span>Key Development:</span>
                        <span className="text-gradient-accent">{proj.title}</span>
                      </h4>
                      
                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {proj.tech.map((t, index) => (
                          <span key={index} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {proj.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-slate-300 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mr-3 mt-1" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-white/5">
                      <span className="text-xs text-slate-500">
                        Deployed and monitored dynamically within the Molitics ecosystem.
                      </span>
                    </div>
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
