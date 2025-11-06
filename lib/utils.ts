export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function validateBMIData(data: {
  measurement_units: string;
  feet?: number;
  inches?: number;
  lbs?: number;
  cm?: number;
  kg?: number;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (data.measurement_units === 'std') {
    if (!data.feet || data.feet < 3 || data.feet > 8) {
      errors.push('Feet must be between 3 and 8');
    }
    if (data.inches === undefined || data.inches < 0 || data.inches > 11) {
      errors.push('Inches must be between 0 and 11');
    }
    if (!data.lbs || data.lbs < 50 || data.lbs > 500) {
      errors.push('Weight must be between 50 and 500 lbs');
    }
  } else {
    if (!data.cm || data.cm < 90 || data.cm > 250) {
      errors.push('Height must be between 90 and 250 cm');
    }
    if (!data.kg || data.kg < 20 || data.kg > 250) {
      errors.push('Weight must be between 20 and 250 kg');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateNutritionData(data: {
  measurement_units: string;
  feet?: number;
  inches?: number;
  lbs?: number;
  cm?: number;
  kg?: number;
  sex?: string;
  age_value?: number;
  age_type?: string;
  activity_level?: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Validate BMI fields first
  const bmiValidation = validateBMIData(data);
  errors.push(...bmiValidation.errors);

  // Validate additional nutrition fields
  if (!data.sex || (data.sex !== 'male' && data.sex !== 'female')) {
    errors.push('Please select a valid sex');
  }

  if (!data.age_value || data.age_value < 1) {
    errors.push('Age must be at least 1');
  }

  if (data.age_type === 'yrs' && (!data.age_value || data.age_value > 120)) {
    errors.push('Age in years must be between 1 and 120');
  }

  if ((data.age_type === 'mos' || data.age_type === 'months') && (!data.age_value || data.age_value > 1440)) {
    errors.push('Age in months must be between 1 and 1440');
  }

  if (!data.activity_level) {
    errors.push('Please select an activity level');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function getBMICategory(bmi: number): {
  category: string;
  color: string;
  description: string;
} {
  if (bmi < 18.5) {
    return {
      category: 'Underweight',
      color: 'bg-blue-500',
      description: 'You may need to gain weight. Consider consulting a healthcare provider.',
    };
  } else if (bmi < 25) {
    return {
      category: 'Normal Weight',
      color: 'bg-green-500',
      description: 'You are within a healthy weight range for your height.',
    };
  } else if (bmi < 30) {
    return {
      category: 'Overweight',
      color: 'bg-yellow-500',
      description: 'You may benefit from weight management strategies.',
    };
  } else {
    return {
      category: 'Obese',
      color: 'bg-red-500',
      description: 'Consider consulting a healthcare provider for weight management guidance.',
    };
  }
}

