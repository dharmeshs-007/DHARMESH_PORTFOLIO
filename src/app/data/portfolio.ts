// Portfolio Data matching the latest uploaded PDF resume

export const PERSONAL_INFO = {
  name: "Dharmesh Singh",
  title: "Frontend Developer",
  email: "dharmeshfeb25@gmail.com",
  phone: "+91-8266804691",
  location: "Delhi, India 110092",
  github: "https://github.com",
  summary: "Performance-driven Frontend Developer with production experience designing, building, and deploying scalable, user-centric web applications serving 10,000+ active users. Proven track record managing full product lifecycles—from initial architecture to production deployment—including a 4-stage fundraising platform, an AI-driven political tool, and a live-bidding application. Deep technical expertise in Vue.js, Nuxt.js, Next.js, React, and TypeScript."
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
        tech: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Redux"],
        details: [
          "Engineered a 4-stage multi-step Fundraise Platform using Vue.js, Nuxt.js, and Tailwind CSS; implemented real-time state tracking and optimized async data queries to seamlessly scale for 10,000+ active users."
        ]
      },
      {
        id: "yara",
        title: "Yara AI",
        tech: ["Vue.js", "Nuxt.js", "AI Integration", "Tailwind CSS"],
        details: [
          "Spearheaded the frontend development of Yara AI, deploying custom prompt workflows and automated content streams that decreased manual content moderation cycles by 40%."
        ]
      },
      {
        id: "mstore",
        title: "M Store",
        tech: ["Vue.js", "Nuxt.js", "WebSockets", "Tailwind CSS"],
        details: [
          "Designed and launched the M Store application featuring live bidding architecture; integrated WebSocket-driven data synchronization to maintain sub-second latency for over 500+ concurrent bidders."
        ]
      },
      {
        id: "refactoring",
        title: "Legacy Refactoring",
        tech: ["Vue.js", "Optimization", "Component Design"],
        details: [
          "Refactored legacy code into reusable, modular UI components, accelerating frontend rendering performance benchmarks by 25% and establishing team-wide coding standards."
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
      "Migrated a legacy codebase to a modern Next.js architecture utilizing Server-Side Rendering (SSR) and configured Redux Toolkit to optimize global data persistence.",
      "Developed an API-driven, interactive homepage with real-time social metrics (likes, trends, follows), accelerating initial content load speeds and LCP by 30%.",
      "Built a dynamic AI-powered analysis module, enabling users to generate side-by-side profile comparisons with real-time analytics."
    ]
  },
  {
    title: "Molitics Next.js Dashboard",
    tech: ["Next.js", "Redux Toolkit", "REST API", "SSR"],
    description: "Developed modern frontend layouts, home feeds with social triggers, and leader comparisons.",
    bullets: [
      "Developed a modern frontend layout using Next.js with Redux Toolkit, creating reusable Redux slices and scalable state management.",
      "Built an API-driven Home Feed with posts, like/dislike, comments, trending feed, follow/unfollow functionality, and leader profile pages.",
      "Developed an AI-powered Leader Comparison feature for comparing political leaders through AI-generated insights.",
      "Created reusable, responsive components and optimized API integration for a fast, maintainable, and production-ready user experience."
    ]
  },
  {
    title: "IPL Stats Tracker",
    tech: ["HTML5", "CSS3", "JavaScript", "Client-Side Search"],
    description: "Sports tracking web application featuring high-speed global text indexing and filtering.",
    bullets: [
      "Created a high-speed sports tracking web application featuring sub-second global text indexing and custom multi-attribute filtering logic.",
      "Designed an abstract state management layer allowing for immediate data swap transitions when switching from local mock arrays to live API streaming feeds."
    ]
  }
];

export const SKILLS = [
  {
    category: "Frameworks & Libraries",
    items: ["Vue.js", "Nuxt.js", "Next.js", "React.js", "Node.js"]
  },
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Styling & UI/UX",
    items: ["Tailwind CSS", "Material UI", "Responsive Design", "Mobile-First Architecture", "Cross-Browser Compatibility"]
  },
  {
    category: "State & Data Management",
    items: ["Redux Toolkit", "Pinia", "Context API", "RESTful APIs", "GraphQL", "Axios", "Async Data Fetching"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Vercel", "Webpack", "Vite", "CI/CD Pipelines", "Jest", "Chrome DevTools"]
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
