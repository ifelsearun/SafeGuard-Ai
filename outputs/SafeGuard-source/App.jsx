import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import UrlScannerPage from './pages/UrlScannerPage.jsx';
import FileScannerPage from './pages/FileScannerPage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return <Routes><Route element={<Layout />}>
    <Route path="/" element={<LandingPage />} />
    <Route path="/scan/url" element={<UrlScannerPage />} />
    <Route path="/scan/file" element={<FileScannerPage />} />
    <Route path="/results/:analysisId" element={<ResultPage />} />
    <Route path="/history" element={<HistoryPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes>;
}
