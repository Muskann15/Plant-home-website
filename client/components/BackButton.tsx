import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

interface BackButtonProps {
  to?: string;
  label?: string;
  showHomeIcon?: boolean;
  className?: string;
}

export function BackButton({
  to,
  label = "Back",
  showHomeIcon = false,
  className = "",
}: BackButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the back destination based on current path
  const getBackDestination = () => {
    if (to) return to;

    const path = location.pathname;

    // Product detail pages go back to shop
    if (path.startsWith("/shop/product/")) return "/shop";

    // Shop sub-pages go back to main shop
    if (path.startsWith("/shop/") && path !== "/shop") return "/shop";

    // All other pages go back to home
    return "/";
  };

  const getBackLabel = () => {
    if (label !== "Back") return label;

    const path = location.pathname;

    if (path.startsWith("/shop/product/")) return "Back to Shop";
    if (path.startsWith("/shop/") && path !== "/shop") return "Back to Shop";
    if (path === "/shop") return "Back to Home";
    if (path === "/care") return "Back to Home";
    if (path === "/about") return "Back to Home";
    if (path === "/contact") return "Back to Home";

    return "Back";
  };

  const handleClick = () => {
    const destination = getBackDestination();
    navigate(destination);
  };

  // Don't show back button on homepage
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={handleClick}
      className={`
        fixed top-20 left-4 z-50
        flex items-center space-x-2
        bg-white/95 backdrop-blur-sm
        hover:bg-white
        border border-sage-200
        rounded-xl px-3 py-2
        shadow-lg hover:shadow-xl
        transition-all duration-200
        text-forest-700 hover:text-forest-800
        text-sm font-medium
        sm:top-24 sm:left-6 sm:px-4 sm:py-3
        md:top-28 md:left-8
        lg:relative lg:top-0 lg:left-0 lg:mb-6
        lg:bg-transparent lg:border-0 lg:shadow-none
        lg:hover:bg-sage-50 lg:px-4 lg:py-3
        lg:text-base
        ${className}
      `}
    >
      {showHomeIcon && location.pathname !== "/shop" ? (
        <Home className="w-4 h-4 sm:w-5 sm:h-5" />
      ) : (
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
      <span className="hidden sm:inline lg:inline">{getBackLabel()}</span>
    </button>
  );
}
