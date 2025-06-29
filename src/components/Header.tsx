
import React from 'react';
import { Bell, Search, User } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showNotifications?: boolean;
  showSearch?: boolean;
  showProfile?: boolean;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title = "Prime Bank Investment", 
  showNotifications = true, 
  showSearch = true, 
  showProfile = true,
  onNavigate
}) => {
  const handleSearch = () => {
    if (onNavigate) {
      onNavigate('search');
    }
  };

  const handleNotifications = () => {
    if (onNavigate) {
      onNavigate('notifications');
    }
  };

  const handleProfile = () => {
    if (onNavigate) {
      onNavigate('profile');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-prime-purple to-prime-green h-32 flex items-center justify-between px-4 pt-6">
      {/* Left Section */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center mr-3 shadow-lg">
          <span className="text-prime-purple font-bold text-lg">PB</span>
        </div>
        <div>
          <h1 className="text-white font-semibold text-lg">{title}</h1>
          <p className="text-white/80 text-sm">Welcome back!</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {showSearch && (
          <button 
            onClick={handleSearch}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        )}
        
        {showNotifications && (
          <button 
            onClick={handleNotifications}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm relative hover:bg-white/30 transition-colors"
          >
            <Bell className="w-5 h-5 text-white" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-prime-red rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </button>
        )}
        
        {showProfile && (
          <button 
            onClick={handleProfile}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
