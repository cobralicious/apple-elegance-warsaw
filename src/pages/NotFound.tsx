import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* 404 Section */}
      <section className="hero-section py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-primary mb-6 sm:mb-8 animate-fade-in">
              404
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span className="gradient-text">Page Not Found</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 animate-fade-in-up px-4" style={{ animationDelay: '400ms' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up px-4" style={{ animationDelay: '600ms' }}>
              <Button asChild className="btn-hero min-w-[140px]">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button variant="outline" onClick={() => window.history.back()} className="btn-outline-elegant min-w-[140px]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;