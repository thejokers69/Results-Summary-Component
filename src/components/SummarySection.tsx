import { twMerge } from "tailwind-merge";

interface SummarySectionProps {
  categories: { category: string; score: number; icon: string }[];
  onContinue: () => void;
}

const SummarySection = ({ categories, onContinue }: SummarySectionProps) => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Reaction":
        return "bg-light-red/10 text-light-red";
      case "Memory":
        return "bg-orangey-yellow/10 text-orangey-yellow";
      case "Verbal":
        return "bg-green-teal/10 text-green-teal";
      case "Visual":
        return "bg-cobalt-blue/10 text-cobalt-blue";
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
