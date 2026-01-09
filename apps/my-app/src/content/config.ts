import { defineCollection } from "astro:content"; 
import { z } from "zod";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string().optional(),
        draft: z.boolean().optional(),
        highlighted: z.boolean().optional(),
        layout: z.enum(['default', 'blog']).optional().default('blog'),
        tags: z.array(z.string()).optional().default([]),
    })
});

export const collections = {
    blog,
}