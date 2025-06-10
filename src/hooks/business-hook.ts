import { Business } from '@/lib';
import { useCrudHook } from './crud-hook';
import api from './api';

const useBusinessHook = () => {
    const createBusiness = async (formData: FormData) => {
        try {
            const response = await api.post('/business', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.status === 200 || response.status === 201) {
                return response.data as Business;
            }
            return null;
        } catch (error) {
            console.error(`Create in /business`, error);
            return null;
        }
    }

    const { getAll, getOne, update, remove } = useCrudHook<Business>('/business');

    return {
        getAll, getOne,
        update, remove,
        createBusiness
    }
};

export default useBusinessHook;
