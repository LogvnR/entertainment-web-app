import create from 'zustand';
import { Content } from './types';

interface AppStore {
  trending: Content[];
  recommended: Content[];
  search: string;
  searchResults: Content[];
  setTrending: (trend: Content) => void;
  setRecommended: (recommend: Content) => void;
  setSearch: (search: string) => void;
  setSearchResults: (searched: Content) => void;
}

const useStore = create<AppStore>((set) => ({
  trending: [],
  recommended: [],
  search: '',
  searchResults: [],
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
  setSearch: (search: string) => set({ search }),
  setSearchResults: (searched: Content) => {
    set((state) => {
      return {
        searchResults: [...state.searchResults, searched],
      };
    });
  },
}));

export default useStore;
