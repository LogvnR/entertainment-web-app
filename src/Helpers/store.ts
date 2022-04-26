import create from 'zustand';
import { Content } from './types';

interface AppStore {
  trending: Content[];
  recommended: Content[];
  setTrending: (trend: Content) => void;
}

const useStore = create<AppStore>((set) => ({
  trending: [],
  recommended: [],
  setTrending: (trend: Content) => {
    set((state) => {
      return {
        trending: { ...state.trending, trend },
      };
    });
  },
}));

export default useStore;
