import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <nav className="w-full bg-violet-300 dark:bg-gray-950 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          My Portfolio
        </h1>

        <div className="flex items-center gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/Projects", label: "Projects" },
            { path: "/About", label: "About" },
            { path: "/Contact", label: "Contact" },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition ${
                  isActive
                    ? "font-semibold border-b-2 border-blue-500 pb-1"
                    : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:scale-105 transition-transform"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
