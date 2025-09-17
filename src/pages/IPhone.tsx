import { useTranslation } from 'react-i18next';
import { ProductCard } from '@/components/ProductCard';
import iphoneImage from '@/assets/iphone-15-pro-max.jpg';

const iPhoneProducts = [
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    price: 1299,
    originalPrice: 1399,
    image: iphoneImage,
    category: 'iphone',
    description: 'Titanium. So strong. So light. So Pro.',
    isNew: true,
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355']
  },
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    price: 1099,
    originalPrice: 1199,
    image: '/api/placeholder/400/400',
    category: 'iphone',
    description: 'Titanium design with Action Button',
    isNew: true,
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355']
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    price: 829,
    image: '/api/placeholder/400/400',
    category: 'iphone',
    description: 'Dynamic Island and 48MP Main camera',
    colors: ['#1d1d1f', '#ff69b4', '#87ceeb', '#90ee90', '#ffb6c1']
  },
  {
    id: 'iphone-15-plus',
    name: 'iPhone 15 Plus',
    price: 929,
    image: '/api/placeholder/400/400',
    category: 'iphone',
    description: 'Bigger screen, better battery life',
    colors: ['#1d1d1f', '#ff69b4', '#87ceeb', '#90ee90', '#ffb6c1']
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    price: 699,
    originalPrice: 799,
    image: '/api/placeholder/400/400',
    category: 'iphone',
    description: 'Advanced dual-camera system',
    colors: ['#1d1d1f', '#4169e1', '#dc143c', '#ffd700', '#9370db']
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    price: 449,
    image: '/api/placeholder/400/400',
    category: 'iphone',
    description: 'The most affordable iPhone',
    colors: ['#1d1d1f', '#ff6b6b', '#ffffff']
  }
];

const IPhone = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">iPhone</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('products.iphone.description')} — Available now in Warsaw with competitive pricing.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your iPhone</h2>
            <p className="text-xl text-muted-foreground">
              From the latest Pro models to budget-friendly options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iPhoneProducts.map((product, index) => (
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

export default IPhone;