import { EXTERNAL_LINKS, CTA_TEXT } from "../constants";
import { LucideIcon } from "lucide-react";

// Define types without using JSX
interface HighlightItem {
  iconName: string;
  title: string;
  description: string;
}

interface TechCategory {
  name: string;
  technologies: string[];
}

export const aboutHighlights: HighlightItem[] = [
  {
    iconName: "Zap",
    title: "Fast Execution",
    description: "We build MVPs rapidly, helping you validate ideas and get to market quickly with functional solutions."
  },
  {
    iconName: "Shield",
    title: "Blockchain Expertise",
    description: "Specialized in smart contracts, dApps, and Web3 technologies across multiple blockchain platforms."
  },
  {
    iconName: "Globe",
    title: "Full-Stack Excellence",
    description: "Our senior developers deliver high-quality solutions from front-end interfaces to back-end systems."
  }
];

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript"]
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Express", "Python", "Go", "Rust"]
  },
  {
    name: "Blockchain",
    technologies: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Foundry"]
  },
  {
    name: "Mobile",
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    name: "Database",
    technologies: ["PostgreSQL", "MongoDB", "Firebase", "Redis"]
  },
  {
    name: "Cloud",
    technologies: ["AWS", "Google Cloud", "Azure", "Digital Ocean"]
  }
];

export const aboutContent = `
## Our Mission

**Empowering visionaries** with the technical solutions they need to disrupt industries and create value. We bridge the gap between innovative ideas and functional software, making cutting-edge technology accessible to startups and established businesses.

## What Sets Us Apart

### 🚀 MVP Development
We help startups validate ideas quickly with minimum viable products focused on core functionality. Our agile approach ensures your product evolves in the right direction based on real user feedback.

### ⛓️ Blockchain Solutions
From smart contracts to decentralized applications (dApps), we build robust blockchain infrastructure that leverages distributed ledger technology across Ethereum, Solana, Polygon, and more.

### 💻 Custom Software Development
We create tailored solutions that address specific business challenges with scalable, maintainable systems that grow with your business.

## Our Proven Approach

1. **Discover** - In-depth understanding of your goals, users, and market positioning
2. **Design** - Intuitive UX and architectural designs aligned with your vision
3. **Develop** - Engineering excellence using modern technologies and best practices
4. **Deploy** - Smooth deployment with comprehensive documentation
5. **Support** - Ongoing maintenance to keep your product running optimally

## Why Teams Choose Us

- **Technical Excellence**: Senior developers with cross-domain expertise
- **Business Acumen**: We understand both technology and business
- **Agile Methodology**: Incremental value delivery with flexibility
- **Transparent Communication**: Clear, consistent updates throughout
- **Long-term Partnership**: Supporting your ongoing growth journey

Ready to transform your idea into reality? [${CTA_TEXT.BOOK_CALL_START}](${EXTERNAL_LINKS.CALENDAR}) to start the conversation.
`;