
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Settings,
  CreditCard,
  Lock,
  Bell,
  Sun,
  HelpCircle,
  MessageSquare,
  LogOut,
  User,
  FileText,
  Shield,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate, onLogout }) => {
  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      onLogout();
    }
  };

  return (
    <div className="space-y-6 p-4">
      {/* Profile Header */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-lg font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">john.doe@example.com</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <User className="w-5 h-5 mr-2 text-prime-purple" />
            Basic Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium">Email Address</div>
              <div className="text-sm text-gray-600">john.doe@example.com</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium">Phone Number</div>
              <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium">Address</div>
              <div className="text-sm text-gray-600">123 Main St, City, State 12345</div>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            Edit Contact Information
          </Button>
        </CardContent>
      </Card>

      {/* Risk Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Shield className="w-5 h-5 mr-2 text-prime-purple" />
            Risk Rating & Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current Risk Level</span>
              <span className="text-sm font-semibold text-prime-purple">Moderate</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-prime-purple h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <strong>Investment Goals:</strong> Long-term growth with moderate risk
            </div>
            <div className="text-sm">
              <strong>Time Horizon:</strong> 10-15 years
            </div>
            <div className="text-sm">
              <strong>Risk Tolerance:</strong> Moderate - comfortable with some fluctuations
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-4 h-4 mr-2" />
            Update Risk Assessment
          </Button>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start" onClick={() => onNavigate('analytics')}>
            <CreditCard className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => onNavigate('support')}>
            <HelpCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </CardContent>
      </Card>

      {/* Account & Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Settings className="w-5 h-5 mr-2 text-prime-purple" />
            Account & Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Personal Information */}
          <div className="space-y-1">
            <div className="text-sm font-medium">Personal Information</div>
            <CardDescription>Update your profile details.</CardDescription>
            <Button variant="ghost" className="w-full justify-start">
              <User className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          {/* Security Settings */}
          <div className="space-y-1">
            <div className="text-sm font-medium">Security Settings</div>
            <CardDescription>Change your password and manage security preferences.</CardDescription>
            <Button variant="ghost" className="w-full justify-start">
              <Lock className="w-4 h-4 mr-2" />
              Change Password
            </Button>
          </div>

          {/* App Settings */}
          <div className="space-y-1">
            <div className="text-sm font-medium">App Settings</div>
            <CardDescription>Customize the app to your preferences.</CardDescription>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Sun className="w-4 h-4 mr-2" />
              Appearance
            </Button>
          </div>

          {/* Investment Preferences */}
          <div className="space-y-1">
            <div className="text-sm font-medium">Investment Preferences</div>
            <CardDescription>Set your investment goals and risk tolerance.</CardDescription>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="w-4 h-4 mr-2" />
              Edit Preferences
            </Button>
          </div>

          {/* Logout Button */}
          <div className="pt-4 border-t">
            <Button 
              onClick={handleLogout}
              variant="destructive" 
              className="w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Chatbot & Support */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Chatbot & Support</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="secondary" className="w-full justify-start">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat with Support
          </Button>
        </CardContent>
      </Card>

      {/* Help & Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Help & Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="w-4 h-4 mr-2" />
            Terms & Conditions
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Lock className="w-4 h-4 mr-2" />
            Privacy Policy
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
