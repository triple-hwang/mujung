import { create } from 'zustand';

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