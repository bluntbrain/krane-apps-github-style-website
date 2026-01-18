// privacy policy page for luna ai app

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Trash2, Mail } from "lucide-react";

const LunaPrivacyPage: React.FC = () => {
  const lastUpdated = "January 18, 2025";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-4 md:p-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
          <Shield size={32} className="text-pink-500" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Luna AI <span className="text-pink-500">Privacy Policy</span>
        </h1>
        <p className="text-text-secondary">Last updated: {lastUpdated}</p>
      </div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="text-text-secondary mb-4">
          Welcome to Luna AI ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application.
        </p>
        <p className="text-text-secondary">
          By using Luna AI, you agree to the collection and use of information in accordance with this policy.
        </p>
      </motion.section>

      {/* Information We Collect */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Eye size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Information We Collect</h2>
        </div>

        <h3 className="font-medium mb-2 text-pink-400">Information You Provide</h3>
        <ul className="list-disc list-inside text-text-secondary mb-4 space-y-2">
          <li>Chat messages and conversations with Luna AI</li>
          <li>Wallet address when connecting for payments (public address only)</li>
          <li>Session information for service continuity</li>
        </ul>

        <h3 className="font-medium mb-2 text-pink-400">Automatically Collected Information</h3>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li>Device type and operating system</li>
          <li>App usage statistics and session duration</li>
          <li>Error logs for troubleshooting</li>
        </ul>
      </motion.section>

      {/* How We Use Your Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Lock size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        </div>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li>To provide and maintain our AI companion service</li>
          <li>To process payments via Solana blockchain</li>
          <li>To improve our AI responses and user experience</li>
          <li>To detect and prevent fraud or abuse</li>
          <li>To comply with legal obligations</li>
        </ul>
      </motion.section>

      {/* Data Security */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Shield size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Data Security</h2>
        </div>
        <p className="text-text-secondary mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li>Encrypted data transmission (HTTPS/TLS)</li>
          <li>Secure payment processing via Solana blockchain</li>
          <li>No storage of private keys or wallet credentials</li>
          <li>Regular security audits and updates</li>
        </ul>
      </motion.section>

      {/* Data Retention */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Trash2 size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Data Retention & Deletion</h2>
        </div>
        <p className="text-text-secondary mb-4">
          We retain your data only for as long as necessary to provide our services:
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li>Chat history is stored locally on your device and cleared when the session expires</li>
          <li>Session data is automatically deleted after session expiration</li>
          <li>Payment transaction records are stored on the public Solana blockchain</li>
          <li>You can request deletion of your data by contacting us</li>
        </ul>
      </motion.section>

      {/* Third-Party Services */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
        <p className="text-text-secondary mb-4">
          Luna AI uses the following third-party services:
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li><strong>Hugging Face</strong> - AI model inference for chat and text-to-speech</li>
          <li><strong>Solana Blockchain</strong> - Payment processing</li>
          <li><strong>Phantom/Mobile Wallet Adapter</strong> - Wallet connection for payments</li>
        </ul>
        <p className="text-text-secondary mt-4">
          Each third-party service has its own privacy policy governing the use of your information.
        </p>
      </motion.section>

      {/* Your Rights */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
        <p className="text-text-secondary mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
      </motion.section>

      {/* Age Restriction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border border-pink-500/30"
      >
        <h2 className="text-xl font-semibold mb-4 text-pink-400">Age Restriction</h2>
        <p className="text-text-secondary">
          Luna AI is intended for users who are 18 years of age or older. We do not knowingly collect personal information from anyone under the age of 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
        </p>
      </motion.section>

      {/* Contact Us */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Mail size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Contact Us</h2>
        </div>
        <p className="text-text-secondary mb-4">
          If you have any questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <p className="text-pink-400">
          Email: ritiklakhwani28@gmail.com
        </p>
      </motion.section>

      {/* Changes to Privacy Policy */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="text-text-secondary">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default LunaPrivacyPage;
