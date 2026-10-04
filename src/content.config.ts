import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projets" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    status: z.enum(["en-cours", "termine", "en-ligne"]),
    statusLabel: z.string().optional(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    category: z.enum(["Hardware", "Logiciel", "Mécanique", "Infra"]),
    stack: z.array(z.string()),
    cover: z.string().describe("Légende de l'image en attendant la vraie photo"),
    facts: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    products: z
      .array(z.object({ name: z.string(), desc: z.string(), url: z.url().optional() }))
      .optional(),
    links: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
  }),
});

export const collections = { projets };
