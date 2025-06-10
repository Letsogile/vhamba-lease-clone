
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingData } from '../OnboardingForm';

interface VehiclePreferencesStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const VehiclePreferencesStep: React.FC<VehiclePreferencesStepProps> = ({ formData, updateFormData }) => {
  const vehicleTypes = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'hatchback', label: 'Hatchback' },
    { value: 'suv', label: 'SUV' },
    { value: 'bakkie', label: 'Bakkie/Pick-up' },
    { value: 'luxury', label: 'Luxury Vehicle' }
  ];

  const budgetRanges = [
    { value: 'R3000-R5000', label: 'R3,000 - R5,000' },
    { value: 'R5000-R8000', label: 'R5,000 - R8,000' },
    { value: 'R8000-R12000', label: 'R8,000 - R12,000' },
    { value: 'R12000-R20000', label: 'R12,000 - R20,000' },
    { value: 'R20000+', label: 'R20,000+' }
  ];

  const popularBrands = [
    'Toyota', 'Volkswagen', 'Ford', 'Hyundai', 'Kia', 'Nissan', 
    'BMW', 'Mercedes-Benz', 'Audi', 'Mazda', 'Honda', 'Isuzu'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Vehicle Preferences</h3>
        <p className="text-muted-foreground mb-6">
          Let us know what type of vehicle you're looking for.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredVehicleType">Preferred Vehicle Type *</Label>
        <Select value={formData.preferredVehicleType} onValueChange={(value) => updateFormData({ preferredVehicleType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select vehicle type" />
          </SelectTrigger>
          <SelectContent>
            {vehicleTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budgetRange">Monthly Budget Range *</Label>
        <Select value={formData.budgetRange} onValueChange={(value) => updateFormData({ budgetRange: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select your budget range" />
          </SelectTrigger>
          <SelectContent>
            {budgetRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredBrand">Preferred Brand (Optional)</Label>
        <Select value={formData.preferredBrand} onValueChange={(value) => updateFormData({ preferredBrand: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select preferred brand (optional)" />
          </SelectTrigger>
          <SelectContent>
            {popularBrands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default VehiclePreferencesStep;
