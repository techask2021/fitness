# Nutrition & BMI Calculator

A modern, user-friendly web application that helps individuals calculate their Body Mass Index (BMI) and receive personalized daily nutrition recommendations based on their physical characteristics and activity level.

## Features

- **BMI Calculator**: Calculate your BMI with both Standard (imperial) and Metric units
- **Nutrition Calculator**: Get personalized daily nutrition recommendations including:
  - Total daily calories
  - Macronutrient breakdown (Protein, Carbohydrates, Fats)
  - Percentage-based visualization
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Accessibility**: WCAG 2.1 Level AA compliant
- **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: RapidAPI Nutrition Calculator API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fitness
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=nutrition-calculator.p.rapidapi.com
```

**Important**: 
- Get your API key from [RapidAPI Nutrition Calculator](https://rapidapi.com)
- Never commit `.env.local` to version control
- The `.env.local` file is already included in `.gitignore`

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fitness/
├── app/
│   ├── api/
│   │   ├── bmi/
│   │   │   └── route.ts          # BMI API route handler
│   │   └── nutrition-info/
│   │       └── route.ts          # Nutrition API route handler
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Button component
│   │   ├── Card.tsx              # Card component
│   │   ├── Input.tsx             # Input component
│   │   ├── RadioGroup.tsx        # Radio group component
│   │   └── Select.tsx            # Select component
│   ├── BMICalculator.tsx         # BMI calculator component
│   ├── NutritionCalculator.tsx   # Nutrition calculator component
│   ├── Header.tsx                # Header component
│   └── Footer.tsx                # Footer component
├── lib/
│   └── utils.ts                  # Utility functions and validators
├── types/
│   └── api.ts                    # TypeScript type definitions
└── package.json
```

## API Configuration

The application uses the RapidAPI Nutrition Calculator API. The API routes are proxied through Next.js API routes to keep your API key secure on the server side.

### Endpoints

- **BMI Calculation**: `/api/bmi`
  - Query Parameters: `measurement_units`, `feet`, `inches`, `lbs` (or `cm`, `kg` for metric)

- **Nutrition Information**: `/api/nutrition-info`
  - Query Parameters: `measurement_units`, `sex`, `age_value`, `age_type`, `feet`, `inches`, `lbs` (or `cm`, `kg`), `activity_level`

## Usage

### BMI Calculator

1. Select measurement units (Standard or Metric)
2. Enter your height and weight
3. Click "Calculate BMI"
4. View your BMI value and category

### Nutrition Calculator

1. Select measurement units
2. Enter your height and weight
3. Select your biological sex
4. Enter your age (years or months)
5. Select your activity level
6. Click "Calculate Nutrition Info"
7. View your daily calorie and macronutrient recommendations

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

Make sure to add your `RAPIDAPI_KEY` and `RAPIDAPI_HOST` as environment variables in your deployment platform.

## Features & Requirements

### Functional Requirements

✅ BMI Calculator with Standard and Metric units
✅ Nutrition Calculator with comprehensive input fields
✅ Real-time form validation
✅ Error handling and user feedback
✅ Loading states during API calls
✅ Responsive design for all devices
✅ Accessible UI components

### Technical Requirements

✅ TypeScript for type safety
✅ Server-side API routes for security
✅ Input validation and sanitization
✅ Error handling for API failures
✅ Timeout handling (10 seconds)
✅ WCAG 2.1 Level AA compliance

## Medical Disclaimer

This calculator provides general nutritional information based on standard calculations. Results should not replace professional medical advice. Always consult with a qualified healthcare provider before making significant dietary or lifestyle changes.

## Privacy

Your data is processed locally and is not stored on our servers. We use the Nutrition Calculator API to perform calculations, which may temporarily process your input data according to their privacy policy.

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.
