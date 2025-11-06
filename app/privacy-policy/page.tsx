import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy | Fitness Friendly Recipes",
  description: "Privacy Policy for Fitnessfriendlyrecipes. Learn how we collect, use, and protect your personal information.",
  keywords: "privacy policy, data protection, privacy, GDPR, CCPA, cookies",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
            Privacy Policy
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
              At Fitnessfriendlyrecipes, accessible from{' '}
              <a href="https://fitnessfriendlyrecipes.online/">https://fitnessfriendlyrecipes.online/</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Fitnessfriendlyrecipes and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Fitnessfriendlyrecipes. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2>Consent</h2>

            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2>Information we collect</h2>

            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>

            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
            </p>

            <h2>How we use your information</h2>

            <p>We use the information we collect in various ways, including to:</p>

            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2>Log Files</h2>

            <p>
              Fitnessfriendlyrecipes follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2>Cookies and Web Beacons</h2>

            <p>
              Like any other website, Fitnessfriendlyrecipes uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <p>
              For more general information on cookies, please read{' '}
              <a href="https://www.privacypolicyonline.com/what-are-cookies/" target="_blank" rel="noopener noreferrer">
                "What Are Cookies" from Cookie Consent
              </a>.
            </p>

            <h2>Google DoubleClick DART Cookie</h2>

            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL –{' '}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/technologies/ads
              </a>
            </p>

            <h2>Our Advertising Partners</h2>

            <p>
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
            </p>

            <ul>
              <li>
                <p>Google</p>
                <p>
                  <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/technologies/ads
                  </a>
                </p>
              </li>
            </ul>

            <h2>Advertising Partners Privacy Policies</h2>

            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Fitnessfriendlyrecipes.
            </p>

            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Fitnessfriendlyrecipes, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>

            <p>
              Note that Fitnessfriendlyrecipes has no access to or control over these cookies that are used by third-party advertisers.
            </p>

            <h2>Third Party Privacy Policies</h2>

            <p>
              Fitnessfriendlyrecipes's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>

            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

            <p>Under the CCPA, among other rights, California consumers have the right to:</p>

            <ul>
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>

            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>

            <h2>GDPR Data Protection Rights</h2>

            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>

            <ul>
              <li>
                <strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.
              </li>
              <li>
                <strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
              </li>
              <li>
                <strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>

            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>

            <h2>Children's Information</h2>

            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>

            <p>
              Fitnessfriendlyrecipes does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you want to contact us then you can email us at{' '}
              <a href="mailto:Contact@fitnessfriendlyrecipes.online">Contact@fitnessfriendlyrecipes.online</a>.
            </p>

            <p className="text-center mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
              <strong>"Thanks for visiting our Privacy Policy Page"</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

