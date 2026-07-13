export const profile = {
  name: "Mesa Sarah Vasantha Zephyr",
  shortName: "Sarah Zephyr",
  location: "Available worldwide · Remote",
  email: "mesazephyr1516@gmail.com",
  phone: "+91 7207241503",
  github: "https://github.com/mesasarah",
  linkedin: "https://www.linkedin.com/in/sarah15/",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "GenAI Developer",
    "Prompt Engineer",
  ],
  tagline:
    "Software engineer specialising in full-stack, backend and AI/ML systems — I design, build and ship products end-to-end.",
  summary:
    "Software engineer with hands-on experience across full-stack development, backend engineering and applied AI/ML. I enjoy shipping products end-to-end using Python, TypeScript, React, FastAPI, Node and modern ML tooling — turning ideas into deployed systems that serve real users.",
} as const;

export const education = {
  school: "Vellore Institute of Technology, Amaravati",
  degree: "B.Tech in Computer Science Engineering",
  graduation: "Jan 2026",
  cgpa: "7.55",
  coursework: [
    "Data Structures & Algorithms",
    "System Design",
    "Machine Learning",
    "Natural Language Processing",
  ],
} as const;

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  stack: string[];
  description: string;
  highlights: string[];
  tags: string[];
  gradient: string;
  github?: string;
  demo?: string;
  order: number; // for sort by newest
};

export const projects: Project[] = [
  {
    title: "ChessMeet India",
    subtitle: "Live Video Chess Platform",
    period: "May 2026 – Present",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Socket.IO",
      "WebRTC",
      "Express",
      "Prisma",
    ],
    description:
      "Online chess platform with live multiplayer gameplay and peer-to-peer video calling, tailored for the Indian market.",
    highlights: [
      "Legal chess moves, checkmate detection and en passant with real-time sync via Socket.IO",
      "Scalable TypeScript + React 18 + Express architecture designed for future expansion",
      "WebRTC peer-to-peer video communication with safety-first features and dark mode UI",
    ],
    tags: ["Full Stack", "React", "TypeScript"],
    gradient: "from-[#ff4fa3] via-[#ff7ac6] to-[#7a4bff]",
    order: 6,
  },
  {
    title: "Nova",
    subtitle: "AI Companion Platform",
    period: "Jan 2026 – March 2026",
    stack: ["React", "FastAPI", "Python", "Groq API", "Llama 3.3"],
    description:
      "AI companion platform with real-time chat, mood tracking and secure authentication — powered by streaming Llama 3.3 responses.",
    highlights: [
      "Streaming responses via Groq API with personalized conversation state",
      "Interactive ocean-themed React interface with persistent user data",
      "Scalable REST APIs optimized for real-time, low-latency communication",
    ],
    tags: ["AI", "Full Stack", "FastAPI", "Python", "React"],
    gradient: "from-[#ff7ac6] via-[#ff4fa3] to-[#5b8dff]",
    order: 5,
  },
  {
    title: "GraphMind AI",
    subtitle: "Knowledge Graph AI System",
    period: "Jan 2026 – March 2026",
    stack: ["FastAPI", "React.js", "Neo4j", "LLaMA 3", "LangChain"],
    description:
      "Combines knowledge graphs with LLMs for smarter document search, multi-step reasoning and explainable answers.",
    highlights: [
      "Semantic search + graph traversal + multi-step reasoning for complex queries",
      "Embeddings-based retrieval with LLM-powered response generation",
      "REST APIs integrating Neo4j graph data with LangChain LLM pipelines",
    ],
    tags: ["AI", "Machine Learning", "FastAPI", "Python"],
    gradient: "from-[#ff4fa3] via-[#c04bff] to-[#5b8dff]",
    order: 4,
  },
  {
    title: "VisText AI",
    subtitle: "Document Intelligence Platform",
    period: "Feb 2025 – Apr 2025",
    stack: ["FastAPI", "React.js", "PostgreSQL", "Apache Solr", "Neo4j"],
    description:
      "Enterprise document intelligence platform for processing, extraction and semantic search — deployed with Docker and CI/CD.",
    highlights: [
      "Improved document retrieval performance by 70%",
      "Neo4j knowledge graph storage + Solr semantic search",
      "Served 500+ enterprise users with production system optimization",
    ],
    tags: ["AI", "Full Stack", "FastAPI", "Python"],
    gradient: "from-[#ff4fa3] via-[#ff7ac6] to-[#ffb3d9]",
    order: 3,
  },
  {
    title: "DOCBOT",
    subtitle: "RAG-Based Document Intelligence Assistant",
    period: "Sep 2023 – Nov 2023",
    stack: [
      "LangChain",
      "ChromaDB",
      "FastAPI",
      "React",
      "PyPDF2",
      "Tesseract OCR",
    ],
    description:
      "Full-stack RAG assistant helping 100+ users search and understand technical documents — even in air-gapped environments.",
    highlights: [
      "Complete pipeline: PDF → OCR → embeddings → vector retrieval → LLM answer",
      "Boosted OCR accuracy from 60% to 85–90% through preprocessing & chunking",
      "Zero-downtime operation in fully air-gapped, zero-internet environment",
    ],
    tags: ["AI", "Machine Learning", "FastAPI", "Python", "React"],
    gradient: "from-[#c04bff] via-[#ff4fa3] to-[#ff7ac6]",
    order: 2,
  },
];

export const experience = [
  {
    role: "Generative AI Intern",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad",
    period: "Feb 2025 – Apr 2025",
    achievements: [
      "Built AI solutions for document processing, semantic search and knowledge retrieval for enterprise clients",
      "Developed and deployed 6+ production REST APIs with 85%+ test coverage and CI/CD integration",
      "Optimized database performance — 70% retrieval latency reduction across 10,000+ enterprise documents",
      "Integrated Neo4j knowledge graph storage and Apache Solr for advanced semantic search",
      "Worked in Agile / JIRA sprint cycles with peer code reviews",
      "Docker-based deployment across staging-to-production pipelines",
    ],
  },
  {
    role: "Project Intern",
    company: "Defence Research & Development Organisation (DRDO)",
    location: "Hyderabad",
    period: "Sep 2023 – Nov 2023",
    achievements: [
      "Built an offline RAG system for 100+ R&D users to search technical documents without internet",
      "Full pipeline: PDF ingestion → Tesseract OCR → embeddings → ChromaDB → LLM response",
      "Improved OCR accuracy from 60% to 85–90% through preprocessing and chunking",
      "Handled 1–2 GB document collections with efficient retrieval systems",
      "Production deployment in a secure, air-gapped environment with zero downtime",
      "Real-time troubleshooting, performance monitoring and maintenance for critical R&D workflows",
    ],
  },
] as const;

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++", "Bash"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "LangChain",
      "RAG",
      "LLMs",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "Prompt Engineering",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "ChromaDB"],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "Jira"],
  },
  {
    category: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "System Design",
      "Design Patterns",
      "Unit & Integration Testing",
    ],
  },
] as const;

export const certifications = [
  { name: "CS50's Introduction to Computer Science", org: "HarvardX" },
  {
    name: "CS50's Web Programming with Python and JavaScript",
    org: "HarvardX",
  },
  {
    name: "IBM Full Stack Software Developer Professional Certificate",
    org: "IBM",
  },
  { name: "Google Data Analytics Professional Certificate", org: "Google" },
] as const;

export const publications = [
  {
    title: "Research paper — accepted for presentation & publication",
    venue: "37th National Convention of Marine Engineers & National Seminar",
    org: "The Institution of Engineers (India) (IEI), Andhra Pradesh State Centre",
    date: "November 2025",
    note: "Presented work before engineers, researchers and industry professionals at a national-level technical conference.",
  },
] as const;

export const leadership = [
  {
    title: "Meta Hackathon Finalist",
    year: "2026",
    description:
      "Developed and presented a working prototype under tight competition deadlines.",
  },
  {
    title: "Machine Learning Club Manager, VIT-AP",
    year: "2024 – 2025",
    description:
      "Organized 10+ AI/ML workshops and grew club membership by 60%.",
  },
  {
    title: "MATHack 2.0 Finalist",
    year: "2024",
    description:
      "Built an AI-powered NLP solution for talent screening, presented at the Global AI Summit.",
  },
  {
    title: "NASA Space Settlement Contest",
    year: "2017",
    description:
      "Internationally selected project for innovative space colony design.",
  },
] as const;
