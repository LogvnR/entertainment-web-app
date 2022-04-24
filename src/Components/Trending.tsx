import { FC } from 'react';

import classes from '../Styles/Trending.module.css';
import TrendingCard from './UI/TrendingCard';

const Trending: FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Trending</h2>
      <TrendingCard />
    </div>
  );
};

export default Trending;
