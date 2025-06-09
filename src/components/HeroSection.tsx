
import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full text-sm font-medium text-accent mb-6">
              <Star className="h-4 w-4" />
              <span>South Africa's Trusted Leasing Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Drive Your
              <span className="text-primary block">Dream Vehicle</span>
              <span className="text-accent">Today</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium vehicle leasing solutions with flexible terms, competitive rates, and exceptional service. 
             Enjoy the Freedom of Preowning Your Car without a heavy Upfront Finacial Burden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                View Our Fleet
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">Fully Insured</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2 mx-auto">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">24/7 Support</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">5-Star Rated</p>
              </div>
            </div>
          </div>

          {/* Right Content - Vehicle Showcase */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Premium vehicle"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating Cards */}
            <Card className="absolute -top-4 -left-4 p-4 bg-background shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -right-4 p-4 bg-background shadow-lg border border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">R4,999</p>
                <p className="text-sm text-muted-foreground">per month</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
