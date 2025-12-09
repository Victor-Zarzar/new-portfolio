import { cn } from "@/app/shared/lib/utils";

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"animate-pulse rounded-md bg-stone-100 dark:bg-stone-900",
				className,
			)}
			{...props}
		/>
	);
}

export { Skeleton };
