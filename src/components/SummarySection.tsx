import { twMerge } from "tailwind-merge";
import "../styles/global.css";

interface SummarySectionProps {
  categories: { category: string; score: number; icon: string }[];
  onContinue: () => void;
}

const SummarySection = ({ categories, onContinue }: SummarySectionProps) => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Reaction":
        return "bg-red-200 text-red-600";
      case "Memory":
        return "bg-yellow-200 text-yellow-600";
      case "Verbal":
        return "bg-green-200 text-green-600";
      case "Visual":
        return "bg-blue-200 text-blue-600";
      default:
        return "";
    }
  };

  return (
    <div className="p-8 md:w-1/2">
      <h2 className="text-dark-gray-blue text-lg font-bold mb-6">Summary</h2>
      <div className="space-y-4 mb-6">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className={twMerge(
              "flex items-center justify-between p-4 rounded-lg transition-colors",
              getCategoryStyles(cat.category)
            )}
          >
            <div className="flex items-center">
              <img
                src={cat.icon}
                alt={`${cat.category} icon`}
                className="w-5 h-5 mr-3"
                onError={(e) => {
                  console.error(`Failed to load image: ${cat.icon}`);
                  (e.target as HTMLImageElement).src =
                    "./assets/images/icon-reaction.svg";
                }}
              />
              <span className="font-medium">{cat.category}</span>
            </div>
            <div>
              <span className="font-bold text-dark-gray-blue">{cat.score}</span>
              <span className="text-dark-gray-blue/50"> / 100</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onContinue}
        className="w-full bg-dark-gray-blue text-white py-3 rounded-full hover:bg-cobalt-blue focus:ring-2 focus:ring-cobalt-blue transition"
      >
        Continue
      </button>
    </div>
  );
};

export default SummarySection;
