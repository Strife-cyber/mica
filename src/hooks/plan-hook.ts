import { Plan } from '@/lib';
import { useCrudHook } from './crud-hook';

const usePlanHook = () => useCrudHook<Plan>('/plans');
export default usePlanHook;
