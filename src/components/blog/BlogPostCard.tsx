import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Tag } from "lucide-react";
import { BlogPost, formatDate } from "../../utils/blogUtils";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="blog-card h-full bg-bg-primary border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {post.tags.length > 0 && (
            <div className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded">
              {post.tags[0]}
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/blog/${post.slug}`} className="block">
          <h2 className="text-lg font-semibold mb-2 hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>

        <p className="text-text-secondary text-sm mb-3 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center text-xs text-text-secondary mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Link
              key={index}
              to={`/blog?tag=${tag}`}
              className="text-xs px-2 py-1 bg-bg-secondary rounded-md hover:bg-accent hover:text-white transition-colors flex items-center"
            >
              <Tag size={10} className="inline mr-1" />
              {tag}
            </Link>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-bg-secondary rounded-md text-text-secondary">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
