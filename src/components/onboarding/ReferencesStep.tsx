
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { OnboardingData } from '../OnboardingForm';

interface ReferencesStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const ReferencesStep: React.FC<ReferencesStepProps> = ({ formData, updateFormData }) => {
  const relationshipOptions = [
    'Family Member', 'Friend', 'Colleague', 'Employer', 'Supervisor', 'Neighbor', 'Other'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">References</h3>
        <p className="text-muted-foreground mb-6">
          Please provide two references who can vouch for your character and reliability.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-4 space-y-4">
          <h4 className="font-medium">Reference 1</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="reference1Name">Full Name</Label>
              <Input
                id="reference1Name"
                value={formData.reference1Name}
                onChange={(e) => updateFormData({ reference1Name: e.target.value })}
                placeholder="Reference full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reference1Phone">Phone Number</Label>
              <Input
                id="reference1Phone"
                value={formData.reference1Phone}
                onChange={(e) => updateFormData({ reference1Phone: e.target.value })}
                placeholder="+27 XX XXX XXXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference1Relationship">Relationship</Label>
            <select
              id="reference1Relationship"
              value={formData.reference1Relationship}
              onChange={(e) => updateFormData({ reference1Relationship: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select relationship</option>
              {relationshipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="border rounded-lg p-4 space-y-4">
          <h4 className="font-medium">Reference 2</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="reference2Name">Full Name</Label>
              <Input
                id="reference2Name"
                value={formData.reference2Name}
                onChange={(e) => updateFormData({ reference2Name: e.target.value })}
                placeholder="Reference full name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reference2Phone">Phone Number</Label>
              <Input
                id="reference2Phone"
                value={formData.reference2Phone}
                onChange={(e) => updateFormData({ reference2Phone: e.target.value })}
                placeholder="+27 XX XXX XXXX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reference2Relationship">Relationship</Label>
            <select
              id="reference2Relationship"
              value={formData.reference2Relationship}
              onChange={(e) => updateFormData({ reference2Relationship: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select relationship</option>
              {relationshipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesStep;
