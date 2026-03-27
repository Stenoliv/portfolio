import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white/80 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-800/80 dark:ring-white/10">
      <div className="grid lg:grid-cols-2">
        <div className="flex h-[720px] items-center justify-center bg-gray-100 p-6 dark:bg-gray-900">
          {project.type === "video" ? (
            <video
              src={project.media}
              controls
              className={
                project.mobilePreview
                  ? "h-[660px] w-auto rounded-2xl object-contain shadow-lg"
                  : "max-h-full w-full rounded-2xl object-cover shadow-lg"
              }
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className={
                project.mobilePreview
                  ? "h-[360px] w-auto rounded-2xl object-contain shadow-lg"
                  : "max-h-full w-full rounded-2xl object-cover shadow-lg"
              }
            />
          )}
        </div>

        <div className="p-8 sm:p-10">
          <p className="mb-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {project.role}
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              What I did
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {project.contributions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  View project on GitHub
                </a>
              ) : (
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">No available publicly</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}