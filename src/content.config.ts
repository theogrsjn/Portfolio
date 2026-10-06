import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projets" }),
  schema: ({ image }) =>
    z.object({
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
      // Légende affichée tant qu'il n'y a ni image ni visuel
      cover: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      // "cover" remplit le cadre (photo), "contain" garde l'objet entier sur fond clair (rendu CAO)
      imageFit: z.enum(["cover", "contain"]).default("cover"),
      // Visuel dessiné en CSS quand il n'existe pas de photo
      visual: z.enum(["corextension"]).optional(),
      facts: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      products: z
        .array(z.object({ name: z.string(), desc: z.string(), url: z.url().optional() }))
        .optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
    }),
});

export const collections = { projets };
