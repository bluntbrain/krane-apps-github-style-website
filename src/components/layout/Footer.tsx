import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { EXTERNAL_LINKS } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-secondary border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Krane Apps Logo"
              className="h-10 w-auto object-contain"
              style={{ margin: "-6px" }}
            />
            <span className="ml-2 text-lg font-semibold">Krane Apps</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href={EXTERNAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={EXTERNAL_LINKS.LINKEDIN}
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
            <Link
              to="/about"
              className="text-text-secondary hover:text-text-primary text-sm"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-text-secondary hover:text-text-primary text-sm"
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              className="text-text-secondary hover:text-text-primary text-sm"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="text-text-secondary hover:text-text-primary text-sm"
            >
              Contact
            </Link>
          </div>
          <p className="mt-8 text-base text-text-secondary md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Krane Apps. All rights reserved.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-text-secondary text-center md:text-left">
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
