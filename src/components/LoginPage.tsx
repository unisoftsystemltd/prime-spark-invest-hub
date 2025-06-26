
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, User, Lock } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onRegister: () => void;
  onForgotPassword: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onRegister, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleLogin = () => {
    // Reset errors
    setErrors({ username: '', password: '' });
    
    // Simple validation
    let hasErrors = false;
    if (!username.trim()) {
      setErrors(prev => ({ ...prev, username: 'Username is required' }));
      hasErrors = true;
    }
    if (!password.trim()) {
      setErrors(prev => ({ ...prev, password: 'Password is required' }));
      hasErrors = true;
    }

    if (!hasErrors) {
      // Save login if remember me is checked
      if (rememberMe) {
        localStorage.setItem('rememberedUser', username);
      }
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-prime-purple to-prime-green flex items-center justify-center p-4">
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-sm">
        <CardHeader className="text-center space-y-3 pb-4">
          <div className="w-16 h-16 bg-prime-purple rounded-2xl flex items-center justify-center mx-auto">
            <div className="text-xl font-bold text-white">PB</div>
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-prime-dark">Welcome Back</CardTitle>
            <CardDescription className="text-gray-600 text-sm">
              Sign in to your Prime Bank Investment account
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4 px-6 pb-6">
          {/* Username Field */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm text-gray-700">Username or Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`pl-10 bg-white border-gray-300/70 focus:border-prime-purple placeholder:text-gray-500 ${errors.username ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm text-gray-700">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pl-10 pr-10 bg-white border-gray-300/70 focus:border-prime-purple placeholder:text-gray-500 ${errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer">
                Remember me
              </Label>
            </div>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs text-prime-purple hover:text-prime-purple/80 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <Button 
            onClick={handleLogin}
            className="w-full bg-prime-purple hover:bg-prime-purple/90 text-white py-2.5"
          >
            Sign In
          </Button>

          {/* Registration */}
          <div className="text-center">
            <p className="text-gray-600 text-xs">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onRegister}
                className="text-prime-purple hover:text-prime-purple/80 font-medium"
              >
                Register Now
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
