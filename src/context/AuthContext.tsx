import React from 'react';
import useApi from '../hooks/useApi';
import User from '../interfaces/User';

const AuthContext = React.createContext<User | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<User | null>(null);
    const { getUser } = useApi();

    React.useEffect(() => {
        setUser(getUser());
    }, []);
    
    return (
        <AuthContext.Provider value={user}>{ children }</AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };