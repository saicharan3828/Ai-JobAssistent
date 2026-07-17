import { useState } from 'react';
import { cn } from '../../utils/helpers';

export default function Tabs({ tabs, defaultTab = 0, onChange, className = '' }) {
  const [active, setActive] = useState(defaultTab);

  const handleClick = (index) => {
    setActive(index);
    onChange?.(index);
  };

  return (
    <div className={cn('', className)}>
      <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer',
              active === i
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs[active]?.content}
      </div>
    </div>
  );
}
