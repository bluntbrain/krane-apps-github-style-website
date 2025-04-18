import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import MarkdownRenderer from "../components/ui/MarkdownRenderer";
import TeamMemberCard from "../components/ui/TeamMemberCard";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { teamContent, teamMembers } from "../data/teamData";

const TeamPage: React.FC = () => {
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
            We're always looking for talented individuals who are passionate
            about technology and innovation. If you're interested in working
            with us or learning more about our team culture, book a call with us
            today.
          </p>
          <div className="flex">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="gh-btn gh-btn-primary flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              Book a Call to Discuss Opportunities
            </a>
          </div>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default TeamPage;
