import { cn } from '../../utils/helpers';

export default function Badge({ children, variant = 'default', size = 'sm', className = '' }) {
  const variants = {
    default: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
    primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    danger: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };
  const sizes = {
    xs: 'px-1.5 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };
  return (
    <span className={cn('inline-flex items-center font-medium rounded-lg', variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
