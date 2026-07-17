// ============================================================
// Mock Data — AI-Powered Intelligent Job Application Assistant
// ============================================================

export const userData = {
  name: 'Alex Morgan',
  email: 'alex.morgan@email.com',
  avatar: null,
  initials: 'AM',
  role: 'Full Stack Developer',
  location: 'San Francisco, CA',
  phone: '+1 (555) 234-5678',
  bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud architecture.',
  profileCompletion: 78,
  resumeScore: 85,
  joinedDate: '2024-01-15',
};

export const dashboardStats = [
  { label: 'Total Applications', value: 24, change: '+3 this week', icon: 'Send', color: 'blue' },
  { label: 'Interviews', value: 5, change: '+2 scheduled', icon: 'Calendar', color: 'green' },
  { label: 'Profile Views', value: 142, change: '+18% this month', icon: 'Eye', color: 'purple' },
  { label: 'Resume Score', value: '85%', change: '+5 pts improved', icon: 'FileText', color: 'amber' },
];

export const aiSuggestions = [
  { id: 1, text: 'Add 2 more projects to boost your profile by 12%', type: 'improvement', icon: 'Lightbulb' },
  { id: 2, text: 'Your resume is missing key ATS keywords for "React Developer" roles', type: 'warning', icon: 'AlertTriangle' },
  { id: 3, text: '3 new jobs matching your profile posted today', type: 'opportunity', icon: 'Briefcase' },
  { id: 4, text: 'Consider adding AWS certifications — 67% of matching jobs require it', type: 'skill', icon: 'Award' },
];

export const recentApplications = [
  { id: 1, company: 'Google', role: 'Senior Frontend Engineer', date: '2024-03-15', status: 'Interview Scheduled', logo: 'G' },
  { id: 2, company: 'Stripe', role: 'Full Stack Developer', date: '2024-03-12', status: 'Under Review', logo: 'S' },
  { id: 3, company: 'Vercel', role: 'React Developer', date: '2024-03-10', status: 'Applied', logo: 'V' },
  { id: 4, company: 'Netflix', role: 'UI Engineer', date: '2024-03-08', status: 'Shortlisted', logo: 'N' },
  { id: 5, company: 'Airbnb', role: 'Frontend Architect', date: '2024-03-05', status: 'Rejected', logo: 'A' },
];

export const interviewNotifications = [
  { id: 1, company: 'Google', role: 'Senior Frontend Engineer', date: 'Mar 20, 2024', time: '10:00 AM PST', type: 'Technical Round', daysLeft: 3 },
  { id: 2, company: 'Netflix', role: 'UI Engineer', date: 'Mar 22, 2024', time: '2:00 PM PST', type: 'System Design', daysLeft: 5 },
];

export const jobRecommendations = [
  {
    id: 1, company: 'Google', role: 'Senior Frontend Engineer', salary: '$180K - $250K',
    location: 'Mountain View, CA', type: 'Full-time', remote: 'Hybrid',
    skills: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'GCP'],
    matchPercent: 92, posted: '2 days ago', logo: 'G',
    description: 'Join Google\'s core team building next-generation web applications used by billions of users worldwide.',
  },
  {
    id: 2, company: 'Stripe', role: 'Full Stack Developer', salary: '$160K - $220K',
    location: 'San Francisco, CA', type: 'Full-time', remote: 'Remote',
    skills: ['React', 'Ruby', 'PostgreSQL', 'AWS', 'REST APIs'],
    matchPercent: 87, posted: '1 day ago', logo: 'S',
    description: 'Help build the economic infrastructure of the internet at Stripe.',
  },
  {
    id: 3, company: 'Vercel', role: 'React Developer', salary: '$150K - $200K',
    location: 'Remote', type: 'Full-time', remote: 'Remote',
    skills: ['Next.js', 'React', 'TypeScript', 'Vercel', 'Edge Functions'],
    matchPercent: 95, posted: '3 hours ago', logo: 'V',
    description: 'Build the future of frontend development and deployment infrastructure.',
  },
  {
    id: 4, company: 'Netflix', role: 'UI Engineer', salary: '$170K - $240K',
    location: 'Los Gatos, CA', type: 'Full-time', remote: 'Hybrid',
    skills: ['React', 'JavaScript', 'CSS', 'A/B Testing', 'Performance'],
    matchPercent: 84, posted: '5 days ago', logo: 'N',
    description: 'Create world-class UI experiences for 200M+ Netflix subscribers.',
  },
  {
    id: 5, company: 'Airbnb', role: 'Frontend Architect', salary: '$190K - $260K',
    location: 'San Francisco, CA', type: 'Full-time', remote: 'Hybrid',
    skills: ['React', 'TypeScript', 'Design Systems', 'Webpack', 'Testing'],
    matchPercent: 79, posted: '1 week ago', logo: 'A',
    description: 'Lead frontend architecture decisions for Airbnb\'s design system.',
  },
  {
    id: 6, company: 'Shopify', role: 'Senior React Developer', salary: '$140K - $190K',
    location: 'Remote', type: 'Full-time', remote: 'Remote',
    skills: ['React', 'GraphQL', 'Polaris', 'Ruby on Rails', 'TypeScript'],
    matchPercent: 88, posted: '4 days ago', logo: 'Sh',
    description: 'Help millions of merchants build and scale their online businesses.',
  },
  {
    id: 7, company: 'Meta', role: 'Software Engineer - Web', salary: '$175K - $245K',
    location: 'Menlo Park, CA', type: 'Full-time', remote: 'Hybrid',
    skills: ['React', 'Relay', 'GraphQL', 'Hack', 'Performance'],
    matchPercent: 81, posted: '6 days ago', logo: 'M',
    description: 'Build products that connect billions of people around the world.',
  },
  {
    id: 8, company: 'Figma', role: 'Frontend Engineer', salary: '$155K - $210K',
    location: 'San Francisco, CA', type: 'Full-time', remote: 'Hybrid',
    skills: ['React', 'TypeScript', 'WebGL', 'Canvas API', 'Rust'],
    matchPercent: 76, posted: '2 weeks ago', logo: 'F',
    description: 'Help build the collaborative design tool used by millions of designers.',
  },
];

export const jobAnalysisData = {
  job: jobRecommendations[0],
  requiredSkills: [
    { name: 'React', matched: true, level: 'Expert' },
    { name: 'TypeScript', matched: true, level: 'Advanced' },
    { name: 'GraphQL', matched: true, level: 'Intermediate' },
    { name: 'Node.js', matched: true, level: 'Advanced' },
    { name: 'GCP', matched: false, level: 'Intermediate' },
    { name: 'Kubernetes', matched: false, level: 'Basic' },
    { name: 'CI/CD', matched: true, level: 'Intermediate' },
    { name: 'Testing', matched: true, level: 'Advanced' },
  ],
  missingSkills: [
    { name: 'GCP', suggestion: 'Google Cloud Platform certification on Coursera (40 hours)', priority: 'High' },
    { name: 'Kubernetes', suggestion: 'Kubernetes Fundamentals on Linux Foundation (30 hours)', priority: 'Medium' },
  ],
  responsibilities: [
    'Design and implement scalable frontend architectures for web applications',
    'Collaborate with UX designers to translate designs into pixel-perfect implementations',
    'Optimize web performance and core web vitals for billions of users',
    'Mentor junior engineers and conduct code reviews',
    'Contribute to internal design systems and component libraries',
    'Write comprehensive unit and integration tests',
  ],
  experienceNeeded: {
    required: '5+ years',
    userHas: '5 years',
    match: true,
    details: 'Your experience aligns well with the requirement. Highlight your leadership and mentoring experience.',
  },
  atsKeywords: [
    'React', 'TypeScript', 'JavaScript', 'GraphQL', 'REST API', 'GCP', 'Cloud Computing',
    'Frontend Architecture', 'Design Systems', 'Performance Optimization', 'A/B Testing',
    'Unit Testing', 'CI/CD', 'Agile', 'Scrum', 'Code Review', 'Mentoring',
  ],
};

export const resumeData = {
  personalInfo: {
    name: 'Alex Morgan',
    title: 'Senior Full Stack Developer',
    email: 'alex.morgan@email.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/alexmorgan',
    github: 'github.com/alexmorgan',
    website: 'alexmorgan.dev',
  },
  summary: 'Results-driven Full Stack Developer with 5+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about creating exceptional user experiences and leading engineering teams.',
  experience: [
    {
      id: 1, company: 'TechCorp Inc.', role: 'Senior Full Stack Developer',
      duration: 'Jan 2022 - Present', location: 'San Francisco, CA',
      bullets: [
        'Led development of a microservices architecture serving 2M+ daily active users',
        'Reduced page load time by 40% through code splitting and lazy loading optimizations',
        'Mentored a team of 5 junior developers and established code review processes',
        'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      ],
    },
    {
      id: 2, company: 'StartupXYZ', role: 'Full Stack Developer',
      duration: 'Jun 2019 - Dec 2021', location: 'Remote',
      bullets: [
        'Built a real-time collaboration platform using React, Socket.io, and Node.js',
        'Designed and implemented RESTful APIs serving 500K+ requests/day',
        'Integrated third-party payment systems processing $2M+ monthly transactions',
        'Achieved 98% test coverage with comprehensive unit and integration testing',
      ],
    },
  ],
  education: [
    { id: 1, school: 'University of California, Berkeley', degree: 'B.S. Computer Science', year: '2015 - 2019', gpa: '3.8/4.0' },
  ],
  skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'GraphQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma'],
  certifications: [
    { id: 1, name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { id: 2, name: 'Google Professional Cloud Developer', issuer: 'Google', year: '2022' },
  ],
  projects: [
    { id: 1, name: 'OpenDash', description: 'Open-source analytics dashboard with real-time data visualization', tech: ['React', 'D3.js', 'Node.js'], link: 'github.com/alexmorgan/opendash' },
    { id: 2, name: 'DevFlow', description: 'Developer productivity tool with Git integration and task management', tech: ['Next.js', 'Prisma', 'PostgreSQL'], link: 'github.com/alexmorgan/devflow' },
  ],
};

export const profileSections = {
  personalDetails: { ...resumeData.personalInfo, bio: userData.bio },
  education: resumeData.education,
  experience: resumeData.experience,
  projects: resumeData.projects,
  skills: resumeData.skills.map((s, i) => ({ id: i + 1, name: s, level: i < 4 ? 'Expert' : i < 8 ? 'Advanced' : 'Intermediate' })),
  certifications: resumeData.certifications,
  careerPreferences: {
    jobType: 'Full-time',
    expectedSalary: '$150K - $200K',
    preferredLocations: ['San Francisco, CA', 'New York, NY', 'Remote'],
    remotePreference: 'Hybrid',
    noticePeriod: '2 weeks',
    industries: ['Technology', 'Finance', 'Healthcare'],
  },
  socialLinks: {
    linkedin: 'linkedin.com/in/alexmorgan',
    github: 'github.com/alexmorgan',
    portfolio: 'alexmorgan.dev',
    twitter: 'twitter.com/alexmorgan',
  },
};

export const coverLetterData = {
  content: `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Frontend Engineer position at Google. With over 5 years of experience in building scalable web applications and a deep expertise in React, TypeScript, and modern frontend architecture, I am confident that my skills and passion align perfectly with this role.

In my current position at TechCorp Inc., I have led the development of a microservices architecture serving over 2 million daily active users, reduced page load times by 40%, and established robust CI/CD pipelines. These experiences have honed my ability to deliver high-performance, user-centric solutions at scale — a core requirement for this role at Google.

What excites me most about this opportunity is the chance to build products that impact billions of users worldwide. Google's commitment to engineering excellence and innovation resonates deeply with my professional values. I am particularly drawn to the team's focus on performance optimization and design systems, areas where I have demonstrated significant impact.

My technical proficiency in React, TypeScript, GraphQL, and Node.js, combined with my experience mentoring junior engineers and driving architectural decisions, positions me well to contribute meaningfully to your team from day one.

I would welcome the opportunity to discuss how my background and skills can contribute to Google's mission. Thank you for considering my application.

Best regards,
Alex Morgan`,
  tone: 'Professional',
  wordCount: 218,
};

export const resumeTailoringData = {
  original: {
    summary: 'Results-driven Full Stack Developer with 5+ years of experience building scalable web applications.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'GraphQL'],
    experienceBullets: [
      'Led development of a microservices architecture',
      'Reduced page load time by 40%',
      'Mentored a team of 5 junior developers',
    ],
  },
  improvements: [
    { type: 'added', text: 'Added ATS-optimized keywords: "Frontend Architecture", "Performance Optimization", "Design Systems"' },
    { type: 'modified', text: 'Enhanced summary to highlight leadership and Google-specific qualifications' },
    { type: 'added', text: 'Quantified achievements with specific metrics and impact statements' },
    { type: 'reordered', text: 'Prioritized most relevant experience and skills for this role' },
    { type: 'removed', text: 'Removed less relevant backend-heavy descriptions' },
  ],
  tailored: {
    summary: 'Senior Frontend Engineer with 5+ years of experience building scalable, high-performance web applications for millions of users. Expert in React, TypeScript, and frontend architecture with a proven track record of optimizing core web vitals and leading engineering teams.',
    skills: ['React', 'TypeScript', 'GraphQL', 'Frontend Architecture', 'Performance Optimization', 'Design Systems', 'GCP', 'Node.js', 'CI/CD', 'A/B Testing'],
    experienceBullets: [
      'Architected and led development of a microservices-based frontend serving 2M+ daily active users with 99.9% uptime',
      'Optimized core web vitals, reducing page load time by 40% and improving Lighthouse score from 72 to 96',
      'Mentored 5 junior engineers, establishing code review processes that reduced production bugs by 35%',
      'Built reusable component library with 50+ components, adopted across 3 product teams',
    ],
  },
};

export const applications = [
  { id: 1, company: 'Google', role: 'Senior Frontend Engineer', date: '2024-03-15', status: 'Interview Scheduled', logo: 'G', salary: '$180K - $250K', interviewDate: 'Mar 20, 2024' },
  { id: 2, company: 'Stripe', role: 'Full Stack Developer', date: '2024-03-12', status: 'Under Review', logo: 'S', salary: '$160K - $220K' },
  { id: 3, company: 'Vercel', role: 'React Developer', date: '2024-03-10', status: 'Applied', logo: 'V', salary: '$150K - $200K' },
  { id: 4, company: 'Netflix', role: 'UI Engineer', date: '2024-03-08', status: 'Shortlisted', logo: 'N', salary: '$170K - $240K' },
  { id: 5, company: 'Airbnb', role: 'Frontend Architect', date: '2024-03-05', status: 'Rejected', logo: 'A', salary: '$190K - $260K' },
  { id: 6, company: 'Shopify', role: 'Senior React Developer', date: '2024-03-03', status: 'Selected', logo: 'Sh', salary: '$140K - $190K' },
  { id: 7, company: 'Meta', role: 'Software Engineer - Web', date: '2024-03-01', status: 'Under Review', logo: 'M', salary: '$175K - $245K' },
  { id: 8, company: 'Figma', role: 'Frontend Engineer', date: '2024-02-28', status: 'Applied', logo: 'F', salary: '$155K - $210K' },
  { id: 9, company: 'Slack', role: 'React Engineer', date: '2024-02-25', status: 'Interview Scheduled', logo: 'Sl', salary: '$145K - $195K', interviewDate: 'Mar 22, 2024' },
  { id: 10, company: 'Notion', role: 'Frontend Developer', date: '2024-02-20', status: 'Shortlisted', logo: 'No', salary: '$150K - $210K' },
];

export const applicationStatuses = ['Applied', 'Under Review', 'Shortlisted', 'Interview Scheduled', 'Selected', 'Rejected'];

export const notifications = [
  { id: 1, type: 'interview', title: 'Interview Invitation — Google', description: 'You have been invited for a Technical Round interview for Senior Frontend Engineer position.', time: '2 hours ago', read: false, icon: 'Calendar' },
  { id: 2, type: 'hr', title: 'Message from Stripe HR', description: 'Hi Alex, we loved your application! We would like to schedule a quick call to discuss the role.', time: '5 hours ago', read: false, icon: 'MessageSquare' },
  { id: 3, type: 'update', title: 'Application Update — Netflix', description: 'Your application for UI Engineer has been shortlisted. Next steps will follow soon.', time: '1 day ago', read: true, icon: 'Bell' },
  { id: 4, type: 'interview', title: 'Interview Reminder — Slack', description: 'Your System Design interview with Slack is scheduled for March 22, 2024 at 2:00 PM PST.', time: '1 day ago', read: true, icon: 'Clock' },
  { id: 5, type: 'update', title: 'Application Received — Vercel', description: 'Your application for React Developer position has been successfully submitted.', time: '2 days ago', read: true, icon: 'CheckCircle' },
  { id: 6, type: 'hr', title: 'Message from Netflix Recruiter', description: 'Thank you for your patience. We are currently reviewing applications and will update you shortly.', time: '3 days ago', read: true, icon: 'MessageSquare' },
  { id: 7, type: 'update', title: 'Application Rejected — Airbnb', description: 'Unfortunately, we have decided to move forward with other candidates for the Frontend Architect role.', time: '5 days ago', read: true, icon: 'XCircle' },
  { id: 8, type: 'interview', title: 'Interview Completed — Google', description: 'Thank you for completing the phone screen. Results will be shared within 3-5 business days.', time: '1 week ago', read: true, icon: 'CheckCircle' },
];

export const testimonials = [
  { id: 1, name: 'Sarah Chen', role: 'Software Engineer at Google', text: 'This tool helped me tailor my resume for each application. I landed 3x more interviews within the first month!', avatar: 'SC' },
  { id: 2, name: 'Marcus Johnson', role: 'Product Manager at Meta', text: 'The AI cover letter generator saved me hours of work. Every letter was perfectly customized for the role.', avatar: 'MJ' },
  { id: 3, name: 'Priya Sharma', role: 'Data Scientist at Netflix', text: 'The ATS analysis feature is a game-changer. I finally understood why my applications were getting filtered out.', avatar: 'PS' },
];

export const landingFeatures = [
  { title: 'AI Resume Builder', description: 'Create ATS-optimized resumes with intelligent suggestions and real-time scoring.', icon: 'FileText' },
  { title: 'Smart Job Matching', description: 'AI-powered job recommendations based on your skills, experience, and preferences.', icon: 'Target' },
  { title: 'Cover Letter Generator', description: 'Generate tailored cover letters for every application in seconds.', icon: 'PenTool' },
  { title: 'Application Tracker', description: 'Track all your applications in one place with real-time status updates.', icon: 'BarChart3' },
  { title: 'ATS Analysis', description: 'Analyze job postings and optimize your resume to pass ATS filters.', icon: 'Search' },
  { title: 'Interview Prep', description: 'Get AI-powered interview preparation based on the job description.', icon: 'MessageCircle' },
];

export const resumeTemplates = [
  { id: 1, name: 'Professional', description: 'Clean, traditional layout perfect for corporate roles', color: '#2563EB' },
  { id: 2, name: 'Modern', description: 'Contemporary design with accent colors and modern typography', color: '#8B5CF6' },
  { id: 3, name: 'Minimal', description: 'Sleek, minimalist design focused on content and readability', color: '#0F172A' },
  { id: 4, name: 'Creative', description: 'Bold layout with visual elements for creative roles', color: '#EC4899' },
];
