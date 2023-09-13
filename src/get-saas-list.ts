import { z } from "zod";
import saasList from './constants/saas-list.json';

const schema = z.array(z.object({
  name: z.string(),
  description: z.string(),
  website: z.string().url(),
  tags: z.array(z.string()),
}));

export function getSaasList() {
  try {
    return schema.parse(saasList);
  } catch (e) {
    return [];
  }
}
