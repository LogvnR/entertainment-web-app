import create from 'zustand';
import { Content } from './types';

interface AppStore {
  trending: Content[];
  recommended: Content[];
  setTrending: (trend: Content) => void;
  setRecommended: (recommend: Content) => void;
}

const useStore = create<AppStore>((set) => ({
  trending: [],
  recommended: [],
  setTrending: (trend: Content) => {
    set((state) => {
      return {
        trending: [...state.trending, trend],
      };
    });
  },
  setRecommended: (recommendation: Content) => {
    set((state) => {
      return {
        recommended: [...state.recommended, recommendation],
      };
    });
  },
}));

export default useStore;
