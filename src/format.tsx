import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { useRef } from "react";

import { pipeline } from "./pipeline";
import { Language } from "./types";

const languages: readonly Language[] = [
  "angular",
  "babel-flow",
  "babel-ts",
  "babel",
  "css",
  "espree",
  "flow",
  "glimmer",
  "graphql",
  "html",
  "json-stringify",
  "json",
  "json5",
  "less",
  "lwc",
  "markdown",
  "mdx",
  "meriyah",
  "scss",
  "typescript",
  "vue",
  "yaml",
] as const;

type SupportedLanguage = (typeof languages)[number];

type CommandProps = {
  language: Language;
};

function Format({ language }: CommandProps) {
  const abortable = useRef<AbortController>();

  const { isLoading, data: markdown } = usePromise(pipeline, [language], { abortable });

  return <Detail isLoading={isLoading} markdown={markdown} />;
}

const formatters = Object.fromEntries(
  languages.map((language) => {
    return [language, () => <Format language={language} />];
  })
) as Record<SupportedLanguage, JSX.Element>;

export default formatters;
