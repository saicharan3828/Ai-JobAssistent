import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/helpers';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ isOpen, onClose, title, children, size = 'md', className = '' }) {
  const ref = useRef();

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-6xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'relative w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl',
              'border border-slate-200 dark:border-slate-700',
              'max-h-[90vh] overflow-hidden flex flex-col',
              sizes[size],
              className,
            )}
          >
            {title && (
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            )}
            <div className="overflow-y-auto p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
