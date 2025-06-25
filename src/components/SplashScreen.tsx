
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-prime-purple to-prime-green flex flex-col items-center justify-center z-50">
      {/* Logo Container */}
      <div className="animate-scale-in">
        <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl animate-pulse-glow">
          <div className="text-4xl font-bold text-prime-purple">PB</div>
        </div>
      </div>

      {/* App Title */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-3xl font-bold text-white mb-2">Prime Bank</h1>
        <p className="text-xl text-white/90">Investment</p>
        <p className="text-sm text-white/70 mt-2">Your Gateway to Smart Investing</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-white rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress Text */}
      <p className="text-white/80 text-sm">{progress}% Loading...</p>

      {/* Loading Animation */}
      <div className="mt-8 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
