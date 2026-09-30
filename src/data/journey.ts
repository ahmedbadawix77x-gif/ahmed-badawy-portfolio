import { JourneyStep, LearningItem } from '../types';

export const dataEngineeringJourney: JourneyStep[] = [
  {
    id: "step-1-sql",
    stepNumber: 1,
    title: "SQL & Relational Foundations",
    subtitle: "Core database modeling and production querying skills",
    description: "Mastered fundamental to intermediate SQL concepts including CRUD operations, multi-table joins, aggregations, indexing strategies, and normalized database schema design for analytical workloads.",
    status: "Completed",
    focusTopics: ["Relational Schema Design", "Complex Joins & Subqueries", "Aggregations & Grouping", "Database Normalization"],
    icon: "Database"
  },
  {
    id: "step-2-python",
    stepNumber: 2,
    title: "Python for Data & Pipeline Engineering",
    subtitle: "Data-centric programming and ETL scripting foundations",
    description: "Developed robust Python foundations with emphasis on automated data transformations, Pandas EDA workflows, object-oriented pipeline structuring, file parsing (CSV/JSON/Excel), and reusable modular ETL scripts.",
    status: "Completed",
    focusTopics: ["Pandas & NumPy EDA", "ETL Scripting & Automation", "OOP Pipeline Architecture", "File I/O & Parsing"],
    icon: "Code"
  },
  {
    id: "step-3-advanced-sql",
    stepNumber: 3,
    title: "Advanced SQL & Query Optimization",
    subtitle: "Current deep-dive through DEPI Microsoft track",
    description: "Deepening SQL expertise through advanced window functions (RANK, ROW_NUMBER, LAG/LEAD), common table expressions (CTEs), recursive queries, execution plan analysis, and indexing strategies for performance tuning.",
    status: "Currently Learning",
    focusTopics: ["Window Functions", "CTEs & Recursive Queries", "Query Execution Plans", "Indexing Strategies"],
    icon: "Zap"
  },
  {
    id: "step-4-data-analytics",
    stepNumber: 4,
    title: "Data Analytics & Insight Extraction",
    subtitle: "From raw datasets to structured business metrics",
    description: "Analyzing relational and semi-structured datasets, engineering analytical features, identifying trend patterns, and creating structured metrics frameworks for business intelligence and reporting.",
    status: "Currently Learning",
    focusTopics: ["Exploratory Data Analysis", "Aggregation Pipelines", "Metric Definition & KPIs", "Data Validation Rules"],
    icon: "BarChart3"
  },
  {
    id: "step-5-data-engineering",
    stepNumber: 5,
    title: "Data Engineering — Pipelines & Lakehouse",
    subtitle: "ETL/ELT, Medallion Architecture & Warehouse Design",
    description: "Building automated ETL/ELT pipelines, Medallion Lakehouse architectures (Bronze/Silver/Gold), Kimball dimensional models (Star Schema), robust data contracts & error handling, and scalable relational data warehouses.",
    status: "Currently Learning",
    focusTopics: ["ETL/ELT Pipeline Design", "Medallion Lakehouse Pattern", "Kimball Star Schema", "Pipeline Resilience & Idempotency"],
    icon: "GitBranch"
  },
  {
    id: "step-6-stream-cloud",
    stepNumber: 6,
    title: "Stream Processing & Cloud Data Infra",
    subtitle: "Near-term direction and target platform expertise",
    description: "Deepening expertise in Apache Kafka event streaming, cloud data architectures (Azure Blob / AWS S3), managed database instances, cloud data warehouses, and serverless pipeline functions.",
    status: "Next Direction",
    focusTopics: ["Kafka Event Streaming", "Cloud Storage & Warehouses", "Managed Databases", "Serverless Pipeline Functions"],
    icon: "Cloud"
  },
  {
    id: "step-7-ai-data-systems",
    stepNumber: 7,
    title: "AI + Data Systems Integration",
    subtitle: "Long-term architectural vision",
    description: "Bridging large-scale data engineering pipelines with AI model inference, vector storage & embeddings, automated retrieval systems (RAG), and intelligent data agent workflows.",
    status: "Next Direction",
    focusTopics: ["AI Model Data Ingestion", "Vector Embeddings & Stores", "Intelligent Data Automation", "Real-Time Feature Pipelines"],
    icon: "Cpu"
  }
];

export const currentLearningItems: LearningItem[] = [
  {
    id: "learn-sql-depi",
    title: "Advanced SQL & Query Optimization",
    source: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    description: "Hands-on mastery of relational databases, advanced window functions, CTEs, query execution plans, indexing methods, and transactional integrity for analytics.",
    tags: ["SQL", "Databases", "Query Optimization", "DEPI"]
  },
  {
    id: "learn-de-depi",
    title: "Data Engineering — Microsoft Track",
    source: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    description: "Specialized engineering track focusing on ETL/ELT pipelines, Medallion Lakehouse architecture, Kimball data warehousing, storage systems, and pipeline orchestration.",
    tags: ["Data Pipelines", "ETL", "Medallion", "Warehouse"]
  },
  {
    id: "learn-python-data",
    title: "Python for Data & Pipeline Engineering",
    source: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "In Progress",
    description: "Intensive track covering advanced Python for data workflows, Pandas EDA, PySpark batch processing, Airflow DAG authoring, Pydantic data contracts, and clean architecture.",
    tags: ["Python", "Pandas", "DEPI", "Data Contracts"]
  },
  {
    id: "learn-ms-data-engineer",
    title: "Microsoft Data Engineer Certification Path",
    source: "Microsoft Learn",
    status: "Enrolled",
    timeline: "Expected completion around January",
    description: "Comprehensive curriculum covering Azure data stores, ADF pipeline orchestration, Synapse analytics, data transformation, and DP-203 certification preparation.",
    tags: ["Microsoft", "Azure", "Data Engineering", "Certification Target"]
  },
  {
    id: "learn-linux-ubuntu",
    title: "Linux & Ubuntu for Data Engineers",
    source: "Self-Guided & Practical Systems Practice",
    status: "Active Practice",
    description: "Building daily proficiency in Ubuntu command-line workflows, package management, bash scripting for pipeline automation, and containerized data infrastructure setup.",
    tags: ["Linux", "Ubuntu", "CLI", "Bash Automation"]
  }
];
