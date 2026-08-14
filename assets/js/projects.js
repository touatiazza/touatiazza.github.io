/* ==========================================================================
   AZZA TOUATI PORTFOLIO - FEATURED PROJECTS & INTERACTIVE SIMULATOR MODULE
   ========================================================================== */

export const projectsData = [
  {
    id: 'parkinsons-ai',
    number: '01',
    title: "Parkinson's AI — Deep Learning System for Disease Recognition",
    category: 'ai',
    categoryLabel: 'Deep Learning & Healthcare AI',
    shortDesc: "This project focuses on the automated detection of Parkinson’s disease from hand-drawn images from the NewHandPD dataset.",
    technologies: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Data Augmentation', 'Flask'],
    problem: "Early clinical detection of Parkinson's disease using non-invasive motor drawing patterns requires highly accurate, robust deep-learning architectures resistant to data noise and patient variance.",
    solution: "Trained and evaluated a Convolutional Neural Network DenseNet201 for binary classification model and deep feature extractors on clinical hand-drawing datasets. Applied real-time data augmentation and built an interactive Flask prediction dashboard.",
    results: "Achieved 98.66 % classification accuracy delivered interactive web-based prediction tool for clinical decision interpretation.",
    githubUrl: 'https://github.com/touatiazza',
    simType: 'parkinsons',
    visualType: 'neural-canvas'
  },
  {
    id: 'retail-etl',
    number: '02',
    title: 'Retail Sales ETL Pipeline & Data Warehouse',
    category: 'engineering',
    categoryLabel: 'Data Engineering & BI',
    shortDesc: "End-to-end data engineering pipeline extracting, transforming, and loading retail sales data into an SSMS Star Schema warehouse.",
    technologies: ['SQL Server', 'SSMS', 'SSIS', 'ETL', 'Data Warehousing'],
    problem: "Enterprise transactional databases experienced query bottlenecks and schema inconsistencies, impeding executive Power BI reporting.",
    solution: "Architected a Star Schema dimensional model (FactSales, DimStore, DimCustomer, DimProduct) in SSMS. Built SSIS ETL packages for automated extraction, data cleansing, transformation, and warehouse staging.",
    results: "Ingested 500,000+ retail records with zero loss; reduced query reporting latency by 75%; automated daily ETL sync.",
    githubUrl: 'https://github.com/touatiazza',
    simType: 'etl',
    visualType: 'pipeline-flow'
  },
  {
    id: 'macrocast',
    number: '03',
    title: 'MacroCast — Inflation & GDP Time-Series Forecasting',
    category: 'analytics',
    categoryLabel: 'Econometrics & Data Science',
    shortDesc: "Macroeconomic inflation and GDP growth modeling and forecasting using econometric time-series analysis.",
    technologies: ['Python', 'R', 'Time Series Analysis', 'Econometrics', 'Data Visualization'],
    problem: "Macroeconomic fluctuations in inflation rates and GDP trends complicate strategic corporate planning and macroeconomic forecasting.",
    solution: "Conducted Augmented Dickey-Fuller stationarity tests, seasonal trend decomposition, and constructed SARIMAX & Prophet econometric forecasting models on macroeconomic indicator datasets.",
    results: "Achieved MAPE < 3.8%; generated 12-month forward forecasts with 95% confidence intervals for business strategy decisions.",
    githubUrl: 'https://github.com/touatiazza',
    simType: 'macrocast',
    visualType: 'time-series-canvas'
  },
  {
    id: 'job-market-ai',
    number: '04',
    title: 'AI & Job Market Intelligence Analytics',
    category: 'science',
    categoryLabel: 'Machine Learning & Web Analytics',
    shortDesc: "Data science analysis examining how AI automation impacts labor market demands, skill clusters, and job exposure.",
    technologies: ['Python', 'Web Scraping', 'Data Analysis', 'Machine Learning', 'Visualization'],
    problem: "Lack of quantitative clarity regarding which technical skills and job roles face high exposure to AI-driven automation.",
    solution: "Scraped 15,000+ tech job postings via Python; parsed text using Natural Language Processing (TF-IDF); trained k-means clustering models to analyze skill shift trends and automation risk indices.",
    results: "Mapped 8 key labor sectors; identified high-growth AI skill sets vs automation-sensitive task clusters; built interactive visual reports.",
    githubUrl: 'https://github.com/touatiazza',
    simType: 'jobmarket',
    visualType: 'scatter-canvas'
  }
];

