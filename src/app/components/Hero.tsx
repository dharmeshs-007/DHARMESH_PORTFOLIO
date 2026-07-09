"use client";

import React from "react";
import { Sparkles, ChevronRight, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolio";

interface HeroProps {
  scrollTo: (id: string) => void;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center items-start relative pt-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 blur-[130px] opacity-25 -z-10 animate-pulse-slow" />
      
      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border border-white/10 mb-6 text-xs text-indigo-300">
        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
        <span>{PERSONAL_INFO.title} | {PERSONAL_INFO.status}</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
        Hi, I am <br className="sm:hidden" />
        <span className="text-gradient-accent">{PERSONAL_INFO.name}</span>
      </h1>

      <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium max-w-3xl leading-relaxed mb-8">
        I engineer <span className="text-indigo-400 font-semibold">dynamic interfaces</span> and high-performance frontend solutions, delivering software from design to production.
      </h2>

      <p className="text-base text-slate-400 max-w-2xl leading-relaxed mb-10">
        {PERSONAL_INFO.summary}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
        <button 
          onClick={() => scrollTo("projects")}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white font-medium shadow-2xl flex items-center justify-center space-x-2 group transition-all"
        >
          <span>Explore My Work</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => scrollTo("contact")}
          className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium flex items-center justify-center space-x-2 transition-all"
        >
          <span>Get In Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Social Icons & Direct Info */}
      <div className="flex flex-wrap items-center gap-6 mt-16 text-slate-400 text-sm">
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="flex items-center space-x-2 hover:text-white transition-colors py-1"
        >
          <Mail className="w-4 h-4 text-indigo-400" />
          <span>{PERSONAL_INFO.email}</span>
        </a>
        <a 
          href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`} 
          className="flex items-center space-x-2 hover:text-white transition-colors py-1"
        >
          <Phone className="w-4 h-4 text-purple-400" />
          <span>{PERSONAL_INFO.phone}</span>
        </a>
        <span className="flex items-center space-x-2 py-1">
          <MapPin className="w-4 h-4 text-pink-400" />
          <span>{PERSONAL_INFO.location}</span>
        </span>
        <a 
          href={PERSONAL_INFO.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 hover:text-white transition-colors py-1 border border-white/10 rounded-full px-3.5 py-1.5 bg-white/5"
        >
          <GithubIcon className="w-4 h-4 text-slate-300" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}
