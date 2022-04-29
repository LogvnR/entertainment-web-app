import { FC, useState } from 'react';
import useStore from '../Helpers/store';

import Search from './UI/Search';
import SearchResults from './SearchResults';

import classes from '../Styles/Bookmarks.module.css';
import BookmarkDisplay from './BookmarkDisplay';

const Bookmarks: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { bookmarkedMovies, bookmarkedShows } = useStore();

  const fullBookmarks = bookmarkedMovies.concat(bookmarkedShows);

  return (
    <section className={classes.container}>
      <Search isSearching={setIsSearching} placeholder="bookmarks" />
      {!isSearching && (
        <>
          <BookmarkDisplay
            content={bookmarkedMovies}
            title="Bookmarked Movies"
          />
          <BookmarkDisplay content={bookmarkedShows} title="Bookmarked Shows" />
        </>
      )}
      {isSearching && <SearchResults content={fullBookmarks} />}
    </section>
  );
};

export default Bookmarks;
