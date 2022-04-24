import { FC } from 'react';

import classes from '../Styles/Home.module.css';
import Search from './UI/Search';

const Home: FC = () => {
  return (
    <div className={classes.container}>
      <Search placeholder="movies and TV series" />
    </div>
  );
};

export default Home;
