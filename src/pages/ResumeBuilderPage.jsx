import { useState } from 'react';
import {
  FileText, Download, Save, UploadCloud, CheckCircle2, ChevronRight, Eye, Edit3, Settings, AlertCircle
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { resumeData, resumeTemplates } from '../data/mockData';

export default function ResumeBuilderPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [previewMode, setPreviewMode] = useState('split'); // 'split', 'editor', 'preview'
  const [resume, setResume] = useState(resumeData);
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const triggerSave = () => {
    setSaving(true);
    setAlertMsg('');
    setTimeout(() => {
      setSaving(false);
      setAlertMsg('Resume saved successfully!');
      setTimeout(() => setAlertMsg(''), 3000);
    }, 1000);
  };

  const triggerDownload = () => {
    setDownloading(true);
    setAlertMsg('');
    setTimeout(() => {
      setDownloading(false);
      setAlertMsg('ATS Resume PDF downloaded successfully!');
      // Create virtual download file for demonstration
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(resume, null, 2)], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${resume.personalInfo.name.replace(/\s+/g, '_')}_Resume.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setTimeout(() => setAlertMsg(''), 3000);
    }, 1200);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAlertMsg(`Parsing uploaded file: ${file.name}...`);
      setTimeout(() => {
        setAlertMsg('File parsed! Synced details with resume compiler.');
        setTimeout(() => setAlertMsg(''), 3000);
      }, 1500);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Interactive Resume Builder</h2>
          <p className="text-sm text-slate-500">Design resumes structured strictly to pass machine parser matching protocols.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={triggerSave} loading={saving} icon={Save}>Save</Button>
          <Button size="sm" variant="primary" onClick={triggerDownload} loading={downloading} icon={Download}>Download PDF</Button>
        </div>
      </div>

      {alertMsg && (
        <div className="p-4 bg-blue-500/10 border border-blue-500/20 text-sm text-blue-600 dark:text-blue-400 font-semibold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{alertMsg}</span>
        </div>
      )}

      {/* Grid: Template Selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {resumeTemplates.map((tpl) => (
          <div
            key={tpl.id}
            onClick={() => setSelectedTemplate(tpl.id)}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              selectedTemplate === tpl.id
                ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/20 shadow-md'
                : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="h-32 bg-slate-100 dark:bg-slate-900 rounded-xl mb-3 flex items-center justify-center border border-slate-200/50 dark:border-slate-700/50">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{tpl.name}</h4>
            <p className="text-xs text-slate-500 mt-1">{tpl.description}</p>
          </div>
        ))}
      </div>

      {/* Controls Bar for Editor vs Preview */}
      <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
        <div className="flex gap-1 p-0.5 bg-slate-100 dark:bg-slate-950 rounded-lg">
          <button
            onClick={() => setPreviewMode('editor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${previewMode === 'editor' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Edit3 className="w-3.5 h-3.5 inline mr-1" /> Editor Only
          </button>
          <button
            onClick={() => setPreviewMode('split')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer hidden md:block ${previewMode === 'split' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Split View
          </button>
          <button
            onClick={() => setPreviewMode('preview')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${previewMode === 'preview' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Eye className="w-3.5 h-3.5 inline mr-1" /> Preview Only
          </button>
        </div>

        {/* Upload Zone */}
        <label className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-950 text-slate-700 dark:text-slate-300 rounded-lg cursor-pointer transition-colors border border-slate-200/40 dark:border-slate-800">
          <UploadCloud className="w-3.5 h-3.5" />
          <span>Upload Resume</span>
          <input type="file" onChange={handleUpload} className="hidden" accept=".pdf,.doc,.docx,.txt" />
        </label>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Editor panel */}
        {(previewMode === 'editor' || previewMode === 'split') && (
          <Card className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3">Edit Resume Sections</h3>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Contact Parameters</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Name" value={resume.personalInfo.name} onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, name: e.target.value } })} />
                <Input label="Professional Title" value={resume.personalInfo.title} onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, title: e.target.value } })} />
                <Input label="Email" value={resume.personalInfo.email} onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, email: e.target.value } })} />
                <Input label="Location" value={resume.personalInfo.location} onChange={(e) => setResume({ ...resume, personalInfo: { ...resume.personalInfo, location: e.target.value } })} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Professional Summary</label>
              <textarea
                rows={4}
                value={resume.summary}
                onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white"
              />
            </div>

            {/* Experience Bullets Edit */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work achievements</h4>
              {resume.experience.map((exp) => (
                <div key={exp.id} className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="flex justify-between items-center">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-slate-400">{exp.company} — {exp.role}</h5>
                  </div>
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <input
                      key={bulletIdx}
                      type="text"
                      value={bullet}
                      onChange={(e) => {
                        const newExp = resume.experience.map(item => {
                          if (item.id === exp.id) {
                            const newBullets = [...item.bullets];
                            newBullets[bulletIdx] = e.target.value;
                            return { ...item, bullets: newBullets };
                          }
                          return item;
                        });
                        setResume({ ...resume, experience: newExp });
                      }}
                      className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 dark:text-white"
                    />
                  ))}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Live Preview Panel */}
        {(previewMode === 'preview' || previewMode === 'split') && (
          <Card padding={false} className="border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/40 min-h-[500px] p-8 overflow-y-auto">
            {/* Realtime formatted resume mock matching the selected template */}
            <div className="space-y-6 text-slate-800 dark:text-slate-200 font-serif">
              {/* Header */}
              <div className="text-center space-y-2 border-b-2 pb-4" style={{ borderColor: resumeTemplates.find(t => t.id === selectedTemplate)?.color || '#2563EB' }}>
                <h2 className="text-2xl font-black font-sans uppercase tracking-wide text-slate-900 dark:text-white">{resume.personalInfo.name}</h2>
                <p className="text-xs font-semibold font-sans tracking-wide text-slate-500 uppercase">{resume.personalInfo.title}</p>
                <div className="text-[11px] font-sans text-slate-500 flex justify-center gap-3">
                  <span>{resume.personalInfo.email}</span>
                  <span>•</span>
                  <span>{resume.personalInfo.phone}</span>
                  <span>•</span>
                  <span>{resume.personalInfo.location}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold font-sans uppercase tracking-wider text-slate-900 dark:text-white">Summary</h4>
                <p className="text-xs leading-relaxed italic">{resume.summary}</p>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold font-sans uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/50 pb-1">Experience</h4>
                {resume.experience.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold font-sans text-slate-900 dark:text-white">
                      <span>{exp.company}</span>
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-500 font-medium italic">
                      <span>{exp.role}</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc pl-4 text-xs space-y-1 leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-bold font-sans uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/50 pb-1">Education</h4>
                {resume.education.map((edu) => (
                  <div key={edu.id} className="text-xs">
                    <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                      <span>{edu.school}</span>
                      <span>{edu.year}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex justify-between">
                      <span>{edu.degree}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold font-sans uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-200/50 pb-1">Technical Skills</h4>
                <p className="text-xs font-sans">
                  <strong>Skills:</strong> {resume.skills.join(', ')}
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
