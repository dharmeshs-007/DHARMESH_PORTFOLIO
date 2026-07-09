"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail && contactMessage) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      }, 5000);
    }
  };

  return (
    <div id="contact" className="scroll-mt-24">
      <div className="flex flex-col mb-10">
        <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2">Connect</span>
        <h2 className="text-3xl font-extrabold tracking-tight">Let&apos;s Build Something</h2>
      </div>

      <div className="glass-card p-6 sm:p-8 border border-white/5">
        {formSubmitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
            <div className="p-3.5 rounded-full bg-emerald-500/15 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl text-white">Message Sent Successfully!</h3>
            <p className="text-sm text-slate-400 max-w-sm">
              Thank you for reaching out, Dharmesh. I will review your message and reply as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="Discussing a project, role, or opportunity..."
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
