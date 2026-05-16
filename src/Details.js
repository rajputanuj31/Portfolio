const details = [
  {
  name: "PageChat — AI Chrome Extension",
  subheading:
    "Built and published a Chrome extension (MV3) that lets users chat with any webpage using a RAG pipeline. Backend: FastAPI + LangChain with FAISS vector store, RecursiveCharacterTextSplitter, and WebBaseLoader. Frontend: React + TypeScript content script injected into pages; chat history persisted per URL via chrome.storage.",
  techstack: ["React.js", "TypeScript", "FastAPI", "LangChain", "FAISS", "OpenAI API", "Python"],
  github: "https://github.com/rajputanuj31/PageChat",
  Demo: "https://chromewebstore.google.com/detail/pagechat/clkgpcmjodnbcapllcihbnaflcjapini",
  timePeriod: "Feb '26 – Present",
 },
  {
    name: "ZK-Insurance",
    subheading:
      "Engineered a decentralized insurance platform leveraging ZK-proofs and MPC for privacy-preserving claims. Integrated Anon Aadhaar for secure identity verification and The Graph subgraphs for efficient data querying.",
    techstack: ["Next.js", "The Graph", "ZK-Proofs", "Solidity"],
    github: "https://github.com/ashu26jha/mpc-ethindia",
    Demo: "https://devfolio.co/projects/zkinsurance-1917",
    timePeriod: "Dec '24",
    prize: "3rd Place — EthIndia'24",
  },
  {
    name: "Proof of Follower",
    subheading:
      "Built a decentralized social finance platform on Aptos allowing users to mint profile-based assets. Implemented on-chain scoring via Oracles and integrated Farcaster/Okto for social identity verification. Developed smart contracts in Move.",
    techstack: ["Move", "Aptos", "TypeScript", "Next.js"],
    github: "https://github.com/mahim37/PoM",
    Demo: "https://devfolio.co/projects/proof-of-follower-8563",
    timePeriod: "Dec '24",
    prize: "Prize Winner — Unfold'24",
  },
  {
    name: "ezCred",
    subheading:
      "Used ERC-4337 for seamless user onboarding and gas sponsorship. Implemented the 1inch Token Plugin to eliminate aggregated oracles, reducing gas costs significantly.",
    techstack: ["Next.js", "Solidity", "TypeScript", "Ethers.js"],
    github: "https://github.com/mahim37/ezCRED",
    Demo: "https://ethglobal.com/showcase/ezcred-dfary",
    timePeriod: "Dec '23",
    prize: "3rd Place — EthIndia'23",
  },
  {
    name: "Token Hunt",
    subheading:
      "Built an NFT Raffle platform using AI-generated images for NFTs, a decentralized frontend for security, and Verifiable Random Functions (VRFs) for a fair raffle system.",
    techstack: ["Solidity", "React", "JavaScript", "Ethers.js"],
    github: "https://github.com/ashu26jha/token_hunt",
    Demo: "https://tokenhunt.vercel.app/",
    timePeriod: "Aug '23",
    prize: "1st Place — MLH Web3Apps'23",
  },
  {
    name: "OneClickAuth (NPM)",
    subheading:
      "Built and published an npm authentication package enabling plug-and-play JWT auth for React/Node apps. Reduces auth setup from ~200 lines of boilerplate to a single import. Handles client routing, token refresh, and backend middleware.",
    techstack: ["React", "MongoDB", "Node.js", "Redux", "JWT"],
    github: "https://github.com/rajputanuj31/oneclickauth",
    Demo: "https://www.npmjs.com/package/oneclickauth",
    timePeriod: "Sep '24"
  },
  {
    name: "Open Source — Joomla!",
    subheading:
      "Authored and maintained automated E2E test scripts using Cypress, significantly improving CI/CD reliability. Successfully merged 35+ pull requests and implemented drag-and-drop functionality for file management.",
    techstack: ["Cypress", "JavaScript", "PHP", "Automation"],
    github:
      "https://github.com/joomla/joomla-cms/pulls?q=is%3Apr+author%3Arajputanuj31+is%3Aclosed",
    timePeriod: "Jan '23 – Dec '23",
  },
];

export default details;
