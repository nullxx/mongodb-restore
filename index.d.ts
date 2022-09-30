import type { ConnectOptions } from "mongodb-legacy";

export default function restore(options: {
  uri: string;
  root: string;
  parser?: string | Function;
  callback?: (err?: Error | null) => void;
  stream?: Object;
  tar?: string;
  logger?: string;
  metadata?: boolean;
  drop?: boolean;
  dropCollections?: boolean | string[];
  options?: ConnectOptions;
}): void;
