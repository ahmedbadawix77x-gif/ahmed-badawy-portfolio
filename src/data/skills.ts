export interface SkillGroup {
  id: string;
  category: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    focus?: string;
    highlight?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    category: "Programming Languages",
    badge: "Core Foundations",
    description: "Solid foundational programming skills with emphasis on data manipulation, scripting, and web logic.",
    skills: [
      { name: "Python", focus: "Data scripting, algorithms & DEPI advanced track", highlight: true },
      { name: "SQL", focus: "Relational querying, schema design & transformations", highlight: true },
      { name: "JavaScript", focus: "Modern ES6+, DOM manipulation & dynamic apps" },
      { name: "TypeScript", focus: "Type safety, interfaces & scalable frontend code" },
      { name: "HTML5", focus: "Semantic structure & accessibility" },
      { name: "CSS3", focus: "Modern layouts, Flexbox, Grid & animations" }
    ]
  },
  {
    id: "data-engineering",
    category: "Data & Pipelines",
    badge: "Specialized Track",
    description: "Active development track in data architecture, querying, transformation pipelines, and analytical processing.",
    skills: [
      { name: "SQL Querying", focus: "Joins, aggregations, subqueries & optimization", highlight: true },
      { name: "Data Engineering", focus: "Pipeline lifecycle, ETL patterns & processing", highlight: true },
      { name: "Data Analytics", focus: "Exploratory data analysis & metrics extraction" },
      { name: "Data Pipelines", focus: "Ingestion, staging & transformation logic" },
      { name: "Data Storage", focus: "Relational database structures & storage schemas" },
      { name: "Data Processing", focus: "Automated cleaning & structured parsing" }
    ]
  },
  {
    id: "ai-problem-solving",
    category: "AI & Problem Solving",
    badge: "Productivity Multiplier",
    description: "Applying AI as an engineering accelerator for rapid learning, script authoring, debugging, and solution design.",
    skills: [
      { name: "AI-Assisted Development", focus: "Rapid technology onboarding & accelerated coding", highlight: true },
      { name: "Prompt Engineering", focus: "Structured context design & hallucination reduction", highlight: true },
      { name: "AI Assistants", focus: "Domain knowledge retrieval & conversational UX" },
      { name: "Automation Workflows", focus: "End-to-end task automation with AI synthesis" },
      { name: "AI Debugging & Analysis", focus: "Investigating complex errors & log parsing" },
      { name: "Problem Decomposition", focus: "Breaking complex roadblocks into actionable milestones" }
    ]
  },
  {
    id: "web-development",
    category: "Web Development",
    badge: "Full-Stack Web",
    description: "Building responsive, modern, user-centric web applications and portals.",
    skills: [
      { name: "React", focus: "Component architecture, hooks & responsive states", highlight: true },
      { name: "Django", focus: "Backend framework, models & server logic" },
      { name: "Tailwind CSS", focus: "Utility-first modern styling & responsiveness" },
      { name: "Vite", focus: "Modern build tooling & dev server workflows" }
    ]
  },
  {
    id: "systems-troubleshooting",
    category: "Systems & Troubleshooting",
    badge: "Hardware & OS Diagnostics",
    description: "Hands-on diagnostic and automation capabilities across Windows, Linux, and hardware components.",
    skills: [
      { name: "PowerShell & CMD", focus: "System automation scripts & process orchestration", highlight: true },
      { name: "Linux / Ubuntu", focus: "Command line navigation, packages & basic environment", highlight: true },
      { name: "Windows Troubleshooting", focus: "SFC, CHKDSK, Disk Management & service repair" },
      { name: "Hardware Diagnostics", focus: "CPU, GPU, RAM, SSD/HDD & component health" },
      { name: "Git & GitHub", focus: "Version control, branching & project repositories" },
      { name: "Performance Optimization", focus: "Bottleneck identification & system tuning" }
    ]
  },
  {
    id: "networking",
    category: "Computer Networking",
    badge: "Core Knowledge",
    description: "Sound foundational understanding of computer networks, protocols, architectures, and data transmission.",
    skills: [
      { name: "Network Fundamentals", focus: "OSI & TCP/IP models, packet routing & addressing" },
      { name: "Protocols & Systems", focus: "HTTP/S, DNS, DHCP, IP addressing & client-server flows" },
      { name: "Academic Coursework", focus: "Advanced Computer Networks (Benha University)" }
    ]
  }
];

export const professionalSkills = [
  { name: "Fast Learning", highlight: true, description: "Mastering unfamiliar tools rapidly and turning concepts into working software." },
  { name: "Problem Solving", highlight: true, description: "Structured analytical debugging and practical solution execution." },
  { name: "Leadership", highlight: false, description: "Proven as DEPI Team Leader coordinating peers and monitoring deliverables." },
  { name: "Teamwork & Collaboration", highlight: false, description: "Active contributor across technical and non-technical teams (GDG)." },
  { name: "Analytical Thinking", highlight: false, description: "Breaking down intricate requirements into systematic steps." },
  { name: "Technical Thinking", highlight: false, description: "Evaluating architectural tradeoffs and designing resilient systems." },
  { name: "Communication", highlight: false, description: "Clear articulation with management, team members, and stakeholders." },
  { name: "Time Management", highlight: false, description: "Prioritizing tasks and balancing university studies with professional initiatives." },
  { name: "Working Under Pressure", highlight: false, description: "Maintaining composure, accuracy, and output under tight deadlines." },
  { name: "Adaptability", highlight: false, description: "Quickly adjusting to emerging frameworks, requirements, and workflows." },
  { name: "Self-Driven Learning", highlight: false, description: "Continuous self-guided study through industry courses and repositories." },
  { name: "Technical Presentation", highlight: false, description: "Demonstrating project solutions and presenting structured reports." }
];
