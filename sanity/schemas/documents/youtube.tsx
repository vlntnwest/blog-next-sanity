import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import YouTube from "react-youtube";
import getYouTubeId from "get-youtube-id";

export function YouTubePreview(props: PreviewProps) {
  const { title: url } = props;

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === "string" ? (
        <YouTube videoId={getYouTubeId(url)} />
      ) : (
        <Text>Add a YouTube URL</Text>
      )}
    </Flex>
  );
}

export default {
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: { title: "url" },
  },
  components: {
    preview: YouTubePreview,
  },
};
