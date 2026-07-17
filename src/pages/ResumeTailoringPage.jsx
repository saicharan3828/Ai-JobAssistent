import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Download, ArrowLeft, RefreshCw, CheckCircle2, ChevronRight, Edit3, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { resumeTailoringData } from '../data/mockData';

export default function ResumeTailoringPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(resumeTailoringData);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [tailoredSummary, setTailoredSummary] = useState(data.tailored.summary);
  const [tailoredBullets, setTailoredBullets] = useState(data.tailored.experienceBullets);
  const [toastMsg, setToastMsg] = useState('');

  const triggerRegenerate = () => {
    setLoading(true);
    setToastMsg('');
    setTimeout(() => {
      setLoading(false);
      setToastMsg('AI improvements recalculated successfully!');
      setTimeout(() => setToastMsg(''), 3000);
    }, 1500);
  };

  const triggerDownload = () => {
    setToastMsg('Downloading Tailored ATS Resume PDF...');
    setTimeout(() => {
      setToastMsg('Tailored resume downloaded successfully!');
      // Create virtual download file for demonstration
      const element = document.createElement("a");
      const tailoredOutput = {
        summary: tailoredSummary,
        skills: data.tailored.skills,
        experienceBullets: tailoredBullets
      };
      const file = new Blob([JSON.stringify(tailoredOutput, null, 2)], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `Tailored_Resume_Google.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setTimeout(() => setToastMsg(''), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">AI Resume Tailoring</h2>
          <p className="text-sm text-slate-500">Inject keywords and adapt phrasing for Senior Frontend Engineer role at Google.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => navigate('/job-analysis')} icon={ArrowLeft}>Back</Button>
          <Button size="sm" variant="outline" onClick={triggerRegenerate} loading={loading} icon={RefreshCw}>Regenerate</Button>
          <Button size="sm" variant="primary" onClick={triggerDownload} icon={Download}>Download Tailored</Button>
        </div>
      </div>

      {toastMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-500 font-semibold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Grid: 3 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Column 1: Original Resume summary (Span 4) */}
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest border-b border-slate-200/60 dark:border-slate-800/60 pb-3 mb-4">
              Original Resume
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-400">Professional Summary</span>
                <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed mt-1 p-2 bg-slate-100/50 dark:bg-slate-900/50 rounded-lg">
                  {data.original.summary}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400">Experience Achievements</span>
                <ul className="list-disc pl-4 text-xs text-slate-650 dark:text-slate-400 space-y-2 mt-2">
                  {data.original.experienceBullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400">Core Technical Skills</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {data.original.skills.map((skill, idx) => (
                    <Badge key={idx} variant="default" size="xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Column 2: AI Improvements & Diff flow (Span 3) */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="bg-blue-600/5 dark:bg-blue-950/10 border-blue-500/10">
            <h3 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest border-b border-blue-500/10 pb-3 mb-4">
              AI Improvements
            </h3>

            <div className="space-y-4">
              {data.improvements.map((imp, idx) => (
                <div key={idx} className="flex gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{imp.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Column 3: Tailored Resume output (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-l-4 border-l-blue-600">
            <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3 mb-4">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">
                Tailored Resume
              </h3>
              <Button size="sm" variant="ghost" className="py-1 text-xs" onClick={() => setEditing(!editing)}>
                {editing ? 'Preview' : 'Edit content'}
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-400">Optimized Summary</span>
                {editing ? (
                  <textarea
                    rows={4}
                    value={tailoredSummary}
                    onChange={(e) => setTailoredSummary(e.target.value)}
                    className="w-full mt-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-xs text-slate-900 dark:text-slate-200 leading-relaxed mt-1.5 p-2 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                    {tailoredSummary}
                  </p>
                )}
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400">High-Impact Accomplishments</span>
                {editing ? (
                  <div className="space-y-2 mt-2">
                    {tailoredBullets.map((bullet, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={bullet}
                        onChange={(e) => {
                          const newBullets = [...tailoredBullets];
                          newBullets[idx] = e.target.value;
                          setTailoredBullets(newBullets);
                        }}
                        className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    ))}
                  </div>
                ) : (
                  <ul className="list-disc pl-4 text-xs text-slate-900 dark:text-slate-200 space-y-2 mt-2">
                    {tailoredBullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <span className="text-xs font-bold text-slate-400">Target Skills Matches</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {data.tailored.skills.map((skill, idx) => (
                    <Badge key={idx} variant="primary" size="xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
