import { Employee } from "@/lib";
import { useCrudHook } from "./crud-hook";

const useEmployeeHook = () => useCrudHook<Employee>('/employee');

export default useEmployeeHook;
