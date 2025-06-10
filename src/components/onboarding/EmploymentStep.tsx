
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingData } from '../OnboardingForm';

interface EmploymentStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const EmploymentStep: React.FC<EmploymentStepProps> = ({ formData, updateFormData }) => {
  const employmentStatuses = [
    { value: 'employed', label: 'Employed' },
    { value: 'self_employed', label: 'Self Employed' },
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'student', label: 'Student' },
    { value: 'retired', label: 'Retired' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Employment Information</h3>
        <p className="text-muted-foreground mb-6">
          Tell us about your current employment status and income.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="employmentStatus">Employment Status *</Label>
        <Select value={formData.employmentStatus} onValueChange={(value) => updateFormData({ employmentStatus: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select your employment status" />
          </SelectTrigger>
          <SelectContent>
            {employmentStatuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {(formData.employmentStatus === 'employed' || formData.employmentStatus === 'self_employed') && (
        <>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employerName">
                {formData.employmentStatus === 'self_employed' ? 'Business Name' : 'Employer Name'}
              </Label>
              <Input
                id="employerName"
                value={formData.employerName}
                onChange={(e) => updateFormData({ employerName: e.target.value })}
                placeholder={formData.employmentStatus === 'self_employed' ? 'Your business name' : 'Company name'}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobTitle">
                {formData.employmentStatus === 'self_employed' ? 'Business Type/Industry' : 'Job Title'}
              </Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => updateFormData({ jobTitle: e.target.value })}
                placeholder={formData.employmentStatus === 'self_employed' ? 'e.g., Construction, Retail' : 'Your job title'}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="monthlyIncome">Monthly Income (R)</Label>
              <Input
                id="monthlyIncome"
                type="number"
                value={formData.monthlyIncome}
                onChange={(e) => updateFormData({ monthlyIncome: e.target.value })}
                placeholder="15000"
                min="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="employmentDurationMonths">
                {formData.employmentStatus === 'self_employed' ? 'Business Duration (months)' : 'Employment Duration (months)'}
              </Label>
              <Input
                id="employmentDurationMonths"
                type="number"
                value={formData.employmentDurationMonths}
                onChange={(e) => updateFormData({ employmentDurationMonths: e.target.value })}
                placeholder="24"
                min="0"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmploymentStep;
