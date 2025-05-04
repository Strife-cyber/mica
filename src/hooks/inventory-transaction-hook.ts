import { InventoryTransaction } from '@/lib';
import { useCrudHook } from './crud-hook';

const useInventoryTransactionHook = () =>
  useCrudHook<InventoryTransaction>('/inventory_transaction');
export default useInventoryTransactionHook;
