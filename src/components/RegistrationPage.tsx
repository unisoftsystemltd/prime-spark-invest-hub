
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Camera, CheckCircle, User, Mail, Phone, MapPin, FileText, Eye } from 'lucide-react';

interface RegistrationPageProps {
  onBackToLogin: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onBackToLogin }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nid: '',
    dateOfBirth: '',
    address: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [eKYCData, setEKYCData] = useState({
    nidVerified: false,
    selfieCapture: false,
    liveCheck: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleNIDVerification = () => {
    // Simulate NID verification
    setTimeout(() => {
      setEKYCData(prev => ({ ...prev, nidVerified: true }));
    }, 2000);
  };

  const handleSelfieCapture = () => {
    // Simulate selfie capture
    setTimeout(() => {
      setEKYCData(prev => ({ ...prev, selfieCapture: true }));
    }, 1500);
  };

  const handleLiveCheck = () => {
    // Simulate live check
    setTimeout(() => {
      setEKYCData(prev => ({ ...prev, liveCheck: true }));
    }, 3000);
  };

  const handleCompleteRegistration = () => {
    // Complete registration and go back to login
    alert('Registration completed successfully! Please login with your credentials.');
    onBackToLogin();
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="nid">National ID (NID)</Label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="nid"
              type="text"
              placeholder="Enter your NID number"
              value={formData.nid}
              onChange={(e) => handleInputChange('nid', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              id="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <Button onClick={handleNextStep} className="w-full bg-prime-purple hover:bg-prime-purple/90">
        Continue to Password Setup
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a strong password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-1">
          Password must be at least 8 characters with numbers and symbols
        </p>
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.agreeTerms}
            onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
          />
          <Label htmlFor="terms" className="text-sm cursor-pointer">
            I agree to the{' '}
            <button className="text-prime-purple hover:underline">Terms & Conditions</button>
            {' '}and{' '}
            <button className="text-prime-purple hover:underline">Privacy Policy</button>
          </Label>
        </div>
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" onClick={handlePrevStep} className="flex-1">
          Back
        </Button>
        <Button 
          onClick={handleNextStep} 
          className="flex-1 bg-prime-purple hover:bg-prime-purple/90"
          disabled={!formData.agreeTerms}
        >
          Continue to eKYC
        </Button>
      </div>
    </div>
  );

  const renderEKYCStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-prime-dark mb-2">eKYC Verification</h3>
        <p className="text-gray-600 text-sm">Complete identity verification to activate your account</p>
      </div>

      {/* NID Verification */}
      <div className="border rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              eKYCData.nidVerified ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              {eKYCData.nidVerified ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <FileText className="w-4 h-4 text-gray-600" />
              )}
            </div>
            <div>
              <h4 className="font-medium">NID Verification</h4>
              <p className="text-sm text-gray-600">Verify your National ID</p>
            </div>
          </div>
          {!eKYCData.nidVerified && (
            <Button size="sm" onClick={handleNIDVerification} className="bg-prime-purple">
              Verify
            </Button>
          )}
        </div>
      </div>

      {/* Selfie Capture */}
      <div className="border rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              eKYCData.selfieCapture ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              {eKYCData.selfieCapture ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <Camera className="w-4 h-4 text-gray-600" />
              )}
            </div>
            <div>
              <h4 className="font-medium">Selfie Capture</h4>
              <p className="text-sm text-gray-600">Take a clear selfie</p>
            </div>
          </div>
          {!eKYCData.selfieCapture && eKYCData.nidVerified && (
            <Button size="sm" onClick={handleSelfieCapture} className="bg-prime-purple">
              <Camera className="w-4 h-4 mr-1" />
              Capture
            </Button>
          )}
        </div>
        
        {/* Dummy Camera View */}
        {eKYCData.nidVerified && !eKYCData.selfieCapture && (
          <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Camera will activate here</p>
            </div>
          </div>
        )}
      </div>

      {/* Live Check */}
      <div className="border rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              eKYCData.liveCheck ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              {eKYCData.liveCheck ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <Eye className="w-4 h-4 text-gray-600" />
              )}
            </div>
            <div>
              <h4 className="font-medium">Live Check</h4>
              <p className="text-sm text-gray-600">Verify you're a real person</p>
            </div>
          </div>
          {!eKYCData.liveCheck && eKYCData.selfieCapture && (
            <Button size="sm" onClick={handleLiveCheck} className="bg-prime-purple">
              Start Check
            </Button>
          )}
        </div>
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" onClick={handlePrevStep} className="flex-1">
          Back
        </Button>
        {eKYCData.nidVerified && eKYCData.selfieCapture && eKYCData.liveCheck && (
          <Button 
            onClick={handleCompleteRegistration} 
            className="flex-1 bg-prime-green hover:bg-prime-green/90"
          >
            Complete Registration
          </Button>
        )}
      </div>
    </div>
  );

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Personal Information';
      case 2: return 'Security Setup';
      case 3: return 'Identity Verification';
      default: return 'Registration';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-prime-purple to-prime-green flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="w-20 h-20 bg-prime-purple rounded-2xl flex items-center justify-center mx-auto">
            <div className="text-2xl font-bold text-white">PB</div>
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-prime-dark">Create Account</CardTitle>
            <CardDescription className="text-gray-600">
              {getStepTitle()} - Step {currentStep} of 3
            </CardDescription>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-prime-purple h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </CardHeader>
        
        <CardContent>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderEKYCStep()}
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onBackToLogin}
                className="text-prime-purple hover:text-prime-purple/80 font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationPage;
