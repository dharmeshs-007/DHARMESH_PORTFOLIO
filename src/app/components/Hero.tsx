"use client";

import React from "react";
import { Sparkles, ChevronRight, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolio";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <section id="home" className="min-h-[60vh] flex flex-col justify-center items-start pt-6">
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-card border border-white/10 mb-4 text-xs text-indigo-300">
        <Sparkles className="w-3 h-3 animate-spin" />
        <span>{PERSONAL_INFO.title}</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
        Hi, I am <span className="text-gradient-accent">{PERSONAL_INFO.name}</span>
      </h1>

      <p className="text-base text-slate-300 max-w-2xl leading-relaxed mb-8">
        {PERSONAL_INFO.summary}
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <button onClick={() => scrollTo("projects")} className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-sm font-medium flex items-center space-x-1">
          <span>View Projects</span>
          <ChevronRight className="w-4 h-4" />
        </button>
        <a href="/Dharmesh_Singh.pdf" target="_blank" rel="noopener noreferrer" download="Dharmesh_Singh_Resume.pdf" className="px-6 py-3 rounded-full border border-indigo-500/30 hover:border-indigo-500 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-sm font-medium flex items-center space-x-1.5 transition-all">
          <span>Download CV</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
        <button onClick={() => scrollTo("contact")} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium flex items-center space-x-1">
          <span>Contact</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-4 text-slate-400 text-xs">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center space-x-1.5 hover:text-white"><Mail className="w-3.5 h-3.5 text-indigo-400" /><span>{PERSONAL_INFO.email}</span></a>
        <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-white"><Phone className="w-3.5 h-3.5 text-purple-400" /><span>{PERSONAL_INFO.phone}</span></a>
        <span className="flex items-center space-x-1.5"><MapPin className="w-3.5 h-3.5 text-pink-400" /><span>{PERSONAL_INFO.location}</span></span>
        {/* <a href={PERSONAL_INFO.github} target="_blank" rel="noopener" className="flex items-center space-x-1.5 hover:text-white"><GithubIcon className="w-3.5 h-3.5 text-slate-300" /><span>GitHub</span></a> */}
      </div>
    </section>
  );
}
