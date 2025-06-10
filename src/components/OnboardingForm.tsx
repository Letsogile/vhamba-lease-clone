
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import PersonalInfoStep from './onboarding/PersonalInfoStep';
import AddressStep from './onboarding/AddressStep';
import EmploymentStep from './onboarding/EmploymentStep';
import VehiclePreferencesStep from './onboarding/VehiclePreferencesStep';
import FinancialInfoStep from './onboarding/FinancialInfoStep';
import AdditionalInfoStep from './onboarding/AdditionalInfoStep';
import ReferencesStep from './onboarding/ReferencesStep';
import ReviewStep from './onboarding/ReviewStep';

export interface OnboardingData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  idNumber: string;
  dateOfBirth: string;
  
  // Address Information
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  
  // Employment Information
  employmentStatus: string;
  employerName: string;
  jobTitle: string;
  monthlyIncome: string;
  employmentDurationMonths: string;
  
  // Vehicle Preferences
  preferredVehicleType: string;
  budgetRange: string;
  preferredBrand: string;
  
  // Financial Information
  hasBankAccount: boolean;
  bankName: string;
  monthlyExpenses: string;
  hasExistingVehicleFinance: boolean;
  existingFinanceAmount: string;
  
  // Additional Information
  hasValidDriversLicense: boolean;
  licenseCode: string;
  yearsDrivingExperience: string;
  hasTrafficViolations: boolean;
  trafficViolationsDetails: string;
  
  // References
  reference1Name: string;
  reference1Phone: string;
  reference1Relationship: string;
  reference2Name: string;
  reference2Phone: string;
  reference2Relationship: string;
}

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<OnboardingData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    dateOfBirth: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    employmentStatus: '',
    employerName: '',
    jobTitle: '',
    monthlyIncome: '',
    employmentDurationMonths: '',
    preferredVehicleType: '',
    budgetRange: '',
    preferredBrand: '',
    hasBankAccount: false,
    bankName: '',
    monthlyExpenses: '',
    hasExistingVehicleFinance: false,
    existingFinanceAmount: '',
    hasValidDriversLicense: false,
    licenseCode: '',
    yearsDrivingExperience: '',
    hasTrafficViolations: false,
    trafficViolationsDetails: '',
    reference1Name: '',
    reference1Phone: '',
    reference1Relationship: '',
    reference2Name: '',
    reference2Phone: '',
    reference2Relationship: '',
  });

  const steps = [
    { title: 'Personal Information', component: PersonalInfoStep },
    { title: 'Address Details', component: AddressStep },
    { title: 'Employment Information', component: EmploymentStep },
    { title: 'Vehicle Preferences', component: VehiclePreferencesStep },
    { title: 'Financial Information', component: FinancialInfoStep },
    { title: 'Additional Information', component: AdditionalInfoStep },
    { title: 'References', component: ReferencesStep },
    { title: 'Review & Submit', component: ReviewStep },
  ];

  const updateFormData = (stepData: Partial<OnboardingData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    try {
      const applicationData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        id_number: formData.idNumber,
        date_of_birth: formData.dateOfBirth,
        street_address: formData.streetAddress,
        city: formData.city,
        province: formData.province,
        postal_code: formData.postalCode,
        employment_status: formData.employmentStatus,
        employer_name: formData.employerName || null,
        job_title: formData.jobTitle || null,
        monthly_income: formData.monthlyIncome ? parseFloat(formData.monthlyIncome) : null,
        employment_duration_months: formData.employmentDurationMonths ? parseInt(formData.employmentDurationMonths) : null,
        preferred_vehicle_type: formData.preferredVehicleType,
        budget_range: formData.budgetRange,
        preferred_brand: formData.preferredBrand || null,
        has_bank_account: formData.hasBankAccount,
        bank_name: formData.bankName || null,
        monthly_expenses: formData.monthlyExpenses ? parseFloat(formData.monthlyExpenses) : null,
        has_existing_vehicle_finance: formData.hasExistingVehicleFinance,
        existing_finance_amount: formData.existingFinanceAmount ? parseFloat(formData.existingFinanceAmount) : null,
        has_valid_drivers_license: formData.hasValidDriversLicense,
        license_code: formData.licenseCode || null,
        years_driving_experience: formData.yearsDrivingExperience ? parseInt(formData.yearsDrivingExperience) : null,
        has_traffic_violations: formData.hasTrafficViolations,
        traffic_violations_details: formData.trafficViolationsDetails || null,
        reference_1_name: formData.reference1Name || null,
        reference_1_phone: formData.reference1Phone || null,
        reference_1_relationship: formData.reference1Relationship || null,
        reference_2_name: formData.reference2Name || null,
        reference_2_phone: formData.reference2Phone || null,
        reference_2_relationship: formData.reference2Relationship || null,
      };

      const { error } = await supabase
        .from('onboarding_applications')
        .insert([applicationData]);

      if (error) throw error;

      setIsCompleted(true);
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 24-48 hours.",
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 p-4">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Application Submitted!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your interest in Vhamba Rent To Own. We've received your application and will review it within 24-48 hours.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              You'll receive an email confirmation shortly, and our team will contact you to discuss the next steps.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/'}
              className="bg-primary hover:bg-primary/90"
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const CurrentStepComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <div>
                <CardTitle className="text-2xl">Vehicle Rental Application</CardTitle>
                <CardDescription>
                  Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
                </CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round(progress)}% Complete
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="p-8">
            <CurrentStepComponent 
              formData={formData} 
              updateFormData={updateFormData}
            />

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={submitApplication}
                  disabled={isSubmitting}
                  className="flex items-center bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="flex items-center bg-primary hover:bg-primary/90"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingForm;
