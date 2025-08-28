import { Link } from "react-router-dom";
import { ArrowLeft, Leaf } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
          <Leaf className="w-8 h-8 text-sage-600" />
        </div>

        <h1 className="text-3xl font-display font-semibold text-forest-700 mb-4">
          {title}
        </h1>

        <p className="text-muted-foreground mb-8">
          {description ||
            `This page is being carefully cultivated and will be available soon. Check back later to see what's growing!`}
        </p>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Want this page implemented? Continue prompting to have it built!
          </p>

          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-sage-500 hover:bg-sage-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
