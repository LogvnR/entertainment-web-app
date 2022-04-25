import { FC } from 'react';

import classes from '../Styles/Trending.module.css';
import Carousel from './UI/Carousel';

const Trending: FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Trending</h2>
      <Carousel />
    </div>
  );
};

export default Trending;
