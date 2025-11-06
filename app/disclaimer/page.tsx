import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Disclaimer | Fitness Friendly Recipes",
  description: "Disclaimer for Fitnessfriendlyrecipes. Read our disclaimer regarding the information provided on our website.",
  keywords: "disclaimer, website disclaimer, legal disclaimer, fitness disclaimer",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
            Disclaimer
          </h1>
          
          <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-gray-900 prose-headings:dark:text-gray-100 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-5 prose-headings:scroll-mt-20
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-extrabold prose-h2:bg-gradient-to-r prose-h2:from-blue-600 prose-h2:via-green-600 prose-h2:to-blue-600 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-gray-700 prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base prose-p:sm:text-lg
            prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
            prose-ul:text-gray-700 prose-ul:dark:text-gray-300 prose-ul:mb-6 prose-ul:pl-6 prose-ul:space-y-2
            prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-li:mb-2 prose-li:text-base prose-li:leading-relaxed
            prose-strong:text-gray-900 prose-strong:dark:text-gray-100 prose-strong:font-bold
            prose-center:text-center
          ">
            <p>
              If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at{' '}
              <a href="mailto:Contact@fitnessfriendlyrecipes.online">Contact@fitnessfriendlyrecipes.online</a>.
            </p>

            <h2>Disclaimers for Fitnessfriendlyrecipes</h2>

            <p>
              All the information on this website -{' '}
              <a href="https://fitnessfriendlyrecipes.online/">Fitnessfriendlyrecipes</a> - is published in good faith and for general information purpose only. Fitnessfriendlyrecipes does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Fitnessfriendlyrecipes), is strictly at your own risk. Fitnessfriendlyrecipes will not be liable for any losses and/or damages in connection with the use of our website.
            </p>

            <p>
              From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
            </p>

            <p>
              Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our disclaimer and agree to its terms.
            </p>

            <h2>Update</h2>

            <p>
              Should we update, amend or make any changes to this document, those changes will be prominently posted here.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you want to contact us then you can email us at{' '}
              <a href="mailto:Contact@fitnessfriendlyrecipes.online">Contact@fitnessfriendlyrecipes.online</a>.
            </p>

            <p className="text-center mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
              <strong>"Thanks for visiting our Disclaimer Page"</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

