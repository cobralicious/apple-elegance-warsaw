import { useTranslation } from 'react-i18next';
import { ProductCard } from '@/components/ProductCard';
import imacImage from '@/assets/imac-24-blue.jpg';

const iMacProducts = [
  {
    id: 'imac-24',
    name: 'iMac 24"',
    price: 1499,
    image: imacImage,
    category: 'imac',
    description: 'Packed with the power of M3',
    isNew: true,
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335', '#ff6d01', '#af52de', '#1d1d1f']
  },
  {
    id: 'imac-24-base',
    name: 'iMac 24" (Base)',
    price: 1299,
    originalPrice: 1399,
    image: '/api/placeholder/400/400',
    category: 'imac',
    description: 'Beautiful all-in-one with M3 chip',
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335']
  }
];

const IMac = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">iMac</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('products.imac.description')} — Stunning design meets incredible performance.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your iMac</h2>
            <p className="text-xl text-muted-foreground">
              All-in-one desktop perfection in vibrant colors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {iMacProducts.map((product, index) => (
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

export default IMac;