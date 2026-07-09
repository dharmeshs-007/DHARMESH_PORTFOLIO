// Simplified Portfolio Data

export const PERSONAL_INFO = {
  name: "Dharmesh Singh",
  title: "Frontend Developer",
  email: "dharmeshfeb25@gmail.com",
  phone: "+91-8266804691",
  location: "Delhi, India",
  github: "https://github.com",
  summary: "Frontend Developer with hands-on production experience building scalable, user-facing web applications serving 1k-10k+ users. Strong command of Vue.js, Nuxt.js, Next.js, and Tailwind CSS."
};

export const EXPERIENCE = [
  {
    company: "Molitics",
    website: "https://molitics.in",
    role: "Frontend Developer",
    period: "Jan 2025 – Present",
    projects: [
      {
        id: "fundraise",
        title: "Fundraise Platform",
        tech: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
        details: [
          "Built a robust 4-stage multi-step donation flow with real-time progress tracking.",
          "Implemented donor-receiver transparency and transaction history logs.",
          "Designed a dynamic social proof panel displaying recent donations in real-time."
        ]
      },
      {
        id: "yara",
        title: "Yara AI Assistant",
        tech: ["Vue.js", "Nuxt.js", "AI Integration"],
        details: [
          "Engineered custom prompt logic for a political content assistant.",
          "Created role-based response moderation and automated feed-post summarization."
        ]
      },
      {
        id: "mstore",
        title: "M Store Platform",
        tech: ["Vue.js", "Nuxt.js", "WebSockets"],
        details: [
          "Designed a dual-purchase experience with direct buy and live-bidding.",
          "Created a real-time competitive bidding popup mechanism with WebSocket support."
        ]
      }
    ]
  }
];

export const PROJECTS = [
  {
    title: "Molitics Dashboard",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    description: "Political analytics dashboard tracking Lok Sabha 2024 seat distribution, voter turnout, and party performance.",
    bullets: [
      "Zero-dependency animated bar charts and searchable party table.",
      "Sentiment donut chart and native CSS light/dark mode."
    ],
    interactiveType: "dashboard"
  },
  {
    title: "IPL Stats Tracker",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    description: "Dark-themed IPL 2024 season tracker featuring points table, player leaderboards, and search.",
    bullets: [
      "Clean, responsive card UI styled purely with vanilla CSS variables.",
      "Orange & Purple Cap leaderboard with searchable filter fields."
    ],
    interactiveType: "ipl"
  }
];

export const SKILLS = [
  { category: "Frameworks", items: ["Vue.js", "Nuxt.js", "Next.js"] },
  { category: "Languages", items: ["JavaScript", "TypeScript", "HTML5", "CSS3"] },
  { category: "Styling", items: ["Tailwind CSS", "Responsive Design"] },
  { category: "State & Data", items: ["Redux", "REST API", "GraphQL", "WebSockets"] },
  { category: "Tools", items: ["Git", "GitHub", "Vercel", "VS Code"] }
];

export const EDUCATION = [
  { degree: "MSc, CS", school: "Chinmaya Degree College", year: "2020 – 2022" },
  { degree: "BSc, CS", school: "Chinmaya Degree College", year: "2017 – 2020" },
  { degree: "Dip. Mech Engg", school: "UBTER University", year: "2013 – 2016" },
  { degree: "Class XII", school: "Vidhay Mandir School", year: "2012 – 2013" }
];
