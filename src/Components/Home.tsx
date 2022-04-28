import { FC, useState } from 'react';

import classes from '../Styles/Home.module.css';
import Recommended from './Recommended';
import Trending from './Trending';
import Search from './UI/Search';
import SearchResults from './SearchResults';

const Home: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(true);

  return (
    <section className={classes.container}>
      <Search placeholder="movies and TV series" isSearching={setIsSearching} />
      {!isSearching && (
        <>
          <Trending />
          <Recommended />
        </>
      )}
      {isSearching && <SearchResults />}
    </section>
  );
};

export default Home;
