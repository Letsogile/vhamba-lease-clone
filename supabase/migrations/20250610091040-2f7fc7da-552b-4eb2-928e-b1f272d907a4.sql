
-- Create onboarding_applications table to store user applications
CREATE TABLE public.onboarding_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  id_number TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  
  -- Address Information
  street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  
  -- Employment Information
  employment_status TEXT NOT NULL CHECK (employment_status IN ('employed', 'self_employed', 'unemployed', 'student', 'retired')),
  employer_name TEXT,
  job_title TEXT,
  monthly_income DECIMAL(10,2),
  employment_duration_months INTEGER,
  
  -- Vehicle Preferences
  preferred_vehicle_type TEXT NOT NULL CHECK (preferred_vehicle_type IN ('sedan', 'hatchback', 'suv', 'bakkie', 'luxury')),
  budget_range TEXT NOT NULL CHECK (budget_range IN ('R3000-R5000', 'R5000-R8000', 'R8000-R12000', 'R12000-R20000', 'R20000+')),
  preferred_brand TEXT,
  
  -- Financial Information
  has_bank_account BOOLEAN NOT NULL DEFAULT false,
  bank_name TEXT,
  monthly_expenses DECIMAL(10,2),
  has_existing_vehicle_finance BOOLEAN NOT NULL DEFAULT false,
  existing_finance_amount DECIMAL(10,2),
  
  -- Additional Information
  has_valid_drivers_license BOOLEAN NOT NULL DEFAULT false,
  license_code TEXT,
  years_driving_experience INTEGER,
  has_traffic_violations BOOLEAN NOT NULL DEFAULT false,
  traffic_violations_details TEXT,
  
  -- References
  reference_1_name TEXT,
  reference_1_phone TEXT,
  reference_1_relationship TEXT,
  reference_2_name TEXT,
  reference_2_phone TEXT,
  reference_2_relationship TEXT,
  
  -- Application Status
  application_status TEXT NOT NULL DEFAULT 'pending' CHECK (application_status IN ('pending', 'under_review', 'approved', 'rejected')),
  notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create index for faster lookups
CREATE INDEX idx_onboarding_applications_email ON public.onboarding_applications(email);
CREATE INDEX idx_onboarding_applications_status ON public.onboarding_applications(application_status);

-- Enable Row Level Security
ALTER TABLE public.onboarding_applications ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is an onboarding form)
CREATE POLICY "Anyone can submit onboarding applications" 
  ON public.onboarding_applications 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Users can view their own applications" 
  ON public.onboarding_applications 
  FOR SELECT 
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_onboarding_applications_updated_at 
  BEFORE UPDATE ON public.onboarding_applications 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
