"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection, scrollTo }: { activeSection: string; scrollTo: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const sections = ["home", "experience", "projects", "skills", "education", "contact"];

  return (
    <header className="sticky top-4 z-50 mt-4 mx-auto w-full max-w-5xl rounded-full glass-card border border-white/10 px-6 py-3.5 flex items-center justify-between shadow-2xl">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollTo("home")}>
        <span className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-pulse" />
        <span className="font-bold tracking-wider text-gradient">DHARMESH.</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`text-xs capitalize transition-colors py-1 ${activeSection === s ? "text-indigo-400 font-semibold" : "text-slate-400 hover:text-white"}`}
          >
            {s}
          </button>
        ))}
      </nav>

      <button onClick={() => scrollTo("contact")} className="hidden md:block px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        Hire Me
      </button>

      <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white">
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {open && (
        <div className="md:hidden absolute inset-x-4 top-16 z-50 glass-card p-4 flex flex-col space-y-2 border border-white/10 shadow-2xl">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => { scrollTo(s); setOpen(false); }}
              className={`text-left text-sm py-2 border-b border-white/5 ${activeSection === s ? "text-indigo-400 font-semibold" : "text-slate-300"}`}
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}