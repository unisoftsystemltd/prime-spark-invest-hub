
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
            <Label htmlFor="username" className="text-sm">Username or Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="username"
                type="text"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`pl-10 bg-white border-gray-300/70 focus:border-prime-purple ${errors.username ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`pl-10 pr-10 bg-white border-gray-300/70 focus:border-prime-purple ${errors.password ? 'border-red-500' : ''}`}
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

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full text-xs py-2">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full text-xs py-2">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
