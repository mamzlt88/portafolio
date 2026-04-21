import React, { useEffect, useState, Suspense } from 'react';
import Landing from '../components/sections/Landing';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
import { motion, AnimatePresence } from 'motion/react';

const ProjectsOverlay = React.lazy(() => import('../components/sections/ProjectsOverlay'));
const WhiteLabelCaseStudy = React.lazy(() => import('../components/sections/WhiteLabelCaseStudy'));
const TradingCaseStudy = React.lazy(() => import('../components/sections/TradingCaseStudy'));
const SportsMediaCaseStudy = React.lazy(() => import('../components/sections/SportsMediaCaseStudy'));
const UnifiedHealthCaseStudy = React.lazy(() => import('../components/sections/UnifiedHealthCaseStudy'));
const ColorfitCaseStudy = React.lazy(() => import('../components/sections/ColorfitCaseStudy'));
// Prefetch the model color layers used by AnimatedModelImage for smoother first paint on About
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";
import imgMmColorFucsia from "figma:asset/5e760d0b1b85f18ad77bddef113b51317f7606e7.png";
import imgMmColorYellow from "figma:asset/2625cb3e78dcd7941cfcac6145a7513622c7d7df.png";
import imgMmColorBlue from "figma:asset/137be2bd84d4f01382e0ca4158dde3d16b96eb35.png";
import imgMmColorPurple from "figma:asset/5b55f5770f8be828c1d0e85f5e2e5d84e786bb07.png";
import imgMmColorGray from "figma:asset/c58e5afa678b5fd3954515802a4cf1ff79d68266.png";

export default function LandingPage() {
  const vtNavigate = useViewTransitionNavigate();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const handleAbout = (opts?: { modelIndex?: number }) =>
    vtNavigate('/about', { state: { modelIndex: opts?.modelIndex } });
  const handleProjects = () => setIsProjectsOpen(true);
  const closeProjects = () => { setActiveCaseStudy(null); setIsProjectsOpen(false); };
  const closeCaseStudy = () => setActiveCaseStudy(null);

  // Prefetch likely-needed images for the About model to reduce transition jank
  useEffect(() => {
    const sources = [
      imgMmColorOrange,
      imgMmColorFucsia,
      imgMmColorYellow,
      imgMmColorBlue,
      imgMmColorPurple,
      imgMmColorGray,
    ];
    sources.forEach((src) => { const i = new Image(); i.src = src; });
  }, []);
  return (
    <>
      <Landing
        onAbout={handleAbout}
        onProjects={handleProjects}
        activeOverlay={isProjectsOpen ? 'projects' : null}
        modelScale={isProjectsOpen ? 'compact' : 'full'}
      />
      <AnimatePresence>
        {isProjectsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.4, delay: 0.3 } }}
            className="fixed inset-0 z-50"
          >
            <Suspense fallback={null}>
              <ProjectsOverlay
                onClose={closeProjects}
                onProjectClick={(id) => setActiveCaseStudy(id)}
              />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case study overlay — renders above ProjectsOverlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.5 } }}
            className="fixed inset-0 z-[70]"
            data-name="CaseStudy"
          >
            <Suspense fallback={null}>
              {activeCaseStudy === 'white-label' && (
                <WhiteLabelCaseStudy onClose={closeCaseStudy} />
              )}
              {activeCaseStudy === 'trading-automation' && (
                <TradingCaseStudy onClose={closeCaseStudy} />
              )}
              {activeCaseStudy === 'sports-media' && (
                <SportsMediaCaseStudy onClose={closeCaseStudy} />
              )}
              {activeCaseStudy === 'unified-health' && (
                <UnifiedHealthCaseStudy onClose={closeCaseStudy} />
              )}
              {activeCaseStudy === 'colorfit' && (
                <ColorfitCaseStudy onClose={closeCaseStudy} />
              )}
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
