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
    <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-4 md:px-8 py-3 md:py-4 shadow-xl">

  {/* Logo */}
  <button
    onClick={() => scrollTo("home")}
    className="shrink-0 whitespace-nowrap text-sm md:text-xl font-bold tracking-wide text-white"
  >
    DHARMESH SINGH<span className="text-indigo-500">.</span>
  </button>

  {/* Navigation */}
  <nav className="flex-1 overflow-x-auto scrollbar-hide">
    <div className="flex items-center gap-5 md:gap-8 w-max mx-auto">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => scrollTo(item)}
          className={`shrink-0 capitalize text-xs md:text-sm transition-colors ${
            activeSection === item
              ? "text-indigo-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </nav>

  {/* CTA */}
  <button
    onClick={() => scrollTo("contact")}
    className="hidden md:block rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-500"
  >
    Hire Me
  </button>
</div>
  );
}