import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ResumeBuilderPage from './pages/ResumeBuilderPage';
import JobsPage from './pages/JobsPage';
import JobAnalysisPage from './pages/JobAnalysisPage';
import ResumeTailoringPage from './pages/ResumeTailoringPage';
import CoverLetterPage from './pages/CoverLetterPage';
import ApplicationsPage from './pages/ApplicationsPage';
import NotificationsPage from './pages/NotificationsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard/Core Routes (Wrapped in DashboardLayout) */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/resume-builder" element={<ResumeBuilderPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/job-analysis" element={<JobAnalysisPage />} />
          <Route path="/resume-tailoring" element={<ResumeTailoringPage />} />
          <Route path="/cover-letter" element={<CoverLetterPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
