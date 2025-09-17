import { Badge } from '@/components/ui/badge';
import { Sparkles, TrendingUp, Clock, Star } from 'lucide-react';

interface ProductBadgeProps {
  type: 'new' | 'bestseller' | 'limited' | 'discount';
  value?: number;
  className?: string;
}

export function ProductBadge({ type, value, className = '' }: ProductBadgeProps) {
  const badgeConfig = {
    new: {
      label: 'New',
      icon: Sparkles,
      className: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 animate-pulse'
    },
    bestseller: {
      label: 'Bestseller',
      icon: TrendingUp,
      className: 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-0'
    },
    limited: {
      label: 'Limited Edition',
      icon: Star,
      className: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 animate-bounce'
    },
    discount: {
      label: value ? `-${value}%` : 'Sale',
      icon: Clock,
      className: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0'
    }
  };

  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <Badge className={`${config.className} ${className} font-semibold text-xs px-3 py-1 flex items-center gap-1 shadow-lg`}>
      <Icon className="h-3 w-3" />
      {config.label}
    </Badge>
  );
}