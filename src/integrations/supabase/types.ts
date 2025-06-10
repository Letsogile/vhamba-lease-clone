export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      onboarding_applications: {
        Row: {
          application_status: string
          bank_name: string | null
          budget_range: string
          city: string
          created_at: string
          date_of_birth: string
          email: string
          employer_name: string | null
          employment_duration_months: number | null
          employment_status: string
          existing_finance_amount: number | null
          first_name: string
          has_bank_account: boolean
          has_existing_vehicle_finance: boolean
          has_traffic_violations: boolean
          has_valid_drivers_license: boolean
          id: string
          id_number: string
          job_title: string | null
          last_name: string
          license_code: string | null
          monthly_expenses: number | null
          monthly_income: number | null
          notes: string | null
          phone: string
          postal_code: string
          preferred_brand: string | null
          preferred_vehicle_type: string
          province: string
          reference_1_name: string | null
          reference_1_phone: string | null
          reference_1_relationship: string | null
          reference_2_name: string | null
          reference_2_phone: string | null
          reference_2_relationship: string | null
          street_address: string
          traffic_violations_details: string | null
          updated_at: string
          years_driving_experience: number | null
        }
        Insert: {
          application_status?: string
          bank_name?: string | null
          budget_range: string
          city: string
          created_at?: string
          date_of_birth: string
          email: string
          employer_name?: string | null
          employment_duration_months?: number | null
          employment_status: string
          existing_finance_amount?: number | null
          first_name: string
          has_bank_account?: boolean
          has_existing_vehicle_finance?: boolean
          has_traffic_violations?: boolean
          has_valid_drivers_license?: boolean
          id?: string
          id_number: string
          job_title?: string | null
          last_name: string
          license_code?: string | null
          monthly_expenses?: number | null
          monthly_income?: number | null
          notes?: string | null
          phone: string
          postal_code: string
          preferred_brand?: string | null
          preferred_vehicle_type: string
          province: string
          reference_1_name?: string | null
          reference_1_phone?: string | null
          reference_1_relationship?: string | null
          reference_2_name?: string | null
          reference_2_phone?: string | null
          reference_2_relationship?: string | null
          street_address: string
          traffic_violations_details?: string | null
          updated_at?: string
          years_driving_experience?: number | null
        }
        Update: {
          application_status?: string
          bank_name?: string | null
          budget_range?: string
          city?: string
          created_at?: string
          date_of_birth?: string
          email?: string
          employer_name?: string | null
          employment_duration_months?: number | null
          employment_status?: string
          existing_finance_amount?: number | null
          first_name?: string
          has_bank_account?: boolean
          has_existing_vehicle_finance?: boolean
          has_traffic_violations?: boolean
          has_valid_drivers_license?: boolean
          id?: string
          id_number?: string
          job_title?: string | null
          last_name?: string
          license_code?: string | null
          monthly_expenses?: number | null
          monthly_income?: number | null
          notes?: string | null
          phone?: string
          postal_code?: string
          preferred_brand?: string | null
          preferred_vehicle_type?: string
          province?: string
          reference_1_name?: string | null
          reference_1_phone?: string | null
          reference_1_relationship?: string | null
          reference_2_name?: string | null
          reference_2_phone?: string | null
          reference_2_relationship?: string | null
          street_address?: string
          traffic_violations_details?: string | null
          updated_at?: string
          years_driving_experience?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
