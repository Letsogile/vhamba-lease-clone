
import React from 'react';
import { Fuel, Users, Cog, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VehiclesSection = () => {
  const categories = [
    {
      title: 'Hatchbacks',
      image: 'https://marketplace.flexclub.co.za/offer/664c7693180d98f588d613e8?startDate=&duration=6&location=&referral=',
      count: '12+ Models',
      description: 'Efficient and practical'
    },
    {
      title: 'Sedans',
      image: 'https://marketplace.flexclub.co.za/offer/66d24b0d92d5afe551fc1ce9?startDate=&duration=6&location=&referral=',
      count: '15+ Models',
      description: 'Comfort and elegance'
    },
    {
      title: 'SUVs',
      image: 'https://marketplace.flexclub.co.za/offer/65c6060b7247ca741ec54e39?startDate=&duration=6&location=&referral=',
      count: '10+ Models',
      description: 'Space and versatility'
    },
    {
      title: 'Bakkies',
      image: 'https://marketplace.flexclub.co.za/?page=3',
      count: '8+ Models',
      description: 'Utility and strength'
    }
  ];

  const featuredVehicles = [
    {
      name: 'Volkswagen Polo Vivo',
      category: 'Hatchback',
      image: 'https://images.unsplash.com/photo-1549927681-0b673b922a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      price: 'R3,990',
      rating: 4.7,
      features: {
        fuel: 'Petrol',
        seats: '5 Seats',
        transmission: 'Manual'
      }
    },
    {
      name: 'Toyota Corolla Quest',
      category: 'Sedan',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      price: 'R4,990',
      rating: 4.8,
      features: {
        fuel: 'Petrol',
        seats: '5 Seats',
        transmission: 'Manual'
      }
    },
    {
      name: 'Hyundai Creta',
      category: 'SUV',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      price: 'R6,490',
      rating: 4.6,
      features: {
        fuel: 'Petrol',
        seats: '5 Seats',
        transmission: 'Automatic'
      }
    },
    {
      name: 'Ford Ranger',
      category: 'Bakkie',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      price: 'R8,990',
      rating: 4.9,
      features: {
        fuel: 'Diesel',
        seats: '5 Seats',
        transmission: 'Manual'
      }
    },
    {
      name: 'Suzuki Swift',
      category: 'Hatchback',
      image: 'https://images.unsplash.com/photo-1549927681-0b673b922a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      price: 'R4,490',
      rating: 4.5,
      features: {
        fuel: 'Petrol',
        seats: '5 Seats',
        transmission: 'Manual'
      }
    },
    {
      name: 'Kia Picanto',
      category: 'Hatchback',
      image: 'https://images.unsplash.com/photo-1549927681-0b673b922a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      price: 'R3,490',
      rating: 4.4,
      features: {
        fuel: 'Petrol',
        seats: '5 Seats',
        transmission: 'Manual'
      }
    }
  ];

  return (
    <section id="vehicles" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our diverse collection of vehicles, from affordable hatchbacks 
            to reliable bakkies. All vehicles are maintained to the highest standards with flexible rent-to-own terms.
          </p>
        </div>

        {/* Vehicle Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Vehicles */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Vehicles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <Card 
                key={vehicle.name} 
                className="group hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 text-xs font-medium text-primary">
                    {vehicle.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{vehicle.name}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-muted-foreground">{vehicle.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{vehicle.price}</p>
                      <p className="text-sm text-muted-foreground">per month</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-1">
                      <Fuel className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{vehicle.features.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{vehicle.features.seats}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Cog className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{vehicle.features.transmission}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Vehicles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
