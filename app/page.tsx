import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Free Health Calculators | BMI & Nutrition Calculator - Fitness Friendly Recipes",
  description: "Free online health calculators for BMI and daily nutrition needs. Calculate your body mass index instantly and get personalized calorie and macronutrient recommendations. Trusted tools for your wellness journey.",
  keywords: "BMI calculator, nutrition calculator, health calculator, calorie calculator, macro calculator, body mass index, daily calories, fitness calculator",
  openGraph: {
    title: 'Free Health Calculators | BMI & Nutrition Calculator',
    description: 'Calculate your BMI and get personalized nutrition recommendations. Free, accurate, and easy-to-use health tools.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-green-100/30 to-blue-100/30 dark:from-blue-900/10 dark:via-green-900/10 dark:to-blue-900/10 rounded-3xl blur-3xl -z-10"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-2">
            Free Health Calculators for Your Wellness Journey
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-2">
            Take control of your health with our free, accurate calculators. Understand your BMI and discover your personalized nutrition needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border-2 border-blue-200 dark:border-blue-700">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">⚡ Instant Results</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border-2 border-green-200 dark:border-green-700">
              <span className="text-green-600 dark:text-green-400 font-semibold">🔒 100% Private</span>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border-2 border-orange-200 dark:border-orange-700">
              <span className="text-orange-600 dark:text-orange-400 font-semibold">📊 Science-Based</span>
            </div>
          </div>
        </div>

        {/* Featured Calculators */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <Link 
            href="/bmi"
            className="group bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:from-blue-900/20 dark:via-blue-800/20 dark:to-indigo-900/20 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-blue-200 dark:border-blue-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 transform"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">📊</div>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:from-blue-700 group-hover:to-indigo-800 transition-all">
              BMI Calculator
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Calculate your Body Mass Index instantly. Understand your weight category and get health insights. Fast, free, and completely confidential.
            </p>
            <div className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base group-hover:from-blue-700 group-hover:to-blue-800 transition-all shadow-lg group-hover:shadow-xl group-hover:gap-3">
              Calculate Your BMI 
              <span className="text-lg sm:text-xl transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          <Link 
            href="/nutrition"
            className="group bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100 dark:from-green-900/20 dark:via-emerald-800/20 dark:to-teal-900/20 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-green-200 dark:border-green-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 transform"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">🍎</div>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:from-green-700 group-hover:to-emerald-800 transition-all">
              Nutrition Calculator
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              Discover your daily calorie needs and macronutrient breakdown. Get personalized recommendations for protein, carbs, and fats based on your profile.
            </p>
            <div className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base group-hover:from-green-700 group-hover:to-green-800 transition-all shadow-lg group-hover:shadow-xl group-hover:gap-3">
              Calculate Nutrition Needs 
              <span className="text-lg sm:text-xl transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* Why Choose Our Calculators */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6 sm:mb-8 text-center px-2">
            Why Use Our Health Calculators?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Instant Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Get your calculations in seconds. No waiting, no complicated forms - just fast, accurate results.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-2">
                Completely Private
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your data is never stored. All calculations happen instantly and your information stays private.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl border border-orange-200 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-2">
                Science-Based
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our calculators use proven formulas trusted by healthcare professionals worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-12">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
                alt="Person using fitness app on phone"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                Take Control of Your Health Journey
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                Taking charge of your health can feel overwhelming. That's why we created simple, powerful tools to help you make confident decisions about your wellness.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                Whether you're tracking progress or starting your journey, our calculators provide instant, accurate insights. No accounts needed - just straightforward, science-based calculations.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                We've made complex calculations simple, breaking down numbers into clear, actionable insights for your daily life.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6 sm:mb-8 text-center px-2">
            How Our Calculators Help You
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-700 text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3">
                Understand Your BMI
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Get instant BMI insights with clear explanations. Understand your weight category and get guidance on next steps.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-200 dark:border-green-700 text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🍎</div>
              <h3 className="text-lg sm:text-xl font-semibold text-green-900 dark:text-green-100 mb-2 sm:mb-3">
                Personalized Nutrition Plan
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Discover your daily calorie needs and ideal macronutrient balance. Get clear recommendations that make meal planning simpler.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-orange-200 dark:border-orange-700 text-center sm:col-span-2 md:col-span-1">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange-900 dark:text-orange-100 mb-2 sm:mb-3">
                Achieve Your Goals
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Whether losing weight, building muscle, or maintaining health, our tools give you the baseline information you need.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Science Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Built on Science, Designed for You
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                Our calculators use formulas trusted by healthcare professionals worldwide. We use the Mifflin-St Jeor Equation, WHO BMI categories, and evidence-based macronutrient guidelines.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                We don't just give you numbers - we explain what they mean and how to use them. We're here to educate and empower, not just calculate.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                All calculations are instant and secure. Your data is never stored. Use our tools anytime to track changes and experiment with different scenarios.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
                alt="Healthy fresh vegetables and nutrition"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Getting Started is Simple
            </h2>
            <div className="space-y-4 sm:space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-base sm:text-lg leading-relaxed">
                Ready to start? Our calculators are intuitive and user-friendly. Just have your basic measurements ready, and you'll have results in seconds.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3 flex items-center gap-2">
                    <span>📊</span> BMI Calculator
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                    Enter your height and weight. Get instant BMI value, weight category, and health guidance.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Perfect for quick check-ins and tracking progress.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 sm:p-6 border-2 border-green-200 dark:border-green-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-900 dark:text-green-100 mb-2 sm:mb-3 flex items-center gap-2">
                    <span>🍎</span> Nutrition Calculator
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2">
                    Enter your age, sex, activity level, and measurements. Get personalized calorie needs and macronutrient breakdown.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Your roadmap to smarter meal planning.
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
                <p className="text-sm sm:text-base text-blue-900 dark:text-blue-100 m-0 leading-relaxed">
                  <strong>⚠️ Important:</strong> Our calculators are tools to support your health journey, not replace professional medical advice. Always consult healthcare providers for personalized guidance, especially if you have health conditions or are pregnant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits/Features Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Healthy lifestyle and fitness"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Why People Trust Our Calculators
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">✅</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-1">No Registration Required</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Jump right in and start calculating. No accounts, no emails, no hassle.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-1">Complete Privacy</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Your information never leaves your device. All calculations are secure and we never store your data.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-1">Instant Results</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Get calculations in seconds. Fast, accurate, and ready when you are.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <span className="text-xl sm:text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-1">Educational & Empowering</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">We don't just give you numbers - we help you understand what they mean and how to use them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-6 sm:mb-8 px-2">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Latest Blog Posts
            </h2>
            <Link 
              href="/blog"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-all flex items-center gap-2 group"
            >
              View All
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Link 
              href="/blog/pre-and-post-workout-nutrition"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/Fitness/Workout Nutrition.jpg"
                  alt="Pre and Post-Workout Nutrition"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/30 px-2 sm:px-3 py-1 rounded-full">
                    Nutrition Tips
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  Pre and Post-Workout Nutrition: What to Eat and When
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
                  Learn everything about pre and post-workout nutrition—what actually works, when to eat it, and why it matters for your fitness goals.
                </p>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
            <Link 
              href="/blog/sleep-in-weight-management"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/Fitness/Sleep in Weight Management.jpg"
                  alt="The Role of Sleep in Weight Management"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full">
                    Health & Wellness
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  The Role of Sleep in Weight Management: Why Your Bedroom Matters as Much as Your Gym
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
                  Discover how sleep affects your weight, from hunger hormones to metabolism. Learn why your bedroom matters as much as your gym for weight management.
                </p>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
            <Link 
              href="/blog/10-simple-ways-improve-daily-nutrition"
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src="/Fitness/Improve Your Daily Nutrition.jpg"
                  alt="10 Simple Ways to Improve Your Daily Nutrition"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full">
                    Nutrition Tips
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                  10 Simple Ways to Improve Your Daily Nutrition
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-2">
                  Practical, doable changes that actually stick. Learn straightforward strategies to improve your daily nutrition without overhauling your entire life.
                </p>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-sm sm:text-base">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mb-8 sm:mb-12">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 opacity-90"></div>
            <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
                Ready to Discover Your Health Insights?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-50 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Join thousands taking control of their health. Start your wellness journey today - it only takes a minute.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2">
                <Link
                  href="/bmi"
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Calculate Your BMI →
                </Link>
                <Link
                  href="/nutrition"
                  className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Nutrition Plan →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
