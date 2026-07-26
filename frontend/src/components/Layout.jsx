import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
const links = [['/scan/url', 'Scan URL'], ['/scan/file', 'Scan File'], ['/history', 'History'], ['/about', 'About']];
export default function Layout() {
  return <div className="min-h-screen bg-ink text-slate-100"><header className="border-b border-slate-700/70 bg-ink/90 backdrop-blur"><nav className="page flex min-h-16 items-center justify-between gap-4" aria-label="Main navigation">
    <NavLink to="/" className="flex items-center gap-2 font-heading text-xl font-semibold text-white"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary"><ShieldCheck aria-hidden="true" /></span>SafeGuard</NavLink>
    <div className="flex items-center gap-1 overflow-x-auto text-sm text-slate-300">{links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `whitespace-nowrap rounded-md px-3 py-2 transition ${isActive ? 'bg-primary/20 text-blue-300' : 'hover:bg-slate-800 hover:text-white'}`}>{label}</NavLink>)}</div>
  </nav></header><main className="page py-10 sm:py-14"><Outlet /></main><footer className="border-t border-slate-800"><div className="page py-6 text-sm text-slate-400">© {new Date().getFullYear()} SafeGuard · Results are advisory and powered by VirusTotal.</div></footer></div>;
}
