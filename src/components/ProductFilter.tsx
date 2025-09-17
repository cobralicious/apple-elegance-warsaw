import { useState } from 'react';
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'newest';
  inStockOnly?: boolean;
  search?: string;
}

interface ProductFilterProps {
  filters: FilterOptions;
  onFiltersChange: (filters: Partial<FilterOptions>) => void;
  onResetFilters: () => void;
  resultCount: number;
}

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'iphone', label: 'iPhone' },
  { value: 'macbook', label: 'MacBook' },
  { value: 'watch', label: 'Apple Watch' },
  { value: 'imac', label: 'iMac' },
];

const sortOptions = [
  { value: 'default', label: 'Best Match' },
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A-Z' },
];

export function ProductFilter({ 
  filters, 
  onFiltersChange, 
  onResetFilters, 
  resultCount 
}: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localPriceRange, setLocalPriceRange] = useState<[number, number]>(
    filters.priceRange || [0, 5000]
  );

  const handlePriceRangeChange = (value: number[]) => {
    const range: [number, number] = [value[0], value[1]];
    setLocalPriceRange(range);
    onFiltersChange({ priceRange: range });
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    value !== undefined && value !== '' && value !== 'all'
  ).length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="space-y-2">
        <Label>Search Products</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, features..."
            value={filters.search || ''}
            onChange={(e) => onFiltersChange({ search: e.target.value })}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label>Category</Label>
        <Select
          value={filters.category || 'all'}
          onValueChange={(value) => onFiltersChange({ category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <Label>Price Range</Label>
        <div className="px-2">
          <Slider
            value={localPriceRange}
            onValueChange={handlePriceRangeChange}
            max={5000}
            min={0}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${localPriceRange[0]}</span>
            <span>${localPriceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <Label>Sort By</Label>
        <Select
          value={filters.sortBy || 'default'}
          onValueChange={(value) => onFiltersChange({ 
            sortBy: value === 'default' ? undefined : value as any 
          })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* In Stock Only */}
      <div className="flex items-center justify-between">
        <Label htmlFor="in-stock">In Stock Only</Label>
        <Switch
          id="in-stock"
          checked={filters.inStockOnly || false}
          onCheckedChange={(checked) => onFiltersChange({ inStockOnly: checked })}
        />
      </div>

      {/* Reset Filters */}
      {activeFiltersCount > 0 && (
        <Button 
          variant="outline" 
          onClick={onResetFilters}
          className="w-full"
        >
          <X className="h-4 w-4 mr-2" />
          Reset All Filters
        </Button>
      )}
    </div>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
      {/* Desktop Search Bar */}
      <div className="hidden lg:block flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={filters.search || ''}
            onChange={(e) => onFiltersChange({ search: e.target.value })}
            className="pl-10 glass"
          />
        </div>
      </div>

      {/* Quick Sort */}
      <div className="hidden sm:block">
        <Select
          value={filters.sortBy || 'default'}
          onValueChange={(value) => onFiltersChange({ 
            sortBy: value === 'default' ? undefined : value as any 
          })}
        >
          <SelectTrigger className="w-[200px] glass">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Filter Button with Sheet */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground hidden sm:block">
          {resultCount} products
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="glass relative">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 h-5 w-5 p-0 text-xs rounded-full bg-primary">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
              <SheetDescription>
                Find exactly what you're looking for
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}