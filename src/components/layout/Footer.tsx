import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="ml-2 text-lg font-semibold">Krane Apps</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/kraneapps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://twitter.com/kraneapps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://linkedin.com/company/kraneapps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link to="/about" className="text-text-secondary hover:text-text-primary text-sm">
              About
            </Link>
            <Link to="/portfolio" className="text-text-secondary hover:text-text-primary text-sm">
              Portfolio
            </Link>
            <Link to="/team" className="text-text-secondary hover:text-text-primary text-sm">
              Team
            </Link>
            <Link to="/contact" className="text-text-secondary hover:text-text-primary text-sm">
              Contact
            </Link>
          </div>
          <p className="mt-8 text-base text-text-secondary md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Krane Apps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;