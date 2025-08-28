import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Grid3x3,
  List,
  Star,
  Heart,
  ShoppingBag,
  ChevronDown,
  X,
} from "lucide-react";
import { BackButton } from "../components/BackButton";

const categories = [
  { id: "all", name: "All Plants", count: 24 },
  { id: "indoor", name: "Indoor Plants", count: 12 },
  { id: "outdoor", name: "Outdoor Plants", count: 8 },
  { id: "succulents", name: "Succulents", count: 6 },
  { id: "flowering", name: "Flowering Plants", count: 4 },
  { id: "herbs", name: "Herbs & Edibles", count: 3 },
];

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "name", name: "Name A-Z" },
  { id: "rating", name: "Customer Rating" },
  { id: "newest", name: "Newest Arrivals" },
];

const products = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 7399,
    originalPrice: 9999,
    category: "indoor",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    rating: 4.8,
    reviews: 124,
    tag: "Bestseller",
    description: "Perfect statement plant for your living room",
    inStock: true,
    difficulty: "Medium",
    lightRequirement: "Bright Indirect",
    size: "Large",
  },
  {
    id: 2,
    name: "Modern Succulent Collection",
    price: 3749,
    originalPrice: 4999,
    category: "succulents",
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    rating: 4.9,
    reviews: 89,
    tag: "New",
    description: "Low-maintenance beauties for any space",
    inStock: true,
    difficulty: "Easy",
    lightRequirement: "Bright Light",
    size: "Small",
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 5399,
    originalPrice: null,
    category: "indoor",
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    rating: 4.7,
    reviews: 156,
    tag: "Popular",
    description: "Instagram-worthy plant with stunning leaves",
    inStock: true,
    difficulty: "Easy",
    lightRequirement: "Medium Light",
    size: "Medium",
  },
  {
    id: 4,
    name: "Snake Plant",
    price: 2899,
    originalPrice: 3749,
    category: "indoor",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    rating: 4.9,
    reviews: 203,
    tag: "Easy Care",
    description: "Perfect for beginners and low-light spaces",
    inStock: true,
    difficulty: "Easy",
    lightRequirement: "Low Light",
    size: "Medium",
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 4299,
    originalPrice: null,
    category: "flowering",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    rating: 4.6,
    reviews: 78,
    tag: "Air Purifier",
    description: "Beautiful flowering plant that cleans air",
    inStock: true,
    difficulty: "Medium",
    lightRequirement: "Medium Light",
    size: "Medium",
  },
  {
    id: 6,
    name: "Rubber Plant",
    price: 3999,
    originalPrice: null,
    category: "indoor",
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    rating: 4.8,
    reviews: 92,
    tag: null,
    description: "Glossy leaves and easy care requirements",
    inStock: true,
    difficulty: "Easy",
    lightRequirement: "Bright Indirect",
    size: "Large",
  },
  {
    id: 7,
    name: "Spider Plant",
    price: 1999,
    originalPrice: 2499,
    category: "indoor",
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    rating: 4.7,
    reviews: 145,
    tag: "Pet Safe",
    description: "Safe for pets and produces baby plants",
    inStock: true,
    difficulty: "Easy",
    lightRequirement: "Medium Light",
    size: "Small",
  },
  {
    id: 8,
    name: "Aloe Vera",
    price: 1799,
    originalPrice: null,
    category: "succulents",
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    rating: 4.9,
    reviews: 167,
    tag: "Medicinal",
    description: "Healing properties and easy maintenance",
    inStock: false,
    difficulty: "Easy",
    lightRequirement: "Bright Light",
    size: "Small",
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [selectedLightRequirement, setSelectedLightRequirement] = useState<
    string[]
  >([]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory)
        return false;

      // Search filter
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1])
        return false;

      // Difficulty filter
      if (
        selectedDifficulty.length > 0 &&
        !selectedDifficulty.includes(product.difficulty)
      )
        return false;

      // Light requirement filter
      if (
        selectedLightRequirement.length > 0 &&
        !selectedLightRequirement.includes(product.lightRequirement)
      )
        return false;

      return true;
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for featured
        break;
    }

    return filtered;
  }, [
    selectedCategory,
    sortBy,
    searchQuery,
    priceRange,
    selectedDifficulty,
    selectedLightRequirement,
  ]);

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulty((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty],
    );
  };

  const toggleLightRequirement = (light: string) => {
    setSelectedLightRequirement((prev) =>
      prev.includes(light) ? prev.filter((l) => l !== light) : [...prev, light],
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setPriceRange([0, 10000]);
    setSelectedDifficulty([]);
    setSelectedLightRequirement([]);
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-sage-25">
      {/* Header */}
      <div className="bg-white border-b border-sage-200">
        <div className="container-wide py-8">
          <BackButton showHomeIcon={true} />
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Shop Plants
            </h1>
            <p className="text-xl text-forest-600 max-w-2xl mx-auto">
              Discover our carefully curated collection of premium plants,
              perfect for every space and skill level.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display font-semibold text-forest-700">
                  Filters
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-sage-600 hover:text-sage-700 underline"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-forest-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sage-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search plants..."
                    className="w-full pl-10 pr-4 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-forest-700 mb-3">
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-sage-100 text-sage-700 font-medium"
                          : "text-forest-600 hover:bg-sage-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs text-sage-500">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-forest-700 mb-3">
                  Price Range
                </h4>
                <div className="px-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-sage-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-sage-600 mt-2">
                    <span>₹0</span>
                    <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Difficulty */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-forest-700 mb-3">
                  Care Difficulty
                </h4>
                <div className="space-y-2">
                  {["Easy", "Medium", "Hard"].map((difficulty) => (
                    <label key={difficulty} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedDifficulty.includes(difficulty)}
                        onChange={() => toggleDifficulty(difficulty)}
                        className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                      />
                      <span className="ml-2 text-sm text-forest-600">
                        {difficulty}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Light Requirements */}
              <div>
                <h4 className="text-sm font-medium text-forest-700 mb-3">
                  Light Requirements
                </h4>
                <div className="space-y-2">
                  {[
                    "Low Light",
                    "Medium Light",
                    "Bright Light",
                    "Bright Indirect",
                  ].map((light) => (
                    <label key={light} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedLightRequirement.includes(light)}
                        onChange={() => toggleLightRequirement(light)}
                        className="rounded border-sage-300 text-sage-600 focus:ring-sage-500"
                      />
                      <span className="ml-2 text-sm text-forest-600">
                        {light}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 mt-8 lg:mt-0">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-sm text-forest-600">
                  {filteredAndSortedProducts.length} products found
                </span>
                {(searchQuery ||
                  selectedCategory !== "all" ||
                  selectedDifficulty.length > 0 ||
                  selectedLightRequirement.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-sage-600 hover:text-sage-700 underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-sage-200 rounded-lg pl-3 pr-8 py-2 text-sm focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sage-400 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex border border-sage-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-sage-100 text-sage-700" : "text-sage-400 hover:text-sage-600"}`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-sage-100 text-sage-700" : "text-sage-400 hover:text-sage-600"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredAndSortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 ${
                    viewMode === "grid" ? "hover:-translate-y-1" : ""
                  }`}
                >
                  {viewMode === "grid" ? (
                    // Grid View
                    <>
                      <div className="relative">
                        <div className="aspect-4-3 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute top-4 left-4 flex space-x-2">
                          {product.tag && (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                product.tag === "Bestseller"
                                  ? "bg-terracotta-500 text-white"
                                  : product.tag === "New"
                                    ? "bg-sage-500 text-white"
                                    : product.tag === "Popular"
                                      ? "bg-forest-500 text-white"
                                      : "bg-sand-500 text-white"
                              }`}
                            >
                              {product.tag}
                            </span>
                          )}
                          {!product.inStock && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-500 text-white">
                              Out of Stock
                            </span>
                          )}
                        </div>
                        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="w-5 h-5 text-forest-600" />
                        </button>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? "text-amber-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-forest-600 ml-2">
                            ({product.reviews})
                          </span>
                        </div>

                        <h3 className="text-lg font-display font-semibold text-forest-700 mb-1">
                          <Link
                            to={`/shop/product/${product.id}`}
                            className="hover:text-sage-600 transition-colors"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-forest-600 mb-2">
                          {product.description}
                        </p>

                        <div className="flex items-center space-x-2 text-xs text-sage-600 mb-4">
                          <span className="bg-sage-100 px-2 py-1 rounded">
                            {product.difficulty}
                          </span>
                          <span className="bg-sage-100 px-2 py-1 rounded">
                            {product.lightRequirement}
                          </span>
                          <span className="bg-sage-100 px-2 py-1 rounded">
                            {product.size}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-forest-700">
                              ₹{product.price.toLocaleString("en-IN")}
                            </span>
                            {product.originalPrice && (
                              <span className="text-lg text-muted-foreground line-through">
                                ₹{product.originalPrice.toLocaleString("en-IN")}
                              </span>
                            )}
                          </div>
                          <button
                            disabled={!product.inStock}
                            className={`p-2 rounded-xl transition-colors ${
                              product.inStock
                                ? "bg-sage-500 hover:bg-sage-600 text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            <ShoppingBag className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <div className="flex p-6">
                      <div className="w-32 h-32 flex-shrink-0 mr-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-display font-semibold text-forest-700 mb-1">
                              <Link
                                to={`/shop/product/${product.id}`}
                                className="hover:text-sage-600 transition-colors"
                              >
                                {product.name}
                              </Link>
                            </h3>
                            <p className="text-forest-600 mb-2">
                              {product.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-sage-600">
                              <span>{product.difficulty} Care</span>
                              <span>{product.lightRequirement}</span>
                              <span>{product.size} Size</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-2xl font-bold text-forest-700">
                                ₹{product.price.toLocaleString("en-IN")}
                              </span>
                              {product.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through">
                                  ₹
                                  {product.originalPrice.toLocaleString(
                                    "en-IN",
                                  )}
                                </span>
                              )}
                            </div>
                            <button
                              disabled={!product.inStock}
                              className={`px-6 py-2 rounded-xl transition-colors ${
                                product.inStock
                                  ? "bg-sage-500 hover:bg-sage-600 text-white"
                                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                              }`}
                            >
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? "text-amber-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-sm text-forest-600 ml-2">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                          <button className="text-sage-600 hover:text-sage-700">
                            <Heart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto bg-sage-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-12 h-12 text-sage-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                  No plants found
                </h3>
                <p className="text-forest-600 mb-4">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
