import React, { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext/use-theme";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {theme === "light" ? (
          <span className="text-yellow-500">☀️</span>
        ) : theme === "dark" ? (
          <span className="text-indigo-300">🌙</span>
        ) : (
          <span className="text-gray-500">⚙️</span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <button
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-2">☀️</span> Light
          </button>
          <button
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-2">🌙</span> Dark
          </button>
          <button
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="mr-2">⚙️</span> System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
