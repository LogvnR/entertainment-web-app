import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import useStore from '../../Helpers/store';

import classes from '../../Styles/TrendingCard.module.css';

import { ReactComponent as EmptyBookmarkIcon } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as FullBookmarkIcon } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-category-tv.svg';

interface Props {
  className: string;
  year: number;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  category: string;
  rating: string;
  title: string;
  image: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const TrendingCard: FC<Props> = ({
  className,
  year,
  category,
  rating,
  title,
  image,
  thumbnail,
  isBookmarked,
  isTrending,
}) => {
  const [clickedBookmarked, setClickedBookmarked] = useState(isBookmarked);
  const { content, updateContent } = useStore();

  const addToBookmarks = () => {
    const objIndex = content.findIndex((obj) => obj.title === title);
    console.log(content[objIndex]);
    content[objIndex].isBookmarked = true;
    updateContent(content);
  };

  const removeFromBookmarks = () => {
    const objIndex = content.findIndex((obj) => obj.title === title);
    console.log(content[objIndex]);
    content[objIndex].isBookmarked = false;
    updateContent(content);
  };

  const bookmarkHandler = () => {
    if (clickedBookmarked) {
      setClickedBookmarked(false);
      removeFromBookmarks();
    } else {
      setClickedBookmarked(true);
      addToBookmarks();
    }
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
            {!clickedBookmarked ? <EmptyBookmarkIcon /> : <FullBookmarkIcon />}
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
