import { create } from 'zustand';

interface AuthState {
    email: string | null;
    user_id: string | null;
    setAuth: (email: string, userId: string) => void;
}

export const useAuth = create<AuthState>((set) => ({
    email: null,
    user_id: null,
    setAuth: (email, user_id) => set({ email, user_id }),
}));