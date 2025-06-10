
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { OnboardingData } from '../OnboardingForm';

interface AdditionalInfoStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const AdditionalInfoStep: React.FC<AdditionalInfoStepProps> = ({ formData, updateFormData }) => {
  const licenseCodes = ['A', 'A1', 'B', 'C', 'C1', 'EB', 'EC', 'EC1'];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
        <p className="text-muted-foreground mb-6">
          Please provide information about your driving history and experience.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasValidDriversLicense"
            checked={formData.hasValidDriversLicense}
            onCheckedChange={(checked) => updateFormData({ hasValidDriversLicense: checked as boolean })}
          />
          <Label htmlFor="hasValidDriversLicense">I have a valid driver's license</Label>
        </div>

        {formData.hasValidDriversLicense && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="licenseCode">License Code</Label>
              <select
                id="licenseCode"
                value={formData.licenseCode}
                onChange={(e) => updateFormData({ licenseCode: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select license code</option>
                {licenseCodes.map((code) => (
                  <option key={code} value={code}>
                    Code {code}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="yearsDrivingExperience">Years of Driving Experience</Label>
              <Input
                id="yearsDrivingExperience"
                type="number"
                value={formData.yearsDrivingExperience}
                onChange={(e) => updateFormData({ yearsDrivingExperience: e.target.value })}
                placeholder="5"
                min="0"
                max="50"
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasTrafficViolations"
            checked={formData.hasTrafficViolations}
            onCheckedChange={(checked) => updateFormData({ hasTrafficViolations: checked as boolean })}
          />
          <Label htmlFor="hasTrafficViolations">I have had traffic violations in the past 3 years</Label>
        </div>

        {formData.hasTrafficViolations && (
          <div className="space-y-2">
            <Label htmlFor="trafficViolationsDetails">Details of Traffic Violations</Label>
            <Textarea
              id="trafficViolationsDetails"
              value={formData.trafficViolationsDetails}
              onChange={(e) => updateFormData({ trafficViolationsDetails: e.target.value })}
              placeholder="Please describe the nature and dates of any traffic violations"
              rows={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfoStep;
