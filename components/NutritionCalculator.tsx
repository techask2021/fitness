'use client';

import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Select } from './ui/Select';
import { RadioGroup } from './ui/RadioGroup';
import { NutritionFormData, NutritionInfoResponse } from '@/types/api';
import { validateNutritionData } from '@/lib/utils';

export const NutritionCalculator: React.FC = () => {
  const [formData, setFormData] = useState<NutritionFormData>({
    measurement_units: 'std',
    feet: undefined,
    inches: undefined,
    lbs: undefined,
    cm: undefined,
    kg: undefined,
    sex: 'female',
    age_value: undefined,
    age_type: 'yrs',
    activity_level: 'Active',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NutritionInfoResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleMeasurementUnitChange = (value: string) => {
    setFormData({
      ...formData,
      measurement_units: value as 'std' | 'metric',
      feet: undefined,
      inches: undefined,
      lbs: undefined,
      cm: undefined,
      kg: undefined,
    });
    setResult(null);
    setError(null);
  };

  const handleInputChange = (field: keyof NutritionFormData, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value,
    });
    setResult(null);
    setError(null);
  };

  const handleCalculate = async () => {
    setError(null);
    setValidationErrors([]);
    setResult(null);

    // Validate input
    const validation = validateNutritionData(formData);
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
      params.append('sex', formData.sex);
      // Validation ensures age_value exists, but TypeScript needs a check
      if (formData.age_value !== undefined && formData.age_value !== null) {
        params.append('age_value', String(formData.age_value));
      }
      // API expects 'mos' for age type, which matches our AgeType
      params.append('age_type', formData.age_type);
      // Activity level may contain spaces, URLSearchParams handles encoding automatically
      params.append('activity_level', formData.activity_level.trim());

      if (formData.measurement_units === 'std') {
        if (formData.feet !== undefined && formData.feet !== null) {
          params.append('feet', String(formData.feet));
        }
        if (formData.inches !== undefined && formData.inches !== null) {
          params.append('inches', String(formData.inches));
        }
        if (formData.lbs !== undefined && formData.lbs !== null) {
          params.append('lbs', String(formData.lbs));
        }
      } else {
        // Metric units - API expects 'kilos' not 'kg'
        if (formData.cm !== undefined && formData.cm !== null) {
          params.append('cm', String(formData.cm));
        }
        if (formData.kg !== undefined && formData.kg !== null) {
          params.append('kilos', String(formData.kg));
        }
      }

      const apiUrl = `/api/nutrition-info?${params.toString()}`;
      console.log('Nutrition API request:', apiUrl);

      const response = await fetch(apiUrl);
      const data: NutritionInfoResponse = await response.json();

      console.log('Nutrition API response:', { status: response.status, data });

      if (!response.ok) {
        const errorMessage = data.error || `API request failed: ${response.statusText}`;
        console.error('Nutrition API error:', {
          status: response.status,
          statusText: response.statusText,
          data,
          params: params.toString()
        });
        throw new Error(errorMessage);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      // Check if we have valid result data - check for new API structure
      if (data.BMI_EER?.["Estimated Daily Caloric Needs"] || data.calories) {
        setResult(data);
        setError(null);
      } else {
        console.error('Invalid nutrition response data:', data);
        throw new Error('Invalid response from server. Missing calorie data.');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      console.error('Nutrition calculation error:', err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const activityLevelOptions = [
    { value: 'Inactive', label: 'Inactive (little or no exercise)' },
    { value: 'Low Active', label: 'Low Active (light exercise 1-3 days/week)' },
    { value: 'Active', label: 'Active (moderate to hard exercise 3-7 days/week)' },
    { value: 'Very Active', label: 'Very Active (intense exercise daily or physical job)' },
  ];

  return (
    <Card title="Nutrition Calculator">
      <div className="space-y-6">
        <RadioGroup
          label="Measurement Units"
          name="measurement_units"
          options={[
            { value: 'std', label: 'Standard (feet, inches, lbs)' },
            { value: 'metric', label: 'Metric (cm, kg)' },
          ]}
          value={formData.measurement_units}
          onChange={(value) => handleMeasurementUnitChange(value)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RadioGroup
            label="Biological Sex"
            name="sex"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
            value={formData.sex}
            onChange={(value) => handleInputChange('sex', value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Age"
              type="number"
              min={1}
              max={formData.age_type === 'yrs' ? 120 : 1440}
              value={formData.age_value || ''}
              onChange={(e) => handleInputChange('age_value', e.target.value)}
              placeholder="20"
            />
            <Select
              label="Age Type"
              options={[
                { value: 'yrs', label: 'Years' },
                { value: 'mos', label: 'Months' },
              ]}
              value={formData.age_type}
              onChange={(e) => handleInputChange('age_type', e.target.value)}
            />
          </div>
        </div>

        <Select
          label="Activity Level"
          options={activityLevelOptions}
          value={formData.activity_level}
          onChange={(e) => handleInputChange('activity_level', e.target.value)}
          helperText="Select the activity level that best describes your weekly exercise routine"
        />

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
          Calculate Nutrition Info
        </Button>

        {result && (result.calories || result.BMI_EER?.["Estimated Daily Caloric Needs"]) && (
          <div className="mt-6 space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Your Daily Nutrition Needs
              </h3>

              {/* Calories and BMI */}
              <div className="mb-6 space-y-4">
                {result.BMI_EER && (
                  <>
                    {result.BMI_EER["Estimated Daily Caloric Needs"] && (
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Daily Calories</p>
                        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                          {(() => {
                            const calStr = result.BMI_EER["Estimated Daily Caloric Needs"];
                            // Extract number from string like "2,272 kcal/day" or "2272 kcal/day"
                            const match = calStr.match(/[\d,]+/);
                            return match ? match[0].replace(/,/g, ',') : calStr;
                          })()}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">kcal per day</p>
                      </div>
                    )}
                    {result.BMI_EER.BMI && (
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your BMI</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {result.BMI_EER.BMI}
                        </p>
                      </div>
                    )}
                  </>
                )}
                {result.calories && !result.BMI_EER && (
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Daily Calories</p>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {Math.round(result.calories)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">kcal per day</p>
                  </div>
                )}
              </div>

              {/* Macronutrients from table */}
              {result.macronutrients_table?.["macronutrients-table"] && (
                <div className="space-y-4 mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Macronutrient Breakdown
                  </h4>
                  <div className="space-y-3">
                    {result.macronutrients_table["macronutrients-table"]
                      .slice(1) // Skip header row
                      .filter((row: string[]) => {
                        const name = row[0]?.toLowerCase() || '';
                        return name.includes('carbohydrate') || name.includes('protein') || name.includes('fat');
                      })
                      .map((row: string[], idx: number) => {
                        const name = row[0] || '';
                        const value = row[1] || '';
                        const isCarb = name.toLowerCase().includes('carbohydrate');
                        const isProtein = name.toLowerCase().includes('protein');
                        const isFat = name.toLowerCase().includes('fat');
                        
                        // Extract numeric range or value
                        const match = value.match(/(\d+)\s*-\s*(\d+)|(\d+)/);
                        const minValue = match ? (match[1] || match[3] || '0') : '0';
                        const maxValue = match ? (match[2] || match[3] || '0') : '0';
                        const avgValue = match ? Math.round((parseInt(minValue) + parseInt(maxValue)) / 2) : 0;
                        
                        const color = isCarb ? 'green' : isProtein ? 'blue' : 'yellow';
                        const bgColor = isCarb ? 'bg-green-600' : isProtein ? 'bg-blue-600' : 'bg-yellow-600';
                        
                        return (
                          <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium text-gray-900 dark:text-gray-100">
                                {name === 'Carbohydrate' ? 'Carbohydrates' : name}
                              </span>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {value}
                              </span>
                            </div>
                            {avgValue > 0 && (
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                  className={`${bgColor} h-2 rounded-full transition-all`}
                                  style={{ width: `${Math.min((avgValue / 400) * 100, 100)}%` }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Legacy format macronutrients */}
              {(result.protein || result.carbohydrates || result.fats) && !result.macronutrients_table && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    Macronutrient Breakdown
                  </h4>

                  {result.protein && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">Protein</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {result.protein.grams ? Math.round(result.protein.grams) : 'N/A'}g
                          {result.protein.percentage && ` (${result.protein.percentage.toFixed(1)}%)`}
                        </span>
                      </div>
                      {result.protein.percentage && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${Math.min(result.protein.percentage, 100)}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {result.carbohydrates && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">Carbohydrates</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {result.carbohydrates.grams ? Math.round(result.carbohydrates.grams) : 'N/A'}g
                          {result.carbohydrates.percentage && ` (${result.carbohydrates.percentage.toFixed(1)}%)`}
                        </span>
                      </div>
                      {result.carbohydrates.percentage && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all"
                            style={{ width: `${Math.min(result.carbohydrates.percentage, 100)}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {result.fats && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900 dark:text-gray-100">Fats</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {result.fats.grams ? Math.round(result.fats.grams) : 'N/A'}g
                          {result.fats.percentage && ` (${result.fats.percentage.toFixed(1)}%)`}
                        </span>
                      </div>
                      {result.fats.percentage && (
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-yellow-600 h-2 rounded-full transition-all"
                            style={{ width: `${Math.min(result.fats.percentage, 100)}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Additional Nutrition Details */}
            {(result.macronutrients_table || result.minerals_table || result.vitamins_table) && (
              <div className="space-y-4">
                {/* Full Macronutrients Table */}
                {result.macronutrients_table?.["macronutrients-table"] && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4">
                      Complete Macronutrient Recommendations
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            {result.macronutrients_table["macronutrients-table"][0]?.map((header: string, idx: number) => (
                              <th key={idx} className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-gray-100">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {result.macronutrients_table["macronutrients-table"].slice(1).map((row: string[], idx: number) => (
                            <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                              {row.map((cell: string, cellIdx: number) => (
                                <td key={cellIdx} className="py-2 px-3 text-gray-700 dark:text-gray-300">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Minerals Table */}
                {result.minerals_table?.["essential-minerals-table"] && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4">
                      Essential Minerals
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            {result.minerals_table["essential-minerals-table"][0]?.map((header: string, idx: number) => (
                              <th key={idx} className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-900 dark:text-gray-100">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {result.minerals_table["essential-minerals-table"].slice(1).map((row: string[], idx: number) => (
                            <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                              {row.map((cell: string, cellIdx: number) => (
                                <td key={cellIdx} className="py-2 px-2 sm:px-3 text-gray-700 dark:text-gray-300">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Vitamins Table */}
                {result.vitamins_table?.["vitamins-table"] && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4">
                      Vitamins
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            {result.vitamins_table["vitamins-table"][0]?.map((header: string, idx: number) => (
                              <th key={idx} className="text-left py-2 px-2 sm:px-3 font-semibold text-gray-900 dark:text-gray-100">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {result.vitamins_table["vitamins-table"].slice(1).map((row: string[], idx: number) => (
                            <tr key={idx} className="border-b border-gray-100 dark:border-gray-800">
                              {row.map((cell: string, cellIdx: number) => (
                                <td key={cellIdx} className="py-2 px-2 sm:px-3 text-gray-700 dark:text-gray-300">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-xs text-yellow-800 dark:text-yellow-200">
                <strong>Disclaimer:</strong> These recommendations are general guidelines based on standard calculations. Individual nutritional needs may vary based on medical conditions, medications, and other factors. Always consult with a qualified healthcare provider before making significant dietary changes.
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

