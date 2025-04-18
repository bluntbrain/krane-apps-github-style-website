import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  avatar,
  bio,
  social = {},
}) => {
  return (
    <div className="team-card p-2 sm:p-3 bg-bg-primary border border-border rounded-md">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-border object-cover mr-0 sm:mr-4 mb-3 sm:mb-0"
        />
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-accent mb-1 sm:mb-2 text-sm sm:text-base">
            {role}
          </p>
          <p className="text-text-secondary mb-3 sm:mb-4 text-sm sm:text-base">
            {bio}
          </p>

          <div className="flex space-x-3">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
                aria-label={`${name}'s GitHub profile`}
              >
                <Github size={16} className="sm:size-18" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
                aria-label={`${name}'s Twitter profile`}
              >
                <Twitter size={16} className="sm:size-18" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={16} className="sm:size-18" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
