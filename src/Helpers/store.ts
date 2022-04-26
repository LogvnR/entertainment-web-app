import create from 'zustand';
import { Content } from './types';

interface AppStore {
  trending: Content[];
  recommended: Content[];
  // setTrending: (trend: Content) => void;
}

const useStore = create<AppStore>((set) => ({
  trending: [],
  recommended: [],
  // setTrending: (trend: Content) => {
  //   set((state) => {
  //     state.trending.push(trend);
  //   });
  // },
}));

export default useStore;
