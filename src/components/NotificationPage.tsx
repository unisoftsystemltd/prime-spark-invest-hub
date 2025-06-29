
import React, { useState } from 'react';
import { Bell, TrendingUp, AlertCircle, Gift, Settings, CheckCircle, Clock } from 'lucide-react';

const NotificationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'investment',
      icon: TrendingUp,
      title: 'Portfolio Update',
      message: 'Your portfolio gained ৳1,250 today (+2.3%)',
      time: '2 hours ago',
      read: false,
      color: 'bg-prime-green'
    },
    {
      id: 2,
      type: 'alert',
      icon: AlertCircle,
      title: 'SIP Reminder',
      message: 'Your monthly SIP of ৳5,000 is due tomorrow',
      time: '4 hours ago',
      read: false,
      color: 'bg-prime-purple'
    },
    {
      id: 3,
      type: 'reward',
      icon: Gift,
      title: 'Cashback Earned',
      message: 'You earned ৳125 cashback on your last investment',
      time: '1 day ago',
      read: true,
      color: 'bg-orange-500'
    },
    {
      id: 4,
      type: 'investment',
      icon: CheckCircle,
      title: 'Investment Successful',
      message: 'Your investment of ৳10,000 in Tech Fund is confirmed',
      time: '2 days ago',
      read: true,
      color: 'bg-prime-green'
    },
    {
      id: 5,
      type: 'alert',
      icon: Clock,
      title: 'Goal Achievement',
      message: 'Congratulations! You\'ve reached 75% of your Emergency Fund goal',
      time: '3 days ago',
      read: true,
      color: 'bg-blue-500'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All', count: notifications.length },
    { id: 'investment', label: 'Investments', count: notifications.filter(n => n.type === 'investment').length },
    { id: 'alert', label: 'Alerts', count: notifications.filter(n => n.type === 'alert').length },
    { id: 'reward', label: 'Rewards', count: notifications.filter(n => n.type === 'reward').length }
  ];

  const filteredNotifications = activeTab === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === activeTab);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="bg-prime-bg min-h-screen">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black">Notifications</h1>
            <p className="text-gray-600">{unreadCount} unread notifications</p>
          </div>
          <button className="p-2 rounded-xl bg-white shadow-sm">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="flex space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-prime-purple text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <span>{tab.label}</span>
              {tab.count > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-white text-prime-purple' : 'bg-gray-200 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-4 mt-6">
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl p-4 shadow-sm transition-all ${
                  !notification.read ? 'border-l-4 border-prime-purple' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`${notification.color} p-2 rounded-xl`}>
                    <notification.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-black">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-prime-purple rounded-full"></div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-black mb-2">No notifications</h3>
            <p className="text-gray-500">You're all caught up! Check back later for updates.</p>
          </div>
        )}
      </div>

      {/* Mark All as Read */}
      {unreadCount > 0 && (
        <div className="px-4 mt-6">
          <button className="w-full bg-prime-purple text-white py-3 rounded-2xl font-medium hover:bg-prime-purple/90 transition-colors">
            Mark All as Read
          </button>
        </div>
      )}

      {/* Bottom Padding */}
      <div className="h-24"></div>
    </div>
  );
};

export default NotificationPage;
