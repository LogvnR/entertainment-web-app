import { FC, useState } from 'react';

import useStore from '../Helpers/store';

import classes from '../Styles/Home.module.css';
import Display from './Display';
import Trending from './Trending';
import Search from './UI/Search';
import SearchResults from './SearchResults';

const Home: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { movies, shows, recommended } = useStore();

  const fullList = movies.concat(shows);

  return (
    <section className={classes.container}>
      <Search placeholder="movies and TV series" isSearching={setIsSearching} />
      {!isSearching && (
        <>
          <Trending />
          <Display content={recommended} title="Recommended for you" />
        </>
      )}
      {isSearching && <SearchResults content={fullList} />}
    </section>
  );
};

export default Home;
