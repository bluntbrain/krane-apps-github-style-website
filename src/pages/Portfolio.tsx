import React, { Suspense, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Filter,
  Star,
  GitFork,
  Award,
  Github,
  Globe,
  ExternalLink,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import MarkdownRenderer from "../components/ui/MarkdownRenderer";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import { portfolioContent, portfolioProjects } from "../data/portfolioData";
import { EXTERNAL_LINKS, CTA_TEXT } from "../constants";

const PortfolioPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!categoryFilter) return portfolioProjects;
    return portfolioProjects.filter(
      (project) => project.category === categoryFilter
    );
  }, [categoryFilter]);

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-8"
    >
      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <MarkdownRenderer content={portfolioContent} />

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <div className="flex items-center mr-2">
            <Filter size={16} className="mr-1" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setCategoryFilter(category.id === "all" ? null : category.id)
              }
              className={`px-3 py-1 rounded-md text-sm ${
                (category.id === "all" && !categoryFilter) ||
                category.id === categoryFilter
                  ? "bg-accent text-white"
                  : "bg-bg-primary text-text-secondary hover:bg-accent/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-border rounded-lg overflow-hidden bg-bg-primary shadow-sm hover:shadow-md transition-shadow"
            >
              {project.imageUrl && (
                <div
                  className="h-48 overflow-hidden cursor-pointer relative"
                  onClick={() => openLightbox(project.imageUrl || "")}
                >
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors z-10 flex items-center justify-center opacity-0 hover:opacity-100">
                    <span className="text-white bg-black/50 px-3 py-1 rounded-md text-sm">
                      View Image
                    </span>
                  </div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-accent mb-2">
                  {project.title}
                </h3>

                {project.achievement && (
                  <div className="mb-3 flex items-center text-success">
                    <Award size={16} className="mr-1 text-success" />
                    <span className="font-medium">{project.achievement}</span>
                    {project.prize && (
                      <span className="ml-1 font-bold">{project.prize}</span>
                    )}
                  </div>
                )}

                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-bg-secondary text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center text-sm text-text-secondary mb-4">
                  {project.language && (
                    <div className="flex items-center mr-4">
                      <span className="h-3 w-3 rounded-full bg-accent mr-1"></span>
                      <span>{project.language}</span>
                    </div>
                  )}

                  {project.stars > 0 && (
                    <div className="flex items-center mr-4">
                      <Star size={16} className="mr-1" />
                      <span>{project.stars}</span>
                    </div>
                  )}

                  {project.forks > 0 && (
                    <div className="flex items-center">
                      <GitFork size={16} className="mr-1" />
                      <span>{project.forks}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-secondary hover:bg-accent hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} className="mr-1" />
                      GitHub
                    </a>
                  )}

                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-secondary hover:bg-accent hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={14} className="mr-1" />
                      Live Site
                    </a>
                  )}

                  {project.links?.ethglobal && (
                    <a
                      href={project.links.ethglobal}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-secondary hover:bg-accent hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      ETHGlobal
                    </a>
                  )}

                  {project.links?.chrome && (
                    <a
                      href={project.links.chrome}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-secondary hover:bg-accent hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Chrome Store
                    </a>
                  )}

                  {project.links?.docs && (
                    <a
                      href={project.links.docs}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-md bg-bg-secondary hover:bg-accent hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-12 p-6 border border-border rounded-md bg-bg-primary"
        >
          <h2 className="text-xl font-semibold mb-4">
            Need a Custom Blockchain, Mobile or Web Solution?
          </h2>
          <div className="md:flex">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img
                src={portfolioProjects[0].imageUrl}
                alt="Featured Project"
                className="rounded-md w-full object-cover h-64"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-4">
                Our team of expert developers can help bring your ideas to life.
                Whether you need a blockchain application, mobile app, or
                full-stack web solution, we have the expertise to deliver
                high-quality results.
              </p>
              <ul className="list-disc list-inside mb-4 text-text-secondary">
                <li>Award-winning blockchain development</li>
                <li>Cross-platform mobile apps with React Native</li>
                <li>Modern web applications with React and Next.js</li>
                <li>Full-stack development with secure backends</li>
                <li>Comprehensive support and maintenance</li>
              </ul>
              <a
                href={EXTERNAL_LINKS.CALENDAR}
                target="_blank"
                rel="noreferrer"
                className="gh-btn gh-btn-primary flex items-center"
                style={{ width: "fit-content" }}
              >
                <Calendar size={16} className="mr-2" />
                {CTA_TEXT.BOOK_CALL_LEARN_MORE}
              </a>
            </div>
          </div>
        </motion.div>
      </Suspense>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: currentImage }]}
      />
    </motion.div>
  );
};

export default PortfolioPage;
