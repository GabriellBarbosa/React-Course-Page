import User from "../interfaces/User";

function useApi() {
    function getUser(): User | null {
        return { username: 'Gabriel' };
    }

    return { getUser };
}

export default useApi;