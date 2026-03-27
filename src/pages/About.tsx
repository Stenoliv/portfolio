import { NavLink } from "react-router";
import studyRec from "../assets/images/studyRec.png";

export default function About() {
  return (
    <section className="min-h-screen bg-linear-to-b from-indigo-300 to-white px-6 py-12 dark:from-gray-950 dark:to-gray-800 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <p className="mb-3 inline-block rounded-full bg-indigo-600/10 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
            Developer • Designer • Problem Solver
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About who I am and what I do
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            I enjoy building applications that are functional, intuitive, and visually appealing.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* About me */}
          <div className="rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur dark:bg-gray-800/80 dark:ring-white/10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Shortly about me
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
              Hi, I'm Oliver Stenbacka, a developer with a passion for creating applications that are not only functional but also visually appealing. I have experience in both frontend and backend development, with a slightly stronger focus on frontend technologies. I enjoy working with React, React Native, TypeScript, and TailwindCSS, but I also work with Python, Unity, and Java. In my free time, I like exploring new technologies and building personal projects to improve my skills. I also enjoy making games and working with data to create interesting visualizations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "React Native", "TypeScript", "TailwindCSS", "Python", "Unity", "Java", "C++", "Docker", "Git", "WindowsPS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Background */}
          <div className="grid gap-8 rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur dark:bg-gray-800/80 dark:ring-white/10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Background and experience
              </h2>
              <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                I have studied information technology at Arcada UAS with a focus on software development. My studies gave me a strong foundation in programming principles and web development. I have completed courses with high marks and worked on several projects that strengthened my technical and problem-solving skills.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 shadow-inner dark:bg-gray-900">
              <img
                src={studyRec}
                alt="Study Record"
                className="w-full rounded-lg object-cover shadow-md"
              />
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                A snapshot of my academic grades.
              </p>
            </div>
          </div>

          {/* Current projects */}
          <div className="rounded-2xl bg-white/80 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur dark:bg-gray-800/80 dark:ring-white/10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Current projects
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
              Currently, I am working on a collaboration project with a friend where we are building a mobile app for disc golf. The app is built using React Native, TypeScript, and TailwindCSS. It helps users find disc golf courses, track scores, and connect with other players. My main role is lead frontend developer, but I also contribute to planning and overall product design. I also created the website for the project. The app is still in its early stages, but we are excited about its potential for the disc golf community. In addition to this project, I am also working on a few smaller personal projects to explore new technologies and improve my skills. One of these projects is a data visualization tool built with Python that allows users to create interactive charts and graphs from their data. I enjoy experimenting with different ideas and technologies in my free time, as it helps me grow as a developer and keeps me motivated to learn more.
            </p>
            <NavLink to="/projects" className="mt-4 inline-block rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              View some of my projects
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}