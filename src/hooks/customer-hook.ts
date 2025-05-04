import { Customer } from '@/lib';
import { useCrudHook } from './crud-hook';

const useCustomerHook = () => useCrudHook<Customer>('/customer');
export default useCustomerHook;
