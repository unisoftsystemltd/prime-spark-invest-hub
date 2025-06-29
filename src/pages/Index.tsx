
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPage, setAuthPage] = useState<'login' | 'register' | 'forgot'>('login');
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    // Check if user was previously logged in
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('rememberedUser');
    setActiveTab('home');
    setCurrentPage('');
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
    if (currentPage === 'search') {
      return <SearchPage />;
    }
    if (currentPage === 'notifications') {
      return <NotificationPage />;
    }
    if (currentPage === 'profile') {
      return <ProfilePage onNavigate={handlePageNavigation} onLogout={handleLogout} />;
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
        return <ProfilePage onNavigate={handlePageNavigation} onLogout={handleLogout} />;
      default:
        return <Dashboard />;
    }
  };

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  // Show authentication pages if not authenticated
  if (!isAuthenticated) {
    switch (authPage) {
      case 'login':
        return (
          <LoginPage
            onLogin={handleLogin}
            onRegister={() => setAuthPage('register')}
            onForgotPassword={() => setAuthPage('forgot')}
          />
        );
      case 'register':
        return (
          <RegistrationPage
            onBackToLogin={() => setAuthPage('login')}
          />
        );
      case 'forgot':
        return (
          <ForgotPasswordPage
            onBackToLogin={() => setAuthPage('login')}
          />
        );
    }
  }

  // Show main app if authenticated
  return (
    <div className="min-h-screen bg-prime-bg font-poppins">
      <div className="flex flex-col h-screen">
        <Header onNavigate={handlePageNavigation} />
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
