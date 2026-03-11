import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { EXTERNAL_LINKS, CONTACT_INFO, CTA_TEXT } from "../constants";

const ContactPage: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT_INFO.EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>

        <div className="relative flex flex-col items-start justify-center w-full min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] px-4 sm:px-8 mt-8 sm:mt-20 mb-8 max-w-[1400px] mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full relative z-10"
          >
            <h1 className="text-[2.5rem] sm:text-[7rem] md:text-[9.5rem] font-black tracking-tighter leading-[0.85] sm:leading-[0.85] text-white mb-6 sm:mb-10 md:mb-12 uppercase max-w-full relative select-none">
              <span className="relative z-20 bg-gradient-to-b from-white from-65% to-[#0ea5e9] to-65% text-transparent bg-clip-text pr-6">
                Reach
              </span>
              <br />
              <div className="inline-block bg-[#f97316] px-2 leading-[1.05] sm:-mt-[0.35em] sm:-translate-y-[15px] pt-2 relative z-10 max-w-full">
                <span className="text-white">Out To Win.</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-text-secondary max-w-2xl font-normal leading-tight">
              Ready to ship? Drop us a line. We build products, not prolonged slide-decks.
          </p>
          </motion.div>
        </div>


        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-32">
          

          <div className="flex flex-col border-t border-border/60 pt-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none mb-12">Let's Build.</h2>
            
            <p className="text-lg text-text-secondary font-normal leading-relaxed mb-12 max-w-lg">
              We specialize in rapidly bringing complex MVPs to market and deploying highly secure on-chain infrastructure. Book a direct call with an engineer below to evaluate your product timeline.
            </p>
            
            <div className="flex flex-col border border-border/60 bg-bg-secondary/20 p-6 sm:p-8 md:p-12 mb-12 hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-black uppercase text-white tracking-tighter mb-4">Direct Comm_</h3>
              <p className="text-text-secondary font-medium mb-12 leading-relaxed">Skip the sales queues. Schedule a technical evaluation directly with our lead developers to map out your architecture and timeline.</p>
              
              <a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noreferrer"
                className="group flex justify-between items-center bg-white text-black px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors"
                aria-label="Book a call via Calendly"
              >
                <span>{CTA_TEXT.BOOK_CALL}</span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex flex-col gap-4 border-t border-border/60 pt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Why Chat with Us?</h3>
              <ul className="flex flex-col gap-3 text-text-secondary font-medium">
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">01 /</span> Direct access to senior engineers</li>
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">02 /</span> Transparent timeline and stack evaluation</li>
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">03 /</span> No-bullshit feasibility checking</li>
              </ul>
            </div>
          </div>


          <div className="flex flex-col border-t border-border/60 pt-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none mb-12">HQ Base.</h2>

            <div className="flex flex-col gap-12">
              
              <div className="flex flex-col sm:flex-row gap-6 items-start border-b border-border/40 pb-12">
                <MapPin size={24} className="text-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Location_</span>
                  <p className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                    {CONTACT_INFO.ADDRESS.CITY}, {CONTACT_INFO.ADDRESS.STATE}
                  </p>
                  <p className="text-lg text-text-secondary font-medium mt-2">
                    {CONTACT_INFO.ADDRESS.ZIP} <br/> {CONTACT_INFO.ADDRESS.COUNTRY}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start border-b border-border/40 pb-12">
                <Mail size={24} className="text-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Email Comm_</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-3 text-xl md:text-2xl font-black text-white hover:text-accent transition-colors leading-tight uppercase tracking-tighter text-left cursor-pointer"
                  >
                    {CONTACT_INFO.EMAIL}
                    <span
                      className={`text-xs font-bold uppercase tracking-wider text-accent transition-all duration-300 whitespace-nowrap ${emailCopied ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    >
                      ✓ Copied
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col border border-border/40 bg-bg-secondary/10 p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-6">Operating Cycle_</span>
                
                <div className="flex justify-between items-center border-b border-border/40 pb-4 mb-4">
                  <span className="font-medium text-white">Mon - Fri</span>
                  <span className="font-bold text-accent">{CONTACT_INFO.BUSINESS_HOURS.WEEKDAYS}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-text-secondary">Sat - Sun</span>
                  <span className="font-bold text-text-secondary">{CONTACT_INFO.BUSINESS_HOURS.WEEKENDS}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Suspense>
    </motion.div>
  );
};

export default ContactPage;
