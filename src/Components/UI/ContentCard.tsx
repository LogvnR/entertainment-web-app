import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import useStore from '../../Helpers/store';

import { ReactComponent as EmptyBookmarkIcon } from '../../assets/icon-bookmark-empty.svg';
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
  isBookmarked: boolean;
}

const ContentCard: FC<Props> = ({
  year,
  category,
  rating,
  title,
  thumbnail,
  isBookmarked,
}) => {
  const [clickedBookmarked, setClickedBookmarked] = useState(isBookmarked);
  const [thumbnailPhoto, setThumbnailPhoto] = useState(thumbnail.regular.small);
  const { content, updateContent, screenWidth } = useStore();

  const updateBookmarks = () => {
    // Finds the index of the object with a matching title
    const objIndex = content.findIndex((obj) => obj.title === title);
    // Toggles bookmarked state
    if (clickedBookmarked) {
      content[objIndex].isBookmarked = false;
    } else {
      content[objIndex].isBookmarked = true;
    }
    //Updates main data Array
    updateContent(content);
  };

  const bookmarkHandler = () => {
    setClickedBookmarked(!clickedBookmarked);
    updateBookmarks();
  };

  // Updates thumbnail image based on Screen Size
  useEffect(() => {
    if (screenWidth < 768) {
      setThumbnailPhoto(thumbnail.regular.small);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setThumbnailPhoto(thumbnail.regular.medium);
    } else {
      setThumbnailPhoto(thumbnail.regular.large);
    }
  }, [
    screenWidth,
    thumbnail.regular.small,
    thumbnail.regular.medium,
    thumbnail.regular.large,
  ]);

  return (
    <div className={classes.container}>
      <div className={classes['photo-container']}>
        <div className={classes['bookmark-container']}>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className={classes['bookmark-circle']}
            onClick={bookmarkHandler}
          >
            {!clickedBookmarked ? <EmptyBookmarkIcon /> : <FullBookmarkIcon />}
          </motion.div>
        </div>

        <img className={classes.image} src={thumbnailPhoto} alt="" />
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
