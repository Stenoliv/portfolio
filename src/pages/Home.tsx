import pfp from "../assets/images/profilepic.jpg";

export default function Home() {
  return (
    <section className="min-h-screen bg-linear-to-b from-indigo-300 to-white px-6 py-12 dark:from-gray-950 dark:to-gray-800 transition-colors duration-300">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-800/80 dark:ring-white/10 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <img
                src={pfp}
                alt="Profile"
                className="h-52 w-52 rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-gray-700 sm:h-64 sm:w-64"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-indigo-300/40 dark:ring-indigo-400/20" />
            </div>

            <p className="mb-3 inline-block rounded-full bg-indigo-600/10 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
              Frontend-focused full-stack developer
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Oliver Stenbacka
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              I build modern, user-friendly applications with a strong focus on
              frontend development, thoughtful design, and clean user
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["React", "TypeScript", "TailwindCSS", "React Native", "Python", "Unity", "Java", "Git"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}