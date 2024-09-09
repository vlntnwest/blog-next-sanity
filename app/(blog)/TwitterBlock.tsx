import React from "react";
import { Tweet } from "react-tweet";

interface TwitterBlockProps {
  tweetUrl: string;
}

const TwitterBlock: React.FC<TwitterBlockProps> = ({ tweetUrl }) => {
  const getTweetId = (tweetUrl?: string): string => {
    if (!tweetUrl) {
      return "";
    }
    try {
      const parsedUrl = new URL(tweetUrl);
      return parsedUrl.pathname.split("/").pop() || "";
    } catch {
      return "";
    }
  };

  const id = getTweetId(tweetUrl);

  if (!id) {
    return <div>Invalid tweet URL</div>;
  }
  return <Tweet id={id} />;
};

export default TwitterBlock;
