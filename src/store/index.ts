import create from "zustand";
import { USERS } from "../data/users";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  authenticate: (email: string, password: string) => void;
}

const useStore = create<AuthState>((set) => ({
  user: null,
  authenticate: async (email, password) => {
    window.setTimeout(() => {
      if (
        USERS.some((user) => user.email === email && user.password === password)
      ) {
        set({ user: { email, password } });
      }
    }, 2000);
  },
}));

export { useStore };
