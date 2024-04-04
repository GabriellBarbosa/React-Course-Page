import React from 'react';
import useApi from '../hooks/useApi';
import User from '../interfaces/User';

const AuthContext = React.createContext<{ user: User | null; loading: boolean }>({ 
    user: null, 
    loading: false
});

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const { getUser } = useApi();

    React.useEffect(() => {
        setLoading(true);
        getUser()
            .then((response) => {
                setUser(response.user);
            }).catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    
    return (
        <AuthContext.Provider value={{ user, loading }}>{ children }</AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };