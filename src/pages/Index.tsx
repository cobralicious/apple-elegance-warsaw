import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Footer } from '@/components/Footer';
import { getFeaturedProducts, getNewProducts } from '@/data/products';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const Index = () => {
  const { t } = useTranslation();
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-20">
            {[
              { icon: TrendingUp, value: 25, suffix: '+', label: 'Product Models' },
              { icon: Users, value: 10000, suffix: '+', label: 'Happy Customers' },
              { icon: Award, value: 3, suffix: ' Years', label: 'Experience' },
              { icon: Zap, value: 24, suffix: '/7', label: 'Support' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center product-card p-4 sm:p-6 lg:p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">
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

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular Apple products with exclusive Warsaw store pricing
            </p>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* New Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Arrivals
            </h2>
            <p className="text-xl text-muted-foreground">
              Be the first to experience Apple's newest innovations
            </p>
          </div>

          <ProductGrid products={newProducts.slice(0, 8)} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect Apple device for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { 
                name: t('products.iphone.title'), 
                description: t('products.iphone.description'), 
                path: '/iphone', 
                emoji: '📱',
                count: '10+ models'
              },
              { 
                name: t('products.macbook.title'), 
                description: t('products.macbook.description'), 
                path: '/macbook', 
                emoji: '💻',
                count: '8+ models'
              },
              { 
                name: t('products.watch.title'), 
                description: t('products.watch.description'), 
                path: '/watch', 
                emoji: '⌚',
                count: '8+ models'
              },
              { 
                name: t('products.imac.title'), 
                description: t('products.imac.description'), 
                path: '/imac', 
                emoji: '🖥️',
                count: '4+ models'
              }
            ].map((category, index) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="product-card group cursor-pointer bg-card p-6 sm:p-8 text-center animate-fade-in-up relative overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>

                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {category.description}
                  </p>
                  <div className="text-xs sm:text-sm text-primary font-semibold">
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('location.title')}
            </h2>
            
            <div className="glass p-8 rounded-3xl mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">{t('location.address')}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>{t('location.street')}</p>
                    <p>{t('location.city')}</p>
                    <p className="mt-4">
                      <strong>Phone:</strong> {t('location.phone')}
                    </p>
                    <p>
                      <strong>Email:</strong> {t('location.email')}
                    </p>
                  </div>
                </div>
                
                <div className="bg-muted rounded-2xl p-8 text-muted-foreground">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p>Interactive map coming soon</p>
                    <p className="text-sm mt-2">Located in the heart of Warsaw</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;