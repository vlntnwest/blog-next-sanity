import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";
import { highlightCode } from "./prismUtils";
import getYouTubeId from "get-youtube-id";
import YouTubeBlock from "./YouTubeBlock";
import TwitterBlock from "./TwitterBlock";

const CodeBlock = ({
  value,
}: {
  value: { code: string; language?: string };
}) => {
  const language = value.language || "javascript";
  const highlightedCode = highlightCode(value.code, language);

  return (
    <pre className="p-4 rounded-lg overflow-x-auto">
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

const YouTube = ({ value }: { value: { url: string | null } }) => {
  const videoId = value.url ? getYouTubeId(value.url) : "";

  return (
    <div className="my-4">
      {videoId ? <YouTubeBlock videoId={videoId} /> : null}
    </div>
  );
};

const Twitter = ({ value }: { value: { url: string | null } }) => {
  const tweetUrl = value.url;

  return (
    <div className="my-4">
      {tweetUrl ? <TwitterBlock tweetUrl={tweetUrl} /> : null}
    </div>
  );
};

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => (
        <h2 className="mb-4 text-xl font-bold">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-3 text-lg font-semibold">{children}</h3>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
          {children}
        </blockquote>
      ),
      normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
    types: {
      image: ({ value }) => (
        <div className="my-4">
          <Image
            src={urlForImage(value)?.url() || ""}
            alt={value?.alt || "Image"}
            width={800}
            height={600}
          />
        </div>
      ),
      code: CodeBlock,
      youtube: YouTube,
      twitter: Twitter,
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          rel="noreferrer noopener"
          className="text-blue-500 underline hover:text-blue-600"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
