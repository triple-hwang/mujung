import { create } from 'zustand';

interface ModalStore {
    openId: string | null;
    setOpenId: (id: string | null) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    openId: null,
    setOpenId: (id) => set({ openId: id }),
}));