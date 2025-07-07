import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        setEmail(storedEmail);
    }, []);

    return { email };
};