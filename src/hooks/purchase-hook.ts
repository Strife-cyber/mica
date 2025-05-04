import { Purchase } from '@/lib';
import { useCrudHook } from './crud-hook';

const usePurchaseHook = () => useCrudHook<Purchase>('/purchase');
export default usePurchaseHook;
