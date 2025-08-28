import { useState } from "react";
import {
  Droplets,
  Sun,
  Scissors,
  Bug,
  Thermometer,
  Sprout,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Calendar,
  Search,
  Filter,
  BookOpen,
  Play,
  Download,
} from "lucide-react";
import { BackButton } from "../components/BackButton";

const careCategories = [
  { id: "all", name: "All Topics", count: 24 },
  { id: "watering", name: "Watering", count: 6, icon: Droplets },
  { id: "lighting", name: "Lighting", count: 5, icon: Sun },
  { id: "pruning", name: "Pruning", count: 4, icon: Scissors },
  { id: "pests", name: "Pest Control", count: 4, icon: Bug },
  { id: "fertilizing", name: "Fertilizing", count: 3, icon: Sprout },
  { id: "repotting", name: "Repotting", count: 2, icon: Calendar },
];

const careGuides = [
  {
    id: 1,
    title: "Complete Watering Guide for Houseplants",
    category: "watering",
    difficulty: "Beginner",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    description:
      "Learn the fundamentals of proper watering techniques, including how to check soil moisture and create watering schedules.",
    tags: ["watering", "beginners", "schedule"],
    content:
      "Master the art of watering your plants with this comprehensive guide...",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Light Requirements for Indoor Plants",
    category: "lighting",
    difficulty: "Beginner",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    description:
      "Discover how to assess your home's lighting conditions and match them with the right plants.",
    tags: ["lighting", "placement", "indoor"],
    content: "Light is one of the most crucial factors for plant health...",
    featured: true,
  },
  {
    id: 3,
    title: "Pruning Techniques for Healthy Growth",
    category: "pruning",
    difficulty: "Intermediate",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    description:
      "Learn when and how to prune different types of plants to promote healthy growth and maintain shape.",
    tags: ["pruning", "growth", "maintenance"],
    content:
      "Proper pruning encourages healthy growth and keeps plants looking their best...",
    featured: false,
  },
  {
    id: 4,
    title: "Identifying and Treating Common Plant Pests",
    category: "pests",
    difficulty: "Intermediate",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    description:
      "Recognize early signs of pest infestations and learn effective, plant-safe treatment methods.",
    tags: ["pests", "treatment", "health"],
    content: "Early detection and treatment of pests can save your plants...",
    featured: true,
  },
  {
    id: 5,
    title: "Fertilizing Indoor Plants: A Complete Schedule",
    category: "fertilizing",
    difficulty: "Beginner",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    description:
      "Create a fertilizing routine that keeps your plants healthy and promotes vigorous growth.",
    tags: ["fertilizing", "schedule", "nutrients"],
    content: "Proper nutrition is essential for plant health and growth...",
    featured: false,
  },
  {
    id: 6,
    title: "When and How to Repot Your Plants",
    category: "repotting",
    difficulty: "Intermediate",
    readTime: "9 min read",
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    description:
      "Learn to recognize when your plants need repotting and master the repotting process.",
    tags: ["repotting", "growth", "containers"],
    content: "Repotting gives plants room to grow and refreshes their soil...",
    featured: false,
  },
];

const quickTips = [
  {
    icon: Droplets,
    title: "Check Soil Moisture",
    tip: "Stick your finger 1-2 inches into the soil. If it's dry, it's time to water.",
    category: "watering",
  },
  {
    icon: Sun,
    title: "Rotate Your Plants",
    tip: "Turn plants 1/4 turn weekly so all sides get equal light exposure.",
    category: "lighting",
  },
  {
    icon: Sprout,
    title: "Spring Feeding",
    tip: "Most plants benefit from fertilizing during their growing season (spring/summer).",
    category: "fertilizing",
  },
  {
    icon: Bug,
    title: "Weekly Plant Check",
    tip: "Inspect leaves weekly for pests, discoloration, or other health issues.",
    category: "pests",
  },
  {
    icon: Scissors,
    title: "Remove Dead Leaves",
    tip: "Regularly remove yellowing or dead leaves to keep plants healthy.",
    category: "pruning",
  },
  {
    icon: Calendar,
    title: "Repot When Rootbound",
    tip: "If roots are growing out of drainage holes, it's time for a bigger pot.",
    category: "repotting",
  },
];

const plantProblems = [
  {
    problem: "Yellow Leaves",
    causes: [
      "Overwatering",
      "Underwatering",
      "Natural aging",
      "Nutrient deficiency",
    ],
    solutions: [
      "Check soil moisture",
      "Adjust watering schedule",
      "Remove old leaves",
      "Consider fertilizing",
    ],
    severity: "medium",
  },
  {
    problem: "Brown Leaf Tips",
    causes: [
      "Low humidity",
      "Overfertilizing",
      "Fluoride in water",
      "Underwatering",
    ],
    solutions: [
      "Increase humidity",
      "Reduce fertilizing",
      "Use filtered water",
      "Water more frequently",
    ],
    severity: "low",
  },
  {
    problem: "Drooping Leaves",
    causes: ["Underwatering", "Overwatering", "Root rot", "Transplant shock"],
    solutions: [
      "Check soil moisture",
      "Improve drainage",
      "Inspect roots",
      "Give time to adjust",
    ],
    severity: "high",
  },
  {
    problem: "Slow Growth",
    causes: [
      "Insufficient light",
      "Poor nutrition",
      "Rootbound",
      "Dormancy period",
    ],
    solutions: [
      "Move to brighter location",
      "Start fertilizing",
      "Repot if needed",
      "Wait for growing season",
    ],
    severity: "low",
  },
];

export default function PlantCare() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredGuides = careGuides.filter((guide) => {
    const categoryMatch =
      selectedCategory === "all" || guide.category === selectedCategory;
    const searchMatch =
      !searchQuery ||
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const difficultyMatch =
      selectedDifficulty === "all" || guide.difficulty === selectedDifficulty;

    return categoryMatch && searchMatch && difficultyMatch;
  });

  const featuredGuides = careGuides.filter((guide) => guide.featured);

  return (
    <div className="min-h-screen bg-sage-25">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 text-white">
        <div className="container-wide py-20">
          <BackButton
            showHomeIcon={true}
            className="lg:text-white lg:hover:bg-white/10 lg:border-white/20"
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Plant Care Hub
            </h1>
            <p className="text-xl text-sage-200 mb-8">
              Everything you need to know to keep your plants thriving. From
              beginner basics to advanced techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <BookOpen className="w-8 h-8 mx-auto mb-2 text-sage-300" />
                <div className="text-2xl font-bold">{careGuides.length}</div>
                <div className="text-sage-300">Care Guides</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-sage-300" />
                <div className="text-2xl font-bold">{quickTips.length}</div>
                <div className="text-sage-300">Quick Tips</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Info className="w-8 h-8 mx-auto mb-2 text-sage-300" />
                <div className="text-2xl font-bold">{plantProblems.length}</div>
                <div className="text-sage-300">Problem Solvers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-forest-800 mb-4">
              Quick Care Tips
            </h2>
            <p className="text-xl text-forest-600">
              Essential tips every plant parent should know
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((tip, index) => (
              <div
                key={index}
                className="bg-sage-50 rounded-2xl p-6 hover:bg-sage-100 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <tip.icon className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest-700 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-forest-600 text-sm">{tip.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-sage-25">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-forest-800 mb-4">
              Featured Guides
            </h2>
            <p className="text-xl text-forest-600">
              Essential reading for successful plant care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <article
                key={guide.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        guide.difficulty === "Beginner"
                          ? "bg-sage-100 text-sage-700"
                          : guide.difficulty === "Intermediate"
                            ? "bg-sand-100 text-sand-700"
                            : "bg-terracotta-100 text-terracotta-700"
                      }`}
                    >
                      {guide.difficulty}
                    </span>
                    <span className="text-xs text-sage-600 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-forest-600 mb-4 line-clamp-3">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-sage-100 text-sage-600 text-xs rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-sage-500 hover:bg-sage-600 text-white py-3 rounded-xl font-medium transition-colors">
                    Read Guide
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-forest-800 mb-4">
              All Care Guides
            </h2>
            <p className="text-xl text-forest-600">
              Browse our complete collection of plant care resources
            </p>
          </div>

          {/* Filters */}
          <div className="bg-sage-50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sage-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides and tips..."
                  className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {careCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-sage-500 text-white"
                        : "bg-white text-sage-600 hover:bg-sage-100"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon && <category.icon className="w-4 h-4" />}
                      <span>{category.name}</span>
                      <span className="text-xs opacity-75">
                        ({category.count})
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Difficulty Filter */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <article
                key={guide.id}
                className="bg-white rounded-2xl border border-sage-200 overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        guide.difficulty === "Beginner"
                          ? "bg-sage-100 text-sage-700"
                          : guide.difficulty === "Intermediate"
                            ? "bg-sand-100 text-sand-700"
                            : "bg-terracotta-100 text-terracotta-700"
                      }`}
                    >
                      {guide.difficulty}
                    </span>
                    <span className="text-xs text-sage-600 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-forest-700 mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-forest-600 text-sm mb-4 line-clamp-2">
                    {guide.description}
                  </p>
                  <button className="w-full bg-sage-100 hover:bg-sage-200 text-sage-700 py-2 rounded-lg font-medium transition-colors">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-sage-400 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                No guides found
              </h3>
              <p className="text-forest-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Problem Solver */}
      <section className="py-16 bg-sage-25">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-forest-800 mb-4">
              Problem Solver
            </h2>
            <p className="text-xl text-forest-600">
              Quick solutions for common plant problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {plantProblems.map((problem, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      problem.severity === "high"
                        ? "bg-red-500"
                        : problem.severity === "medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  />
                  <h3 className="text-xl font-display font-semibold text-forest-700">
                    {problem.problem}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-forest-600 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Common Causes:
                  </h4>
                  <ul className="text-sm text-forest-600 space-y-1">
                    {problem.causes.map((cause, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-sage-400 rounded-full mr-2" />
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-forest-600 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Solutions:
                  </h4>
                  <ul className="text-sm text-forest-600 space-y-1">
                    {problem.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-sage-500 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-700">
        <div className="container-wide text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-sage-200 mb-8">
            Our plant experts are here to help you succeed with your green
            friends
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sage-500 hover:bg-sage-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Book a Consultation
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors backdrop-blur-sm">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
