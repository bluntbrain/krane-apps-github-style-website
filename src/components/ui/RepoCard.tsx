import React from 'react';
import { Star, GitFork } from 'lucide-react';

interface RepoCardProps {
  title: string;
  description: string;
  language?: string;
  stars?: number;
  forks?: number;
  url?: string;
  tags?: string[];
}

const RepoCard: React.FC<RepoCardProps> = ({
  title,
  description,
  language,
  stars = 0,
  forks = 0,
  url = '#',
  tags = [],
}) => {
  return (
    <a href={url} className="block" target="_blank" rel="noopener noreferrer">
      <div className="repo-card">
        <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>
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
        
        <div className="flex items-center text-sm text-text-secondary">
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
      </div>
    </a>
  );
};

export default RepoCard;