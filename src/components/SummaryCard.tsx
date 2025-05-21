import { twMerge } from "tailwind-merge";
import ResultSection from "./ResultSection";
import SummarySection from "./SummarySection";

interface SummaryCardProps {
  averageScore: number;
  categories: { category: string; score: number; icon: string }[];
  onContinue: () => void;
}

const SummaryCard = ({
  averageScore,
  categories,
  onContinue,
}: SummaryCardProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row rounded-3xl shadow-lg max-w-md md:max-w-3xl bg-white overflow-hidden transition-transform transform hover:scale-105"
      )}
    >
      <ResultSection averageScore={averageScore} />
      <SummarySection categories={categories} onContinue={onContinue} />
    </div>
  );
};

export default SummaryCard;
