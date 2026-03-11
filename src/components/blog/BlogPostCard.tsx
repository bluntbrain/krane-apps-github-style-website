import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BlogPost, formatDate } from "../../utils/blogUtils";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="group flex flex-col h-full bg-bg-primary border border-border/60 rounded-none transition-colors hover:bg-white/[0.02] p-4">
      <Link to={`/blog/${post.slug}`} className="block relative w-full aspect-video overflow-hidden bg-bg-secondary/40 border border-border/60 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover shrink-0 transition-transform duration-[1.5s] group-hover:scale-[1.03]"
        />
        {post.tags.length > 0 && (
          <div className="absolute top-0 right-0 border-b border-l border-border/60 bg-bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent z-20">
            {post.tags[0]}
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-grow">
        <Link to={`/blog/${post.slug}`} className="block mb-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-accent transition-colors leading-tight line-clamp-3">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-text-secondary text-base mb-6 line-clamp-3 font-medium flex-grow">
          {post.excerpt}
        </p>

        <div className="flex flex-col mt-auto pt-6 border-t border-border/40 w-full gap-4">
          <div className="flex items-center text-xs font-bold text-text-secondary uppercase tracking-widest gap-2">
            <span>{formatDate(post.date)}</span>
            <span className="text-accent">•</span>
            <span>{post.author}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-border/40 bg-bg-secondary/30 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 2 && (
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-border/40 bg-bg-secondary/30 text-text-secondary">
                  +{post.tags.length - 2}
                </span>
              )}
            </div>
            
            <Link
              to={`/blog/${post.slug}`}
              className="text-text-secondary group-hover:text-accent transition-colors"
              aria-label="Read more"
            >
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
