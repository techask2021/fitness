'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 shadow-lg border-b-2 border-blue-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold flex-shrink-0"
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">🏋️</span>
            <span className="relative">
              <span className="block sm:hidden bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-green-700 group-hover:to-blue-700 transition-all duration-300">
                Fitness
              </span>
              <span className="hidden sm:block bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-green-700 group-hover:to-blue-700 transition-all duration-300">
                Fitness Friendly Recipes
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link 
              href="/" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-200 px-3 lg:px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 group text-sm lg:text-base"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
            <Link 
              href="/bmi" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-200 px-3 lg:px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 group text-sm lg:text-base"
            >
              <span className="relative z-10">📊 BMI</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
            <Link 
              href="/nutrition" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold transition-all duration-200 px-3 lg:px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 group text-sm lg:text-base"
            >
              <span className="relative z-10">🍎 Nutrition</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
            <Link 
              href="/blog" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-200 px-3 lg:px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 group text-sm lg:text-base"
            >
              <span className="relative z-10">📝 Blog</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-100 to-pink-200 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
            <Link 
              href="/privacy-policy" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-200 px-3 lg:px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 group text-sm lg:text-base"
            >
              <span className="relative z-10">🔒 Privacy</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold transition-all duration-200 px-3 lg:px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 group text-sm lg:text-base"
            >
              <span className="relative z-10">📧 Contact</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                Home
              </Link>
              <Link 
                href="/bmi"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                📊 BMI
              </Link>
              <Link 
                href="/nutrition"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30"
              >
                🍎 Nutrition
              </Link>
              <Link 
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30"
              >
                📝 Blog
              </Link>
              <Link 
                href="/privacy-policy"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
              >
                🔒 Privacy
              </Link>
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30"
              >
                📧 Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

