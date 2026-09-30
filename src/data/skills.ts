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
    id: "data-engineering",
    category: "Data Engineering & Platforms",
    badge: "Core Specialization",
    description: "Enterprise-grade data platform engineering with Lakehouse architectures, data pipelines, warehouse modeling, and batch/stream processing systems.",
    skills: [
      { name: "SQL & Advanced Querying", focus: "Window functions, CTEs, query optimization & indexing", highlight: true },
      { name: "Data Engineering", focus: "ETL/ELT, pipeline lifecycle & data governance", highlight: true },
      { name: "Medallion Architecture", focus: "Bronze/Silver/Gold Lakehouse layers on S3-compatible storage", highlight: true },
      { name: "Kimball Dimensional Modeling", focus: "Star/Snowflake schemas, Fact & Dim table design", highlight: true },
      { name: "Apache Airflow", focus: "DAG orchestration, scheduling & pipeline dependencies" },
      { name: "Apache Kafka", focus: "Event streaming, KRaft mode & topic architectures" },
      { name: "PySpark", focus: "Distributed batch processing & large-scale transformations" },
      { name: "Data Pipelines", focus: "Ingestion, staging, transformation & loading logic" },
      { name: "Data Storage", focus: "PostgreSQL, MinIO/S3, Redis caching & warehouse schemas" },
      { name: "Data Processing", focus: "Automated cleaning, structured parsing & contract validation" }
    ]
  },
  {
    id: "analytics-python",
    category: "Programming & Analytics",
    badge: "Technical Foundation",
    description: "Data-centric programming skills with Python for manipulation, scripting, exploratory analysis, and pipeline code authoring.",
    skills: [
      { name: "Python", focus: "Pandas EDA, data scripts, pipeline code & DEPI advanced track", highlight: true },
      { name: "SQL", focus: "Relational querying, schema design & advanced transformations", highlight: true },
      { name: "Exploratory Data Analysis", focus: "Statistical summaries, trend extraction & feature engineering" },
      { name: "Data Visualization", focus: "Matplotlib, insights extraction & data storytelling" },
      { name: "JavaScript", focus: "Modern ES6+, DOM manipulation & dynamic dashboards" },
      { name: "TypeScript", focus: "Type safety, interfaces & scalable frontend code" }
    ]
  },
  {
    id: "ai-problem-solving",
    category: "AI & Engineering Productivity",
    badge: "Accelerator Layer",
    description: "Applying AI as a data engineering accelerator for rapid pipeline design, contract authoring, debugging, and architectural decision support.",
    skills: [
      { name: "AI-Assisted Development", focus: "Rapid tech onboarding & accelerated pipeline coding", highlight: true },
      { name: "Prompt Engineering", focus: "Structured context design & hallucination reduction", highlight: true },
      { name: "AI Data Debugging", focus: "Investigating pipeline failures & log parsing" },
      { name: "Automation Workflows", focus: "End-to-end task automation with AI synthesis" },
      { name: "Problem Decomposition", focus: "Breaking data roadblocks into actionable milestones" },
      { name: "Schema & Contract Design", focus: "AI-aided Pydantic models & JSON Schema drafting" }
    ]
  },
  {
    id: "devops-infra",
    category: "Infrastructure & DevOps for Data",
    badge: "Platform Reliability",
    description: "Containerization, orchestration, observability, and CI/CD tooling tailored for data platform deployments and pipeline reliability.",
    skills: [
      { name: "Docker & Compose", focus: "Containerized data infra: Kafka, MinIO, Postgres, Airflow", highlight: true },
      { name: "Observability Stack", focus: "Prometheus metrics, Grafana dashboards & alerting", highlight: true },
      { name: "GitHub Actions", focus: "CI/CD pipelines, test coverage gates & automated checks" },
      { name: "Linux / Ubuntu", focus: "Command line, packages, bash scripting & environment setup" },
      { name: "PowerShell & CMD", focus: "Windows automation scripts & process orchestration" },
      { name: "Git & GitHub", focus: "Version control, branching & data project repositories" }
    ]
  },
  {
    id: "web-development",
    category: "Web & Data Serving",
    badge: "Presentation Layer",
    description: "Modern web frontends and lightweight serving layers for data dashboards, analytics interfaces, and portfolio projects.",
    skills: [
      { name: "React", focus: "Component architecture, hooks & responsive dashboards", highlight: true },
      { name: "Tailwind CSS", focus: "Utility-first styling & responsive UI for data views" },
      { name: "Vite", focus: "Modern build tooling & dev server workflows" },
      { name: "HTML5 / CSS3", focus: "Semantic structure, layouts & accessibility" }
    ]
  },
  {
    id: "networking-systems",
    category: "Systems & Networking",
    badge: "Foundational Knowledge",
    description: "Core systems knowledge, hardware diagnostics, and computer networking fundamentals that underpin reliable data infrastructure.",
    skills: [
      { name: "Network Fundamentals", focus: "OSI & TCP/IP models, packet routing & addressing" },
      { name: "Protocols & Systems", focus: "HTTP/S, DNS, DHCP, IP addressing & data flows" },
      { name: "Hardware Diagnostics", focus: "CPU, GPU, RAM, SSD/HDD & component health" },
      { name: "Windows Troubleshooting", focus: "SFC, CHKDSK, Disk Management & service repair" },
      { name: "Performance Optimization", focus: "Bottleneck identification & system tuning" }
    ]
  }
];

export const professionalSkills = [
  { name: "Fast Learning", highlight: true, description: "Mastering unfamiliar data tools rapidly and turning concepts into production-ready pipelines." },
  { name: "Problem Solving", highlight: true, description: "Structured analytical debugging of pipeline failures, schema drift, and data quality issues." },
  { name: "Data-Centric Thinking", highlight: true, description: "Designing systems around data contracts, lineage, auditability, and quality gates." },
  { name: "Leadership", highlight: false, description: "Proven as DEPI Team Leader coordinating peers and monitoring data project deliverables." },
  { name: "Teamwork & Collaboration", highlight: false, description: "Active contributor across technical and non-technical teams (GDG)." },
  { name: "Analytical Thinking", highlight: false, description: "Breaking intricate data requirements into systematic pipeline stages." },
  { name: "Technical Thinking", highlight: false, description: "Evaluating architectural tradeoffs for scalable data storage and processing." },
  { name: "Communication", highlight: false, description: "Clear articulation with management, team members, and data stakeholders." },
  { name: "Time Management", highlight: false, description: "Prioritizing tasks and balancing university studies with DEPI professional initiatives." },
  { name: "Working Under Pressure", highlight: false, description: "Maintaining composure, accuracy, and output under tight pipeline deadlines." },
  { name: "Adaptability", highlight: false, description: "Quickly adjusting to emerging data frameworks, storage systems, and workflows." },
  { name: "Self-Driven Learning", highlight: false, description: "Continuous self-guided study through Microsoft Learn, DEPI, and data engineering repositories." },
  { name: "Technical Presentation", highlight: false, description: "Demonstrating data platform solutions and presenting structured analysis reports." }
];
