import { cn } from '../../utils/helpers';

export default function Skeleton({ className = '', rounded = 'rounded-xl' }) {
  return (
    <div
      className={cn(
        'animate-pulse bg-slate-200 dark:bg-slate-700',
        rounded,
        className,
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="w-10 h-10 rounded-full" rounded="rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-lg" rounded="rounded-lg" />
        <Skeleton className="h-6 w-16 rounded-lg" rounded="rounded-lg" />
        <Skeleton className="h-6 w-16 rounded-lg" rounded="rounded-lg" />
      </div>
    </div>
  );
}
