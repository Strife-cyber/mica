import { Supplier } from '@/lib';
import { useCrudHook } from './crud-hook';

const useSupplierHook = () => useCrudHook<Supplier>('/supplier');
export default useSupplierHook;
