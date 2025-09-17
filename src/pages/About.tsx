import { useTranslation } from 'react-i18next';
import { Award, Users, Shield, Clock } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">About Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Warsaw's premier destination for Apple products since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 rounded-3xl mb-16">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Founded in the heart of Warsaw, our Apple Store has been serving technology enthusiasts 
                  and professionals across Poland for over three years. We started with a simple mission: 
                  to bring the latest Apple innovations to Warsaw with exceptional service and competitive pricing.
                </p>
                <p className="text-xl leading-relaxed mb-6">
                  Located on the prestigious Nowy Świat street, our store combines modern retail design 
                  with Apple's signature minimalist aesthetic. We're more than just a retailer — we're 
                  your partners in discovering how Apple technology can enhance your life and work.
                </p>
                <p className="text-xl leading-relaxed">
                  From the latest iPhone releases to powerful MacBook Pro systems, from elegant Apple 
                  Watches to stunning iMacs, we offer the complete Apple ecosystem with full official 
                  warranty and comprehensive support services.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Premium Quality',
                  description: 'Only authentic Apple products with full manufacturer warranty'
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Certified Apple specialists ready to help you choose the perfect device'
                },
                {
                  icon: Shield,
                  title: 'Secure Shopping',
                  description: 'Safe and secure payment methods with data protection guarantee'
                },
                {
                  icon: Clock,
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support for all your Apple needs'
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="product-card text-center p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'We embrace the latest Apple technologies and share our passion for innovation with our customers.'
                },
                {
                  title: 'Excellence',
                  description: 'Every product we sell and every service we provide meets the highest standards of quality.'
                },
                {
                  title: 'Community',
                  description: 'We\'re proud to be part of Warsaw\'s tech community and contribute to its growth.'
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="glass p-8 rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;