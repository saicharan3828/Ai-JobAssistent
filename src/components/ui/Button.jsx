import { cn } from '../../utils/helpers';

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40',
  secondary: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600',
  outline: 'border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400',
  ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400',
  success: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25',
  danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
};

export default function Button({
  children, variant = 'primary', size = 'md', className = '',
  icon: Icon, iconRight: IconRight, loading, disabled, ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
        'active:scale-[0.97]',
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : Icon ? <Icon className="w-4 h-4" /> : null}
      {children}
      {IconRight && <IconRight className="w-4 h-4" />}
    </button>
  );
}
