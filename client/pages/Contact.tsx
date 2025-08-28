import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  User,
  HelpCircle,
  Truck,
  Leaf,
  Heart,
  Star,
} from "lucide-react";
import { BackButton } from "../components/BackButton";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our plant experts",
    contact: "+91 98765 43210",
    availability: "Mon-Sat, 9 AM - 7 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed help via email",
    contact: "hello@planthome.com",
    availability: "Response within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available on website",
    availability: "Mon-Fri, 10 AM - 6 PM",
  },
];

const locations = [
  {
    city: "Mumbai",
    address: "123 Garden Street, Bandra West, Mumbai - 400050",
    phone: "+91 98765 43210",
    hours: "Mon-Sat: 9 AM - 8 PM, Sun: 10 AM - 6 PM",
    features: ["Plant Consultation", "Workshops", "Plant Spa Services"],
  },
  {
    city: "Bangalore",
    address: "456 Green Avenue, Koramangala, Bangalore - 560034",
    phone: "+91 98765 43211",
    hours: "Mon-Sat: 9 AM - 8 PM, Sun: 10 AM - 6 PM",
    features: [
      "Expert Consultations",
      "Rare Plant Collection",
      "Corporate Services",
    ],
  },
  {
    city: "Delhi",
    address: "789 Plant Plaza, Khan Market, New Delhi - 110003",
    phone: "+91 98765 43212",
    hours: "Mon-Sat: 9 AM - 8 PM, Sun: 10 AM - 6 PM",
    features: ["Plant Library", "Care Workshops", "Custom Arrangements"],
  },
];

const faqCategories = [
  {
    category: "Orders & Shipping",
    icon: Truck,
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "We typically ship within 1-2 business days. Delivery takes 3-5 business days depending on your location.",
      },
      {
        question: "Do you offer same-day delivery?",
        answer:
          "Yes! Same-day delivery is available in Mumbai, Delhi, and Bangalore for orders placed before 2 PM.",
      },
      {
        question: "What if my plant arrives damaged?",
        answer:
          "We have a 30-day plant guarantee. If your plant arrives damaged or unhealthy, we'll replace it free of charge.",
      },
    ],
  },
  {
    category: "Plant Care",
    icon: Leaf,
    questions: [
      {
        question: "How often should I water my plants?",
        answer:
          "It depends on the plant type, season, and environment. Generally, check the soil moisture and water when the top inch feels dry.",
      },
      {
        question: "Why are my plant leaves turning yellow?",
        answer:
          "Yellow leaves can indicate overwatering, underwatering, or natural aging. Check our plant care guide for specific troubleshooting tips.",
      },
      {
        question: "Do you provide plant care consultations?",
        answer:
          "Yes! We offer free consultations with every purchase and paid detailed consultations for existing plant parents.",
      },
    ],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        category: "general",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-sage-25">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 text-white py-20">
        <div className="container-wide">
          <BackButton
            showHomeIcon={true}
            className="lg:text-white lg:hover:bg-white/10 lg:border-white/20"
          />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-sage-200 mb-8">
              Have questions about plants, orders, or need expert advice? We're
              here to help you succeed in your plant journey.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-sage-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sage-200 text-sm mb-2">
                    {method.description}
                  </p>
                  <p className="text-white font-medium mb-1">
                    {method.contact}
                  </p>
                  <p className="text-sage-300 text-xs">{method.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-wide">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-soft p-8">
                <h2 className="text-3xl font-display font-bold text-forest-800 mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-sage-600" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-forest-700 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-forest-600">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-forest-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sage-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-forest-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sage-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-forest-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sage-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm font-medium text-forest-700 mb-2"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="order">Order Support</option>
                          <option value="care">Plant Care Help</option>
                          <option value="consultation">
                            Book Consultation
                          </option>
                          <option value="partnership">Partnership</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-forest-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent"
                        placeholder="Brief subject line"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-forest-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sage-500 hover:bg-sage-600 disabled:bg-sage-300 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 mt-12 lg:mt-0">
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-sage-500" />
                      <div>
                        <div className="font-medium text-forest-700">
                          +91 98765 43210
                        </div>
                        <div className="text-sm text-sage-600">
                          Mon-Sat, 9 AM - 7 PM
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-sage-500" />
                      <div>
                        <div className="font-medium text-forest-700">
                          hello@planthome.com
                        </div>
                        <div className="text-sm text-sage-600">
                          24 hour response
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-sage-500" />
                      <div>
                        <div className="font-medium text-forest-700">
                          Multiple Locations
                        </div>
                        <div className="text-sm text-sage-600">
                          Mumbai, Delhi, Bangalore
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-2xl shadow-soft p-6">
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-forest-600">Monday - Friday</span>
                      <span className="font-medium text-forest-700">
                        9 AM - 8 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-600">Saturday</span>
                      <span className="font-medium text-forest-700">
                        9 AM - 8 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-forest-600">Sunday</span>
                      <span className="font-medium text-forest-700">
                        10 AM - 6 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Support Promise */}
                <div className="bg-sage-50 rounded-2xl p-6">
                  <h3 className="text-xl font-display font-semibold text-forest-700 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-sage-500" />
                    Our Promise
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-sage-500 mt-0.5" />
                      <span className="text-forest-600 text-sm">
                        24-hour email response guarantee
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-sage-500 mt-0.5" />
                      <span className="text-forest-600 text-sm">
                        Expert plant care advice included
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-sage-500 mt-0.5" />
                      <span className="text-forest-600 text-sm">
                        Free consultations with purchases
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Visit Our Stores
            </h2>
            <p className="text-xl text-forest-600">
              Experience our plants in person at one of our beautiful locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-sage-25 rounded-2xl p-6 hover:bg-sage-50 transition-colors"
              >
                <h3 className="text-2xl font-display font-semibold text-forest-700 mb-4">
                  {location.city}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sage-500 mt-0.5" />
                    <span className="text-forest-600">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-sage-500" />
                    <span className="text-forest-600">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-sage-500" />
                    <span className="text-forest-600">{location.hours}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-700 mb-2">
                    Available Services:
                  </h4>
                  <div className="space-y-1">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-sage-500" />
                        <span className="text-forest-600 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage-25">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-forest-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-forest-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl shadow-soft overflow-hidden"
              >
                <div className="bg-sage-50 px-6 py-4 border-b border-sage-200">
                  <h3 className="text-xl font-display font-semibold text-forest-700 flex items-center">
                    <category.icon className="w-6 h-6 mr-3 text-sage-600" />
                    {category.category}
                  </h3>
                </div>
                <div className="divide-y divide-sage-200">
                  {category.questions.map((faq, faqIndex) => {
                    const faqId = `${categoryIndex}-${faqIndex}`;
                    const isExpanded = expandedFaq === faqId;

                    return (
                      <div key={faqIndex}>
                        <button
                          onClick={() =>
                            setExpandedFaq(isExpanded ? null : faqId)
                          }
                          className="w-full px-6 py-4 text-left hover:bg-sage-25 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-forest-700 pr-4">
                              {faq.question}
                            </h4>
                            <HelpCircle
                              className={`w-5 h-5 text-sage-500 transform transition-transform ${
                                isExpanded ? "rotate-45" : ""
                              }`}
                            />
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-4">
                            <p className="text-forest-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
