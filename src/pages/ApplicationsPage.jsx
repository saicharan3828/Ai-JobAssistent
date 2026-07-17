import { useState } from 'react';
import { Kanban, List, Plus, Search, Calendar, ChevronRight, CheckCircle2, DollarSign } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import { applications, applicationStatuses } from '../data/mockData';
import { getLogoColors, getStatusColor } from '../utils/helpers';

export default function ApplicationsPage() {
  const [list, setList] = useState(applications);
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban', 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [showToast, setShowToast] = useState('');

  const updateStatus = (appId, newStatus) => {
    setList(prev => prev.map(app => app.id === appId ? { ...app, status: newStatus } : app));
    const matchedApp = list.find(app => app.id === appId);
    setShowToast(`Status for ${matchedApp ? matchedApp.company : 'Application'} updated to ${newStatus}!`);
    setTimeout(() => setShowToast(''), 3000);
  };

  const filteredApps = list.filter(app =>
    app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Application Pipelines</h2>
          <p className="text-sm text-slate-500">Track and update the status of your jobs throughout recruitment loops.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
          <button
            onClick={() => setViewMode('kanban')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${viewMode === 'kanban' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Kanban className="w-3.5 h-3.5 inline mr-1" /> Kanban
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <List className="w-3.5 h-3.5 inline mr-1" /> Table list
          </button>
        </div>
      </div>

      {showToast && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-500 font-semibold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{showToast}</span>
        </div>
      )}

      {/* Filter Row */}
      <Card className="flex items-center justify-between py-4">
        <div className="max-w-md w-full">
          <Input
            icon={Search}
            placeholder="Search company or application role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>

      {/* Kanban Board View */}
      {viewMode === 'kanban' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-4">
          {applicationStatuses.map((status) => {
            const statusApps = filteredApps.filter(app => app.status === status);
            return (
              <div key={status} className="flex-shrink-0 min-w-[220px] bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-200/50 dark:border-slate-800/50 flex flex-col h-[600px]">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 truncate">{status}</h4>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                    {statusApps.length}
                  </span>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
                  {statusApps.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 rounded-xl hover:shadow-md transition-all cursor-grab active:cursor-grabbing relative group"
                    >
                      {/* Simple status shifter inside the card for demo ease */}
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className="absolute top-2 right-2 text-[9px] bg-slate-100 dark:bg-slate-950 text-slate-500 border border-slate-200 dark:border-slate-800 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer outline-none"
                      >
                        {applicationStatuses.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>

                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-6 h-6 rounded ${getLogoColors(app.logo)} text-white font-bold flex items-center justify-center text-[10px] shrink-0`}>
                          {app.logo}
                        </div>
                        <span className="font-bold text-xs text-slate-900 dark:text-white truncate max-w-[100px]">{app.company}</span>
                      </div>

                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-350 truncate">{app.role}</h5>
                      <p className="text-[10px] text-slate-400 mt-1">{app.date}</p>

                      {app.interviewDate && (
                        <div className="mt-3 flex items-center gap-1 text-[9px] font-bold text-emerald-500 bg-emerald-500/10 p-1 rounded-md border border-emerald-500/20">
                          <Calendar className="w-3 h-3" />
                          <span>Interview: {app.interviewDate}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Table List View */
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="pb-3">Company</th>
                  <th className="pb-3">Job Role</th>
                  <th className="pb-3">Salary Range</th>
                  <th className="pb-3">Submittal Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                    <td className="py-3.5 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${getLogoColors(app.logo)} text-white font-bold flex items-center justify-center text-sm shrink-0`}>
                        {app.logo}
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">{app.company}</span>
                    </td>
                    <td className="py-3.5 text-slate-655 dark:text-slate-400">{app.role}</td>
                    <td className="py-3.5 text-slate-500 flex items-center text-xs font-semibold text-emerald-500 mt-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>{app.salary}</span>
                    </td>
                    <td className="py-3.5 text-slate-500">{app.date}</td>
                    <td className="py-3.5">
                      <Badge variant={
                        app.status === 'Interview Scheduled' || app.status === 'Selected' ? 'success' :
                        app.status === 'Under Review' || app.status === 'Shortlisted' ? 'warning' :
                        app.status === 'Rejected' ? 'danger' : 'primary'
                      } size="xs">
                        {app.status}
                      </Badge>
                    </td>
                    <td className="py-3.5 text-right">
                      <select
                        value={app.status}
                        onChange={(e) => updateStatus(app.id, e.target.value)}
                        className="text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 p-1.5 rounded-lg outline-none cursor-pointer"
                      >
                        {applicationStatuses.map((st) => (
                          <option key={st} value={st}>{st}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
