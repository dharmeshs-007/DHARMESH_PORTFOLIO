"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && msg) {
      setDone(true);
      setTimeout(() => { setDone(false); setName(""); setEmail(""); setMsg(""); }, 4000);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <span className="text-xs text-indigo-400 tracking-widest uppercase">Connect</span>
        <h2 className="text-2xl font-extrabold">Let&apos;s Connect</h2>
      </div>

      <div className="glass-card p-5 border border-white/5">
        {done ? (
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-2 animate-fade-in">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            <h3 className="font-bold text-sm text-white">Sent!</h3>
            <p className="text-xs text-slate-400">Thanks for reaching out. I will reply soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full text-xs bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500" placeholder="Name" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-xs bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500" placeholder="Email" />
            </div>
            <textarea required rows={3} value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full text-xs bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 resize-none" placeholder="Message" />
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center space-x-1.5">
              <span>Send</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
