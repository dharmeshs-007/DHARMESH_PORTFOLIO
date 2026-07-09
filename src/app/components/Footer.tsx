"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-16 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs gap-4">
      <div>
        <span>© {new Date().getFullYear()} Dharmesh Singh. All Rights Reserved.</span>
      </div>
      <div className="flex items-center space-x-1">
        <span>Crafted with passion using Next.js & Tailwind CSS.</span>
      </div>
    </footer>
  );
}
