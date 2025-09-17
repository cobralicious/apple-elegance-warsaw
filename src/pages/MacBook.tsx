import { useTranslation } from 'react-i18next';
import { ProductCard } from '@/components/ProductCard';
import macbookImage from '@/assets/macbook-pro-14.jpg';

const macBookProducts = [
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2699,
    image: macbookImage,
    category: 'macbook',
    description: 'M3 Max chip with up to 40-core GPU',
    isNew: true,
    colors: ['#1d1d1f', '#c0c0c0']
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    price: 1999,
    image: '/api/placeholder/400/400',
    category: 'macbook',
    description: 'Supercharged by M3 Pro and M3 Max',
    isNew: true,
    colors: ['#1d1d1f', '#c0c0c0']
  },
  {
    id: 'macbook-air-15',
    name: 'MacBook Air 15"',
    price: 1299,
    image: '/api/placeholder/400/400',
    category: 'macbook',
    description: 'Impressively big. Impossibly thin.',
    colors: ['#1d1d1f', '#c0c0c0', '#ffd700', '#87ceeb']
  },
  {
    id: 'macbook-air-13',
    name: 'MacBook Air 13"',
    price: 1099,
    originalPrice: 1199,
    image: '/api/placeholder/400/400',
    category: 'macbook',
    description: 'Lean. Mean. M3 machine.',
    colors: ['#1d1d1f', '#c0c0c0', '#ffd700', '#87ceeb']
  }
];

const MacBook = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">MacBook</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('products.macbook.description')} — Professional performance meets incredible portability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your MacBook</h2>
            <p className="text-xl text-muted-foreground">
              From Air to Pro — find the perfect Mac for your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {macBookProducts.map((product, index) => (
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

export default MacBook;