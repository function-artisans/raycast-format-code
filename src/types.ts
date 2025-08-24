export type Formatter = (query: string) => Promise<string>;

export type Language =
  | "angular"
  | "css"
  | "glimmer"
  | "graphql"
  | "html"
  | "javascript"
  | "json"
  | "json5"
  | "less"
  | "lwc"
  | "markdown"
  | "mdx"
  | "scss"
  | "sql"
  | "typescript"
  | "vue"
  | "yaml";
