import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "shopflow-api",
    title: "ShopFlow API",
    subtitle: "Production-Grade E-Commerce REST API — Python & FastAPI",
    category: "Back-End",
    secondaryCategories: [],
    status: "In Development",
    description: "A production-grade, fully-featured RESTful API for an e-commerce platform built with FastAPI and Python. Features JWT authentication, role-based access control, product & order management, Stripe payment integration, and full async database operations with PostgreSQL.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Stripe", "Docker", "Alembic"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif/shopflow-api",
    demo: "https://github.com/ahmedbadawix77x-gif/shopflow-api",
    imageAccent: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
    details: {
      problem: "Building scalable e-commerce backends is complex — managing authentication, product catalogs, orders, payments, and user roles in a clean, maintainable, and production-ready architecture is a significant engineering challenge.",
      idea: "Design a clean, modular, and fully async REST API for an e-commerce platform following best practices in modern backend development with Python and FastAPI.",
      solution: "Built a layered architecture with JWT-based auth, role-based access control (Admin/Customer), full CRUD for products and categories, order lifecycle management, Stripe payment processing, and async PostgreSQL via SQLAlchemy 2.0. Containerized with Docker Compose.",
      role: "Back-End Engineer & API Architect. Designed and implemented the entire system from database schema to API endpoints, auth flows, and payment integration.",
      challenges: "Implementing a clean separation of concerns across auth, business logic, and data layers while keeping async performance optimal and maintaining security at every endpoint.",
      howISolvedThem: "Applied Repository Pattern + Service Layer architecture, used dependency injection for clean separation, implemented JWT with refresh tokens, and wrote comprehensive input validation with Pydantic v2.",
      whatILearned: "Deep practical experience with async Python, FastAPI's dependency injection system, PostgreSQL migrations with Alembic, secure API design patterns, and Docker Compose orchestration.",
      futureImprovements: "Redis caching layer, Celery background tasks for order notifications, full test suite with pytest, and deployment to AWS ECS.",
      highlights: [
        "Full JWT authentication with access & refresh token rotation",
        "Role-Based Access Control (Admin / Customer) on all protected routes",
        "Stripe payment integration with webhook order status sync",
        "Async PostgreSQL with SQLAlchemy 2.0 & Alembic migrations",
        "Dockerized with Docker Compose for one-command local setup",
        "Clean Repository + Service Layer architecture"
      ]
    }
  },
  {
    id: "efidp-platform",
    title: "EFIDP — Egypt Financial Intelligence Data Platform",
    subtitle: "Enterprise Data Lakehouse & Financial Analytics Platform — Python & Kafka",
    category: "Data Engineering",
    secondaryCategories: ["Back-End"],
    status: "In Development",
    description: "An enterprise-grade financial data engineering and Lakehouse platform simulating real-time and batch intelligence for Egypt's macroeconomic and capital markets. Built with Medallion architecture (Bronze/Silver/Gold on MinIO S3), Apache Kafka event streaming, Kimball Star Schema in PostgreSQL 16, Apache Airflow orchestration, and FastAPI serving layer with 100% test coverage.",
    technologies: ["Python", "Apache Kafka", "PostgreSQL", "FastAPI", "MinIO / S3", "Apache Airflow", "Docker", "Pydantic", "Redis"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif/EFIDP",
    demo: "https://github.com/ahmedbadawix77x-gif/EFIDP",
    imageAccent: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #3b82f6 100%)",
    details: {
      problem: "Financial and macroeconomic data in emerging markets like Egypt is fragmented across disparate formats (PDF reports, Excel/CSV releases, public statistical portals, and banking transaction feeds). Organizations face significant challenges with schema drift, late-arriving data, lack of auditability, disparate refresh cadences, and zero end-to-end data lineage.",
      idea: "Design an enterprise-level, production-grade financial data platform that unifies real public indicators (CBE corridor rates, EGX market indices, World Bank macro metrics) and high-throughput synthetic retail transaction streams under strict data contracts and reproducible Lakehouse architecture.",
      solution: "Engineered an end-to-end data platform utilizing Medallion Lakehouse storage (MinIO S3), Apache Kafka (KRaft mode) for event streaming, a Kimball Star Schema data warehouse in PostgreSQL 16, Airflow DAG orchestration, and an asynchronous FastAPI serving layer. Implemented contract-first validation with Pydantic v2, automated JSON Schema exports, and achieved 100% test coverage with strict CI/CD quality gates.",
      role: "Principal Data Platform Architect & Back-End Engineer. Designed the complete system architecture, data contracts, ingestion frameworks, containerized infrastructure, and analytical data models.",
      challenges: "Enforcing strict zero-trust data contracts across heterogeneous data sources, maintaining deterministic payload hashing and idempotency, and achieving 100% test coverage with strict static typing (MyPy) and Ruff formatting across complex async architectures.",
      howISolvedThem: "Implemented extensible connector patterns (API, File, Mock), JSON Schema Draft 2020-12 automated contract exports, standardized metadata envelope wrappers with SHA-256 payload verification, and circuit breaker validation reporting.",
      whatILearned: "Deep practical mastery of enterprise Lakehouse architecture (Medallion pattern), robust schema evolution rules, stream ingestion with Kafka KRaft mode, container orchestration with multi-service Docker Compose, and rigorous software craftsmanship in Python.",
      futureImprovements: "Real-time dbt transformations on Silver-to-Gold layers, Apache Spark distributed batch processing, and ML-based financial anomaly detection pipelines.",
      highlights: [
        "Medallion Lakehouse Architecture (Bronze Raw -> Silver Cleaned -> Gold Curated) on MinIO S3",
        "Event-driven transaction streaming with Apache Kafka (KRaft mode)",
        "Kimball Star Schema Data Warehouse in PostgreSQL 16 (Fact/Dim analytical model)",
        "Contract-first validation engine with Pydantic v2 & automated JSON Schema export",
        "100% test coverage (pytest, pytest-cov) with strict type checking (MyPy & Ruff)",
        "Containerized enterprise infrastructure: Kafka, MinIO, PostgreSQL, Redis, Airflow, and FastAPI"
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
      role: "Full-Stack Front-End Developer & Brand UI Designer.",
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
  },
  {
    id: "data-engineering-repo",
    title: "GPU Dataset Analysis — Data Engineering",
    subtitle: "Python & Pandas — DEPI Microsoft Data Engineer Track",
    category: "Data Engineering",
    secondaryCategories: [],
    status: "In Progress",
    description: "GPU Dataset Analysis using Python and Pandas — exploring GPU specifications through data cleaning, EDA, statistical summaries, manufacturer and foundry comparisons, and Matplotlib visualizations. Part of the DEPI Microsoft Data Engineering track. Expected completion: ~1 month.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Cleaning", "EDA", "Statistics"],
    featured: true,
    github: "https://github.com/ahmedbadawix77x-gif/Data-engineering-projects",
    demo: "https://github.com/ahmedbadawix77x-gif/Data-engineering-projects",
    imageAccent: "linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)",
    details: {
      problem: "Understanding GPU market trends, performance characteristics, and manufacturer patterns requires structured data analysis.",
      idea: "Apply data engineering and analytical skills to a real-world GPU specifications dataset.",
      solution: "Built a comprehensive analysis pipeline: data cleaning, EDA, statistical summaries, manufacturer comparisons, and Matplotlib visualizations.",
      role: "Data Engineer & Analyst. Writing Python/Pandas scripts, designing analysis pipelines.",
      challenges: "Handling missing data, inconsistent formats, and extracting meaningful patterns.",
      howISolvedThem: "Applied systematic data cleaning techniques, handled nulls and outliers, and used groupby aggregations.",
      whatILearned: "Solidified foundation in Pandas data manipulation, EDA workflows, and presenting data insights visually.",
      futureImprovements: "Expanding into predictive modeling and GPU performance benchmarking.",
      highlights: [
        "GPU specifications: data cleaning, EDA, statistical analysis",
        "Manufacturer & foundry comparison with Pandas groupby",
        "Matplotlib visualizations for data storytelling",
        "Part of DEPI Microsoft Data Engineering track"
      ]
    }
  }
];
