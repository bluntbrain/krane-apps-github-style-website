import React from 'react';

interface SkeletonProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-bg-primary rounded ${className}`}>
      <div className="h-full w-full bg-border/30 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;