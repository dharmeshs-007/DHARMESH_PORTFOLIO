"use client";

import React from "react";
import { EDUCATION } from "../data/portfolio";

export default function Education() {
  return (
    <div>
      <div className="flex flex-col mb-10">
        <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2">Credentials</span>
        <h2 className="text-3xl font-extrabold tracking-tight">Education</h2>
      </div>

      <div className="space-y-6 relative border-l border-white/10 pl-6 ml-2">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline point */}
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-indigo-500 border border-[#030014] group-hover:bg-pink-500 transition-colors" />
            
            <span className="text-[10px] font-semibold text-indigo-400 tracking-wider bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
              {edu.year}
            </span>
            <h3 className="font-bold text-base text-slate-100 mt-2">
              {edu.degree}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {edu.school}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
