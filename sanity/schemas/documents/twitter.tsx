import React from "react";
import { Tweet } from "react-tweet";
import { PreviewProps, defineType } from "sanity";

const getTweetId = (url?: string) => {
  if (!url) {
    return "";
  }
  const parsedUrl = new URL(url);
  return parsedUrl.pathname.split("/").pop();
};

type CastPreviewProps = PreviewProps & { url?: string };

export function TwitterPreview(props: PreviewProps) {
  const { url } = props as CastPreviewProps;
  const id = getTweetId(url);
  if (!id) {
    return null;
  }
  return <Tweet id={id} />;
}

const twitter = defineType({
  name: "twitter",
  type: "object",
  title: "Twitter Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Tweet URL",
      validation: (Rule) => Rule.required(),
    },
  ],
  components: { preview: TwitterPreview },
  preview: {
    select: {
      url: "url",
    },
  },
});

export default twitter;
