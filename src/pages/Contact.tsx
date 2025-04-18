import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import SkeletonLoader from "../components/ui/SkeletonLoader";

const ContactPage: React.FC = () => {
  const calendlyLink = "https://calendar.app.google/vRgL3k468QSNGJX39";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <h1 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">
          Contact Us
        </h1>

        <div className="md:flex md:gap-8">
          <div className="md:w-2/3">
            <p className="mb-6">
              Have a project in mind or want to learn more about our services?
              Book a call with our team and let's discuss how we can help bring
              your ideas to life.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-bg-primary p-8 rounded-md border border-border mb-6"
            >
              <h2 className="text-xl font-medium mb-4">
                Schedule a Consultation
              </h2>
              <p className="mb-6">
                Our team is ready to discuss your project needs and provide
                expert guidance on how to achieve your goals.
              </p>

              <motion.a
                href={calendlyLink}
                target="_blank"
                rel="noreferrer"
                className="gh-btn gh-btn-primary flex items-center justify-center w-full md:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar size={18} className="mr-2" />
                <span>Book a Call Now</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-lg font-medium mb-4">
                Why Book a Call With Us?
              </h3>
              <ul className="list-disc pl-5 space-y-2">
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
            className="md:w-1/3 mt-8 md:mt-0"
          >
            <div className="bg-bg-primary p-6 rounded-md border border-border">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-text-secondary">
                      123 Tech Hub Street
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@kraneapps.com"
                      className="text-accent hover:underline"
                    >
                      info@kraneapps.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+14155551234"
                      className="text-accent hover:underline"
                    >
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Book a Call</p>
                    <a
                      href={calendlyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:underline"
                    >
                      Schedule a meeting
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                <p className="text-text-secondary mb-2">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
                <p className="text-text-secondary">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Suspense>
    </motion.div>
  );
};

export default ContactPage;
