import { useState } from 'react';
import { Bell, Calendar, MessageSquare, Clock, CheckCircle2, XCircle, Trash2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { notifications as initialNotifications } from '../data/mockData';

export default function NotificationsPage() {
  const [list, setList] = useState(initialNotifications);
  const [filter, setFilter] = useState('all'); // 'all', 'unread', 'interview', 'hr'

  const markAllRead = () => {
    setList(prev => prev.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setList(prev => prev.filter(n => n.id !== id));
  };

  const toggleRead = (id) => {
    setList(prev => prev.map(n => n.id === id ? { ...n, read: !n.read } : n));
  };

  const filteredNotifs = list.filter(n => {
    if (filter === 'unread') return !n.read;
    if (filter === 'interview') return n.type === 'interview';
    if (filter === 'hr') return n.type === 'hr';
    return true;
  });

  const iconMap = {
    Calendar: Calendar,
    MessageSquare: MessageSquare,
    Clock: Clock,
    CheckCircle2: CheckCircle2,
    XCircle: XCircle,
    Bell: Bell
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Notification Center</h2>
          <p className="text-sm text-slate-500">Stay informed about interview invites, coordinator messages, and matching updates.</p>
        </div>
        <Button size="sm" variant="outline" onClick={markAllRead}>Mark all read</Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl max-w-md">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${filter === 'all' ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          All ({list.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${filter === 'unread' ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Unread ({list.filter(n => !n.read).length})
        </button>
        <button
          onClick={() => setFilter('interview')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${filter === 'interview' ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Interviews
        </button>
        <button
          onClick={() => setFilter('hr')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${filter === 'hr' ? 'bg-white dark:bg-slate-700 text-slate-950 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
        >
          HR
        </button>
      </div>

      {/* Notifications List */}
      <Card className="divide-y divide-slate-100 dark:divide-slate-800 p-0 overflow-hidden">
        {filteredNotifs.length > 0 ? (
          filteredNotifs.map((notif) => {
            const IconComp = iconMap[notif.icon] || Bell;
            return (
              <div
                key={notif.id}
                onClick={() => toggleRead(notif.id)}
                className={`p-5 flex gap-4 transition-colors cursor-pointer relative group ${
                  notif.read ? 'bg-transparent' : 'bg-blue-500/5 dark:bg-blue-950/10'
                }`}
              >
                {!notif.read && (
                  <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-600 rounded-r-full" />
                )}

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  notif.type === 'interview' ? 'bg-emerald-500/10 text-emerald-500' :
                  notif.type === 'hr' ? 'bg-amber-500/10 text-amber-500' :
                  'bg-blue-500/10 text-blue-500'
                }`}>
                  <IconComp className="w-5 h-5" />
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className={`text-sm text-slate-900 dark:text-white ${notif.read ? 'font-medium' : 'font-bold'}`}>
                      {notif.title}
                    </h4>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">{notif.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pr-6">
                    {notif.description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(notif.id);
                  }}
                  className="p-1.5 self-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-450 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-slate-450 space-y-3">
            <Bell className="w-10 h-10 mx-auto text-slate-300" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">All caught up!</h3>
            <p className="text-xs text-slate-500">There are no new notifications matching this filter scope.</p>
          </div>
        )}
      </Card>
    </div>
  );
}
