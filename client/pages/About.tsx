import {
  Heart,
  Leaf,
  Users,
  Award,
  Globe,
  Truck,
  Shield,
  Recycle,
  Star,
  CheckCircle,
  MapPin,
  Calendar,
  Target,
  Lightbulb,
} from "lucide-react";
import { BackButton } from "../components/BackButton";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Leaf, value: "500+", label: "Plant Varieties" },
  { icon: Award, value: "5 Years", label: "Experience" },
  { icon: Globe, value: "50+", label: "Cities Served" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Plants",
    description:
      "We believe that plants have the power to transform spaces and lives. Our passion drives us to find the most beautiful and healthy plants for our customers.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "Every plant we sell comes with our 30-day health guarantee. We stand behind the quality of our plants and our commitment to your success.",
  },
  {
    icon: Lightbulb,
    title: "Expert Knowledge",
    description:
      "Our team of plant experts is always ready to help. From care tips to troubleshooting, we're here to support your plant journey.",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description:
      "We're committed to sustainable practices, from eco-friendly packaging to supporting local growers and reducing our environmental impact.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "PlantHome started as a small passion project in a tiny apartment, sharing plants with friends and neighbors.",
    icon: Leaf,
  },
  {
    year: "2020",
    title: "Growing Roots",
    description:
      "Launched our online platform and delivered our first 100 orders during the pandemic plant boom.",
    icon: Globe,
  },
  {
    year: "2021",
    title: "Expanding Horizons",
    description:
      "Opened our first physical location and introduced plant care workshops and consultations.",
    icon: MapPin,
  },
  {
    year: "2022",
    title: "Community Focus",
    description:
      "Launched our plant parent community and introduced our plant guarantee program.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Sustainable Growth",
    description:
      "Achieved carbon-neutral shipping and partnered with local growers across the country.",
    icon: Recycle,
  },
  {
    year: "2024",
    title: "Innovation & Excellence",
    description:
      "Introduced AI-powered plant care recommendations and expanded to 50+ cities.",
    icon: Award,
  },
];

const team = [
  {
    name: "Khushal Mishra",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    bio: "Plant enthusiast with 10+ years of horticulture experience. Started PlantHome to make plant parenting accessible to everyone.",
    expertise: "Business Strategy, Horticulture",
  },
  {
    name: "Vansh Saini",
    role: "Head of Plant Care",
    image: "https://images.pexels.com/photos/9157874/pexels-photo-9157874.jpeg",
    bio: "Certified master gardener who ensures every plant meets our quality standards and helps customers succeed.",
    expertise: "Plant Health, Customer Education",
  },
  {
    name: "Khushal Mishra",
    role: "Sustainability Director",
    image:
      "https://images.pexels.com/photos/20324601/pexels-photo-20324601.jpeg",
    bio: "Environmental scientist passionate about sustainable business practices and reducing our ecological footprint.",
    expertise: "Sustainability, Environmental Science",
  },
  {
    name: "Pragati Sawarn",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg",
    bio: "Logistics expert who ensures plants arrive safely and customers receive exceptional service every time.",
    expertise: "Operations, Logistics",
  },
];

const testimonials = [
  {
    name: "Meera Joshi",
    role: "Interior Designer",
    content:
      "PlantHome has been our go-to partner for all our projects. Their plant quality and customer service are unmatched.",
    rating: 5,
    location: "Mumbai",
  },
  {
    name: "Arjun Reddy",
    role: "Apartment Dweller",
    content:
      "As a beginner, I was worried about keeping plants alive. PlantHome's guidance made me a confident plant parent!",
    rating: 5,
    location: "Bangalore",
  },
  {
    name: "Kavya Nair",
    role: "Plant Collector",
    content:
      "The variety and quality of plants at PlantHome is exceptional. I've never received a plant in poor condition.",
    rating: 5,
    location: "Chennai",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 via-sand-50 to-sage-100 py-20">
        <div className="container-wide">
          <BackButton showHomeIcon={true} />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-forest-800 mb-6">
              Growing Together Since 2019
            </h1>
            <p className="text-xl text-forest-600 mb-8 leading-relaxed">
              At PlantHome, we believe that everyone deserves to experience the
              joy and benefits of living with plants. We're here to make your
              plant journey successful and rewarding.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-sage-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-sage-700" />
                  </div>
                  <div className="text-3xl font-display font-bold text-forest-700">
                    {stat.value}
                  </div>
                  <div className="text-forest-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-forest-600 mb-6 leading-relaxed">
                To bring the beauty and benefits of plants into every home while
                providing the knowledge and support needed for success.
              </p>
              <p className="text-lg text-forest-600 mb-8">
                We started PlantHome because we believe that plants have the
                power to improve our well-being, purify our air, and create
                beautiful spaces. Our goal is to make plant parenting
                accessible, enjoyable, and successful for everyone.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-sage-500" />
                <span className="text-forest-700 font-medium">
                  Premium Quality Plants
                </span>
              </div>
              <div className="flex items-center space-x-4 mt-3">
                <CheckCircle className="w-6 h-6 text-sage-500" />
                <span className="text-forest-700 font-medium">
                  Expert Care Guidance
                </span>
              </div>
              <div className="flex items-center space-x-4 mt-3">
                <CheckCircle className="w-6 h-6 text-sage-500" />
                <span className="text-forest-700 font-medium">
                  Sustainable Practices
                </span>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4813268/pexels-photo-4813268.jpeg"
                  alt="Beautiful plants in a modern home"
                  className="rounded-3xl shadow-large w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-medium">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-forest-700">
                        10,000+
                      </div>
                      <div className="text-sm text-forest-600">
                        Happy Plant Parents
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sage-25">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve
              our plant community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-16 h-16 bg-sage-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-forest-700 mb-4">
                  {value.title}
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-forest-600">
              From a small passion project to a thriving plant community
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sage-300 hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline icon */}
                    <div className="hidden md:flex w-16 h-16 bg-sage-500 rounded-full items-center justify-center relative z-10">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="md:ml-8 bg-sage-50 rounded-2xl p-6 flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-display font-bold text-sage-600">
                          {item.year}
                        </span>
                        <div className="md:hidden w-8 h-8 bg-sage-500 rounded-full flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-forest-700 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-forest-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-sage-25">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-forest-600">
              Passionate plant experts dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sage-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-forest-600 text-sm mb-3 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="text-xs text-sage-600">
                    <strong>Expertise:</strong> {member.expertise}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-forest-600">
              Real stories from our plant community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-sage-50 rounded-2xl p-8 text-center"
              >
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-forest-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-display font-semibold text-forest-700">
                    {testimonial.name}
                  </div>
                  <div className="text-sage-600 text-sm">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800">
        <div className="container-wide text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Join Our Plant Community
          </h2>
          <p className="text-xl text-sage-200 mb-8 max-w-3xl mx-auto">
            Become part of a community that's passionate about plants,
            sustainability, and creating beautiful green spaces together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sage-500 hover:bg-sage-400 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Start Shopping
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
