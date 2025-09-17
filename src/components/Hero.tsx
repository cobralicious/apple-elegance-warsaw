import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary/10 rounded-full animate-float animation-delay-1000 hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/10 rounded-full animate-float animation-delay-2000 hidden lg:block" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24" />
              <span className="text-2xl md:text-3xl font-light text-muted-foreground">
                {t('hero.subtitle')}
              </span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
            <Link to="/iphone">
              <Button className="btn-hero text-lg px-8 py-4 min-w-[200px]">
                {t('hero.shopNow')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Button variant="outline" className="btn-outline-elegant text-lg px-8 py-4 min-w-[200px]">
              <Play className="mr-2 h-5 w-5" />
              {t('hero.learnMore')}
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up animation-delay-600">
            {[
              { key: 'quality', icon: '✨' },
              { key: 'warranty', icon: '🛡️' },
              { key: 'delivery', icon: '🚀' },
              { key: 'support', icon: '💬' }
            ].map((feature) => (
              <div key={feature.key} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t(`features.${feature.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}