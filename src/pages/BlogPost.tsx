import React, { useEffect, useState, Suspense } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Error_</h2>
        <p className="text-text-secondary font-medium mb-8 text-lg">{error}</p>
        <button
          onClick={() => navigate("/blog")}
          className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors"
        >
          <ArrowLeft size={18} /> Return
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
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
          <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 mt-32">
            <SkeletonLoader className="h-16 w-3/4 mb-12" />
            <SkeletonLoader className="h-[400px] w-full mb-12" />
            <SkeletonLoader className="h-6 w-full mb-4" />
            <SkeletonLoader className="h-6 w-5/6 mb-4" />
            <SkeletonLoader className="h-6 w-4/6 mb-4" />
          </div>
        ) : post ? (
          <>
            <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-8 mt-16 sm:mt-24 mb-10 sm:mb-16">
              <Link
                to="/blog"
                className="group inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Journal
              </Link>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-10 tracking-tighter leading-[0.9] text-white uppercase max-w-[900px]">
                {post.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-b border-border/60 py-4 sm:py-6 mb-10 sm:mb-16 uppercase tracking-widest text-xs font-bold text-text-secondary w-full justify-between">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-1">Date_</span>
                    <span className="text-white">{formatDate(post.date)}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 mb-1">Author_</span>
                    <span className="text-accent">{post.author}</span>
                  </div>
                </div>

                <div className="flex flex-col md:items-end">
                  <span className="text-white/40 mb-1">Tags_</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-white">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {post.image && (
                <div className="mb-16 rounded-none overflow-hidden border border-border/60 bg-bg-secondary/40 aspect-[21/9] w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-[1.02]"
                  />
                </div>
              )}


              <div className="prose prose-invert prose-lg max-w-none mb-24 prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-p:font-medium prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent prose-a:font-bold prose-strong:text-white">
                <MarkdownRenderer content={post.content} />
              </div>

              <div className="border-t border-border/60 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border/40 bg-transparent text-text-secondary hover:bg-white hover:text-black hover:border-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <button
                  onClick={handleShare}
                  className="group inline-flex items-center gap-2 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  Share Article <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">404_NotFound</h2>
            <p className="text-text-secondary font-medium mb-8">
              The transmission you're looking for does not exist.
            </p>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors"
            >
              <ArrowLeft size={18} /> Return
            </Link>
          </div>
        )}
      </Suspense>
    </motion.div>
  );
};

export default BlogPostPage;
