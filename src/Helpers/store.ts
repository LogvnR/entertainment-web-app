import create from 'zustand';
import { Content } from './types';

interface AppStore {
  content: Content[];
  search: string;
  setContent: (data: Content) => void;
  updateContent: (update: Content[]) => void;
  setSearch: (search: string) => void;
  screenWidth: number;
  setScreenWidth: (screenWidth: number) => void;
}

const useStore = create<AppStore>((set) => ({
  content: [],
  search: '',
  searchResults: [],
  setContent: (data: Content) =>
    set((state) => {
      return {
        content: [...state.content, data],
      };
    }),
  updateContent: (update: Content[]) =>
    set((state) => {
      return {
        content: update,
      };
    }),
  setSearch: (search: string) => set({ search }),
  screenWidth: 0,
  setScreenWidth: (screenWidth: number) => set({ screenWidth }),
}));

export default useStore;
