import { FC, useState } from 'react';

import useStore from '../Helpers/store';
import { Content } from '../Helpers/types';

import classes from '../Styles/Home.module.css';
import Display from './Display';
import Trending from './Trending';
import Search from './UI/Search';
import SearchResults from './SearchResults';

const Home: FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { content } = useStore();

  const recommended = content.filter((recommendation: Content) => {
    if (recommendation.isTrending !== true) {
      return recommendation;
    }
    return false;
  });

  return (
    <section className={classes.container}>
      <Search placeholder="movies and TV series" isSearching={setIsSearching} />
      {!isSearching && (
        <>
          <Trending />
          <Display content={recommended} title="Recommended for you" />
        </>
      )}
      {isSearching && <SearchResults content={content} />}
    </section>
  );
};

export default Home;
