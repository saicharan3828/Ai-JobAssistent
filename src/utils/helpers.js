export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getStatusColor(status) {
  const colors = {
    'Applied': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Under Review': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    'Shortlisted': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'Interview Scheduled': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    'Selected': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Rejected': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };
  return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
}

export function getMatchColor(percent) {
  if (percent >= 90) return 'text-green-500';
  if (percent >= 80) return 'text-blue-500';
  if (percent >= 70) return 'text-amber-500';
  return 'text-red-500';
}

export function getMatchBg(percent) {
  if (percent >= 90) return 'bg-green-500/10 border-green-500/20';
  if (percent >= 80) return 'bg-blue-500/10 border-blue-500/20';
  if (percent >= 70) return 'bg-amber-500/10 border-amber-500/20';
  return 'bg-red-500/10 border-red-500/20';
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

export function getLogoColors(letter) {
  const map = {
    G: 'bg-blue-500', S: 'bg-purple-500', V: 'bg-black dark:bg-white dark:text-black',
    N: 'bg-red-600', A: 'bg-rose-500', Sh: 'bg-green-600',
    M: 'bg-blue-600', F: 'bg-violet-500', Sl: 'bg-purple-700', No: 'bg-black dark:bg-white dark:text-black',
  };
  return map[letter] || 'bg-slate-500';
}
