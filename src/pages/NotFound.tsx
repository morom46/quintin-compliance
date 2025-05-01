
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-slate-800">404</h1>
        <p className="text-2xl text-slate-600 mb-8">Oops! Page not found</p>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.
        </p>
        <Link
          to="/"
          className="bg-slate-700 text-white hover:bg-slate-800 px-6 py-3 rounded-md font-medium inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
