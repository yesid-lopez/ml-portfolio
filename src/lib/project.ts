import { ProjectType } from "@/types/project";
import client from "./sanity.client";

const resumeProjects: ProjectType[] = [
  {
    _id: "ml-automation-platform-kubeflow",
    title: "ML Automation Platform with Kubeflow",
    description:
      "Designed and implemented an ML automation platform to standardize training, deployment, and lifecycle operations for machine learning workflows.",
    area: "MLOps / ML Platform",
    impact: "Production-oriented platform work for repeatable ML delivery.",
    tools: ["Python", "PyTorch", "scikit-learn", "Kubeflow", "Kubernetes", "AWS", "Terraform"],
  },
  {
    _id: "llm-recommendation-system-vector-db",
    title: "LLM Recommendation System with Vector Databases",
    description:
      "Built recommendation systems using large language models and vector databases to improve cross-selling opportunities and product discovery.",
    area: "LLM / Recommendation Systems",
    impact: "Applied LLMs to real business recommendation workflows.",
    tools: ["Python", "OpenAI", "VectorDBs", "PyTorch", "scikit-learn"],
  },
  {
    _id: "ml-monitoring-ab-shadow-deployments",
    title: "ML Model Monitoring and A/B Deployment Framework",
    description:
      "Implemented shadow and A/B deployments for machine learning models, improving validation, monitoring, and production rollout safety.",
    area: "MLOps / Production ML",
    impact: "Safer model releases through monitoring and controlled experimentation.",
    tools: ["Databricks", "MLflow", "AWS", "CloudFormation", "Snowflake", "Kafka", "Python"],
  },
  {
    _id: "edge-computer-vision-vehicle-analysis",
    title: "Edge Computer Vision System for Vehicle Analysis",
    description:
      "Designed and deployed computer vision systems on Jetson devices for vehicle movement detection, route analysis, and curb detection.",
    area: "Computer Vision / Edge AI",
    impact: "Distributed edge inference for real-world video and geolocation workflows.",
    tools: ["Python", "TensorFlow", "OpenCV", "Redis", "Docker", "Jetson Nano", "AWS", "React"],
  },
  {
    _id: "ai-article-virality-prediction",
    title: "AI Model to Predict Article Virality",
    description:
      "Researched deep learning architectures to predict which of two press headlines would become more viral, comparing LSTM, BERT, and transformer encoder approaches.",
    area: "NLP / Research",
    impact: "Published research applying deep learning to headline virality prediction.",
    tools: ["Python", "TensorFlow", "NLP", "LSTM", "BERT", "Transformers"],
  },
  {
    _id: "student-dropout-prediction-clustering",
    title: "Student Dropout Prediction and Clustering",
    description:
      "Built a data-centric application to predict student dropout risk and cluster dropout patterns using supervised and unsupervised learning techniques.",
    area: "Machine Learning / Web Application",
    impact: "Award-winning software engineering grade project at Universidad Icesi.",
    tools: ["Django", "Python", "JavaScript", "Heroku", "KNN", "SVM", "ANN", "PostgreSQL"],
  },
  {
    _id: "gpt3-data-labeling-automation",
    title: "GPT-3 Data Labeling Automation",
    description:
      "Fine-tuned GPT-3 models to automate data labeling workflows, reducing manual effort and improving the scalability of ML data preparation.",
    area: "LLM / Data Automation",
    impact: "Practical LLM automation for internal ML data workflows.",
    tools: ["OpenAI", "GPT-3", "Python", "NLP"],
  },
  {
    _id: "synthetic-data-google-automl",
    title: "Synthetic Data Generation for Google AutoML",
    description:
      "Created synthetic datasets to train and evaluate Google AutoML NLP and Vision models, improving model accuracy through targeted data generation.",
    area: "Data Generation / AutoML",
    impact: "Improved model training data for NLP and computer vision use cases.",
    tools: ["Java", "Google Cloud AutoML", "NLP", "Vision", "Spring Batch"],
  },
];

export const getProjects = async () => {
  const projects = await client.fetch<ProjectType[]>(`
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      description,
      area,
      impact,
      tools,
      url,
      cover
    }
  `);

  const sanityProjectIds = new Set(projects.map((project) => project._id));
  const missingResumeProjects = resumeProjects.filter(
    (project) => !sanityProjectIds.has(project._id)
  );

  return [...projects, ...missingResumeProjects];
};
