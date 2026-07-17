import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, DollarSign, Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import { jobRecommendations } from '../data/mockData';
import { getLogoColors, getMatchColor, getMatchBg } from '../utils/helpers';

export default function JobsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLoc, setSelectedLoc] = useState('All');
  const [minMatch, setMinMatch] = useState(70);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showToast, setShowToast] = useState('');

  const handleApply = (jobId, company, role) => {
    if (appliedJobs.includes(jobId)) return;
    setAppliedJobs(prev => [...prev, jobId]);
    setShowToast(`Application for ${role} at ${company} submitted successfully!`);
    setTimeout(() => setShowToast(''), 3000);
  };

  const filteredJobs = jobRecommendations.filter(job => {
    const matchesSearch = job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLoc = selectedLoc === 'All' || job.location.includes(selectedLoc) || (selectedLoc === 'Remote' && job.remote === 'Remote');
    const matchesScore = job.matchPercent >= minMatch;
    return matchesSearch && matchesLoc && matchesScore;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Job Recommendations</h2>
          <p className="text-sm text-slate-500">Intelligent matcher matches openings against your experience level.</p>
        </div>
      </div>

      {showToast && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-500 font-semibold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{showToast}</span>
        </div>
      )}

      {/* Filter panel */}
      <Card className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex-1 w-full">
          <Input
            icon={Search}
            placeholder="Search company, job role, or technical skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4 w-full lg:w-auto items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Location:</span>
            <select
              value={selectedLoc}
              onChange={(e) => setSelectedLoc(e.target.value)}
              className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-2.5 text-xs text-slate-800 dark:text-slate-200 outline-none cursor-pointer"
            >
              <option value="All">All Locations</option>
              <option value="San Francisco">San Francisco, CA</option>
              <option value="Mountain View">Mountain View, CA</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Min Match %:</span>
            <input
              type="range"
              min="50"
              max="95"
              step="5"
              value={minMatch}
              onChange={(e) => setMinMatch(Number(e.target.value))}
              className="w-24 accent-blue-600 cursor-pointer"
            />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{minMatch}%</span>
          </div>
        </div>
      </Card>

      {/* Job cards list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id} hover className="flex flex-col justify-between relative">
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${getLogoColors(job.logo)} text-white font-bold flex items-center justify-center text-base shrink-0`}>
                      {job.logo}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">{job.company}</h4>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location} ({job.remote})</span>
                      </div>
                    </div>
                  </div>

                  <div className={`px-3 py-1 rounded-xl border font-bold text-xs ${getMatchBg(job.matchPercent)} ${getMatchColor(job.matchPercent)} flex items-center gap-1`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{job.matchPercent}% Match</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-snug">{job.role}</h3>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((skill, idx) => (
                    <Badge key={idx} variant="default" size="xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate('/job-analysis')}
                >
                  Analyze
                </Button>
                <Button
                  variant={appliedJobs.includes(job.id) ? 'success' : 'primary'}
                  className="flex-1"
                  onClick={() => handleApply(job.id, job.company, job.role)}
                  disabled={appliedJobs.includes(job.id)}
                >
                  {appliedJobs.includes(job.id) ? 'Applied' : 'Apply Now'}
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 space-y-4">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No matching job records</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">Adjust search filter queries or matching parameters to show additional listings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
