import create from 'zustand';
import { Content } from './types';

interface AppStore {
  trending: Content[];
  recommended: Content[];
  movies: Content[];
  shows: Content[];
  bookmarkedMovies: Content[];
  bookmarkedShows: Content[];
  search: string;
  setContent: (data: Content, type: string) => void;
  setSearch: (search: string) => void;
  screenWidth: number;
  setScreenWidth: (screenWidth: number) => void;
}

const useStore = create<AppStore>((set) => ({
  trending: [],
  recommended: [],
  movies: [],
  shows: [],
  search: '',
  searchResults: [],
  bookmarkedMovies: [],
  bookmarkedShows: [],
  setContent: (data: Content, type: string) => {
    switch (type) {
      case 'trending':
        set((state) => {
          return {
            trending: [...state.trending, data],
          };
        });
        break;
      case 'recommended':
        set((state) => {
          return {
            recommended: [...state.recommended, data],
          };
        });
        break;
      case 'movie':
        set((state) => {
          return {
            movies: [...state.movies, data],
          };
        });
        break;
      case 'show':
        set((state) => {
          return {
            shows: [...state.shows, data],
          };
        });
        break;
      case 'markedMovie':
        set((state) => {
          return {
            bookmarkedMovies: [...state.bookmarkedMovies, data],
          };
        });
        break;
      case 'markedShow':
        set((state) => {
          return {
            bookmarkedShows: [...state.bookmarkedShows, data],
          };
        });
        break;
      default:
        return;
    }
  },
  setSearch: (search: string) => set({ search }),
  screenWidth: 0,
  setScreenWidth: (screenWidth: number) => set({ screenWidth }),
}));

export default useStore;
