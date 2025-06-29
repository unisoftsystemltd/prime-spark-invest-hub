import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
  MapPin,
  Fingerprint,
  History,
  Languages,
  Briefcase,
  DollarSign,
  TrendingUp,
  Eye
} from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate, onLogout }) => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [language, setLanguage] = useState('english');
  const [theme, setTheme] = useState('prime');

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutDialog(false);
    onLogout();
  };

  const handleChatSupport = () => {
    onNavigate('support');
  };

  return (
    <div className="space-y-6 p-4">
      {/* Profile Header */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium text-black">My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-lg font-semibold text-black">John Doe</div>
              <div className="text-sm text-gray-600">john.doe@example.com</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-black">
            <User className="w-5 h-5 mr-2 text-prime-purple" />
            Basic Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-black">Email Address</div>
              <div className="text-sm text-gray-600">john.doe@example.com</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-black">Phone Number</div>
              <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-black">Address</div>
              <div className="text-sm text-gray-600">123 Main St, City, State 12345</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-black">Occupation</div>
              <div className="text-sm text-gray-600">Software Engineer</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <DollarSign className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-black">Source of Funds</div>
              <div className="text-sm text-gray-600">Employment Income</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-black">Income Bracket</div>
              <div className="text-sm text-gray-600">$75,000 - $100,000</div>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start border-prime-purple text-prime-purple hover:bg-prime-purple hover:text-white">
            <User className="w-4 h-4 mr-2" />
            Edit Contact Information
          </Button>
        </CardContent>
      </Card>

      {/* Risk Rating */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-black">
            <Shield className="w-5 h-5 mr-2 text-prime-purple" />
            Risk Rating
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-black">Current Risk Level</span>
              <span className="text-sm font-semibold text-prime-purple">Moderate</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-prime-purple h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start border-prime-purple text-prime-purple hover:bg-prime-purple hover:text-white">
            <Shield className="w-4 h-4 mr-2" />
            Update Risk Assessment
          </Button>
        </CardContent>
      </Card> */}

      {/* Portfolio Risk Score */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-black">
            <TrendingUp className="w-5 h-5 mr-2 text-prime-purple" />
            Portfolio Risk Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-black">Portfolio Risk Score</span>
              <span className="text-sm font-semibold text-prime-purple">7.2/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-prime-purple h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="text-xs text-gray-600">High risk, high potential return portfolio</div>
          </div>
          <Button variant="outline" className="w-full justify-start border-prime-purple text-prime-purple hover:bg-prime-purple hover:text-white">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Portfolio Analysis
          </Button>
        </CardContent>
      </Card>

      {/* Session History Log */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-black">
            <History className="w-5 h-5 mr-2 text-prime-purple" />
            Session History Log
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-black">Last Login</div>
                <div className="text-xs text-gray-600">Dec 29, 2025 at 10:30 AM</div>
              </div>
              <div className="text-xs text-green-600">Active</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-black">Previous Session</div>
                <div className="text-xs text-gray-600">Dec 28, 2025 at 3:45 PM</div>
              </div>
              <div className="text-xs text-gray-500">Ended</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-medium text-black">Login Attempts</div>
                <div className="text-xs text-gray-600">3 successful logins this week</div>
              </div>
              <div className="text-xs text-blue-600">Normal</div>
            </div>
          </div>
          <Button variant="outline" className="w-full justify-start border-prime-purple text-prime-purple hover:bg-prime-purple hover:text-white">
            <Eye className="w-4 h-4 mr-2" />
            View Full History
          </Button>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-black">
            <Lock className="w-5 h-5 mr-2 text-prime-purple" />
            Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Fingerprint className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-sm font-medium text-black">Face ID / Fingerprint Login</div>
                <div className="text-xs text-gray-600">Use biometric authentication for quick access</div>
              </div>
            </div>
            <Switch
              checked={faceIdEnabled}
              onCheckedChange={setFaceIdEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-sm font-medium text-black">Two-Factor Authentication</div>
                <div className="text-xs text-gray-600">Add an extra layer of security</div>
              </div>
            </div>
            <Switch
              checked={twoFactorEnabled}
              onCheckedChange={setTwoFactorEnabled}
            />
          </div>
        </CardContent>
      </Card>

      {/* Settings & Personalization */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg text-black">
            <Settings className="w-5 h-5 mr-2 text-prime-purple" />
            Settings & Personalization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Languages className="w-4 h-4 text-gray-500" />
              <div className="text-sm font-medium text-black">Language Preference</div>
            </div>
            <RadioGroup value={language} onValueChange={setLanguage} className="ml-7">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="english" id="english" />
                <Label htmlFor="english" className="text-sm text-black">English</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bangla" id="bangla" />
                <Label htmlFor="bangla" className="text-sm text-black">বাংলা</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-sm font-medium text-black">Push Notification Settings</div>
                <div className="text-xs text-gray-600">Receive alerts and updates</div>
              </div>
            </div>
            <Switch
              checked={pushNotifications}
              onCheckedChange={setPushNotifications}
            />
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Sun className="w-4 h-4 text-gray-500" />
              <div className="text-sm font-medium text-black">Product wise theme based app</div>
            </div>
            <RadioGroup value={theme} onValueChange={setTheme} className="ml-7">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prime" id="prime" />
                <Label htmlFor="prime" className="text-sm text-black">Prime Theme</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark" className="text-sm text-black">Dark Theme</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light" className="text-sm text-black">Light Theme</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-black">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="justify-start border-prime-purple text-prime-purple hover:bg-prime-purple hover:text-white" 
            onClick={() => onNavigate('analytics')}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button 
            variant="outline" 
            className="justify-start border-prime-purple text-prime-purple hover:bg-prime-purple hover:text-white" 
            onClick={handleChatSupport}
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </CardContent>
      </Card>

      {/* Chatbot & Support */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-black">Chatbot & Support</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full justify-start bg-prime-purple hover:bg-prime-purple/90 text-white"
            onClick={handleChatSupport}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat with Support
          </Button>
        </CardContent>
      </Card>

      {/* Help & Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium text-black">Help & Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-black hover:bg-prime-purple/10 hover:text-prime-purple">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Button>
          <Button variant="ghost" className="w-full justify-start text-black hover:bg-prime-purple/10 hover:text-prime-purple">
            <FileText className="w-4 h-4 mr-2" />
            Terms & Conditions
          </Button>
          <Button variant="ghost" className="w-full justify-start text-black hover:bg-prime-purple/10 hover:text-prime-purple">
            <Lock className="w-4 h-4 mr-2" />
            Privacy Policy
          </Button>
        </CardContent>
      </Card>

      {/* Logout Button */}
      <Card>
        <CardContent className="pt-6">
          <Button 
            onClick={handleLogoutClick}
            variant="destructive" 
            className="w-full bg-prime-red hover:bg-prime-red/90 text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </CardContent>
      </Card>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black">Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to logout? You will need to sign in again to access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-300 text-black hover:bg-gray-50">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleLogoutConfirm}
              className="bg-prime-red hover:bg-prime-red/90 text-white"
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProfilePage;
