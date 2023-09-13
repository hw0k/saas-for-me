import type { Tag } from "./tag.ts";

export interface Saas {
  name: string;
  description: string;
  website: string;
  tags: Tag[];
}
