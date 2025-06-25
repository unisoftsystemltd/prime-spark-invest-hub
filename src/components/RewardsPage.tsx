
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gift, Trophy, Users, Star, Zap, Calendar, Target } from 'lucide-react';

const RewardsPage = () => {
  const [loyaltyPoints, setLoyaltyPoints] = useState(2540);

  const milestones = [
    { name: 'First Investment', completed: true, points: 100, icon: Target },
    { name: '10K Club', completed: true, points: 250, icon: Trophy },
    { name: '1 Lakh Club', completed: false, points: 500, icon: Trophy },
    { name: 'Goal Achiever', completed: false, points: 750, icon: Star },
  ];

  const offers = [
    { 
      title: 'New Year Bonus', 
      description: 'Invest ৳50,000 and get 5% bonus units', 
      validity: '31st Dec 2024',
      category: 'Investment',
      color: 'bg-gradient-to-r from-green-500 to-blue-500'
    },
    { 
      title: 'Referral Super Bonus', 
      description: 'Refer 3 friends and earn ৳3,000', 
      validity: '15th Jan 2025',
      category: 'Referral',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    { 
      title: 'MIP Cashback', 
      description: '8% cashback on Monthly Income Plans', 
      validity: 'Till 20th Dec',
      category: 'Cashback',
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
  ];

  const partnershipOffers = [
    { name: 'Foodpanda', discount: '20%', category: 'Food', points: 200 },
    { name: 'Daraz', discount: '15%', category: 'Shopping', points: 300 },
    { name: 'Uber', discount: '25%', category: 'Travel', points: 250 },
    { name: 'Grameenphone', discount: '10%', category: 'Telecom', points: 150 },
  ];

  const redeemOptions = [
    { name: 'Extra Investment Units', points: 500, icon: Target },
    { name: 'Amazon Gift Card', points: 1000, icon: Gift },
    { name: 'Fee Waiver', points: 750, icon: Zap },
    { name: 'Premium Features', points: 1200, icon: Star },
  ];

  return (
    <div className="bg-prime-bg min-h-screen p-4">
      {/* Loyalty Points Summary */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-prime-purple to-prime-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-prime-dark">Loyalty Points</h2>
            <p className="text-3xl font-bold text-prime-purple">{loyaltyPoints.toLocaleString()}</p>
            <p className="text-gray-600 text-sm">Available for redemption</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="offers" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="offers">Offers</TabsTrigger>
          <TabsTrigger value="milestones">Badges</TabsTrigger>
          <TabsTrigger value="partners">Partners</TabsTrigger>
          <TabsTrigger value="redeem">Redeem</TabsTrigger>
        </TabsList>

        <TabsContent value="offers" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">My Offers</h3>
          {offers.map((offer, index) => (
            <Card key={index}>
              <div className={`${offer.color} p-4 rounded-t-lg`}>
                <div className="flex justify-between items-start text-white">
                  <div>
                    <h4 className="font-semibold">{offer.title}</h4>
                    <p className="text-sm opacity-90">{offer.description}</p>
                  </div>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">{offer.category}</span>
                </div>
              </div>
              <CardContent className="p-4 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Valid till: {offer.validity}</span>
                  <button className="bg-prime-purple text-white px-4 py-1 rounded text-sm">
                    Claim Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Spin & Win Section */}
          <Card>
            <CardContent className="p-4 text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-prime-dark mb-2">Spin & Win</h3>
              <p className="text-gray-600 text-sm mb-4">Complete 3 investments this month to unlock</p>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-lg">
                Play Now
              </button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Milestones & Badges</h3>
          {milestones.map((milestone, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    milestone.completed ? 'bg-prime-green' : 'bg-gray-300'
                  }`}>
                    <milestone.icon className={`w-6 h-6 ${milestone.completed ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-prime-dark">{milestone.name}</h4>
                    <p className="text-sm text-gray-600">{milestone.points} Points</p>
                  </div>
                  <div>
                    {milestone.completed ? (
                      <span className="bg-prime-green text-white px-3 py-1 rounded-full text-xs">
                        Earned
                      </span>
                    ) : (
                      <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="partners" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Partnership Offers</h3>
          {partnershipOffers.map((partner, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-prime-dark">{partner.name}</h4>
                    <p className="text-sm text-gray-600">{partner.category}</p>
                    <p className="text-lg font-bold text-prime-green">{partner.discount} OFF</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{partner.points} points</p>
                    <button className="bg-prime-purple text-white px-4 py-1 rounded text-sm mt-2">
                      Redeem
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="redeem" className="space-y-4">
          <h3 className="font-semibold text-prime-dark">Redeem Points</h3>
          {redeemOptions.map((option, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-prime-purple w-10 h-10 rounded-lg flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-prime-dark">{option.name}</h4>
                    <p className="text-sm text-gray-600">{option.points} points required</p>
                  </div>
                  <button 
                    className={`px-4 py-1 rounded text-sm ${
                      loyaltyPoints >= option.points 
                        ? 'bg-prime-green text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    disabled={loyaltyPoints < option.points}
                  >
                    {loyaltyPoints >= option.points ? 'Redeem' : 'Insufficient'}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Referral Program */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-prime-purple" />
            Referral Program
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-4">Invite friends and earn tiered benefits</p>
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div className="bg-prime-bg p-2 rounded">
                <p className="text-xs text-gray-600">1 Friend</p>
                <p className="font-bold text-prime-purple">৳500</p>
              </div>
              <div className="bg-prime-bg p-2 rounded">
                <p className="text-xs text-gray-600">3 Friends</p>
                <p className="font-bold text-prime-purple">৳2000</p>
              </div>
              <div className="bg-prime-bg p-2 rounded">
                <p className="text-xs text-gray-600">5 Friends</p>
                <p className="font-bold text-prime-purple">৳5000</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-prime-purple to-prime-green text-white px-6 py-2 rounded-lg">
              Invite Friends
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsPage;
