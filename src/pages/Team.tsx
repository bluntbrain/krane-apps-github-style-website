import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import XLogo from "../components/ui/XLogo";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { teamMembers } from "../data/teamData";
import { EXTERNAL_LINKS } from "../constants";

const TeamPage: React.FC = () => {
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
                The
              </span>
              <br />
              <div className="inline-block bg-[#f97316] px-2 leading-[1.05] sm:-mt-[0.35em] sm:-translate-y-[15px] pt-2 relative z-10 max-w-full">
                <span className="text-white">Team.</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-text-secondary max-w-2xl font-normal leading-tight">
              A collective of builders, engineers, and designers. We don't believe in middle management, we strictly believe in shipping.
            </p>
          </motion.div>
        </div>


        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-32">
          <div className="flex flex-col border-t border-border/60 pt-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none mb-16">Roster.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex flex-col items-start hover:bg-white/[0.02] p-4 -ml-4 rounded-none transition-colors"
              >
                <div className="w-full aspect-square overflow-hidden bg-bg-secondary/40 border border-border/60 mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 z-10"></div>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className={`w-full h-full object-cover shrink-0 transition-transform duration-[1.5s] ${
                      member.id === 4 ? "scale-[1.42] group-hover:scale-[1.47]" : "group-hover:scale-[1.03]"
                    }`}
                  />
                  <div className="absolute top-0 right-0 border-b border-l border-border/60 bg-bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent z-20">
                    {String(member.id).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-3xl font-extrabold tracking-tighter text-white mb-2 uppercase leading-none">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-6">
                  {member.role}
                </p>
                <p className="text-text-secondary text-base leading-relaxed font-medium mb-8">
                  {member.bio}
                </p>

                <div className="flex items-center gap-6 mt-auto border-t border-border/60 pt-6 w-full">
                  {member.social?.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                      <XLogo size={20} />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social?.behance && (
                    <a href={member.social.behance} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors flex items-center gap-1.5 font-bold text-sm uppercase tracking-widest" aria-label="Behance">
                      Behance <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-32">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.3, delay: 0.2 }}
             className="w-full flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-16 border border-border/60 relative overflow-hidden group hover:border-white/20 transition-colors"
           >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-3xl rounded-full group-hover:bg-accent/10 transition-colors duration-1000 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="w-full md:w-1/2 flex flex-col items-start relative z-10 mb-8 md:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tighter leading-none text-white uppercase">
                  Join the Crew
                </h2>
                <p className="text-lg text-text-secondary font-normal leading-relaxed max-w-lg">
                  We're always looking for talented individuals who are passionate about technology. No rigid structures or unnecessary red tape, just building and shipping good products.
                </p>
              </div>

              <div className="w-full md:w-auto relative z-10 flex">
                <a
                  href={EXTERNAL_LINKS.CALENDAR}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-3 bg-white text-black px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors w-full sm:w-auto justify-center"
                >
                  View Open Roles <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
           </motion.div>
        </div>

      </Suspense>
    </motion.div>
  );
};

export default TeamPage;
