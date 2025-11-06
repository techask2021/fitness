import type { Metadata } from 'next';
import { NutritionCalculator } from '@/components/NutritionCalculator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Daily Nutrition Calculator | Personalized Calorie & Macronutrient Needs',
  description: 'Calculate your daily nutrition needs with our free nutrition calculator. Get personalized calorie requirements, macronutrient breakdown (protein, carbs, fats), and meal planning guidance based on your age, sex, activity level, and body composition.',
  keywords: 'nutrition calculator, daily calories calculator, macronutrient calculator, calorie calculator, protein calculator, nutrition needs, daily nutrition requirements, TDEE calculator, BMR calculator, macro calculator',
  openGraph: {
    title: 'Free Nutrition Calculator | Daily Calorie & Macro Needs',
    description: 'Get personalized daily nutrition recommendations including calories, protein, carbs, and fats based on your unique profile.',
    type: 'website',
  },
  alternates: {
    canonical: '/nutrition',
  },
};

export default function NutritionPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Nutrition Calculator',
    applicationCategory: 'HealthApplication',
    description: 'Free online nutrition calculator to calculate your daily calorie needs and macronutrient breakdown based on your age, sex, activity level, and body composition.',
    url: 'https://fitnessfriendlyrecipes.online/nutrition',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Calculate daily calorie needs',
      'Macronutrient breakdown (protein, carbs, fats)',
      'Activity level adjustment',
      'Standard and metric units',
      'Personalized recommendations',
      'Free and confidential',
    ],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        {/* Calculator Section - Top */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Daily Nutrition Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Calculate your personalized daily calorie needs and macronutrient breakdown. Get science-based nutrition recommendations tailored to your age, sex, activity level, and body composition. Perfect for meal planning and achieving your fitness goals.
            </p>
          </div>
          <NutritionCalculator />
        </div>

        {/* Content Section - Below */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700 space-y-8">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-6">
                Your Complete Nutrition Guide: Understanding Your Body's Daily Needs
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                Nutrition is the foundation of health, energy, and wellbeing. Every cell in your body depends on the nutrients you consume to function optimally. Understanding your unique daily nutritional requirements isn't just about counting calories - it's about providing your body with the right balance of macronutrients (protein, carbohydrates, and fats) and ensuring adequate energy to support your lifestyle, activities, and health goals.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                Whether you're aiming to lose weight, build muscle, maintain your current physique, improve athletic performance, or simply optimize your health, knowing your personalized nutrition needs is the critical first step. Our comprehensive nutrition calculator takes into account your age, biological sex, height, weight, and activity level to provide you with science-based recommendations tailored specifically to your unique profile.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                The calculations we use are based on decades of nutritional research and are the same formulas used by registered dietitians, sports nutritionists, and healthcare professionals worldwide. However, it's important to remember that these numbers are starting points - individual variations in metabolism, genetics, health conditions, and lifestyle factors mean that you may need to adjust these recommendations based on how your body responds.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              What You'll Get from Our Calculator
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📊 Daily Calorie Needs</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">The total number of calories your body burns each day based on your activity level</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-5 border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">💪 Protein Recommendations</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Essential for muscle repair, immune function, and satiety</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-5 border border-orange-200 dark:border-orange-700">
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚡ Carbohydrate Guidelines</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Your body's primary energy source for daily activities and workouts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-5 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🥑 Fat Requirements</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">Necessary for hormone production, nutrient absorption, and overall health</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-green-900/10 dark:to-orange-900/10 rounded-xl p-6 mb-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                The Science Behind Our Calculations: BMR, TDEE, and Energy Balance
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Our nutrition calculator uses scientifically-proven formulas based on the Mifflin-St Jeor Equation, which is considered one of the most accurate methods for estimating basal metabolic rate (BMR). Your BMR represents the number of calories your body burns at complete rest - essentially the energy needed to keep your heart beating, lungs breathing, brain functioning, and all your organs working. This accounts for approximately 60-75% of your total daily energy expenditure.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                To determine your total daily energy expenditure (TDEE), we multiply your BMR by an activity factor based on your reported activity level. This accounts for the additional calories burned through daily activities, exercise, and even the thermic effect of food (the energy your body uses to digest, absorb, and process the nutrients you consume).
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                The activity multipliers we use are: Sedentary (1.2), Lightly Active (1.375), Moderately Active (1.55), Active (1.725), and Very Active (1.9). These multipliers are based on extensive research and represent the additional energy expenditure beyond your BMR. Your TDEE represents the number of calories you need to maintain your current weight given your activity level.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Once we've calculated your TDEE, we then determine your optimal macronutrient distribution based on established dietary guidelines and research. Protein recommendations are based on body weight and activity level, carbohydrates are calculated to provide adequate energy for your activity level, and fats fill the remaining calorie needs while ensuring essential fatty acid requirements are met.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Activity Level Guide:</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-semibold mb-2">Sedentary</span>
                  <p className="text-gray-700 dark:text-gray-300">Little or no exercise - perfect if you have a desk job and minimal daily movement</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-semibold mb-2">Lightly Active</span>
                  <p className="text-gray-700 dark:text-gray-300">Light exercise 1-3 days per week - ideal for occasional walkers or weekend warriors</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <span className="inline-block px-3 py-1 bg-green-200 dark:bg-green-800/40 text-green-900 dark:text-green-200 rounded-full text-sm font-semibold mb-2">Moderately Active</span>
                  <p className="text-gray-700 dark:text-gray-300">Moderate exercise 3-5 days per week - great for regular gym-goers or active hobbyists</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <span className="inline-block px-3 py-1 bg-green-300 dark:bg-green-700/50 text-green-900 dark:text-green-100 rounded-full text-sm font-semibold mb-2">Active</span>
                  <p className="text-gray-700 dark:text-gray-300">Hard exercise 6-7 days per week - suited for serious fitness enthusiasts</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <span className="inline-block px-3 py-1 bg-green-400 dark:bg-green-600/60 text-green-900 dark:text-white rounded-full text-sm font-semibold mb-2">Very Active</span>
                  <p className="text-gray-700 dark:text-gray-300">Intense daily exercise or physical job - perfect for athletes or physically demanding occupations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                Understanding Your Results: What Each Macronutrient Does for Your Body
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                Once you calculate your nutrition needs, you'll see a comprehensive breakdown that makes meal planning easier than ever. The visual progress bars help you understand the proportion of each macronutrient, while the gram values give you concrete targets for daily meal planning. Let's dive deeper into what each macronutrient does for your body and why the balance matters.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💪</span> Protein: The Building Blocks of Life (10-35% of calories)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Protein is absolutely essential for human health. Every cell in your body contains protein, and it plays crucial roles in nearly every biological process. Proteins are made up of amino acids, often called the "building blocks" of the body. Your body uses protein to build and repair tissues, including muscle tissue that's broken down during exercise.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Beyond muscle repair, protein is vital for producing enzymes that drive chemical reactions, creating hormones that regulate bodily functions, building antibodies that fight infections, and maintaining healthy hair, skin, and nails. Protein also plays an important role in satiety - it helps you feel full and satisfied after meals, which can be particularly helpful if you're trying to manage your weight.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The protein recommendations from our calculator are based on your body weight and activity level. Generally, sedentary adults need about 0.8 grams per kilogram of body weight, while active individuals and athletes may need 1.2-2.2 grams per kilogram. Excellent protein sources include lean meats, poultry, fish, eggs, dairy products, legumes, tofu, tempeh, quinoa, and protein-rich vegetables. If you're very active or trying to build muscle, aim for the higher end of your protein range.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700">
                  <h4 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚡</span> Carbohydrates: Your Body's Primary Energy Source (45-65% of calories)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Carbohydrates often get a bad reputation in popular diet culture, but they're actually your body's preferred and most efficient source of energy. When you consume carbohydrates, your body breaks them down into glucose, which is used to fuel your brain, muscles, and all your cellular processes. Without adequate carbohydrates, your body must rely on less efficient energy pathways.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Your brain alone uses approximately 20% of your daily energy, and it relies almost exclusively on glucose from carbohydrates. This is why low-carb diets can sometimes lead to brain fog, difficulty concentrating, and decreased cognitive function. Carbohydrates also provide essential fiber, which supports digestive health, helps regulate blood sugar, and contributes to feelings of fullness.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The key is choosing the right types of carbohydrates. Complex carbohydrates like whole grains, fruits, vegetables, and legumes provide sustained energy, fiber, vitamins, and minerals. These should make up the majority of your carbohydrate intake. Simple carbohydrates like refined sugars and white flour can provide quick energy but lack nutritional value and can cause blood sugar spikes. If you're very active, you may need more carbohydrates to support your training and recovery.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
                  <h4 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🥑</span> Fats: Essential for Hormones and Health (20-35% of calories)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Dietary fats have been unfairly demonized, but they're absolutely essential for optimal health. Fats are crucial for the production of hormones, including sex hormones like estrogen and testosterone, as well as stress hormones. They also help your body absorb fat-soluble vitamins (A, D, E, and K), which are essential for various bodily functions including immune health, bone strength, and vision.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Fats provide a concentrated source of energy (9 calories per gram compared to 4 for protein and carbs), and they help maintain healthy cell membranes. They also contribute to feelings of satiety and can help stabilize blood sugar levels when consumed with carbohydrates. Additionally, certain types of fats, particularly omega-3 fatty acids, have anti-inflammatory properties and support brain health.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Focus on including healthy fats from sources like avocados, nuts, seeds, olive oil, fatty fish (salmon, mackerel, sardines), and full-fat dairy products in moderation. Limit trans fats (found in many processed foods) and moderate your intake of saturated fats (found in red meat and full-fat dairy), replacing them with unsaturated fats when possible. The types of fats you consume matter just as much as the quantity.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                Tailoring Your Nutrition to Your Goals
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                The recommendations from our calculator are designed for weight maintenance. However, you may want to adjust these numbers based on your specific goals. Here's how to modify your nutrition plan for different objectives:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-700">
                  <h4 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">Weight Loss Goals</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    To lose weight, create a moderate calorie deficit of 300-500 calories per day below your TDEE. This should result in a safe, sustainable weight loss of about 0.5-1 pound per week.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Increase protein to 25-30% of calories to preserve muscle mass</li>
                    <li>• Maintain adequate carbohydrate intake for energy and workouts</li>
                    <li>• Don't cut calories too drastically (never below 1200 for women, 1500 for men)</li>
                    <li>• Focus on nutrient-dense, filling foods</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Muscle Building Goals</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    To build muscle, you'll need a slight calorie surplus (200-500 calories above TDEE) combined with strength training and adequate protein.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Increase protein to 1.6-2.2g per kg of body weight</li>
                    <li>• Ensure adequate carbohydrates to fuel workouts and recovery</li>
                    <li>• Don't overdo the surplus - excess calories become fat, not muscle</li>
                    <li>• Time nutrition around workouts for optimal recovery</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                  <h4 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">Athletic Performance</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Athletes need adequate energy and specific nutrient timing to support training and competition.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• May need 50-65% of calories from carbohydrates</li>
                    <li>• Higher protein needs (1.4-2.0g per kg) for recovery</li>
                    <li>• Stay well-hydrated before, during, and after exercise</li>
                    <li>• Consider timing meals around training sessions</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
                  <h4 className="text-xl font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Weight Maintenance</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    Maintain your current weight by eating at your TDEE and focusing on balanced nutrition.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Eat roughly at your calculated TDEE</li>
                    <li>• Monitor your weight weekly and adjust as needed</li>
                    <li>• Focus on nutrient quality over strict calorie counting</li>
                    <li>• Build sustainable eating habits you can maintain long-term</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              Nutrition Tips for Success
            </h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  🎯 Start with Calories
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Your daily calorie target is your foundation. Once you know this number, you can plan meals that fit within your budget. Remember, these are estimates - listen to your body and adjust based on how you feel, your energy levels, and your progress toward your goals.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-green-900/10 dark:to-orange-900/10 rounded-lg p-5 border border-green-200 dark:border-green-800">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  ⚖️ Balance Your Macros
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  While hitting exact macro targets every day isn't necessary, aiming for the recommended ranges helps ensure you're getting adequate nutrition. Don't stress about perfection - consistency over time matters more than daily precision.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-900/10 dark:to-purple-900/10 rounded-lg p-5 border border-orange-200 dark:border-orange-800">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  📈 Adjust Based on Goals
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  These recommendations are for weight maintenance. To lose weight, you might reduce calories by 300-500 per day. To gain weight (especially muscle), you might increase by 300-500 calories. Always make changes gradually and monitor how your body responds.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  🌟 Quality Matters
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  While calories and macros are important, the quality of your food matters too. Choose whole foods, lean proteins, complex carbohydrates, and healthy fats whenever possible. These nutrient-dense choices support overall health beyond just hitting your numbers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                Practical Meal Planning: Putting Your Numbers Into Action
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Knowing your daily calorie and macronutrient targets is just the beginning - the real challenge is translating those numbers into actual meals and snacks that you'll enjoy and can maintain long-term. Here are practical strategies for meal planning that fit your calculated nutrition needs.
              </p>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-6 border-2 border-green-200 dark:border-green-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Meal Planning Strategies:</h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                    <span><strong>Divide Your Day:</strong> Distribute your calories and macros across 3-5 meals and snacks throughout the day. This helps maintain steady energy levels and prevents overeating at any single meal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                    <span><strong>Plan Ahead:</strong> Take time each week to plan your meals. This reduces decision fatigue and makes it easier to stick to your nutrition goals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                    <span><strong>Batch Cooking:</strong> Prepare larger quantities of proteins, grains, and vegetables that can be used in multiple meals throughout the week.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                    <span><strong>Use Food Tracking Apps:</strong> Apps like MyFitnessPal or Cronometer can help you track your intake and ensure you're meeting your macro and calorie targets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">•</span>
                    <span><strong>Build Balanced Plates:</strong> Aim to include a source of protein, complex carbohydrates, healthy fats, and vegetables at most meals.</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                Remember that perfect adherence isn't necessary - aim for consistency over perfection. If you hit your targets 80% of the time, you're doing great. The remaining 20% allows for flexibility, social events, and maintaining a healthy relationship with food.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                Common Nutrition Mistakes and How to Avoid Them
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Many people make well-intentioned mistakes when trying to optimize their nutrition. Here are some common pitfalls and how to avoid them:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">⚠️ Cutting Calories Too Drastically</h4>
                  <p className="text-gray-700 dark:text-gray-300">Severely restricting calories can slow your metabolism, lead to muscle loss, and make long-term adherence impossible. Always create a moderate deficit and never go below 1200 calories for women or 1500 for men without medical supervision.</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-5 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Eliminating Entire Food Groups</h4>
                  <p className="text-gray-700 dark:text-gray-300">Unless you have a medical reason (like celiac disease or allergies), eliminating entire food groups often leads to nutrient deficiencies and makes your diet unnecessarily restrictive. Focus on balance and moderation instead.</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-5 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚠️ Ignoring Macronutrient Balance</h4>
                  <p className="text-gray-700 dark:text-gray-300">Focusing only on calories without considering macronutrient balance can leave you feeling tired, hungry, or unable to perform your best. All three macronutrients play important roles in your health and should be included in your diet.</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚠️ Not Adjusting for Changes in Activity</h4>
                  <p className="text-gray-700 dark:text-gray-300">If your activity level changes significantly (you start a new workout routine or become more sedentary), you need to recalculate your nutrition needs. What worked when you were training hard won't work if you're now more sedentary.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                Frequently Asked Questions About Nutrition and Calorie Needs
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    How accurate are these calorie calculations?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our calculator uses the Mifflin-St Jeor Equation, which is considered one of the most accurate BMR estimation formulas available. However, it's important to remember that these are estimates - individual metabolism can vary by 15-20% due to factors like genetics, muscle mass, health conditions, and more. Use the calculated numbers as a starting point and adjust based on how your body responds. If you're not seeing expected results after 2-3 weeks of consistent tracking, you may need to adjust your calories up or down by 100-200 calories.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Do I need to hit my macros exactly every day?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    No, you don't need to hit your macros exactly every single day. Your body is adaptable, and what matters most is consistency over time. Aim to be within 5-10% of your targets most days. Some people prefer to look at weekly averages rather than daily numbers. For example, if you're a bit over on carbs one day, you can balance it by being slightly under the next day. The key is maintaining an overall pattern that supports your goals. Perfect daily adherence isn't necessary and can lead to an unhealthy relationship with food.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    What if I'm not losing/gaining weight as expected?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    If you're not seeing expected weight changes, there are several possible reasons. First, make sure you're tracking accurately - many people underestimate portion sizes or forget to log certain foods. Second, remember that weight loss isn't always linear - water weight fluctuations, hormonal changes, and other factors can cause temporary plateaus. Third, if you're building muscle while losing fat, the scale might not change much, but your body composition is improving. Finally, your metabolism may be different than estimated. Try adjusting your calories by 100-200 per day and monitor for another 2-3 weeks. If you're still not seeing progress, consider consulting with a registered dietitian who can help troubleshoot your specific situation.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Should I recalculate my nutrition needs if my weight changes?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Yes, you should recalculate periodically, especially if your weight changes significantly (5-10 pounds or more). As your weight changes, your BMR changes, which means your calorie needs change too. Generally, recalculating every 2-4 weeks or whenever you experience a significant weight change is a good practice. Also recalculate if your activity level changes substantially - if you go from sedentary to very active, or vice versa, your calorie needs will be quite different.
                  </p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 border-2 border-pink-200 dark:border-pink-700">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Are these recommendations the same for men and women?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The calculator accounts for biological sex differences in the BMR calculation. Generally, men have higher BMRs than women due to typically having more muscle mass and larger body size. However, individual variation is significant - a very active, muscular woman might need more calories than a sedentary man of the same weight. The macronutrient recommendations are generally similar, though women may need slightly more iron, and recommendations can vary during pregnancy, breastfeeding, or certain life stages. Always consider your individual needs and consult with healthcare providers for personalized guidance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 via-orange-50 to-green-50 dark:from-green-900/10 dark:via-orange-900/10 dark:to-green-900/10 rounded-xl p-8 border-2 border-green-200 dark:border-green-700 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Final Thoughts: Building a Sustainable Nutrition Strategy
              </h3>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Understanding your daily nutritional needs is a powerful tool for optimizing your health, energy, and body composition. However, remember that nutrition is just one piece of the puzzle. Quality sleep, regular physical activity, stress management, and social connections all play crucial roles in your overall wellbeing.
              </p>
              <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Use the recommendations from our calculator as a starting point, but be flexible and listen to your body. Pay attention to how you feel - your energy levels, mood, sleep quality, and performance are all important indicators of whether your nutrition plan is working for you. If something doesn't feel right, don't hesitate to adjust.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Most importantly, build a relationship with food that's based on nourishment and enjoyment, not restriction and fear. Healthy nutrition should enhance your life, not control it. Work with the numbers, but also trust your intuition, enjoy your meals, and remember that progress, not perfection, is the goal. Your nutrition journey is unique to you, and every small step toward better understanding your body's needs is a step in the right direction.
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

