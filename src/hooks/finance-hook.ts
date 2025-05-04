import api from "./api"

const useFinanceHook = () => {
    const getFinanceData = async (startDate: Date, endDate: Date) => {
        try {
            const response = await api.get("/financial", {
                params: {
                    startDate, endDate
                }
            });
    
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
    
            console.log("An error occurred: ", response);
        } catch (error) {
            console.error(error);
        }
    }

    return { getFinanceData };
}

export default useFinanceHook;
