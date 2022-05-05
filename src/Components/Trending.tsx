import { FC } from 'react';

import classes from '../Styles/Trending.module.css';
import Carousel from './UI/Carousel';

const Trending: FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Trending</h1>
      <Carousel />
    </div>
  );
};

export default Trending;
