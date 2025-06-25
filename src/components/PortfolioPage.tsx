
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Target, PieChart, Calendar, Download, Eye } from 'lucide-react';

const PortfolioPage = () => {
  const [activeGoal, setActiveGoal] = useState('all');

  const goals = [
    { id: 'retirement', name: 'Retirement', progress: 65, target: 5000000, current: 3250000, icon: Target },
    { id: 'education', name: 'Education', progress: 45, target: 1500000, current: 675000, icon: Target },
    { id: 'hajj', name: 'Hajj Fund', progress: 35, target: 800000, current: 280000, icon: Target },
    { id: 'emergency', name: 'Emergency', progress: 80, target: 500000, current: 400000, icon: Target },
  ];

  const investments = [
    { name: 'Halal Equity Fund', amount: 125000, return: 12.5, type: 'Equity' },
    { name: 'Tech Growth Basket', amount: 85000, return: 18.2, type: 'Thematic' },
    { name: 'Monthly Income Plan', amount: 200000, return: 8.5, type: 'MIP' },
    { name: 'Secure Income Bond', amount: 150000, return: 6.8, type: 'Fixed' },
  ];

  return (
    <div className="bg-prime-bg min-h-screen p-4">
      {/* Portfolio Summary */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-prime-green" />
            Portfolio Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-prime-dark">৳5,60,000</p>
              <p className="text-sm text-prime-green">+12.5% (৳62,000)</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Today's Change</p>
              <p className="text-xl font-semibold text-prime-green">+৳3,250</p>
              <p className="text-sm text-prime-green">+0.58%</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            <button className="bg-prime-purple text-white p-2 rounded-lg text-xs">
              <Eye className="w-4 h-4 mx-auto mb-1" />
              Analytics
            </button>
            <button className="bg-prime-green text-white p-2 rounded-lg text-xs">
              <Download className="w-4 h-4 mx-auto mb-1" />
              Report
            </button>
            <button className="bg-orange-500 text-white p-2 rounded-lg text-xs">
              <PieChart className="w-4 h-4 mx-auto mb-1" />
              Allocation
            </button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="goals" className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="goals" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Goal-Based Investments</h3>
          {goals.map((goal) => (
            <Card key={goal.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <goal.icon className="w-4 h-4 text-prime-purple" />
                    <span className="font-medium">{goal.name}</span>
                  </div>
                  <span className="text-sm text-gray-600">{goal.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className="bg-prime-green h-2 rounded-full" 
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>৳{(goal.current / 1000).toFixed(0)}K</span>
                  <span>৳{(goal.target / 1000).toFixed(0)}K</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="holdings" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Investment Holdings</h3>
          {investments.map((investment, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-prime-dark">{investment.name}</h4>
                    <p className="text-sm text-gray-600">{investment.type}</p>
                    <p className="text-lg font-semibold">৳{investment.amount.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${investment.return > 0 ? 'text-prime-green' : 'text-prime-red'}`}>
                      +{investment.return}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-prime-dark mb-4">Performance Analytics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">1 Month Return</span>
                  <span className="text-prime-green font-medium">+2.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">3 Month Return</span>
                  <span className="text-prime-green font-medium">+8.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">1 Year Return</span>
                  <span className="text-prime-green font-medium">+15.6%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">vs DSE Index</span>
                  <span className="text-prime-green font-medium">+3.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PortfolioPage;
