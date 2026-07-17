# AI JobAssistent 🚀

An AI-Powered Intelligent Job Application Assistant designed for modern job seekers. Create high-score ATS-compatible resumes, generate customized cover letters, match skills against job descriptions, and manage your job applications pipeline within a premium dashboard.

Inspired by premium SaaS dashboards like **Linear, Notion, Stripe, and Vercel**.

---

## ✨ Features

- **🌅 Landing Page:** Full-scale commercial landing page with product benefits, testimonial carousels, and feature grid cards.
- **🔐 Portal Entrance:** Glassmorphic Login & Register panels with form validation.
- **📊 Unified Dashboard:** Personal greeting, stats summaries, resume score tracker, checklist recommendations, and calendar countdowns for interviews.
- **📋 Master Candidate Profile:** Category editing tabs for Work History, Education, Skills, and preferences synced to the entire application.
- **📄 Resume Builder:** Choose from professional templates, live format previews, upload simulator, and raw data downloader.
- **💼 Job Search & Fit Score:** List local/remote roles with match percentage calculations based on candidate background.
- **🔍 AI Job description Analysis:** Match required vs missing skills, get priority courses, and review ATS key tags.
- **✂️ AI Resume Tailoring:** 3-column diff comparison (Original vs AI Suggestions vs Tailored Output) with full text-edit toggles.
- **✍️ AI Cover Letter:** Customize tone settings (Professional, Casual, Creative) and copy or download drafts instantly.
- **🗓️ Kanban Applications Board:** Move listings through Applied, Under Review, Shortlisted, Selected, and Rejected columns.
- **🔔 Notifications Center:** Filter category updates, marks reads, and dismiss cards.

---

## 🛠️ Technology Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4 (with custom glassmorphism parameters and animations)
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Animations:** Framer Motion

---

## 📁 Repository Structure

```
src/
├── components/
│   ├── layout/         # Sidebar, TopBar, and DashboardLayout
│   └── ui/             # Reusable Card, Button, Input, Modal, and Badge components
├── pages/              # Landing, Auth, and core application pages
├── context/            # LocalStorage light/dark ThemeProvider context
├── data/               # Static mock data objects
└── utils/              # Color code, status helpers, and logo helpers
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (recommended LTS).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saicharan3828/Ai-JobAssistent.git
   cd Ai-JobAssistent
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser to view the application.

### Production Build

Compile optimized production build:
```bash
npm run build
```
The output files will be created in the `/dist` directory.
