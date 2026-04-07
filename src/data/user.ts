import { UserInfo as SysUserInfo } from "os";
import { UserInfo } from "@/types/user";

const detailedSkills = [
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },

  { name: "Express.js", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Django", category: "Backend" },

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "SPFx (SharePoint Framework)", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },

  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "SQLite", category: "Databases" },

  { name: "Docker", category: "Infrastructure" },
  { name: "Azure", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "CI/CD", category: "Infrastructure" },

  { name: "WebSockets", category: "Real-time & Web3" },
  { name: "Turnkey SDK", category: "Real-time & Web3" },
  { name: "Polymarket SDKs", category: "Real-time & Web3" },
  { name: "Polymarket CLOB API", category: "Real-time & Web3" },
  { name: "Solana", category: "Real-time & Web3" },

  { name: "SharePoint", category: "Enterprise" },

  { name: "Git", category: "Tools" },
  { name: "OpenCV", category: "Tools" },
  { name: "GitHub Actions", category: "Tools" },
];

const workExperience = [
  {
    isCurrent: true,
    company: "Homepage",
    location: "Dublin (Remote)",
    role: "Senior Software Engineer",
    startDate: "Sep 2025",
    endDate: "Present",
    responsibilities: [
      "Develop and maintain crypto trading and prediction market platforms, building core systems for order execution, order books, and wallet management.",
      "Implement real-time market, token, and wallet data streaming with live updates and notifications using WebSockets.",
      "Build responsive frontend components and data visualizations to support dynamic trading interfaces and improve user decision-making.",
      "Integrate Web3 and trading infrastructure (e.g. Turnkey, Polymarket, Solana, decentralized exchanges) to enable market data retrieval, transaction processing, and automated trading workflows.",
      "Implement secure authentication and wallet infrastructure, including transaction signing and secure key management using the Turnkey SDK.",
      // "Develop and maintain crypto trading and prediction market platforms ensuring high availability and low latency.",
      // "Architect secure backends using Next.js, Express.js, TypeScript, PostgreSQL and MongoDB.",
      // "Integrate complex Web3 SDKs including Turnkey and Polymarket as well as the Polymarket CLOB APIs.",
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
      "Built and maintained full-stack applications using React, Next.js, Express.js, FastAPI, Django and SPFx (SharePoint Framework), delivering production systems and automation solutions",
      "Designed and implemented REST APIs with clear documentation using Postman, Swagger, and ReDoc",
      "Developed database-driven applications using PostgreSQL, MongoDB, MySQL, and SQLite with focus on performance and reliability",
      "Set up CI/CD pipelines and DevOps workflows using Docker, GitHub Actions, and Azure DevOps to improve deployment speed and consistency",
      "Led architecture decisions, mentored team members, and integrated cloud services (Azure, AWS) to deliver scalable enterprise solutions",
      // "Spearheaded the development of robust full-stack enterprise applications and automated workflows using React, Node, and Python.",
      // "Mentored junior developers, introduced Agile practices, and significantly improved code quality across the team.",
      // "Implemented tailored enterprise solutions utilizing SharePoint and React SPFx.",
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
      "Turnkey & Polymarket APIs",
      "WebSockets",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    responsibilities: [
      "Led development of the Next.js frontend for real-time trading dashboards with fast and responsive data updates",
      "Built and improved backend services using Express.js, including WebSocket data streaming and Redis caching to reduce latency",
    ],
  },
  {
    title: "E-Test",
    role: "Full-Stack Developer",
    description: `
    Electronic testing platform with real-time grading, flexible test setup, and reporting. 
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
      "Developed admin and test-taking modules, including onboarding, scheduling, and test management",
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
      "Implemented facial recognition with OpenCV, along with QR code and location-based check-ins to improve accuracy",
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
  description:
    "High-performance real-time systems. Crypto trading platforms. Enterprise applications. I build robust backends and dynamic frontends that don't compromise on speed or bold aesthetics.",
  detailedDescription: "",
  yearsOfExperience: "05",
  experienceDescription: "05+ years of production experience",
  skills: detailedSkills,
  workExperience: workExperience,
  projects: projects,
  contactInfo: contactInfo,
};
