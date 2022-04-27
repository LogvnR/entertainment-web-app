import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as EmptyBookmarkIcon } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as FullBookmarkIcon } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-category-tv.svg';
import classes from '../../Styles/ContentCard.module.css';

interface Props {
  year: number;
  category: string;
  rating: string;
  title: string;
  image: string;
}

const ContentCard: FC<Props> = ({ year, category, rating, title, image }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkHandler = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className={classes.container}>
      <div className={classes['photo-container']}>
        <div className={classes['bookmark-container']}>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className={classes['bookmark-circle']}
            onClick={bookmarkHandler}
          >
            {!isBookmarked ? <EmptyBookmarkIcon /> : <FullBookmarkIcon />}
          </motion.div>
        </div>

        <img className={classes.image} src={image} alt="" />
      </div>
      <div className={classes['details-container']}>
        <p className={classes.details}>
          <span className={classes.text}>{year}</span>{' '}
          <span className={classes.dot}>&#x2022;</span>{' '}
          <span className={classes.text}>
            {category === 'Movie' ? <MovieIcon /> : <TvSeriesIcon />} {category}
          </span>{' '}
          <span className={classes.dot}>&#x2022;</span>{' '}
          <span className={classes.text}>{rating}</span>
        </p>
        <p className={classes.title}>{title}</p>
      </div>
    </div>
  );
};

export default ContentCard;
