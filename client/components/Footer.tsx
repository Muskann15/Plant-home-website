import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Leaf,
  CreditCard,
  Truck,
  ShieldCheck,
  Recycle,
} from "lucide-react";

const navigation = {
  shop: [
    { name: "Indoor Plants", href: "/shop/indoor" },
    { name: "Outdoor Plants", href: "/shop/outdoor" },
    { name: "Succulents", href: "/shop/succulents" },
    { name: "Plant Care", href: "/shop/care" },
    { name: "Pots & Planters", href: "/shop/pots" },
    { name: "Accessories", href: "/shop/accessories" },
  ],
  care: [
    { name: "Plant Care Guide", href: "/care/guide" },
    { name: "Watering Schedule", href: "/care/watering" },
    { name: "Light Requirements", href: "/care/lighting" },
    { name: "Pest Control", href: "/care/pests" },
    { name: "Fertilizing Tips", href: "/care/fertilizing" },
    { name: "Repotting Guide", href: "/care/repotting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Plant Guarantee", href: "/guarantee" },
    { name: "FAQ", href: "/faq" },
    { name: "Plant Consultation", href: "/consultation" },
  ],
};

const social = [
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer
      className="bg-forest-900 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Newsletter Section */}
      <div className="border-b border-forest-800">
        <div className="container-wide py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <h3 className="text-2xl font-display font-semibold text-white mb-2">
                Join Our Plant Family
              </h3>
              <p className="text-sage-200">
                Get exclusive access to new arrivals, plant care tips, and
                special offers delivered straight to your inbox.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <form className="flex max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-1 rounded-l-xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-sage-300 focus:ring-2 focus:ring-sage-400 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="rounded-r-xl bg-sage-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sage-400 focus:ring-2 focus:ring-sage-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-2 text-xs text-sage-300">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <div>
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-forest-500 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-display font-semibold text-white">
                  PlantHome
                </span>
              </Link>
              <p className="mt-4 text-sm text-sage-200 max-w-md">
                Bringing nature indoors with carefully curated plants and expert
                care guidance. Transform your space into a green sanctuary with
                our premium selection of plants and accessories.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-sage-200">
                <MapPin className="h-5 w-5 text-sage-400" />
                <span>123 Garden Street, Plant City, GR 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-sage-200">
                <Phone className="h-5 w-5 text-sage-400" />
                <span>(555) 123-PLANT</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-sage-200">
                <Mail className="h-5 w-5 text-sage-400" />
                <span>hello@planthome.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sage-400 hover:text-sage-300 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Shop
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.shop.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-sage-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Plant Care
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.care.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-sage-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-sage-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-sage-200 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 pt-8 border-t border-forest-800">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-sage-500/20 p-3 mb-3">
                <Truck className="h-6 w-6 text-sage-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">
                Free Shipping
              </h4>
              <p className="text-xs text-sage-300 mt-1">
                On orders over ₹4,000
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-sage-500/20 p-3 mb-3">
                <ShieldCheck className="h-6 w-6 text-sage-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">
                Plant Guarantee
              </h4>
              <p className="text-xs text-sage-300 mt-1">
                30-day health promise
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-sage-500/20 p-3 mb-3">
                <Leaf className="h-6 w-6 text-sage-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">Expert Care</h4>
              <p className="text-xs text-sage-300 mt-1">
                Free plant consultation
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-sage-500/20 p-3 mb-3">
                <Recycle className="h-6 w-6 text-sage-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">Eco-Friendly</h4>
              <p className="text-xs text-sage-300 mt-1">
                Sustainable packaging
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-forest-800 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link
              to="/privacy"
              className="text-sm text-sage-200 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-sage-200 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="text-sm text-sage-200 hover:text-white transition-colors"
            >
              Accessibility
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-sm text-sage-300">
              &copy; 2024 PlantHome. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
