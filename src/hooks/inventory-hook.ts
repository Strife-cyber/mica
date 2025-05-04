import { InventoryItem } from '@/lib';
import { useCrudHook } from './crud-hook';

const useInventoryHook = () => useCrudHook<InventoryItem>('/inventory');
export default useInventoryHook;
