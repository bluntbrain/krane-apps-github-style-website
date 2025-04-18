import React, { useEffect, useState, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import MarkdownRenderer from "../components/ui/MarkdownRenderer";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import SEO from "../components/seo/SEO";
import { getPostBySlug, formatDate, BlogPost } from "../utils/blogUtils";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        if (!slug) {
          throw new Error("Post slug is missing");
        }

        const postData = getPostBySlug(slug);

        if (!postData) {
          throw new Error("Post not found");
        }

        setPost(postData);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && window.location.href) {
      try {
        await navigator.share({
          title: post?.title || "Blog Post",
          text: post?.excerpt || "",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing article:", err);
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p className="text-text-secondary mb-6">{error}</p>
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-4 md:p-6"
    >
      {post && (
        <>
          <SEO
            title={post.seo.title}
            description={post.seo.description}
            keywords={post.seo.keywords}
            image={post.image}
            type="article"
          />

          {/* Add structured data for blog post */}
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                image: [post.image],
                datePublished: post.date,
                dateModified: post.date,
                author: {
                  "@type": "Person",
                  name: post.author,
                },
                publisher: {
                  "@type": "Organization",
                  name: "Krane Apps",
                  logo: {
                    "@type": "ImageObject",
                    url: "/images/logo.png",
                  },
                },
                description: post.excerpt,
                keywords: post.seo.keywords.join(","),
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": window.location.href,
                },
              })}
            </script>
          </Helmet>
        </>
      )}

      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        {loading ? (
          <div className="space-y-4">
            <SkeletonLoader className="h-8 w-3/4 mb-6" />
            <SkeletonLoader className="h-4 w-1/4 mb-8" />
            <SkeletonLoader className="h-64 mb-8" />
            <SkeletonLoader className="h-4 w-full mb-2" />
            <SkeletonLoader className="h-4 w-full mb-2" />
            <SkeletonLoader className="h-4 w-full mb-2" />
            <SkeletonLoader className="h-4 w-3/4" />
          </div>
        ) : post ? (
          <>
            <div className="mb-6">
              <Link
                to="/blog"
                className="flex items-center text-text-secondary hover:text-accent mb-4 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all articles
              </Link>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-secondary">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1.5" />
                  <span>{formatDate(post.date)}</span>
                </div>

                <div className="flex items-center">
                  <User size={14} className="mr-1.5" />
                  <span>{post.author}</span>
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center hover:text-accent transition-colors ml-auto"
                  aria-label="Share article"
                >
                  <Share2 size={14} className="mr-1.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[400px]"
                />
              </div>
            )}

            <div className="prose prose-invert max-w-none mb-8">
              <MarkdownRenderer content={post.content} />
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    className="text-xs px-3 py-1.5 rounded-md transition-colors bg-bg-secondary text-text-secondary hover:bg-accent hover:text-white"
                  >
                    <Tag size={10} className="inline mr-1.5" />
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  to="/blog"
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to all articles
                </Link>

                <button
                  onClick={handleShare}
                  className="flex items-center text-text-secondary hover:text-accent transition-colors"
                  aria-label="Share article"
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
            <p className="text-text-secondary mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="flex items-center px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        )}
      </Suspense>
    </motion.div>
  );
};

export default BlogPostPage;
