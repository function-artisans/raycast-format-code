import { Detail } from "@raycast/api";
import { usePromise } from "@raycast/utils";
import { useRef } from "react";

import { pipeline } from "./pipeline";
import { Formatter, Language } from "./types";

type FormatProps = {
  language: Language;
  formatter: Formatter;
};

export function Format({ language, formatter }: FormatProps) {
  const abortable = useRef<AbortController>();

  const { isLoading, data: markdown } = usePromise(pipeline, [language, formatter], { abortable });

  return <Detail isLoading={isLoading} markdown={markdown} />;
}
