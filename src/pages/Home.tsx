export default function Home() {
  return (
    <div className="max-w-full px-6 py-4 flex bg-indigo-100 dark:bg-gray-900 transition-colors duration-300 min-h-screen justify-center flex-col">
      <div className="flex flex-col justify-center items-center">
        <p className="text-black dark:text-white text-5xl font-semibold m-2">
          Oliver Stenbacka
        </p>
        <p className="text-blue-500 dark:text-blue-500 text-md bg-violet-300 dark:bg-gray-950 p-2 rounded-3xl max-w-max ">
          Frontend-focused full-stack developer
        </p>
      </div>
      <div></div>
    </div>
  );
}
