import { FC } from 'react';

import { Content } from '../Helpers/types';

import classes from '../Styles/Display.module.css';
import ContentCard from './UI/ContentCard';

interface Props {
  content: Content[];
  title: string;
}

const Display: FC<Props> = ({ content, title }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.content}>
        {content.map((data: any) => (
          <ContentCard
            year={data.year}
            title={data.title}
            rating={data.rating}
            category={data.category}
            thumbnail={data.thumbnail}
            isBookmarked={data.isBookmarked}
            key={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Display;
