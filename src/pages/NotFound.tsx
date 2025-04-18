import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center text-center">
      <AlertCircle className="h-16 w-16 text-error mb-4" />
      <h1 className="text-2xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-text-secondary mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="gh-btn gh-btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;