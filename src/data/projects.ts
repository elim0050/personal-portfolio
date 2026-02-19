export interface Project {
  position: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    position: "Product Owner / Full Stack Developer",
    title: "AI-Powered Meeting Summarisation Web Application",
    description:"Led a cross-functional team as Product Owner to deliver an AI-powered meeting summarisation web app using GPT-4 APIs. Designed the UI/UX in Figma and built a full-stack MERN application (React, Node.js/Express, MongoDB). Integrated GPT-4 for automated transcription, summarisation, and translation, and developed RESTful APIs with scalable MongoDB schemas for efficient data retrieval.", 
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "GPT-4", "RESTful APIs", "MongoDB", "Figma", "MERN Stack"],
    link: "#",
    repo: "#",
  },
  {
    position: "AI Engineer",
    title: "RNN Models for Automated Recipe Generation",
    description:"Developed and evaluated six PyTorch-based RNN models for automated recipe generation from input ingredients, improving sequence coherence and ingredient relevance. Preprocessed datasets for structured experimentation and enhanced model performance by 10% (BLEU score) through fine-tuning and advanced mechanisms such as copy and coverage.", 
    skills: ["PyTorch", "RNN", "BLEU Score", "Fine-tuning", "Copy and Coverage mechanisms","Deep Learning", "Python", "LLM","ML Models"],
    link: "#",
    repo: "#",
  },
  {
    position: "Software Engineer - Full Year Industry Project",
    title: "AI-Driven Biochemist Robot & MLOps Optimisation",
    description:"Collaborated with CSL Behring researchers to enhance an AI-powered biochemist robot for precise chemical dispensing using configurable inputs and ML models. Re-architected the MLOps pipeline to improve reliability and deployment efficiency, and implemented a cloud-based Firebase data system, reducing storage usage by ~90% while improving accessibility.", 
    skills: ["Python", "MLOps", "Firebase", "DevOps", "CI/CD"],
    repo: "#",
  },
];
