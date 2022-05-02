import { FC, useState } from 'react';
import useStore from '../Helpers/store';
import { Content } from '../Helpers/types';

import Search from './UI/Search';
import SearchResults from './SearchResults';

import classes from '../Styles/Bookmarks.module.css';
import Display from './Display';

const Bookmarks: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { content } = useStore();

  const bookmarkedMovies = content.filter((markedMovie: Content) => {
    if (markedMovie.category === 'Movie' && markedMovie.isBookmarked === true) {
      return markedMovie;
    }
    return false;
  });

  const bookmarkedShows = content.filter((markedShow: Content) => {
    if (
      markedShow.category === 'TV Series' &&
      markedShow.isBookmarked === true
    ) {
      return markedShow;
    }
    return false;
  });

  const fullBookmarks = bookmarkedMovies.concat(bookmarkedShows);

  return (
    <section className={classes.container}>
      <Search isSearching={setIsSearching} placeholder="bookmarks" />
      {!isSearching && (
        <>
          <Display content={bookmarkedMovies} title="Bookmarked Movies" />
          <Display content={bookmarkedShows} title="Bookmarked Shows" />
        </>
      )}
      {isSearching && <SearchResults content={fullBookmarks} />}
    </section>
  );
};

export default Bookmarks;
