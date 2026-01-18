// copyright page for luna ai app

import React from "react";
import { motion } from "framer-motion";
import { Copyright, User, Mail, Calendar } from "lucide-react";

const LunaCopyrightPage: React.FC = () => {
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
          <Copyright size={32} className="text-pink-500" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Luna AI <span className="text-pink-500">Copyright Notice</span>
        </h1>
        <p className="text-text-secondary">Last updated: {lastUpdated}</p>
      </div>

      {/* Copyright Notice */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4 text-pink-400">Copyright Notice</h2>
        <p className="text-text-secondary text-lg mb-2">
          Luna AI
        </p>
        <p className="text-text-secondary mb-4">
          Copyright (c) 2025 Ritik Lakhwani. All Rights Reserved.
        </p>
        <p className="text-text-secondary">
          This application, including all source code, assets, designs, and associated
          documentation files, is the intellectual property of Ritik Lakhwani.
        </p>
      </motion.section>

      {/* Ownership */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Ownership</h2>
        <p className="text-text-secondary mb-4">
          Luna AI and all related materials are owned by Ritik Lakhwani. This includes but is not limited to:
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li>Application source code</li>
          <li>User interface designs</li>
          <li>Video and audio assets</li>
          <li>Brand name and logo</li>
          <li>Documentation and marketing materials</li>
        </ul>
      </motion.section>

      {/* Developer Information */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <User size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Developer Information</h2>
        </div>
        <div className="space-y-3">
          <p className="text-text-secondary">
            <strong className="text-pink-400">Developer:</strong> Ritik Lakhwani
          </p>
          <p className="text-text-secondary">
            <strong className="text-pink-400">Email:</strong> ritiklakhwani28@gmail.com
          </p>
        </div>
      </motion.section>

      {/* Third-Party Components */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Third-Party Components</h2>
        <p className="text-text-secondary mb-4">
          This application uses the following third-party services and libraries:
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li><strong>Hugging Face</strong> - AI model inference</li>
          <li><strong>Solana Blockchain</strong> - Payment processing</li>
          <li><strong>Solana Mobile Wallet Adapter</strong> - Wallet integration</li>
          <li><strong>Expo</strong> - React Native framework</li>
        </ul>
        <p className="text-text-secondary mt-4">
          Each third-party component is subject to its own license terms.
        </p>
      </motion.section>

      {/* Publication Date */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Calendar size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Publication</h2>
        </div>
        <div className="space-y-2">
          <p className="text-text-secondary">
            <strong className="text-pink-400">First Published:</strong> January 2025
          </p>
          <p className="text-text-secondary">
            <strong className="text-pink-400">Last Updated:</strong> January 2025
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default LunaCopyrightPage;
