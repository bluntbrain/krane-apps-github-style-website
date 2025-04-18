import React, { Suspense } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Code,
  Zap,
  Shield,
  Globe,
  Server,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react";
import MarkdownRenderer from "../components/ui/MarkdownRenderer";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { aboutContent, aboutHighlights, techStack } from "../data/aboutContent";
import { EXTERNAL_LINKS, CTA_TEXT } from "../constants";

// Map of icon names to the actual icon components
const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap size={24} className="text-accent" />,
  Shield: <Shield size={24} className="text-accent" />,
  Globe: <Globe size={24} className="text-accent" />,
  Server: <Server size={24} className="text-accent" />,
  Database: <Database size={24} className="text-accent" />,
  Cloud: <Cloud size={24} className="text-accent" />,
  Smartphone: <Smartphone size={24} className="text-accent" />,
};

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
        {/* Hero section with highlights */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            We Build <span className="text-accent">Exceptional</span> Software
          </h1>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            Specializing in MVPs for startups and blockchain projects, helping
            innovators turn their ideas into reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {aboutHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-primary p-6 rounded-lg border border-border flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  {iconMap[highlight.iconName]}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-text-secondary">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 bg-bg-primary p-6 rounded-lg border border-border"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((category, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium mb-3 text-accent">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center">
                      <Code size={14} className="mr-2 text-text-secondary" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main content */}
        <div className="prose prose-invert max-w-none">
          <MarkdownRenderer content={aboutContent} />
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 border border-accent/30 rounded-lg bg-bg-primary text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Idea Into Reality?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            technical expertise and business acumen.
          </p>
          <a
            href={EXTERNAL_LINKS.CALENDAR}
            target="_blank"
            rel="noreferrer"
            className="gh-btn gh-btn-primary inline-flex items-center px-6 py-3"
          >
            <Calendar size={18} className="mr-2" />
            {CTA_TEXT.BOOK_CALL_START}
          </a>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default AboutPage;
