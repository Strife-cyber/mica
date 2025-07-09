'use client';

import type React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthHook from '@/hooks/auth-hook';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import FadeIn from '@/components/animations/fade-in';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function SignUpPage() {
  const router = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPartOfBusiness, setIsPartOfBusiness] = useState(false);

  const { register, error, resetError } = useAuthHook();

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetError();
    setIsLoading(true);

    const result = await register(name, email, password);

    setIsLoading(false);

    if (result === true && isPartOfBusiness) {
      router('/business/join');
      return;
    }

    if (result === true) {
      router('/business');
      return;
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;

    setPasswordStrength(strength);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    calculatePasswordStrength(newPassword);
  };

  const getStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength <= 25) return 'Weak';
    if (passwordStrength <= 50) return 'Fair';
    if (passwordStrength <= 75) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 25) return 'bg-red-500';
    if (passwordStrength <= 50) return 'bg-yellow-500';
    if (passwordStrength <= 75) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <div className="container-fluid flex flex-col items-center justify-center min-h-screen py-12">
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to home</span>
            </Link>
          </Button>
        </div>

        <FadeIn>
          <Link to="/" className="flex items-center justify-center mb-8">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Mica
            </span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Card className="w-full min-w-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
              <CardDescription className="text-center">
                Enter your information to get started with Mica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                  {password && (
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Password strength:</span>
                        <span
                          className={
                            passwordStrength <= 25
                              ? 'text-red-500'
                              : passwordStrength <= 50
                                ? 'text-yellow-500'
                                : passwordStrength <= 75
                                  ? 'text-blue-500'
                                  : 'text-green-500'
                          }
                        >
                          {getStrengthText()}
                        </span>
                      </div>
                      <Progress value={passwordStrength} className={`h-1 ${getStrengthColor()}`} />
                      <ul className="text-xs text-muted-foreground mt-2 space-y-1 list-disc pl-4">
                        <li className={password.length >= 8 ? 'text-green-500' : ''}>
                          At least 8 characters
                        </li>
                        <li className={/[A-Z]/.test(password) ? 'text-green-500' : ''}>
                          At least one uppercase letter
                        </li>
                        <li className={/[0-9]/.test(password) ? 'text-green-500' : ''}>
                          At least one number
                        </li>
                        <li className={/[^A-Za-z0-9]/.test(password) ? 'text-green-500' : ''}>
                          At least one special character
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id='business' checked={isPartOfBusiness} onCheckedChange={() => setIsPartOfBusiness((prev) => (!prev)) }/>
                  <Label htmlFor='business' className='text-sm font-normal'>
                    Are you already part of a business affiliated with Mica?
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                <AnimatedButton
                  type="submit"
                  className="w-full"
                  disabled={isLoading || passwordStrength < 50}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </div>
                  ) : (
                    'Create account'
                  )}
                </AnimatedButton>

                {error && (
                  <p className="text-sm text-center text-red-500">
                    {error || 'Signup failed. Please try again.'}
                  </p>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
