import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Tag } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import BlogPostCard from "../components/blog/BlogPostCard";
import SkeletonLoader from "../components/ui/SkeletonLoader";
import SEO from "../components/seo/SEO";
import { getAllPosts, getAllTags, BlogPost } from "../utils/blogUtils";

const BlogList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Get tag from URL query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tagParam = searchParams.get("tag");
    if (tagParam) {
      setActiveTag(tagParam);
    } else {
      setActiveTag(null);
    }
  }, [location.search]);

  useEffect(() => {
    // Simulate async data loading from the server
    // In a real Next.js/SSG app, this would be pre-rendered
    const fetchData = async () => {
      try {
        setLoading(true);
        const allPosts = getAllPosts();
        const allTags = getAllTags();

        setPosts(allPosts);
        setFilteredPosts(allPosts);
        setTags(allTags);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter posts when search query or active tag changes
  useEffect(() => {
    let filtered = posts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by tag
    if (activeTag) {
      filtered = filtered.filter((post) => post.tags.includes(activeTag));
    }

    setFilteredPosts(filtered);
  }, [searchQuery, activeTag, posts]);

  const handleTagClick = (tag: string) => {
    const newActiveTag = activeTag === tag ? null : tag;
    setActiveTag(newActiveTag);

    // Update URL query parameter
    const searchParams = new URLSearchParams(location.search);
    if (newActiveTag) {
      searchParams.set("tag", newActiveTag);
    } else {
      searchParams.delete("tag");
    }

    navigate(
      {
        pathname: location.pathname,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);

    // Clear search params if search field is emptied
    if (e.target.value === "" && !activeTag) {
      navigate(location.pathname, { replace: true });
    }
  };

  // Prepare title and description based on active tag
  const pageTitle = activeTag
    ? `${
        activeTag.charAt(0).toUpperCase() + activeTag.slice(1)
      } Articles | Krane Apps Blog`
    : "Blog | Krane Apps";

  const pageDescription = activeTag
    ? `Read our latest articles about ${activeTag} from the Krane Apps team.`
    : "Read the latest articles on blockchain development, Web3, and more from the Krane Apps team.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="p-3 sm:p-4 md:p-6"
    >
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={[
          "blog",
          "blockchain",
          "web3",
          "smart contracts",
          "development",
          ...(activeTag ? [activeTag] : []),
        ]}
      />

      {/* Add structured data for blog listing */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: pageTitle,
            description: pageDescription,
            url: window.location.href,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: filteredPosts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${window.location.origin}/blog/${post.slug}`,
                item: {
                  "@type": "BlogPosting",
                  headline: post.title,
                  image: post.image,
                  datePublished: post.date,
                  author: {
                    "@type": "Person",
                    name: post.author,
                  },
                },
              })),
            },
          })}
        </script>
      </Helmet>

      <Suspense fallback={<SkeletonLoader className="h-96" />}>
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 pb-2 border-b border-border">
          Blog
          {activeTag && (
            <span className="text-lg ml-2 text-accent">: {activeTag}</span>
          )}
        </h1>

        {/* Search and filter section */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search
              size={18}
              className="absolute left-3 top-5 transform -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 bg-bg-secondary border border-border rounded-md focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                  activeTag === tag
                    ? "bg-accent text-white"
                    : "bg-bg-secondary text-text-secondary hover:bg-accent/20"
                }`}
              >
                <Tag size={12} className="inline mr-1.5" />
                {tag}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonLoader key={i} className="h-80" />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-text-secondary">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        )}
      </Suspense>
    </motion.div>
  );
};

export default BlogList;
