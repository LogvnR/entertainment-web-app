import create from 'zustand';
import { Content } from './types';

interface AppStore {
  content: Content[];
  setContent: (data: Content) => void;
  updateContent: (update: Content[]) => void;
  search: string;
  setSearch: (search: string) => void;
  screenWidth: number;
  setScreenWidth: (screenWidth: number) => void;
}

const useStore = create<AppStore>((set) => ({
  content: [], // The main data the each component draws and filters from. Updating this will update each component
  setContent: (
    data: Content // Ran on page load to populate each component with the correct data
  ) =>
    set((state) => {
      return {
        content: [...state.content, data],
      };
    }),
  updateContent: (
    update: Content[] // Updates the main 'content' array when a new bookmark is added
  ) =>
    set((state) => {
      return {
        content: update,
      };
    }),
  search: '', // Controls the users search term to compare against the main content array & filter results of the search
  setSearch: (search: string) => set({ search }), // This is what populates 'search' when a use types in the input
  screenWidth: 0, // Screen width so components know what the size of the display is so they can change accordingly
  setScreenWidth: (screenWidth: number) => set({ screenWidth }), // This is ran whenever the display size changes
}));

export default useStore;
