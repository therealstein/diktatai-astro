import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
  }),
});

const questions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['de', 'en']),
  }),
});

export const collections = {
  blog,
  questions,
};
