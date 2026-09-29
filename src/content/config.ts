import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    category: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    featured_image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
