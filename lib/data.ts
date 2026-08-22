export const site = {
  name: "Muna K.C.",
  role: "Data Science & Machine Learning",
  tagline: "Python | SQL | Machine Learning",
  location: "Kathmandu, Nepal",
  email: "kcm02051@gmail.com",
  phone: "+977-9822927970",
  github: "https://github.com/Munakc1",
  linkedin: "https://www.linkedin.com/in/muna-k-c-0739a9283",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export const capabilities = [
  "Python",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Scikit-learn",
  "Pandas",
];

export const workflow = [
  { step: "01", title: "Understand", text: "Understand the analytical or business problem." },
  { step: "02", title: "Collect", text: "Gather and inspect relevant data." },
  { step: "03", title: "Clean", text: "Handle missing values, duplicates, inconsistencies, and outliers." },
  { step: "04", title: "Explore", text: "Use statistics and visualization to identify patterns." },
  { step: "05", title: "Engineer", text: "Create meaningful features for machine learning." },
  { step: "06", title: "Model", text: "Train and compare appropriate machine learning algorithms." },
  { step: "07", title: "Evaluate", text: "Evaluate models using appropriate metrics and validation techniques." },
  { step: "08", title: "Communicate", text: "Translate technical results into understandable insights." },
];

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

export const projects: Project[] = [
  {
    slug: "stock-ml",
    number: "01",
    category: "Machine Learning",
    title: "Stock Buy/Sell/Hold Prediction System",
    description:
      "An end-to-end machine learning pipeline that classifies stock market conditions into Buy, Sell, and Hold signals using historical OHLCV data.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "yfinance", "Matplotlib", "Seaborn"],
    workflow: ["Data Collection", "Data Cleaning", "Feature Engineering", "Model Training", "Evaluation", "Prediction"],
    featured: true,
    sections: {
      overview:
        "A machine learning pipeline that classifies daily stock market conditions into Buy, Sell, and Hold signals, built end-to-end from raw historical price data to trained classification models.",
      problem:
        "Translate historical OHLCV (Open, High, Low, Close, Volume) data into a structured classification problem that a model can learn from, rather than relying on manual chart reading.",
      data: "Historical OHLCV data retrieved using yfinance.",
      preprocessing:
        "Cleaning missing values, aligning date ranges, and preparing the time series for feature calculation.",
      featureEngineering:
        "Technical indicators engineered from price and volume, including moving averages, RSI, MACD, and volume-based features.",
      models: ["Logistic Regression", "Decision Tree", "Random Forest", "SVM"],
      evaluation: "Evaluation available in the project repository.",
      visualizations: ["Price chart", "Moving average chart", "RSI chart", "MACD chart", "Confusion matrix", "Model comparison"],
      challenges:
        "Working with noisy, non-stationary financial time series and selecting features that generalize beyond the training window.",
      lessons:
        "Careful feature engineering and validation strategy matter more than model choice alone when working with time series data.",
      future:
        "Details available in the repository.",
    },
  },
  {
    slug: "customer-segmentation",
    number: "02",
    category: "Data Science / Machine Learning",
    title: "Customer Segmentation & Purchase Behavior Analysis",
    description:
      "Customer segmentation project using RFM analysis and K-Means clustering to identify meaningful customer groups and purchasing behavior.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    workflow: ["Transaction Data", "Data Cleaning", "RFM Features", "Feature Scaling", "K-Means", "Customer Segments", "Business Insights"],
    featured: true,
    sections: {
      overview:
        "A customer segmentation project that applies RFM analysis and K-Means clustering to transaction data in order to identify distinct customer groups.",
      problem:
        "Group customers by purchasing behavior so that patterns in recency, frequency, and monetary value can inform business decisions.",
      data: "Transaction-level purchase data.",
      preprocessing: "Cleaning transaction records and aggregating them into per-customer summaries.",
      featureEngineering:
        "Construction of RFM (Recency, Frequency, Monetary) features per customer, followed by feature scaling for clustering.",
      models: ["K-Means Clustering"],
      evaluation: "Cluster quality assessed using standard clustering evaluation methods. Full details available in the project repository.",
      visualizations: ["RFM distributions", "Elbow curve", "Cluster visualization", "Customer segment profiles"],
      challenges: "Selecting an appropriate number of clusters and interpreting segments in a way that maps to real business meaning.",
      lessons: "Thoughtful feature construction (RFM) has a larger effect on segment quality than the clustering algorithm itself.",
      future: "Details available in the repository.",
    },
  },
  {
    slug: "medical-system",
    number: "03",
    category: "Full-Stack Development / Database",
    title: "Medical Appointment & Record Management System",
    description:
      "A full-stack medical appointment and record management system designed to manage appointments, patient records, authentication, and role-based access.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    workflow: ["Requirements", "Database Design", "Backend Development", "Authentication & Access Control", "Testing"],
    featured: false,
    sections: {
      overview:
        "A full-stack web application for managing medical appointments and patient records, supporting authentication and role-based access for different user types.",
      problem: "Provide a structured system for scheduling appointments and maintaining patient and doctor records.",
      data: "Relational data modeled in MySQL: patients, doctors, appointments, and medical records.",
      preprocessing: "Not applicable — this is a software engineering and database project rather than a data analysis project.",
      featureEngineering: "Not applicable to this project.",
      evaluation: "Details available in the repository.",
      future: "Details available in the repository.",
    },
  },
];

export const skillCategories = [
  {
    number: "01",
    title: "Programming",
    items: ["Python", "SQL", "JavaScript"],
  },
  {
    number: "02",
    title: "Data Science",
    items: [
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Feature Engineering",
      "Statistical Analysis",
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
      "KNN",
      "SVM",
      "Naive Bayes",
      "K-Means Clustering",
    ],
  },
  {
    number: "04",
    title: "Python Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "yfinance"],
  },
  {
    number: "05",
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    number: "06",
    title: "Tools",
    items: ["Jupyter Notebook", "Google Colab", "VS Code", "Git", "GitHub"],
  },
  {
    number: "07",
    title: "Web Development",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST API Integration"],
  },
];

export const experience = [
  {
    title: "Frontend Developer Intern",
    company: "Lacspace",
    period: "2025",
    responsibilities: [
      "Contributed to real-world web development projects.",
      "Developed responsive interfaces using React.js.",
      "Built reusable UI components.",
      "Integrated REST APIs for dynamic data.",
      "Collaborated with team members.",
      "Improved application usability and responsiveness.",
    ],
    note: "This experience strengthened my software development foundation and helps me understand how data-driven functionality can be integrated into practical products.",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science and Information Technology",
  school: "Asian College of Management and Technology",
  location: "Kathmandu, Nepal",
  graduation: "2026",
  coursework: [
    "Artificial Intelligence & Machine Learning",
    "Data Science",
    "Python Programming",
    "Statistics",
    "Database Management Systems",
  ],
};

export const training = {
  title: "Artificial Intelligence, Machine Learning & Data Science",
  provider: "IT Skills Training Nepal (ISTN)",
  duration: "1.5-Month Intensive Training Program",
};

export const recruiterSignals = [
  {
    title: "Data Mindset",
    text: "Comfortable working through the process from raw data to analysis and modeling.",
  },
  {
    title: "Machine Learning Practice",
    text: "Hands-on experience with preprocessing, feature engineering, model training, and evaluation.",
  },
  {
    title: "Software Foundation",
    text: "Frontend development experience provides a practical software engineering foundation.",
  },
  {
    title: "Continuous Learning",
    text: "Currently developing deeper skills in Python, SQL, statistics, data analysis, and machine learning.",
  },
];
