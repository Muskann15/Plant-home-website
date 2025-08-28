import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PlaceholderPage } from "./components/PlaceholderPage";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import PlantCare from "./pages/PlantCare";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component that includes header and footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Shop Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/product/:id" element={<ProductDetail />} />
            <Route
              path="/shop/*"
              element={
                <PlaceholderPage
                  title="Shop Category"
                  description="Explore plants by category to find your perfect green companion."
                />
              }
            />

            {/* Plant Care Routes */}
            <Route path="/care" element={<PlantCare />} />
            <Route
              path="/care/*"
              element={
                <PlaceholderPage
                  title="Care Guide"
                  description="Detailed care instructions to help your plants flourish."
                />
              }
            />

            {/* Company Routes */}
            <Route path="/about" element={<About />} />
            <Route
              path="/story"
              element={
                <PlaceholderPage
                  title="Our Story"
                  description="Discover how PlantHome grew from a small idea into a thriving plant community."
                />
              }
            />
            <Route
              path="/sustainability"
              element={
                <PlaceholderPage
                  title="Sustainability"
                  description="Our commitment to environmental responsibility and sustainable practices."
                />
              }
            />
            <Route
              path="/careers"
              element={
                <PlaceholderPage
                  title="Careers"
                  description="Join our team and help us spread the joy of plants everywhere."
                />
              }
            />
            <Route
              path="/press"
              element={
                <PlaceholderPage
                  title="Press"
                  description="Latest news and press coverage about PlantHome."
                />
              }
            />
            <Route
              path="/blog"
              element={
                <PlaceholderPage
                  title="Plant Blog"
                  description="Tips, inspiration, and stories from the world of plants."
                />
              }
            />

            {/* Support Routes */}
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/shipping"
              element={
                <PlaceholderPage
                  title="Shipping Information"
                  description="Learn about our careful shipping process and delivery options."
                />
              }
            />
            <Route
              path="/returns"
              element={
                <PlaceholderPage
                  title="Returns & Exchanges"
                  description="Our hassle-free return policy for your peace of mind."
                />
              }
            />
            <Route
              path="/guarantee"
              element={
                <PlaceholderPage
                  title="Plant Guarantee"
                  description="Our 30-day plant health guarantee ensures your plants arrive happy."
                />
              }
            />
            <Route
              path="/faq"
              element={
                <PlaceholderPage
                  title="FAQ"
                  description="Frequently asked questions about plants, care, and our services."
                />
              }
            />
            <Route
              path="/consultation"
              element={
                <PlaceholderPage
                  title="Plant Consultation"
                  description="Schedule a consultation with our plant experts for personalized advice."
                />
              }
            />

            {/* Legal Routes */}
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="How we protect and handle your personal information."
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Terms and conditions for using our services."
                />
              }
            />
            <Route
              path="/accessibility"
              element={
                <PlaceholderPage
                  title="Accessibility"
                  description="Our commitment to making our website accessible to everyone."
                />
              }
            />

            {/* 404 Route - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
