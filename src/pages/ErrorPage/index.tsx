import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center from-slate-800 to-slate-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section - Error Score */}
        <div className="bg-gradient-to-b from-indigo-700 to-indigo-500 p-8 text-center md:w-1/2 rounded-3xl">
          <h2 className="text-white text-lg mb-6">Error Result</h2>
          <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 rounded-full w-32 h-32 mx-auto flex flex-col items-center justify-center mb-6">
            <span className="text-white text-5xl font-bold">404</span>
            <span className="text-indigo-200 text-sm">error</span>
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">Oops!</h3>
          <p className="text-indigo-200 text-sm">
            Something went wrong while processing your request.
          </p>
        </div>

        {/* Right Section - Error Details */}
        <div className="p-8 md:w-1/2">
          <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-6">
            Error Details
          </h3>
          <div className="space-y-4">
            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-red-500 dark:text-red-400">⚠️</span>
                <span className="ml-2 text-red-700 dark:text-red-300">
                  Page Not Found
                </span>
              </div>
              <span className="text-red-700 dark:text-red-300">404</span>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-orange-500 dark:text-orange-400">⚡</span>
                <span className="ml-2 text-orange-700 dark:text-orange-300">
                  Server Error
                </span>
              </div>
              <span className="text-orange-700 dark:text-orange-300">500</span>
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="w-full mt-6 bg-gray-800 dark:bg-gray-700 text-white py-4 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
