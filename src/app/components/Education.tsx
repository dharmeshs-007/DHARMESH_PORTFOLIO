"use client";

import React from "react";
import { EDUCATION } from "../data/portfolio";

export default function Education() {
  return (
    <div>
      <div className="mb-8">
        <span className="text-xs text-indigo-400 tracking-widest uppercase">Credentials</span>
        <h2 className="text-3xl font-extrabold">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="glass-card p-6 border border-white/5 relative flex flex-col justify-between hover:border-indigo-500/20 transition-all">
            <div className="absolute top-0 left-0 h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div>
              <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                {edu.year}
              </span>
              <h3 className="font-bold text-base text-slate-100 mt-3">{edu.degree}</h3>
              <p className="text-xs text-slate-400 mt-1">{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
