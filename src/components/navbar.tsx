'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAuthHook from '@/hooks/auth-hook';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function Navbar() {
  const { isLoggedIn } = useAuthHook();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchConnectionStatus() {
      setLoggedIn(await isLoggedIn());
    }
    fetchConnectionStatus();
  }, [isLoggedIn]);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container-fluid p-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mica
            </motion.span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              to="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              to="#comparison"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Comparison
            </Link>
            <Link
              to="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {!loggedIn ? (
              <>
                <AnimatedButton variant="outline" size="sm">
                  <a href="/login">Log in</a>
                </AnimatedButton>
                <AnimatedButton size="sm">
                  <a href="/register">Get Started</a>
                </AnimatedButton>
              </>
            ) : (
              <AnimatedButton size="sm">
                <a href="/dashboard">Dashboard</a>
              </AnimatedButton>
            )}
          </div>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="container py-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              <Link
                to="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="#comparison"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparison
              </Link>
              <Link
                to="#pricing"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" size="sm" className="justify-start">
                  Log in
                </Button>
                <Button size="sm" className="justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
