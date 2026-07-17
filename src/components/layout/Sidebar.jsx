import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, User, FileText, Briefcase, Search, Sparkles,
  PenTool, BarChart3, Bell, ChevronLeft, ChevronRight, Zap, LogOut,
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/profile', label: 'Master Profile', icon: User },
  { path: '/resume-builder', label: 'Resume Builder', icon: FileText },
  { path: '/jobs', label: 'Job Recommendations', icon: Briefcase },
  { path: '/job-analysis', label: 'AI Job Analysis', icon: Search },
  { path: '/resume-tailoring', label: 'AI Resume Tailoring', icon: Sparkles },
  { path: '/cover-letter', label: 'AI Cover Letter', icon: PenTool },
  { path: '/applications', label: 'Applications', icon: BarChart3 },
  { path: '/notifications', label: 'Notifications', icon: Bell },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setCollapsed(true)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 280 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'fixed left-0 top-0 h-screen z-50 flex flex-col',
          'bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800',
          'lg:relative lg:z-auto',
          collapsed ? 'w-20' : 'w-[280px]',
          /* mobile: hide when collapsed */
          collapsed && 'max-lg:-translate-x-full',
          !collapsed && 'max-lg:translate-x-0',
          'transition-transform lg:transition-none duration-300',
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="overflow-hidden"
              >
                <h1 className="font-bold text-slate-900 dark:text-white text-base whitespace-nowrap">AI JobAssistent</h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => { if (window.innerWidth < 1024) setCollapsed(true); }}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative',
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white',
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <item.icon className={cn('w-5 h-5 shrink-0', isActive ? 'text-blue-600 dark:text-blue-400' : '')} />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-sm whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {collapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {collapsed ? <ChevronRight className="w-5 h-5 shrink-0" /> : <ChevronLeft className="w-5 h-5 shrink-0" />}
            {!collapsed && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
