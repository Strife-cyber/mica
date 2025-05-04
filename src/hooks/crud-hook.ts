import api from './api';
import { useState } from 'react';

export function useCrudHook<T>(endpoint: string) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const isSuccess = (status: number) => status >= 200 && status < 300;

  const handleError = (context: string, error: unknown) => {
    const message = error instanceof Error ? error.message : 'Unknown error';
    setError(`${context}: ${message}`);
    console.error(`An error occurred during ${context}:`, error);
  };

  const resetError = () => setError(null);

  const getAll = async (filters: any = {}) => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, { params: filters });
      if (isSuccess(response.status)) {
        return response.data as T[];
      }
      return [];
    } catch (error) {
      handleError(`Get All from ${endpoint}`, error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getOne = async (id: number) => {
    setLoading(true);
    try {
      const response = await api.get(`${endpoint}/${id}`);
      if (isSuccess(response.status)) {
        return response.data as T;
      }
      return null;
    } catch (error) {
      handleError(`Get One from ${endpoint}`, error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const create = async (item: Partial<T>) => {
    setLoading(true);
    try {
      const response = await api.post(endpoint, item);
      if (isSuccess(response.status)) {
        return response.data as T;
      }
      return null;
    } catch (error) {
      handleError(`Create in ${endpoint}`, error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const update = async (id: number, updates: Partial<T>) => {
    setLoading(true);
    try {
      const response = await api.put(`${endpoint}/${id}`, updates);
      if (isSuccess(response.status)) {
        return response.data as T;
      }
      return null;
    } catch (error) {
      handleError(`Update in ${endpoint}`, error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id: number) => {
    setLoading(true);
    try {
      const response = await api.delete(`${endpoint}/${id}`);
      if (isSuccess(response.status)) {
        return true;
      }
      return false;
    } catch (error) {
      handleError(`Delete in ${endpoint}`, error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    getAll,
    getOne,
    create,
    update,
    remove,
    loading,
    error,
    resetError,
  };
}
