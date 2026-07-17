import { cn } from '../../utils/helpers';

export default function Input({ label, icon: Icon, error, className = '', ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        )}
        <input
          className={cn(
            'w-full rounded-xl border bg-white dark:bg-slate-900 text-slate-900 dark:text-white',
            'placeholder:text-slate-400 dark:placeholder:text-slate-500',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500',
            error
              ? 'border-red-300 dark:border-red-700'
              : 'border-slate-200 dark:border-slate-700',
            Icon ? 'pl-11 pr-4 py-3' : 'px-4 py-3',
            'text-sm',
            className,
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
