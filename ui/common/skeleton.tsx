import { cn } from '@/utils/tail-merge';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />;
}

export { Skeleton };
