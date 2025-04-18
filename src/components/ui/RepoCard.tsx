import React from "react";
import {
  Star,
  GitFork,
  Github,
  Globe,
  Award,
  ExternalLink,
} from "lucide-react";

interface Links {
  github?: string;
  live?: string;
  ethglobal?: string;
  chrome?: string;
  docs?: string;
}

interface RepoCardProps {
  title: string;
  description: string;
  language?: string;
  stars?: number;
  forks?: number;
  links?: Links;
  tags?: string[];
  achievement?: string;
  prize?: string;
  category?: string;
  imageUrl?: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
  title,
  description,
  language,
  stars = 0,
  forks = 0,
  links = {},
  tags = [],
  achievement,
  prize,
  category,
}) => {
  return (
    <div className="repo-card">
      <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>

      {achievement && (
        <div className="mb-3 flex items-center text-success">
          <Award size={16} className="mr-1 text-success" />
          <span className="font-medium">{achievement}</span>
          {prize && <span className="ml-1 font-bold">{prize}</span>}
        </div>
      )}

      <p className="text-text-secondary mb-4">{description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-bg-primary text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center text-sm text-text-secondary mb-4">
        {language && (
          <div className="flex items-center mr-4">
            <span className="h-3 w-3 rounded-full bg-accent mr-1"></span>
            <span>{language}</span>
          </div>
        )}

        {stars > 0 && (
          <div className="flex items-center mr-4">
            <Star size={16} className="mr-1" />
            <span>{stars}</span>
          </div>
        )}

        {forks > 0 && (
          <div className="flex items-center">
            <GitFork size={16} className="mr-1" />
            <span>{forks}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {links.github && (
          <a
            href={links.github}
            className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-primary hover:bg-accent hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={14} className="mr-1" />
            GitHub
          </a>
        )}

        {links.live && (
          <a
            href={links.live}
            className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-primary hover:bg-accent hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={14} className="mr-1" />
            Live Site
          </a>
        )}

        {links.ethglobal && (
          <a
            href={links.ethglobal}
            className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-primary hover:bg-accent hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} className="mr-1" />
            ETHGlobal
          </a>
        )}

        {links.chrome && (
          <a
            href={links.chrome}
            className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-primary hover:bg-accent hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} className="mr-1" />
            Chrome Store
          </a>
        )}

        {links.docs && (
          <a
            href={links.docs}
            className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-primary hover:bg-accent hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} className="mr-1" />
            Documentation
          </a>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
