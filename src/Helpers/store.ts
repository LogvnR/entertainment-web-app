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
  setTrending: (trend: Content) => void;
  setRecommended: (recommend: Content) => void;
  setSearch: (search: string) => void;
  setMovies: (movie: Content) => void;
  setShows: (show: Content) => void;
  setBookmarkedMovies: (markedMovie: Content) => void;
  setBookmarkedShows: (markedShow: Content) => void;
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
  setMovies: (movie: Content) => {
    set((state) => {
      return {
        movies: [...state.movies, movie],
      };
    });
  },
  setShows: (show: Content) => {
    set((state) => {
      return {
        shows: [...state.shows, show],
      };
    });
  },
  setSearch: (search: string) => set({ search }),
  setBookmarkedMovies: (markedMovie: Content) => {
    set((state) => {
      return {
        bookmarkedMovies: [...state.bookmarkedMovies, markedMovie],
      };
    });
  },
  setBookmarkedShows: (markedShow: Content) => {
    set((state) => {
      return {
        bookmarkedShows: [...state.bookmarkedShows, markedShow],
      };
    });
  },
}));

export default useStore;
