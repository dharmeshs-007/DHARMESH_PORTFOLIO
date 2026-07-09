"use client";

import { useEffect, useState } from "react";

const navItems = [
  "home",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({
  activeSection,
  scrollTo,
}: NavbarProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current <= 50) {
        setVisible(true);
      } else {
        setVisible(current < lastScroll);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
      w-[95%] max-w-6xl transition-all duration-300
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-4 shadow-xl">

        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-wide text-white"
        >
          DHARMESH SINGH<span className="text-indigo-500">.</span>
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`capitalize text-sm transition-colors ${
                activeSection === item
                  ? "text-indigo-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}