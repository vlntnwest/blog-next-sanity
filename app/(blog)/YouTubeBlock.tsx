"use client";

import React from "react";
import YouTube from "react-youtube";

// Déclaration du type pour les props
interface YouTubeBlockProps {
  videoId: string;
}

const YouTubeBlock: React.FC<YouTubeBlockProps> = ({ videoId }) => {
  return <YouTube videoId={videoId} />;
};

export default YouTubeBlock;
