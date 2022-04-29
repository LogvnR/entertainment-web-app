import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import useStore from '../../Helpers/store';
import { Content } from '../../Helpers/types';

import { ReactComponent as FullBookmarkIcon } from '../../assets/icon-bookmark-full.svg';
import { ReactComponent as MovieIcon } from '../../assets/icon-category-movie.svg';
import { ReactComponent as TvSeriesIcon } from '../../assets/icon-category-tv.svg';
import classes from '../../Styles/ContentCard.module.css';

interface Props {
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

const ContentCard: FC<Props> = ({
  year,
  category,
  rating,
  title,
  image,
  thumbnail,
  isBookmarked,
  isTrending,
}) => {
  const [clickedBookmarked, setClickedBookmarked] = useState(false);
  const { setContent } = useStore();

  const Item: Content = {
    title,
    thumbnail,
    year,
    category,
    rating,
    isBookmarked: true,
    isTrending,
  };

  const bookmarkHandler = () => {
    setClickedBookmarked(!clickedBookmarked);
  };

  useEffect(() => {
    if (clickedBookmarked && category === 'Movie') {
      setContent(Item, 'markedMovie');
    }

    if (clickedBookmarked && category === 'TV Series') {
      setContent(Item, 'markedShow');
    }
  }, [clickedBookmarked]);

  return (
    <div className={classes.container}>
      <div className={classes['photo-container']}>
        <div className={classes['bookmark-container']}>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className={classes['bookmark-circle']}
            onClick={bookmarkHandler}
          >
            <FullBookmarkIcon />
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
