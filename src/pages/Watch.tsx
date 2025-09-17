import { useTranslation } from 'react-i18next';
import { ProductCard } from '@/components/ProductCard';
import watchImage from '@/assets/apple-watch-series-9.jpg';

const watchProducts = [
  {
    id: 'watch-series-9',
    name: 'Apple Watch Series 9',
    price: 429,
    originalPrice: 499,
    image: watchImage,
    category: 'watch',
    description: 'Smarter. Brighter. Mightier.',
    isNew: true,
    colors: ['#1d1d1f', '#f5f5dc', '#8b0000', '#000080', '#ff69b4']
  },
  {
    id: 'watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    price: 799,
    image: '/api/placeholder/400/400',
    category: 'watch',
    description: 'The most rugged and capable Apple Watch',
    isNew: true,
    colors: ['#ff6600']
  },
  {
    id: 'watch-se',
    name: 'Apple Watch SE',
    price: 279,
    originalPrice: 329,
    image: '/api/placeholder/400/400',
    category: 'watch',
    description: 'Essential features at an incredible price',
    colors: ['#1d1d1f', '#c0c0c0', '#8b0000']
  }
];

const Watch = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Apple Watch</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('products.watch.description')} — Your essential companion for a healthy life.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Apple Watch</h2>
            <p className="text-xl text-muted-foreground">
              From fitness tracking to advanced health monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {watchProducts.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Watch;