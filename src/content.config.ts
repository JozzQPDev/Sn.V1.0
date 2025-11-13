import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const detalleProd = defineCollection({
	// Load Markdown and MDX files in the `src/content/detalle-prod/` directory.
	loader: glob({ base: './src/content/detalle-prod', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			galleryImages: z.array(image()).optional(),
			resumen: z.string().optional(),
			precio: z.string().optional(),
			name: z.string().optional(),
			descrip: z.string().optional(),
			caracteristicas: z.array(z.string()).optional(),
			beneficios: z.array(z.string()).optional(),
			modopreparacion: z.array(z.string()).optional(),
			usos: z.array(z.string()).optional(),
			compromiso: z.array(z.string()).optional(),
			recomendaciones: z.array(z.string()).optional(),
		}),
});

export const collections = { blog, detalleProd };
