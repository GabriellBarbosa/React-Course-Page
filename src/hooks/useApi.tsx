import fetchData from "../api/fetchData";
import User from "../interfaces/User";

function useApi() {
    async function getUser(): Promise<{ user: User | null; activated: boolean }> {
        const response = await userRequest();
        return response;
    }

    async function userRequest() {
        try {
            return await fetchData('/user');
        } catch {
            return { user: null };
        }

    }

    return { getUser };
}

export default useApi;