import iphoneImage from '@/assets/iphone-15-pro-max.jpg';
import macbookImage from '@/assets/macbook-pro-14.jpg';
import watchImage from '@/assets/apple-watch-series-9.jpg';
import imacImage from '@/assets/imac-24-blue.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'iphone' | 'macbook' | 'watch' | 'imac';
  description: string;
  features: string[];
  specs: Record<string, string>;
  colors: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  isLimited?: boolean;
  inStock: boolean;
  stockCount: number;
}

// Generate random prices for Warsaw market
const generatePrice = (base: number, variation: number = 0.15) => {
  const min = base * (1 - variation);
  const max = base * (1 + variation);
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
};

export const products: Product[] = [
  // iPhone Products
  {
    id: 'iphone-15-pro-max-1tb',
    name: 'iPhone 15 Pro Max 1TB',
    price: generatePrice(1599),
    originalPrice: generatePrice(1699),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 Pro Max with 1TB storage. Titanium design, Action Button, and A17 Pro chip.',
    features: ['A17 Pro chip', 'Titanium design', '48MP Main camera', 'Action Button', '5G connectivity'],
    specs: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '1TB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 29 hours video'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 12
  },
  {
    id: 'iphone-15-pro-max-512gb',
    name: 'iPhone 15 Pro Max 512GB',
    price: generatePrice(1399),
    originalPrice: generatePrice(1499),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 Pro Max with 512GB storage. Perfect balance of performance and storage.',
    features: ['A17 Pro chip', 'Titanium design', '48MP Main camera', 'Action Button', '5G connectivity'],
    specs: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '512GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 29 hours video'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355'],
    isNew: true,
    inStock: true,
    stockCount: 8
  },
  {
    id: 'iphone-15-pro-max-256gb',
    name: 'iPhone 15 Pro Max 256GB',
    price: generatePrice(1299),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 Pro Max with 256GB storage. The most advanced iPhone yet.',
    features: ['A17 Pro chip', 'Titanium design', '48MP Main camera', 'Action Button', '5G connectivity'],
    specs: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 29 hours video'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 15
  },
  {
    id: 'iphone-15-pro-256gb',
    name: 'iPhone 15 Pro 256GB',
    price: generatePrice(1199),
    originalPrice: generatePrice(1299),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 Pro with titanium design and A17 Pro chip.',
    features: ['A17 Pro chip', 'Titanium design', '48MP Main camera', 'Action Button', '5G connectivity'],
    specs: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 23 hours video'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355'],
    isNew: true,
    inStock: true,
    stockCount: 10
  },
  {
    id: 'iphone-15-pro-128gb',
    name: 'iPhone 15 Pro 128GB',
    price: generatePrice(1099),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 Pro entry model with professional features.',
    features: ['A17 Pro chip', 'Titanium design', '48MP Main camera', 'Action Button', '5G connectivity'],
    specs: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '128GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 23 hours video'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#4a4a4a', '#8b7355'],
    isNew: true,
    inStock: true,
    stockCount: 18
  },
  {
    id: 'iphone-15-plus-256gb',
    name: 'iPhone 15 Plus 256GB',
    price: generatePrice(999),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 Plus with larger display and all-day battery.',
    features: ['A16 Bionic chip', 'Dynamic Island', '48MP Main camera', 'USB-C', '5G connectivity'],
    specs: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A16 Bionic',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 26 hours video'
    },
    colors: ['#1d1d1f', '#ff69b4', '#87ceeb', '#90ee90', '#ffb6c1'],
    inStock: true,
    stockCount: 14
  },
  {
    id: 'iphone-15-256gb',
    name: 'iPhone 15 256GB',
    price: generatePrice(899),
    originalPrice: generatePrice(949),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 with Dynamic Island and 48MP camera system.',
    features: ['A16 Bionic chip', 'Dynamic Island', '48MP Main camera', 'USB-C', '5G connectivity'],
    specs: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A16 Bionic',
      'Storage': '256GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 20 hours video'
    },
    colors: ['#1d1d1f', '#ff69b4', '#87ceeb', '#90ee90', '#ffb6c1'],
    isBestseller: true,
    inStock: true,
    stockCount: 22
  },
  {
    id: 'iphone-15-128gb',
    name: 'iPhone 15 128GB',
    price: generatePrice(829),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 15 entry model with Dynamic Island.',
    features: ['A16 Bionic chip', 'Dynamic Island', '48MP Main camera', 'USB-C', '5G connectivity'],
    specs: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A16 Bionic',
      'Storage': '128GB',
      'Camera': '48MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 20 hours video'
    },
    colors: ['#1d1d1f', '#ff69b4', '#87ceeb', '#90ee90', '#ffb6c1'],
    inStock: true,
    stockCount: 25
  },
  {
    id: 'iphone-14-256gb',
    name: 'iPhone 14 256GB',
    price: generatePrice(749),
    originalPrice: generatePrice(829),
    image: iphoneImage,
    category: 'iphone',
    description: 'iPhone 14 with advanced dual-camera system.',
    features: ['A15 Bionic chip', 'Dual camera system', 'Ceramic Shield', 'MagSafe', '5G connectivity'],
    specs: {
      'Display': '6.1" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Storage': '256GB',
      'Camera': '12MP Main, 12MP Ultra Wide',
      'Battery': 'Up to 20 hours video'
    },
    colors: ['#1d1d1f', '#4169e1', '#dc143c', '#ffd700', '#9370db'],
    inStock: true,
    stockCount: 16
  },
  {
    id: 'iphone-se-256gb',
    name: 'iPhone SE 256GB',
    price: generatePrice(529),
    image: iphoneImage,
    category: 'iphone',
    description: 'Most affordable iPhone with A15 Bionic chip.',
    features: ['A15 Bionic chip', 'Touch ID', '12MP camera', 'Wireless charging', '5G connectivity'],
    specs: {
      'Display': '4.7" Retina HD',
      'Chip': 'A15 Bionic',
      'Storage': '256GB',
      'Camera': '12MP Main',
      'Battery': 'Up to 15 hours video'
    },
    colors: ['#1d1d1f', '#ff6b6b', '#ffffff'],
    inStock: true,
    stockCount: 30
  },

  // MacBook Products
  {
    id: 'macbook-pro-16-m3-max',
    name: 'MacBook Pro 16" M3 Max',
    price: generatePrice(3999),
    originalPrice: generatePrice(4299),
    image: macbookImage,
    category: 'macbook',
    description: 'Ultimate MacBook Pro with M3 Max chip and 40-core GPU.',
    features: ['M3 Max chip', '40-core GPU', '128GB unified memory', '8TB SSD', 'Liquid Retina XDR display'],
    specs: {
      'Chip': 'Apple M3 Max',
      'Memory': '128GB unified memory',
      'Storage': '8TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Battery': 'Up to 22 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0'],
    isNew: true,
    isLimited: true,
    inStock: true,
    stockCount: 3
  },
  {
    id: 'macbook-pro-16-m3-pro',
    name: 'MacBook Pro 16" M3 Pro',
    price: generatePrice(2799),
    originalPrice: generatePrice(2999),
    image: macbookImage,
    category: 'macbook',
    description: 'MacBook Pro 16" with M3 Pro chip for professionals.',
    features: ['M3 Pro chip', '18-core GPU', '36GB unified memory', '1TB SSD', 'Liquid Retina XDR display'],
    specs: {
      'Chip': 'Apple M3 Pro',
      'Memory': '36GB unified memory',
      'Storage': '1TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Battery': 'Up to 22 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 7
  },
  {
    id: 'macbook-pro-14-m3-max',
    name: 'MacBook Pro 14" M3 Max',
    price: generatePrice(3199),
    image: macbookImage,
    category: 'macbook',
    description: 'Compact powerhouse with M3 Max chip.',
    features: ['M3 Max chip', '40-core GPU', '64GB unified memory', '2TB SSD', 'Liquid Retina XDR display'],
    specs: {
      'Chip': 'Apple M3 Max',
      'Memory': '64GB unified memory',
      'Storage': '2TB SSD',
      'Display': '14.2" Liquid Retina XDR',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0'],
    isNew: true,
    inStock: true,
    stockCount: 5
  },
  {
    id: 'macbook-pro-14-m3-pro',
    name: 'MacBook Pro 14" M3 Pro',
    price: generatePrice(2199),
    originalPrice: generatePrice(2399),
    image: macbookImage,
    category: 'macbook',
    description: 'MacBook Pro 14" with M3 Pro performance.',
    features: ['M3 Pro chip', '18-core GPU', '18GB unified memory', '1TB SSD', 'Liquid Retina XDR display'],
    specs: {
      'Chip': 'Apple M3 Pro',
      'Memory': '18GB unified memory',
      'Storage': '1TB SSD',
      'Display': '14.2" Liquid Retina XDR',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 12
  },
  {
    id: 'macbook-pro-14-m3',
    name: 'MacBook Pro 14" M3',
    price: generatePrice(1799),
    image: macbookImage,
    category: 'macbook',
    description: 'Entry-level MacBook Pro with M3 chip.',
    features: ['M3 chip', '10-core GPU', '16GB unified memory', '512GB SSD', 'Liquid Retina XDR display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Display': '14.2" Liquid Retina XDR',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0'],
    isNew: true,
    inStock: true,
    stockCount: 15
  },
  {
    id: 'macbook-air-15-m3',
    name: 'MacBook Air 15" M3',
    price: generatePrice(1499),
    originalPrice: generatePrice(1599),
    image: macbookImage,
    category: 'macbook',
    description: 'Large screen MacBook Air with M3 chip.',
    features: ['M3 chip', '10-core GPU', '16GB unified memory', '512GB SSD', 'Liquid Retina display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Display': '15.3" Liquid Retina',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0', '#ffd700', '#87ceeb'],
    isBestseller: true,
    inStock: true,
    stockCount: 20
  },
  {
    id: 'macbook-air-13-m3',
    name: 'MacBook Air 13" M3',
    price: generatePrice(1299),
    image: macbookImage,
    category: 'macbook',
    description: 'Classic MacBook Air with latest M3 chip.',
    features: ['M3 chip', '10-core GPU', '16GB unified memory', '512GB SSD', 'Liquid Retina display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Display': '13.6" Liquid Retina',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0', '#ffd700', '#87ceeb'],
    isBestseller: true,
    inStock: true,
    stockCount: 25
  },
  {
    id: 'macbook-air-13-m2',
    name: 'MacBook Air 13" M2',
    price: generatePrice(1099),
    originalPrice: generatePrice(1199),
    image: macbookImage,
    category: 'macbook',
    description: 'Previous generation MacBook Air with M2 chip.',
    features: ['M2 chip', '8-core GPU', '8GB unified memory', '256GB SSD', 'Liquid Retina display'],
    specs: {
      'Chip': 'Apple M2',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Display': '13.6" Liquid Retina',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0', '#ffd700', '#87ceeb'],
    inStock: true,
    stockCount: 18
  },

  // Apple Watch Products
  {
    id: 'watch-ultra-2-titanium',
    name: 'Apple Watch Ultra 2 Titanium',
    price: generatePrice(899),
    image: watchImage,
    category: 'watch',
    description: 'Most rugged and capable Apple Watch ever made.',
    features: ['S9 SiP', 'Always-On Retina display', 'Titanium case', 'Action Button', 'Precision dual-frequency GPS'],
    specs: {
      'Case Size': '49mm',
      'Display': 'Always-On Retina LTPO OLED',
      'Chip': 'S9 SiP',
      'Storage': '64GB',
      'Battery': 'Up to 36 hours'
    },
    colors: ['#ff6600'],
    isNew: true,
    isLimited: true,
    inStock: true,
    stockCount: 8
  },
  {
    id: 'watch-series-9-45mm-cellular',
    name: 'Apple Watch Series 9 45mm GPS + Cellular',
    price: generatePrice(529),
    originalPrice: generatePrice(579),
    image: watchImage,
    category: 'watch',
    description: 'Apple Watch Series 9 with cellular connectivity.',
    features: ['S9 SiP', 'Always-On Retina display', 'Double Tap gesture', 'Fast charging', 'Cellular connectivity'],
    specs: {
      'Case Size': '45mm',
      'Display': 'Always-On Retina LTPO OLED',
      'Chip': 'S9 SiP',
      'Storage': '64GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#8b0000', '#000080', '#ff69b4'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 15
  },
  {
    id: 'watch-series-9-45mm-gps',
    name: 'Apple Watch Series 9 45mm GPS',
    price: generatePrice(459),
    image: watchImage,
    category: 'watch',
    description: 'Apple Watch Series 9 with GPS tracking.',
    features: ['S9 SiP', 'Always-On Retina display', 'Double Tap gesture', 'Fast charging', 'GPS tracking'],
    specs: {
      'Case Size': '45mm',
      'Display': 'Always-On Retina LTPO OLED',
      'Chip': 'S9 SiP',
      'Storage': '64GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#8b0000', '#000080', '#ff69b4'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 22
  },
  {
    id: 'watch-series-9-41mm-cellular',
    name: 'Apple Watch Series 9 41mm GPS + Cellular',
    price: generatePrice(499),
    image: watchImage,
    category: 'watch',
    description: 'Compact Apple Watch Series 9 with cellular.',
    features: ['S9 SiP', 'Always-On Retina display', 'Double Tap gesture', 'Fast charging', 'Cellular connectivity'],
    specs: {
      'Case Size': '41mm',
      'Display': 'Always-On Retina LTPO OLED',
      'Chip': 'S9 SiP',
      'Storage': '64GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#8b0000', '#000080', '#ff69b4'],
    isNew: true,
    inStock: true,
    stockCount: 18
  },
  {
    id: 'watch-series-9-41mm-gps',
    name: 'Apple Watch Series 9 41mm GPS',
    price: generatePrice(429),
    originalPrice: generatePrice(479),
    image: watchImage,
    category: 'watch',
    description: 'Entry-level Apple Watch Series 9.',
    features: ['S9 SiP', 'Always-On Retina display', 'Double Tap gesture', 'Fast charging', 'GPS tracking'],
    specs: {
      'Case Size': '41mm',
      'Display': 'Always-On Retina LTPO OLED',
      'Chip': 'S9 SiP',
      'Storage': '64GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#f5f5dc', '#8b0000', '#000080', '#ff69b4'],
    isNew: true,
    inStock: true,
    stockCount: 25
  },
  {
    id: 'watch-se-44mm-cellular',
    name: 'Apple Watch SE 44mm GPS + Cellular',
    price: generatePrice(349),
    image: watchImage,
    category: 'watch',
    description: 'Essential Apple Watch features with cellular.',
    features: ['S8 SiP', 'Retina display', 'Crash Detection', 'Water resistant', 'Cellular connectivity'],
    specs: {
      'Case Size': '44mm',
      'Display': 'Retina LTPO OLED',
      'Chip': 'S8 SiP',
      'Storage': '32GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0', '#8b0000'],
    inStock: true,
    stockCount: 20
  },
  {
    id: 'watch-se-44mm-gps',
    name: 'Apple Watch SE 44mm GPS',
    price: generatePrice(279),
    originalPrice: generatePrice(329),
    image: watchImage,
    category: 'watch',
    description: 'Most affordable Apple Watch with essential features.',
    features: ['S8 SiP', 'Retina display', 'Crash Detection', 'Water resistant', 'GPS tracking'],
    specs: {
      'Case Size': '44mm',
      'Display': 'Retina LTPO OLED',
      'Chip': 'S8 SiP',
      'Storage': '32GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0', '#8b0000'],
    isBestseller: true,
    inStock: true,
    stockCount: 30
  },
  {
    id: 'watch-se-40mm-gps',
    name: 'Apple Watch SE 40mm GPS',
    price: generatePrice(249),
    image: watchImage,
    category: 'watch',
    description: 'Compact and affordable Apple Watch SE.',
    features: ['S8 SiP', 'Retina display', 'Crash Detection', 'Water resistant', 'GPS tracking'],
    specs: {
      'Case Size': '40mm',
      'Display': 'Retina LTPO OLED',
      'Chip': 'S8 SiP',
      'Storage': '32GB',
      'Battery': 'Up to 18 hours'
    },
    colors: ['#1d1d1f', '#c0c0c0', '#8b0000'],
    inStock: true,
    stockCount: 35
  },

  // iMac Products
  {
    id: 'imac-24-m3-2tb',
    name: 'iMac 24" M3 2TB',
    price: generatePrice(2199),
    originalPrice: generatePrice(2399),
    image: imacImage,
    category: 'imac',
    description: 'Top-spec iMac 24" with maximum storage.',
    features: ['M3 chip', '10-core GPU', '24GB unified memory', '2TB SSD', '4.5K Retina display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '24GB unified memory',
      'Storage': '2TB SSD',
      'Display': '24" 4.5K Retina',
      'Ports': '4x Thunderbolt, 2x USB 3'
    },
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335', '#ff6d01', '#af52de', '#1d1d1f'],
    isNew: true,
    isLimited: true,
    inStock: true,
    stockCount: 4
  },
  {
    id: 'imac-24-m3-1tb',
    name: 'iMac 24" M3 1TB',
    price: generatePrice(1799),
    image: imacImage,
    category: 'imac',
    description: 'iMac 24" with M3 chip and 1TB storage.',
    features: ['M3 chip', '10-core GPU', '16GB unified memory', '1TB SSD', '4.5K Retina display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '16GB unified memory',
      'Storage': '1TB SSD',
      'Display': '24" 4.5K Retina',
      'Ports': '4x Thunderbolt, 2x USB 3'
    },
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335', '#ff6d01', '#af52de', '#1d1d1f'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 8
  },
  {
    id: 'imac-24-m3-512gb',
    name: 'iMac 24" M3 512GB',
    price: generatePrice(1599),
    originalPrice: generatePrice(1699),
    image: imacImage,
    category: 'imac',
    description: 'Standard iMac 24" with M3 chip.',
    features: ['M3 chip', '10-core GPU', '16GB unified memory', '512GB SSD', '4.5K Retina display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Display': '24" 4.5K Retina',
      'Ports': '4x Thunderbolt, 2x USB 3'
    },
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335', '#ff6d01', '#af52de', '#1d1d1f'],
    isNew: true,
    isBestseller: true,
    inStock: true,
    stockCount: 12
  },
  {
    id: 'imac-24-m3-256gb',
    name: 'iMac 24" M3 256GB',
    price: generatePrice(1399),
    image: imacImage,
    category: 'imac',
    description: 'Entry-level iMac 24" with M3 chip.',
    features: ['M3 chip', '8-core GPU', '8GB unified memory', '256GB SSD', '4.5K Retina display'],
    specs: {
      'Chip': 'Apple M3',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Display': '24" 4.5K Retina',
      'Ports': '2x Thunderbolt, 2x USB 3'
    },
    colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335'],
    isNew: true,
    inStock: true,
    stockCount: 15
  }
];

// Utility functions
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isBestseller || product.isNew).slice(0, 8);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getBestsellerProducts = () => {
  return products.filter(product => product.isBestseller);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getProductsByPriceRange = (min: number, max: number) => {
  return products.filter(product => product.price >= min && product.price <= max);
};