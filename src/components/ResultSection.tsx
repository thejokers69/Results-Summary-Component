import "../styles/global.css";
interface ResultSectionProps {
  averageScore: number;
}

const ResultSection = ({ averageScore }: ResultSectionProps) => {
  return (
    <div className="bg-gradient-to-b from-purple-600 to-blue-500 p-8 text-center rounded-3xl md:w-1/2">
      <h2 className="text-white text-lg font-medium mb-4">Your Result</h2>
      <div className="bg-gradient-to-b from-violet-600 to-blue-400 rounded-full w-32 h-32 mx-auto flex flex-col items-center justify-center mb-6">
        <span className="text-white text-5xl font-bold">{averageScore}</span>
        <span className="text-white text-sm">of 100</span>
      </div>
      <h3 className="text-white text-2xl font-bold mb-2">Great</h3>
      <p className="text-white text-sm">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default ResultSection;
