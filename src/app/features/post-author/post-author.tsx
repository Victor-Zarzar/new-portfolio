import Image from "next/image";
import type { PostAuthorProps } from "@/app/shared/types/author/author";

export function PostAuthor({ name, profession, avatar }: PostAuthorProps) {
  return (
    <div className="flex items-center gap-3 mt-6">
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        priority
        className="rounded-full object-cover border border-neutral-800"
      />

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
          {name}
        </span>

        <span className="text-xs text-neutral-800 dark:text-neutral-100">
          {profession}
        </span>
      </div>
    </div>
  );
}
