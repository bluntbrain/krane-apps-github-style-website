import React, { Suspense, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Github,
  ArrowUpRight
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { portfolioProjects } from "../data/portfolioData";


const PortfolioPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const featuredProject = portfolioProjects.find(p => p.id === 1)!;
  const filteredPortfolioProjects = useMemo(() => {
    return portfolioProjects.filter((project) => project.id !== 1);
  }, []);

  const filteredProjects = useMemo(() => {
    const projects = filteredPortfolioProjects;
    if (!categoryFilter) return projects;
    return projects.filter((project) => project.category === categoryFilter);
  }, [categoryFilter, filteredPortfolioProjects]);

  const openLightbox = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setOpen(true);
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "blockchain", label: "Blockchain" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web" },
  ];

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
                Our
              </span>
              <br />
              <div className="inline-block bg-[#f97316] px-2 leading-[1.05] sm:-mt-[0.35em] sm:-translate-y-[15px] pt-2 relative z-10 max-w-full">
                <span className="text-white">Work.</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-text-secondary max-w-2xl font-normal leading-tight">
              Award-winning products, hackathon champions, and production-ready applications engineered for scale.
            </p>
          </motion.div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col xl:flex-row gap-8 sm:gap-12 xl:gap-16 items-center border-t border-border/60 pt-10 sm:pt-16"
          >
            <div className="w-full xl:w-1/2 flex flex-col items-start relative group cursor-pointer border border-border/60 bg-bg-secondary/40 p-1 sm:p-2 md:p-4" onClick={() => openLightbox(featuredProject.imageUrl)}>
              <img 
                src={featuredProject.imageUrl} 
                className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt={featuredProject.title} 
              />
            </div>
            
            <div className="w-full xl:w-1/2 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 border border-accent text-accent text-xs font-bold uppercase tracking-widest bg-accent/10">Featured</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black mb-6 sm:mb-8 tracking-tighter leading-none text-white uppercase">{featuredProject.title}</h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-10 max-w-2xl">
                {featuredProject.description}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
                <a href={featuredProject.links?.live} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors text-sm sm:text-base">
                  View Live <ArrowUpRight size={18} />
                </a>
{featuredProject.links?.github && (
                <a href={featuredProject.links.github} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-border/60 text-white font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors text-sm sm:text-base">
                  <Github size={18} /> Source
                </a>
                )}
              </div>

              <div className="flex gap-4 border-t border-border/40 pt-6">
                <div className="flex flex-col">
                  <span className="text-xs text-text-secondary font-bold uppercase tracking-widest mb-1">Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags?.map((tag, idx) => (
                      <span key={idx} className="text-white font-medium border border-border/40 px-3 py-1 text-sm bg-bg-secondary/30">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border/60 pb-6 mb-12 gap-6">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">Archive.</h2>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold uppercase tracking-widest text-text-secondary mr-2">Filter_</span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id === "all" ? null : category.id)}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors border ${
                    (category.id === "all" && !categoryFilter) || category.id === categoryFilter
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-text-secondary border-border/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-t border-border/60 -mt-[49px]">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex flex-col md:flex-row items-start lg:items-center py-6 sm:py-10 border-b border-border/60 hover:bg-white/[0.02] transition-colors gap-4 sm:gap-6 md:gap-12 pl-2 sm:pl-4"
              >
                <div className="w-full lg:w-[35%] pr-4 flex flex-col gap-2">
                  <a
                    href={project.links?.live || project.links?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tighter text-white group-hover:text-accent transition-colors uppercase leading-none cursor-pointer">
                      {project.title}
                    </h3>
                  </a>
                  {project.achievement && (
                    <div className="flex items-center text-accent group-hover:text-white text-sm font-bold uppercase tracking-wider mt-3 transition-colors duration-200">
                      <Award size={16} className="mr-2" />
                      {project.achievement}
                    </div>
                  )}
                </div>
                
                <div className="w-full lg:w-[45%]">
                  <p className="text-text-secondary text-base lg:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs border border-border/40 bg-bg-secondary/40 text-text-secondary font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full lg:w-[20%] flex flex-row lg:flex-col items-center justify-between lg:justify-center lg:items-end gap-4 mt-4 lg:mt-0">
                   <div className="flex gap-4 border border-border/60 px-4 py-2 bg-bg-secondary/20">
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.links?.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        <ArrowUpRight size={22} />
                      </a>
                    )}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Suspense>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: currentImage }]}
        controller={{ closeOnBackdropClick: true }}
      />
    </motion.div>
  );
};

export default PortfolioPage;
