import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
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
           <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
           
           <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-white/10 rounded-xl border border-white/10 text-bright-accent">
               <Shield className="w-8 h-8" />
             </div>
             <h1 className="text-3xl md:text-5xl font-display font-bold">Privacy Policy</h1>
           </div>

           <div className="space-y-8 text-gray-300 leading-relaxed font-light">
              <div>
                <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                  At SquareLift Technologies, accessible from squarelift.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SquareLift Technologies and how we use it.
                </p>
                <p className="mt-4">
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">1. Information We Collect</h2>
                <p className="mb-4">
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p className="mb-4">
                  If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p className="mb-4">
                    When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">3. Log Files</h2>
                <p>
                  SquareLift Technologies follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">4. Cookies and Web Beacons</h2>
                <p>
                  Like any other website, SquareLift Technologies uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">5. Third Party Privacy Policies</h2>
                <p className="mb-4">
                  SquareLift Technologies's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                </p>
                <p>
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                <p className="mb-4">Under the CCPA, among other rights, California consumers have the right to:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                    <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                    <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                </ul>
                <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">7. GDPR Data Protection Rights</h2>
                <p className="mb-4">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
                <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">8. Children's Information</h2>
                <p>
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p className="mt-2">
                  SquareLift Technologies does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-display">9. Contact Us</h2>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:squarelift.in@gmail.com" className="text-bright-accent hover:text-white transition-colors">squarelift.in@gmail.com</a>.
                </p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;