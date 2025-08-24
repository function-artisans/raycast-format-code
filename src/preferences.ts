import { getPreferenceValues } from "@raycast/api";
import { SqlLanguage } from "sql-formatter";

type RawPreferences = {
  printWidth?: string;
  sqlDialect?: string;
};

export type Preferences = {
  printWidth: number;
  sqlDialect: SqlLanguage;
};

export const getPreferences = (): Preferences => {
  const rawPreferences = getPreferenceValues<RawPreferences>();

  const printWidth = parseInt(rawPreferences.printWidth || "100", 10);
  const rawDialect = rawPreferences.sqlDialect || "sql";
  const sqlDialect = (rawDialect || "sql") as SqlLanguage;

  return {
    printWidth,
    sqlDialect,
  };
};
