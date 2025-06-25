
import React from 'react';
import { TrendingUp, Target, Wallet, Gift, Users, PlusCircle, ArrowUpRight, ArrowDownRight, Star } from 'lucide-react';

const Dashboard: React.FC = () => {
  const quickActions = [
    { icon: PlusCircle, label: 'Invest', color: 'bg-prime-green' },
    { icon: ArrowDownRight, label: 'Withdraw', color: 'bg-prime-red' },
    { icon: TrendingUp, label: 'Portfolio', color: 'bg-prime-purple' },
    { icon: Target, label: 'Goals', color: 'bg-blue-500' },
    { icon: Wallet, label: 'Wallet', color: 'bg-orange-500' },
    { icon: Gift, label: 'Rewards', color: 'bg-pink-500' },
    { icon: Users, label: 'Invite', color: 'bg-teal-500' },
  ];

  return (
    <div className="flex-1 bg-prime-bg pt-32 pb-20 overflow-y-auto">
      {/* Promotional Offer Banner */}
      <div className="px-4 pt-4">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-prime-red rounded-2xl p-6 text-white relative overflow-hidden animate-pulse-glow">
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <Star className="w-5 h-5 text-yellow-300 mr-2" />
              <h3 className="text-lg font-bold">🎉 Limited Time Offer!</h3>
            </div>
            <p className="text-sm mb-3 font-medium">Invest ৳10,000 today and get 5% bonus + cashback!</p>
            <div className="flex items-center justify-between">
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-shadow">
                Claim Now
              </button>
              <div className="text-right">
                <p className="text-xs opacity-90">Ends in</p>
                <p className="font-bold text-yellow-300">2 days</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute left-0 bottom-0 w-20 h-20 bg-yellow-300/20 rounded-full translate-y-4 -translate-x-4"></div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-prime-purple to-prime-green rounded-2xl p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-2">🚀 New Year Special</h3>
            <p className="text-sm mb-3">Start your investment journey with zero fees!</p>
            <button className="bg-white text-prime-purple px-4 py-2 rounded-lg font-medium text-sm">
              Learn More
            </button>
          </div>
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
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
    </div>
  );
};

export default Dashboard;
