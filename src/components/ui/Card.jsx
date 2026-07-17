import { cn } from '../../utils/helpers';

export default function Card({ children, className = '', glass = false, hover = false, padding = true, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        glass
          ? 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50'
          : 'bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700/80',
        hover && 'hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-0.5',
        padding && 'p-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
