
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Shield, Settings, Bell, Globe, Lock, Phone, Mail, MapPin, Briefcase, CreditCard } from 'lucide-react';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Md. Rahman Khan',
    email: 'rahman.khan@example.com',
    phone: '+880 1711 123456',
    occupation: 'Software Engineer',
    income: '৳50,000 - ৳75,000',
    riskScore: 'Moderate',
    language: 'English'
  });

  const securityFeatures = [
    { name: 'Face ID Login', enabled: true, icon: User },
    { name: 'Fingerprint Login', enabled: true, icon: Shield },
    { name: 'Two-Factor Authentication', enabled: false, icon: Lock },
    { name: 'Session History', enabled: true, icon: Phone },
  ];

  const notificationSettings = [
    { name: 'Investment Updates', enabled: true },
    { name: 'Market Alerts', enabled: true },
    { name: 'Goal Reminders', enabled: false },
    { name: 'Promotional Offers', enabled: true },
    { name: 'Security Alerts', enabled: true },
  ];

  const investmentLimits = [
    { type: 'Daily Investment Limit', amount: '৳1,00,000', status: 'Active' },
    { type: 'Monthly Investment Limit', amount: '৳10,00,000', status: 'Active' },
    { type: 'Single Transaction Limit', amount: '৳50,000', status: 'Active' },
  ];

  return (
    <div className="bg-prime-bg min-h-screen p-4">
      {/* Profile Header */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-prime-purple to-prime-green rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-prime-dark">{profileData.name}</h2>
              <p className="text-gray-600">{profileData.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-prime-green text-white px-2 py-1 rounded text-xs">
                  {profileData.riskScore} Risk
                </span>
                <span className="bg-prime-purple text-white px-2 py-1 rounded text-xs">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="personal" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="limits">Limits</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Personal Information</h3>
          
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{profileData.phone}</p>
                </div>
                <button className="text-prime-purple text-sm">Edit</button>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{profileData.email}</p>
                </div>
                <button className="text-prime-purple text-sm">Edit</button>
              </div>
              
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Occupation</p>
                  <p className="font-medium">{profileData.occupation}</p>
                </div>
                <button className="text-prime-purple text-sm">Edit</button>
              </div>
              
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Income Bracket</p>
                  <p className="font-medium">{profileData.income}</p>
                </div>
                <button className="text-prime-purple text-sm">Edit</button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Source of Funds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked className="rounded" />
                  <span className="text-sm">Salary/Employment</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Business Income</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Investment Returns</span>
                </label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Security Features</h3>
          
          {securityFeatures.map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-prime-purple" />
                    <span className="font-medium text-prime-dark">{feature.name}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={feature.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-prime-green"></div>
                  </label>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Session History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-prime-dark">Mobile App</p>
                    <p className="text-sm text-gray-600">Today, 2:30 PM</p>
                  </div>
                  <span className="bg-prime-green text-white px-2 py-1 rounded text-xs">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-prime-dark">Web Browser</p>
                    <p className="text-sm text-gray-600">Yesterday, 9:15 AM</p>
                  </div>
                  <span className="bg-gray-300 text-gray-600 px-2 py-1 rounded text-xs">Logged Out</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">App Settings</h3>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Language Preference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="language" checked={profileData.language === 'English'} />
                  <span>English</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="language" checked={profileData.language === 'বাংলা'} />
                  <span>বাংলা</span>
                </label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Push Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notificationSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{setting.name}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={setting.enabled}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-prime-green"></div>
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limits" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Investment Limit Controls</h3>
          
          {investmentLimits.map((limit, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-prime-dark">{limit.type}</p>
                    <p className="text-lg font-bold text-prime-green">{limit.amount}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-prime-green text-white px-2 py-1 rounded text-xs">
                      {limit.status}
                    </span>
                    <br />
                    <button className="text-prime-purple text-sm mt-1">Modify</button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-20 h-20 bg-prime-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">7.5</span>
                </div>
                <p className="font-medium text-prime-dark">Moderate Risk Profile</p>
                <p className="text-sm text-gray-600 mb-4">Based on your investment pattern and preferences</p>
                <button className="bg-prime-purple text-white px-4 py-2 rounded-lg text-sm">
                  Retake Assessment
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
