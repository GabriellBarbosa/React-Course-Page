import React from 'react';
import useApi from '../hooks/useApi';
import User from '../interfaces/User';

const AuthContext = React.createContext<{ user: User | null }>({ user: null });

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<{ user: User | null }>({ user: null });
    const { getUser } = useApi();

    React.useEffect(() => {
        getUser().then((response) => {
            setUser(response);
        });
    }, []);
    
    return (
        <AuthContext.Provider value={user}>{ children }</AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };