import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfilePage from '../components/sections/ProfilePage';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';

export default function AboutPage() {
  const navigate = useNavigate();
  const vtNavigate = useViewTransitionNavigate();
  const location = useLocation();
  const modelIndex = (location.state as any)?.modelIndex as number | undefined;
  return (
    <div className="fixed inset-0">
      <ProfilePage onClose={() => vtNavigate('/')} showImage={true} modelInitialIndex={modelIndex} />
    </div>
  );
}
