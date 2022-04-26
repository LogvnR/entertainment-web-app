import { FC } from 'react';
import useStore from '../Helpers/store';

import classes from '../Styles/Home.module.css';
import Recommended from './Recommended';
import Trending from './Trending';
import Search from './UI/Search';

const Home: FC = () => {
  const { setTrending } = useStore();

  return (
    <section className={classes.container}>
      <Search placeholder="movies and TV series" />
      <Trending />
      <Recommended />
    </section>
  );
};

export default Home;
