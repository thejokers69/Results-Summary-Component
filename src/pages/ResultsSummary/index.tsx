import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryCard from "../../components/SummaryCard";
import "../../styles/global.css";

interface Category {
  category: string;
  score: number;
  icon: string;
}

const ResultsSummary = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    import("../../data.json")
      .then((data) => {
        console.log("Data loaded:", data.default);
        setCategories(data.default as Category[]);
      })
      .catch((err) => {
        console.error("Failed to load data.json:", err);
        setError("Failed to load data. Please try again later.");
      });
  }, []);

  const averageScore = categories.length
    ? Math.round(
        categories.reduce((sum, cat) => sum + cat.score, 0) / categories.length
      )
    : 0;

  const handleContinue = () => {
    navigate("/error");
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!categories.length) {
    return (
      <div className="text-center p-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-pale-blue flex items-center justify-center p-8">
      <SummaryCard
        averageScore={averageScore}
        categories={categories}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default ResultsSummary;
