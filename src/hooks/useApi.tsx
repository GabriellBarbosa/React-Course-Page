import User from "../interfaces/User";
import { fetchData, postData } from "../api/fetchData";

interface AuthData {
    user: User | null; 
    activated: boolean;
}

function useApi() {
    async function getUser(): Promise<AuthData> {
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

    async function completeLesson(endpoint: string) {
        try {
            return await postData(endpoint);
        } catch {
            return false;
        }
    }

    return { getUser, completeLesson };
}

export default useApi;