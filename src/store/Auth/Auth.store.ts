import { create } from 'zustand';
//Models
import { AuthActionPayloady } from '../../models/index';

interface AuthProps {
    user: AuthActionPayloady;
    setUser: (user: AuthActionPayloady) => void;
}

const useAuth = create<AuthProps>()((set) => ({
    user: {} as AuthActionPayloady,
    setUser: (user: AuthActionPayloady)=> { set({ user: user }) },
}));

export { useAuth }