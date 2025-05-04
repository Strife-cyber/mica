import api from './api';
import { User } from '@/lib';
import { useState } from 'react';
import useSecureCookie from './secure-cookie';

const useAuthHook = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { setCookie, removeCookie } = useSecureCookie();

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);

    try {
      const response = await api.post('/register', { username: name, email, password });

      if (isSuccess(response.status)) {
        return await login(email, password);
      }

      console.error('Server error during registration:', response.data);
      return response.data;
    } catch (error) {
      handleError('Registration', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      const response = await api.post('/login', { identifier: email, password });

      if (isSuccess(response.status)) {
        const token = response.data.token;

        if (token) {
          setCookie('token', token);
          return true;
        }

        console.warn('Login successful but no token received.');
        return false;
      }

      console.error('Login failed with server error:', response.data);
      return false;
    } catch (error) {
      handleError('login', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    removeCookie('token');
  };

  const isLoggedIn = async () => {
    const response = await api.get('/status');
    if (response.data) return true;
    return false;
  };

  const profile = async () => {
    setLoading(true);

    try {
      const response = await api.get('/profile');
      const data = response.data;
      return {
        name: data.username,
        email: data.email,
        role: data.role,
      } as User;
    } catch (error) {
      handleError('fetching profile', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const isSuccess = (status: number) => status >= 200 && status < 300;

  const handleError = (context: string, error: unknown) => {
    const message = error instanceof Error ? error.message : 'Unknown error';
    setError(`${context}: ${message}`);
    console.error(`An error occurred during ${context}:`, error);
  };

  const resetError = () => setError(null);

  return {
    error,
    login,
    logout,
    profile,
    loading,
    register,
    isLoggedIn,
    resetError,
  };
};

export default useAuthHook;
