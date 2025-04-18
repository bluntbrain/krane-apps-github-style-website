import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { EXTERNAL_LINKS } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border py-4 sm:py-6">
      <div className="mx-auto px-0 sm:px-2 lg:px-4">
        <div className="md:flex md:items-center md:justify-between px-3 sm:px-4">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Krane Apps Logo"
              className="h-7 sm:h-8 w-auto object-contain mr-1"
            />
            <span className="text-base sm:text-lg font-semibold">
              Krane Apps
            </span>
          </div>
          <div className="flex space-x-4 sm:space-x-6 mt-3 md:mt-0">
            <a
              href={EXTERNAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={EXTERNAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 border-t border-border pt-4 sm:pt-6 md:flex md:items-center md:justify-between px-3 sm:px-4">
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 md:order-2">
            <Link
              to="/about"
              className="text-text-secondary hover:text-text-primary text-xs sm:text-sm"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-text-secondary hover:text-text-primary text-xs sm:text-sm"
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              className="text-text-secondary hover:text-text-primary text-xs sm:text-sm"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-text-primary text-xs sm:text-sm"
            >
              Contact
            </Link>
          </div>
          <p className="mt-4 sm:mt-6 md:mt-0 md:order-1 text-sm sm:text-base text-text-secondary">
            &copy; {new Date().getFullYear()} Krane Apps. All rights reserved.
          </p>
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border px-3 sm:px-4">
          <p className="text-xs sm:text-sm text-text-secondary text-center md:text-left">
            Krane Apps is a venture by{" "}
            <span className="font-medium">
              LAKHWANI INNOVATION LABS PRIVATE LIMITED
            </span>
          </p>
          <p className="text-xs text-text-secondary mt-1 text-center md:text-left">
            C/O NARAINDAS JAISINGHANI, C-48, VAISHALI NAGAR, AJMER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
