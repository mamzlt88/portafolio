import imgFashionModel from "figma:asset/3d085c9578974206b02761d0dcb6c75c0648a04d.png";
import imgRepayMockupHeader1 from "figma:asset/65aa5c7020d6202ddc28f12cbf528bfed613be3c.png";
import imgRectangle from "figma:asset/5f9a87327611670e4dc6fb3f068a42e2bf3f7759.png";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect, Suspense } from "react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
// App.tsx — root page composition and view-state/animation orchestration
import DecryptedText from "./components/visuals/DecryptedText";
import AnimatedModelImage from "./components/visuals/AnimatedModelImage";
const ProfilePage = React.lazy(() => import("./components/sections/ProfilePage"));
let profilePagePreload: Promise<any> | null = null;
const preloadProfilePage = () => {
  if (!profilePagePreload) {
    profilePagePreload = import("./components/sections/ProfilePage");
  }
  return profilePagePreload;
};
const PortfolioCasestudy = React.lazy(() => import("./components/sections/PortfolioCasestudy"));
const CaseStudyPage = React.lazy(() => import("./components/sections/CaseStudyPage"));
const Landing = React.lazy(() => import("./components/sections/Landing"));
const WhiteLabelCaseStudy = React.lazy(() => import("./components/sections/WhiteLabelCaseStudy"));

export default function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  // Controls Landing's background takeover color/animation
  const [activeOverlayLanding, setActiveOverlayLanding] = useState<'projects' | 'about' | null>(null);

  // Lock body scroll while an overlay is active
  useEffect(() => {
    const body = document.body;
    if (activeOverlayLanding) {
      const prev = body.style.overflow;
      body.style.overflow = 'hidden';
      return () => { body.style.overflow = prev; };
    } else {
      body.style.overflow = '';
    }
  }, [activeOverlayLanding]);

  // Preload ProfilePage chunk to avoid Suspense blank during VT
  useEffect(() => {
    preloadProfilePage();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const designerWords = ["Designer", "Product", "Manager", "Visual", "Experience"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const artistWords = ["Artist", "DogMom", "Dancer", "Astrologer"];
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % designerWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtistIndex((prev) => (prev + 1) % artistWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // View Transition wrappers for About section
  const openAboutWithVT = () => {
    const root = document.documentElement;
    root.classList.add('vt-opening-about');
    const svt: any = (document as any).startViewTransition;
    if (typeof svt === 'function') {
      svt(async () => {
        // Ensure module is loaded before snapshot to avoid Suspense blank
        await preloadProfilePage();
        // Flush React update synchronously so new DOM is ready for snapshot
        flushSync(() => {
          setIsProfileOpen(true);
          setActiveOverlayLanding('about');
        });
      }).finished.finally(() => {
        root.classList.remove('vt-opening-about');
      });
    } else {
      setIsProfileOpen(true);
      setActiveOverlayLanding('about');
      root.classList.remove('vt-opening-about');
    }
  };

  const closeAboutWithVT = () => {
    const root = document.documentElement;
    root.classList.add('vt-closing-about');
    const svt: any = (document as any).startViewTransition;
    if (typeof svt === 'function') {
      svt(() => {
        flushSync(() => {
          setIsProfileOpen(false);
          setActiveOverlayLanding(null);
        });
      }).finished.finally(() => {
        root.classList.remove('vt-closing-about');
      });
    } else {
      setIsProfileOpen(false);
      setActiveOverlayLanding(null);
      root.classList.remove('vt-closing-about');
    }
  };

  return (
    <div className="bg-[#a456f3] min-h-screen relative overflow-hidden">
      <div className="h-screen w-full relative">
        <Suspense fallback={null}>
          <Landing 
            activeOverlay={activeOverlayLanding}
            onAbout={openAboutWithVT}
            onProjects={() => { setIsProjectsOpen(true); setActiveOverlayLanding('projects'); }} 
          />
        </Suspense>
      </div>
   {/* Profile content overlay */}
        <AnimatePresence>
          {(isProfileOpen || activeOverlayLanding === 'about') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.35 } }}
              className="fixed inset-0 z-50"
              style={{ zIndex: 100 }}
            >
              <Suspense fallback={<div className="fixed inset-0" style={{ background: '#E5F34D', zIndex: 100 }} /> }>
                <ProfilePage onClose={closeAboutWithVT} showImage={true} />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects content overlay */}
        <AnimatePresence>
          {isProjectsOpen && !activeCaseStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { 
                  duration: 0.4, 
                  delay: isProjectsOpen ? 0.8 : 0 
                }
              }}
              className="fixed inset-0 z-40"
            >
              <div className="relative size-full">
                <Suspense fallback={null}>
                  <PortfolioCasestudy onProjectClick={(projectId) => setActiveCaseStudy(projectId)} />
                </Suspense>
                {/* Close Button */}
                <motion.div
                  className="bg-black content-stretch flex items-center justify-center absolute rounded-full shrink-0 size-[56px] cursor-pointer top-[40px] right-[40px] z-50"
                  onClick={() => { setIsProjectsOpen(false); setActiveOverlayLanding(null); }}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  <div className="relative shrink-0 size-[28px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <path d="M18 6L6 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        <path d="M6 6L18 18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Case Study content overlay */}
        <AnimatePresence>
          {activeCaseStudy && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { 
                  duration: 0.6
                }
              }}
              className="fixed inset-0 z-50"
            >
              <Suspense fallback={null}>
                {activeCaseStudy === 'white-label' && (
                  <WhiteLabelCaseStudy 
                    onClose={() => setActiveCaseStudy(null)}
                  />
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
