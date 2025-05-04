import { PurchaseItem } from '@/lib';
import { useCrudHook } from './crud-hook';

const usePurchaseItemHook = () => useCrudHook<PurchaseItem>('/purchase_item');
export default usePurchaseItemHook;
