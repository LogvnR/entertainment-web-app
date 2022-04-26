import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as EmptyBookmarkIcon } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as FullBookmarkIcon } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import classes from '../../Styles/ContentCard.module.css';
import content from '../../data.json';

const ContentCard: FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const bookmarkHandler = () => {
    setIsBookmarked(!isBookmarked);
  };

  const image = content[5].thumbnail.regular.small;
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
          <span className={classes.text}>2019</span>{' '}
          <span className={classes.dot}>&#x2022;</span>{' '}
          <span className={classes.text}>
            {/* {category === 'Movie' ? <MovieIcon /> : <TvSeriesIcon />}{' '}
              {category} */}
            <MovieIcon /> Movie
          </span>{' '}
          <span className={classes.dot}>&#x2022;</span>{' '}
          <span className={classes.text}>E</span>
        </p>
        <p className={classes.title}>The Great Lands</p>
      </div>
    </div>
  );
};

export default ContentCard;
