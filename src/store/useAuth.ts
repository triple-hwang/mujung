import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedUserId = localStorage.getItem('user_id');
        setEmail(storedEmail);
        setUserId(storedUserId);
    }, []);

    return { email, userId };
};