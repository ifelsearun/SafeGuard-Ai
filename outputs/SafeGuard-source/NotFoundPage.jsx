import { Link } from 'react-router-dom';
import { Button } from '../components/ui.jsx';
export default function NotFoundPage() { return <div className="mx-auto max-w-xl py-16 text-center"><p className="eyebrow">404</p><h1 className="page-title">This page is not protected here.</h1><p className="mt-3 text-slate-400">The page may have moved, or the address may be incorrect.</p><Link to="/"><Button className="mt-6">Return home</Button></Link></div>; }
