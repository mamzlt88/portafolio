import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ErrorBoundary from './components/ErrorBoundary';

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <span className="font-['DM_Mono',monospace] text-[12px] uppercase tracking-widest text-black/40 animate-pulse">
        Loading…
      </span>
    </div>
  );
}

export default function RouterApp() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
