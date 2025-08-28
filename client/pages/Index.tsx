import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Truck,
  ShieldCheck,
  Leaf,
  Heart,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { useState } from "react";

const featuredProducts = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 7399,
    originalPrice: 9999,
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    rating: 4.8,
    reviews: 124,
    tag: "Bestseller",
    description: "Perfect statement plant for your living room",
  },
  {
    id: 2,
    name: "Modern Succulent Collection",
    price: 3749,
    originalPrice: 4999,
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    rating: 4.9,
    reviews: 89,
    tag: "New",
    description: "Low-maintenance beauties for any space",
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 5399,
    originalPrice: null,
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    rating: 4.7,
    reviews: 156,
    tag: "Popular",
    description: "Instagram-worthy plant with stunning leaves",
  },
  {
    id: 4,
    name: "Snake Plant",
    price: 2899,
    originalPrice: 3749,
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    rating: 4.9,
    reviews: 203,
    tag: "Easy Care",
    description: "Perfect for beginners and low-light spaces",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Plant Parent",
    content:
      "PlantHome transformed my apartment into a green oasis! The plant quality is exceptional and their care guides are so helpful.",
    rating: 5,
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Interior Designer",
    content:
      "I recommend PlantHome to all my clients. Their plants are healthy, beautiful, and arrive perfectly packaged every time.",
    rating: 5,
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Apartment Dweller",
    content:
      "Finally found a plant shop that understands small spaces! Their consultation helped me choose the perfect plants.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
  },
];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage-50 via-sand-50 to-sage-100 py-20 lg:py-28">
        <div className="container-wide">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-sage-100 text-sage-700 border border-sage-200">
                  <Leaf className="w-4 h-4 mr-2" />
                  Free shipping on orders over ₹4,000
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-bold text-forest-800 leading-tight mb-6">
                Bring Nature
                <span className="text-gradient block">Indoors</span>
              </h1>

              <p className="text-xl text-forest-600 mb-8 leading-relaxed">
                Transform your space with our curated collection of premium
                plants. Expert care guidance included with every purchase.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 bg-forest-600 text-white font-semibold rounded-xl hover:bg-forest-700 transition-colors shadow-lg"
                >
                  Shop Plants
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/care"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-forest-600 font-semibold rounded-xl border-2 border-forest-600 hover:bg-forest-50 transition-colors"
                >
                  Plant Care Guide
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-forest-700">
                    2K+
                  </div>
                  <div className="text-sm text-forest-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-forest-700">
                    500+
                  </div>
                  <div className="text-sm text-forest-600">Plant Varieties</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-forest-700">
                    99%
                  </div>
                  <div className="text-sm text-forest-600">Survival Rate</div>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 relative">
              <div className="relative aspect-4-3 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg"
                  alt="Beautiful indoor plants in a modern living space"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-forest-700">
                    Plants thriving
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-sage-500" />
                  <span className="text-sm font-medium text-forest-700">
                    30-day guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-2xl mb-6 group-hover:bg-sage-200 transition-colors">
                <Truck className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                Free Shipping
              </h3>
              <p className="text-forest-600">
                Complimentary shipping on all orders over ₹4,000. Your plants
                arrive safely and quickly.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-2xl mb-6 group-hover:bg-sage-200 transition-colors">
                <ShieldCheck className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                Plant Guarantee
              </h3>
              <p className="text-forest-600">
                30-day health guarantee. If your plant isn't thriving, we'll
                replace it for free.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-2xl mb-6 group-hover:bg-sage-200 transition-colors">
                <Leaf className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                Expert Care
              </h3>
              <p className="text-forest-600">
                Free consultation with every purchase. Our experts help you
                succeed with your plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-sage-25">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Featured Plants
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              Discover our most loved plants, carefully selected for their
              beauty, quality, and ease of care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <div className="aspect-4-3 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
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
                    {product.name}
                  </h3>
                  <p className="text-sm text-forest-600 mb-4">
                    {product.description}
                  </p>

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
                    <button className="bg-sage-500 hover:bg-sage-600 text-white p-2 rounded-xl transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-forest-600 text-white font-semibold rounded-xl hover:bg-forest-700 transition-colors"
            >
              View All Plants
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-forest-600">
              Join thousands of happy plant parents who trust PlantHome
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-sage-50 rounded-3xl p-8 md:p-12 text-center">
                      <Quote className="w-12 h-12 text-sage-400 mx-auto mb-6" />
                      <blockquote className="text-xl md:text-2xl text-forest-700 mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-amber-400 fill-current"
                          />
                        ))}
                      </div>
                      <cite className="not-italic">
                        <div className="font-display font-semibold text-forest-700">
                          {testimonial.name}
                        </div>
                        <div className="text-forest-600">
                          {testimonial.role}
                        </div>
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-sage-600" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? "bg-sage-500"
                        : "bg-sage-200"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-sage-100 hover:bg-sage-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-sage-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800">
        <div className="container-wide text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Join the Plant Community
            </h2>
            <p className="text-xl text-sage-200 mb-8">
              Get weekly plant care tips, exclusive offers, and be the first to
              know about new arrivals.
            </p>

            <form className="flex max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-l-xl border-0 text-forest-700 placeholder:text-forest-400 focus:ring-2 focus:ring-sage-400"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-sage-500 hover:bg-sage-400 text-white font-semibold rounded-r-xl transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sage-300 text-sm">
              No spam, just plants. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
