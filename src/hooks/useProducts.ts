import { useState, useMemo } from 'react';
import { products, Product } from '@/data/products';

interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'newest';
  inStockOnly?: boolean;
  search?: string;
}

export const useProducts = (initialFilters: FilterOptions = {}) => {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category && filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      result = result.filter(product => product.price >= min && product.price <= max);
    }

    // Filter by stock
    if (filters.inStockOnly) {
      result = result.filter(product => product.inStock && product.stockCount > 0);
    }

    // Filter by search
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm))
      );
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
        break;
      default:
        // Default: bestsellers first, then new products
        result.sort((a, b) => {
          if (a.isBestseller && !b.isBestseller) return -1;
          if (!a.isBestseller && b.isBestseller) return 1;
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
    }

    return result;
  }, [filters]);

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({});
  };

  const stats = useMemo(() => {
    const total = products.length;
    const inStock = products.filter(p => p.inStock && p.stockCount > 0).length;
    const newProducts = products.filter(p => p.isNew).length;
    const bestsellers = products.filter(p => p.isBestseller).length;
    
    return {
      total,
      inStock,
      newProducts,
      bestsellers,
      filtered: filteredProducts.length
    };
  }, [filteredProducts.length]);

  return {
    products: filteredProducts,
    filters,
    updateFilters,
    resetFilters,
    stats
  };
};