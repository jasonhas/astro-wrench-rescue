import { glob } from "astro/loaders"
import {z, defineCollection } from "astro:content"

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog"}),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
})

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        status: z.string(),
    })
})

export const collections = { blog, projects }