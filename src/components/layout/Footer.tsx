import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { EXTERNAL_LINKS } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-bg-primary border-t border-border/60 pt-16 pb-8 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        

        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          

          <div className="flex flex-col gap-6 max-w-sm">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img
                src="/images/logo.png"
                alt="Krane Apps Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-bold tracking-tight text-white">KRANE APPS</span>
            </Link>
            <p className="text-text-secondary font-medium leading-relaxed">
              We build lean product MVPs and secure blockchain infrastructure. No bloated architectures—just the core features you need.
            </p>
          </div>


          <div className="flex gap-16 sm:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold tracking-tight mb-2">Platform</span>
              <Link to="/about" className="text-text-secondary font-medium hover:text-white transition-colors">About</Link>
              <Link to="/portfolio" className="text-text-secondary font-medium hover:text-white transition-colors">Portfolio</Link>
              <Link to="/team" className="text-text-secondary font-medium hover:text-white transition-colors">Team</Link>
              <Link to="/blog" className="text-text-secondary font-medium hover:text-white transition-colors">Blog</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold tracking-tight mb-2">Connect</span>
              <Link to="/contact" className="text-text-secondary font-medium hover:text-white transition-colors">Contact Us</Link>
              <a href={EXTERNAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium hover:text-white transition-colors flex items-center gap-1 group">
                GitHub <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
              </a>
              <a href={EXTERNAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-text-secondary font-medium hover:text-white transition-colors flex items-center gap-1 group">
                LinkedIn <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
              </a>
            </div>
          </div>

        </div>


        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 gap-4">
          <p className="text-sm font-medium text-text-secondary">
            &copy; {new Date().getFullYear()} Krane Apps. All rights reserved.
          </p>
          
          <p className="text-xs font-medium text-text-secondary text-center md:text-right mix-blend-difference opacity-60">
            A venture by LAKHWANI INNOVATION LABS PRIVATE LIMITED
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
