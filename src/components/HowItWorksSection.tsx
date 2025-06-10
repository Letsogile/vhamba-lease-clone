import React from 'react';
import { Search, FileCheck, Car, Key } from 'lucide-react';

const HowItWorksSection = () => {
  const handleGetStarted = () => {
    window.location.href = '/onboarding';
  };

  const steps = [
    {
      icon: Search,
      title: 'Browse & Select',
      description: 'Browse our extensive fleet of premium vehicles and select the one that suits your needs and lifestyle.',
      step: '01'
    },
    {
      icon: FileCheck,
      title: 'Apply & Approve',
      description: 'Complete our simple online application. Get pre-approved within minutes with our streamlined process.',
      step: '02'
    },
    {
      icon: Car,
      title: 'Customize Terms',
      description: 'Work with our experts to customize lease terms, monthly payments, and additional services.',
      step: '03'
    },
    {
      icon: Key,
      title: 'Drive Away',
      description: 'Sign your agreement and drive away the same day. Start enjoying your new vehicle immediately.',
      step: '04'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple 4-step process gets you behind the wheel of your dream vehicle 
            quickly and easily. No hassle, no stress.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="relative text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-xl font-bold mb-6 z-10">
                  {step.step}
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who chose Vhamba Rent To Own for their vehicle needs. 
              Start your journey today.
            </p>
            <button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={handleGetStarted}
            >
              Start Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
