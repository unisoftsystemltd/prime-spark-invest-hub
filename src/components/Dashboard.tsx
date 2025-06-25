import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Wallet, Gift, Users, PlusCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      id: 1,
      title: "🎉 Special Offer",
      description: "Invest ৳10,000 and get 5% bonus!",
      buttonText: "Claim Now",
      gradient: "from-prime-purple to-prime-green",
    },
    {
      id: 2,
      title: "💰 Monthly Income Plan",
      description: "Start your MIP with ৳5,000 today!",
      buttonText: "Start Now",
      gradient: "from-prime-green to-blue-500",
    },
    {
      id: 3,
      title: "🏆 Referral Bonus",
      description: "Refer friends and earn up to ৳1,000!",
      buttonText: "Invite Now",
      gradient: "from-orange-500 to-prime-red",
    },
  ];

  const quickActions = [
    { icon: PlusCircle, label: 'Invest', color: 'bg-prime-green' },
    { icon: ArrowDownRight, label: 'Withdraw', color: 'bg-prime-red' },
    { icon: TrendingUp, label: 'Portfolio', color: 'bg-prime-purple' },
    { icon: Target, label: 'Goals', color: 'bg-blue-500' },
    { icon: Wallet, label: 'Wallet', color: 'bg-orange-500' },
    { icon: Gift, label: 'Rewards', color: 'bg-pink-500' },
    { icon: Users, label: 'Invite', color: 'bg-teal-500' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [offers.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-prime-bg">
      {/* Promotional Banner Slider */}
      <div className="px-4 pt-4">
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {offers.map((offer) => (
              <div
                key={offer.id}
                className={`w-full flex-shrink-0 bg-gradient-to-r ${offer.gradient} rounded-2xl p-6 text-white relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                  <p className="text-sm mb-3">{offer.description}</p>
                  <button className="bg-white text-prime-purple px-4 py-2 rounded-lg font-medium text-sm">
                    {offer.buttonText}
                  </button>
                </div>
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              </div>
            ))}
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-prime-purple w-6' 
                    : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-600 text-sm">Total Portfolio Value</p>
              <h2 className="text-2xl font-bold text-prime-dark">৳2,45,650</h2>
            </div>
            <div className="flex items-center text-prime-green">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">+12.5%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-prime-bg rounded-xl p-3">
              <p className="text-xs text-gray-600">Today's Gain</p>
              <p className="text-lg font-semibold text-prime-green">+৳1,250</p>
            </div>
            <div className="bg-prime-bg rounded-xl p-3">
              <p className="text-xs text-gray-600">Monthly Income</p>
              <p className="text-lg font-semibold text-prime-purple">৳8,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-semibold text-prime-dark mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-sm active:scale-95 transition-transform"
            >
              <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center mb-2`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-prime-dark">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Goal Tracker */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-prime-dark">Goal Progress</h3>
            <button className="text-prime-purple text-sm font-medium">View All</button>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-prime-dark">Emergency Fund</p>
                <p className="text-sm text-gray-600">75%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-prime-green h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">৳75,000 of ৳1,00,000</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-prime-dark">Hajj Fund</p>
                <p className="text-sm text-gray-600">45%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-prime-purple h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">৳2,25,000 of ৳5,00,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Offers */}
      <div className="px-4 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-prime-dark">My Offers</h3>
            <button className="text-prime-purple text-sm font-medium">See All</button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-prime-bg rounded-xl">
              <div className="w-10 h-10 bg-prime-green rounded-lg flex items-center justify-center mr-3">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-prime-dark text-sm">5% Cashback on MIP</p>
                <p className="text-xs text-gray-600">Valid till 30th Dec</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-prime-bg rounded-xl">
              <div className="w-10 h-10 bg-prime-purple rounded-lg flex items-center justify-center mr-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-prime-dark text-sm">Free Goal Planning</p>
                <p className="text-xs text-gray-600">Complimentary service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Padding for Navigation */}
      <div className="h-24"></div>
    </div>
  );
};

export default Dashboard;
