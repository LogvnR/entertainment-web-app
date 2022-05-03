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
  // ==== This is the main group of data the each component draws and filters from. Updating this will change the content in each component
  content: [],
  // ==== This is ran on page load to populate each component with the same pool on data
  setContent: (data: Content) =>
    set((state) => {
      return {
        content: [...state.content, data],
      };
    }),
  // ==== Responsible for updating the main 'content' array when a new bookmark is added
  updateContent: (update: Content[]) =>
    set((state) => {
      return {
        content: update,
      };
    }),
  // ==== This controls the users search term to compare against the main content array to filter results of the search
  search: '',
  // ==== This holds all of the search results to be displayed
  searchResults: [],
  // ==== This is what populates 'search' when a use types in the input
  setSearch: (search: string) => set({ search }),
  // ==== Base number for screen width that components like the ContentCards or the Navbar use to know what the size of the display is so they can change accordingly
  screenWidth: 0,
  // ==== This is ran whenever the display size changes
  setScreenWidth: (screenWidth: number) => set({ screenWidth }),
}));

export default useStore;
