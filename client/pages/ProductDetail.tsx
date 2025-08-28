import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Share2,
  Star,
  Plus,
  Minus,
  ShoppingBag,
  Truck,
  Shield,
  Leaf,
  Sun,
  Droplets,
  Thermometer,
  CheckCircle,
  Info,
  MessageCircle,
} from "lucide-react";
import { BackButton } from "../components/BackButton";

// Sample product data - in a real app, this would come from an API
const products = {
  1: {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 7399,
    originalPrice: 9999,
    images: [
      "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
      "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    ],
    rating: 4.8,
    reviews: 124,
    category: "Indoor Plants",
    description:
      "The Fiddle Leaf Fig is a stunning statement plant that brings elegance and sophistication to any space. With its large, violin-shaped leaves and impressive height, this plant is perfect for filling empty corners and creating a tropical ambiance in your home.",
    inStock: true,
    stockCount: 15,
    size: "Large (4-5 feet)",
    difficulty: "Medium",
    lightRequirement: "Bright Indirect Light",
    wateringFrequency: "Weekly",
    petSafe: false,
    features: [
      "Air purifying properties",
      "Instagram-worthy statement piece",
      "Grows up to 6 feet indoors",
      "Perfect for modern homes",
      "Low maintenance once established",
    ],
    careInstructions: {
      light:
        "Place in bright, indirect light near a window. Avoid direct sunlight which can burn the leaves.",
      water:
        "Water when the top 1-2 inches of soil are dry. Typically once per week.",
      humidity:
        "Prefers 40-60% humidity. Mist occasionally or use a humidifier.",
      temperature: "Thrives in temperatures between 60-75°F (15-24°C).",
      fertilizer:
        "Feed monthly during spring and summer with liquid fertilizer.",
    },
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      careCard: true,
      guarantee: "30-day plant health guarantee",
    },
  },
  2: {
    id: 2,
    name: "Modern Succulent Collection",
    price: 3749,
    originalPrice: 4999,
    images: [
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
      "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    ],
    rating: 4.9,
    reviews: 89,
    category: "Succulents",
    description:
      "A carefully curated collection of beautiful succulents in modern ceramic pots. Perfect for beginners or anyone looking to add low-maintenance greenery to their space.",
    inStock: true,
    stockCount: 8,
    size: "Small Collection (3 plants)",
    difficulty: "Easy",
    lightRequirement: "Bright Light",
    wateringFrequency: "Bi-weekly",
    petSafe: true,
    features: [
      "Set of 3 different succulents",
      "Modern ceramic pots included",
      "Perfect for beginners",
      "Low water requirements",
      "Pet-friendly plants",
    ],
    careInstructions: {
      light: "Bright, direct sunlight for at least 6 hours daily.",
      water:
        "Water deeply but infrequently, allowing soil to dry completely between waterings.",
      humidity:
        "Low humidity requirements, perfect for dry indoor environments.",
      temperature:
        "Comfortable in normal room temperatures, 65-80°F (18-27°C).",
      fertilizer:
        "Fertilize sparingly, once every 3-4 months during growing season.",
    },
    shipping: {
      freeShipping: false,
      estimatedDelivery: "2-4 business days",
      careCard: true,
      guarantee: "30-day plant health guarantee",
    },
  },
};

const relatedProducts = [
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 5399,
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Snake Plant",
    price: 2899,
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 4299,
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    rating: 4.6,
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorited, setIsFavorited] = useState(false);

  const product = products[parseInt(id || "1") as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-semibold text-forest-700 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    if (quantity < product.stockCount) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const savings = product.originalPrice
    ? product.originalPrice - product.price
    : 0;
  const savingsPercentage = product.originalPrice
    ? Math.round((savings / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-sage-25">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-sage-200">
        <div className="container-wide py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-sage-600 hover:text-sage-700">
              Home
            </Link>
            <span className="text-sage-400">/</span>
            <Link to="/shop" className="text-sage-600 hover:text-sage-700">
              Shop
            </Link>
            <span className="text-sage-400">/</span>
            <span className="text-forest-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="container-wide py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-3xl overflow-hidden mb-6 bg-white shadow-soft">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-sage-500"
                        : "border-sage-200 hover:border-sage-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <BackButton to="/shop" label="Back to Shop" />

            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 bg-sage-100 text-sage-700 text-sm font-medium rounded-lg">
                {product.category}
              </span>
              {product.inStock ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-lg">
                  In Stock ({product.stockCount} available)
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-lg">
                  Out of Stock
                </span>
              )}
            </div>

            <h1 className="text-3xl lg:text-4xl font-display font-bold text-forest-800 mb-4">
              {product.name}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-forest-600 font-medium">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-end space-x-3 mb-2">
                <span className="text-4xl font-bold text-forest-700">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <p className="text-sage-600">
                  You save ₹{savings.toLocaleString("en-IN")} (
                  {savingsPercentage}% off)
                </p>
              )}
            </div>

            <p className="text-forest-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Plant Properties */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Sun className="w-4 h-4 text-sage-500" />
                  <span className="text-sm font-medium text-forest-700">
                    Light
                  </span>
                </div>
                <span className="text-forest-600 text-sm">
                  {product.lightRequirement}
                </span>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Droplets className="w-4 h-4 text-sage-500" />
                  <span className="text-sm font-medium text-forest-700">
                    Water
                  </span>
                </div>
                <span className="text-forest-600 text-sm">
                  {product.wateringFrequency}
                </span>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Leaf className="w-4 h-4 text-sage-500" />
                  <span className="text-sm font-medium text-forest-700">
                    Care Level
                  </span>
                </div>
                <span className="text-forest-600 text-sm">
                  {product.difficulty}
                </span>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Info className="w-4 h-4 text-sage-500" />
                  <span className="text-sm font-medium text-forest-700">
                    Size
                  </span>
                </div>
                <span className="text-forest-600 text-sm">{product.size}</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-forest-700 font-medium">Quantity:</span>
                <div className="flex items-center border border-sage-200 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-sage-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stockCount}
                    className="p-2 hover:bg-sage-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 rounded-xl font-semibold transition-colors ${
                    product.inStock
                      ? "bg-sage-500 hover:bg-sage-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`p-4 rounded-xl border-2 transition-colors ${
                    isFavorited
                      ? "border-red-300 bg-red-50 text-red-600"
                      : "border-sage-200 hover:border-sage-300 text-sage-600"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
                  />
                </button>
                <button className="p-4 rounded-xl border-2 border-sage-200 hover:border-sage-300 text-sage-600">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-display font-semibold text-forest-700 mb-4 flex items-center">
                <Truck className="w-5 h-5 mr-2" />
                Shipping & Guarantee
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-forest-600">
                    {product.shipping.freeShipping
                      ? "Free shipping on this item"
                      : "Standard shipping rates apply"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-forest-600">
                    Estimated delivery: {product.shipping.estimatedDelivery}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-forest-600">
                    {product.shipping.guarantee}
                  </span>
                </div>
                {product.shipping.careCard && (
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-forest-600">
                      Free care card included
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-sage-200 mb-8">
            <nav className="flex space-x-8">
              {[
                { id: "description", label: "Description" },
                { id: "care", label: "Care Instructions" },
                { id: "reviews", label: `Reviews (${product.reviews})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-sage-500 text-sage-600"
                      : "border-transparent text-forest-600 hover:text-sage-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === "description" && (
            <div className="max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-4">
                    About This Plant
                  </h3>
                  <p className="text-forest-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-forest-600">
                        Pet Safe: {product.petSafe ? "Yes" : "No"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-forest-600">
                        Difficulty: {product.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span className="text-forest-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "care" && (
            <div className="max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(product.careInstructions).map(
                  ([key, instruction]) => (
                    <div key={key} className="bg-white rounded-xl p-6">
                      <h3 className="text-lg font-display font-semibold text-forest-700 mb-3 capitalize flex items-center">
                        {key === "light" && (
                          <Sun className="w-5 h-5 mr-2 text-sage-500" />
                        )}
                        {key === "water" && (
                          <Droplets className="w-5 h-5 mr-2 text-sage-500" />
                        )}
                        {key === "humidity" && (
                          <Thermometer className="w-5 h-5 mr-2 text-sage-500" />
                        )}
                        {key === "temperature" && (
                          <Thermometer className="w-5 h-5 mr-2 text-sage-500" />
                        )}
                        {key === "fertilizer" && (
                          <Leaf className="w-5 h-5 mr-2 text-sage-500" />
                        )}
                        {key}
                      </h3>
                      <p className="text-forest-600 leading-relaxed">
                        {instruction}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="max-w-4xl">
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-sage-400 mx-auto mb-4" />
                <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                  Reviews Coming Soon
                </h3>
                <p className="text-forest-600">
                  Customer reviews will be displayed here. Be the first to
                  review this plant!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-display font-bold text-forest-800 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/shop/product/${relatedProduct.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-4-3 overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-forest-700 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-forest-700">
                      ₹{relatedProduct.price.toLocaleString("en-IN")}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-forest-600 text-sm">
                        {relatedProduct.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
