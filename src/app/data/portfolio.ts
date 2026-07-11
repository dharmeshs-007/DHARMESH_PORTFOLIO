// Portfolio Data matching the latest PDF resume

export const PERSONAL_INFO = {
  name: "Dharmesh Singh",
  title: "Frontend Developer",
  email: "dharmeshfeb25@gmail.com",
  phone: "+91-8266804691",
  location: "Delhi, India 110092",
  github: "https://github.com",
  summary: "Frontend Developer with hands-on production experience building scalable, user-centric web applications serving 10,000+ active users. Experienced in developing production-ready frontend applications, integrating REST APIs, and delivering scalable solutions for fundraising platforms, AI-driven applications, and real-time bidding systems. Strong expertise in React.js, Next.js, Vue.js, TypeScript, reusable UI components, API integration, responsive web design, and Server-Side Rendering (SSR)."
};

export const EXPERIENCE = [
  {
    company: "Molitics",
    website: "https://molitics.in",
    role: "Frontend Developer",
    period: "June 2024 – Present",
    projects: [
      {
        id: "fundraise",
        title: "Fundraise Platform",
        tech: ["Vue.js", "Next.js", "Tailwind CSS", "REST APIs"],
        details: [
          "Developed a responsive 4-stage Fundraise Platform using Vue.js, Next.js, Tailwind CSS, and REST APIs, supporting 10,000+ active users."
        ]
      },
      {
        id: "yara",
        title: "Yara AI",
        tech: ["AI Workflows", "REST APIs", "Component Design"],
        details: [
          "Built responsive frontend modules for Yara AI by integrating AI-driven workflows, REST APIs, and reusable UI components."
        ]
      },
      {
        id: "mstore",
        title: "M Store",
        tech: ["Vue.js", "REST APIs", "WebSockets"],
        details: [
          "Designed and developed the frontend for the M Store application using Vue.js, REST APIs, WebSockets, and reusable UI components, enabling a seamless real-time bidding experience."
        ]
      },
      {
        id: "refactoring",
        title: "Legacy Refactoring",
        tech: ["Optimization", "Scalability", "Component Design"],
        details: [
          "Refactored legacy frontend code into reusable, modular UI components, improving maintainability, scalability, and frontend performance."
        ]
      }
    ]
  }
];

export const PROJECTS = [
  {
    title: "Molitics Platform Migration",
    tech: ["Next.js", "Redux Toolkit", "REST API", "SSR"],
    description: "Migrated legacy codebases to Next.js SSR architecture and optimized global state management.",
    bullets: [
      "Migrated a legacy frontend application to Next.js using Server-Side Rendering (SSR) and Redux Toolkit for scalable state management.",
      "Developed an API-driven social feed featuring posts, likes, comments, follow/unfollow, and trending functionality using Redux Toolkit and REST APIs.",
      "Developed an AI-powered leader comparison feature enabling side-by-side profile analysis using dynamic API data."
    ]
  },
  {
    title: "IPL Stats Tracker",
    tech: ["HTML5", "CSS3", "JavaScript", "Client-Side Search"],
    description: "Sports tracking web application featuring high-speed global text indexing and filtering.",
    bullets: [
      "Developed a responsive IPL statistics application with client-side search, filtering, and optimized rendering using JavaScript.",
      "Structured the application for seamless migration from static JSON data to live REST API integration."
    ]
  }
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "HTML5", "CSS3"]
  },
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL"]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Responsive Design", "Mobile-First Design", "Cross-Browser Compatibility"]
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "Context API"]
  },
  {
    category: "Performance",
    items: ["Server-Side Rendering (SSR)", "Lazy Loading", "Code Splitting"]
  },
  {
    category: "API & Networking",
    items: ["REST APIs", "API Integration", "Axios", "WebSockets"]
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Vercel", "Webpack", "Vite", "Chrome DevTools"]
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science (M.Sc.) in Computer Science",
    school: "Chinmaya Degree College",
    year: "2020 – 2022"
  },
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science",
    school: "Chinmaya Degree College",
    year: "2017 – 2020"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    school: "UBTER University",
    year: "2013 – 2016"
  }
];
