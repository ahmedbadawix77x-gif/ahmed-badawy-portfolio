import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "efidp-platform",
    title: "EFIDP — Egypt Financial Intelligence Data Platform",
    subtitle: "Enterprise Data Lakehouse & Financial Analytics Platform",
    category: "Data Engineering",
    secondaryCategories: [],
    status: "In Development",
    description: "An enterprise-grade financial data engineering and Lakehouse platform simulating real-time and batch intelligence for Egypt's macroeconomic and capital markets. Built with Medallion architecture (Bronze/Silver/Gold on MinIO S3), Apache Kafka event streaming, Kimball Star Schema in PostgreSQL 16, Apache Airflow DAG orchestration, and 100% test coverage with strict data contracts.",
    technologies: ["Python", "Apache Kafka", "PostgreSQL", "Apache Airflow", "MinIO / S3", "PySpark Ready", "Docker", "Pydantic", "Redis", "Medallion Architecture", "Kimball Star Schema"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif/EFIDP",
    demo: "https://github.com/ahmedbadawix77x-gif/EFIDP",
    imageAccent: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #3b82f6 100%)",
    details: {
      problem: "Financial and macroeconomic data in emerging markets like Egypt is fragmented across disparate formats (PDF reports, Excel/CSV releases, public statistical portals, and banking transaction feeds). Organizations face significant challenges with schema drift, late-arriving data, lack of auditability, disparate refresh cadences, and zero end-to-end data lineage.",
      idea: "Design an enterprise-level, production-grade financial data platform that unifies real public indicators (CBE corridor rates, EGX market indices, World Bank macro metrics) and high-throughput synthetic retail transaction streams under strict data contracts and reproducible Lakehouse architecture.",
      solution: "Engineered an end-to-end data platform utilizing Medallion Lakehouse storage (MinIO S3), Apache Kafka (KRaft mode) for event streaming, a Kimball Star Schema data warehouse in PostgreSQL 16, Airflow DAG orchestration, and an asynchronous analytics serving layer. Implemented contract-first validation with Pydantic v2, automated JSON Schema exports, and achieved 100% test coverage with strict CI/CD quality gates.",
      role: "Principal Data Platform Architect & Engineer. Designed the complete system architecture, data contracts, ingestion frameworks, containerized infrastructure, and analytical data models.",
      challenges: "Enforcing strict zero-trust data contracts across heterogeneous data sources, maintaining deterministic payload hashing and idempotency, and achieving 100% test coverage with strict static typing (MyPy) and Ruff formatting across complex async pipeline architectures.",
      howISolvedThem: "Implemented extensible connector patterns (API, File, Mock), JSON Schema Draft 2020-12 automated contract exports, standardized metadata envelope wrappers with SHA-256 payload verification, and circuit breaker validation reporting.",
      whatILearned: "Deep practical mastery of enterprise Lakehouse architecture (Medallion pattern), robust schema evolution rules, stream ingestion with Kafka KRaft mode, container orchestration with multi-service Docker Compose, and rigorous data-centric software craftsmanship in Python.",
      futureImprovements: "Real-time dbt transformations on Silver-to-Gold layers, Apache Spark distributed batch processing for historical datasets, and ML-based financial anomaly detection pipelines.",
      highlights: [
        "Medallion Lakehouse Architecture (Bronze Raw -> Silver Cleaned -> Gold Curated) on MinIO S3",
        "Event-driven transaction streaming with Apache Kafka (KRaft mode)",
        "Kimball Star Schema Data Warehouse in PostgreSQL 16 (Fact/Dim analytical model)",
        "Contract-first validation engine with Pydantic v2 & automated JSON Schema export",
        "100% test coverage (pytest, pytest-cov) with strict type checking (MyPy & Ruff)",
        "Containerized enterprise data infrastructure: Kafka, MinIO, PostgreSQL, Redis, and Airflow"
      ]
    }
  },
  {
    id: "data-engineering-repo",
    title: "GPU Dataset Analysis — Data Engineering",
    subtitle: "Python, Pandas & EDA — DEPI Microsoft Data Engineer Track",
    category: "Data Engineering",
    secondaryCategories: ["Analytics"],
    status: "In Progress",
    description: "Comprehensive GPU specifications dataset engineering and analysis using Python and Pandas. Covers end-to-end data cleaning, exploratory data analysis (EDA), statistical summaries, manufacturer and foundry comparative analysis, dimensional aggregation, and Matplotlib visualizations. Part of the DEPI Microsoft Data Engineering track.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Cleaning", "EDA", "Statistical Analysis", "Feature Engineering"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif/Data-engineering-projects",
    demo: "https://github.com/ahmedbadawix77x-gif/Data-engineering-projects",
    imageAccent: "linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)",
    details: {
      problem: "Understanding GPU market trends, performance characteristics, manufacturer patterns, and silicon foundry relationships requires structured data engineering and rigorous analytical pipelines.",
      idea: "Apply data engineering and analytical skills to a real-world GPU specifications dataset — building a reproducible analysis pipeline from raw data to actionable insights.",
      solution: "Built a comprehensive analysis pipeline: systematic data cleaning, multi-dimensional EDA, statistical summaries, manufacturer vs foundry comparisons, chipset performance aggregations, and publication-quality Matplotlib visualizations for data storytelling.",
      role: "Data Engineer & Analyst. Writing Python/Pandas transformation scripts, designing analysis pipelines, and engineering analytical features.",
      challenges: "Handling missing data, inconsistent categorical formats, outlier identification, and extracting meaningful cross-dimensional patterns from mixed numeric/categorical features.",
      howISolvedThem: "Applied systematic data cleaning techniques with explicit validation assertions, handled nulls and outliers with documented strategies, used Pandas groupby/pivot_table aggregations, and structured analysis into reusable modular functions.",
      whatILearned: "Solidified foundation in Pandas data manipulation, EDA workflow best practices, feature engineering for analytical datasets, and presenting data insights visually with clear narrative structure.",
      futureImprovements: "Expanding into predictive modeling for GPU performance benchmarking, adding interactive Plotly dashboards, and integrating with a warehouse layer for incremental quarterly updates.",
      highlights: [
        "End-to-end pipeline: raw ingestion → cleaning → EDA → visualization → insights",
        "Manufacturer & foundry cross-comparison with Pandas groupby and pivot_table",
        "Statistical summaries, outlier detection, and correlation analysis",
        "Matplotlib visualizations for structured data storytelling",
        "Part of DEPI Microsoft Data Engineering certified track"
      ]
    }
  },
  {
    id: "faculty-specific-education",
    title: "Faculty of Specific Education Website",
    subtitle: "Graduation Project — Rated Excellent by University President & 15+ Dept Heads",
    category: "Web Development",
    secondaryCategories: ["Education"],
    status: "Completed",
    description: "Graduation project for the Faculty of Specific Education (2025). A comprehensive digital platform unifying department criteria, faculty resources, and student information. Rated 'Excellent' by the President of Benha University and over 15 Department Heads.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif",
    demo: "https://faculty-of-specific-education.vercel.app/",
    imageAccent: "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
    details: {
      problem: "Students and faculty members struggled with scattered academic information, disorganized departmental resources, and legacy mobile-unfriendly interfaces.",
      idea: "Design a unified, centralized, and accessible digital portal tailored for the Faculty of Specific Education with instant navigation for courses, schedules, and administrative announcements.",
      solution: "Engineered a high-performance web portal featuring responsive departmental directories, searchable student guidebooks, and dynamic academic resource categorization.",
      role: "Lead Front-End Developer & Interface Designer. Built responsive components, structural layout, and accessibility flows.",
      challenges: "Structuring large volumes of complex academic hierarchies while maintaining fast load times and intuitive navigation on mobile screens.",
      howISolvedThem: "Implemented modular component architecture, lazy loading, clean grid systems, and structured navigational trees tested on diverse viewport sizes.",
      whatILearned: "Deepened practical expertise in scalable UI design, user experience optimization for academic audiences, and component maintainability in React.",
      futureImprovements: "Integration with student portal authentication and real-time announcement notifications.",
      highlights: [
        "Rated 'Excellent' by the University President & 15+ Department Heads",
        "Graduation Project — Faculty of Specific Education, Class of 2025",
        "Fully responsive layout optimized for mobile, tablet, and desktop",
        "Streamlined navigation reducing student search time for academic resources"
      ]
    }
  },
  {
    id: "brazely-restaurant",
    title: "Brazely — Syrian & Middle Eastern Fine Dining",
    subtitle: "Luxury Restaurant Brand Website",
    category: "Web Development",
    secondaryCategories: [],
    status: "Completed",
    description: "A premium, visually stunning website for Brazely — a luxury Syrian and Middle Eastern fine dining restaurant. Features an elegant atmosphere, menu showcase, and immersive brand experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif/Brazely-luxury-Syrian-restaurant-website",
    demo: "https://ahmedbadawix77x-gif.github.io/Brazely-luxury-Syrian-restaurant-website/",
    imageAccent: "linear-gradient(135deg, #92400e 0%, #d97706 100%)",
    details: {
      problem: "The restaurant needed a premium digital presence that communicates the brand's luxury feel and authentic Syrian culinary identity.",
      idea: "Build a visually immersive, brand-first website that showcases the restaurant's ambiance, menu, and story.",
      solution: "Developed a luxurious multi-section website with rich imagery, elegant typography, smooth animations, and a clear brand voice.",
      role: "Front-End Developer & Brand UI Designer.",
      challenges: "Balancing visual richness with fast load times and mobile responsiveness.",
      howISolvedThem: "Used optimized assets, lazy loading, and CSS-based animations.",
      whatILearned: "How to translate luxury brand identity into a digital experience through careful typography, color, and layout choices.",
      futureImprovements: "Online reservation system and multilingual support (Arabic/English).",
      highlights: [
        "Luxury restaurant brand identity translated into immersive web experience",
        "Elegant multi-section layout with smooth animations",
        "Fully responsive across all devices",
        "Live deployed on GitHub Pages"
      ]
    }
  },
  {
    id: "golden-basbosa",
    title: "مَحَلّ البسبوسة الذهبية",
    subtitle: "أشهى الحلويات الشرقية — Oriental Sweets Shop",
    category: "Web Development",
    secondaryCategories: [],
    status: "Completed",
    description: "A beautiful Arabic-first website for an oriental sweets shop, showcasing traditional Egyptian and Middle Eastern desserts with a warm, inviting digital presence.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Arabic RTL", "Responsive Design"],
    featured: false,
    github: "https://github.com/ahmedbadawix77x-gif/Basbosa",
    demo: "https://ahmedbadawix77x-gif.github.io/Basbosa/",
    imageAccent: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    details: {
      problem: "A local sweets shop needed a digital presence to reach customers online.",
      idea: "Create a warm, inviting Arabic-first website that reflects the authentic feel of traditional oriental sweets.",
      solution: "Built a fully Arabic RTL website with product showcase, warm color palette, and smooth user experience.",
      role: "Front-End Developer & UI Designer.",
      challenges: "Implementing proper RTL layout and Arabic typography across all devices.",
      howISolvedThem: "Used CSS RTL directives, Arabic-friendly fonts, and tested across multiple device sizes.",
      whatILearned: "Building RTL-first web experiences and localizing UI for Arabic-speaking audiences.",
      futureImprovements: "Online ordering and WhatsApp integration.",
      highlights: [
        "Arabic-first RTL design for local Egyptian market",
        "Warm inviting product showcase",
        "Fully responsive",
        "Live deployed"
      ]
    }
  },
  {
    id: "bonduk-portfolio",
    title: "Bonduk — Premium Graphic Designer Portfolio",
    subtitle: "Branding Specialist Personal Portfolio",
    category: "Web Development",
    secondaryCategories: [],
    status: "Completed",
    description: "A premium, modern portfolio website for a graphic designer and branding specialist. Showcases creative work, services, and brand identity with a high-end visual aesthetic.",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Responsive"],
    featured: false,
    github: "https://github.com/ahmedbadawix77x-gif/bondok-portfolio7",
    demo: "https://ahmedbadawix77x-gif.github.io/bondok-portfolio7/",
    imageAccent: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
    details: {
      problem: "A graphic designer needed a portfolio that reflects their premium creative quality and brand identity.",
      idea: "Build a visually striking portfolio that acts as both a showcase and a brand statement.",
      solution: "Developed a modern, clean portfolio with case studies, service highlights, and contact functionality.",
      role: "Front-End Developer & UI Designer.",
      challenges: "Capturing the designer's creative vision in code while keeping the interface clean and professional.",
      howISolvedThem: "Close collaboration on visual direction, using CSS animations and careful spacing.",
      whatILearned: "Translating a creative professional's brand vision into a web experience.",
      futureImprovements: "CMS integration for easy portfolio updates.",
      highlights: [
        "Premium creative portfolio for branding specialist",
        "High-end visual aesthetic and animations",
        "Fully responsive",
        "Live deployed"
      ]
    }
  },
  {
    id: "petals-blooms",
    title: "Petals & Blooms — Flower Gallery",
    subtitle: "Exquisite Floral Shop Web Experience",
    category: "Web Development",
    secondaryCategories: [],
    status: "Completed",
    description: "An elegant, visually rich website for a flower shop featuring an exquisite gallery, product browsing, and a warm brand identity designed to evoke beauty and freshness.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Gallery UI"],
    featured: false,
    github: "https://github.com/ahmedbadawix77x-gif/Flower-Shop",
    demo: "https://ahmedbadawix77x-gif.github.io/Flower-Shop/",
    imageAccent: "linear-gradient(135deg, #ec4899 0%, #f9a8d4 100%)",
    details: {
      problem: "A flower shop lacked an online presence to showcase products and attract customers.",
      idea: "Create a beautiful, elegant website with a rich floral gallery.",
      solution: "Built a visually lush, responsive website with product gallery, brand identity, and contact sections.",
      role: "Front-End Developer & Visual Designer.",
      challenges: "Creating a visually rich experience without sacrificing performance.",
      howISolvedThem: "Used optimized images, CSS grid galleries, and smooth transitions.",
      whatILearned: "How to design emotionally resonant visual experiences for lifestyle and product brands.",
      futureImprovements: "Online ordering and delivery scheduling.",
      highlights: [
        "Exquisite floral gallery with rich visual design",
        "Warm, elegant brand identity",
        "Fully responsive",
        "Live deployed"
      ]
    }
  }
];
