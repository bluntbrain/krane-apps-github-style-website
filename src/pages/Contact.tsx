import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar } from "lucide-react";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { EXTERNAL_LINKS, CONTACT_INFO, CTA_TEXT } from "../constants";

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-4 md:p-6"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 pb-2 border-b border-border">
          Contact Us
        </h1>

        <div className="md:flex md:gap-6 lg:gap-8">
          <div className="md:w-2/3">
            <p className="mb-4 sm:mb-6">
              Have a project in mind or want to learn more about our services?
              Book a call with our team and let's discuss how we can help bring
              your ideas to life.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-bg-primary p-4 sm:p-6 rounded-md border border-border mb-4 sm:mb-6"
            >
              <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                Schedule a Consultation
              </h2>
              <p className="mb-4 sm:mb-6">
                Our team is ready to discuss your project needs and provide
                expert guidance on how to achieve your goals.
              </p>

              <motion.a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noreferrer"
                className="gh-btn gh-btn-primary flex items-center justify-center w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} className="mr-2" />
                <span>{CTA_TEXT.BOOK_CALL}</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <h3 className="text-base sm:text-lg font-medium mb-3">
                Why Book a Call With Us?
              </h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                <li>Discuss your project requirements in detail</li>
                <li>
                  Get expert advice on technology stack and implementation
                  approach
                </li>
                <li>Understand our development process and timeline</li>
                <li>Receive a personalized roadmap for your project</li>
                <li>Ask any questions about our services and expertise</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/3 mt-6 md:mt-0"
          >
            <div className="bg-bg-primary p-3 sm:p-4 md:p-6 rounded-md border border-border">
              <h3 className="text-base sm:text-lg font-medium mb-3">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-text-secondary">
                      {CONTACT_INFO.ADDRESS.CITY}, {CONTACT_INFO.ADDRESS.STATE}{" "}
                      {CONTACT_INFO.ADDRESS.ZIP}
                      <br />
                      {CONTACT_INFO.ADDRESS.COUNTRY}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.EMAIL}`}
                      className="text-accent hover:underline"
                    >
                      {CONTACT_INFO.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Book a Call</p>
                    <a
                      href={EXTERNAL_LINKS.CALENDAR}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline"
                    >
                      Schedule a meeting
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-border">
                <h3 className="text-base sm:text-lg font-medium mb-3">
                  Business Hours
                </h3>
                <p className="text-text-secondary mb-2">
                  Monday - Friday: {CONTACT_INFO.BUSINESS_HOURS.WEEKDAYS}
                </p>
                <p className="text-text-secondary">
                  Saturday - Sunday: {CONTACT_INFO.BUSINESS_HOURS.WEEKENDS}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Suspense>
    </motion.div>
  );
};

export default ContactPage;
