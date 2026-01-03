import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const TermsOfService: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 md:px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
           {/* Decorative background blobs */}
           <div className="absolute top-0 left-0 w-96 h-96 bg-bright-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
           
           <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-white/10 rounded-xl border border-white/10 text-bright-accent">
               <FileText className="w-8 h-8" />
             </div>
             <h1 className="text-3xl md:text-5xl font-display font-bold">Terms of Service</h1>
           </div>

           <div className="space-y-8 text-gray-300 leading-relaxed font-light">
              <div>
                <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                  Welcome to SquareLift Technologies. These terms and conditions outline the rules and regulations for the use of SquareLift Technologies' Website, located at squarelift.in.
                </p>
                <p className="mt-2">
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use SquareLift Technologies if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p className="mt-2">
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">1. Cookies</h2>
                <p className="mb-4">
                  We employ the use of cookies. By accessing SquareLift Technologies, you agreed to use cookies in agreement with the SquareLift Technologies' Privacy Policy.
                </p>
                <p>
                  Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">2. License</h2>
                <p className="mb-4">
                  Unless otherwise stated, SquareLift Technologies and/or its licensors own the intellectual property rights for all material on SquareLift Technologies. All intellectual property rights are reserved. You may access this from SquareLift Technologies for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <p className="text-gray-400 font-medium mb-2">You must not:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                  <li>Republish material from SquareLift Technologies</li>
                  <li>Sell, rent or sub-license material from SquareLift Technologies</li>
                  <li>Reproduce, duplicate or copy material from SquareLift Technologies</li>
                  <li>Redistribute content from SquareLift Technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">3. Hyperlinking to our Content</h2>
                <p className="mb-2">The following organizations may link to our Website without prior written approval:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                  <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                </ul>
                <p>
                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">4. iFrames</h2>
                <p>
                  Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">5. Content Liability</h2>
                <p>
                  We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">6. Reservation of Rights</h2>
                <p>
                  We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">7. Disclaimer</h2>
                <p>
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Limit or exclude our or your liability for death or personal injury;</li>
                  <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                  <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                  <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>
                <p className="mt-4">
                  The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                </p>
                <p className="mt-4">
                  As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">8. Contact</h2>
                <p>
                  Please contact us at <a href="mailto:squarelift.in@gmail.com" className="text-bright-accent hover:text-white transition-colors">squarelift.in@gmail.com</a> for any questions related to these Terms of Service.
                </p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;