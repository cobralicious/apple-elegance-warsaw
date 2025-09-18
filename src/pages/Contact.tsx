import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/Footer';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">{t('contact.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="product-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="+48 123 456 789" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Product inquiry" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="btn-hero w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="product-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">{t('contact.address')}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {t('location.street')}<br />
                        {t('location.city')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">{t('contact.callUs')}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{t('location.phone')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">{t('contact.emailUs')}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{t('location.email')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="product-card">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">{t('contact.hours')}</h3>
                      <div className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
                        {t('contact.hoursText')}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Find Us</h2>
            <div className="glass rounded-3xl p-6 sm:p-8 text-center">
              <div className="bg-muted rounded-2xl p-8 sm:p-12 lg:p-16 text-muted-foreground">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">🗺️</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Interactive Map</h3>
                <p className="text-base sm:text-lg">
                  Located in the heart of Warsaw on Nowy Świat street
                </p>
                <p className="mt-2">
                  Easy access by metro, bus, and car parking available nearby
                </p>
                <Button className="btn-hero mt-6">
                  {t('contact.getDirections')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;