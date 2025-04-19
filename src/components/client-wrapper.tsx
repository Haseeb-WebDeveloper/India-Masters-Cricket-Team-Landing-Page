'use client';
import { useEffect, useState } from 'react';
import IntroVideo from './intro-video';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showTexture, setShowTexture] = useState(true);

  useEffect(() => {
    // Check if intro has been played in this session
    const alreadyShown = sessionStorage.getItem('introPlayed') === 'true';
    
    if (alreadyShown) {
      setShowMainContent(true);
      setShowTexture(false);
    } else {
      // First time visit - show video
      setShowVideo(true);
      // Hide scrollbar during video
      document.body.style.overflow = 'hidden';
    }
    // No longer first load
    setIsFirstLoad(false);

    // Add cleanup function to clear session storage on tab close
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('introPlayed');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.body.style.overflow = '';
    };
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
    sessionStorage.setItem('introPlayed', 'true');
    document.body.style.overflow = '';
    setShowTexture(false);
    
    // Show main content immediately after video ends
    requestAnimationFrame(() => {
      setShowMainContent(true);
    });
  };

//   giving background white to whole website untill video is loaded
useEffect(() => {
    const root = document.documentElement;
  
    root.style.backgroundColor = '#f3f3f3';
    root.style.backgroundImage = `
      repeating-radial-gradient(
        circle, 
        rgba(0, 0, 0, 0.03) 0, 
        rgba(0, 0, 0, 0.03) 1px, 
        transparent 1px, 
        transparent 5px
      )
    `;
    root.style.filter = 'contrast(110%) brightness(102%)';
  
    return () => {
      // Clean up on unmount
      root.style.backgroundColor = '';
      root.style.backgroundImage = '';
      root.style.filter = '';
    };
  }, []);
  

  // Show loading state during initial check
  if (isFirstLoad) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[999999] bg-texture">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {/* Background Texture */}
      {showTexture && (
        <div className="fixed inset-0 z-[999998] bg-texture"></div>
      )}

      {/* Video or Loading Overlay */}
      {(showVideo || !showMainContent) && (
        <div className="fixed inset-0 z-[999999]">
          {showVideo && <IntroVideo onVideoEnd={handleVideoEnd} />}
        </div>
      )}
      
      {/* Main Content */}
      <div 
        className={`relative w-full transition-opacity duration-1000 ${
          showMainContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default ClientWrapper;
