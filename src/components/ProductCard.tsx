import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ProductBadge } from './ProductBadge';
import { Product } from '@/data/products';

interface ProductCardProps extends Product {}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  description,
  isNew,
  isBestseller,
  isLimited,
  colors = [],
  inStock,
  stockCount,
  features = []
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="product-card group overflow-hidden animate-fade-in relative">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-gradient-secondary">
          {/* Badges */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex flex-col gap-1 sm:gap-2">
            {isNew && <ProductBadge type="new" />}
            {isBestseller && <ProductBadge type="bestseller" />}
            {isLimited && <ProductBadge type="limited" />}
            {discount > 0 && <ProductBadge type="discount" value={discount} />}
          </div>

          {/* Stock Status */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
            {!inStock || stockCount === 0 ? (
              <div className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                Out of Stock
              </div>
            ) : stockCount < 5 ? (
              <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                <span className="hidden sm:inline">Only {stockCount} left</span>
                <span className="sm:hidden">{stockCount} left</span>
              </div>
            ) : null}
          </div>
          
          <Link to={`/${category}/${id}`}>
            <div className="aspect-square relative overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Floating Action Buttons - Hidden on mobile */}
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2 hidden sm:flex">
            <Button size="sm" variant="secondary" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-3 sm:p-4 lg:p-6">
          <div className="flex items-start justify-between mb-2 sm:mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-1">
                <Link to={`/${category}/${id}`}>{name}</Link>
              </h3>
              {description && (
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                  {description}
                </p>
              )}
              
              {/* Key Features - Show fewer on mobile */}
              {features.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                  {features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Color Options - Smaller on mobile */}
          {colors.length > 0 && (
            <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4">
              {colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: color }}
                  title={`Color option ${index + 1}`}
                />
              ))}
              {colors.length > 4 && (
                <span className="text-xs text-muted-foreground self-center ml-1 sm:ml-2">
                  +{colors.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Price and Stock Section */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-2xl font-bold text-primary">
                  ${price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-xs sm:text-sm text-muted-foreground line-through">
                    ${originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {inStock && stockCount > 0 && (
                <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                  <Package className="h-3 w-3" />
                  <span className="hidden sm:inline">In Stock ({stockCount} available)</span>
                  <span className="sm:hidden">In Stock</span>
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            className={`w-full text-sm sm:text-base ${inStock && stockCount > 0 ? 'btn-hero' : 'opacity-50 cursor-not-allowed'}`}
            disabled={!inStock || stockCount === 0}
          >
            <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            {inStock && stockCount > 0 ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}