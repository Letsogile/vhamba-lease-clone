
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OnboardingData } from '../OnboardingForm';

interface ReviewStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ formData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Review Your Application</h3>
        <p className="text-muted-foreground mb-6">
          Please review all the information below before submitting your application.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="grid md:grid-cols-2 gap-4">
              <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>ID Number:</strong> {formData.idNumber}</div>
              <div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div>{formData.streetAddress}</div>
            <div>{formData.city}, {formData.province} {formData.postalCode}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Employment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div><strong>Status:</strong> {formData.employmentStatus}</div>
            {formData.employerName && <div><strong>Employer:</strong> {formData.employerName}</div>}
            {formData.jobTitle && <div><strong>Job Title:</strong> {formData.jobTitle}</div>}
            {formData.monthlyIncome && <div><strong>Monthly Income:</strong> R{formData.monthlyIncome}</div>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Vehicle Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div><strong>Vehicle Type:</strong> {formData.preferredVehicleType}</div>
            <div><strong>Budget Range:</strong> {formData.budgetRange}</div>
            {formData.preferredBrand && <div><strong>Preferred Brand:</strong> {formData.preferredBrand}</div>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Financial Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div><strong>Bank Account:</strong> {formData.hasBankAccount ? 'Yes' : 'No'}</div>
            {formData.bankName && <div><strong>Bank:</strong> {formData.bankName}</div>}
            {formData.monthlyExpenses && <div><strong>Monthly Expenses:</strong> R{formData.monthlyExpenses}</div>}
            <div><strong>Existing Vehicle Finance:</strong> {formData.hasExistingVehicleFinance ? 'Yes' : 'No'}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Driving Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div><strong>Valid License:</strong> {formData.hasValidDriversLicense ? 'Yes' : 'No'}</div>
            {formData.licenseCode && <div><strong>License Code:</strong> {formData.licenseCode}</div>}
            {formData.yearsDrivingExperience && <div><strong>Driving Experience:</strong> {formData.yearsDrivingExperience} years</div>}
            <div><strong>Traffic Violations:</strong> {formData.hasTrafficViolations ? 'Yes' : 'No'}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewStep;
