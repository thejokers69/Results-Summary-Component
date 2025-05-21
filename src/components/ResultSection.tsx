interface ResultSectionProps {
  averageScore: number;
}

const ResultSection = ({ averageScore }: ResultSectionProps) => {
  return (
    <div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-8 text-center rounded-3xl md:w-1/2">
      <h2 className="text-light-lavender text-lg font-medium mb-4">
        Your Result
      </h2>
      <div className="bg-gradient-to-b from-violet-blue to-persian-blue rounded-full w-32 h-32 mx-auto flex flex-col items-center justify-center mb-6">
        <span className="text-white text-5xl font-bold">{averageScore}</span>
        <span className="text-light-lavender text-sm">of 100</span>
      </div>
      <h3 className="text-white text-2xl font-bold mb-2">Great</h3>
      <p className="text-light-lavender text-sm">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default ResultSection;
