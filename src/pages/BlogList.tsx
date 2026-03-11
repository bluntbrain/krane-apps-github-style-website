import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
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


  useEffect(() => {
    let filtered = posts;


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


    if (activeTag) {
      filtered = filtered.filter((post) => post.tags.includes(activeTag));
    }

    setFilteredPosts(filtered);
  }, [searchQuery, activeTag, posts]);

  const handleTagClick = (tag: string) => {
    const newActiveTag = activeTag === tag ? null : tag;
    setActiveTag(newActiveTag);


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


    if (e.target.value === "" && !activeTag) {
      navigate(location.pathname, { replace: true });
    }
  };


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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
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
                <span className="text-white">Blog.</span>
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-text-secondary max-w-2xl font-normal leading-tight">
              Deep-dives, engineering rants, and brutal honesty about building product and on-chain systems.
            </p>
          </motion.div>
        </div>


        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mb-16 sm:mb-32">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-border/60 pb-6 mb-12 gap-6 w-full pt-16 border-t">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">Journal.</h2>
            
            <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 w-full md:w-auto">
              <div className="relative flex-grow max-w-[300px]">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary font-bold" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 bg-transparent border border-border/60 text-white font-bold uppercase tracking-widest text-xs focus:outline-none focus:border-white transition-colors placeholder:text-text-secondary/50 placeholder:font-bold"
                />
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-sm font-bold uppercase tracking-widest text-text-secondary mr-2">Filter_</span>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeTag === tag
                        ? "text-white"
                        : "text-text-secondary/50 hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-border/60 pt-16 -mt-[85px]">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonLoader key={i} className="h-[500px] rounded-none bg-bg-secondary/40 border border-border/60" />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-left border-t border-border/60 pt-16 -mt-[49px] min-h-[30vh]">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">No Transmissions Found.</h3>
              <p className="text-text-secondary font-medium">
                Try adjusting your search criteria or tags.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-x-12 md:gap-y-24 border-t border-border/60 pt-10 sm:pt-16 -mt-[49px]">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <BlogPostCard post={post} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Suspense>
    </motion.div>
  );
};

export default BlogList;
