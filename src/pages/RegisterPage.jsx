import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Zap, ArrowRight, Github, Chrome } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-20 pointer-events-none">
        <div className="w-[450px] h-[450px] bg-blue-500 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="w-[350px] h-[350px] bg-purple-500 rounded-full blur-[100px] ml-24 animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card glass className="p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create your account</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Unlock your AI career capabilities</p>
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-500 font-semibold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Alex Morgan"
              icon={User}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="alex.morgan@email.com"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center gap-2 py-1">
              <input type="checkbox" id="terms" required className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" />
              <label htmlFor="terms" className="text-xs text-slate-500 cursor-pointer">
                I agree to the Terms of Service & Privacy Policy
              </label>
            </div>

            <Button type="submit" className="w-full" loading={loading} iconRight={ArrowRight}>
              Sign Up
            </Button>
          </form>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-xs">Or join with</span>
            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer">
              <Chrome className="w-4 h-4 text-red-500" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 rounded-xl py-2.5 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer">
              <Github className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>GitHub</span>
            </button>
          </div>

          <p className="text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-blue-600 hover:text-blue-500">Sign in</Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
