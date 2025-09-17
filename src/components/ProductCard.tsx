import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  isNew?: boolean;
  colors?: string[];
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  description,
  isNew,
  colors = []
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="product-card group overflow-hidden animate-fade-in">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-gradient-secondary">
          {isNew && (
            <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              New
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
              -{discount}%
            </div>
          )}
          
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

          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
            <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                <Link to={`/${category}/${id}`}>{name}</Link>
              </h3>
              {description && (
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Color Options */}
          {colors.length > 0 && (
            <div className="flex gap-2 mb-4">
              {colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
              {colors.length > 4 && (
                <span className="text-xs text-muted-foreground self-center ml-2">
                  +{colors.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  ${price.toLocaleString()}
                </span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <Button className="btn-hero shrink-0">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}