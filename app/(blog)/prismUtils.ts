import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import "prismjs/themes/prism-onedark.css";

export function highlightCode(code: string, language: string): string {
  return Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.javascript,
    language
  );
}
