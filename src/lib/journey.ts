import client from "./sanity.client";
import { Journey } from "../types/journey";

const fallbackJobs: Journey[] = [
  {
    _id: "wolt-doordash-ai-engineer",
    title: "AI Engineer",
    company: "Wolt / DoorDash",
    startDate: "2024-03-01",
    description:
      "Designing and implementing real-time voice assistant agents that help users order food via voice or chat, while maintaining production ML platforms at scale.",
    highlights: [
      "Designed architecture for training, scaling, and deploying 200+ models.",
      "Built and maintained ML pipelines with Flyte.",
      "Implemented monitoring, observability, shadow testing, A/B testing, and switchback testing for production models.",
    ],
    tools: [
      "Python",
      "Kubernetes",
      "Flyte",
      "MLflow",
      "AWS",
      "Datadog",
      "OpenAI",
      "Agents",
    ],
    category: "work",
  },
  {
    _id: "resumelo-ai-agent",
    title: "Founder / Builder",
    company: "Resumelo — AI Agent to analyze and optimize resumes",
    startDate: "2024-12-01",
    description:
      "Built an agentic web application that analyzes, optimizes, and tailors resumes to job descriptions, giving actionable feedback to users. Currently used by 300+ users.",
    highlights: [
      "Designed agentic workflows for resume feedback and job-description matching.",
      "Built the product end-to-end across backend, frontend, and observability.",
    ],
    tools: ["LangGraph", "Langfuse", "LangChain", "Python", "FastAPI", "Next.js"],
    category: "project",
  },
  {
    _id: "databricks-generative-ai-world-cup",
    title: "1st Place Hackathon Winner",
    company: "Databricks Generative AI World Cup — Medivise",
    startDate: "2024-04-01",
    endDate: "2024-04-30",
    description:
      "Created Medivise, a mobile app that streamlines medication management for older adults with OCR, drug and food interaction checks, and AI-generated health reports.",
    highlights: [
      "Combined RAG, OCR, and mobile UX to support safer medication routines.",
      "Built with a user-centric healthcare workflow and production-oriented backend services.",
    ],
    tools: ["Kubernetes", "Helm", "DBRX", "LangChain", "Swift", "FastAPI", "MongoDB"],
    category: "project",
  },
  {
    _id: "35up-ai-engineer",
    title: "AI Engineer",
    company: "35Up — Cross-selling",
    startDate: "2023-04-01",
    endDate: "2024-03-01",
    description:
      "Built AI and ML automation tools for cross-selling, recommendation systems, and LLM-powered data labeling and research workflows.",
    highlights: [
      "Proposed and implemented a next-level ML automation tool using Kubeflow.",
      "Built recommendation systems using LLMs and vector databases.",
      "Fine-tuned GPT-3 models for data labeling and researched BERT-based architectures.",
      "Deployed ML models to AWS using Terraform as infrastructure as code.",
    ],
    tools: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Kubeflow",
      "Kubernetes",
      "OpenAI",
      "Terraform",
      "AWS",
    ],
    category: "work",
  },
  {
    _id: "google-truera-hackathon",
    title: "3rd Place Hackathon Winner",
    company: "Google & Truera — Mobile RAG learning assistant",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    description:
      "Built a mobile RAG application that helps students learn from PDFs and photos through flashcards, semantic search, Q&A, and camera-based exam answers.",
    highlights: [
      "Combined multimodal document ingestion, semantic retrieval, and mobile-first learning workflows.",
    ],
    tools: ["Gemini", "Vertex AI", "GCP", "LlamaIndex", "FastAPI", "Swift", "Zilliz", "MongoDB"],
    category: "project",
  },
  {
    _id: "mlops-weaviate-hackathon",
    title: "1st Place Hackathon Winner",
    company: "MLOps Community & Weaviate — RAG video assistant",
    startDate: "2023-07-01",
    endDate: "2023-07-31",
    description:
      "Developed a RAG application that uses YouTube videos and Slack messages from the MLOps community to generate AI-driven video responses in the founder's voice.",
    highlights: [
      "Connected retrieval, voice generation, and video response generation into a working assistant.",
    ],
    tools: ["OpenAI", "Weaviate", "ElevenLabs"],
    category: "project",
  },
  {
    _id: "getsafe-machine-learning-engineer",
    title: "Machine Learning Engineer",
    company: "Getsafe — Insurance Company",
    startDate: "2022-04-01",
    endDate: "2023-03-01",
    description:
      "Helped mature ML delivery processes for insurance use cases, improving deployment validation, monitoring, and data flows across the ML lifecycle.",
    highlights: [
      "Implemented shadow and A/B deployments to test ML models safely.",
      "Improved model monitoring using MLflow.",
      "Extracted and loaded data from Kafka to Snowflake.",
      "Supported the data science team with more mature day-to-day ML engineering practices.",
    ],
    tools: ["Databricks", "MLflow", "AWS", "CloudFormation", "Snowflake", "Python"],
    category: "work",
  },
  {
    _id: "perficient-safe-fleet-machine-learning-engineer",
    title: "Machine Learning Engineer",
    company: "Perficient / Safe Fleet",
    startDate: "2021-05-01",
    endDate: "2022-04-01",
    description:
      "Built computer vision and edge AI systems for vehicle and route analysis, combining backend services, geolocation tooling, and Jetson deployments.",
    highlights: [
      "Created backend applications to preprocess video frames.",
      "Designed distributed architecture to scale ML models on edge devices.",
      "Developed geolocation tooling to highlight routes on maps and generate data for other teams.",
      "Deployed applications and models on Jetson devices and maintained computer vision models for object tracking and curb detection.",
    ],
    tools: ["Python", "TensorFlow", "OpenCV", "Redis", "Docker", "Jetson Nano", "AWS", "JavaScript", "React"],
    category: "work",
  },
  {
    _id: "ai-virality-paper",
    title: "Research Paper",
    company: "AI model to predict the virality of press articles",
    startDate: "2020-07-01",
    endDate: "2021-06-01",
    description:
      "Researched NLP models to predict which of two headlines would become more viral, comparing deep learning architectures for efficiency and performance.",
    highlights: [
      "Implemented LSTM and BERT-based proposals.",
      "Used transformer encoders to model relationships between headline words.",
    ],
    tools: ["Python", "TensorFlow", "NLP", "LSTM", "BERT", "Transformers"],
    category: "paper",
  },
  {
    _id: "perficient-splunk-qa-automation-lead",
    title: "QA Automation Lead",
    company: "Perficient / Splunk",
    startDate: "2019-01-01",
    endDate: "2021-05-01",
    description:
      "Led test automation and quality strategy for complex software projects, creating reliable E2E and API test suites and mentoring distributed teams.",
    highlights: [
      "Built E2E UI and API tests.",
      "Integrated BDD across automation levels using Cucumber.",
      "Created automation strategies, functional test cases, and TestRail workflows.",
      "Provided training to offshore team members.",
    ],
    tools: ["JavaScript", "TypeScript", "Node.js", "Cucumber", "TestRail"],
    category: "work",
  },
  {
    _id: "universidad-icesi-education",
    title: "Software Engineering & Data Science",
    company: "Universidad Icesi",
    startDate: "2014-01-01",
    endDate: "2021-12-01",
    description:
      "Completed a Bachelor's degree in Software Engineering and a Master's degree in Data Science, building a strong foundation in software systems, machine learning, and applied research.",
    highlights: [
      "Bachelor of Software Engineering — GPA 4.3/5.0.",
      "Master's degree in Data Science — GPA 4.5/5.0.",
      "Graduated Cum Laude and received best Software Engineering grade project recognition.",
    ],
    tools: ["Software Engineering", "Data Science", "Machine Learning", "Research"],
    category: "education",
  },
];

export const getJobs = async (): Promise<Journey[]> => {
  const jobs = await client.fetch<Journey[]>(
    `*[_type == "journey"] | order(startDate desc)`
  );

  return jobs?.length ? jobs : fallbackJobs;
};
