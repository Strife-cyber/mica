import { SaleItem } from '@/lib';
import { useCrudHook } from './crud-hook';

const useSaleItemHook = () => useCrudHook<SaleItem>('/sale_item');
export default useSaleItemHook;
