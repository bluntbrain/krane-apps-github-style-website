import React from "react";
import { Link } from "react-router-dom";
import { Code2, Menu, Moon, Sun, X, Calendar } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { EXTERNAL_LINKS, CTA_TEXT } from "../../constants";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-bg-secondary border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-accent" />
              <span className="ml-2 text-xl font-bold">Krane Apps</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-text-secondary hover:bg-bg-primary"
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={EXTERNAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn"
            >
              GitHub
            </a>
            <a
              href={EXTERNAL_LINKS.CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn gh-btn-primary flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              {CTA_TEXT.BOOK_CALL}
            </a>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 rounded-md text-text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/about"
              className="sidebar-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="sidebar-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              className="sidebar-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="sidebar-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-text-secondary hover:bg-bg-primary"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href={EXTERNAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-btn"
              >
                GitHub
              </a>
              <a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-btn gh-btn-primary flex items-center"
              >
                <Calendar size={16} className="mr-2" />
                {CTA_TEXT.BOOK_CALL}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
