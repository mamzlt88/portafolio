import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfilePage from '../components/sections/ProfilePage';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';

interface AboutLocationState {
  modelIndex?: number;
}

export default function AboutPage() {
  const vtNavigate = useViewTransitionNavigate();
  const location = useLocation();
  const modelIndex = (location.state as AboutLocationState | null)?.modelIndex;
  return (
    <div className="fixed inset-0">
      <ProfilePage onClose={() => vtNavigate('/')} showImage={true} modelInitialIndex={modelIndex} />
    </div>
  );
}
