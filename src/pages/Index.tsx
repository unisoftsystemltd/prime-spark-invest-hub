
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import PortfolioPage from '../components/PortfolioPage';
import InvestPage from '../components/InvestPage';
import RewardsPage from '../components/RewardsPage';
import ProfilePage from '../components/ProfilePage';
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
        return <PortfolioPage />;
      case 'invest':
        return <InvestPage />;
      case 'rewards':
        return <RewardsPage />;
      case 'profile':
        return <ProfilePage />;
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
