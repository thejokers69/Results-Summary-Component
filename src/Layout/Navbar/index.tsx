import ThemeToggle from "../../components/Toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">
        Results Summary Component
      </h1>
      <ThemeToggle />
    </nav>
  );
}
