import { useState } from 'react';
import useAuthHook from '@/hooks/auth-hook';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Link, useNavigate } from 'react-router-dom';
import FadeIn from '@/components/animations/fade-in';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function LoginPage() {
  const router = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, profile, error, setError, resetError } = useAuthHook();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetError();
    setIsLoading(true);

    const result = await login(email, password);

    setIsLoading(false);

    if (result === true) {
      const prof = await profile();
      const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60;
      const plan = prof?.plan[0];
      console.log(Date.now() - new Date(plan!.updatedAt).getTime());

      if ((Date.now() - new Date(plan!.updatedAt).getTime() > TWO_DAYS_IN_MS) && (plan!.plan === "free")) {
        // Two days have passed since the plan was updated
        setError("You have been on the free plan for far too long now. Please upgrade.")
        setTimeout(() => router('/business'), 10000);

        return;
      }

      console.log(prof);
      router('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
          <Card className="w-full min-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold">Email or Username</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-bold" htmlFor="password">
                      Password
                    </Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>
                <AnimatedButton type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    'Sign in'
                  )}
                </AnimatedButton>

                {error && (
                  <p className="text-sm text-center text-red-500">
                    {error || 'Login failed. Please try again.'}
                  </p>
                )}
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
