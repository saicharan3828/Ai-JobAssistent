import { cn } from '../../utils/helpers';

export default function Avatar({ initials, size = 'md', className = '', bgColor = '' }) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-bold text-white',
        'bg-gradient-to-br from-blue-500 to-purple-600',
        sizes[size],
        bgColor,
        className,
      )}
    >
      {initials}
    </div>
  );
}
