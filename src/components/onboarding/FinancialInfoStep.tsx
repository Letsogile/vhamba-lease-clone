
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { OnboardingData } from '../OnboardingForm';

interface FinancialInfoStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
}

const FinancialInfoStep: React.FC<FinancialInfoStepProps> = ({ formData, updateFormData }) => {
  const popularBanks = [
    'ABSA', 'Standard Bank', 'FNB', 'Nedbank', 'Capitec Bank', 
    'African Bank', 'Discovery Bank', 'Investec', 'Tyme Bank', 'Other'
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Financial Information</h3>
        <p className="text-muted-foreground mb-6">
          Help us understand your financial situation to find the best rental option for you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasBankAccount"
            checked={formData.hasBankAccount}
            onCheckedChange={(checked) => updateFormData({ hasBankAccount: checked as boolean })}
          />
          <Label htmlFor="hasBankAccount">I have a bank account</Label>
        </div>

        {formData.hasBankAccount && (
          <div className="space-y-2">
            <Label htmlFor="bankName">Bank Name</Label>
            <select
              id="bankName"
              value={formData.bankName}
              onChange={(e) => updateFormData({ bankName: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select your bank</option>
              {popularBanks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthlyExpenses">Monthly Expenses (R)</Label>
        <Input
          id="monthlyExpenses"
          type="number"
          value={formData.monthlyExpenses}
          onChange={(e) => updateFormData({ monthlyExpenses: e.target.value })}
          placeholder="8000"
          min="0"
        />
        <p className="text-sm text-muted-foreground">
          Include rent, utilities, groceries, and other regular expenses
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasExistingVehicleFinance"
            checked={formData.hasExistingVehicleFinance}
            onCheckedChange={(checked) => updateFormData({ hasExistingVehicleFinance: checked as boolean })}
          />
          <Label htmlFor="hasExistingVehicleFinance">I have existing vehicle finance</Label>
        </div>

        {formData.hasExistingVehicleFinance && (
          <div className="space-y-2">
            <Label htmlFor="existingFinanceAmount">Monthly Vehicle Finance Amount (R)</Label>
            <Input
              id="existingFinanceAmount"
              type="number"
              value={formData.existingFinanceAmount}
              onChange={(e) => updateFormData({ existingFinanceAmount: e.target.value })}
              placeholder="3500"
              min="0"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialInfoStep;
