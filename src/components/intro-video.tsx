// components/IntroVideo.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

const IntroVideo = ({ onVideoEnd }: { onVideoEnd: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoUrl = window.innerWidth > 768 ? '/intro.mp4' : '/intro-mobile.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      // Try to play the video
      video.play().catch((error) => {
        console.error('Error playing video:', error);
        setIsLoaded(true);
      });
    };

    const handleEnded = () => {
      const container = video.parentElement;
      if (container) {
        container.style.opacity = '0';
        setTimeout(onVideoEnd, 1000);
      }
    };

    // Add event listeners
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    // Start loading the video
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onVideoEnd]);

  return (
    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 bg-texture" 
        // style={{
        //     backgroundImage: 'url(/intro-bg.webp)',
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        // }}
    >
      {/* {!isLoaded && (
         <div className="fixed inset-0 bg-black flex items-center justify-center z-[999999]">
         <div className="loader"></div>
       </div>
      )} */}
      <video
        ref={videoRef}
        src={videoUrl}
        className={`w-full md:min-h-[100vh] object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
        autoPlay
      />
      {/* <button
        onClick={onVideoEnd}
        className="absolute top-5 right-5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
      >
        Skip
      </button> */}
    </div>
  );
};

export default IntroVideo;
