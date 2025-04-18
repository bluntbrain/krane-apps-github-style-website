import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Krane Apps | MVP & Blockchain Development",
  description = "Krane Apps specializes in building MVPs for startups and blockchain projects. We turn innovative ideas into production-ready applications.",
  keywords = [
    "MVP development",
    "blockchain development",
    "web3",
    "React",
    "Next.js",
  ],
  image = "/images/logo.png",
  url = typeof window !== "undefined"
    ? window.location.href
    : "https://kraneapps.com",
  type = "website",
  author = "Krane Apps",
}) => {
  // Convert keywords array to a comma-separated string
  const keywordsString = keywords.join(", ");

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
