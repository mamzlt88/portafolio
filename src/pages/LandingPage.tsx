import React, { Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Landing from '../components/sections/Landing';
import { useViewTransitionNavigate } from '../hooks/useViewTransitionNavigate';
// Prefetch the model color layers used by AnimatedModelImage for smoother first paint on About
import imgMmColorOrange from "figma:asset/717c32ec589970e1b541c572864d2fa741828374.png";
import imgMmColorFucsia from "figma:asset/5e760d0b1b85f18ad77bddef113b51317f7606e7.png";
import imgMmColorYellow from "figma:asset/2625cb3e78dcd7941cfcac6145a7513622c7d7df.png";
import imgMmColorBlue from "figma:asset/137be2bd84d4f01382e0ca4158dde3d16b96eb35.png";
import imgMmColorPurple from "figma:asset/5b55f5770f8be828c1d0e85f5e2e5d84e786bb07.png";
import imgMmColorGray from "figma:asset/c58e5afa678b5fd3954515802a4cf1ff79d68266.png";
import imgRepayMockupHeader1 from "figma:asset/65aa5c7020d6202ddc28f12cbf528bfed613be3c.png";
import imgRectangle from "figma:asset/5f9a87327611670e4dc6fb3f068a42e2bf3f7759.png";

const PortfolioCasestudy = React.lazy(() => import('../components/sections/PortfolioCasestudy'));
const CaseStudyPage = React.lazy(() => import('../components/sections/CaseStudyPage'));
const WhiteLabelCaseStudy = React.lazy(() => import('../components/sections/WhiteLabelCaseStudy'));

export default function LandingPage() {
  const vtNavigate = useViewTransitionNavigate();

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [activeOverlay, setActiveOverlay] = useState<'projects' | 'about' | null>(null);

  const handleAbout = (opts?: { modelIndex?: number }) =>
    vtNavigate('/about', { state: { modelIndex: opts?.modelIndex } });

  const handleProjects = () => {
    setIsProjectsOpen(true);
    setActiveOverlay('projects');
  };

  const closeProjects = () => {
    setIsProjectsOpen(false);
    setActiveOverlay(null);
  };

  // Lock body scroll while an overlay is open
  useEffect(() => {
    if (activeOverlay) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeOverlay]);

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
    <div className="bg-[#a456f3] min-h-screen lg:min-h-0 relative overflow-hidden">
      <div className="h-screen w-full relative">
        <Landing
          onAbout={handleAbout}
          onProjects={handleProjects}
          activeOverlay={activeOverlay}
        />
      </div>

      {/* Projects overlay */}
      <AnimatePresence>
        {isProjectsOpen && !activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.4, delay: isProjectsOpen ? 0.8 : 0 } }}
            className="fixed inset-0 z-40"
          >
            <div className="relative size-full">
              <Suspense fallback={null}>
                <PortfolioCasestudy onProjectClick={(id) => setActiveCaseStudy(id)} />
              </Suspense>
              <motion.button
                aria-label="Close projects"
                className="bg-black content-stretch flex items-center justify-center absolute rounded-full shrink-0 size-[56px] cursor-pointer top-[40px] right-[40px] z-50"
                onClick={closeProjects}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <X size={24} stroke="white" strokeWidth={2} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case study overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.6 } }}
            className="fixed inset-0 z-50"
          >
            <Suspense fallback={null}>
              {activeCaseStudy === 'white-label' && (
                <WhiteLabelCaseStudy onClose={() => setActiveCaseStudy(null)} />
              )}
            </Suspense>
            <Suspense fallback={null}>
              {activeCaseStudy === 'trading-automation' && (
                <CaseStudyPage
                  title={['Trading', 'Automation', 'Interface', 'Redesign']}
                  headerImage={imgRepayMockupHeader1}
                  backgroundImage={imgRectangle}
                  onClose={() => setActiveCaseStudy(null)}
                />
              )}
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
