
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import VehiclesSection from '@/components/VehiclesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <VehiclesSection />
      <Footer />
    </div>
  );
};

export default Index;
