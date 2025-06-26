
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import PortfolioPage from '../components/PortfolioPage';
import InvestPage from '../components/InvestPage';
import RewardsPage from '../components/RewardsPage';
import ProfilePage from '../components/ProfilePage';
import AnalyticsPage from '../components/AnalyticsPage';
import SupportPage from '../components/SupportPage';
import BottomNavigation from '../components/BottomNavigation';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState('');

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handlePageNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToMain = () => {
    setCurrentPage('');
  };

  const renderContent = () => {
    // Handle special pages first
    if (currentPage === 'analytics') {
      return <AnalyticsPage />;
    }
    if (currentPage === 'support') {
      return <SupportPage />;
    }

    // Handle main tab content
    switch (activeTab) {
      case 'home':
        return <Dashboard />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handlePageNavigation} />;
      case 'invest':
        return <InvestPage />;
      case 'rewards':
        return <RewardsPage />;
      case 'profile':
        return <ProfilePage onNavigate={handlePageNavigation} />;
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
          {/* Back button for special pages */}
          {currentPage && (
            <div className="p-4 pb-0">
              <button 
                onClick={handleBackToMain}
                className="text-prime-purple font-medium"
              >
                ← Back
              </button>
            </div>
          )}
          {renderContent()}
        </div>
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
};

export default Index;
