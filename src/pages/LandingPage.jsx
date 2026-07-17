import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap, ArrowRight, Shield, Award, Sparkles, FileText, Target,
  PenTool, BarChart3, Search, MessageSquare, ChevronRight, Menu, X, Sun, Moon
} from 'lucide-react';
import { testimonials, landingFeatures } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function LandingPage() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const iconMap = {
    FileText: FileText,
    Target: Target,
    PenTool: PenTool,
    BarChart3: BarChart3,
    Search: Search,
    MessageCircle: MessageSquare
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            AI JobAssistent
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
          <a href="#benefits" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Benefits</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Success Stories</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-500" />}
          </button>
          <Button variant="ghost" onClick={() => navigate('/login')}>Sign In</Button>
          <Button variant="primary" onClick={() => navigate('/register')}>Get Started Free</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 z-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xl space-y-4"
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-600 dark:text-slate-400">Features</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-600 dark:text-slate-400">Benefits</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-600 dark:text-slate-400">Success Stories</a>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
              <Button variant="ghost" onClick={() => navigate('/login')}>Sign In</Button>
              <Button variant="primary" onClick={() => navigate('/register')}>Get Started Free</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden max-w-7xl mx-auto px-6">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] ml-32 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-xs font-semibold text-blue-600 dark:text-blue-400"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Career Platform</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Supercharge Your Job Search with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Create matching ATS resumes, customize applications instantly, write compelling cover letters, and track your interviews with our all-in-one SaaS helper.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" iconRight={ArrowRight} onClick={() => navigate('/register')}>
              Build Your Resume Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
              Explore Recommendations
            </Button>
          </motion.div>

          {/* Product Preview Mockup */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 p-2 bg-slate-100/50 dark:bg-slate-900/50 backdrop-blur-md shadow-2xl">
              <div className="bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 aspect-[16/9] flex items-center justify-center text-slate-400">
                <div className="space-y-4 text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Candidate Portal Preview</h3>
                  <p className="text-sm max-w-md text-slate-500">Interactive live resume templates, real-time matching metrics, and clean application pipelines await inside.</p>
                  <Button variant="outline" size="sm" onClick={() => navigate('/login')}>Launch Demo App</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* AI Features Grid */}
      <section id="features" className="py-20 lg:py-32 border-t border-slate-200/60 dark:border-slate-900/60 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">Designed to bypass modern ATS software</h2>
          <p className="text-slate-600 dark:text-slate-400">Use state-of-the-art AI tooling built with recruitment standards in mind to land your target offers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingFeatures.map((feat, i) => {
            const Icon = iconMap[feat.icon] || Sparkles;
            return (
              <Card key={i} hover glass className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100/30 dark:border-blue-900/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feat.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Overview */}
      <section id="benefits" className="py-20 lg:py-32 border-t border-slate-200/60 dark:border-slate-900/60 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Get an unfair advantage in your professional growth
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              Our advanced matching intelligence processes your background profile against job descriptions, identifying key skill shortages and suggesting real additions to raise your match potential.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Live ATS Keyword Tailoring</h4>
                  <p className="text-sm text-slate-500">Inject keywords into your profile immediately before downloading templates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Auto-generated Custom Letters</h4>
                  <p className="text-sm text-slate-500">Stop drafting templates by hand. Auto-align tone and length in one click.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-1">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Unified Application Funnel</h4>
                  <p className="text-sm text-slate-500">Manage all workflows across recruiter stages with dynamic status updates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">ANALYSIS RADAR</span>
              <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-semibold text-emerald-500">92% MATCH</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs font-semibold">React Architecture</span>
                  <span className="text-xs font-bold text-emerald-500">100% Match</span>
                </div>
                <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs font-semibold">TypeScript Integration</span>
                  <span className="text-xs font-bold text-emerald-500">100% Match</span>
                </div>
                <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs font-semibold">GCP Services</span>
                  <span className="text-xs font-bold text-amber-500">Missing Profile Skill</span>
                </div>
                <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-1/4" />
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-300/40 dark:border-slate-700/40 text-center">
              <Button size="sm" variant="primary" onClick={() => navigate('/login')}>Optimize Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32 border-t border-slate-200/60 dark:border-slate-900/60 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Trusted by successful candidates</h2>
          <p className="text-slate-600 dark:text-slate-400">Discover how engineers, managers, and designers boosted their application conversion rates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <Card key={test.id} className="flex flex-col justify-between space-y-6">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">"{test.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{test.name}</h4>
                  <p className="text-xs text-slate-500">{test.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-indigo-900 text-white text-center rounded-3xl max-w-7xl mx-auto px-6 my-16 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Ready to Land Your Next Role?</h2>
          <p className="text-lg text-blue-100">Join thousands of career seekers applying smarter, tailoring faster, and getting hired.</p>
          <Button size="lg" variant="success" onClick={() => navigate('/register')} className="shadow-none">
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200/60 dark:border-slate-900/60 max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-800 dark:text-white text-lg">AI JobAssistent</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
            <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
            <a href="#benefits" className="hover:text-blue-500 transition-colors">Benefits</a>
            <a href="#testimonials" className="hover:text-blue-500 transition-colors">Success Stories</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          </div>

          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} AI JobAssistent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
