'use client';
import { useEffect, useState } from 'react';
import IntroVideo from './intro-video';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Check if intro has been played in this session
    const alreadyShown = sessionStorage.getItem('introPlayed') === 'true';
    
    if (alreadyShown) {
      setShowMainContent(true);
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
    
    // Show main content immediately after video ends
    requestAnimationFrame(() => {
      setShowMainContent(true);
    });
  };

  // Show loading state during initial check
  if (isFirstLoad) {
    return (
      <div className="fixed inset-0  flex items-center justify-center z-[999999]"
      style={{
        backgroundImage: 'url(/intro-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {/* Video or Loading Overlay */}
      {(showVideo || !showMainContent) && (
        <div className="fixed inset-0 z-[999999]"
        style={{
          backgroundImage: 'url(/intro-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
      }}
        >
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
