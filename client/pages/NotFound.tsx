import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BackButton } from "../components/BackButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-25">
      <BackButton showHomeIcon={true} />
      <div className="text-center max-w-md px-4">
        <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🌱</span>
        </div>
        <h1 className="text-6xl font-display font-bold text-forest-700 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-display font-semibold text-forest-700 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-forest-600 mb-8">
          This page seems to have wandered off like a plant looking for
          sunlight. Let's get you back to our garden of content!
        </p>
        <a
          href="/"
          className="inline-flex items-center bg-sage-500 hover:bg-sage-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
