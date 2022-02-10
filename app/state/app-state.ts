import create from 'zustand';

type AuthState = {
  isAuth: boolean;
  setAuthStatus: (status: boolean) => void;
};

const authStore = create<AuthState>(set => ({
  isAuth: false,
  setAuthStatus: status => set({ isAuth: status }),
}));

export default authStore;
