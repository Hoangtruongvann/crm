'use client';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [auth, setAuth] = useState<boolean>();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token)
            router.push('/login')

        if (token)
            setAuth(true);
    }, [])

    if (!auth) return;

    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
