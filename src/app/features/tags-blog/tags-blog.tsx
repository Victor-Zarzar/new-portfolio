import type { TagsProps } from "@/app/shared/types/tags/tags";

export function Tags({ tags }: TagsProps) {
  if (!tags?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-5 text-white">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-xs rounded-full bg-neutral-800 dark:bg-neutral-800 border border-neutral-700"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
