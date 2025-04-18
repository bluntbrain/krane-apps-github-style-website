// Define the blog post type
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image: string;
  content: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Mock blog posts data
const blogPosts: BlogPost[] = [
  {
    title: "Building Your First DeFi Protocol: A Step-by-Step Guide",
    slug: "building-defi-protocol",
    date: "2023-09-10",
    author: "Priyanshu Agarwal",
    excerpt: "Learn how to design, develop, and deploy your own decentralized finance protocol with this comprehensive guide.",
    tags: ["defi", "blockchain", "smart contracts", "solidity", "ethereum"],
    image: "/images/blog/defi-protocol.jpg",
    content: `# Building Your First DeFi Protocol: A Step-by-Step Guide

Decentralized Finance (DeFi) has revolutionized the way we think about financial applications by eliminating intermediaries and creating open, permissionless systems. In this guide, we'll walk through the process of building your own DeFi protocol from scratch.

## Understanding DeFi Fundamentals

Before diving into development, it's crucial to understand the core principles that make DeFi applications successful:

### Key Components of DeFi Protocols

1. **Smart Contracts**: Self-executing code that enforces rules and manages assets
2. **Liquidity Pools**: Pools of tokens that enable trading, lending, or other financial activities
3. **Governance Mechanisms**: Systems that allow stakeholders to participate in protocol decisions
4. **Oracles**: External data sources that provide real-world information to smart contracts
5. **Tokenomics**: Economic design of protocol tokens and incentives`,
    seo: {
      title: "Building Your First DeFi Protocol: A Step-by-Step Guide | Krane Apps",
      description: "A comprehensive tutorial on how to build a decentralized finance protocol from scratch, covering design principles, security considerations, and deployment strategies.",
      keywords: ["defi development", "build defi protocol", "defi smart contracts", "defi tutorial", "decentralized finance"]
    }
  },
  {
    title: "How to Build an NFT Marketplace: From Concept to Launch",
    slug: "nft-marketplace-development",
    date: "2023-10-15",
    author: "Ishan Lakhwani",
    excerpt: "A comprehensive guide to building your own NFT marketplace, covering technical implementation, design considerations, and best practices.",
    tags: ["nft", "marketplace", "blockchain", "web3", "development"],
    image: "/images/blog/nft-marketplace.jpg",
    content: `# How to Build an NFT Marketplace: From Concept to Launch

Non-Fungible Tokens (NFTs) have revolutionized digital ownership, creating new opportunities for creators, collectors, and entrepreneurs. In this comprehensive guide, we'll walk through the process of building your own NFT marketplace from conception to deployment.

## Understanding NFT Marketplaces

Before diving into development, let's understand what makes an NFT marketplace work:

### Core Components

1. **Smart Contracts**: The backbone of your marketplace, handling token creation, ownership, and transactions
2. **Frontend Interface**: The user-facing application where users browse, mint, buy, and sell NFTs
3. **Backend Services**: Supporting infrastructure for metadata, search, notifications, and more
4. **Storage Solution**: Where the actual NFT content and metadata are stored
5. **Authentication System**: Methods for users to connect wallets and authenticate`,
    seo: {
      title: "How to Build an NFT Marketplace: From Concept to Launch | Krane Apps",
      description: "Learn how to develop a fully functional NFT marketplace with this detailed technical guide covering smart contracts, frontend development, and more.",
      keywords: ["nft marketplace development", "build nft platform", "nft marketplace tutorial", "web3 development", "blockchain marketplace"]
    }
  },
  {
    title: "Smart Contract Security Best Practices",
    slug: "smart-contract-security-best-practices",
    date: "2023-11-20",
    author: "Lavish Badlani",
    excerpt: "Essential security practices for developing secure and robust smart contracts on Ethereum and other blockchain platforms.",
    tags: ["security", "smart contracts", "blockchain", "audit", "solidity"],
    image: "/images/blog/smart-contract-security.jpg",
    content: `# Smart Contract Security Best Practices

Smart contract security is paramount in blockchain development. Once deployed, contracts are immutable and often control significant financial assets. This guide covers essential practices to secure your smart contracts.

## Common Vulnerabilities

### 1. Reentrancy Attacks

Reentrancy occurs when external contract calls allow attackers to reenter the original function before it completes execution.

**Prevention:**
- Use the Checks-Effects-Interactions pattern
- Implement reentrancy guards
- Complete all internal work before making external calls

### 2. Integer Overflow/Underflow

In Solidity versions prior to 0.8.0, arithmetic operations could overflow or underflow without reverting.

**Prevention:**
- Use SafeMath library for Solidity < 0.8.0
- Update to Solidity 0.8.0+ which has built-in overflow checking
- Add boundary checks on arithmetic operations`,
    seo: {
      title: "Smart Contract Security Best Practices | Krane Apps",
      description: "Learn essential security practices for developing secure and robust smart contracts on Ethereum and other blockchain platforms.",
      keywords: ["smart contract security", "blockchain security", "solidity security", "audit smart contracts", "secure blockchain development"]
    }
  }
];

/**
 * Get all blog posts
 * @returns {BlogPost[]} Array of blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  try {
    // Sort posts by date (newest first)
    return [...blogPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

/**
 * Get a specific blog post by slug
 * @param {string} slug - The slug of the blog post to retrieve
 * @returns {BlogPost | null} The blog post or null if not found
 */
export function getPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

/**
 * Get a list of all tags used in blog posts
 * @returns {string[]} Array of unique tags
 */
export function getAllTags(): string[] {
  const tagsSet = new Set<string>();
  
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tagsSet.add(tag);
    });
  });
  
  return Array.from(tagsSet);
}

/**
 * Filter posts by tag
 * @param {string} tag - The tag to filter by
 * @returns {BlogPost[]} Filtered posts
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag));
}

/**
 * Format a date string for display
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
} 