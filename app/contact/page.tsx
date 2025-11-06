import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Contact Us | Fitness Friendly Recipes",
  description: "Get in touch with Fitness Friendly Recipes. Have questions about our BMI and Nutrition calculators? Contact us today!",
  keywords: "contact, contact us, fitness contact, health calculator support",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
            Contact Us
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-gray-900 prose-headings:dark:text-gray-100 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-extrabold prose-h2:bg-gradient-to-r prose-h2:from-blue-600 prose-h2:via-green-600 prose-h2:to-blue-600 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-gray-700 prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base prose-p:sm:text-lg
            prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
          ">
            <p>
              We'd love to hear from you! If you have any questions, suggestions, or feedback about our BMI and Nutrition calculators, please don't hesitate to reach out to us.
            </p>

            <h2>Get in Touch</h2>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6 sm:p-8 mb-8 border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-4">
                <div className="text-4xl sm:text-5xl flex-shrink-0">📧</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Email Us
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Send us an email at:
                  </p>
                  <a 
                    href="mailto:Contact@fitnessfriendlyrecipes.online"
                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Contact@fitnessfriendlyrecipes.online
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            <h2>What Can We Help You With?</h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Questions & Support
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Have questions about how to use our calculators or need help interpreting your results?
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Feedback & Suggestions
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Share your thoughts on how we can improve our tools and make them more helpful.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
                <div className="text-4xl mb-3">🐛</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Report Issues
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Found a bug or technical issue? Let us know so we can fix it quickly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Partnerships
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Interested in collaborating or partnering with us? We'd love to hear from you.
                </p>
              </div>
            </div>

            <h2>Response Time</h2>

            <p>
              We aim to respond to all inquiries within 24-48 hours during business days. Thank you for your patience!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-6 sm:p-8 mt-8 border-2 border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                📍 Visit Our Other Pages
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                While you're here, make sure to check out our other resources:
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="/privacy-policy"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-semibold"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-and-conditions"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base font-semibold"
                >
                  Terms & Conditions
                </a>
                <a 
                  href="/disclaimer"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm sm:text-base font-semibold"
                >
                  Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

