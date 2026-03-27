import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen bg-linear-to-b from-indigo-300 to-white px-6 py-12 dark:from-gray-950 dark:to-gray-800 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-block rounded-full bg-indigo-600/10 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
            Things I've built or been a part of building
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of projects I've worked on, including apps, websites,
            visualizations, data-engineering and games.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}