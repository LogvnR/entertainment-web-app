import { FC } from 'react';

import { Content } from '../Helpers/types';

import classes from '../Styles/Display.module.css';
import BookmarkCard from './UI/BookmarkCard';

interface Props {
  content: Content[];
  title: string;
}

const BookmarkDisplay: FC<Props> = ({ content, title }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.content}>
        {content.map((data: any) => (
          <BookmarkCard
            year={data.year}
            title={data.title}
            rating={data.rating}
            category={data.category}
            image={data.thumbnail.regular.small}
            thumbnail={data.thumbnail}
            isBookmarked={data.isBookmarked}
            isTrending={data.isTrending}
            key={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkDisplay;
