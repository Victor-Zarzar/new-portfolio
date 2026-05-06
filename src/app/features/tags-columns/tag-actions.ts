"use server";

import { eq } from "drizzle-orm";
import type { ActionResult } from "next/dist/shared/lib/app-router-types";
import { z } from "zod";
import { db } from "@/lib/db";
import { tags } from "@/lib/db/schema";

const schema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
});

export async function createTag(data: unknown) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: parsed.error };
  }

  try {
    const slug = parsed.data.slug.toLowerCase();

    const existing = await db.query.tags.findFirst({
      where: (t, { eq }) => eq(t.slug, slug),
    });

    if (existing) {
      return {
        success: false,
        error: new Error("Slug already exists"),
      };
    }

    await db.insert(tags).values({
      name: parsed.data.name,
      slug,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export async function deleteTag(slug: string): Promise<ActionResult> {
  try {
    await db.delete(tags).where(eq(tags.slug, slug));

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
