import { create } from 'zustand';
import {useEffect} from "react";
import { supabase } from '../lib/supabase';

interface AuthState {
    email: string | null;
    userId: string | null;
    setAuth: (email: string, userId: string) => void;
}

export const useAuth = create<AuthState>((set) => ({
    email: null,
    userId: null,
    setAuth: (email, userId) => set({ email, userId }),
}));

useEffect(() => {
    const getUser = async () => {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
            const email = data.user.email!;
            const userId = data.user.id;
            useAuth.getState().setAuth(email, userId);
        }
    };
    getUser();
}, []);