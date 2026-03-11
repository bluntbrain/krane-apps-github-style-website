import React from "react";

const HIGHLIGHT_WORDS = [
  "Solana",
  "Ethereum",
  "Base",
  "Polygon",
  "BNB Chain",
  "StarkNet",
  "DeFi",
  "AI",
  "Web3",
];

const escapeRegex = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const highlightText = (text: string): React.ReactNode[] => {
  const sortedWords = [...HIGHLIGHT_WORDS].sort(
    (a, b) => b.length - a.length
  );
  const pattern = new RegExp(
    `(${sortedWords.map(escapeRegex).join("|")})`,
    "gi"
  );
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlighted = sortedWords.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    );
    if (isHighlighted) {
      return (
        <span key={index} className="text-white">
          {part}
        </span>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};
