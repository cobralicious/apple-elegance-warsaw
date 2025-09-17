import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import iphoneImage from '@/assets/iphone-15-pro-max.jpg';
import macbookImage from '@/assets/macbook-pro-14.jpg';
import watchImage from '@/assets/apple-watch-series-9.jpg';
import imacImage from '@/assets/imac-24-blue.jpg';

// Mock product data with random prices
const featuredProducts = [
  {
    id: '1',
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
    id: '2',
    name: 'MacBook Pro 14"',
    price: 1999,
    image: macbookImage,
    category: 'macbook',
    description: 'Supercharged by M3 Pro and M3 Max',
    colors: ['#1d1d1f', '#c0c0c0']
  },
  {
    id: '3',
    name: 'Apple Watch Series 9',
    price: 429,
    originalPrice: 499,
    image: watchImage,
    category: 'watch',
    description: 'Smarter. Brighter. Mightier.',
    colors: ['#1d1d1f', '#f5f5dc', '#8b0000', '#000080']
  },
  {
    id: '4',
    name: 'iMac 24"',
    price: 1499,
    image: imacImage,
    category: 'imac',
    description: 'Packed with the power of M3',
    isNew: true,
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335', '#ff6d01', '#af52de', '#1d1d1f']
  }
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular Apple products with exclusive Warsaw store pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: t('products.iphone.title'), description: t('products.iphone.description'), path: '/iphone', emoji: '📱' },
              { name: t('products.macbook.title'), description: t('products.macbook.description'), path: '/macbook', emoji: '💻' },
              { name: t('products.watch.title'), description: t('products.watch.description'), path: '/watch', emoji: '⌚' },
              { name: t('products.imac.title'), description: t('products.imac.description'), path: '/imac', emoji: '🖥️' }
            ].map((category, index) => (
              <a
                key={category.path}
                href={category.path}
                className="product-card group cursor-pointer bg-card p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </a>
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
    </div>
  );
};

export default Index;