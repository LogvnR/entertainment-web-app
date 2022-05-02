import { FC, useState } from 'react';
import useStore from '../Helpers/store';
import { Content } from '../Helpers/types';

import Search from './UI/Search';
import SearchResults from './SearchResults';

import classes from '../Styles/Movies.module.css';
import Display from './Display';

const Movies: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { content } = useStore();

  const movies = content.filter((movie: Content) => {
    if (movie.category === 'Movie') {
      return movie;
    }
    return false;
  });

  return (
    <section className={classes.container}>
      <Search isSearching={setIsSearching} placeholder="movies" />
      {!isSearching && <Display content={movies} title="Movies" />}
      {isSearching && <SearchResults content={movies} />}
    </section>
  );
};

export default Movies;
