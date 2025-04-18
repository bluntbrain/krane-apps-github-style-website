import React from "react";

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className = "h-4 w-full",
}) => {
  return (
    <div className={`animate-pulse bg-bg-secondary rounded-md ${className}`}>
      <div className="invisible">Loading...</div>
    </div>
  );
};

export default SkeletonLoader;
