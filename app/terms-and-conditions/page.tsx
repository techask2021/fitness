import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms and Conditions | Fitness Friendly Recipes",
  description: "Terms and Conditions for Fitnessfriendlyrecipes. Read our rules and regulations for using our website and services.",
  keywords: "terms and conditions, terms of service, user agreement, website terms",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border-2 border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8">
            Terms and Conditions
          </h1>
          
          <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 sm:mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-gray-900 prose-headings:dark:text-gray-100 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-5 prose-headings:scroll-mt-20
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-extrabold prose-h2:bg-gradient-to-r prose-h2:from-blue-600 prose-h2:via-green-600 prose-h2:to-blue-600 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-gray-700 prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:text-gray-900 prose-h3:dark:text-gray-100 prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-bold prose-h3:bg-gradient-to-r prose-h3:from-blue-500 prose-h3:to-green-500 prose-h3:bg-clip-text prose-h3:text-transparent
            prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base prose-p:sm:text-lg
            prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
            prose-ul:text-gray-700 prose-ul:dark:text-gray-300 prose-ul:mb-6 prose-ul:pl-6 prose-ul:space-y-2
            prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-li:mb-2 prose-li:text-base prose-li:leading-relaxed
            prose-strong:text-gray-900 prose-strong:dark:text-gray-100 prose-strong:font-bold
            prose-center:text-center
          ">
            <p>
              Welcome to Fitnessfriendlyrecipes!
            </p>

            <p>
              These terms and conditions outline the rules and regulations for the use of Fitnessfriendlyrecipes's Website, located at{' '}
              <a href="https://fitnessfriendlyrecipes.online/">https://fitnessfriendlyrecipes.online/</a>.
            </p>

            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Fitnessfriendlyrecipes if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <p>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>

            <h2>Cookies</h2>

            <p>
              We employ the use of cookies. By accessing Fitnessfriendlyrecipes, you agreed to use cookies in agreement with Fitnessfriendlyrecipes's{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <p>
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>

            <h2>License</h2>

            <p>
              Unless otherwise stated, Fitnessfriendlyrecipes and/or its licensors own the intellectual property rights for all material on Fitnessfriendlyrecipes. All intellectual property rights are reserved. You may access this from Fitnessfriendlyrecipes for your own personal use subject to restrictions set in these terms and conditions.
            </p>

            <p>You must not:</p>

            <ul>
              <li>Republish material from Fitnessfriendlyrecipes</li>
              <li>Sell, rent or sub-license material from Fitnessfriendlyrecipes</li>
              <li>Reproduce, duplicate or copy material from Fitnessfriendlyrecipes</li>
              <li>Redistribute content from Fitnessfriendlyrecipes</li>
            </ul>

            <p>
              This Agreement shall begin on the date hereof.
            </p>

            <p>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Fitnessfriendlyrecipes does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Fitnessfriendlyrecipes, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Fitnessfriendlyrecipes shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>

            <p>
              Fitnessfriendlyrecipes reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>

            <p>You warrant and represent that:</p>

            <ul>
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
              <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>

            <p>
              You hereby grant Fitnessfriendlyrecipes a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.
            </p>

            <h2>Hyperlinking to our Content</h2>

            <p>The following organizations may link to our Website without prior written approval:</p>

            <ul>
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>

            <p>
              These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>

            <p>We may consider and approve other link requests from the following types of organizations:</p>

            <ul>
              <li>commonly-known consumer and/or business information sources;</li>
              <li>dot.com community sites;</li>
              <li>associations or other groups representing charities;</li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>accounting, law and consulting firms; and</li>
              <li>educational institutions and trade associations.</li>
            </ul>

            <p>
              We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Fitnessfriendlyrecipes, and (d) the link is in the context of general resource information.
            </p>

            <p>
              These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
            </p>

            <p>
              If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Fitnessfriendlyrecipes. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
            </p>

            <p>Approved organizations may hyperlink to our Website as follows:</p>

            <ul>
              <li>By use of our corporate name; or</li>
              <li>By use of the uniform resource locator being linked to; or</li>
              <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
            </ul>

            <p>
              No use of Fitnessfriendlyrecipes's logo or other artwork will be allowed for linking absent a trademark license agreement.
            </p>

            <h2>iFrames</h2>

            <p>
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>

            <h2>Content Liability</h2>

            <p>
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates or advocates the infringement or other violation of, any third party rights.
            </p>

            <h2>Your Privacy</h2>

            <p>
              Please read <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>Reservation of Rights</h2>

            <p>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>

            <h2>Removal of links from our website</h2>

            <p>
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            </p>

            <p>
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>

            <h2>Disclaimer</h2>

            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>

            <ul>
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>

            <p>
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
            </p>

            <p>
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>

            <h2>Contact Us</h2>

            <p>
              If you want to contact us then you can email us at{' '}
              <a href="mailto:Contact@fitnessfriendlyrecipes.online">Contact@fitnessfriendlyrecipes.online</a>.
            </p>

            <p className="text-center mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
              <strong>"Thanks for visiting our Terms & Conditions Page"</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

