import create from "zustand";
import { USERS } from "../data/users";

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  authenticate: (email: string, password: string) => Promise<boolean>;
}

const useStore = create<AuthState>((set) => ({
  user: null,
  authenticate: async (email, password) => {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        if (
          USERS.some(
            (user) => user.email === email && user.password === password
          )
        ) {
          resolve(true);
          set({ user: { email, password } });
        } else {
          reject(
            "Wrong email and/or password. Try editing %PROJECT_ROOT%/src/data/users.ts."
          );
        }
      }, 2000);
    });
  },
}));

export { useStore };
