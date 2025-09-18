import { ProductCard } from './ProductCard';
import { Product } from '@/data/products';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  className?: string;
}

export function ProductGrid({ products, loading = false, className = '' }: ProductGridProps) {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ${className}`}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton className="aspect-square rounded-3xl" />
            <div className="space-y-2 p-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-8 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold mb-2">No products found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}