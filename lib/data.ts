
/* =========================================================
  SITE INFORMATION
  ========================================================= */

export const site = {
  name: "Muna K.C.",

  role: "Data Science & Machine Learning | Full-Stack Developer",

  tagline:
    "Python | SQL | Machine Learning | React | Next.js | Node.js",

  location: "Kathmandu, Nepal",

  email: "kcm02051@gmail.com",

  phone: "+977-9822927970",

  github: "https://github.com/Munakc1",

  linkedin:
    "https://www.linkedin.com/in/muna-k-c-0739a9283",

  contact: {
    title: "Let's Work Together",

    description:
      "Have a project, idea, or technical challenge? Tell me about it. Whether you need a full-stack web application, data analysis, machine learning solution, or data-driven product, I would be happy to discuss your requirements.",

    availability:
      "Available for full-stack development, data science, machine learning, backend development, and data-driven application projects.",

    responseTime:
      "I review project inquiries and respond as soon as possible.",
  },
};


/* =========================================================
  NAVIGATION
  ========================================================= */

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];


/* =========================================================
  CAPABILITIES
  Data Science + Machine Learning + Full-Stack Development
  ========================================================= */

export const capabilities = [
  // Data Science
  "Python",
  "SQL",
  "Data Analysis",
  "Data Cleaning",
  "Data Preprocessing",
  "Exploratory Data Analysis",
  "Statistical Analysis",
  "Data Visualization",
  "Feature Engineering",

  // Machine Learning
  "Machine Learning",
  "Scikit-learn",
  "Regression",
  "Classification",
  "Clustering",
  "Model Evaluation",

  // Data Science Libraries
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "yfinance",

  // Frontend Development
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",

  // Backend Development
  "Node.js",
  "Express.js",
  "REST APIs",

  // Databases
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Mongoose",

  // Development Tools
  "Git",
  "GitHub",
  "VS Code",
  "Jupyter Notebook",
  "Google Colab",
];


/* =========================================================
  DATA SCIENCE WORKFLOW
  ========================================================= */

export const workflow = [
  {
    step: "01",
    title: "Understand",
    text:
      "Define the analytical, technical, or business problem and identify the objective.",
  },

  {
    step: "02",
    title: "Collect",
    text:
      "Gather relevant data from appropriate datasets, APIs, databases, or other sources.",
  },

  {
    step: "03",
    title: "Clean",
    text:
      "Handle missing values, duplicates, inconsistencies, outliers, and data-quality issues.",
  },

  {
    step: "04",
    title: "Explore",
    text:
      "Use statistical analysis and visualization to understand distributions, patterns, and relationships.",
  },

  {
    step: "05",
    title: "Engineer",
    text:
      "Create meaningful features and transform data into a format suitable for analysis and machine learning.",
  },

  {
    step: "06",
    title: "Model",
    text:
      "Train, compare, and tune appropriate machine learning algorithms based on the problem.",
  },

  {
    step: "07",
    title: "Evaluate",
    text:
      "Evaluate models using suitable metrics, validation techniques, and performance analysis.",
  },

  {
    step: "08",
    title: "Communicate",
    text:
      "Translate technical findings into clear insights, visualizations, and practical outcomes.",
  },
];


/* =========================================================
  PROJECT TYPE
  ========================================================= */

export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  workflow: string[];
  featured: boolean;

  sections?: {
    overview?: string;
    problem?: string;
    data?: string;
    preprocessing?: string;
    featureEngineering?: string;
    models?: string[];
    evaluation?: string;
    visualizations?: string[];
    challenges?: string;
    lessons?: string;
    future?: string;
  };
};


/* =========================================================
  PROJECTS
  ========================================================= */

export const projects: Project[] = [
  {
    slug: "stock-ml",
    number: "01",
    category: "Machine Learning",
    title: "Stock Buy/Sell/Hold Prediction System",

    description:
      "An end-to-end machine learning project that uses historical OHLCV data and engineered technical indicators to classify market conditions into Buy, Sell, and Hold signals.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "yfinance",
      "Matplotlib",
      "Seaborn",
    ],

    workflow: [
      "Data Collection",
      "Data Cleaning",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Prediction",
    ],

    featured: true,

    sections: {
      overview:
        "An end-to-end machine learning pipeline that transforms historical stock-market data into a classification problem and evaluates multiple machine learning approaches for Buy, Sell, and Hold signal classification.",

      problem:
        "Transform historical OHLCV (Open, High, Low, Close, Volume) data into structured features that can be used to study and classify historical market conditions.",

      data:
        "Historical OHLCV market data retrieved using yfinance.",

      preprocessing:
        "Cleaned missing values, aligned time-series data, and prepared historical observations for technical-indicator calculation and model training.",

      featureEngineering:
        "Engineered features from price and volume data, including moving averages, RSI, MACD, and volume-based indicators.",

      models: [
        "Logistic Regression",
        "Decision Tree",
        "Random Forest",
        "Support Vector Machine",
      ],

      evaluation:
        "Models are evaluated using appropriate classification metrics and comparison techniques. Detailed results are available in the project repository.",

      visualizations: [
        "Price Chart",
        "Moving Average Chart",
        "RSI Chart",
        "MACD Chart",
        "Confusion Matrix",
        "Model Comparison",
      ],

      challenges:
        "Working with noisy and non-stationary financial time-series data while selecting features and validation approaches that reduce the risk of overfitting.",

      lessons:
        "The project strengthened my understanding of feature engineering, classification, model evaluation, and the importance of appropriate validation when working with time-series data.",

      future:
        "Potential improvements include stronger time-series validation, additional features, hyperparameter optimization, and more robust evaluation across different market periods.",
    },
  },


  {
    slug: "customer-segmentation",
    number: "02",
    category: "Data Science / Machine Learning",
    title: "Customer Segmentation & Purchase Behavior Analysis",

    description:
      "A customer analytics project using RFM analysis and K-Means clustering to identify customer segments and understand purchasing behavior.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],

    workflow: [
      "Transaction Data",
      "Data Cleaning",
      "RFM Analysis",
      "Feature Scaling",
      "K-Means Clustering",
      "Customer Segmentation",
      "Business Insights",
    ],

    featured: true,

    sections: {
      overview:
        "A customer segmentation project that combines RFM analysis with K-Means clustering to identify distinct customer groups based on purchasing behavior.",

      problem:
        "Analyze customer purchasing behavior and group customers according to recency, frequency, and monetary value.",

      data:
        "Transaction-level customer purchase data.",

      preprocessing:
        "Cleaned transaction records, handled relevant data-quality issues, and aggregated transaction-level information into customer-level summaries.",

      featureEngineering:
        "Created RFM (Recency, Frequency, Monetary) features for each customer and applied feature scaling before clustering.",

      models: [
        "K-Means Clustering",
      ],

      evaluation:
        "Cluster quality is assessed using standard clustering evaluation approaches, with detailed implementation and results available in the project repository.",

      visualizations: [
        "RFM Distributions",
        "Elbow Curve",
        "Cluster Visualization",
        "Customer Segment Profiles",
      ],

      challenges:
        "Selecting a meaningful number of clusters and translating mathematical clusters into customer groups that have practical business meaning.",

      lessons:
        "The quality and interpretation of unsupervised learning results depend heavily on meaningful feature construction and appropriate preprocessing.",

      future:
        "Future improvements could include additional behavioral features, alternative clustering techniques, customer lifetime value analysis, and recommendation-oriented applications.",
    },
  },


  {
    slug: "medical-system",
    number: "03",
    category: "Full-Stack Development / Database",
    title: "Medical Appointment & Record Management System",

    description:
      "A full-stack web application designed to manage medical appointments, patient records, authentication, and role-based access using a relational database.",

    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    workflow: [
      "Requirements Analysis",
      "Database Design",
      "Frontend Development",
      "Backend Development",
      "Authentication & Access Control",
      "Testing",
    ],

    featured: false,

    sections: {
      overview:
        "A full-stack web application for organizing medical appointments and patient records while supporting authentication and role-based access for different types of users.",

      problem:
        "Create a structured digital system for managing appointments, patient information, doctor information, and medical records.",

      data:
        "Relational data modeled in MySQL, including patients, doctors, appointments, and medical records.",

      preprocessing:
        "Not applicable — this project focuses primarily on software engineering, database design, authentication, and application development rather than machine learning.",

      featureEngineering:
        "Not applicable to this software engineering project.",

      evaluation:
        "Application functionality and database workflows were tested during development. Detailed implementation information is available in the project repository.",

      future:
        "Potential improvements include modern frontend architecture, API-based integration, improved security controls, notifications, and expanded administrative functionality.",
    },
  },
];


/* =========================================================
  SKILL CATEGORIES
  ========================================================= */

export const skillCategories = [
  {
    number: "01",
    title: "Programming",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
    ],
  },

  {
    number: "02",
    title: "Data Science",
    items: [
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Data Visualization",
      "Feature Engineering",
    ],
  },

  {
    number: "03",
    title: "Machine Learning",
    items: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "K-Nearest Neighbors",
      "Support Vector Machine",
      "Naive Bayes",
      "K-Means Clustering",
    ],
  },

  {
    number: "04",
    title: "Python & Data Libraries",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "yfinance",
    ],
  },

  {
    number: "05",
    title: "Full-Stack Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST API Integration",
    ],
  },

  {
    number: "06",
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
    ],
  },

  {
    number: "07",
    title: "Development Tools",
    items: [
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Git",
      "GitHub",
    ],
  },
];



/* =========================================================
  EXPERIENCE
  ========================================================= */

export const experience = [
  {
    title: "Full-Stack Developer",
    company: "Lacspace",
    period: "2025 – Present",

    type: "Professional Experience",

    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],

    responsibilities: [
      "Develop and maintain full-stack web applications using modern frontend and backend technologies.",

      "Build responsive and reusable user interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",

      "Develop backend functionality and REST APIs using Node.js and Express.js.",

      "Integrate frontend applications with backend services and databases.",

      "Work with relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB.",

      "Implement application features, troubleshoot technical issues, and improve application usability and performance.",

      "Collaborate with team members throughout the software development lifecycle.",

      "Contribute to real-world projects while following practical development, testing, version-control, and deployment workflows.",
    ],

    note:
      "My experience at Lacspace has given me practical full-stack development experience across frontend interfaces, backend services, REST APIs, databases, and real-world application development. It has also strengthened my understanding of how data-driven functionality can be integrated into practical software products.",
  },

  {
    title: "Data Science & Machine Learning",
    company: "Hands-on Projects & Practical Experience",
    period: "2025 – Present",

    type: "Hands-on Experience",

    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "yfinance",
    ],

    responsibilities: [
      "Work with Python for data analysis, preprocessing, visualization, and machine learning workflows.",

      "Clean and preprocess datasets by handling missing values, inconsistencies, duplicates, and other data-quality issues.",

      "Perform exploratory data analysis to identify patterns, relationships, distributions, and useful insights from data.",

      "Apply statistical analysis and data visualization techniques using Pandas, NumPy, Matplotlib, and Seaborn.",

      "Develop meaningful features from structured datasets through feature engineering and data transformation.",

      "Build machine learning models for classification, regression, and clustering problems using Scikit-learn.",

      "Evaluate machine learning models using appropriate metrics and validation approaches.",

      "Work on practical projects involving financial market data, customer segmentation, and other data-driven problems.",
    ],

    note:
      "My Data Science and Machine Learning experience comes from hands-on projects and practical training, where I have worked through the complete workflow from data preparation and exploratory analysis to feature engineering, model training, evaluation, and interpretation.",
  },
];



/* =========================================================
  EDUCATION
  ========================================================= */

export const education = {
  degree:
    "Bachelor of Science in Computer Science and Information Technology",

  school:
    "Asian College of Management and Technology",

  location:
    "Kathmandu, Nepal",

  graduation:
    "2026",

  coursework: [
    "Data Science",
    "Artificial Intelligence & Machine Learning",
    "Python Programming",
    "Statistics & Probability",
    "Database Management Systems",
    "Web Technology",
    "Software Engineering",
    "Object-Oriented Programming",
    "Computer Networks",
    "Operating Systems",
    "System Analysis & Design",
  ],
};


/* =========================================================
  TRAINING
  ========================================================= */

export const training = {
  title:
    "Artificial Intelligence, Machine Learning & Data Science",

  provider:
    "IT Skills Training Nepal (ISTN)",

  duration:
    "1.5-Month Intensive Training Program",

  focus: [
    "Python",
    "Data Analysis",
    "Data Preprocessing",
    "Exploratory Data Analysis",
    "Machine Learning",
    "Model Evaluation",
    "Data Visualization",
  ],
};


/* =========================================================
  CONTACT FORM
  Client Project Inquiry
  ========================================================= */

export type ContactInquiry = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget?: string;
  message: string;
};


/* =========================================================
  CONTACT FORM OPTIONS
  ========================================================= */

export const projectTypes = [
  "Full-Stack Web Development",
  "Data Science & Data Analysis",
  "Machine Learning",
  "Backend / API Development",
  "Database Development",
  "Data-Driven Application",
  "Website Development",
  "Other",
];

export const budgetRanges = [
  "Not sure yet",
  "Under NPR 25,000",
  "NPR 25,000 – 50,000",
  "NPR 50,000 – 100,000",
  "Above NPR 100,000",
];


/* =========================================================
  CONTACT FORM CONTENT
  ========================================================= */

export const contactForm = {
  title: "Start a Conversation",

  description:
    "Tell me about your project, requirements, or technical challenge. I’ll review your message and get back to you.",

  fields: {
    name: {
      label: "Full Name",
      placeholder: "Enter your name",
      required: true,
    },

    email: {
      label: "Email Address",
      placeholder: "you@example.com",
      required: true,
    },

    company: {
      label: "Company / Organization",
      placeholder: "Company name (optional)",
      required: false,
    },

    phone: {
      label: "Phone / WhatsApp",
      placeholder: "+977-XXXXXXXXXX",
      required: false,
    },

    projectType: {
      label: "Project Type",
      placeholder: "Select a project type",
      required: true,
    },

    budget: {
      label: "Budget Range",
      placeholder: "Select your budget (optional)",
      required: false,
    },

    message: {
      label: "Project Details",
      placeholder:
        "Tell me about your project, requirements, timeline, or the problem you want to solve...",
      required: true,
    },
  },

  submitLabel: "Send Message",

  submittingLabel: "Sending Message...",

  successMessage:
    "Your message has been sent successfully. Thank you for reaching out — I’ll get back to you as soon as possible.",

  errorMessage:
    "Something went wrong while sending your message. Please try again or contact me directly by email.",

  validationMessage:
    "Please complete all required fields before submitting the form.",
};


/* =========================================================
  CONTACT INFORMATION
  ========================================================= */

export const contactInfo = [
  {
    label: "Email",
    value: "kcm02051@gmail.com",
    href: "mailto:kcm02051@gmail.com",
  },

  {
    label: "Phone",
    value: "+977-9822927970",
    href: "tel:+9779822927970",
  },

  {
    label: "Location",
    value: "Kathmandu, Nepal",
    href: undefined,
  },

  {
    label: "GitHub",
    value: "github.com/Munakc1",
    href: "https://github.com/Munakc1",
  },

  {
    label: "LinkedIn",
    value: "linkedin.com/in/muna-k-c-0739a9283",
    href:
      "https://www.linkedin.com/in/muna-k-c-0739a9283",
  },
];


/* =========================================================
  INQUIRY STATUS
  ========================================================= */

export type InquiryStatus =
  | "NEW"
  | "READ"
  | "IN_PROGRESS"
  | "REPLIED"
  | "CLOSED";


/* =========================================================
  RECRUITER SIGNALS
  ========================================================= */

export const recruiterSignals = [
  {
    title: "Data Science Foundation",

    text:
      "Hands-on experience working with Python, SQL, data preprocessing, exploratory data analysis, visualization, feature engineering, and statistical analysis.",
  },

  {
    title: "Machine Learning Practice",

    text:
      "Practical experience building machine learning workflows involving data preparation, feature engineering, model training, evaluation, and interpretation.",
  },

  {
    title: "Full-Stack Development",

    text:
      "Professional full-stack development experience with React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, REST APIs, and databases.",
  },

  {
    title: "Software Engineering",

    text:
      "Experience building practical web applications across frontend, backend, API integration, authentication, database design, and application workflows.",
  },

  {
    title: "Data + Software",

    text:
      "Interested in combining data science and software engineering to build practical, data-driven applications and intelligent solutions.",
  },

  {
    title: "Continuous Learning",

    text:
      "Continuously strengthening skills in Python, SQL, statistics, data analysis, machine learning, backend development, and modern full-stack technologies.",
  },
];
