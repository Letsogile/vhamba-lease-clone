
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingData } from '../OnboardingForm';

interface AddressStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const AddressStep: React.FC<AddressStepProps> = ({ formData, updateFormData }) => {
  const provinces = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Address Information</h3>
        <p className="text-muted-foreground mb-6">
          Provide your current residential address details.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="streetAddress">Street Address *</Label>
        <Input
          id="streetAddress"
          value={formData.streetAddress}
          onChange={(e) => updateFormData({ streetAddress: e.target.value })}
          placeholder="123 Main Street, Suburb"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
            placeholder="Enter your city"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="province">Province *</Label>
          <Select value={formData.province} onValueChange={(value) => updateFormData({ province: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select your province" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((province) => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal Code *</Label>
          <Input
            id="postalCode"
            value={formData.postalCode}
            onChange={(e) => updateFormData({ postalCode: e.target.value })}
            placeholder="0000"
            maxLength={4}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default AddressStep;
