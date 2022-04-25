import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import classes from '../../Styles/TrendingCard.module.css';

import { ReactComponent as EmptyBookmarkIcon } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as FullBookmarkIcon } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-category-tv.svg';

interface Props {
  className: string;
  year: number;
  category: string;
  rating: string;
  title: string;
  image: string;
}

const TrendingCard: FC<Props> = ({
  className,
  year,
  category,
  rating,
  title,
  image,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkHandler = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <motion.div className={`${classes.container} ${className}`}>
      <div className={classes.info}>
        <div className={classes['bookmark-container']}>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className={classes['bookmark-circle']}
            onClick={bookmarkHandler}
          >
            {!isBookmarked ? <EmptyBookmarkIcon /> : <FullBookmarkIcon />}
          </motion.div>
        </div>
        <div className={classes['details-container']}>
          <p className={classes.details}>
            <span className={classes.text}>{year}</span>{' '}
            <span className={classes.dot}>&#x2022;</span>{' '}
            <span className={classes.text}>
              {category === 'Movie' ? <MovieIcon /> : <TvSeriesIcon />}{' '}
              {category}
            </span>{' '}
            <span className={classes.dot}>&#x2022;</span>{' '}
            <span className={classes.text}>{rating}</span>
          </p>
          <p className={classes.title}>{title}</p>
        </div>
      </div>
      <img className={classes.image} src={image} alt="" />
    </motion.div>
  );
};

export default TrendingCard;
