import { useState } from 'react';
import {
  User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Link as LinkIcon,
  Plus, Trash2, CheckCircle2, ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { profileSections } from '../data/mockData';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('personal');
  const [details, setDetails] = useState(profileSections.personalDetails);
  const [education, setEducation] = useState(profileSections.education);
  const [experience, setExperience] = useState(profileSections.experience);
  const [projects, setProjects] = useState(profileSections.projects);
  const [skills, setSkills] = useState(profileSections.skills);
  const [certifications, setCertifications] = useState(profileSections.certifications);
  const [preferences, setPreferences] = useState(profileSections.careerPreferences);
  const [socials, setSocials] = useState(profileSections.socialLinks);

  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const triggerSave = () => {
    setSaving(true);
    setSavedMessage('');
    setTimeout(() => {
      setSaving(false);
      setSavedMessage('Changes saved to Master Profile successfully!');
      setTimeout(() => setSavedMessage(''), 3000);
    }, 1000);
  };

  // Personal details handler
  const handleDetailsChange = (key, val) => {
    setDetails(prev => ({ ...prev, [key]: val }));
  };

  // Education helpers
  const addEducation = () => {
    setEducation(prev => [...prev, { id: Date.now(), school: '', degree: '', year: '', gpa: '' }]);
  };
  const removeEducation = (id) => {
    setEducation(prev => prev.filter(item => item.id !== id));
  };
  const updateEducation = (id, key, val) => {
    setEducation(prev => prev.map(item => item.id === id ? { ...item, [key]: val } : item));
  };

  // Experience helpers
  const addExperience = () => {
    setExperience(prev => [...prev, { id: Date.now(), company: '', role: '', duration: '', location: '', bullets: [''] }]);
  };
  const removeExperience = (id) => {
    setExperience(prev => prev.filter(item => item.id !== id));
  };
  const updateExperience = (id, key, val) => {
    setExperience(prev => prev.map(item => item.id === id ? { ...item, [key]: val } : item));
  };
  const addExperienceBullet = (expId) => {
    setExperience(prev => prev.map(item => item.id === expId ? { ...item, bullets: [...item.bullets, ''] } : item));
  };
  const updateExperienceBullet = (expId, bIdx, val) => {
    setExperience(prev => prev.map(item => {
      if (item.id === expId) {
        const newBullets = [...item.bullets];
        newBullets[bIdx] = val;
        return { ...item, bullets: newBullets };
      }
      return item;
    }));
  };
  const removeExperienceBullet = (expId, bIdx) => {
    setExperience(prev => prev.map(item => {
      if (item.id === expId) {
        return { ...item, bullets: item.bullets.filter((_, idx) => idx !== bIdx) };
      }
      return item;
    }));
  };

  // Projects helpers
  const addProject = () => {
    setProjects(prev => [...prev, { id: Date.now(), name: '', description: '', tech: [], link: '' }]);
  };
  const removeProject = (id) => {
    setProjects(prev => prev.filter(item => item.id !== id));
  };
  const updateProject = (id, key, val) => {
    setProjects(prev => prev.map(item => item.id === id ? { ...item, [key]: val } : item));
  };

  // Skills helpers
  const addSkill = () => {
    setSkills(prev => [...prev, { id: Date.now(), name: '', level: 'Intermediate' }]);
  };
  const removeSkill = (id) => {
    setSkills(prev => prev.filter(item => item.id !== id));
  };
  const updateSkill = (id, key, val) => {
    setSkills(prev => prev.map(item => item.id === id ? { ...item, [key]: val } : item));
  };

  // Certifications helpers
  const addCert = () => {
    setCertifications(prev => [...prev, { id: Date.now(), name: '', issuer: '', year: '' }]);
  };
  const removeCert = (id) => {
    setCertifications(prev => prev.filter(item => item.id !== id));
  };
  const updateCert = (id, key, val) => {
    setCertifications(prev => prev.map(item => item.id === id ? { ...item, [key]: val } : item));
  };

  const tabs = [
    { id: 'personal', label: 'Personal & Socials', icon: User },
    { id: 'experience', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education & Certs', icon: GraduationCap },
    { id: 'skills', label: 'Skills & Projects', icon: Award },
    { id: 'preferences', label: 'Career Prefs', icon: ChevronRight },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Master Candidate Profile</h2>
        <p className="text-sm text-slate-500">Add details here to synchronize resume drafts and cover letter parameters automatically.</p>
      </div>

      {savedMessage && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-500 font-semibold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-800/50'
              }`}
            >
              <tab.icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          ))}

          <Button onClick={triggerSave} loading={saving} className="w-full mt-6">
            Save Profile
          </Button>
        </div>

        {/* Content Panels */}
        <div className="lg:col-span-3">
          <Card>
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3">Personal details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Full Name" value={details.name} onChange={(e) => handleDetailsChange('name', e.target.value)} />
                  <Input label="Professional Title" value={details.title} onChange={(e) => handleDetailsChange('title', e.target.value)} />
                  <Input label="Email Address" icon={Mail} value={details.email} onChange={(e) => handleDetailsChange('email', e.target.value)} />
                  <Input label="Phone Number" icon={Phone} value={details.phone} onChange={(e) => handleDetailsChange('phone', e.target.value)} />
                  <Input label="Location" icon={MapPin} value={details.location} onChange={(e) => handleDetailsChange('location', e.target.value)} />
                  <Input label="Portfolio Website" icon={LinkIcon} value={details.website} onChange={(e) => handleDetailsChange('website', e.target.value)} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Professional Bio</label>
                  <textarea
                    rows={4}
                    value={details.bio}
                    onChange={(e) => handleDetailsChange('bio', e.target.value)}
                    className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3 pt-4">Social Accounts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="LinkedIn URL" icon={LinkIcon} value={socials.linkedin} onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })} />
                  <Input label="GitHub URL" icon={LinkIcon} value={socials.github} onChange={(e) => setSocials({ ...socials, github: e.target.value })} />
                  <Input label="Twitter URL" icon={LinkIcon} value={socials.twitter} onChange={(e) => setSocials({ ...socials, twitter: e.target.value })} />
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Work history</h3>
                  <Button size="sm" variant="outline" onClick={addExperience} className="py-1.5"><Plus className="w-3.5 h-3.5" /> Add Job</Button>
                </div>

                {experience.map((item, index) => (
                  <div key={item.id} className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl relative space-y-4">
                    <button
                      onClick={() => removeExperience(item.id)}
                      className="absolute top-4 right-4 p-2 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-red-500 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Entry #{index + 1}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Company Name" value={item.company} onChange={(e) => updateExperience(item.id, 'company', e.target.value)} />
                      <Input label="Role" value={item.role} onChange={(e) => updateExperience(item.id, 'role', e.target.value)} />
                      <Input label="Duration (e.g. Jan 2022 - Present)" value={item.duration} onChange={(e) => updateExperience(item.id, 'duration', e.target.value)} />
                      <Input label="Location" value={item.location} onChange={(e) => updateExperience(item.id, 'location', e.target.value)} />
                    </div>

                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Achievements / Bullets</label>
                        <Button size="sm" variant="ghost" onClick={() => addExperienceBullet(item.id)} className="py-1 text-xs"><Plus className="w-3 h-3" /> Add bullet</Button>
                      </div>
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-2 items-center">
                          <input
                            type="text"
                            value={bullet}
                            onChange={(e) => updateExperienceBullet(item.id, bIdx, e.target.value)}
                            placeholder="Mentored junior engineers and optimized React performance..."
                            className="flex-1 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white"
                          />
                          <button
                            onClick={() => removeExperienceBullet(item.id, bIdx)}
                            className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 rounded-xl cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Education details</h3>
                  <Button size="sm" variant="outline" onClick={addEducation} className="py-1.5"><Plus className="w-3.5 h-3.5" /> Add Education</Button>
                </div>

                {education.map((item, index) => (
                  <div key={item.id} className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl relative space-y-4">
                    <button
                      onClick={() => removeEducation(item.id)}
                      className="absolute top-4 right-4 p-2 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-red-500 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Institution #{index + 1}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="School Name" value={item.school} onChange={(e) => updateEducation(item.id, 'school', e.target.value)} />
                      <Input label="Degree & Major" value={item.degree} onChange={(e) => updateEducation(item.id, 'degree', e.target.value)} />
                      <Input label="Academic Year (e.g. 2015 - 2019)" value={item.year} onChange={(e) => updateEducation(item.id, 'year', e.target.value)} />
                      <Input label="GPA (Optional)" value={item.gpa} onChange={(e) => updateEducation(item.id, 'gpa', e.target.value)} />
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3 pt-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Certifications</h3>
                  <Button size="sm" variant="outline" onClick={addCert} className="py-1.5"><Plus className="w-3.5 h-3.5" /> Add Cert</Button>
                </div>

                {certifications.map((item, index) => (
                  <div key={item.id} className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl relative space-y-4">
                    <button
                      onClick={() => removeCert(item.id)}
                      className="absolute top-4 right-4 p-2 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-red-500 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input label="Certificate Name" value={item.name} onChange={(e) => updateCert(item.id, 'name', e.target.value)} />
                      <Input label="Issuer Organization" value={item.issuer} onChange={(e) => updateCert(item.id, 'issuer', e.target.value)} />
                      <Input label="Year Issued" value={item.year} onChange={(e) => updateCert(item.id, 'year', e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-8">
                <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Skills Matrix</h3>
                  <Button size="sm" variant="outline" onClick={addSkill} className="py-1.5"><Plus className="w-3.5 h-3.5" /> Add Skill</Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((item) => (
                    <div key={item.id} className="flex gap-2 items-center p-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/50">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateSkill(item.id, 'name', e.target.value)}
                        placeholder="React / Go / GCP..."
                        className="flex-1 bg-transparent text-sm focus:outline-none text-slate-900 dark:text-white font-medium pl-2"
                      />
                      <select
                        value={item.level}
                        onChange={(e) => updateSkill(item.id, 'level', e.target.value)}
                        className="text-xs bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700 p-1.5 outline-none cursor-pointer"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <button
                        onClick={() => removeSkill(item.id)}
                        className="p-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-red-500 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3 pt-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Highlighted Projects</h3>
                  <Button size="sm" variant="outline" onClick={addProject} className="py-1.5"><Plus className="w-3.5 h-3.5" /> Add Project</Button>
                </div>

                {projects.map((item, index) => (
                  <div key={item.id} className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl relative space-y-4">
                    <button
                      onClick={() => removeProject(item.id)}
                      className="absolute top-4 right-4 p-2 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 dark:hover:bg-red-950/40 text-red-500 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Project Name" value={item.name} onChange={(e) => updateProject(item.id, 'name', e.target.value)} />
                      <Input label="Deployment Link / Code Repository" value={item.link} onChange={(e) => updateProject(item.id, 'link', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Brief Description</label>
                      <textarea
                        rows={2}
                        value={item.description}
                        onChange={(e) => updateProject(item.id, 'description', e.target.value)}
                        className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200/60 dark:border-slate-800/60 pb-3">Career Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Target Job Type</label>
                    <select
                      value={preferences.jobType}
                      onChange={(e) => setPreferences({ ...preferences, jobType: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white cursor-pointer"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Part-time">Part-time</option>
                    </select>
                  </div>

                  <Input label="Expected Annual Salary" value={preferences.expectedSalary} onChange={(e) => setPreferences({ ...preferences, expectedSalary: e.target.value })} />

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Remote Policy Preference</label>
                    <select
                      value={preferences.remotePreference}
                      onChange={(e) => setPreferences({ ...preferences, remotePreference: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white cursor-pointer"
                    >
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>

                  <Input label="Notice Period" value={preferences.noticePeriod} onChange={(e) => setPreferences({ ...preferences, noticePeriod: e.target.value })} />
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
