// Portfolio Data for Dharmesh Singh

export interface ExperienceProject {
  id: string;
  title: string;
  tech: string[];
  details: string[];
}

export interface ExperienceItem {
  company: string;
  website: string;
  role: string;
  period: string;
  projects: ExperienceProject[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string;
  bullets: string[];
  interactiveType: "dashboard" | "ipl";
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "Dharmesh Singh",
  title: "Frontend Developer",
  email: "dharmeshfeb25@gmail.com",
  phone: "+91-8266804691",
  location: "Delhi, India",
  github: "https://github.com",
  status: "Open to Work",
  summary: "Frontend Developer with hands-on production experience building scalable, user-facing web applications serving 1,000–10,000+ users. Delivered a 4-stage fundraising platform, an AI-powered political content tool, and a live-bidding merchandise platform — all from design to deployment. Strong command of Vue.js, Nuxt.js, Next.js, and Tailwind CSS with a focus on clean code, mobile-first design, and real-time API integration."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Molitics",
    website: "https://molitics.in",
    role: "Frontend Developer",
    period: "Jan 2025 – Present",
    projects: [
      {
        id: "fundraise",
        title: "Fundraise Platform",
        tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API", "Redux"],
        details: [
          "Built a robust 4-stage multi-step donation flow with intuitive progress tracking and instant validation.",
          "Implemented a donor-receiver transparency module and detailed transaction history logs for high security and trust.",
          "Designed a dynamic social proof panel displaying recent donations in real-time, boosting user engagement.",
          "Successfully deployed and optimized the platform to support 1k–10k active concurrent users."
        ]
      },
      {
        id: "yara",
        title: "Yara AI Assistant",
        tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "AI Integration", "Prompt Engineering"],
        details: [
          "Engineered custom prompt logic for a political content assistant designed for regional content optimization.",
          "Created role-based response moderation dashboards to ensure content compliance.",
          "Built automated feed-post summarizers that reduced manual review efforts by editor teams."
        ]
      },
      {
        id: "mstore",
        title: "M Store Platform",
        tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "WebSockets", "State Management"],
        details: [
          "Designed a dual-purchase merchandise experience integrating direct buy checkout and a live-bidding system.",
          "Created a real-time competitive bidding popup mechanism with WebSocket support for instant price refreshes.",
          "Enabled smooth bidding on exclusive political items, maintaining zero latency under heavy loads."
        ]
      }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Molitics Dashboard",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    description: "Political analytics dashboard tracking Lok Sabha 2024 seat distribution, phase-wise voter turnout, and party performance for 10 major parties.",
    bullets: [
      "Zero-dependency animated bar charts representing vote shares dynamically.",
      "Fully responsive and searchable party-wise results table.",
      "Sentiment analysis donut chart with smooth color transition and layout controls.",
      "Light and dark mode support built natively with CSS custom properties."
    ],
    interactiveType: "dashboard"
  },
  {
    title: "IPL Stats Tracker",
    tech: ["HTML5", "CSS3", "Vanilla JS", "REST API Integration"],
    description: "Dark-themed IPL 2024 season tracker featuring points table, player leaderboards (Orange/Purple Cap), and live search functionalities.",
    bullets: [
      "Clean, modern card UI styled purely with native layout techniques and vanilla CSS variables.",
      "Orange & Purple Cap leaderboard with searchable filter fields.",
      "Structured data modularity prepared for direct Cricbuzz/ESPN feed integration."
    ],
    interactiveType: "ipl"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frameworks",
    items: ["Vue.js", "Nuxt.js", "Next.js"]
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Responsive Design", "Mobile-first"]
  },
  {
    category: "State & Data",
    items: ["Redux", "REST API Integration", "GraphQL", "WebSockets"]
  },
  {
    category: "Tools & OS",
    items: ["Git", "GitHub", "Vercel", "VS Code", "MacOS"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MSc, Computer Science",
    school: "Chinmaya Degree College",
    year: "2020 – 2022"
  },
  {
    degree: "BSc, Computer Science",
    school: "Chinmaya Degree College",
    year: "2017 – 2020"
  },
  {
    degree: "Diploma, Mechanical Engineering",
    school: "UBTER University",
    year: "2013 – 2016"
  },
  {
    degree: "Class XII",
    school: "Vidhay Mandir Senior Secondary School",
    year: "2012 – 2013"
  }
];
