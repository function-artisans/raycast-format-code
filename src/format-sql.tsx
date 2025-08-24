import { format } from "sql-formatter";

import { Format } from "./format";
import { getPreferences } from "./preferences";
import { Formatter } from "./types";

const { sqlDialect } = getPreferences();

const formatter: Formatter = async (input) => {
  return format(input, {
    language: sqlDialect,
    functionCase: "upper",
    dataTypeCase: "lower",
    keywordCase: "upper",
  });
};

export default () => <Format language="sql" formatter={formatter} />;
