
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import BottomNavigation from '../components/BottomNavigation';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'portfolio':
        return (
          <div className="flex-1 bg-prime-bg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-prime-dark mb-2">Portfolio</h2>
              <p className="text-gray-600">Your investment portfolio will be shown here</p>
            </div>
          </div>
        );
      case 'invest':
        return (
          <div className="flex-1 bg-prime-bg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-prime-dark mb-2">Invest</h2>
              <p className="text-gray-600">Investment options will be shown here</p>
            </div>
          </div>
        );
      case 'rewards':
        return (
          <div className="flex-1 bg-prime-bg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-prime-dark mb-2">Rewards</h2>
              <p className="text-gray-600">Your rewards and offers will be shown here</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="flex-1 bg-prime-bg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-prime-dark mb-2">Profile</h2>
              <p className="text-gray-600">Your profile settings will be shown here</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-prime-bg font-poppins">
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 overflow-y-auto pt-32 pb-20">
          {renderContent()}
        </div>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;
