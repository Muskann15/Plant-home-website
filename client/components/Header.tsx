import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User, Heart } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Plant Care", href: "/care" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50">
      <nav className="container-wide py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">PlantHome</span>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-sage-600 rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 16L8.5 19.5L12 20L8.5 20.5L8 24L7.5 20.5L4 20L7.5 19.5L8 16Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M16 16L16.5 19.5L20 20L16.5 20.5L16 24L15.5 20.5L12 20L15.5 19.5L16 16Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-display font-semibold text-forest-700">
                  PlantHome
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-forest-700 hover:bg-sage-50"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium leading-6 transition-colors relative ${
                  isActive(item.href)
                    ? "text-forest-600"
                    : "text-forest-700 hover:text-forest-600"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sage-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:space-x-4">
            <button className="rounded-full p-2 text-forest-700 hover:bg-sage-50 hover:text-forest-600 transition-colors">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="rounded-full p-2 text-forest-700 hover:bg-sage-50 hover:text-forest-600 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </button>
            <button className="rounded-full p-2 text-forest-700 hover:bg-sage-50 hover:text-forest-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            <button className="rounded-full p-2 text-forest-700 hover:bg-sage-50 hover:text-forest-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-terracotta-500 text-xs text-white flex items-center justify-center font-medium">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-sage-200">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">PlantHome</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-sage-600 rounded-lg flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                        <path
                          d="M8 16L8.5 19.5L12 20L8.5 20.5L8 24L7.5 20.5L4 20L7.5 19.5L8 16Z"
                          fill="currentColor"
                          opacity="0.7"
                        />
                        <path
                          d="M16 16L16.5 19.5L20 20L16.5 20.5L16 24L15.5 20.5L12 20L15.5 19.5L16 16Z"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-display font-semibold text-forest-700">
                      PlantHome
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-forest-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-sage-200">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors ${
                          isActive(item.href)
                            ? "bg-sage-50 text-forest-600"
                            : "text-forest-700 hover:bg-sage-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-forest-700">
                        Quick Actions
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <button className="flex flex-col items-center space-y-1 rounded-lg p-3 hover:bg-sage-50 transition-colors">
                        <Search className="h-5 w-5 text-forest-600" />
                        <span className="text-xs text-forest-600">Search</span>
                      </button>
                      <button className="flex flex-col items-center space-y-1 rounded-lg p-3 hover:bg-sage-50 transition-colors">
                        <Heart className="h-5 w-5 text-forest-600" />
                        <span className="text-xs text-forest-600">
                          Wishlist
                        </span>
                      </button>
                      <button className="flex flex-col items-center space-y-1 rounded-lg p-3 hover:bg-sage-50 transition-colors">
                        <User className="h-5 w-5 text-forest-600" />
                        <span className="text-xs text-forest-600">Account</span>
                      </button>
                      <button className="flex flex-col items-center space-y-1 rounded-lg p-3 hover:bg-sage-50 transition-colors relative">
                        <ShoppingBag className="h-5 w-5 text-forest-600" />
                        <span className="text-xs text-forest-600">Cart</span>
                        <span className="absolute top-1 right-2 h-3 w-3 rounded-full bg-terracotta-500 text-xs text-white flex items-center justify-center font-medium">
                          3
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
