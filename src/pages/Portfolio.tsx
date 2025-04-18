import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import RepoCard from '../components/ui/RepoCard';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import { portfolioContent, portfolioProjects } from '../data/portfolioData';

const PortfolioPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <MarkdownRenderer content={portfolioContent} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <RepoCard
                title={project.title}
                description={project.description}
                language={project.language}
                stars={project.stars}
                forks={project.forks}
                tags={project.tags}
                url={project.url}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-12 p-6 border border-border rounded-md bg-bg-primary"
        >
          <h2 className="text-xl font-semibold mb-4">Featured Project: DeFi Lending Platform</h2>
          <div className="md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img 
                src={portfolioProjects[0].imageUrl} 
                alt="DeFi Lending Platform" 
                className="rounded-md w-full object-cover h-64"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4">
                Our flagship DeFi project enables trustless lending and borrowing on the Ethereum blockchain. 
                We built a complete ecosystem including smart contracts, a React frontend, and comprehensive analytics.
              </p>
              <ul className="list-disc list-inside mb-4 text-text-secondary">
                <li>Implemented algorithmic interest rate model</li>
                <li>Created liquidation engine for undercollateralized positions</li>
                <li>Integrated with multiple wallets and DeFi protocols</li>
                <li>Successfully passed 3 security audits</li>
                <li>Over $15M in total value locked within 3 months of launch</li>
              </ul>
              <button className="gh-btn gh-btn-primary">View Case Study</button>
            </div>
          </div>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default PortfolioPage;