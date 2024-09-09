"use client";

import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

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
  console.log(id);

  if (!id) {
    return <div>Invalid tweet URL</div>;
  }
  return (
    <TwitterTweetEmbed
      tweetId={id}
      options={{ width: "100%", height: "100%" }}
    />
  );
};

export default TwitterBlock;
