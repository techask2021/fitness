import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50/50 to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 border-t-2 border-blue-200 dark:border-gray-800 mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-green-100/20 dark:from-blue-900/10 dark:to-green-900/10"></div>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-blue-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl">ℹ️</div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                About
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Nutrition & BMI Calculator helps you understand your body mass index and daily nutritional requirements to support your health and fitness goals.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-green-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl">⚕️</div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Medical Disclaimer
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              This calculator provides general nutritional information. Results should not replace professional medical advice. Always consult with a qualified healthcare provider.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-orange-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl">🔒</div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Privacy
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Your data is processed securely and is not stored on our servers. Your privacy and data security are our top priorities.
            </p>
          </div>
        </div>
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Link 
            href="/"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            Home
          </Link>
          <Link 
            href="/bmi"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            BMI Calculator
          </Link>
          <Link 
            href="/nutrition"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20"
          >
            Nutrition Calculator
          </Link>
          <Link 
            href="/blog"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            Blog
          </Link>
          <Link 
            href="/privacy-policy"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-and-conditions"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20"
          >
            Terms & Conditions
          </Link>
          <Link 
            href="/disclaimer"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20"
          >
            Disclaimer
          </Link>
          <Link 
            href="/contact"
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20"
          >
            Contact
          </Link>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                © {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">Fitness Friendly Recipes</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> for your health and fitness journey
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
              <span>Free Health Tools</span>
              <span>•</span>
              <span>100% Private</span>
              <span>•</span>
              <span>Science-Based</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

