import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { EXTERNAL_LINKS, CTA_TEXT } from "../../constants";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Team", path: "/team" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 pb-6 px-4 sm:px-8 pointer-events-none border-b border-border/40 bg-bg-primary/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between pointer-events-auto">

        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.png"
            alt="Krane Apps Logo"
            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">KRANE APPS</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isExact = link.path === "/";
            const isActive = isExact
              ? location.pathname === "/"
              : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={isExact}
                className={`relative px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ease-out ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-slider"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center">
          <a
            href={EXTERNAL_LINKS.CALENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-black px-6 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors duration-300"
          >
            {CTA_TEXT.BOOK_CALL || "Get Started"}
          </a>
        </div>

        <button
          className="lg:hidden p-2 border border-border/60 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-4 right-4 mt-2 bg-bg-primary border border-border/60 overflow-hidden transition-all duration-300 ease-out transform origin-top pointer-events-auto ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-3 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border/40 pb-2">
            <a
              href={EXTERNAL_LINKS.CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white text-black px-6 py-3 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {CTA_TEXT.BOOK_CALL || "Get Started"}
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
