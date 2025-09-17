import { useTranslation } from 'react-i18next';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductFilter } from '@/components/ProductFilter';
import { Footer } from '@/components/Footer';
import { useProducts } from '@/hooks/useProducts';

const IPhone = () => {
  const { t } = useTranslation();
  const { products, filters, updateFilters, resetFilters, stats } = useProducts({
    category: 'iphone'
  });

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
          
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{stats.inStock} models in stock</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{stats.newProducts} new arrivals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <ProductFilter
              filters={filters}
              onFiltersChange={updateFilters}
              onResetFilters={resetFilters}
              resultCount={stats.filtered}
            />
          </div>

          <ProductGrid products={products} />

          {products.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-2">No iPhones found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to see more results
              </p>
              <button
                onClick={resetFilters}
                className="btn-outline-elegant"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IPhone;