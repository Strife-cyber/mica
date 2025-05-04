import { Sale } from '@/lib';
import { useCrudHook } from './crud-hook';

const useSaleHook = () => useCrudHook<Sale>('/sale');
export default useSaleHook;
