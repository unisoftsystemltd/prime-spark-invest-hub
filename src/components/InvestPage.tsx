
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, TrendingUp, Shield, PlusCircle, Calendar, Zap } from 'lucide-react';

const InvestPage = () => {
  const [investmentType, setInvestmentType] = useState('goals');

  const goalBasedOptions = [
    { name: 'Retirement Planning', risk: 'Medium', minAmount: 5000, expectedReturn: '12-15%', icon: Target, color: 'bg-blue-500' },
    { name: 'Child Education', risk: 'Medium', minAmount: 3000, expectedReturn: '10-14%', icon: Target, color: 'bg-green-500' },
    { name: 'Hajj Fund', risk: 'Low', minAmount: 2000, expectedReturn: '8-12%', icon: Target, color: 'bg-purple-500' },
    { name: 'Emergency Fund', risk: 'Low', minAmount: 1000, expectedReturn: '6-8%', icon: Shield, color: 'bg-orange-500' },
  ];

  const mipOptions = [
    { name: 'Prime Monthly Income', return: '8.5%', tenure: '3-5 years', minAmount: 50000 },
    { name: 'Secure Income Plan', return: '7.2%', tenure: '2-3 years', minAmount: 25000 },
    { name: 'Growth Income Fund', return: '9.8%', tenure: '5+ years', minAmount: 100000 },
  ];

  const smartBaskets = [
    { name: 'Halal Investment', description: 'Shariah-compliant portfolio', risk: 'Medium', return: '12-16%', color: 'bg-green-600' },
    { name: 'Tech Growth Basket', description: 'Technology sector focus', risk: 'High', return: '15-20%', color: 'bg-blue-600' },
    { name: 'Women-Led Companies', description: 'Female leadership focus', risk: 'Medium', return: '11-15%', color: 'bg-pink-600' },
    { name: 'ESG Sustainable', description: 'Environment & social focus', risk: 'Medium', return: '10-14%', color: 'bg-teal-600' },
  ];

  return (
    <div className="bg-prime-bg min-h-screen p-4">
      {/* Investment Summary */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="text-center">
            <h2 className="text-xl font-bold text-prime-dark mb-2">Start Your Investment Journey</h2>
            <p className="text-gray-600 text-sm mb-4">Choose from our range of investment products</p>
            <button className="bg-prime-purple text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto">
              <Zap className="w-4 h-4" />
              Auto-Invest Setup
            </button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="goals" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="mip">MIP</TabsTrigger>
          <TabsTrigger value="baskets">Baskets</TabsTrigger>
          <TabsTrigger value="secure">Secure</TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Goal-Based Investment</h3>
          {goalBasedOptions.map((option, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${option.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                    <option.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-prime-dark">{option.name}</h4>
                    <p className="text-sm text-gray-600">Expected: {option.expectedReturn}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Min: ৳{option.minAmount}</p>
                    <p className="text-xs text-gray-500">{option.risk} Risk</p>
                  </div>
                </div>
                <button className="w-full bg-prime-green text-white py-2 rounded-lg text-sm">
                  Start Investment
                </button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="mip" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Monthly Income Plans</h3>
          {mipOptions.map((mip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-prime-dark">{mip.name}</h4>
                    <p className="text-sm text-gray-600">Tenure: {mip.tenure}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-prime-green">{mip.return}</p>
                    <p className="text-xs text-gray-500">Monthly Return</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Min: ৳{mip.minAmount.toLocaleString()}</span>
                  <button className="bg-prime-purple text-white px-4 py-1 rounded text-sm">
                    Invest Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="baskets" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Smart Baskets / Thematic</h3>
          {smartBaskets.map((basket, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${basket.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-prime-dark">{basket.name}</h4>
                    <p className="text-sm text-gray-600">{basket.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-prime-green">{basket.return}</p>
                    <p className="text-xs text-gray-500">{basket.risk} Risk</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-prime-purple to-prime-green text-white py-2 rounded-lg text-sm">
                  Explore Basket
                </button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="secure" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Shield className="w-12 h-12 text-prime-green mx-auto mb-3" />
                <h3 className="font-semibold text-prime-dark mb-2">Secure Income Investment</h3>
                <p className="text-gray-600 text-sm mb-4">Capital-protected options with guaranteed returns</p>
                <div className="bg-prime-bg p-3 rounded-lg mb-4">
                  <p className="text-lg font-bold text-prime-dark">6.5% - 8.5%</p>
                  <p className="text-sm text-gray-600">Annual Return</p>
                </div>
                <button className="bg-prime-green text-white px-6 py-2 rounded-lg">
                  View Products
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Auto-Invest Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-prime-purple" />
            Auto-Invest Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm mb-4">Set up recurring investments from your bank or mobile wallet</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white border border-gray-200 p-3 rounded-lg text-center">
              <div className="text-sm font-medium text-prime-dark">Bank Transfer</div>
              <div className="text-xs text-gray-600">BEFTN, NPSB</div>
            </button>
            <button className="bg-white border border-gray-200 p-3 rounded-lg text-center">
              <div className="text-sm font-medium text-prime-dark">Mobile Wallet</div>
              <div className="text-xs text-gray-600">bKash, Nagad, Rocket</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestPage;
