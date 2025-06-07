
import React from 'react';
import { Car, CreditCard, Wrench, FileText, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Vehicle Leasing',
      description: 'Access premium vehicles with flexible leasing terms tailored to your needs and budget.',
      features: ['Flexible terms', 'Latest models', 'Full maintenance included']
    },
    {
      icon: CreditCard,
      title: 'Flexible Financing',
      description: 'Competitive rates and customizable payment plans to suit your financial situation.',
      features: ['Low deposits', 'Competitive rates', 'Quick approval']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance and 24/7 roadside assistance for complete peace of mind.',
      features: ['24/7 roadside assistance', 'Scheduled maintenance', 'Emergency support']
    },
    {
      icon: FileText,
      title: 'Easy Documentation',
      description: 'Streamlined paperwork and digital processes for a hassle-free experience.',
      features: ['Digital contracts', 'Quick processing', 'Transparent terms']
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Dedicated account managers providing personalized service throughout your lease.',
      features: ['Dedicated manager', 'Personal consultation', 'Ongoing support']
    },
    {
      icon: Award,
      title: 'Premium Experience',
      description: 'Award-winning service with attention to detail and customer satisfaction.',
      features: ['Award-winning service', 'Quality guarantee', 'Customer satisfaction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive leasing solutions designed to make vehicle ownership 
            accessible, affordable, and hassle-free for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in border border-border bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
