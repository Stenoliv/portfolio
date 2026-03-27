export default function Contact() {
  return (
    <section className="min-h-screen bg-linear-to-b from-indigo-300 to-white px-6 py-12 dark:from-gray-950 dark:to-gray-800 transition-colors duration-300">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-gray-800/80 dark:ring-white/10 sm:p-12">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-block rounded-full bg-indigo-600/10 px-4 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300">
              Get in touch
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Me
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations, opportunities, or questions.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <a
                  href="mailto:stenbacka15@email.com"
                  className="text-lg font-medium text-indigo-600 dark:text-indigo-400"
                >
                  stenbacka15@email.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                <a
                  href="https://github.com/Stenoliv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-indigo-600 dark:text-indigo-400"
                >
                  github.com/Stenoliv
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/oliver-stenbacka-a0811b263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-indigo-600 dark:text-indigo-400"
                >
                  linkedin.com/in/Oliver-Stenbacka
                </a>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mreobwdl"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your message"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}