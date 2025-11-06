import type { Metadata } from 'next';
import { BMICalculator } from '@/components/BMICalculator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Free BMI Calculator Online | Calculate Your Body Mass Index Instantly',
  description: 'Calculate your BMI instantly with our free online BMI calculator. Understand your body mass index in seconds with both standard and metric units. Get personalized health insights and BMI category interpretation to track your wellness journey.',
  keywords: 'BMI calculator, body mass index calculator, free BMI calculator, BMI chart, calculate BMI, BMI calculator online, BMI calculator metric, BMI calculator standard, health calculator, weight calculator',
  openGraph: {
    title: 'Free BMI Calculator | Calculate Your Body Mass Index',
    description: 'Calculate your BMI instantly and understand your body mass index category. Free, accurate, and easy to use BMI calculator.',
    type: 'website',
  },
  alternates: {
    canonical: '/bmi',
  },
};

export default function BMIPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'BMI Calculator',
    applicationCategory: 'HealthApplication',
    description: 'Free online BMI calculator to calculate your body mass index instantly with both standard and metric units.',
    url: 'https://fitnessfriendlyrecipes.online/bmi',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Calculate BMI in standard units (feet, inches, pounds)',
      'Calculate BMI in metric units (centimeters, kilograms)',
      'Instant results',
      'BMI category interpretation',
      'Free and confidential',
    ],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 py-6 sm:py-8 max-w-5xl">
        {/* Calculator Section - Top */}
        <div className="mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
              Free BMI Calculator
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              Calculate your Body Mass Index instantly. Get your BMI in seconds using standard or metric measurements.
            </p>
          </div>
          <BMICalculator />
        </div>

        {/* Content Section - Below */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                Understanding Body Mass Index (BMI): Your Complete Guide
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                BMI is a widely recognized health assessment tool used by medical professionals worldwide. Created in the 1830s, it's a simple way to assess whether your weight falls within a healthy range relative to your height.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                While BMI isn't perfect, it serves as an excellent screening tool to identify potential health risks. Healthcare providers use it as a starting point for discussions about weight management and lifestyle.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                The beauty of BMI is its simplicity. With just your height and weight, you get valuable insights into your health status. Our free calculator makes this even easier with instant results.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 border-l-4 border-blue-500">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">
                How BMI is Calculated: The Science Behind the Numbers
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
                The BMI formula is simple: BMI = weight (kg) / height (m)². For imperial: BMI = (weight in pounds × 703) / (height in inches)². This creates a ratio that normalizes weight for height.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
                The formula compares weight to height squared. This accounts for the fact that taller people need more weight to maintain the same body proportions.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Our calculator handles all conversions automatically. Whether you use metric or imperial, you'll get the same accurate result instantly.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Step-by-Step Guide: How to Use Our BMI Calculator
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                Using our BMI calculator is easy. Follow these simple steps for accurate results:
              </p>
              <ol className="list-decimal list-inside space-y-3 sm:space-y-4 mb-4 sm:mb-6 ml-2 sm:ml-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="mb-2">
                  <strong>Choose Your Measurement System:</strong> Select Standard (feet, inches, pounds) or Metric (cm, kg). Use whichever system you're most comfortable with.
                </li>
                <li className="mb-2">
                  <strong>Enter Your Height Accurately:</strong> Enter your current height. For standard: feet and inches. For metric: centimeters. Measure yourself if unsure.
                </li>
                <li className="mb-2">
                  <strong>Enter Your Current Weight:</strong> Use your current weight, not an ideal or old weight. For accuracy, weigh yourself at the same time of day (morning is best).
                </li>
                <li className="mb-2">
                  <strong>Click Calculate:</strong> Get instant results with your BMI number, category, and helpful health guidance.
                </li>
              </ol>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
                You'll see your BMI value, category (Underweight, Normal, Overweight, or Obese), and guidance. Color-coded indicators help you understand your result quickly.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Understanding Your BMI Results
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">BMI Categories:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-semibold mb-2">Underweight</span>
                  <p className="text-gray-700 dark:text-gray-300"><strong>BMI less than 18.5</strong> - You may need to gain weight for optimal health</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold mb-2">Normal Weight</span>
                  <p className="text-gray-700 dark:text-gray-300"><strong>BMI 18.5-24.9</strong> - You're within a healthy weight range for your height</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                  <span className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-semibold mb-2">Overweight</span>
                  <p className="text-gray-700 dark:text-gray-300"><strong>BMI 25-29.9</strong> - You may benefit from weight management strategies</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
                  <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-semibold mb-2">Obese</span>
                  <p className="text-gray-700 dark:text-gray-300"><strong>BMI 30 or greater</strong> - Consider consulting a healthcare provider for guidance</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Deep Dive: Understanding Each BMI Category
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">📉</span> Underweight (BMI less than 18.5)
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    Being underweight can indicate insufficient body fat or inadequate nutrition. A BMI below 18.5 may suggest you're not consuming enough calories or nutrients.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    Health concerns include weakened immune function, increased osteoporosis risk, fertility issues, anemia, and fatigue. Discuss with a healthcare provider if weight gain would benefit you.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    To reach a healthy weight: focus on nutrient-dense foods, strength training, and adequate calories. A registered dietitian can help create a healthy weight gain plan.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                  <h4 className="text-lg sm:text-xl font-semibold text-green-900 dark:text-green-100 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">✅</span> Normal Weight (BMI 18.5-24.9)
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    This range has the lowest risk of weight-related health problems. A BMI between 18.5-24.9 indicates a healthy weight for your height.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    People in this range have lower risks of heart disease, diabetes, high blood pressure, and some cancers. Remember: BMI is just one health indicator. Diet quality, activity, stress, and sleep also matter.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Maintain your healthy weight through balanced nutrition, regular activity, adequate sleep, and stress management. Regular health check-ups are still important.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 sm:p-6 border-2 border-yellow-200 dark:border-yellow-700">
                  <h4 className="text-lg sm:text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">⚠️</span> Overweight (BMI 25-29.9)
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    Being overweight indicates excess body weight for your height. This suggests an increased risk of weight-related health conditions, though generally lower than in the obese category.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    Health risks include type 2 diabetes, high blood pressure, heart disease, sleep apnea, some cancers, and fatty liver disease. Some research suggests being slightly overweight (BMI 25-27) may not significantly increase risks if you're otherwise healthy and active.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Even small changes help. Losing 5-10% of body weight can improve blood pressure, blood sugar, and cholesterol. Focus on sustainable changes: whole foods, gradual activity increases, sleep, and stress management.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 sm:p-6 border-2 border-orange-200 dark:border-orange-700">
                  <h4 className="text-lg sm:text-xl font-semibold text-orange-900 dark:text-orange-100 mb-2 sm:mb-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">🔴</span> Obese (BMI 30 or greater)
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    Obesity is excessive body fat that may impair health. BMI 30+ is obese, divided into Class I (30-34.9), Class II (35-39.9), and Class III (40+, severe obesity).
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 leading-relaxed">
                    Obesity increases risks of cardiovascular disease, type 2 diabetes, certain cancers, sleep apnea, osteoarthritis, fatty liver disease, kidney disease, and mental health issues. Risks increase with BMI, especially for Class II and III.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Consult healthcare professionals including your primary care provider, a registered dietitian, and potentially a fitness professional. They can help create a comprehensive plan with dietary changes, activity increases, and behavioral modifications. Even modest weight loss (5-10%) can lead to significant health improvements.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Important Limitations: When BMI Might Not Tell the Full Story
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                While BMI is valuable, understand its limitations. BMI doesn't distinguish between fat and muscle, so it can misclassify people with high muscle mass.
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-purple-200 dark:border-purple-700">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Populations Where BMI May Be Less Accurate:</h4>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span><strong>Athletes and Bodybuilders:</strong> High muscle mass can result in high BMI, incorrectly suggesting overweight when body fat is actually low.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span><strong>Older Adults:</strong> Loss of muscle mass and bone density with age can affect BMI. Normal BMI might mask health issues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span><strong>Pregnant and Breastfeeding Women:</strong> BMI doesn't account for baby weight, placenta, and increased fluid volume.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span><strong>Children and Teens:</strong> Requires age and sex-specific percentiles, not adult categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <span><strong>Different Body Compositions:</strong> Some carry weight differently - lower body weight (less risky) vs. upper/abdominal weight (more risky).</span>
                  </li>
                </ul>
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
                Use BMI as one tool among many. Also consider waist circumference, body composition, blood pressure, cholesterol, blood sugar, fitness level, and lifestyle. Consult a healthcare professional for a comprehensive assessment.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Practical Strategies: How to Improve Your BMI Healthily
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                Whether increasing or decreasing BMI, focus on sustainable lifestyle changes. Here are evidence-based strategies:
              </p>
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3">To Lower BMI:</h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>• Focus on whole, nutrient-dense foods</li>
                    <li>• Moderate calorie deficit (500-750 calories/day)</li>
                    <li>• Strength training to preserve muscle</li>
                    <li>• Increase activity gradually</li>
                    <li>• Prioritize sleep (7-9 hours)</li>
                    <li>• Manage stress</li>
                    <li>• Stay hydrated</li>
                    <li>• Build a support system</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 sm:p-6 border-2 border-green-200 dark:border-green-700">
                  <h4 className="text-lg sm:text-xl font-semibold text-green-900 dark:text-green-100 mb-2 sm:mb-3">To Raise BMI:</h4>
                  <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    <li>• Increase calories with nutrient-rich foods</li>
                    <li>• Eat more frequently</li>
                    <li>• Include healthy fats</li>
                    <li>• Strength training to build muscle</li>
                    <li>• Calorie-dense, nutritious snacks</li>
                    <li>• Work with a registered dietitian</li>
                    <li>• Address underlying health issues</li>
                    <li>• Be patient - healthy gain takes time</li>
                  </ul>
                </div>
              </div>
              <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
                The goal isn't just reaching a BMI number - it's improving overall health, energy, and quality of life. Sustainable long-term changes are more valuable than quick fixes.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
                BMI and Long-Term Health: What Research Tells Us
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Extensive research has shown clear relationships between BMI and various health outcomes. Studies involving millions of participants have demonstrated that maintaining a BMI in the normal range (18.5-24.9) is associated with the lowest risk of premature death from all causes.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                However, the relationship isn't always straightforward. Some research suggests a "U-shaped" curve, where both very low and very high BMIs are associated with increased health risks. Additionally, factors like physical fitness level, diet quality, and other lifestyle habits can significantly modify the relationship between BMI and health outcomes.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                What's clear is that BMI is most useful as a population-level screening tool and as a starting point for individual health discussions. For personalized health advice, combine BMI with other health metrics and work with healthcare professionals who can consider your unique circumstances, medical history, and health goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 sm:mt-8 mb-3 sm:mb-4">
                Frequently Asked Questions About BMI
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    What is considered a healthy BMI?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    A healthy BMI typically falls between 18.5 and 24.9. This range is associated with the lowest risk of weight-related health problems. However, it's important to remember that BMI is just one indicator of health. Individual factors like muscle mass, age, genetics, and overall lifestyle habits all play important roles. Some people may be healthy outside this range, while others within this range might benefit from lifestyle improvements. Always discuss your BMI results with a healthcare professional who can provide personalized guidance based on your complete health picture.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Is BMI accurate for everyone?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    BMI is a useful screening tool, but it has important limitations. It doesn't distinguish between muscle and fat mass, so athletes and bodybuilders with high muscle mass may have a high BMI that doesn't accurately reflect their health status. Similarly, older adults may have normal BMI but low muscle mass (sarcopenia), which isn't ideal. BMI calculations aren't appropriate during pregnancy, and children require age and sex-specific percentile charts rather than adult categories. For people with different body compositions or specific health conditions, BMI should be interpreted alongside other health metrics like waist circumference, body composition analysis, blood pressure, and blood work.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    How often should I check my BMI?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    There's no strict rule for how often to check your BMI, but monthly measurements can help you track progress if you're working toward health or fitness goals. Daily or weekly fluctuations in weight (and therefore BMI) are normal and can be influenced by factors like hydration, salt intake, menstrual cycle, and recent meals. For meaningful tracking, weigh yourself at the same time of day, using the same scale, wearing similar clothing. Remember that significant, sustainable changes in BMI take time - typically weeks to months, not days. If you're actively trying to change your BMI, monthly check-ins can help you see trends without getting discouraged by daily variations.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Can I have a normal BMI but still be unhealthy?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Yes, absolutely. This is sometimes called "normal weight obesity" or "skinny fat" - having a BMI in the normal range but a high percentage of body fat and low muscle mass. People in this situation may have increased health risks despite their normal BMI. Other factors like poor diet quality, lack of physical activity, high stress levels, inadequate sleep, smoking, excessive alcohol consumption, and genetic factors can all contribute to poor health regardless of BMI. This is why BMI should be considered alongside other health indicators like waist circumference, body composition, blood pressure, cholesterol levels, blood sugar, and overall lifestyle habits.
                  </p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 border-2 border-pink-200 dark:border-pink-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    What's the difference between BMI and body fat percentage?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    BMI and body fat percentage measure different things. BMI is a ratio of weight to height that provides an estimate of total body weight relative to height, but it doesn't tell you how much of that weight is fat versus muscle, bone, or water. Body fat percentage measures the proportion of your total body weight that consists of fat tissue. Two people can have the same BMI but very different body fat percentages - for example, a muscular athlete and a sedentary person might both have a BMI of 25, but the athlete would have much lower body fat. Body fat percentage provides more detailed information about body composition, but it requires specialized equipment (like DEXA scans, Bod Pod, or bioelectrical impedance) to measure accurately. BMI remains valuable because it's easy to calculate and correlates well with health risks at a population level.
                  </p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border-2 border-indigo-200 dark:border-indigo-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Should children use the same BMI categories as adults?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    No, children and teens should not use adult BMI categories. BMI interpretation for young people is more complex because children are still growing, and their body composition changes with age and puberty. Pediatric BMI is interpreted using age and sex-specific percentile charts. A child's BMI is compared to other children of the same age and sex, and classified as underweight (below 5th percentile), healthy weight (5th to 85th percentile), overweight (85th to 95th percentile), or obese (above 95th percentile). These percentiles account for normal growth patterns and development. If you're concerned about a child's weight, consult with a pediatrician who can properly interpret BMI in the context of growth charts and overall development.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 via-green-50 to-blue-50 dark:from-blue-900/10 dark:via-green-900/10 dark:to-blue-900/10 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-700 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Final Thoughts: Using BMI as a Tool for Better Health
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                BMI is a valuable tool that can provide important insights into your health, but it's not the only tool, and it's not perfect. Think of BMI as a starting point - a conversation starter with yourself and your healthcare providers about your health and wellbeing.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Whether your BMI is in the normal range or outside of it, remember that health is multidimensional. Focus on building sustainable habits that support your physical, mental, and emotional wellbeing. Eat a balanced diet rich in whole foods, move your body regularly in ways you enjoy, prioritize sleep, manage stress, and nurture your relationships and mental health.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Use our BMI calculator regularly to track your progress, but don't let the number define you or your worth. Work with healthcare professionals who can help you interpret your BMI in the context of your overall health, and create a plan that's right for your unique circumstances and goals. Your health journey is personal, and every small step toward better health matters.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
}

