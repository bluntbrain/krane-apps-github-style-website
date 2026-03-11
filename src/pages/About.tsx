import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  Server,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { aboutHighlights, techStack } from "../data/aboutContent";
import { EXTERNAL_LINKS, CTA_TEXT } from "../constants";


const iconMap: { [key: string]: React.ReactNode } = {
  Zap: <Zap size={24} className="text-white" />,
  Shield: <Shield size={24} className="text-white" />,
  Globe: <Globe size={24} className="text-white" />,
  Server: <Server size={24} className="text-white" />,
  Database: <Database size={24} className="text-white" />,
  Cloud: <Cloud size={24} className="text-white" />,
  Smartphone: <Smartphone size={24} className="text-white" />,
};




const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>

        <div className="relative flex flex-col items-start justify-center w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[75vh] px-4 sm:px-8 mt-8 sm:mt-20 mb-8 max-w-[1400px] mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full relative z-10"
          >
            <h1 className="text-[2.5rem] sm:text-[7rem] md:text-[9.5rem] font-black tracking-tighter leading-[0.85] sm:leading-[0.85] text-white mb-6 sm:mb-10 md:mb-12 uppercase max-w-full relative select-none">
              <span className="relative z-20 bg-gradient-to-b from-white from-65% to-[#0ea5e9] to-65% text-transparent bg-clip-text pr-6">
                We Build
              </span>
              <br />
              <div className="inline-block bg-[#f97316] px-2 leading-[1.05] sm:-mt-[0.35em] sm:-translate-y-[15px] pt-2 relative z-10 max-w-full">
                <span className="text-white">Software.</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-text-secondary max-w-2xl font-normal leading-tight">
              No generic templates. No bloatware. Just solid engineering for startups and teams that need to ship fast.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block w-full sm:w-auto"
              >
                <div className="bg-white text-black px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wide transition-colors duration-200 hover:bg-accent hover:text-white border border-transparent text-center">
                  {CTA_TEXT.BOOK_CALL || "Book a Call"}
                </div>
              </a>
              <Link
                to="/portfolio"
                className="group inline-block w-full sm:w-auto"
              >
                <div className="bg-transparent text-white border border-border/60 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wide transition-colors duration-200 hover:border-white text-center">
                  View Portfolio
                </div>
              </Link>
            </div>
          </motion.div>
        </div>


        <div className="w-full overflow-hidden relative z-10 mt-8 sm:mt-16 mb-16 sm:mb-24 py-4 flex flex-col items-center">
          

          <div 
            className="w-full relative py-4"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 100px, black calc(100% - 100px), transparent)', 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 100px, black calc(100% - 100px), transparent)' 
            }}
          >
            <div className="flex w-max gap-6 animate-marquee lg:hover:[animation-play-state:paused]">
              {[...Array(5).fill(aboutHighlights).flat(), ...Array(5).fill(aboutHighlights).flat()].map((highlight, index) => (
                <div
                  key={index}
                  className="w-[260px] sm:w-[320px] md:w-[380px] shrink-0 group/card bg-bg-primary p-6 sm:p-8 md:p-10 rounded-2xl border border-border/80 hover:border-accent-blue/60 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                  <div className="w-14 h-14 rounded-xl bg-bg-secondary flex items-center justify-center mb-6 border border-border/50 group-hover/card:bg-white/5 transition-colors duration-500">
                    {iconMap[highlight.iconName]}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover/card:text-accent transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 mb-20 sm:mb-32 z-10 relative">
          <div className="text-left mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white/90">Our Stack</h2>
            <p className="text-text-secondary text-lg">We use modern, reliable tools to build robust applications. No fluff, just tech that works.</p>
          </div>
          
          <div className="flex flex-col border-t border-border/60">
            {techStack.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row py-8 border-b border-border/60 hover:bg-white/[0.02] transition-colors gap-6 md:gap-12"
              >
                <div className="w-full md:w-1/4">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="w-full md:w-3/4 flex flex-wrap gap-x-6 gap-y-3 font-medium text-lg text-text-secondary">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="transition-colors hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>



        <div className="w-full max-w-[1000px] mx-auto mb-24 sm:mb-40 px-4 sm:px-8">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[5rem] font-black mb-10 sm:mb-16 leading-[0.9] tracking-tighter text-left text-white max-w-lg">Things We Do Differently.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-20">
            {[
              { num: "01 /", title: "MVP Development", desc: "Lean builds that get you to market fast. No bloated code. Just the core features you need to validate your product with actual users." },
              { num: "02 /", title: "Blockchain Solutions", desc: "Smart contracts, dApps, and on-chain logic. We write secure native code for Solana, Ethereum, and Polygon without the buzzword soup." },
              { num: "03 /", title: "Custom Software", desc: "Specialized tools tailored to your exact business needs. Scalable architecture that won't fall apart when you inevitably hit product-market fit." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col border-t border-border/60 pt-8 relative group">
                <div className="text-accent font-bold text-xl mb-4 group-hover:-translate-y-1 transition-transform">{feature.num}</div>
                <h3 className="text-3xl font-extrabold tracking-tight text-white mb-6 uppercase leading-none">{feature.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="w-full max-w-[1200px] mx-auto mb-20 sm:mb-32 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 md:gap-24 relative z-10">
          

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter text-white uppercase leading-none">Process.</h2>
            <div className="flex flex-col border-t border-border/60">
              {[
                { title: "Discover", desc: "In-depth understanding of your goals, users, and market positioning." },
                { title: "Design", desc: "Intuitive UX and architectural designs aligned with your vision." },
                { title: "Develop", desc: "Engineering excellence using modern technologies and best practices." },
                { title: "Deploy", desc: "Smooth deployment with comprehensive documentation." },
                { title: "Support", desc: "Ongoing maintenance to keep your product running optimally." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 border-b border-border/60 hover:bg-white/[0.02] transition-colors group">
                  <div className="text-xl font-black text-white/20 group-hover:text-accent transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider shrink-0 w-32">{step.title}</h3>
                  <p className="text-text-secondary text-base font-medium">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter text-white uppercase leading-none">Why Us.</h2>
            <div className="flex flex-col gap-8">
              {[
                { title: "Technical Excellence", desc: "Senior developers with cross-domain expertise. No junior bloopers." },
                { title: "Business Acumen", desc: "We understand both technology and business perfectly." },
                { title: "Agile Methodology", desc: "Incremental value delivery with optimal flexibility." },
                { title: "Transparent Comm.", desc: "Clear, consistent updates throughout the project." },
                { title: "Long-term Partner", desc: "We passionately support your ongoing growth journey." }
              ].map((reason, i) => (
                <div key={i} className="flex flex-col border border-border/60 p-8 hover:border-white/20 hover:bg-bg-secondary/20 transition-colors relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-3 italic font-black text-2xl text-white/5 group-hover:text-accent/10 transition-colors duration-500">
                     O_o
                   </div>
                   <h3 className="font-extrabold text-white text-xl uppercase tracking-tighter mb-3 leading-none">{reason.title}</h3>
                   <p className="text-base text-text-secondary font-medium leading-relaxed relative z-10">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1200px] mx-auto px-4 sm:px-8 mb-20"
        >
          <div className="border border-border/60 bg-bg-secondary/20 p-6 sm:p-8 md:p-16 lg:p-24 relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col items-start">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-3xl rounded-full group-hover:bg-accent/10 transition-colors duration-1000 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 relative z-10 text-white uppercase tracking-tighter leading-none max-w-2xl">
              Let's Ship your <span className="text-accent">MVP.</span>
            </h2>
            <p className="mb-8 sm:mb-12 max-w-xl text-base sm:text-lg text-text-secondary relative z-10 font-normal leading-relaxed">
              We skip the fluff. Let's discuss your product requirements and calculate a raw architectural timeline right now.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
              <a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noreferrer"
                className="group/cta bg-white text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors text-center"
              >
                 {CTA_TEXT.BOOK_CALL_START || "Start Your Project"}
              </a>
            </div>
          </div>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default AboutPage;
