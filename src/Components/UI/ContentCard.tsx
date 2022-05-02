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
  const [clickedBookmarked, setClickedBookmarked] = useState(isBookmarked);
  const [thumbnailPhoto, setThumbnailPhoto] = useState(thumbnail.regular.small);
  const { content, updateContent, screenWidth } = useStore();

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

  useEffect(() => {
    if (screenWidth < 768) {
      setThumbnailPhoto(thumbnail.regular.small);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setThumbnailPhoto(thumbnail.regular.medium);
    } else {
      setThumbnailPhoto(thumbnail.regular.large);
    }
  }, [screenWidth]);

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
