import { FC } from 'react';

import classes from '../../Styles/TrendingCard.module.css';
import image from '../../assets/thumbnails/beyond-earth/trending/small.jpg';
import { ReactComponent as BookmarkIcon } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';

const TrendingCard: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <div className={classes['bookmark-container']}>
          <div className={classes['bookmark-circle']}>
            <BookmarkIcon />
          </div>
        </div>
        <div className={classes['details-container']}>
          <p className={classes.details}>
            <span className={classes.text}>2019</span>{' '}
            <span className={classes.dot}>&#x2022;</span>{' '}
            <span className={classes.text}>{<MovieIcon />} Movie</span>{' '}
            <span className={classes.dot}>&#x2022;</span>{' '}
            <span className={classes.text}>PG</span>
          </p>
          <p className={classes.title}>Beyond Earth</p>
        </div>
      </div>
      <img className={classes.image} src={image} alt="" />
    </div>
  );
};

export default TrendingCard;
