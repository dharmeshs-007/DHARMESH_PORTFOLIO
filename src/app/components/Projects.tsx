"use client";

import React, { useState } from "react";
import { Sparkles, X, TrendingUp, Search, Award } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  const [selectedDemoProject, setSelectedDemoProject] = useState<string | null>(null);

  // Dashboard Demo State
  const [dashboardSearch, setDashboardSearch] = useState("");
  const [dashboardPhase, setDashboardPhase] = useState("Phase 3");
  const [dashboardVoterTurnout, setDashboardVoterTurnout] = useState(66.7);
  const partiesData = [
    { name: "BJP", seats: 240, change: "+37" },
    { name: "INC", seats: 99, change: "+47" },
    { name: "SP", seats: 37, change: "+32" },
    { name: "TMC", seats: 29, change: "+7" },
    { name: "DMK", seats: 22, change: "-2" },
  ];

  // IPL Demo State
  const [iplTab, setIplTab] = useState<"points" | "orange" | "purple">("points");
  const [iplSearch, setIplSearch] = useState("");
  const iplPointsTable = [
    { team: "KKR", matches: 14, points: 20, nrr: "+1.428" },
    { team: "SRH", matches: 14, points: 17, nrr: "+0.414" },
    { team: "RR", matches: 14, points: 17, nrr: "+0.273" },
    { team: "RCB", matches: 14, points: 14, nrr: "+0.459" },
    { team: "CSK", matches: 14, points: 14, nrr: "+0.428" },
  ];
  const orangeCap = [
    { name: "Virat Kohli", team: "RCB", runs: 741, strikeRate: 154.7 },
    { name: "Ruturaj Gaikwad", team: "CSK", runs: 583, strikeRate: 141.2 },
    { name: "Travis Head", team: "SRH", runs: 567, strikeRate: 191.6 },
    { name: "Riyan Parag", team: "RR", runs: 573, strikeRate: 149.2 },
  ];
  const purpleCap = [
    { name: "Harshal Patel", team: "PBKS", wickets: 24, economy: 9.73 },
    { name: "Varun Chakaravarthy", team: "KKR", wickets: 21, economy: 8.04 },
    { name: "Jasprit Bumrah", team: "MI", wickets: 20, economy: 6.48 },
    { name: "Tushar Deshpande", team: "CSK", wickets: 17, economy: 8.83 },
  ];

  const handleOpenDemo = (type: string) => {
    setSelectedDemoProject(type);
    setTimeout(() => {
      const el = document.getElementById("interactive-demo-container");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="projects" className="relative scroll-mt-24">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-pink-500/10 blur-[130px] -z-10" />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2">Featured Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Personal & Core Projects</h2>
        </div>
        <p className="text-slate-400 text-sm max-w-sm">
          Click &apos;Interactive Demo&apos; on any project to load and play with a live simulated dashboard right here in the page.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden group/card"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover/card:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                    {project.tech[0]}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {project.bullets.map((b, index) => (
                  <li key={index} className="flex items-start text-xs text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mr-2.5 mt-2" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(1).map((t, index) => (
                  <span key={index} className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => handleOpenDemo(project.interactiveType)}
                className="px-4 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hover:text-white flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>Interactive Demo</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Demo Display Panel */}
      {selectedDemoProject && (
        <div id="interactive-demo-container" className="mt-12 glass-card p-6 sm:p-8 border border-indigo-500/20 relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 p-4">
            <button 
              onClick={() => setSelectedDemoProject(null)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/5 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Demo 1: Molitics Analytics Dashboard */}
          {selectedDemoProject === "dashboard" && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400"><TrendingUp className="w-5 h-5" /></span>
                <div>
                  <h3 className="font-bold text-lg text-white">Live Simulation: Molitics Dashboard</h3>
                  <p className="text-xs text-indigo-400">Zero dependencies, responsive stats tracking</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Controls */}
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col space-y-4">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Dashboard Controls</h4>
                  
                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Select Election Phase</label>
                    <select 
                      value={dashboardPhase}
                      onChange={(e) => {
                        setDashboardPhase(e.target.value);
                        const turnouts: Record<string, number> = { "Phase 1": 66.1, "Phase 2": 66.7, "Phase 3": 65.6, "Phase 4": 69.1, "Phase 5": 62.2 };
                        setDashboardVoterTurnout(turnouts[e.target.value] || 64.0);
                      }}
                      className="w-full text-xs bg-[#0b0b18] border border-white/10 rounded-lg p-2.5 text-white focus:outline-none focus:border-indigo-500"
                    >
                      {["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5"].map((ph) => (
                        <option key={ph} value={ph}>{ph}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Voter Turnout Rate: {dashboardVoterTurnout}%</label>
                    <input 
                      type="range" 
                      min="50" 
                      max="90" 
                      step="0.1" 
                      value={dashboardVoterTurnout}
                      onChange={(e) => setDashboardVoterTurnout(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-[#0b0b18] rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#0b0b18] border border-white/5">
                    <span className="text-[10px] text-slate-400">Search Filter:</span>
                    <input 
                      type="text"
                      placeholder="Search Party..."
                      value={dashboardSearch}
                      onChange={(e) => setDashboardSearch(e.target.value)}
                      className="text-xs bg-transparent text-right border-none focus:outline-none w-28 text-white"
                    />
                  </div>
                </div>

                {/* Chart / Visualization */}
                <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-4">
                    <span className="text-xs font-semibold text-slate-200">Seat Share Distribution ({dashboardPhase})</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Turnout: {dashboardVoterTurnout}%</span>
                  </div>

                  {/* Animated Bars */}
                  <div className="space-y-3.5">
                    {partiesData
                      .filter(p => p.name.toLowerCase().includes(dashboardSearch.toLowerCase()))
                      .map((p, idx) => {
                        const percent = (p.seats / 543) * 100;
                        const barColor = p.name === "BJP" ? "bg-orange-500" : p.name === "INC" ? "bg-blue-500" : p.name === "SP" ? "bg-green-500" : p.name === "TMC" ? "bg-emerald-500" : "bg-purple-500";
                        return (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center justify-between text-xs text-slate-300">
                              <span className="font-semibold">{p.name} <span className="text-[10px] text-slate-500">({p.change})</span></span>
                              <span className="font-mono">{p.seats} / 543 seats</span>
                            </div>
                            <div className="h-3 w-full bg-[#0b0b18] rounded-full overflow-hidden border border-white/5">
                              <div 
                                className={`h-full ${barColor} rounded-full transition-all duration-700 ease-out`}
                                style={{ width: `${percent}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className="flex items-center justify-between mt-4 text-[10px] text-slate-500 border-t border-white/5 pt-2">
                    <span>Total Majority Line: 272</span>
                    <span>Responsive Native CSS Rendering</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Demo 2: IPL Stats Tracker */}
          {selectedDemoProject === "ipl" && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 rounded-lg bg-pink-500/10 text-pink-400"><Award className="w-5 h-5" /></span>
                <div>
                  <h3 className="font-bold text-lg text-white">Live Simulation: IPL Season Tracker</h3>
                  <p className="text-xs text-pink-400">Dark-themed statistics dashboard layout</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex space-x-2 border-b border-white/10 pb-3 mb-4">
                {["points", "orange", "purple"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setIplTab(tab as "points" | "orange" | "purple");
                      setIplSearch("");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      iplTab === tab 
                        ? "bg-pink-500/20 text-pink-300 border border-pink-500/30" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab === "points" ? "Points Table" : tab === "orange" ? "Orange Cap" : "Purple Cap"}
                  </button>
                ))}
                <div className="flex-1 flex justify-end">
                  <div className="relative max-w-xs w-full">
                    <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-500" />
                    <input 
                      type="text"
                      placeholder="Search Filter..."
                      value={iplSearch}
                      onChange={(e) => setIplSearch(e.target.value)}
                      className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-[#0b0b18] border border-white/10 rounded-lg focus:outline-none text-white focus:border-pink-500"
                    />
                  </div>
                </div>
              </div>

              {/* Table Content */}
              <div className="overflow-x-auto bg-[#0b0b18] border border-white/5 rounded-xl">
                
                {iplTab === "points" && (
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/15 bg-white/5 text-slate-300 font-semibold">
                        <th className="p-3">Rank</th>
                        <th className="p-3">Team</th>
                        <th className="p-3 text-center">Played</th>
                        <th className="p-3 text-center">Points</th>
                        <th className="p-3 text-right">Net Run Rate (NRR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {iplPointsTable
                        .filter(t => t.team.toLowerCase().includes(iplSearch.toLowerCase()))
                        .map((t, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-3 font-semibold text-slate-400">{idx + 1}</td>
                            <td className="p-3 font-bold text-white">{t.team}</td>
                            <td className="p-3 text-center">{t.matches}</td>
                            <td className="p-3 text-center text-pink-400 font-bold">{t.points}</td>
                            <td className="p-3 text-right font-mono text-slate-400">{t.nrr}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}

                {iplTab === "orange" && (
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/15 bg-white/5 text-slate-300 font-semibold">
                        <th className="p-3">Player</th>
                        <th className="p-3">Team</th>
                        <th className="p-3 text-center">Runs</th>
                        <th className="p-3 text-right">Strike Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {orangeCap
                        .filter(p => p.name.toLowerCase().includes(iplSearch.toLowerCase()) || p.team.toLowerCase().includes(iplSearch.toLowerCase()))
                        .map((p, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-3 font-bold text-white flex items-center gap-2">
                              {idx === 0 && <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />}
                              {p.name}
                            </td>
                            <td className="p-3 text-slate-400">{p.team}</td>
                            <td className="p-3 text-center text-pink-400 font-bold">{p.runs}</td>
                            <td className="p-3 text-right font-mono text-slate-400">{p.strikeRate}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}

                {iplTab === "purple" && (
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-white/15 bg-white/5 text-slate-300 font-semibold">
                        <th className="p-3">Player</th>
                        <th className="p-3">Team</th>
                        <th className="p-3 text-center">Wickets</th>
                        <th className="p-3 text-right">Economy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-300">
                      {purpleCap
                        .filter(p => p.name.toLowerCase().includes(iplSearch.toLowerCase()) || p.team.toLowerCase().includes(iplSearch.toLowerCase()))
                        .map((p, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors">
                            <td className="p-3 font-bold text-white flex items-center gap-2">
                              {idx === 0 && <span className="h-2.5 w-2.5 rounded-full bg-violet-500 animate-pulse" />}
                              {p.name}
                            </td>
                            <td className="p-3 text-slate-400">{p.team}</td>
                            <td className="p-3 text-center text-pink-400 font-bold">{p.wickets}</td>
                            <td className="p-3 text-right font-mono text-slate-400">{p.economy}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
