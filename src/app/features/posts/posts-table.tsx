"use client";

import { format } from "date-fns";
import { Edit, Eye, EyeOff, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";
import { deletePost, togglePublish } from "@/app/features/posts/actions";
import type { PostRow, PostsTableProps } from "@/app/shared/types/post/post";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/shared/ui/alert-dialog";
import { Badge } from "@/app/shared/ui/badge";
import { Button } from "@/app/shared/ui/button";

function PostRowActions({ post }: { post: PostRow }) {
  const [isPending, startTransition] = useTransition();

  function handleTogglePublish() {
    startTransition(async () => {
      const result = await togglePublish(post.id, !post.isPublished);
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      toast.success(post.isPublished ? "Post unpublished" : "Post published");
    });
  }

  function handleDelete() {
    startTransition(async () => {
      const result = await deletePost(post.id);
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      toast.success("Post deleted");
    });
  }

  return (
    <div className="flex items-center justify-end gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleTogglePublish}
        disabled={isPending}
        title={post.isPublished ? "Unpublish" : "Publish"}
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : post.isPublished ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </Button>

      <Button variant="ghost" size="icon" asChild>
        <Link href={`/admin/posts/${post.id}`}>
          <Edit className="h-4 w-4" />
        </Link>
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" disabled={isPending}>
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete post?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              <strong>{post.translations[0]?.title ?? post.slug}</strong> and
              all its translations. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export function PostsTable({ posts }: PostsTableProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
        <p className="text-muted-foreground text-sm">No posts yet.</p>
        <Link
          href="/admin/posts/new"
          className="mt-4 text-sm font-medium underline underline-offset-4"
        >
          Create your first post
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
              Title
            </th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden sm:table-cell">
              Tags
            </th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden md:table-cell">
              Year
            </th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground hidden lg:table-cell">
              Created
            </th>
            <th className="px-4 py-3 text-left font-medium text-muted-foreground">
              Status
            </th>
            <th className="px-4 py-3 text-right font-medium text-muted-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3">
                <p className="font-medium leading-none">
                  {post.translations[0]?.title ?? "—"}
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  {post.slug}
                </p>
              </td>

              <td className="px-4 py-3 hidden sm:table-cell">
                <div className="flex flex-wrap gap-1">
                  {post.postTags.length === 0 ? (
                    <span className="text-muted-foreground">—</span>
                  ) : (
                    post.postTags.map(({ tag }) => (
                      <Badge key={tag.name} variant="secondary">
                        {tag.name}
                      </Badge>
                    ))
                  )}
                </div>
              </td>

              <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">
                {post.year ?? "—"}
              </td>

              <td className="px-4 py-3 hidden lg:table-cell text-muted-foreground">
                {format(post.createdAt, "MMM d, yyyy")}
              </td>

              <td className="px-4 py-3">
                <Badge variant={post.isPublished ? "default" : "outline"}>
                  {post.isPublished ? "Published" : "Draft"}
                </Badge>
              </td>

              <td className="px-4 py-3">
                <PostRowActions post={post} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
