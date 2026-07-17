import { useNavigate } from 'react-router-dom';
import {
  Send, Calendar, Eye, FileText, CheckCircle, Clock, AlertTriangle, Lightbulb,
  Award, Briefcase, ArrowRight, TrendingUp, HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ProgressBar from '../components/ui/ProgressBar';
import Avatar from '../components/ui/Avatar';
import {
  userData, dashboardStats, aiSuggestions, recentApplications,
  interviewNotifications, jobRecommendations
} from '../data/mockData';
import { getStatusColor, getLogoColors } from '../utils/helpers';

export default function DashboardPage() {
  const navigate = useNavigate();

  const iconMap = {
    Send: Send,
    Calendar: Calendar,
    Eye: Eye,
    FileText: FileText,
  };

  const suggestionIconMap = {
    Lightbulb: Lightbulb,
    AlertTriangle: AlertTriangle,
    Briefcase: Briefcase,
    Award: Award,
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-6 border border-blue-500/10">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Welcome , {userData.name}! 👋
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Here's what is happening with your job applications today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline" onClick={() => navigate('/resume-builder')}>Build Resume</Button>
          <Button size="sm" variant="primary" onClick={() => navigate('/jobs')}>Search Jobs</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, i) => {
          const IconComponent = iconMap[stat.icon] || Briefcase;
          return (
            <Card key={i} hover className="relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold text-emerald-500">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{stat.change}</span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Grid: Left is main stats, Right is checklist/notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Columns (Col Span 2) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Completion & Resume Score */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card glass className="flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Profile Completion</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Complete your profile to unlock all ATS match scores and job matching filters.</p>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm font-semibold">
                  <span>Progress</span>
                  <span>{userData.profileCompletion}%</span>
                </div>
                <ProgressBar value={userData.profileCompletion} color="gradient" size="md" />
                <Button size="sm" variant="outline" className="w-full mt-4" onClick={() => navigate('/profile')}>
                  Complete Profile
                </Button>
              </div>
            </Card>

            <Card glass className="flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Resume Score</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Your master resume has been scored by our ATS crawler against standard job criteria.</p>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{userData.resumeScore} / 100</span>
                  <Badge variant="success" size="sm">Good</Badge>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${userData.resumeScore}%` }} />
                </div>
                <Button size="sm" variant="outline" className="w-full mt-4" onClick={() => navigate('/resume-builder')}>
                  Review Resume
                </Button>
              </div>
            </Card>
          </div>

          {/* Recent Applications */}
          <Card>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Applications</h3>
                <p className="text-xs text-slate-500">Track states of your sent submissions</p>
              </div>
              <Button size="sm" variant="ghost" onClick={() => navigate('/applications')}>View All</Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    <th className="pb-3">Company</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3">Applied Date</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                  {recentApplications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                      <td className="py-3.5 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${getLogoColors(app.logo)} text-white font-bold flex items-center justify-center text-sm shrink-0`}>
                          {app.logo}
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">{app.company}</span>
                      </td>
                      <td className="py-3.5 text-slate-600 dark:text-slate-400">{app.role}</td>
                      <td className="py-3.5 text-slate-500">{app.date}</td>
                      <td className="py-3.5">
                        <Badge variant={
                          app.status === 'Interview Scheduled' ? 'success' :
                          app.status === 'Under Review' ? 'warning' :
                          app.status === 'Rejected' ? 'danger' : 'primary'
                        } size="xs">
                          {app.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right Columns (Col Span 1) */}
        <div className="space-y-8">
          {/* Interview Notifications */}
          <Card className="border-l-4 border-l-emerald-500">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Interviews Scheduled</h3>
            <div className="space-y-4">
              {interviewNotifications.map((notif) => (
                <div key={notif.id} className="flex gap-4 p-3 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{notif.company}</h4>
                      <Badge variant="success" size="xs">{notif.daysLeft} days left</Badge>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{notif.role}</p>
                    <p className="text-[11px] text-slate-500">{notif.date} at {notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* AI suggestions */}
          <Card>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Suggestions</h3>
            </div>
            <div className="space-y-3">
              {aiSuggestions.map((sug) => {
                const SugIcon = suggestionIconMap[sug.icon] || Lightbulb;
                return (
                  <div key={sug.id} className="flex gap-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 p-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-all">
                    <SugIcon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{sug.text}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Horizontal recommendations list */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recommended for you</h3>
            <p className="text-xs text-slate-500">Based on your skills & match parameters</p>
          </div>
          <Button size="sm" variant="outline" onClick={() => navigate('/jobs')}>Explore All</Button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {jobRecommendations.slice(0, 4).map((job) => (
            <div
              key={job.id}
              className="flex-shrink-0 w-80 p-5 bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${getLogoColors(job.logo)} text-white font-bold flex items-center justify-center text-sm shrink-0`}>
                    {job.logo}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-950 dark:text-white truncate max-w-[150px]">{job.company}</h4>
                    <p className="text-xs text-slate-500">{job.location}</p>
                  </div>
                </div>
                <Badge variant="primary" size="xs">{job.matchPercent}% Match</Badge>
              </div>

              <div className="mt-4 space-y-1">
                <h5 className="font-bold text-sm text-slate-900 dark:text-white truncate">{job.role}</h5>
                <p className="text-xs text-slate-500">{job.salary}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-1">
                {job.skills.slice(0, 3).map((skill, sIdx) => (
                  <span key={sIdx} className="px-2 py-0.5 bg-white dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 rounded border border-slate-200/50 dark:border-slate-700/50 font-medium">
                    {skill}
                  </span>
                ))}
                {job.skills.length > 3 && (
                  <span className="text-[10px] text-slate-400 self-center">+{job.skills.length - 3}</span>
                )}
              </div>

              <div className="mt-5 flex gap-2">
                <Button size="sm" variant="ghost" className="flex-1" onClick={() => navigate('/job-analysis')}>
                  Analyze
                </Button>
                <Button size="sm" variant="primary" className="flex-1" onClick={() => navigate('/jobs')}>
                  Apply
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
