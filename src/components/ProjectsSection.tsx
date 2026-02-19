import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-gray-200 bg-white px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          Projects
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                {project.position}
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 text-justify">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-700 underline hover:text-gray-900"
                  >
                    View
                  </Link>
                )}
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-700 underline hover:text-gray-900"
                  >
                    Code
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
