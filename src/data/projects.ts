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
    position: "Software Engineer",
    title: "Project Alpha",
    description:
      "A full-stack application for managing tasks and collaboration. Built with modern tools and a focus on performance and accessibility.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    repo: "#",
  },
  {
    position: "Frontend Developer",
    title: "Dashboard UI",
    description:
      "Analytics dashboard with real-time charts and responsive layout. Clean, minimalist design with B&W/grey palette.",
    skills: ["React", "Tailwind CSS", "Next.js"],
    link: "#",
    repo: "#",
  },
  {
    position: "Full Stack Developer",
    title: "API Gateway",
    description:
      "Central API gateway with rate limiting, authentication, and request routing. Handles high throughput with minimal latency.",
    skills: ["Node.js", "TypeScript", "Redis", "Docker"],
    repo: "#",
  },
];
