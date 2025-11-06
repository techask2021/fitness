// API Request Types
export type MeasurementUnits = 'std' | 'metric'; // Internal: 'metric' maps to API 'met'
export type Sex = 'male' | 'female';
export type AgeType = 'yrs' | 'mos'; // API uses 'mos' not 'months'
export type ActivityLevel = 
  | 'Inactive' 
  | 'Low Active' 
  | 'Active' 
  | 'Very Active';

export interface BMIParams {
  measurement_units: MeasurementUnits;
  feet?: number;
  inches?: number;
  lbs?: number;
  cm?: number;
  kg?: number;
}

export interface NutritionInfoParams extends BMIParams {
  sex: Sex;
  age_value: number;
  age_type: AgeType;
  activity_level: ActivityLevel;
}

// API Response Types
export interface BMIResponse {
  bmi?: number;
  status?: string;
  message?: string;
  error?: string;
}

export interface NutritionInfoResponse {
  BMI_EER?: {
    BMI?: string;
    "Estimated Daily Caloric Needs"?: string;
  };
  macronutrients_table?: {
    "macronutrients-table"?: Array<Array<string>>;
  };
  minerals_table?: {
    "essential-minerals-table"?: Array<Array<string>>;
  };
  non_essential_minerals_table?: {
    "non-essential-minerals-table"?: Array<Array<string>>;
  };
  vitamins_table?: {
    "vitamins-table"?: Array<Array<string>>;
  };
  // Legacy fields for backward compatibility
  calories?: number;
  protein?: {
    grams?: number;
    percentage?: number;
  };
  carbohydrates?: {
    grams?: number;
    percentage?: number;
  };
  fats?: {
    grams?: number;
    percentage?: number;
  };
  message?: string;
  error?: string;
}

// Form Data Types
export interface BMIFormData {
  measurement_units: MeasurementUnits;
  feet?: number;
  inches?: number;
  lbs?: number;
  cm?: number;
  kg?: number;
}

export interface NutritionFormData extends BMIFormData {
  sex: Sex;
  age_value?: number;
  age_type: AgeType;
  activity_level: ActivityLevel;
}

