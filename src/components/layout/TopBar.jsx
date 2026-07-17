import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Bell, Menu, Search, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Avatar from '../ui/Avatar';
import { userData, notifications } from '../../data/mockData';

export default function TopBar({ onMenuClick }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl sticky top-0 z-30">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>

          <div className="hidden sm:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2.5 w-72">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent text-sm text-slate-700 dark:text-slate-300 placeholder:text-slate-400 outline-none w-full"
            />
            <kbd className="hidden md:inline-flex text-[10px] font-medium text-slate-400 border border-slate-300 dark:border-slate-600 rounded px-1.5 py-0.5">⌘K</kbd>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 cursor-pointer"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-500" />
            )}
          </button>

          <button
            onClick={() => navigate('/notifications')}
            className="relative p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Bell className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-1" />

          <button
            onClick={() => navigate('/profile')}
            className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Avatar initials={userData.initials} size="sm" />
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{userData.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{userData.role}</p>
            </div>
          </button>

          <button
            onClick={() => navigate('/')}
            className="p-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
