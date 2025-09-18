import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from '@/components/Footer';
import iphoneImage from '@/assets/iphone-15-pro-max.jpg';
import macbookImage from '@/assets/macbook-pro-14.jpg';

const Cart = () => {
  const { t } = useTranslation();

  // Mock cart items - in real app this would come from state management
  const cartItems = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      price: 1299,
      quantity: 1,
      image: iphoneImage,
      color: 'Natural Titanium'
    },
    {
      id: '2', 
      name: 'MacBook Pro 14"',
      price: 1999,
      quantity: 1,
      image: macbookImage,
      color: 'Space Black'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.23; // 23% VAT in Poland
  const total = subtotal + tax;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('cart.title')}</span>
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            // Empty Cart
            <div className="max-w-2xl mx-auto text-center">
              <div className="glass p-16 rounded-3xl">
                <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">{t('cart.empty')}</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Start shopping to add items to your cart
                </p>
                <Button asChild className="btn-hero">
                  <Link to="/iphone">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          ) : (
            // Cart with Items
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="product-card">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-xl"
                          />
                          
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                            <p className="text-muted-foreground mb-2">{item.color}</p>
                            <p className="text-2xl font-bold text-primary">
                              ${item.price.toLocaleString()}
                            </p>
                          </div>

                          <div className="flex items-center space-x-3">
                            <Button variant="outline" size="sm">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <Button variant="outline" size="sm">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="product-card sticky top-24">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${subtotal.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>VAT (23%)</span>
                          <span>${tax.toFixed(0)}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span className="text-primary">Free</span>
                        </div>
                        
                        <div className="border-t pt-4">
                          <div className="flex justify-between text-xl font-bold">
                            <span>{t('cart.total')}</span>
                            <span className="text-primary">${total.toFixed(0)}</span>
                          </div>
                        </div>
                      </div>

                      <Button className="btn-hero w-full mt-8">
                        {t('cart.checkout')}
                      </Button>

                      <div className="mt-6 pt-6 border-t text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                          Secure checkout with SSL encryption
                        </p>
                        <div className="flex justify-center space-x-4 text-2xl">
                          💳 🔒 ✅
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;