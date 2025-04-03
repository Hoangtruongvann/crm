'use client';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [auth, setAuth] = useState<Boolean>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token)
            setAuth(true);

        if (!token)
            router.push('/login')
    }, [auth])

    if (!auth) return;

    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
