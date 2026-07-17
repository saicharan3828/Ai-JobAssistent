import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenTool, Download, Copy, RefreshCw, CheckCircle2, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { coverLetterData, jobRecommendations } from '../data/mockData';

export default function CoverLetterPage() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(jobRecommendations[0].id);
  const [tone, setTone] = useState(coverLetterData.tone);
  const [content, setContent] = useState(coverLetterData.content);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const triggerRegenerate = () => {
    setLoading(true);
    setToastMsg('');
    setTimeout(() => {
      setLoading(false);
      setToastMsg(`Cover letter regenerated successfully with ${tone} tone!`);
      const matchedJob = jobRecommendations.find(j => j.id === selectedJob);
      const newLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the ${matchedJob ? matchedJob.role : 'Senior Frontend Engineer'} position at ${matchedJob ? matchedJob.company : 'Google'}. With over 5 years of experience in building scalable web applications and a deep expertise in React, TypeScript, and modern frontend architecture, I am confident that my skills and passion align perfectly with this role.

In my current position, I have led the development of a microservices architecture, reduced page load times, and established robust CI/CD pipelines. These experiences have honed my ability to deliver high-performance, user-centric solutions at scale.

What excites me most about this opportunity is the chance to build products that impact users worldwide. ${matchedJob ? matchedJob.company : 'Google'}'s commitment to engineering excellence and innovation resonates deeply with my professional values.

I would welcome the opportunity to discuss how my background and skills can contribute to your mission. Thank you for considering my application.

Best regards,
Alex Morgan`;
      setContent(newLetter);
      setTimeout(() => setToastMsg(''), 3000);
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setToastMsg('Cover letter copied to clipboard!');
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleDownload = () => {
    setToastMsg('Downloading Cover Letter TXT...');
    setTimeout(() => {
      setToastMsg('Cover letter downloaded successfully!');
      // Create virtual download file for demonstration
      const element = document.createElement("a");
      const file = new Blob([content], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `Cover_Letter_Google.txt`;
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
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">AI Cover Letter Generator</h2>
          <p className="text-sm text-slate-500">Draft customized applications automatically matched against targeted job roles.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={handleCopy} icon={Copy}>Copy Text</Button>
          <Button size="sm" variant="outline" onClick={handleDownload} icon={Download}>Download</Button>
        </div>
      </div>

      {toastMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-500 font-semibold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column Controls */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="space-y-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
              Generation Parameters
            </h3>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Target Opportunity</label>
              <select
                value={selectedJob}
                onChange={(e) => setSelectedJob(Number(e.target.value))}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white cursor-pointer"
              >
                {jobRecommendations.map((job) => (
                  <option key={job.id} value={job.id}>
                    {job.company} — {job.role}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tone Parameter</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white cursor-pointer"
              >
                <option value="Professional">Professional (Recommended)</option>
                <option value="Casual">Casual & Direct</option>
                <option value="Confident">Confident & Bold</option>
                <option value="Enthusiastic">Enthusiastic & Passionate</option>
              </select>
            </div>

            <Button onClick={triggerRegenerate} loading={loading} className="w-full" icon={RefreshCw}>
              Regenerate Draft
            </Button>
          </Card>
        </div>

        {/* Right Column Layout Preview */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="min-h-[500px] flex flex-col">
            <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Formatted Cover Letter Draft</h3>
              <Badge variant="primary" size="xs">
                {content.split(/\s+/).filter(Boolean).length} Words
              </Badge>
            </div>

            <textarea
              rows={20}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full flex-1 border-0 bg-transparent text-sm focus:outline-none text-slate-800 dark:text-slate-200 font-serif leading-relaxed resize-none"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
