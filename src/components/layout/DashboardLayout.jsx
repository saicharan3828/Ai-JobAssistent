import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar onMenuClick={() => setCollapsed(false)} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-8 max-w-[1440px] mx-auto w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
