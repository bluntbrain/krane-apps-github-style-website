import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import MarkdownRenderer from "../components/ui/MarkdownRenderer";
import TeamMemberCard from "../components/ui/TeamMemberCard";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { teamContent, teamMembers } from "../data/teamData";
import { EXTERNAL_LINKS, CTA_TEXT } from "../constants";

const TeamPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-4 md:p-6"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <MarkdownRenderer content={teamContent} />

        <div className="mt-6 space-y-4 sm:space-y-6">
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
          className="mt-8 p-3 sm:p-4 md:p-6 border border-border rounded-md bg-bg-primary"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Join Our Team
          </h2>
          <p className="mb-4">
            We're always looking for talented individuals who are passionate
            about technology and innovation. If you're interested in working
            with us or learning more about our team culture, book a call with us
            today.
          </p>
          <div className="flex">
            <a
              href={EXTERNAL_LINKS.CALENDAR}
              target="_blank"
              rel="noreferrer"
              className="gh-btn gh-btn-primary flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              {CTA_TEXT.BOOK_CALL_OPPORTUNITIES}
            </a>
          </div>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default TeamPage;
