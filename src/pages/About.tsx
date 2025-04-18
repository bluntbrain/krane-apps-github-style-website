import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import { aboutContent } from '../data/aboutContent';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <MarkdownRenderer content={aboutContent} />
      </Suspense>
    </motion.div>
  );
};

export default AboutPage;