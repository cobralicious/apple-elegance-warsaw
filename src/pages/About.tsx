import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Award, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('about.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('about.subtitle')} - Warsaw's premier destination for Apple products since 2020
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
            {[
              { icon: Users, value: 10000, suffix: '+', label: 'Happy Customers' },
              { icon: Award, value: 25, suffix: '+', label: 'Product Models' },
              { icon: Shield, value: 100, suffix: '%', label: 'Authentic Products' },
              { icon: Clock, value: 24, suffix: '/7', label: 'Support' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center product-card p-4 sm:p-6 lg:p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-6 sm:p-8 lg:p-12 rounded-3xl mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">{t('about.mission')}</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
                  {t('about.description')}
                </p>
                <p className="text-lg sm:text-xl leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                'Premium Quality Products',
                'Expert Customer Service', 
                'Competitive Pricing',
                'Official Apple Warranty'
              ].map((item: string, index: number) => (
                <div
                  key={index}
                  className="product-card text-center p-4 sm:p-6 lg:p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">
                    {index === 0 ? '⭐' : index === 1 ? '👥' : index === 2 ? '💰' : '🛡️'}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.split(' ')[0]} {item.split(' ')[1]}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">{t('about.team')}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12">
              {t('about.teamText')}
            </p>
            
            <div className="glass p-6 sm:p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-hero min-w-[160px]">
                  <Link to="/contact">{t('contact.title')}</Link>
                </Button>
                <Button asChild variant="outline" className="btn-outline-elegant min-w-[160px]">
                  <Link to="/iphone">Start Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;