# Product Requirements Document (PRD)

## Project Name: AI JobAssistent

---

## 1. Product Overview & Vision
**AI JobAssistent** is an intelligent, ATS-centric SaaS web application designed to empower job seekers. The platform simplifies the end-to-end recruitment process by offering tools to generate ATS-optimized resumes, tailor qualifications to specific roles, draft personalized cover letters, evaluate compatibility scores, and manage sent applications.

### Core Objectives
1. **Maximize ATS Success:** Provide tools that help candidates align their resumes with automated Application Tracking Systems.
2. **Accelerate Application Drafting:** Automate the time-consuming tasks of updating achievements and writing cover letters for each job.
3. **Consolidate Job Search:** Merge search, compatibility analysis, and pipeline tracking into a single unified workspace.

---

## 2. Target Audience
- **Active Job Seekers:** Individuals applying to multiple tech or corporate roles looking for custom-tailored assets.
- **Career Switchers:** Candidates needing to align their existing skills with new industry requirements.
- **Freelancers/Contractors:** Professionals managing multiple concurrent job leads and interviews.

---

## 3. Product Architecture & Page Specifications

The platform is composed of 12 primary pages structured as follows:

### 1. Landing Page
- **Purpose:** Public marketing page to acquire users.
- **Features:**
  - Hero Header with dynamic gradients and CTA buttons.
  - Features overview cards with interactive graphics.
  - ATS Compatibility Radar simulator mockup.
  - Testimonial feedback slider.
  - Footer with legal guidelines and sitemap navigation.

### 2. Authentication (Login / Register)
- **Purpose:** Secure entry and onboarding.
- **Features:**
  - Standard email/password forms with validate inputs.
  - Redirection logic to Dashboard.
  - Glassmorphic card theme matching the dark/light scheme.

### 3. Unified Candidate Dashboard
- **Purpose:** The centralized home status feed.
- **Features:**
  - Welcome Banner with user greetings.
  - High-level metric stats cards (Staged Applications, Upcoming Interviews, Profile Completeness, Resume Score).
  - Profile Completion progress bar.
  - ATS rating score gauge.
  - Upcoming interview lists with days-left counters.
  - AI recommendations card.

### 4. Master Profile Workspace
- **Purpose:** The candidate's single source of truth.
- **Features:**
  - Tabbed editing categories: Personal Details, Experience, Education, Projects, Preferences, Social Links.
  - Dynamic addition/deletion lists for work experience achievements, courses, and projects.
  - Auto-saving state indicator.

### 5. Resume Builder
- **Purpose:** Compile and customize resume templates.
- **Features:**
  - ATS-friendly template selector (Professional, Modern, Minimal, Creative).
  - Split-view editor & Live preview panel.
  - Resume file parser mock drag-and-drop zone.
  - Data downloader (export raw parameters).

### 6. Job Search & Fit Score
- **Purpose:** Explore recommendations.
- **Features:**
  - Query search filters by skill keyword or location.
  - Compatibility rating tag based on profile match.
  - Fast-action buttons: "Apply Now" (sets pipeline status) and "Analyze" (opens detailed analysis).

### 7. AI Job Analysis
- **Purpose:** Detailed review of job descriptions.
- **Features:**
  - Required Skills Matrix comparing matched vs missing skills.
  - Specific recommendations for missing topics (Coursera/learning paths).
  - ATS Keyword cloud tag list.
  - Experience level validation checker.

### 8. AI Resume Tailoring
- **Purpose:** Automatically optimize resume sections.
- **Features:**
  - 3-column view: Original Resume -> AI Recommendations -> Tailored Resume.
  - Diff highlight styling.
  - Inline text editor to modify tailored content manually.

### 9. AI Cover Letter Generator
- **Purpose:** Draft personalized application letters.
- **Features:**
  - Selection dropdown linking to active job recommendations.
  - Tone parameter selector (Professional, casual, confident, enthusiastic).
  - Character and word counter.
  - One-click text copying to clipboard.

### 10. Application Pipeline (Kanban Board)
- **Purpose:** Progress tracking funnel.
- **Features:**
  - Kanban columns: Applied, Under Review, Shortlisted, Interview Scheduled, Selected, Rejected.
  - Column card lists displaying company logo, position, and submit dates.
  - Quick status dropdown controls on cards.
  - Visual toggle switcher between Kanban and tabular layout lists.

### 11. Notifications Center
- **Purpose:** Centralized messaging updates.
- **Features:**
  - Group filtering tabs (all messages, unread, interview alerts, hr requests).
  - Delete individual notifications and single-click read triggers.

---

## 4. Technical & Design Constraints

### Technical Stack
- **Frontend Core:** React + Vite (running ESM modules).
- **Styling Framework:** Tailwind CSS v4 (incorporating `@import "tailwindcss"` and custom scrollbar layers).
- **Icons Library:** Lucide React (latest).
- **Animations:** Framer Motion (page entries and status modals).
- **Routing:** React Router v7.

### Design Principles
- **Modern Aesthetics:** Dark mode support using HSL tailwind colors, high-contrast text, glassmorphism borders (`backdrop-blur`), and rounded corners.
- **Responsive Layout:** Adaptive header navigation drawer on mobile viewports.
- **Loading states:** Loading skeleton overlays during simulated regenerations or page loading.

---

## 5. Future Scope & Integrations
1. **Real-time LLM API Integration:** Connect Cover Letter and Tailoring prompts to OpenAI GPT-4o or Gemini 1.5 Pro APIs.
2. **True PDF Compilers:** Implement libraries like `jspdf` or `html2pdf.js` to render the resume layout preview directly into a downloadable standard PDF.
3. **LinkedIn Crawler API:** Authorize job seekers to sync profile details directly from their LinkedIn accounts via OAuth.
