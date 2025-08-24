import { Clipboard } from "@raycast/api";

import { Formatter, Language } from "./types";

const readFromClipboard = async (): Promise<string> => (await Clipboard.readText()) || "";

const copyToClipboard = async (code: string): Promise<string> => {
  await Clipboard.copy(code);
  return code;
};

const wrapWithCodeblock = (language: Language) => {
  return (code: string) => ["```", " ", language, "\n", code, "\n", "``` "].join("");
};

export const pipeline = async (language: Language, formatter: Formatter): Promise<string> => {
  return readFromClipboard().then(formatter).then(copyToClipboard).then(wrapWithCodeblock(language));
};
