import { UserInfo as SysUserInfo } from "os";
import { UserInfo } from "@/types/user";

const detailedSkills = [
  { name: "TypeScript", category: "Languages", featured: true },
  { name: "Python", category: "Languages", featured: true },
  { name: "JavaScript", category: "Languages", featured: false },

  { name: "Express.js", category: "Backend", featured: true, marqueeOrder: 1 },
  { name: "FastAPI", category: "Backend", featured: true, marqueeOrder: 3 },
  { name: "Django", category: "Backend", featured: true, marqueeOrder: 5 },
  { name: "Node.js", category: "Backend", featured: true },

  { name: "React.js", category: "Frontend", featured: true, marqueeOrder: 0 },
  { name: "Next.js", category: "Frontend", featured: true, marqueeOrder: 4 },
  { name: "Tailwindcss", category: "Frontend", featured: false },
  { name: "HTML/CSS", category: "Frontend", featured: false },

  { name: "MongoDB", category: "Databases", featured: false },
  { name: "PostgreSQL", category: "Databases", featured: false },
  { name: "Redis", category: "Databases", featured: false },
  { name: "MySQL", category: "Databases", featured: false },
  { name: "SQLite3 ", category: "Databases", featured: false },

  { name: "Docker", category: "Infrastructure", featured: false },
  { name: "Azure", category: "Infrastructure", featured: false },
  { name: "AWS", category: "Infrastructure", featured: false },
  { name: "Vercel", category: "Infrastructure", featured: false },
  { name: "CI/CD", category: "Infrastructure", featured: false },

  { name: "WebSockets", category: "Real-time & Web3", featured: false },
  { name: "Turnkey", category: "Real-time & Web3", featured: false },
  { name: "Polymarket", category: "Real-time & Web3", featured: false },
  { name: "Solana", category: "Real-time & Web3", featured: false },

  { name: "SPFx", category: "Enterprise", featured: true, marqueeOrder: 2 },
  { name: "SharePoint", category: "Enterprise", featured: false },

  { name: "Git", category: "Tools", featured: false },
  { name: "OpenCV", category: "Tools", featured: false },
  { name: "GitHub Actions", category: "Tools", featured: false },
];

const workExperience = [
  {
    isCurrent: true,
    company: "Homepage",
    location: "Dublin (Remote)",
    role: "Software Engineer",
    startDate: "Sep 2025",
    endDate: "Present",
    responsibilities: [
      "Build and maintain the core front-end modules of the trading and prediction market platforms using Next.js, including responsive visualizations for real-time data and integrations with Turnkey and Polymarket.",
      "Implement the back-end order execution service for the prediction market platform using Express.js, implementing trading automation and integrating with Polymarket.",
      "Architect the front-end and back-end services with a focus on performance and reliability.",
    ],
  },
  {
    isCurrent: true,
    company: "Lotus Beta Analytics",
    location: "Lagos (Hybrid)",
    role: "Full-Stack Developer / Technical Lead",
    startDate: "May 2021",
    endDate: "Sep 2025",
    responsibilities: [
      "Built and maintained full-stack applications and SharePoint solutions using Python, TypeScript, JavaScript and SPFx",
      "Optimized database driven applications and process automation solutions, reducing application response times to 1 - 3 seconds.",
      "Led architecture decisions, mentored team members and provided technical guidance throughout the project life cycle.",
    ],
  },
];

// const projects_partial = [
//   {
//     title: "Prysm.Trade",
//     role: "Full-Stack Developer",
//     description: `
//     A crypto trading and prediction market platform, with real-time data visualization and analysis tools, enabling secure and automated transactions.
//     Integrating with Turnkey and Polymarket SDKs and APIs for real-time data, secure key management, transactions and authentication.`,
//     technologies: [
//       "TypeScript",
//       "Next.js",
//       "Express.js",
//       "Core SDKs and APIs (Turnkey & Polymarket)",
//       "WebSockets",
//       "PostgreSQL",
//       "MongoDB",
//       "Redis",
//       "Docker",
//     ],
//     responsibilities: [
//       "Led the architecture and development of the Next.js frontend with low-latency updates and dynamic data visualization as a priority",
//       "Contributed to the architecture and development of backend services, secure integration with the core APIs  and SDKs, data streaming with WebSockets and caching using Redis for reduced latency.",
//     ],
//   },
//   {
//     title: "E-Test",
//     role: "Full-Stack Developer",
//     description: `
//     A secure, scalable electronic examination platform with in-depth customization, real-time grading and reporting capabilities.
//     Designed to handle 2000+ concurrent users reliably while adhering to complex business rules.`,
//     technologies: [
//       "TypeScript",
//       "React.js",
//       "Express.js",
//       "SPFx (SharePoint Framework)",
//       "Core APIs (HCM)",
//       "Sharepoint",
//       "MongoDB",
//       "Docker",
//       "Github Actions",
//       "Azure",
//     ],
//     responsibilities: [
//       "Architected and developed the application with security and scalability as priorities and with cheating mitigation strategies and real-time grading implemented",
//       "Integrated with the client's HCM system for user management and Sharepoint for additional structured data and file storage",
//       "Built a user testing module and an admin module for test and test taker management with automated onboarding for test takers and test scheduling.",
//       "Deployed and maintained the application on Sharepoint and Azure with CI/CD using Github Actions.",
//     ],
//   },
//   {
//     title: "Attendance Management",
//     role: "Backend Developer / Technical Lead",
//     description: `
//     Enterprise attendance management application with facial recognition, location tracking, qr code scanning and enterprise authentication for efficient tracking.
//     With detailed reporting and analytics features, it provides actionable insights into attendance patterns and trends.`,
//     technologies: [
//       "Python",
//       "FastAPI",
//       "TypeScript",
//       "React.js",
//       "OpenCV (Facial Recognition)",
//       "MongoDB",
//       "Docker",
//       "Github Actions",
//       "Azure",
//     ],
//     responsibilities: [
//       "Built the application backend, using FastAPI and MongoDB, to reliably handle 10k+ attendance entries daily while leading the frontend development in React.",
//       "Implemented facial recognition using OpenCV, location tracking and QR code scanning options to speed up the attendance process and improve accuracy.",
//       "Deployed the application on Azure using Docker as part of the Github Actions CI/CD workflow.",
//     ],
//   },
// ];

const projects = [
  {
    title: "Prysm.Trade",
    role: "Full-Stack Developer",
    description: `
    Crypto trading and prediction market platform with real-time data visualization and secure transaction handling. 
    Integrates Turnkey and Polymarket APIs for live data, authentication, and key management.`,
    technologies: [
      "TypeScript",
      "Next.js",
      "Express.js",
      "Turnkey",
      "Polymarket",
      "PostgreSQL",
      "WebSockets",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    responsibilities: [
      "Built the front-end to handle live market and wallet data for tokens on the Solana chain.",
      "Implemented secure authentication, key management and transaction signing using Turnkey.",
      "Led development of the -Next.js front-end for real-time trading dashboards with fast and responsive data updates",
      "Built and improved backend services using Express.js, including WebSocket data streaming and Redis caching to reduce latency",
    ],
  },
  {
    title: "E-Test",
    role: "Full-Stack Developer",
    description: `
    Electronic testing platform with real-time grading, flexible test setup, and anti-cheating features. 
    Designed to support 2,000+ concurrent users reliably.`,
    technologies: [
      "TypeScript",
      "React.js",
      "Express.js",
      "SPFx",
      "HCM APIs",
      "SharePoint",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Azure",
    ],
    responsibilities: [
      "Designed and built a full-stack system with real-time grading and anti-cheating features",
      "Integrated HCM APIs for user management and SharePoint for data and file storage",
      "Automated the user onboarding, grading, batching and test scheduling processes, a previously multi-week process",
      "Deployed and maintained the application on Azure with CI/CD using GitHub Actions",
    ],
  },
  {
    title: "Attendance MGT",
    role: "Backend Developer / Technical Lead",
    description: `
    Attendance tracking system with facial recognition, QR code scanning, and location-based check-ins. 
    Includes reporting tools for tracking attendance trends.`,
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React.js",
      "OpenCV",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Azure",
    ],
    responsibilities: [
      "Built a FastAPI backend handling 10k+ daily attendance records reliably",
      "Automated the attendance tracking process, reducing the time taken from approximately 3 minutes to under 10 seconds.",
      "Implemented geofencing and facial recognition to prevent false attendance records.",
      "Deployed the system on Azure using Docker and automated CI/CD with GitHub Actions",
    ],
  },
];

const contactInfo = {
  Email: "judeakinwale@gmail.com",
  GitHub: "https://github.com/judeakinwale",
  LinkedIn: "https://www.linkedin.com/in/jude-akinwale-0/",
  Twitter: "#",
  Phone: "tel:+2349064430102",
  Whatsapp: "https://wa.me/+2349064430102",
};

export const userInfo: UserInfo = {
  name: "Jude Akinwale",
  title: "Software Engineer / Tech Lead",
  email: "judeakinwale@gmail.com",
  description: "",
  detailedDescription: "",
  yearsOfExperience: "05",
  experienceDescription: "05+ years of production experience",
  skills: detailedSkills,
  workExperience: workExperience,
  projects: projects,
  contactInfo: contactInfo,
};
