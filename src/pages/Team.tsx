import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import MarkdownRenderer from '../components/ui/MarkdownRenderer';
import TeamMemberCard from '../components/ui/TeamMemberCard';
import SkeletonLoader from '../components/ui/SkeletonLoader';
import { teamContent, teamMembers } from '../data/teamData';

const TeamPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <MarkdownRenderer content={teamContent} />
        
        <div className="mt-8 space-y-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                avatar={member.avatar}
                bio={member.bio}
                social={member.social}
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
          <h2 className="text-xl font-semibold mb-4">Join Our Team</h2>
          <p className="mb-4">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            If you're interested in working with us, check out our open positions or send us your resume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="gh-btn gh-btn-primary">View Open Positions</button>
            <button className="gh-btn">Send Resume</button>
          </div>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default TeamPage;