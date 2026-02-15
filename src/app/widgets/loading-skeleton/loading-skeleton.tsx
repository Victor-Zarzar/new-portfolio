import { Card, CardContent } from "@/app/shared/ui/card";
import { Skeleton } from "@/app/shared/ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <section
      className="max-w-3xl mx-auto grid grid-cols-1 gap-6 px-4 mb-52 md:mb-72 my-4 mt-8 md:mt-6"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i} className="w-full">
            <CardContent className="p-6">
              <Skeleton className="h-5 w-40" />
              <div className="mt-4 space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
                <Skeleton className="h-4 w-3/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={`repo-${i}`} className="w-full max-w-3xl h-36 mx-auto">
          <CardContent className="p-6">
            <Skeleton className="h-5 w-64" />
            <Skeleton className="mt-3 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-5/6" />
            <div className="mt-4 flex gap-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
