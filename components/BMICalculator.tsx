'use client';

import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { RadioGroup } from './ui/RadioGroup';
import { BMIFormData, BMIResponse } from '@/types/api';
import { validateBMIData, getBMICategory } from '@/lib/utils';

export const BMICalculator: React.FC = () => {
  const [formData, setFormData] = useState<BMIFormData>({
    measurement_units: 'std',
    feet: undefined,
    inches: undefined,
    lbs: undefined,
    cm: undefined,
    kg: undefined,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BMIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleMeasurementUnitChange = (value: string) => {
    setFormData({
      ...formData,
      measurement_units: value as 'std' | 'metric',
      // Clear values when switching units
      feet: undefined,
      inches: undefined,
      lbs: undefined,
      cm: undefined,
      kg: undefined,
    });
    setResult(null);
    setError(null);
    setValidationErrors([]);
  };

  const handleInputChange = (field: keyof BMIFormData, value: string) => {
    const numValue = value === '' ? undefined : Number(value);
    setFormData({
      ...formData,
      [field]: numValue,
    });
    setResult(null);
    setError(null);
  };

  const handleCalculate = async () => {
    setError(null);
    setValidationErrors([]);
    setResult(null);

    // Validate input
    const validation = validateBMIData(formData);
    if (!validation.isValid) {
      setValidationErrors(validation.errors);
      return;
    }

    setLoading(true);

    try {
      // Build query parameters
      const params = new URLSearchParams();
      // API expects 'met' not 'metric' for metric units
      const apiMeasurementUnits = formData.measurement_units === 'metric' ? 'met' : 'std';
      params.append('measurement_units', apiMeasurementUnits);

      if (formData.measurement_units === 'std') {
        if (formData.feet !== undefined) params.append('feet', String(formData.feet));
        if (formData.inches !== undefined) params.append('inches', String(formData.inches));
        if (formData.lbs !== undefined) params.append('lbs', String(formData.lbs));
      } else {
        if (formData.cm !== undefined) params.append('cm', String(formData.cm));
        // API expects 'kilos' not 'kg' for metric weight
        if (formData.kg !== undefined) params.append('kilos', String(formData.kg));
      }

      const response = await fetch(`/api/bmi?${params.toString()}`);
      const data: BMIResponse = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to calculate BMI');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const bmiValue = result?.bmi ? (typeof result.bmi === 'number' ? result.bmi : parseFloat(String(result.bmi))) : null;
  const bmiCategory = bmiValue ? getBMICategory(bmiValue) : null;

  return (
    <Card title="BMI Calculator">
      <div className="space-y-6">
        <RadioGroup
          label="Measurement Units"
          name="measurement_units"
          options={[
            { value: 'std', label: 'Standard (feet, inches, lbs)' },
            { value: 'metric', label: 'Metric (cm, kg)' },
          ]}
          value={formData.measurement_units}
          onChange={handleMeasurementUnitChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {formData.measurement_units === 'std' ? (
            <>
              <Input
                label="Feet"
                type="number"
                min={3}
                max={8}
                value={formData.feet || ''}
                onChange={(e) => handleInputChange('feet', e.target.value)}
                placeholder="5"
              />
              <Input
                label="Inches"
                type="number"
                min={0}
                max={11}
                value={formData.inches || ''}
                onChange={(e) => handleInputChange('inches', e.target.value)}
                placeholder="2"
              />
              <Input
                label="Weight (lbs)"
                type="number"
                min={50}
                max={500}
                value={formData.lbs || ''}
                onChange={(e) => handleInputChange('lbs', e.target.value)}
                placeholder="120"
              />
            </>
          ) : (
            <>
              <Input
                label="Height (cm)"
                type="number"
                min={90}
                max={250}
                value={formData.cm || ''}
                onChange={(e) => handleInputChange('cm', e.target.value)}
                placeholder="157"
              />
              <Input
                label="Weight (kg)"
                type="number"
                min={20}
                max={250}
                value={formData.kg || ''}
                onChange={(e) => handleInputChange('kg', e.target.value)}
                placeholder="54"
              />
            </>
          )}
        </div>

        {validationErrors.length > 0 && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">
              Please fix the following errors:
            </p>
            <ul className="list-disc list-inside text-sm text-red-600 dark:text-red-400 space-y-1">
              {validationErrors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <Button
          onClick={handleCalculate}
          isLoading={loading}
          className="w-full"
        >
          Calculate BMI
        </Button>

        {result?.bmi && bmiCategory && (
          <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Your BMI Results
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">BMI Value</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {typeof result.bmi === 'number' ? result.bmi.toFixed(1) : parseFloat(String(result.bmi)).toFixed(1)}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium text-white ${bmiCategory.color}`}
                  >
                    {bmiCategory.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {bmiCategory.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <strong>BMI Categories:</strong> Underweight: &lt;18.5 | Normal: 18.5-24.9 | Overweight: 25-29.9 | Obese: ≥30
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

