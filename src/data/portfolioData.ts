export const portfolioProjects = [
  {
    id: 1,
    title: 'SOL.DX',
    description: 'A powerful token launchpad built specifically for the Solana ecosystem. Enables projects to launch tokens with customizable tokenomics, vesting schedules, and distribution mechanisms.',
    language: 'Rust',

    tags: ['Solana', 'Launchpad', 'Token'],
    links: {
      live: 'https://sol.dx.app/'
    },
    category: 'blockchain',
    imageUrl: '/images/projects/sol-dx.png',
  },
  {
    id: 2,
    title: 'DX.fun',
    description: 'Multi-chain token launchpad supporting Ethereum, Base, Polygon, and BNB Chain. Features comprehensive tokenomics tools, fair launch mechanisms, and liquidity management.',
    language: 'Solidity',
    stars: 76,
    forks: 24,
    tags: ['Multi-chain', 'Launchpad', 'DeFi'],
    links: {
      live: 'https://www.dx.fun/'
    },
    category: 'blockchain',
    imageUrl: '/images/projects/dx-fun.png',
  },
  {
    id: 3,
    title: 'Chain Monsters',
    description: 'A turn-based RPG action game on the blockchain where players control monsters, engage in PvP battles, strategically move on a 5x8 grid, attacking enemies to increase mana and decrease opponents health.',
    language: 'Solidity',
    stars: 48,
    forks: 15,
    tags: ['Blockchain', 'Gaming', 'StarkNet'],
    links: {
      github: 'https://github.com/Krane-Apps/chain-monsters',
      ethglobal: 'https://ethglobal.com/showcase/chain-monsters'
    },
    achievement: 'StarkHack Winner',
    prize: '$4,000',
    category: 'blockchain',
    imageUrl: '/images/projects/chain-monsters.png',
  },
  {
    id: 4,
    title: 'RepoRewards',
    description: 'A blockchain-based platform designed to make rewarding open-source contributions on GitHub super easy and transparent. Built on Base, Ethereum and several EVM chains.',
    language: 'Solidity',
    stars: 92,
    forks: 31,
    tags: ['Blockchain', 'Open Source', 'Base'],
    links: {
      github: 'https://github.com/Krane-Apps/repo-rewards-superhack-2024',
      ethglobal: 'https://ethglobal.com/showcase/reporewards'
    },
    achievement: 'SuperHack Winner',
    prize: '$10,000',
    category: 'blockchain',
    imageUrl: '/images/projects/repo-rewards.png',
  },
  {
    id: 5,
    title: 'ZK Credit Score',
    description: 'A blockchain-based credit scoring system that revolutionizes DeFi by enabling on-chain creditworthiness with zero-knowledge proofs. It analyzes cross-chain wallet activity to verify token balances privately.',
    language: 'TypeScript',
    stars: 67,
    forks: 19,
    tags: ['ZK Proofs', 'DeFi', 'Privacy'],
    links: {
      github: 'https://github.com/ritiklakhwani/zk-credit-score-eth-global-bangkok',
      ethglobal: 'https://ethglobal.com/showcase/zk-credit-score'
    },
    achievement: 'ETH Bangkok Winner',
    prize: '$2,000',
    category: 'blockchain',
    imageUrl: '/images/projects/zk-credit-score.png',
  },
  {
    id: 6,
    title: 'Inspector AI',
    description: 'A Chrome extension that analyzes smart contracts to make web3 more secure using AI. It provides risk assessments, integrates market data, and includes community reviews for safer blockchain interactions.',
    language: 'JavaScript',
    stars: 53,
    forks: 12,
    tags: ['AI', 'Web3', 'Security'],
    links: {
      github: 'https://github.com/Krane-Apps/inspector-ai-eth-singapore-2024',
      chrome: 'https://chrome.google.com/webstore'
    },
    category: 'web',
    imageUrl: '/images/projects/inspector-ai.png',
  },
  {
    id: 7,
    title: 'Aegis Agent',
    description: 'An AI-driven agent that monitors transactions 24/7, detects anomalies, and triggers alerts/emergency actions to protect users from potential blockchain security threats.',
    language: 'TypeScript',
    stars: 71,
    forks: 23,
    tags: ['AI', 'Security', 'Monitoring'],
    links: {
      github: 'https://github.com/Krane-Apps/aegis-agent-agentic-ethereum'
    },
    category: 'web',
    imageUrl: '/images/projects/aegis-agent.png',
  },
  {
    id: 8,
    title: 'MulTEEverse',
    description: 'A Trust-Weighted Consensus Mechanism for Multi-TEE Distributed network. A "Proof of Attestation" system for secure and trusted computation in decentralized environments.',
    language: 'Rust',
    stars: 44,
    forks: 16,
    tags: ['TEE', 'Consensus', 'Security'],
    links: {
      github: 'https://github.com/bluntbrain/mul-tee-verse',
      live: 'https://mul-tee-verse.vercel.app/',
      docs: 'https://docs.multeverse.dev'
    },
    category: 'blockchain',
    imageUrl: '/images/projects/multeverse.png',
  },
  {
    id: 9,
    title: 'Xpert Finance',
    description: 'A digital investment platform that enables users to invest in mutual funds with AI-powered financial recommendations, portfolio allocation tools, insurance, loans, and goal planning.',
    language: 'JavaScript',
    stars: 34,
    forks: 8,
    tags: ['Fintech', 'AI', 'Investment'],
    links: {
      live: 'https://xpertfinance.in/'
    },
    category: 'web',
    imageUrl: '/images/projects/xpert-finance.png',
  },
  {
    id: 10,
    title: 'E-Drive by MyEquation',
    description: 'An industrial training platform teaching electric vehicle design and development through mentorship from industry experts. Covers EV architecture, power electronics, and mechanical design.',
    language: 'JavaScript',
    stars: 28,
    forks: 6,
    tags: ['EdTech', 'EV', 'Training'],
    links: {
      live: 'https://myequation.in/edrive'
    },
    category: 'web',
    imageUrl: '/images/projects/edrive.png',
  },
  {
    id: 11,
    title: 'RoboAI by MyEquation',
    description: 'A hands-on training program in robotics, AI, and engineering featuring a 45-day curriculum covering mechanical design, electronics, IoT, machine learning, and ROS-2.',
    language: 'JavaScript',
    stars: 31,
    forks: 7,
    tags: ['EdTech', 'Robotics', 'AI'],
    links: {
      live: 'https://myequation.in/roboai'
    },
    category: 'web',
    imageUrl: '/images/projects/roboai.png',
  },
  {
    id: 12,
    title: 'AIML by MyEquation',
    description: 'A comprehensive 55-hour AI and Machine Learning training program taught by mentors from NVIDIA and IBM, designed to take learners from basics to industry-ready expertise with hands-on projects.',
    language: 'Python',
    stars: 38,
    forks: 11,
    tags: ['EdTech', 'AI/ML', 'Training'],
    links: {
      live: 'https://myequation.in/aiml'
    },
    category: 'web',
    imageUrl: '/images/projects/aiml.png',
  },
  {
    id: 13,
    title: 'Bigwayz',
    description: 'A business platform with integrated AI chatbot functionality for customer engagement, helping businesses deploy conversational AI assistants on their websites.',
    language: 'JavaScript',
    stars: 26,
    forks: 5,
    tags: ['SaaS', 'AI Chatbot', 'Business'],
    links: {
      live: 'https://bigwayz.com/'
    },
    category: 'web',
    imageUrl: '/images/projects/bigwayz.png',
  },
  {
    id: 14,
    title: 'Syed Contracting',
    description: 'A modern, responsive business website for a contracting and construction services company, featuring service showcases, project galleries, and client inquiry forms.',
    language: 'JavaScript',
    stars: 19,
    forks: 4,
    tags: ['Business', 'Construction', 'Website'],
    links: {
      live: 'https://syedcontracting.com/'
    },
    category: 'web',
    imageUrl: '/images/projects/syed-contracting.png',
  },
  {
    id: 15,
    title: 'UCrackWeFix',
    description: 'A professional service website for a device repair business, featuring online booking, service listings, pricing, and customer reviews for phone and gadget repairs.',
    language: 'JavaScript',
    stars: 22,
    forks: 5,
    tags: ['Business', 'Services', 'Website'],
    links: {
      live: 'https://ucrackwefix.com/'
    },
    category: 'web',
    imageUrl: '/images/projects/ucrackwefix.png',
  },
  {
    id: 16,
    title: 'Hi Dental Houston',
    description: 'A healthcare website for a dental practice in Houston, featuring appointment scheduling, service information, patient resources, and an intuitive user experience.',
    language: 'JavaScript',
    stars: 24,
    forks: 6,
    tags: ['Healthcare', 'Dental', 'Website'],
    links: {
      live: 'https://hidentalhouston.com/'
    },
    category: 'web',
    imageUrl: '/images/projects/hidental.png',
  },
  {
    id: 17,
    title: 'MyEquation',
    description: 'A platform providing hands-on industrial training for engineering students and professionals, offering industry-ready skills through expert mentorship and tailored projects across core engineering domains.',
    language: 'JavaScript',
    stars: 35,
    forks: 9,
    tags: ['EdTech', 'Training', 'Engineering'],
    links: {
      live: 'https://myequation.in/'
    },
    category: 'web',
    imageUrl: '/images/projects/myequation.png',
  },
];

export const portfolioContent = `
# Our Portfolio

Our award-winning projects have been recognized in global hackathons and are used by thousands of users worldwide. 

## Featured Projects

Explore our award-winning work below, including hackathon winners and production-ready applications.
`;