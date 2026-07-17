import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, CheckCircle2, XCircle, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { jobAnalysisData } from '../data/mockData';
import { getLogoColors } from '../utils/helpers';

export default function JobAnalysisPage() {
  const navigate = useNavigate();
  const [data] = useState(jobAnalysisData);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">AI Job Description Analysis</h2>
          <p className="text-sm text-slate-500">Examine details to identify matching criteria before applying.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => navigate('/jobs')}>Back to Jobs</Button>
          <Button size="sm" variant="primary" onClick={() => navigate('/resume-tailoring')} iconRight={ArrowRight}>Tailor Resume</Button>
        </div>
      </div>

      {/* Header Info Card */}
      <Card glass className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl ${getLogoColors(data.job.logo)} text-white font-bold flex items-center justify-center text-xl shrink-0 shadow-lg`}>
            {data.job.logo}
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">{data.job.role}</h3>
            <p className="text-sm text-slate-500 font-semibold">{data.job.company} • {data.job.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-slate-500">ATS Score Compatibility</p>
            <p className="text-xl font-black text-emerald-500">{data.job.matchPercent}% Match</p>
          </div>
          <Badge variant="success" size="md">Highly Qualified</Badge>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left main analysis (Col Span 2) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Required Skills Matrix */}
          <Card>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3 mb-4">
              Required Skills Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.requiredSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-center justify-between ${
                    skill.matched
                      ? 'border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10'
                      : 'border-red-500/20 bg-red-500/5 dark:bg-red-500/10'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-semibold text-sm text-slate-900 dark:text-white">{skill.name}</span>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Requirement: {skill.level}</p>
                  </div>
                  {skill.matched ? (
                    <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                      <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                      <span>Matched</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-500 text-xs font-bold">
                      <XCircle className="w-4.5 h-4.5 shrink-0" />
                      <span>Missing</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Responsibilities */}
          <Card>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3 mb-4">
              Job Responsibilities
            </h3>
            <ul className="space-y-3.5">
              {data.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right side checklist (Col Span 1) */}
        <div className="space-y-8">
          {/* Missing Skills and Learning paths */}
          <Card className="border-l-4 border-l-amber-500">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Optimize Opportunities</h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Learn these topics to strengthen compatibility ranking:</p>
            <div className="space-y-4">
              {data.missingSkills.map((ms, idx) => (
                <div key={idx} className="p-4 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 rounded-xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{ms.name}</span>
                    <Badge variant="warning" size="xs">Priority: {ms.priority}</Badge>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{ms.suggestion}</p>
                  <button className="text-xs text-blue-600 hover:text-blue-500 font-bold flex items-center gap-1 cursor-pointer">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Start Course</span>
                  </button>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience Comparison */}
          <Card>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Experience Comparison</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Required</p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">{data.experienceNeeded.required}</p>
                </div>
                <div className="p-3 bg-slate-100/50 dark:bg-slate-900/50 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Profile Has</p>
                  <p className="text-lg font-black text-slate-900 dark:text-white">{data.experienceNeeded.userHas}</p>
                </div>
              </div>
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs text-emerald-500 font-semibold leading-relaxed">
                {data.experienceNeeded.details}
              </div>
            </div>
          </Card>

          {/* ATS Keywords cloud */}
          <Card>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 font-sans">ATS Keywords Cloud</h3>
            <p className="text-[10px] text-slate-500 mb-3">Ensure these tags exist in your text to maximize automation matching:</p>
            <div className="flex flex-wrap gap-1.5">
              {data.atsKeywords.map((kw, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200/50 dark:border-slate-700/50 font-medium">
                  {kw}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
