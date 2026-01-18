// license page for luna ai app

import React from "react";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";

const LunaLicensePage: React.FC = () => {
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
          <FileText size={32} className="text-pink-500" />
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Luna AI <span className="text-pink-500">License</span>
        </h1>
        <p className="text-text-secondary">Last updated: {lastUpdated}</p>
      </div>

      {/* MIT License */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4 text-pink-400">MIT License</h2>
        <p className="text-text-secondary mb-4">
          Copyright (c) 2025 Ritik Lakhwani
        </p>
        <div className="text-text-secondary space-y-4">
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          <p>
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          <p className="uppercase text-sm">
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </div>
      </motion.section>

      {/* Third-Party Licenses */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <h2 className="text-xl font-semibold mb-4">Third-Party Licenses</h2>
        <p className="text-text-secondary mb-4">
          Luna AI uses the following third-party libraries and services, each subject to their own license terms:
        </p>
        <ul className="list-disc list-inside text-text-secondary space-y-2">
          <li><strong>React Native / Expo</strong> - MIT License</li>
          <li><strong>Solana Web3.js</strong> - MIT License</li>
          <li><strong>Solana Mobile Wallet Adapter</strong> - Apache 2.0 License</li>
          <li><strong>Hugging Face Inference</strong> - Apache 2.0 License</li>
          <li><strong>Framer Motion</strong> - MIT License</li>
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-bg-primary p-4 sm:p-6 rounded-lg border border-border"
      >
        <div className="flex items-center mb-4">
          <Mail size={24} className="text-pink-500 mr-3" />
          <h2 className="text-xl font-semibold">Contact</h2>
        </div>
        <p className="text-text-secondary mb-4">
          For any questions regarding this license, please contact:
        </p>
        <p className="text-pink-400">
          Email: ritiklakhwani28@gmail.com
        </p>
      </motion.section>
    </motion.div>
  );
};

export default LunaLicensePage;
