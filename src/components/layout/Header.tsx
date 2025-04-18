import React from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X, Calendar } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { EXTERNAL_LINKS, CTA_TEXT } from "../../constants";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-bg-secondary border-b border-border sticky top-0 z-50">
      <div className="mx-auto px-0 sm:px-2 lg:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <div className="pl-3 sm:pl-4">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Krane Apps Logo"
                className="h-8 sm:h-10 w-auto object-contain mr-1"
              />
              <span className="text-lg sm:text-xl font-bold">Krane Apps</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4 pr-4">
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

          <div className="md:hidden pr-3 sm:pr-4">
            <button
              className="p-1.5 sm:p-2 rounded-md text-text-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border p-3 sm:p-4">
          <div className="flex flex-col space-y-3">
            <Link
              to="/about"
              className="sidebar-nav-item py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="sidebar-nav-item py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/team"
              className="sidebar-nav-item py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="sidebar-nav-item py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-md text-text-secondary hover:bg-bg-primary"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="flex space-x-2">
                <a
                  href={EXTERNAL_LINKS.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn text-sm py-1.5 px-2.5"
                >
                  GitHub
                </a>
                <a
                  href={EXTERNAL_LINKS.CALENDAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn gh-btn-primary flex items-center text-sm py-1.5 px-2.5"
                >
                  <Calendar size={14} className="mr-1.5" />
                  {CTA_TEXT.BOOK_CALL}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
