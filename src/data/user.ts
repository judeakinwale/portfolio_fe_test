import { UserInfo as SysUserInfo } from "os";
import { UserInfo } from "@/types/user";
import React from "react";

const detailedSkills = [
  { name: "TypeScript", category: "Languages", featured: true },
  { name: "Python", category: "Languages", featured: true },
  { name: "JavaScript", category: "Languages", featured: false },

  { name: "React.js", category: "Frontend", featured: true, marqueeOrder: 4 },
  { name: "Next.js", category: "Frontend", featured: true, marqueeOrder: 1 },
  { name: "Tailwindcss", category: "Frontend", featured: false },
  { name: "HTML/CSS", category: "Frontend", featured: false },

  { name: "Node.js", category: "Backend", featured: true, marqueeOrder: 2 },
  { name: "Express.js", category: "Backend", featured: true, marqueeOrder: 5 },
  { name: "Nest.js", category: "Backend", featured: false },
  { name: "FastAPI", category: "Backend", featured: true, marqueeOrder: 3 },
  { name: "Django", category: "Backend", featured: false },

  { name: "MongoDB", category: "Databases", featured: true },
  { name: "PostgreSQL", category: "Databases", featured: true },
  { name: "Redis", category: "Databases", featured: false },
  { name: "Qdrant", category: "Databases", featured: false },
  // { name: "MySQL", category: "Databases", featured: false },
  // { name: "SQLite3 ", category: "Databases", featured: false },

  {
    name: "WebSockets",
    category: "Real-time",
    featured: false,
    marqueeOrder: 6,
  },
  { name: "Kafka", category: "Real-time", featured: true }, // , marqueeOrder: 996
  { name: "Redis Streams", category: "Real-time", featured: false },

  { name: "OpenAI API", category: "AI", featured: true, marqueeOrder: 995 },
  {
    name: "Azure AI Foundry",
    category: "AI",
    featured: false,
  },
  { name: "Azure Speech Services", category: "AI", featured: true },
  { name: "GitHub Copilot", category: "AI", featured: false },
  { name: "Cursor", category: "AI", featured: false },
  { name: "Codex", category: "AI", featured: false },

  { name: "Turnkey", category: "Web3", featured: false, marqueeOrder: 7 },
  { name: "Polymarket", category: "Web3", featured: true },
  { name: "Solana", category: "Web3", featured: false },

  { name: "Docker", category: "Infrastructure", featured: true },
  { name: "Azure", category: "Infrastructure", featured: true },
  { name: "AWS", category: "Infrastructure", featured: false },
  { name: "Vercel", category: "Infrastructure", featured: false },
  { name: "CI/CD", category: "Infrastructure", featured: false },

  { name: "SPFx", category: "Enterprise", featured: true, marqueeOrder: 99 },
  { name: "SharePoint", category: "Enterprise", featured: false },

  { name: "Git", category: "Tools", featured: true },
  { name: "OpenCV", category: "Tools", featured: false },
  { name: "GitHub Actions", category: "Tools", featured: true },
];

const workExperience = [
  {
    index: 1,
    isCurrent: true,
    company: "Homepage",
    location: "Dublin (Remote)",
    role: "Senior Software Engineer",
    startDate: "Sep 2025",
    endDate: "Present",
    responsibilities: [
      "Build and maintain the core front-end modules of the trading and prediction market platforms using Next.js, including responsive visualizations for real-time data and integrations with Turnkey and Polymarket.",
      "Implement the back-end order execution service for the prediction market platform using Express.js, implementing trading automation and integrating with Polymarket.",
      "Architect the front-end and back-end services with a focus on performance and reliability.",
    ],
    isActive: true,
  },
  {
    index: 2,
    isCurrent: false,
    company: "Lotus Beta Analytics",
    location: "Lagos (Hybrid)",
    role: "Full-Stack Developer / Technical Lead",
    startDate: "May 2021",
    endDate: "Sep 2025",
    responsibilities: [
      "Built and maintained applications and SharePoint solutions using Python, TypeScript, JavaScript and SPFx",
      "Optimized database driven applications and process automation solutions, reducing application response times to 1 - 3 seconds.",
      "Led architecture decisions, mentored team members and provided technical guidance throughout the project life cycle.",
    ],
    isActive: true,
  },
  {
    index: 3,
    isCurrent: false,
    company: "TekkSoftware",
    location: "Lagos (Hybrid)",
    role: "Python Developer",
    startDate: "Mar 2019",
    endDate: "Apr 2021",
    responsibilities: [
      "Built and maintained web application backends using Python and Django with Django Rest Framework for REST API",
      "Created backend services for event management and hotel reservation systems, integrating payment processing while contributing on the front-end.",
      "Participated in system architecture design and review, working closely with cross-functional teams",
    ],
    isActive: true,
  },
  {
    index: 4,
    isCurrent: false,
    company: "FoodBank",
    location: "Lagos (Hybrid)",
    role: "Wordpress Developer",
    startDate: "Sep 2018",
    endDate: "Jan 2019",
    responsibilities: [
      // "Built and maintained WordPress websites and plugins using PHP, JavaScript, and various WordPress APIs.",
      "Built the MVP for FoodBank, an affordable food distribution platform.",
      "Modified custom themes and templates, optimizing for performance and SEO.",
      "Participated in hackathons, community events and investor meetings.",
    ],
    isActive: true,
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
    index: 1,
    title: "DMS with RAG",
    role: "Lead Developer",
    description: `
    Enterprise Document management system (DMS) including retrieval-augmented generation (RAG) capabilities with semantic search and vector indexing to deliver fast, accurate answers from thousands of documents.
    Integrates with Sharepoint and other storage solutions.`,
    technologies: [
      // "Python",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "Qdrant",
      "OpenAI API",
      "Docker",
      "Kafka",
      "SharePoint",
      // "SharePoint Document Library",
      "Microservices",
      "Redis",
      "Azure VM",
    ],
    responsibilities: [
      "Architected and developed a scalable RAG workflow using microservices architecture for document ingestion, indexing, processing and retrieval.",
      "Built a DMS for SharePoint Document Libraries, with AI-powered chat for document search and answering questions.",
      "Implemented semantic search and vector indexing using Qdrant for accurate document retrieval.",
      "Optimized the RAG workflow with asynchronous events using Kafka, caching using Redis and parallel processing using asyncio in Python.",
    ],
    isActive: true,
  },
  {
    index: 2,
    title: "Prysm.Trade",
    role: "Full-Stack Developer",
    description: `
    Crypto trading and prediction market platform with real-time data visualization and secure transaction handling. 
    Integrates Turnkey and Polymarket APIs for live data, authentication, and key management.`,
    technologies: [
      // "TypeScript",
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
      "Led development of the Next.js front-end for real-time trading dashboards with fast and responsive data updates",
      "Built and improved backend services using Express.js, including WebSocket data streaming and Redis caching to reduce latency",
    ],
    isActive: true,
  },
  {
    index: 3,
    title: "Lulu Africa",
    role: "Technical Lead",
    description: `
    A mobile-first language learning platform for African languages, with chat based learning, test generation and grading, speech to text (STT) and text to speech (TTS) capabilities.
    Integrating Open AI Models, Azure AI Foundry and Azure Speech Services for AI powered features.`,
    technologies: [
      // "TypeScript",
      "React Native",
      "Express.js",
      "React.js",
      "Open AI API",
      "Azure AI Foundry",
      "Azure Speech Services",
      "MongoDB",
      // "Docker",
      "GitHub Actions",
      "Azure",
    ],
    responsibilities: [
      "Led the architecture and development a mobile-first language learning platform using React Native, React.js and Express.js, with conversational learning features.",
      "Implemented conversational learning, test generation and grading, progress tracking, speech transcription and text-to-speech capabilities for interactive learning, using AI..",
      "Trained a custom AI speech model for the Yoruba language, using Azure speech services, improving pronunciation and transcription accuracy.",
      "Implemented structured AI responses for progression tracking and test generation, text streaming for near instant chat responses and managed token costs by summarizing chat history and context ",
      "Deployed and maintained the application on Azure with CI/CD using GitHub Actions and on Expo",
    ],
    isActive: true,
  },
  {
    index: 4,
    title: "E-Test",
    role: "Full-Stack Developer",
    description: `
    Electronic testing platform with real-time grading, flexible test setup, and anti-cheating features. 
    Designed to support 2,000+ concurrent users reliably.`,
    technologies: [
      // "TypeScript",
      "React.js",
      "Express.js",
      "SPFx",
      "HCM APIs",
      "SharePoint",
      "MongoDB",
      "Docker",
      // "GitHub Actions",
      "Azure",
    ],
    responsibilities: [
      "Designed and built a full-stack system with real-time grading and anti-cheating features",
      "Integrated HCM APIs for user management and SharePoint for data and file storage",
      "Automated the user onboarding, grading, batching and test scheduling processes, a previously multi-week process",
      "Deployed and maintained the application on Azure with CI/CD using GitHub Actions",
    ],
    isActive: true,
  },
  {
    index: 5,
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
    isActive: true,
  },
];

const contactInfo = {
  Email: "judeakinwale@gmail.com",
  GitHub: "https://github.com/judeakinwale",
  LinkedIn: "https://www.linkedin.com/in/jude-akinwale-0/",
  Twitter: "#",
  Phone: "tel:+2349064430102",
  Whatsapp: "https://wa.me/+2349064430102",
  Resume: "#",
};

export const userInfo: UserInfo = {
  name: "Jude Akinwale",
  firstName: "Jude",
  lastName: "Akinwale",
  initial: "O.",
  title: "Software Engineer / Tech Lead",
  email: "judeakinwale@gmail.com",
  description: `
  I build high performance real-time systems for the web. 
  Perfecting process automation and enterprise applications.
  `,
  detailedDescription: `
    <p>
      I am a&nbsp;
      <strong class="text-accent font-bold">
        Senior Software Engineer and Technical Lead
      </strong>
      &nbsp; with 7+ years of professional experience building production full-stack
      web applications. My passion lies in developing data-heavy real-time
      platforms, process automation systems as well as responsive and aesthetic web
      applications.
      <!-- , including systems for crypto
      trading, prediction markets, and auction bidding. -->
    </p>
    <p>
      I excel at technical leadership, mentoring teams, and applying critical
      thinking to architecture design and development. My goal is to always deliver
      scalable and secure applications.
    </p>
  `,
  yearsOfExperience: "07+",
  experienceDescription: "07+ years of production experience",
  skills: detailedSkills,
  workExperience: workExperience,
  projects: projects,
  contactInfo: contactInfo,
};
