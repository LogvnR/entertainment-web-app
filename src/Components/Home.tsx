import { FC } from 'react';

import classes from '../Styles/Home.module.css';
import Trending from './Trending';
import Search from './UI/Search';

const Home: FC = () => {
  return (
    <div className={classes.container}>
      <Search placeholder="movies and TV series" />
      <Trending />
    </div>
  );
};

export default Home;
