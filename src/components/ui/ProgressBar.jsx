import { cn } from '../../utils/helpers';

export default function ProgressBar({ value, max = 100, size = 'md', color = 'blue', showLabel = false, className = '' }) {
  const percent = Math.min((value / max) * 100, 100);
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-emerald-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-500',
  };
  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between mb-1.5">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Progress</span>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{Math.round(percent)}%</span>
        </div>
      )}
      <div className={cn('w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden', sizes[size])}>
        <div
          className={cn('h-full rounded-full transition-all duration-700 ease-out', colors[color])}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
