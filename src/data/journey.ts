import { JourneyStep, LearningItem } from '../types';

export const dataEngineeringJourney: JourneyStep[] = [
  {
    id: "step-1-sql",
    stepNumber: 1,
    title: "SQL & Relational Foundations",
    subtitle: "Core database modeling and querying skills",
    description: "Mastered fundamental to intermediate SQL concepts including CRUD operations, multi-table joins, aggregations, indexing, and normalized database schema design.",
    status: "Completed",
    focusTopics: ["Relational Schema Design", "Complex Joins & Subqueries", "Aggregations & Grouping", "Database Normalization"],
    icon: "Database"
  },
  {
    id: "step-2-python",
    stepNumber: 2,
    title: "Python for Data & Scripting",
    subtitle: "Programming and data-focused development",
    description: "Developed robust scripting foundations in Python, emphasizing automated data transformations, file parsing, object-oriented structuring, and algorithmic logic.",
    status: "Completed",
    focusTopics: ["Data Manipulation", "Scripting Automation", "OOP Architecture", "File I/O & Parsing"],
    icon: "Code"
  },
  {
    id: "step-3-advanced-sql",
    stepNumber: 3,
    title: "Advanced SQL & Query Optimization",
    subtitle: "Current learning track through DEPI",
    description: "Deepening SQL expertise through advanced window functions, common table expressions (CTEs), execution plan analysis, and query performance tuning.",
    status: "Currently Learning",
    focusTopics: ["Window Functions", "CTEs & Recursive Queries", "Query Execution Plans", "Indexing Strategies"],
    icon: "Zap"
  },
  {
    id: "step-4-data-analytics",
    stepNumber: 4,
    title: "Data Analytics & Insight Extraction",
    subtitle: "Understanding and working with structured data",
    description: "Analyzing relational datasets, engineering features, identifying trends, and creating structured metrics for business intelligence and reporting.",
    status: "Currently Learning",
    focusTopics: ["Exploratory Data Analysis", "Aggregation Pipelines", "Metric Definition", "Data Validation"],
    icon: "BarChart3"
  },
  {
    id: "step-5-data-engineering",
    stepNumber: 5,
    title: "Data Engineering & Pipelines",
    subtitle: "Pipelines, processing, storage, and architecture",
    description: "Building automated ETL/ELT pipelines, data staging architectures, robust error handling mechanisms, and scalable relational data warehouses.",
    status: "Currently Learning",
    focusTopics: ["ETL/ELT Pipeline Design", "Data Cleansing & Staging", "Storage Architectures", "Pipeline Resilience"],
    icon: "GitBranch"
  },
  {
    id: "step-6-cloud",
    stepNumber: 6,
    title: "Cloud Data Infrastructure",
    subtitle: "Current direction and target infrastructure",
    description: "Studying cloud data architectures, managed database instances, cloud storage buckets, and scalable compute services.",
    status: "Next Direction",
    focusTopics: ["Cloud Storage & Warehouses", "Managed Databases", "Serverless Functions", "Cloud Security"],
    icon: "Cloud"
  },
  {
    id: "step-7-ai-data-systems",
    stepNumber: 7,
    title: "AI + Data Systems Integration",
    subtitle: "Long-term architectural direction",
    description: "Bridging large-scale data engineering pipelines with AI model inference, vector storage, automated retrieval systems, and intelligent agent workflows.",
    status: "Next Direction",
    focusTopics: ["AI Model Data Ingestion", "Vector Embeddings & Stores", "Intelligent Automation", "Real-Time Systems"],
    icon: "Cpu"
  }
];

export const currentLearningItems: LearningItem[] = [
  {
    id: "learn-python-depi",
    title: "Advanced Python Training",
    source: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    description: "Intensive track covering advanced Python features, algorithmic problem solving, clean architecture, and data structures.",
    tags: ["Python", "DEPI", "Algorithms", "OOP"]
  },
  {
    id: "learn-sql-depi",
    title: "Advanced SQL Training",
    source: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    description: "Hands-on mastery of relational databases, advanced query execution, indexing methods, and transactional integrity.",
    tags: ["SQL", "Databases", "Query Optimization", "DEPI"]
  },
  {
    id: "learn-de-depi",
    title: "Data Engineering Path",
    source: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    description: "Specialized engineering track focusing on data pipelines, storage systems, ETL lifecycle, and database administration.",
    tags: ["Data Pipelines", "ETL", "Storage", "Architecture"]
  },
  {
    id: "learn-ms-data-engineer",
    title: "Microsoft Data Engineer Learning Path",
    source: "Microsoft Learn",
    status: "Enrolled",
    timeline: "Expected completion around January",
    description: "Comprehensive curriculum covering cloud data stores, data transformation, pipeline orchestration, and analytical storage.",
    tags: ["Microsoft", "Cloud Data", "Data Engineering", "Certification Target"]
  },
  {
    id: "learn-linux-ubuntu",
    title: "Linux & Ubuntu Environment",
    source: "Self-Guided & Practical Systems Practice",
    status: "Active Practice",
    description: "Building daily proficiency in Ubuntu command-line workflows, package management, bash scripting basics, and environment configurations.",
    tags: ["Linux", "Ubuntu", "CLI", "Systems"]
  }
];
